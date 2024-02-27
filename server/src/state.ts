import WebSocket from "ws";
import {
  randomSongs,
  scoreGuess,
  StateInterface,
  pick,
  omit,
  mapValues,
} from "tunescape07-shared";
import type { Coordinate } from "tunescape07-shared";
export class StateStore implements StateInterface.StateStore {
  public state: StateInterface.AnyServerState;

  constructor(gameId: string) {
    this.state = new LobbyEmpty(this, { gameId }, {});
  }
}

export class LobbyEmpty extends StateInterface.LobbyEmpty {
  public join(userId: string, ws: WebSocket) {
    return this.transition(
      new LobbyOnePlayer(
        this.store,
        { ...this.game, owner: userId },
        {
          ...this.users,
          [userId]: { userId, ws },
        }
      )
    );
  }

  protected leave(userId: string): void {
    throw new Error(userId + " is trying to leave an empty lobby, somehow.");
  }
}

export class LobbyOnePlayer extends StateInterface.LobbyOnePlayer {
  public join(userId: string, ws: WebSocket) {
    return this.transition(
      new LobbyTwoPlayer(this.store, this.game, {
        ...this.users,
        [userId]: { userId, ws },
      })
    );
  }

  public leave(userId: string) {
    return this.transition(
      new LobbyEmpty(
        this.store,
        pick(this.game, "gameId"),
        omit(this.users, userId)
      )
    );
  }
}

export class LobbyTwoPlayer extends StateInterface.LobbyTwoPlayer {
  public start() {
    const songs = randomSongs();
    const round = 1;
    const song = songs[round];
    return this.transition(
      new RoundNoGuessYet(
        this.store,
        {
          ...this.game,
          songs,
          round,
          song,
          songStartFraction: 0.9 * Math.random(),
        },
        mapValues(this.users, (user) => ({ ...user, health: 5000 }))
      )
    );
  }

  public leave(userId: string) {
    const otherUser = Object.keys(this.users).filter((id) => userId !== id)[0];
    return this.transition(
      new LobbyOnePlayer(
        this.store,
        { ...this.game, owner: otherUser },
        omit(this.users, userId)
      )
    );
  }

  protected onMessage(
    userId: string,
    message: { action: string; data?: any }
  ): void {
    if (userId === this.game.owner && message.action === "start") {
      this.start();
    }
  }
}

export class RoundNoGuessYet extends StateInterface.RoundNoGuessYet {
  public guess(userId: string, guess: Coordinate) {
    const timerStarted = new Date();
    const timerDurationSecs = 10;
    const timerId = setTimeout(() => {
      if (this.store.state === toState) {
        toState.timeUp();
      }
    }, timerDurationSecs * 1000);
    const toState = new RoundOneGuess(
      this.store,
      {
        ...this.game,
        timerStarted,
        timerDurationSecs,
        timerId,
      },
      mapValues(this.users, (user) => ({
        ...user,
        guess: userId === user.userId ? guess : null,
        guessTime: 0,
      }))
    );
    return this.transition(toState);
  }

  public leave(userId: string) {
    return this.transition(
      new LobbyOnePlayer(this.store, this.game, omit(this.users, userId))
    );
  }

  protected onMessage(
    userId: string,
    message: { action: string; data?: any }
  ): void {
    if (message.action === "guess") {
      this.guess(userId, message.data);
    }
  }
}

export class RoundOneGuess extends StateInterface.RoundOneGuess {
  public guess(userId: string, guess: Coordinate) {
    return this.roundOver(userId, guess);
  }

  public timeUp() {
    const otherUser = Object.values(this.users).filter(
      (user) => user.guess === null
    )[0];
    return this.roundOver(otherUser.userId, null);
  }

  private roundOver(userId: string, guess: Coordinate | null) {
    clearTimeout(this.game.timerId);
    const guesses = mapValues(this.users, (user) =>
      user.userId === userId ? guess : user.guess
    );
    const results = mapValues(guesses, (guess) => {
      if (guess) {
        return scoreGuess(guess, this.game.song);
      } else {
        return null;
      }
    });
    const bestScore = Math.max(
      ...Object.values(results).map((result) => result?.score ?? 0)
    );
    const draw = Object.values(results).every(
      (result) => result?.score === bestScore
    );
    const toState = new RoundOver(
      this.store,
      omit(this.game, "timerStarted", "timerDurationSecs", "timerId"),
      mapValues(this.users, (user) => {
        const result = results[user.userId];
        const score = result?.score ?? 0;
        const loser = score < bestScore || (draw && user.userId === userId);
        const baseDamage = bestScore - score;
        const damage = loser ? Math.max(baseDamage, 500) : baseDamage;

        return {
          userId: user.userId,
          healthBefore: user.health,
          health: Math.max(user.health - damage, 0),
          result:
            result === null
              ? null
              : {
                  guess: guesses[user.userId]!,
                  closest: result.closest,
                  distance: result.distance,
                },
          guessTime:
            (new Date().getTime() - this.game.timerStarted.getTime()) / 1000,
          score: result?.score ?? 0,
          ws: user.ws,
        };
      })
    );
    setTimeout(() => {
      if (this.store.state === toState) {
        toState.next();
      }
    }, 10000);
    return this.transition(toState);
  }

  public leave(userId: string) {
    return this.transition(
      new LobbyOnePlayer(this.store, this.game, omit(this.users, userId))
    );
  }

  protected onMessage(
    userId: string,
    message: { action: string; data?: any }
  ): void {
    if (message.action === "guess" && this.users[userId].guess === null) {
      this.guess(userId, message.data);
    }
  }
}

export class RoundOver extends StateInterface.RoundOver {
  public next() {
    if (Object.values(this.users).some((user) => user.health <= 0)) {
      return this.transition(
        new GameOver(
          this.store,
          omit(this.game, "songs", "song", "songStartFraction"),
          mapValues(this.users, (user) => ({
            userId: user.userId,
            health: user.health,
            ws: user.ws,
          }))
        )
      );
    } else {
      return this.transition(
        new RoundNoGuessYet(
          this.store,
          {
            ...this.game,
            round: this.game.round + 1,
            song: this.game.songs[this.game.round + 1],
          },
          mapValues(this.users, (user) => ({
            userId: user.userId,
            health: user.health,
            ws: user.ws,
          }))
        )
      );
    }
  }

  public leave(userId: string) {
    return this.transition(
      new LobbyOnePlayer(this.store, this.game, omit(this.users, userId))
    );
  }
}

export class GameOver extends StateInterface.GameOver {
  public playAgain() {
    return this.transition(
      new LobbyTwoPlayer(
        this.store,
        pick(this.game, "gameId", "owner"),
        mapValues(this.users, (user) => pick(user, "userId", "ws"))
      )
    );
  }

  public leave(userId: string) {
    return this.transition(
      new LobbyOnePlayer(this.store, this.game, omit(this.users, userId))
    );
  }

  protected onMessage(
    userId: string,
    message: { action: string; data?: any }
  ): void {
    if (userId === this.game.owner && message.action === "playAgain") {
      this.playAgain();
    }
  }
}
