export class HeartbeatWebSocket extends WebSocket {
  private readonly intervalMs = 10_000;
  private heartbeatTimer: NodeJS.Timeout | undefined = undefined;
  private heartbeatTimeoutTimer: NodeJS.Timeout | undefined = undefined;

  constructor(url: string) {
    super(url);

    this.addEventListener("open", () => this.schedule());
    this.addEventListener("close", () => this.cancel());
    this.addEventListener("message", () => this.schedule());
  }

  /**
   * Call this when you have proof that we are currently connected
   * IE the websocket just opened or we just received a message
   */
  public schedule() {
    this.clearSchedule();
    this.scheduleHeartbeat();
  }

  /**
   * Call this when the websocket closes
   * This pauses the heartbeats until we're back online
   */
  public cancel() {
    this.clearSchedule();
  }

  /**
   * In `intervalMs` ms, sends a /ping request
   * This ensures that there is *some* traffic on the WS
   *
   * Then schedules a timeout, meaning that if we don't hear
   * any message on the WS in the next `intervalMs`, closes the WS
   */
  private scheduleHeartbeat() {
    this.heartbeatTimer = setTimeout(() => {
      this.send("ping");
      this.scheduleTimeout();
    }, this.intervalMs);
  }

  /**
   * In `intervalMs` ms, closes the WS
   *
   * Normally, we'll receive a WS message (eg response to our heartbeat)
   * before then, which cancels this
   */
  private scheduleTimeout() {
    this.heartbeatTimeoutTimer = setTimeout(() => {
      this.terminate();
    }, this.intervalMs);
  }

  /**
   * Clear any existing heartbeat / timeout timers
   */
  private clearSchedule() {
    if (this.heartbeatTimer) {
      clearTimeout(this.heartbeatTimer);
    }

    if (this.heartbeatTimeoutTimer) {
      clearTimeout(this.heartbeatTimeoutTimer);
    }
  }

  private terminated: boolean = false;

  private terminate() {
    this.dispatchEvent(
      new CloseEvent("close", {
        reason: "heartbeat failed",
        code: 1000,
        wasClean: false,
      })
    );

    this.terminated = true;
    this.close();
  }

  public addEventListener<K extends keyof WebSocketEventMap>(
    type: K,
    listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions | undefined
  ): void;
  public addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions | undefined
  ): void;
  public addEventListener(
    type: unknown,
    listener: unknown,
    options?: unknown
  ): void {
    super.addEventListener(
      type as any,
      (...args: any[]) => {
        if (this.terminated) {
          return;
        } else {
          return (listener as any)(...args);
        }
      },
      options as any
    );
  }
}
