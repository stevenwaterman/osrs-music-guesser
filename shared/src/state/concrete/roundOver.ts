import { Avatar } from "../../avatars.js";
import { Song } from "../../songTypes.js";
import { pick, shuffle } from "../../util.js";
import { pickVisibleState } from "../visibleState.js";
import { getDifficultyConfig } from "../difficulty.js";
import { StateStore } from "../store.js";
import { ClientActions, Transport } from "../transport.js";
import { RoundResult } from "../types.js";
import { GameOver } from "./gameOver.js";
import { RoundActive } from "./roundActive.js";

type GameState = {
  id: string;
  owner: string;
  type: "singleplayer" | "private" | "public";
  difficulty: "tutorial" | "normal" | "hard" | "extreme";
  roundHistory: Record<number, Song>;
  songs: Song[];
  songUrl: string;
  songStartFraction: number;
  round: number;
  roundStarted: Date;
  song: Song;
};
const publicGameKeys = [
  "id",
  "owner",
  "type",
  "difficulty",
  "roundHistory",
  "round",
  "songUrl",
  "songStartFraction",
  "song",
] as const;

type UserState = {
  avatar: Avatar;
  transport: Transport;
  roundHistory: Record<number, RoundResult>;
  health: number;
};
const publicUserKeys = ["avatar", "roundHistory", "health"] as const;
const privateUserKeys = [...publicUserKeys] as const;

type SpectatorState = {
  avatar: Avatar;
  transport: Transport;
  roundHistory: Record<number, RoundResult>;
};
const publicSpectatorKeys = ["avatar", "roundHistory"] as const;
const privateSpectatorKeys = [...publicSpectatorKeys] as const;

export class RoundOver {
  public readonly stateName = "RoundOver" as const;
  public get visibleState() {
    return pickVisibleState({
      game: this.game,
      publicGameKeys,
      users: this.users,
      publicUserKeys,
      privateUserKeys,
      spectators: this.spectators,
      publicSpectatorKeys,
      privateSpectatorKeys,
    });
  }

  constructor(
    public readonly store: StateStore,
    public readonly game: GameState,
    public readonly users: Record<string, UserState>,
    public readonly spectators: Record<string, SpectatorState>
  ) {
    if (this.game.type === "public") {
      setTimeout(() => {
        if (this.store.state?.stateName === "RoundOver") {
          this.store.state.next();
        }
      }, 10_000);
    }
  }

  public next() {
    const newUsers: RoundActive["users"] = {};
    const newSpectators: RoundActive["spectators"] = { ...this.spectators };
    for (const userName in this.users) {
      const user = this.users[userName];
      if (user.health <= 0) {
        newSpectators[userName] = this.convertToSpectator(user);
      } else {
        newUsers[userName] = {
          ...pick(user, "avatar", "transport", "health", "roundHistory"),
          guessed: false,
          guess: undefined,
          guessTime: undefined,
        };
      }
    }

    const newUserCount = Object.keys(newUsers).length;

    // If single player has died or only 1 person left alive in multiplayer
    if (
      (this.game.type === "singleplayer" && newUserCount <= 0) ||
      (this.game.type !== "singleplayer" && newUserCount <= 1)
    ) {
      this.store.state = new GameOver(
        this.store,
        pick(
          this.game,
          "id",
          "owner",
          "type",
          "difficulty",
          "songs",
          "round",
          "roundHistory"
        ),
        newUsers,
        newSpectators
      );
    } else {
      // Handle shuffling songs if you manage to play like 600 rounds
      const round = this.game.round + 1;
      const songIdx = (round - 1) % this.game.songs.length;
      let songs = this.game.songs;
      if (songIdx === 0) {
        songs = shuffle([...songs]);
      }
      const song = songs[songIdx];
      const difficultyConfig = getDifficultyConfig(
        this.game.difficulty,
        this.game.type === "singleplayer"
      );
      const maxSongStartFraction = difficultyConfig.songRandomStart ? 0.9 : 0;

      this.store.state = new RoundActive(
        this.store,
        {
          ...pick(
            this.game,
            "id",
            "owner",
            "type",
            "difficulty",
            "roundHistory"
          ),
          songs,
          round,
          songUrl: song.audioUrl,
          songStartFraction: maxSongStartFraction * Math.random(),
          roundStarted: new Date(),
          timerStarted: undefined,
          timerDuration: undefined,
          timerId: undefined,
        },
        newUsers,
        newSpectators
      );
    }
  }

  public recreate(
    game: RoundOver["game"],
    users: RoundOver["users"],
    spectators: RoundOver["spectators"]
  ) {
    return new RoundOver(this.store, game, users, spectators);
  }

  public createSpectator(
    avatar: Avatar,
    transport: Transport
  ): SpectatorState {
    return { avatar, transport, roundHistory: {} };
  }

  public convertToSpectator(user: UserState): SpectatorState {
    return pick(user, "avatar", "transport", "roundHistory");
  }

  public onMessage(userName: string, message: ClientActions): void {
    if (message.action === "nextRound" && this.game.owner === userName) {
      this.next();
    }
  }
}
