class ReschedulableTimeout {
  private timeout: NodeJS.Timeout | undefined;

  constructor(public readonly intervalMs: number) {}

  public schedule(cb: () => void) {
    this.stop();
    this.timeout = setTimeout(() => {
      this.stop();
      cb();
    }, this.intervalMs);
  }

  public stop() {
    if (this.timeout) {
      clearInterval(this.timeout);
      this.timeout = undefined;
    }
  }
}

export class HeartbeatWebSocket extends WebSocket {
  private readonly intervalMs = 10_000;

  private clientSendingDataTimer = new ReschedulableTimeout(this.intervalMs);
  private clientReceivingDataTimer = new ReschedulableTimeout(this.intervalMs);
  private heartbeatTimeoutTimer = new ReschedulableTimeout(this.intervalMs);

  constructor(url: string) {
    super(url);

    this.addEventListener("open", () => {
      this.afterReceivingData();
      this.afterSendingData();
    });
    this.addEventListener("close", () => this.afterDisconnecting());
    this.addEventListener("message", () => this.afterReceivingData());
  }

  public send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void {
    super.send(data);
    this.afterSendingData();
  }

  private afterSendingData() {
    this.clientSendingDataTimer.schedule(() => this.send("ping"));
  }

  private afterReceivingData() {
    this.heartbeatTimeoutTimer.stop();
    this.clientReceivingDataTimer.schedule(() => {
      this.send("ping");
      this.heartbeatTimeoutTimer.schedule(() => this.terminate());
    });
  }

  private afterDisconnecting() {
    this.clientReceivingDataTimer.stop();
    this.clientSendingDataTimer.stop();
    this.heartbeatTimeoutTimer.stop();
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
