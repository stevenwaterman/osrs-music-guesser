import { Avatar } from "../../avatars.js";
import { mapValues, pick, sample } from "../../util.js";
import { BaseState } from "../abstract/baseState.js";
import { Config } from "../config.js";
import { Difficulty } from "../difficulty.js";
import { StateStore } from "../store.js";
import { ClientActions, Transport } from "../transport.js";
import { Spectator, User } from "../types.js";
import { RoundActive } from "./roundActive.js";

const extraKeys = {
  publicGameKeys: ["timerStarted", "timerDuration"],
  publicUserKeys: [],
  privateUserKeys: [],
  publicSpectatorKeys: [],
  privateSpectatorKeys: [],
} as const;

type LobbyConfig = Config<
  {
    game:
      | {
          firstUserJoined: Date | undefined;
          timerStarted: number;
          timerDuration: number;
          timerId: NodeJS.Timeout;
        }
      | {
          firstUserJoined: Date | undefined;
          timerStarted: undefined;
          timerDuration: undefined;
          timerId: undefined;
        };
  },
  typeof extraKeys
>;

export class Lobby extends BaseState<LobbyConfig> {
  public stateName = "Lobby" as const;

  constructor(
    store: StateStore,
    data: Pick<Lobby, "game" | "users" | "spectators">
  ) {
    const playerCount = Object.keys(data.spectators).length;

    if (playerCount > 0 && data.game.firstUserJoined === undefined) {
      data = { ...data, game: { ...data.game, firstUserJoined: new Date() } };
    }

    if (playerCount === 0 && data.game.firstUserJoined !== undefined) {
      data = {
        ...data,
        game: {
          ...data.game,
          firstUserJoined: undefined,
        },
      };
    }

    if (
      data.game.type === "public" &&
      data.game.timerStarted !== undefined &&
      playerCount <= 1
    ) {
      clearTimeout(data.game.timerId);
      data = {
        ...data,
        game: {
          ...data.game,
          timerStarted: undefined,
          timerDuration: undefined,
          timerId: undefined,
        },
      };
    }

    if (
      data.game.type === "public" &&
      data.game.timerStarted === undefined &&
      playerCount > 1
    ) {
      const now = new Date();
      const goFastAfter = 120;
      const goFast =
        data.game.firstUserJoined &&
        now.getTime() - data.game.firstUserJoined.getTime() >
          goFastAfter * 1000;
      const timerDuration = goFast ? 10 : 30;

      data = {
        ...data,
        game: {
          ...data.game,
          timerStarted: now.getTime(),
          timerDuration,
          timerId: setTimeout(() => {
            if (store.state?.stateName === "Lobby") {
              store.state.start();
            }
          }, timerDuration * 1000),
        },
      };
    }

    super(store, data, extraKeys);

    if (data.game.type === "public" && playerCount > 10) {
      this.start();
    }
  }

  public start() {
    if (this.game.timerId !== undefined) {
      clearTimeout(this.game.timerId);
    }

    const acceptableDifficulty = this.difficultyConfig.songDifficulty;
    const possibleSongs = this.store.possibleSongs.filter(
      (song) =>
        song.location.length > 0 && acceptableDifficulty[song.difficulty]
    );
    const gameSongs = sample(possibleSongs);
    const round = 1;
    const song = gameSongs[0];
    const maxSongStartFraction = this.difficultyConfig.songRandomStart
      ? 0.9
      : 0;
    return this.transition(
      new RoundActive(this.store, {
        game: {
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
        users: mapValues(this.spectators, (spectator) => {
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
        spectators: {},
      })
    );
  }

  protected recreate(
    game: Lobby["game"],
    users: Lobby["users"],
    spectators: Lobby["spectators"]
  ) {
    return new Lobby(this.store, { game, users, spectators });
  }

  protected createSpectator(
    avatar: Avatar,
    transport: Transport
  ): Spectator<Lobby> {
    return { avatar, transport };
  }

  protected convertToSpectator(user: User<Lobby>): Spectator<Lobby> {
    return { avatar: user.avatar, transport: user.transport };
  }

  protected updateSettings(settings: { difficulty?: Difficulty }) {
    this.transition(
      this.recreate(
        {
          ...this.game,
          difficulty: settings.difficulty ?? this.game.difficulty,
        },
        { ...this.users },
        { ...this.spectators }
      )
    );
  }

  protected onMessage(userName: string, message: ClientActions): void {
    const owner = userName === this.game.owner;
    if (owner && message.action === "start") {
      this.start();
    }

    if (owner && message.action === "settings") {
      this.updateSettings(message.data);
    }
  }
}
