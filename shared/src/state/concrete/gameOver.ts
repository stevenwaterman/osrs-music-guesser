import { Avatar } from "../../avatars.js";
import { mapValues, pick } from "../../util.js";
import { PostLobbyState } from "../abstract/postLobbyState.js";
import { StateStore } from "../store.js";
import { ClientActions, Transport } from "../transport.js";
import { Spectator, User } from "../types.js";
import { Lobby } from "./lobby.js";

export class GameOver extends PostLobbyState<{}, {}, {}, [], [], [], [], []> {
  public stateName = "GameOver" as const;

  constructor(
    store: StateStore,
    game: GameOver["game"],
    users: GameOver["users"],
    spectators: GameOver["spectators"]
  ) {
    super({
      store,
      game,
      users,
      spectators,
      publicGameKeys: [],
      publicUserKeys: [],
      privateUserKeys: [],
      publicSpectatorKeys: [],
      privateSpectatorKeys: [],
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
      new Lobby(
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
      )
    );
  }

  protected recreate(
    game: GameOver["game"],
    users: GameOver["users"],
    spectators: GameOver["spectators"]
  ) {
    return new GameOver(this.store, game, users, spectators);
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
