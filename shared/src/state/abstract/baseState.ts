import { Avatar } from "../../avatars.js";
import { mapValues, omit, pick } from "../../util.js";
import { Lobby } from "../concrete/lobby.js";
import { DifficultyConfig, getDifficultyConfig } from "../difficulty.js";
import { StateStore } from "../store.js";
import {
  ClientActions,
  Transport,
  TransportClose,
  TransportMessage,
} from "../transport.js";
import { AnyServerState, Spectator, User } from "../types.js";
import { State } from "./state.js";

type BaseGameState = {
  id: string;
  owner: string;
  type: "singleplayer" | "private" | "public";
  difficulty: "tutorial" | "normal" | "hard" | "extreme";
};
type BaseUserState = {
  avatar: Avatar;
  transport: Transport;
};
type BaseSpectatorState = {
  avatar: Avatar;
  transport: Transport;
};

export abstract class BaseState<
  GameState extends {},
  UserState extends {},
  SpectatorState extends {},
  PublicGameKeys extends Array<keyof GameState>,
  PublicUserKeys extends Array<keyof UserState>,
  PrivateUserKeys extends Array<keyof UserState>,
  PublicSpectatorKeys extends Array<keyof SpectatorState>,
  PrivateSpectatorKeys extends Array<keyof SpectatorState>,
> extends State<
  GameState & BaseGameState,
  UserState & BaseUserState,
  SpectatorState & BaseSpectatorState,
  [...PublicGameKeys, "id", "owner", "type", "difficulty"],
  [...PublicUserKeys, "avatar"],
  PrivateUserKeys,
  [...PublicSpectatorKeys, "avatar"],
  PrivateSpectatorKeys
