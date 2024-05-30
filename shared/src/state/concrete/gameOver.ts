import { Avatar } from "../../avatars.js";
import { mapValues, pick } from "../../util.js";
import { PostLobbyState } from "../abstract/postLobbyState.js";
import { Config } from "../config.js";
import { StateStore } from "../store.js";
import { ClientActions, Transport } from "../transport.js";
import { Spectator, User } from "../types.js";
import { Lobby } from "./lobby.js";

export class GameOver extends PostLobbyState<Config<{}, {
  publicGameKeys: [],
  publicUserKeys: [],
  privateUserKeys: [],
  publicSpectatorKeys: [],
  privateSpectatorKeys: []
}>> {
  public stateName = "GameOver" as const;

  constructor(
    store: StateStore,
    data: GameOver["data"]
  ) {
    super(store, data, {
      publicGameKeys: [],
  publicUserKeys: [],
  privateUserKeys: [],
  publicSpectatorKeys: [],
  privateSpectatorKeys: []
    });

    if (this.game.type === "public") {
      setTimeout(() => {
        if (this.store.state?.stateName === "GameOver") {
          this.store.state.playAgain();
        }
      }, 10_000);
    }
  }

  public playAgain() {
    return this.transition(
      new Lobby(this.store, {
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
      })
    );
  }

  protected recreate(
    game: GameOver["game"],
    users: GameOver["users"],
    spectators: GameOver["spectators"]
  ): GameOver {
    return new GameOver(this.store, { game, users, spectators });
  }

  protected onMessage(userName: string, message: ClientActions): void {
    if (userName === this.game.owner && message.action === "playAgain") {
      this.playAgain();
    }
  }

  protected createSpectator(
    avatar: Avatar,
    transport: Transport
  ): Spectator<GameOver> {
    return { avatar, transport, roundHistory: {} };
  }
  protected convertToSpectator(user: User<GameOver>): Spectator<GameOver> {
    return pick(user, "avatar", "transport", "roundHistory");
  }
}
