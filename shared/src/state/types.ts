import { Coordinate } from "../coordinates.js";
import { State } from "./abstract/state.js";
import { GameOver } from "./concrete/gameOver.js";
import { Lobby } from "./concrete/lobby.js";
import { RoundActive } from "./concrete/roundActive.js";
import { RoundOver } from "./concrete/roundOver.js";
import { AnyConfig } from "./config.js";

export type ServerStates = {
  Lobby: Lobby;
  RoundActive: RoundActive;
  RoundOver: RoundOver;
  GameOver: GameOver;
};
export type AnyServerState = ServerStates[keyof ServerStates];
export type ClientStateData<
  StateName extends AnyServerState["stateName"] = AnyServerState["stateName"],
> = {
  stateName: StateName;
  serverTime: number;
  stateIndex: number;
  game: ReturnType<ServerStates[StateName]["getClientStates"]>["publicGame"];
  users: ReturnType<ServerStates[StateName]["getClientStates"]>["publicUsers"];
  spectators: ReturnType<
    ServerStates[StateName]["getClientStates"]
  >["publicSpectators"];
  me:
    | ({ type: "user" } & ReturnType<
        ServerStates[StateName]["getClientStates"]
      >["publicUsers"][string] &
        ReturnType<
          ServerStates[StateName]["getClientStates"]
        >["privateUsers"][string])
    | ({ type: "spectator" } & ReturnType<
        ServerStates[StateName]["getClientStates"]
      >["publicSpectators"][string] &
        ReturnType<
          ServerStates[StateName]["getClientStates"]
        >["privateSpectators"][string]);
};
export type BasicStateData<
  StateName extends AnyServerState["stateName"] = AnyServerState["stateName"],
> = Omit<ClientStateData<StateName>, "me">;

export type RoundResult =
  | {
      guessed: true;
      coordinate: Coordinate;
      time: number;
      closest: Coordinate;
      distance: number;
      damage: {
        hit: number;
        healing: number;
        venom: number;
        max: boolean;
      };
      healthBefore: number;
      healthAfter: number;
    }
  | {
      guessed: false;
      damage: {
        hit: number;
        healing: number;
        venom: number;
        max: boolean;
      };
      healthBefore: number;
      healthAfter: number;
    };

export type Elem<T extends any[] | Record<string, any>> = T extends any[]
  ? T[number]
  : T extends Record<string, any>
    ? T[string]
    : never;
export type AnyState = State<AnyConfig>;
export type User<S extends AnyState> = Elem<S["users"]>;
export type Spectator<S extends AnyState> = Elem<S["spectators"]>;
