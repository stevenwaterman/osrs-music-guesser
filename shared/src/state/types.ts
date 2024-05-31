import { Coordinate } from "../coordinates.js";
import { GameOver } from "./concrete/gameOver.js";
import { Lobby } from "./concrete/lobby.js";
import { RoundActive } from "./concrete/roundActive.js";
import { RoundOver } from "./concrete/roundOver.js";

export type ServerStates = {
  Lobby: Lobby;
  RoundActive: RoundActive;
  RoundOver: RoundOver;
  GameOver: GameOver;
};
export type AnyServerState = ServerStates[keyof ServerStates];

export type ClientStateData<
  StateName extends AnyServerState["name"] = AnyServerState["name"],
> = {
  stateName: StateName;
  serverTime: number;
  stateIndex: number;
  game: ServerStates[StateName]["visibleData"]["publicGame"];
  users: ServerStates[StateName]["visibleData"]["publicUsers"];
  spectators: ServerStates[StateName]["visibleData"]["publicSpectators"];
  me:
    | ({
        type: "user";
      } & ServerStates[StateName]["visibleData"]["privateUsers"][string])
    | ({
        type: "spectator";
      } & ServerStates[StateName]["visibleData"]["privateSpectators"][string]);
};

export type BasicStateData<
  StateName extends AnyServerState["name"] = AnyServerState["name"],
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
