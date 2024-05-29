import { Avatar } from "../../avatars.js";
import { Song } from "../../songTypes.js";
import { pick, shuffle } from "../../util.js";
import { ActiveState } from "../abstract/activeState.js";
import { Config } from "../config.js";
import { StateStore } from "../store.js";
import { ClientActions, Transport } from "../transport.js";
import { Spectator, User } from "../types.js";
import { GameOver } from "./gameOver.js";
import { RoundActive } from "./roundActive.js";

const extraKeys = {
  publicGameKeys: ["song"],
  publicUserKeys: [],
  privateUserKeys: [],
  publicSpectatorKeys: [],
  privateSpectatorKeys: [],
} as const;

type RoundOverConfig = Config<
  {
    game: { song: Song };
    user: {};
    spectator: {};
  },
  typeof extraKeys
>;
export class RoundOver extends ActiveState<RoundOverConfig> {
  public stateName = "RoundOver" as const;

  constructor(
    store: StateStore,
    data: Pick<RoundOver, "game" | "users" | "spectators">
  ) {
    super(store, data, extraKeys);

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
      return this.transition(
        new GameOver(this.store, {
          game: pick(
            this.game,
            "id",
            "owner",
            "type",
            "difficulty",
            "songs",
            "round",
            "roundHistory"
          ),
          users: newUsers,
          spectators: newSpectators,
        })
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
      const maxSongStartFraction = this.difficultyConfig.songRandomStart
        ? 0.9
        : 0;

      return this.transition(
        new RoundActive(this.store, {
          game: {
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
          users: newUsers,
          spectators: newSpectators,
        })
      );
    }
  }

  protected recreate(
    game: RoundOver["game"],
    users: RoundOver["users"],
    spectators: RoundOver["spectators"]
  ) {
    return new RoundOver(this.store, { game, users, spectators });
  }

  protected createSpectator(
    avatar: Avatar,
    transport: Transport
  ): Spectator<RoundOver> {
    return { avatar, transport, roundHistory: {} };
  }

  protected convertToSpectator(user: User<RoundOver>): Spectator<RoundOver> {
    return pick(user, "avatar", "transport", "roundHistory");
  }

  protected onMessage(userName: string, message: ClientActions): void {
    if (message.action === "nextRound" && this.game.owner === userName) {
      this.next();
    }
  }
}
