import { Avatar } from "../../avatars.js";
import { mapValues, pick, sample } from "../../util.js";
import { pickVisibleState } from "../visibleState.js";
import { Difficulty, getDifficultyConfig } from "../difficulty.js";
import { StateStore } from "../store.js";
import { ClientActions, Transport } from "../transport.js";
import { RoundActive } from "./roundActive.js";

type GameState =
  | {
      id: string;
      owner: string;
      type: "singleplayer" | "private" | "public";
      difficulty: "tutorial" | "normal" | "hard" | "extreme";
      firstUserJoined: Date | undefined;
      timerStarted: number;
      timerDuration: number;
      timerId: NodeJS.Timeout;
    }
  | {
      id: string;
      owner: string;
      type: "singleplayer" | "private" | "public";
      difficulty: "tutorial" | "normal" | "hard" | "extreme";
      firstUserJoined: Date | undefined;
      timerStarted: undefined;
      timerDuration: undefined;
      timerId: undefined;
    };
const publicGameKeys = [
  "id",
  "owner",
  "type",
  "difficulty",
  "timerStarted",
  "timerDuration",
] as const;

type UserState = {
  avatar: Avatar;
  transport: Transport;
};
const publicUserKeys = ["avatar"] as const;
const privateUserKeys = [...publicUserKeys] as const;

type SpectatorState = {
  avatar: Avatar;
  transport: Transport;
};
const publicSpectatorKeys = ["avatar"] as const;
const privateSpectatorKeys = [...publicSpectatorKeys] as const;

export class Lobby {
  public readonly stateName = "Lobby" as const;
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

  public readonly game: GameState;

  constructor(
    public readonly store: StateStore,
    game: GameState,
    public readonly users: Record<string, UserState>,
    public readonly spectators: Record<string, SpectatorState>
  ) {
    const playerCount = Object.keys(spectators).length;

    if (playerCount > 0 && game.firstUserJoined === undefined) {
      game = { ...game, firstUserJoined: new Date() };
    }

    if (playerCount === 0 && game.firstUserJoined !== undefined) {
      game = {
        ...game,
        firstUserJoined: undefined,
      };
    }

    if (
      game.type === "public" &&
      game.timerStarted !== undefined &&
      playerCount <= 1
    ) {
      clearTimeout(game.timerId);
      game = {
        ...game,
        timerStarted: undefined,
        timerDuration: undefined,
        timerId: undefined,
      };
    }

    if (
      game.type === "public" &&
      game.timerStarted === undefined &&
      playerCount > 1
    ) {
      const now = new Date();
      const goFastAfter = 120;
      const goFast =
        game.firstUserJoined &&
        now.getTime() - game.firstUserJoined.getTime() > goFastAfter * 1000;
      const timerDuration = goFast ? 10 : 30;

      game = {
        ...game,
        timerStarted: now.getTime(),
        timerDuration,
        timerId: setTimeout(() => {
          if (store.state?.stateName === "Lobby") {
            store.state.start();
          }
        }, timerDuration * 1000),
      };
    }

    this.game = game;

    if (game.type === "public" && playerCount > 10) {
      this.start();
    }
  }

  public start() {
    if (this.game.timerId !== undefined) {
      clearTimeout(this.game.timerId);
    }

    const difficultyConfig = getDifficultyConfig(
      this.game.difficulty,
      this.game.type === "singleplayer"
    );
    const acceptableDifficulty = difficultyConfig.songDifficulty;
    const possibleSongs = this.store.possibleSongs.filter(
      (song) =>
        song.location.length > 0 && acceptableDifficulty[song.difficulty]
    );
    const gameSongs = sample(possibleSongs);
    const round = 1;
    const song = gameSongs[0];
    const maxSongStartFraction = difficultyConfig.songRandomStart ? 0.9 : 0;
    this.store.state = new RoundActive(
      this.store,
      {
        ...pick(this.game, "id", "owner", "type", "difficulty"),
        songs: gameSongs,
        round,
        songUrl: song.audioUrl,
        songStartFraction: maxSongStartFraction * Math.random(),
        roundStarted: new Date(),
        timerStarted: undefined,
        timerDuration: undefined,
        timerId: undefined,
        roundHistory: {},
      },
      mapValues(this.spectators, (spectator) => {
        return {
          avatar: spectator.avatar,
          transport: spectator.transport,
          health: 99,
          spectator: false,
          guess: undefined,
          guessTime: undefined,
          guessed: false,
          roundHistory: {},
        };
      }),
      {}
    );
  }

  public recreate(
    game: Lobby["game"],
    users: Lobby["users"],
    spectators: Lobby["spectators"]
  ) {
    return new Lobby(this.store, game, users, spectators);
  }

  public createSpectator(avatar: Avatar, transport: Transport): SpectatorState {
    return { avatar, transport };
  }

  public convertToSpectator(user: UserState): SpectatorState {
    return { avatar: user.avatar, transport: user.transport };
  }

  public updateSettings(settings: { difficulty?: Difficulty }) {
    this.store.state = new Lobby(
      this.store,
      {
        ...this.game,
        difficulty: settings.difficulty ?? this.game.difficulty,
      },
      this.users,
      this.spectators
    );
  }

  public onMessage(userName: string, message: ClientActions): void {
    const owner = userName === this.game.owner;
    if (owner && message.action === "start") {
      this.start();
    }

    if (owner && message.action === "settings") {
      this.updateSettings(message.data);
    }
  }
}
