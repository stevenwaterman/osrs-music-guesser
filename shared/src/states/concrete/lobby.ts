import { mapValues, pick, sample } from "../../util.js";
import { Difficulty } from "../difficulty.js";
import { StateStore } from "../store/store.js";
import { ClientActions, Transport } from "../store/transport.js";
import { RoundActive } from "./roundActive.js";
import { BaseState } from "../baseState.js";
import { AbstractCfg, abstractKeys } from "../config.js";

type Cfg = AbstractCfg<
  "base",
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
  }
>;
const keys = abstractKeys.base({
  publicGame: ["timerStarted", "timerDuration"],
} as const);

export class Lobby extends BaseState<Lobby, "Lobby", Cfg, typeof keys> {
  constructor(store: StateStore, data: Lobby["data"]) {
    const playerCount = Object.keys(data.spectators).length;

    if (playerCount > 0 && data.game.firstUserJoined === undefined) {
      data.game = { ...data.game, firstUserJoined: new Date() };
    }

    if (playerCount === 0 && data.game.firstUserJoined !== undefined) {
      data.game = {
        ...data.game,
        firstUserJoined: undefined,
      };
    }

    if (
      data.game.type === "public" &&
      data.game.timerStarted !== undefined &&
      playerCount <= 1
    ) {
      clearTimeout(data.game.timerId);
      data.game = {
        ...data.game,
        timerStarted: undefined,
        timerDuration: undefined,
        timerId: undefined,
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

      data.game = {
        ...data.game,
        timerStarted: now.getTime(),
        timerDuration,
        timerId: setTimeout(() => {
          if (store.state instanceof Lobby) {
            store.state.start();
          }
        }, timerDuration * 1000),
      };
    }

    super({
      name: "Lobby",
      store,
      data,
      keys,
    });

    if (data.game.type === "public" && playerCount > 10) {
      this.start();
    }
  }

  private start() {
    if (this.game.timerId !== undefined) {
      clearTimeout(this.game.timerId);
    }

    const acceptableDifficulty = this.difficultyConfig.songDifficulty;
    const possibleSongs = this.store.possibleSongs.filter(
      (song) =>
        song.location.length > 0 && acceptableDifficulty[song.difficulty]
    );
    const gameSongs = sample(possibleSongs);
    const round = 0;
    const song = gameSongs[0];
    const maxSongStartFraction = this.difficultyConfig.songRandomStart
      ? 0.9
      : 0;
    this.store.state = new RoundActive(this.store, {
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
          ...pick(spectator, "name", "transport"),
          health: 99,
          spectator: false,
          guess: undefined,
          guessTime: undefined,
          guessed: false,
          roundHistory: {},
        };
      }),
      spectators: {},
    });
  }

  private updateSettings(settings: { difficulty?: Difficulty }) {
    this.store.state = new Lobby(this.store, {
      game: {
        ...this.game,
        difficulty: settings.difficulty ?? this.game.difficulty,
      },
      users: this.users,
      spectators: this.spectators,
    });
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

  public recreate(data: Lobby["data"]) {
    return new Lobby(this.store, data);
  }

  public createSpectator(name: string, transport: Transport) {
    return { name, transport };
  }
}
