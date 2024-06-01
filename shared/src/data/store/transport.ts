import { Coordinate } from "../../coordinates.js";
import { Difficulty } from "../difficulty.js";
import { Diff } from "./diff.js";
import { AnyServerStateName, ServerStates } from "./store.js";
import WebSocket from "ws";

export interface Transport {
  send(msg: string): void;
  close: (code: number) => void;

  addEventListener(
    method: "message",
    cb: (event: TransportMessage) => void
  ): void;
  addEventListener(method: "close", cb: (event: TransportClose) => void): void;

  removeEventListener(
    method: "message",
    cb: (event: TransportMessage) => void
  ): void;
  removeEventListener(
    method: "close",
    cb: (event: TransportClose) => void
  ): void;
}
export type TransportMessage = { data: WebSocket.Data };
export type TransportClose = { code: number };

export type ClientStateData<
  Name extends AnyServerStateName = AnyServerStateName,
> = {
  stateName: Name;
  serverTime: number;
  stateIndex: number;
  game: ServerStates[Name]["visibleData"]["publicGame"];
  users: ServerStates[Name]["visibleData"]["publicUsers"];
  spectators: ServerStates[Name]["visibleData"]["publicSpectators"];
  me:
    | ({
        type: "user";
      } & ServerStates[Name]["visibleData"]["privateUsers"][string])
    | ({
        type: "spectator";
      } & ServerStates[Name]["visibleData"]["privateSpectators"][string]);
};

export type ClientStateDiff = Diff<ClientStateData>;

export type ClientActions =
  | { action: "getState" }
  | { action: "settings"; data: { difficulty?: Difficulty } }
  | { action: "start" }
  | { action: "guess"; data: Coordinate }
  | { action: "nextRound" }
  | { action: "playAgain" };

export type ServerActions =
  | {
      action: "error";
      data: {
        code: string;
        message: string;
      };
    }
  | {
      action: "state";
      data: ClientStateData;
    }
  | {
      action: "stateDiff";
      data: ClientStateDiff;
    };
