import { Avatar } from "../../avatars.js";
import { Coordinate, Polygon, convertFlatten } from "../../coordinates.js";
import { Song } from "../../songTypes.js";
import { mapValues, pick } from "../../util.js";
import { getDifficultyConfig } from "../difficulty.js";
import { StateStore } from "../store/store.js";
import { ClientActions, Transport } from "../store/transport.js";
import { RoundResult } from "../types.js";
import { RoundOver } from "./roundOver.js";
import { BaseState } from "./baseState.js";
import { AbstractCfg, abstractKeys } from "./config.js";

type Cfg = AbstractCfg<
  "active",
  {
    game:
      | {
          timerStarted: undefined;
          timerDuration: undefined;
          timerId: undefined;
        }
      | {
          timerStarted: number;
          timerDuration: number;
          timerId: NodeJS.Timeout;
        };
    user:
      | {
          guess: undefined;
          guessTime: undefined;
          guessed: false;
        }
      | {
          guess: Coordinate;
          guessTime: Date;
          guessed: true;
        };
  }
>;
const keys = abstractKeys.active.plus<Cfg>()({
  publicGame: ["timerStarted", "timerDuration"],
  publicUsers: ["guessed"],
  privateUsers: ["guess", "guessTime"],
} as const);

export class RoundActive extends BaseState<
  RoundActive,
  "RoundActive",
  Cfg,
  typeof keys
> {
  constructor(store: StateStore, data: RoundActive["data"]) {
    const difficultyConfig = getDifficultyConfig(
      data.game.difficulty,
      data.game.type === "singleplayer"
    );
    if (
      difficultyConfig.timeLimit.type === "immediately" &&
      data.game.timerStarted === undefined
    ) {
      data.game = {
        ...data.game,
        timerStarted: new Date().getTime(),
        timerDuration: difficultyConfig.timeLimit.duration,
        timerId: setTimeout(() => {
          if (store.state?.name === "RoundActive") {
            store.state.roundOver();
          }
        }, difficultyConfig.timeLimit.duration * 1000),
      };
    }

    super({
      name: "RoundActive",
      store,
      data,
      keys,
    });

    setTimeout(() => {
      const allGuessed = Object.values(this.users).every(
        (u) => u.guess !== undefined
      );
      if (allGuessed) {
        this.roundOver();
      }
    });
  }

  public guess(userName: string, guess: Coordinate) {
    // TODO check they haven't already guessed
    const now = new Date();
    const difficultyConfig = getDifficultyConfig(
      this.game.difficulty,
      this.game.type === "singleplayer"
    );

    let newGameState = { ...this.game };
    if (
      difficultyConfig.timeLimit.type === "afterFirstGuess" &&
      newGameState.timerStarted === undefined
    ) {
      // If first guess, set timer
      newGameState = {
        ...newGameState,
        timerStarted: now.getTime(),
        timerDuration: difficultyConfig.timeLimit.duration,
        timerId: setTimeout(() => {
          if (this.store.state?.name === "RoundActive") {
            this.store.state.roundOver();
          }
        }, difficultyConfig.timeLimit.duration * 1000),
      };
    }

    const newUserState: RoundActive["users"] = {
      ...this.users,
      [userName]: {
        ...pick(
          this.users[userName],
          "avatar",
          "transport",
          "health",
          "roundHistory"
        ),
        guess,
        guessTime: now,
        guessed: true,
      },
    };

    this.store.state = new RoundActive(this.store, {
      game: newGameState,
      users: newUserState,
      spectators: this.spectators,
    });
  }

  public get song(): Song {
    const songIdx = (this.game.round - 1) % this.game.songs.length;
    return this.game.songs[songIdx];
  }

  public roundOver() {
    if (this.game.timerId !== undefined) {
      clearTimeout(this.game.timerId);
    }

    const roundResults = calculateRoundResults(this);
    const newUserState: RoundOver["users"] = mapValues(this.users, (user) => {
      const result = roundResults[user.avatar.name];
      return {
        ...pick(user, "avatar", "transport", "roundHistory"),
        health: result.healthAfter,
        spectator: false,
        roundHistory: {
          ...user.roundHistory,
          [this.game.round]: result,
        },
      };
    });

    this.store.state = new RoundOver(this.store, {
      game: {
        ...pick(
          this.game,
          "id",
          "owner",
          "type",
          "difficulty",
          "songs",
          "songUrl",
          "songStartFraction",
          "round",
          "roundStarted",
          "roundHistory"
        ),
        song: this.song,
      },
      users: newUserState,
      spectators: this.spectators,
    });
  }

  public onMessage(userName: string, message: ClientActions): void {
    if (
      message.action === "guess" &&
      this.users[userName].guess === undefined &&
      this.users[userName].health >= 0
    ) {
      this.guess(userName, message.data);
    }
  }

  public recreate(data: RoundActive["data"]) {
    return new RoundActive(this.store, data);
  }

  public createSpectator(avatar: Avatar, transport: Transport) {
    return { avatar, transport, roundHistory: {} };
  }
}

