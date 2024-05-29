import { Avatar } from "../../avatars.js";
import { Coordinate, Polygon, convertFlatten } from "../../coordinates.js";
import { mapValues, pick } from "../../util.js";
import { ActiveState } from "../abstract/activeState.js";
import { Config } from "../config.js";
import { getDifficultyConfig } from "../difficulty.js";
import { StateStore } from "../store.js";
import { ClientActions, Transport } from "../transport.js";
import { RoundResult, Spectator, User } from "../types.js";
import { RoundOver } from "./roundOver.js";

const extraKeys = {
  publicGameKeys: ["songStartFraction", "timerStarted", "timerDuration"],
  publicUserKeys: ["guessed"],
  privateUserKeys: ["guess", "guessTime"],
  publicSpectatorKeys: [],
  privateSpectatorKeys: [],
} as const;
type RoundActiveConfig = Config<
  {
    game:
      | {
          songStartFraction: number;
          roundStarted: Date;
          timerStarted: undefined;
          timerDuration: undefined;
          timerId: undefined;
        }
      | {
          songStartFraction: number;
          round: number;
          roundStarted: Date;
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
    spectator: {};
  },
  typeof extraKeys
>;
export class RoundActive extends ActiveState<RoundActiveConfig> {
  public stateName = "RoundActive" as const;

  constructor(
    store: StateStore,
    data: Pick<RoundActive, "game" | "users" | "spectators">
  ) {
    const difficultyConfig = getDifficultyConfig(
      data.game.difficulty,
      data.game.type === "singleplayer"
    );
    if (
      difficultyConfig.timeLimit.type === "immediately" &&
      data.game.timerStarted === undefined
    ) {
      data = {
        ...data,
        game: {
          ...data.game,
          timerStarted: new Date().getTime(),
          timerDuration: difficultyConfig.timeLimit.duration,
          timerId: setTimeout(() => {
            if (store.state?.stateName === "RoundActive") {
              store.state.roundOver();
            }
          }, difficultyConfig.timeLimit.duration * 1000),
        },
      };
    }

    super(store, data, extraKeys);

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

    let newGameState = { ...this.game };
    if (
      this.difficultyConfig.timeLimit.type === "afterFirstGuess" &&
      newGameState.timerStarted === undefined
    ) {
      // If first guess, set timer
      newGameState = {
        ...newGameState,
        timerStarted: now.getTime(),
        timerDuration: this.difficultyConfig.timeLimit.duration,
        timerId: setTimeout(() => {
          if (this.store.state?.stateName === "RoundActive") {
            this.store.state.roundOver();
          }
        }, this.difficultyConfig.timeLimit.duration * 1000),
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

    const newState = new RoundActive(this.store, {
      game: newGameState,
      users: newUserState,
      spectators: this.spectators,
    });
    return this.transition(newState);
  }

  private roundOver() {
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

    return this.transition(
      new RoundOver(this.store, {
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
      })
    );
  }

  protected recreate(
    game: RoundActive["game"],
    users: RoundActive["users"],
    spectators: RoundActive["spectators"]
  ) {
    return new RoundActive(this.store, { game, users, spectators });
  }

  protected createSpectator(
    avatar: Avatar,
    transport: Transport
  ): Spectator<RoundActive> {
    return { avatar, transport, roundHistory: {} };
  }

  protected convertToSpectator(
    user: User<RoundActive>
  ): Spectator<RoundActive> {
    return pick(user, "avatar", "transport", "roundHistory");
  }

  protected onMessage(userName: string, message: ClientActions): void {
    if (
      message.action === "guess" &&
      this.users[userName].guess === undefined &&
      this.users[userName].health >= 0
    ) {
      this.guess(userName, message.data);
    }
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
  const difficultyConfig = state.difficultyConfig;
  const song = state.song;
  const location = song.location;

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
