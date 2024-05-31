import { Avatar } from "../../avatars.js";
import { Song } from "../../songTypes.js";
import { mapValues, pick } from "../../util.js";
import { pickVisibleState } from "../visibleState.js";
import { StateStore } from "../store.js";
import { ClientActions, Transport } from "../transport.js";
import { RoundResult } from "../types.js";
import { Lobby } from "./lobby.js";

type GameState = {
  id: string;
  owner: string;
  type: "singleplayer" | "private" | "public";
  difficulty: "tutorial" | "normal" | "hard" | "extreme";
  roundHistory: Record<number, Song>;
};
const publicGameKeys = [
  "id",
  "owner",
  "type",
  "difficulty",
  "roundHistory",
] as const;

type UserState = {
  avatar: Avatar;
  transport: Transport;
  roundHistory: Record<number, RoundResult>;
};
const publicUserKeys = ["avatar", "roundHistory"] as const;
const privateUserKeys = [...publicUserKeys] as const;

type SpectatorState = {
  avatar: Avatar;
  transport: Transport;
  roundHistory: Record<number, RoundResult>;
};
const publicSpectatorKeys = ["avatar", "roundHistory"] as const;
const privateSpectatorKeys = [...publicSpectatorKeys] as const;

export class GameOver {
  public readonly stateName = "GameOver" as const;
  public get visibleState() {
    return pickVisibleState({
      game: this.game,
      publicGameKeys,
      users: this.users,
      publicUserKeys,
      privateUserKeys,
      spectators: this.spectators,
      publicSpectatorKeys,
      privateSpectatorKeys,
    });
  }

  constructor(
    public readonly store: StateStore,
    public readonly game: GameState,
    public readonly users: Record<string, UserState>,
    public readonly spectators: Record<string, SpectatorState>
  ) {
    if (this.game.type === "public") {
      setTimeout(() => {
        if (this.store.state?.stateName === "GameOver") {
          this.store.state.playAgain();
        }
      }, 10_000);
    }
  }

  public playAgain() {
    this.store.state = new Lobby(
      this.store,
      {
        ...pick(this.game, "id", "owner", "type", "difficulty"),
        firstUserJoined: undefined,
        timerStarted: undefined,
        timerDuration: undefined,
        timerId: undefined,
      },
      {},
      {
        ...this.spectators,
        ...mapValues(this.users, (user) => ({
          avatar: user.avatar,
          transport: user.transport,
          spectator: true,
        })),
      }
    );
  }

  public recreate(
    game: GameState,
    users: Record<string, UserState>,
    spectators: Record<string, SpectatorState>
  ): GameOver {
    return new GameOver(this.store, game, users, spectators);
  }

  public onMessage(userName: string, message: ClientActions): void {
    if (userName === this.game.owner && message.action === "playAgain") {
      this.playAgain();
    }
  }

  public createSpectator(avatar: Avatar, transport: Transport): SpectatorState {
    return { avatar, transport, roundHistory: {} };
  }

  public convertToSpectator(user: UserState): SpectatorState {
    return pick(user, "avatar", "transport", "roundHistory");
  }
}