> {
  private readonly unsubscribeFromWsMessages: Array<() => void>;
  private readonly unsubscribeFromWsClose: Array<() => void>;

  constructor({
    store,
    game,
    users,
    spectators,
    publicGameKeys,
    publicUserKeys,
    privateUserKeys,
    publicSpectatorKeys,
    privateSpectatorKeys,
  }: {
    store: StateStore;
    game: BaseState<
      GameState,
      UserState,
      SpectatorState,
      PublicGameKeys,
      PublicUserKeys,
      PrivateUserKeys,
      PublicSpectatorKeys,
      PrivateSpectatorKeys
    >["game"];
    users: BaseState<
      GameState,
      UserState,
      SpectatorState,
      PublicGameKeys,
      PublicUserKeys,
      PrivateUserKeys,
      PublicSpectatorKeys,
      PrivateSpectatorKeys
    >["users"];
    spectators: BaseState<
      GameState,
      UserState,
      SpectatorState,
      PublicGameKeys,
      PublicUserKeys,
      PrivateUserKeys,
      PublicSpectatorKeys,
      PrivateSpectatorKeys
    >["spectators"];
    publicGameKeys: PublicGameKeys;
    publicUserKeys: PublicUserKeys;
    privateUserKeys: PrivateUserKeys;
    publicSpectatorKeys: PublicSpectatorKeys;
    privateSpectatorKeys: PrivateSpectatorKeys;
  }) {
    super(
      store,
      game,
      users,
      spectators,
      [...publicGameKeys, "id", "owner", "type", "difficulty"],
      [...publicUserKeys, "avatar"],
      privateUserKeys,
      [...publicSpectatorKeys, "avatar"],
      privateSpectatorKeys
    );
    // Listen for incoming messages
    const clients = [...Object.values(users), ...Object.values(spectators)];

    this.unsubscribeFromWsMessages = Object.values(clients).map((user) => {
      const messageHandler = (ev: TransportMessage) => {
        const message = ev.data.toString("utf8");
        if (message.startsWith("{")) {
          const parsedMessage: ClientActions = JSON.parse(message);
          if ("action" in parsedMessage) {
            if (parsedMessage.action === "getState") {
              this.store.sendFullState(user.avatar.name);
            }

            // TODO error handling
            this.onMessage(user.avatar.name, parsedMessage);
          }
        }
      };
      user.transport.addEventListener("message", messageHandler);
      return () =>
        user.transport.removeEventListener("message", messageHandler);
    });

    // Listen for transport close
    this.unsubscribeFromWsClose = Object.values(clients).map((user) => {
      const closeHandler = (ev: TransportClose) => {
        this.leave(user.avatar.name);
      };
      user.transport.addEventListener("close", closeHandler);
      return () => user.transport.removeEventListener("close", closeHandler);
    });
  }

  public get difficultyConfig(): DifficultyConfig {
    return getDifficultyConfig(
      this.game.difficulty,
      this.game.type === "singleplayer"
    );
  }

  protected transition(to: AnyServerState | null) {
    Object.values(this.unsubscribeFromWsMessages).forEach((cb) => cb());
    Object.values(this.unsubscribeFromWsClose).forEach((cb) => cb());
    super.transition(to);
  }

  private leave(userName: string) {
    const userIsPlayer = userName in this.users || userName in this.spectators;
    if (!userIsPlayer) {
      console.warn(`${userName} tried to leave a game they weren't in`);
      return;
    }

    const avatar = (this.users[userName] ?? this.spectators[userName]).avatar;
    this.store.avatarLibrary.release(avatar);

    const newUsers: BaseState<
      GameState,
      UserState,
      SpectatorState,
      PublicGameKeys,
      PublicUserKeys,
      PrivateUserKeys,
      PublicSpectatorKeys,
      PrivateSpectatorKeys
    >["users"] = omit(this.users, userName);
    const newUserCount = Object.keys(newUsers).length;

    const newSpectators: BaseState<
      GameState,
      UserState,
      SpectatorState,
      PublicGameKeys,
      PublicUserKeys,
      PrivateUserKeys,
      PublicSpectatorKeys,
      PrivateSpectatorKeys
    >["spectators"] = omit(this.spectators, userName);
    const newSpectatorCount = Object.keys(newSpectators).length;

    if (newUserCount + newSpectatorCount === 0 && this.game.type !== "public") {
      return this.transition(null);
    }

    const ownerStillPresent =
      this.game.type === "public" ||
      this.game.owner! in newUsers ||
      this.game.owner! in newSpectators;
    const newOwner = ownerStillPresent
      ? this.game.owner
      : newUserCount > 0
        ? Object.keys(newUsers)[0]
        : Object.keys(newSpectators)[0];

    if (newUserCount <= 1 && this.stateName !== "Lobby") {
      const allSpectators: Lobby["spectators"] = {
        ...newSpectators,
        ...mapValues(newUsers, (user) => this.convertToSpectator(user)),
      };

      return this.transition(
        new Lobby(
          this.store,
          {
            ...pick(this.game, "id", "type", "difficulty"),
            owner: newOwner,
            firstUserJoined: undefined,
            timerStarted: undefined,
            timerDuration: undefined,
            timerId: undefined,
          },
          {},
          allSpectators
        )
      );
    }

    this.transition(
      this.recreate(
        {
          ...this.game,
          owner: newOwner,
        },
        newUsers,
        newSpectators
      )
    );
  }

  public join(transport: Transport) {
    const avatar = this.store.avatarLibrary.take();
    if (avatar === undefined) {
      // TODO better error handling
      transport.close(1000);
      return;
    }

    return this.transition(
      this.recreate(this.game, this.users, {
        ...this.spectators,
        [avatar.name]: this.createSpectator(avatar, transport),
      })
    );
  }

  protected abstract recreate(
    game: this["game"],
    users: this["users"],
    spectators: this["spectators"]
  ): AnyServerState;

  public terminate() {
    Object.values(this.unsubscribeFromWsMessages).forEach((cb) => cb());
    Object.values(this.unsubscribeFromWsClose).forEach((cb) => cb());
    Object.values(this.users).forEach(({ transport }) => transport.close(1000));
    Object.values(this.spectators).forEach(({ transport }) =>
      transport.close(1000)
    );
    this.transition(null);
  }

  protected onMessage(userName: string, message: ClientActions): void {}

  protected abstract createSpectator(
    avatar: Avatar,
    transport: Transport
  ): Spectator<
    BaseState<
      GameState,
      UserState,
      SpectatorState,
      PublicGameKeys,
      PublicUserKeys,
      PrivateUserKeys,
      PublicSpectatorKeys,
      PrivateSpectatorKeys
    >
  >;

  protected abstract convertToSpectator(
    user: User<
      BaseState<
        GameState,
        UserState,
        SpectatorState,
        PublicGameKeys,
        PublicUserKeys,
        PrivateUserKeys,
        PublicSpectatorKeys,
        PrivateSpectatorKeys
      >
    >
  ): Spectator<
    BaseState<
      GameState,
      UserState,
      SpectatorState,
      PublicGameKeys,
      PublicUserKeys,
      PrivateUserKeys,
      PublicSpectatorKeys,
      PrivateSpectatorKeys
    >
  >;
}