function closestPoint(
  coord: Coordinate,
  polygon: Polygon
): { distance: number; closest: Coordinate } {
  const point = convertFlatten.coordinate.to(coord);
  const flattenPoly = convertFlatten.polygon.to(polygon);
  const isInside = flattenPoly.contains(point);
  if (isInside) {
    return {
      distance: 0,
      closest: coord,
    };
  }

  const [distance, segment] = flattenPoly.distanceTo(point);
  return {
    distance,
    closest: convertFlatten.coordinate.from(segment.ps),
  };
}

type GuessResult = {
  coordinate: Coordinate;
  time: Date;
  closest: Coordinate;
  distance: number;
};

export function calculateRoundResults(
  state: RoundActive
): Record<string, RoundResult> {
  const difficultyConfig = getDifficultyConfig(
    state.game.difficulty,
    state.game.type === "singleplayer"
  );
  const location = state.song.location;

  const guessResults: Record<string, GuessResult | undefined> = mapValues(
    state.users,
    (user) => {
      const guess = user.guess;
      if (guess === undefined) {
        return undefined;
      }

      const { distance, closest } = closestPoint(guess, location);
      return {
        coordinate: guess,
        time: user.guessTime,
        closest,
        distance,
      };
    }
  );

  const bestGuessTuple: [string, GuessResult | undefined] = Object.entries(
    guessResults
  ).reduce((acc, elem) => {
    if (acc[1] === undefined) {
      return elem;
    }

    if (elem[1] === undefined) {
      return acc;
    }

    if (elem[1].distance < acc[1].distance) {
      return elem;
    }

    if (elem[1].distance === acc[1].distance && elem[1].time < acc[1].time) {
      return elem;
    }

    return acc;
  });

  let bestGuess: (GuessResult & { userName: string }) | undefined = undefined;
  if (bestGuessTuple[1] !== undefined) {
    bestGuess = { ...bestGuessTuple[1], userName: bestGuessTuple[0] };
  }

  // In singleplayer games, if you don't get it perfect
  // then you lose health as if someone else did
  if (state.game.type === "singleplayer" && bestGuess?.distance !== 0) {
    bestGuess = {
      userName: "AI",
      coordinate: location[0][0],
      time: new Date(),
      closest: location[0][0],
      distance: 0,
    };
  }

  // Healing starts at 20 and decreases 1 per round
  let healingAmount = 0;
  if (difficultyConfig.healing) {
    const initialHealing = difficultyConfig.healing.startAmount;
    const healingDecreasePerRound = difficultyConfig.healing.decreasePerRound;
    const minimumHealing = difficultyConfig.healing.minAmount;
    healingAmount = Math.max(
      initialHealing - healingDecreasePerRound * (state.game.round - 1),
      minimumHealing
    );
  }

  let venomAmount = 0;
  if (difficultyConfig.venom) {
    const venomStartRound = difficultyConfig.venom.startRound;
    const venomIncreasePerRound = 1;
    const roundsOfVenom = Math.max(state.game.round - venomStartRound, 0);
    venomAmount = roundsOfVenom * venomIncreasePerRound;
  }

  const bestDistance = bestGuess?.distance ?? Number.MAX_SAFE_INTEGER;
  const bestMaxHit = getMaxHit(bestDistance, difficultyConfig.damageScaling);
  const absoluteMaxHit = Math.ceil(
    getMaxHit(0, difficultyConfig.damageScaling)
  );

  const damages = mapValues(state.users, (user) => {
    const wasFirstPerfect =
      bestGuess?.userName === user.avatar.name && bestGuess.distance === 0;
    const healing = wasFirstPerfect ? healingAmount : 0;
    const venom = venomAmount;

    const myGuess = guessResults[user.avatar.name];
    const distance = myGuess?.distance ?? Number.MAX_SAFE_INTEGER;
    const maxHit = getMaxHit(distance, difficultyConfig.damageScaling);

    const hit = Math.ceil(bestMaxHit - maxHit);

    return {
      hit,
      healing,
      venom,
      max: hit === absoluteMaxHit,
    };
  });

  return mapValues(state.users, (user) => {
    const guessResult = guessResults[user.avatar.name];
    const damage = damages[user.avatar.name];
    const healthBefore = user.health;
    const healthAfter = Math.min(
      Math.max(0, healthBefore + damage.healing - damage.hit - damage.venom),
      99
    );

    if (guessResult === undefined) {
      return {
        guessed: false,
        damage,
        healthBefore,
        healthAfter,
      };
    }

    const { coordinate, closest, distance } = guessResult;
    const time = guessResult.time.getTime() - state.game.roundStarted.getTime();
    return {
      guessed: true,
      coordinate,
      time,
      closest,
      distance,
      damage,
      healthBefore,
      healthAfter,
    };
  });
}

function getMaxHit(distance: number, scaling: number) {
  const powerPart = 40 / Math.pow(1.003, distance);
  const linearPart = Math.max(40 - 0.025 * distance, 0);
  const average = powerPart * 0.85 + linearPart * 0.15;
  const output = average * scaling * 2;
  return output;
}
