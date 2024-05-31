import { Avatar } from "../../avatars.js";
import { Song } from "../../songTypes.js";
import { mapValues, pick } from "../../util.js";
import { StateStore } from "../store.js";
import { ClientActions, Transport } from "../transport.js";
import { RoundResult } from "../types.js";
import { Lobby } from "./lobby.js";
import { BaseState } from "../baseState.js";

type Cfg = {
  game: {
    id: string;
    owner: string;
    type: "singleplayer" | "private" | "public";
    difficulty: "tutorial" | "normal" | "hard" | "extreme";
    roundHistory: Record<number, Song>;
  };
  user: {
    avatar: Avatar;
    transport: Transport;
    roundHistory: Record<number, RoundResult>;
  };
  spectator: {
    avatar: Avatar;
    transport: Transport;
    roundHistory: Record<number, RoundResult>;
  };
};
const keys = {
  publicGame: ["id", "owner", "type", "difficulty", "roundHistory"],
  publicUsers: ["avatar", "roundHistory"],
  privateUsers: [],
  publicSpectators: ["avatar", "roundHistory"],
  privateSpectators: [],
} as const;

export class GameOver extends BaseState<
  GameOver,
  "GameOver",
  Cfg,
  typeof keys
> {
  constructor(store: StateStore, data: GameOver["data"]) {
    if (data.game.type === "public") {
      setTimeout(() => {
        if (store.state?.name === "GameOver") {
          store.state.playAgain();
        }
      }, 10_000);
    }

    super({
      name: "GameOver",
      store,
      data,
      keys,
    });
  }

  public playAgain() {
    this.store.state = new Lobby(this.store, {
      game: {
        ...pick(this.game, "id", "owner", "type", "difficulty"),
        firstUserJoined: undefined,
        timerStarted: undefined,
        timerDuration: undefined,
        timerId: undefined,
      },
      users: {},
      spectators: {
        ...this.spectators,
        ...mapValues(this.users, (user) => ({
          avatar: user.avatar,
          transport: user.transport,
          spectator: true,
        })),
      },
    });
  }

  public onMessage(userName: string, message: ClientActions): void {
    if (userName === this.game.owner && message.action === "playAgain") {
      this.playAgain();
    }
  }

  public recreate(data: GameOver["data"]) {
    return new GameOver(this.store, data);
  }

  public createSpectator(
    avatar: Avatar,
    transport: Transport
  ): GameOver["spectators"][string] {
    return { avatar, transport, roundHistory: {} };
  }

  public convertUserToSpectator(
    user: GameOver["users"][string]
  ): GameOver["spectators"][string] {
    return pick(user, "avatar", "transport", "roundHistory");
  }
}
