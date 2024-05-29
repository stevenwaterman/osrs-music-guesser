import { Coordinate } from "../coordinates.js";
import { Difficulty } from "./difficulty.js";
import { ClientStateDiff } from "./store.js";
import { ClientStateData } from "./types.js";
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
