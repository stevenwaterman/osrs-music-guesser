import WebSocket from "ws";
import { getSongs } from "./songs.ts";
import { Coordinate } from "./cleanedData.ts";

// TODO notifying players of state changes

function mapValues<InValue, OutValue>(
  map: Record<string, InValue>,
  mapper: (value: InValue) => OutValue
): Record<string, OutValue> {
  const output: Record<string, OutValue> = {} as any;
  const entries: Array<[string, InValue]> = Object.entries(map);
  entries.forEach(([key, value]) => {
    const newValue = mapper(value);
    output[key] = newValue;
  });
  return output;
}

function omit<Input extends {}, Keys extends keyof Input>(
  input: Input,
  ...keys: Keys[]
): Omit<Input, Keys> {
  const copy = { ...input };
  for (const key of keys) {
    delete copy[key];
  }
  return copy as Omit<Input, Keys>;
}

function pick<Input extends {}, Keys extends keyof Input>(
  input: Input,
  ...keys: Keys[]
): Pick<Input, Keys> {
  const copy: Partial<Pick<Input, Keys>> = {};
  for (const key of keys) {
    copy[key] = input[key];
  }
  return copy as Pick<Input, Keys>;
}

class StateStore {
  constructor(public state: AnyState) {}
}

abstract class BaseState<
  Name extends string,
  ServerData extends {},
  ClientData extends {}
> {
  private readonly unsubscribeFromWs: Array<() => void>;

  constructor(
    public readonly store: StateStore,
    public readonly name: Name,
    public readonly data: ServerData & { gameId: string },
    public readonly clients: Record<
      string,
      ClientData & { userId: string; ws: WebSocket }
    >
  ) {
    this.unsubscribeFromWs = Object.values(clients).map((client) => {
      const { ws, userId } = client;
      const handler = (ev: WebSocket.MessageEvent) => {
        const message = ev.data.toString();
        this.onMessage(userId, message);
      };
      ws.addEventListener("message", handler);
      return () => ws.removeEventListener("message", handler);
    });
  }

  public transition<T extends AnyState>(to: T): T {
    Object.values(this.unsubscribeFromWs).forEach((cb) => cb());
    this.store.state = to;
    return to;
  }

  public sendMessage(userId: string, message: string): void {
    const ws: WebSocket | undefined = this.clients[userId]?.ws;
    ws?.send(message);
  }

  public broadcast(message: string): void {
    Object.values(this.clients).forEach(({ ws }) => ws.send(message));
  }

  protected onMessage(userId: string, message: string): void {}

  public isAny<Names extends keyof State>(
    ...names: Names[]
  ): this is State[Names] {
    return (names as string[]).includes(this.name);
  }
}

class Lobby_Empty extends BaseState<"Lobby_Empty", {}, {}> {
  onMessage(userId: string, message: string): void {
    throw new Error("How did someone send a message when the lobby is empty?");
  }

  public join(userId: string, ws: WebSocket): Lobby_OnePlayer {
    return this.transition(
      new Lobby_OnePlayer(
        this.store,
        "Lobby_OnePlayer",
        { ...this.data, ownerId: userId },
        {
          [userId]: { userId, ws },
        }
      )
    );
  }
}

abstract class NonEmptyState<
  Name extends string,
  ServerData extends {},
  ClientData extends {}
> extends BaseState<Name, ServerData & { ownerId: string }, ClientData> {
  onMessage(userId: string, message: string): void {
    super.onMessage(userId, message);

    if (message === "leave") {
      this.leave(userId);
    }
  }

  public leave(userId: string): void {
    this.clients[userId].ws.close(1000);
  }
}

class Lobby_OnePlayer extends NonEmptyState<"Lobby_OnePlayer", {}, {}> {
  public leave(userId: string) {
    super.leave(userId);
    return this.transition(
      new Lobby_Empty(this.store, "Lobby_Empty", omit(this.data, "ownerId"), {})
    );
  }

  public join(userId: string, ws: WebSocket): Lobby_TwoPlayers {
    return this.transition(
      new Lobby_TwoPlayers(this.store, "Lobby_TwoPlayers", this.data, {
        ...this.clients,
        [userId]: { userId, ws },
      })
    );
  }
}

abstract class TwoPlayerState<
  Name extends string,
  ServerData extends {},
  ClientData extends {}
> extends NonEmptyState<Name, ServerData, ClientData> {
  public leave(userId: string) {
    const clients = omit(this.clients, userId);
    const ownerId =
      this.data.ownerId === userId
        ? Object.values(clients)[0]
        : this.data.ownerId;
    return this.transition(
      new Lobby_OnePlayer(
        this.store,
        "Lobby_OnePlayer",
        { ...this.data, ownerId },
        clients
      )
    );
  }
}

class Lobby_TwoPlayers extends TwoPlayerState<"Lobby_TwoPlayers", {}, {}> {
  onMessage(userId: string, message: string): void {
    if (userId === this.data.ownerId && message === "start") {
      this.start();
    }
  }

  public start() {
    return this.transition(
      new Round_NoGuess(
        this.store,
        "Round_NoGuess",
        {
          ...this.data,
          songs: getSongs(),
          round: 1,
          roundStarted: new Date(),
        },
        mapValues(this.clients, (client) => ({ ...client, health: 5000 }))
      )
    );
  }
}

abstract class ActiveGameState<
  Name extends string,
  ServerData extends {},
  ClientData extends {}
> extends NonEmptyState<
  Name,
  ServerData & { songs: string[]; round: number; roundStarted: Date },
  ClientData & { health: number }
> {}

class Round_NoGuess extends ActiveGameState<"Round_NoGuess", {}, {}> {
  onMessage(userId: string, message: string): void {
    if (message === "guess") {
      // TODO
      this.guess(userId, [0, 0]);
    }
  }

  public guess(userId: string, guess: Coordinate) {
    const clients = mapValues(this.clients, (client) => {
      return {
        ...client,
        guess: client.userId === userId ? guess : null,
      };
    });
    return this.transition(
      new Round_Guessed(this.store, "Round_Guessed", this.data, clients)
    );
  }
}

class Round_Guessed extends ActiveGameState<
  "Round_Guessed",
  {},
  { guess: Coordinate | null }
> {
  // TODO timer
  onMessage(userId: string, message: string): void {
    if (message === "guess") {
      if (this.clients[userId].guess === null) {
        // TODO
        this.guess(userId, [0, 0]);
      }
    }
  }

  public guess(userId: string, guess: Coordinate) {
    const clients = {
      ...this.clients,
      [userId]: {
        ...this.clients[userId],
        guess,
      },
    };

    if (Object.values(clients).every(client => client.guess !== null)) {

      return this.transition(
        // TODO guess history
        // TODO scoring
        new Round_Over(this.store, "Round_Over", this.data, this.clients)
      )
    } else {
      return this.transition(
        new Round_Guessed(this.store, "Round_Guessed", this.data, clients)
      );
    }
  }
}

export type State = {
  Lobby_Empty: Lobby_Empty;
  Lobby_OnePlayer: Lobby_OnePlayer;
  Lobby_TwoPlayers: Lobby_TwoPlayers;
  Round_NoGuess: Round_NoGuess;
  Round_Guessed: Round_Guessed;
};
export type AnyState = State[keyof State];
