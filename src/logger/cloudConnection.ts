import net from "net";
import { TypedEmitter } from "tiny-typed-emitter";
import { CloudStreamEvent } from "../packets/cloud/CloudStreamEvent";
import { PacketBuffer } from "../pkt-buffer";
import { cloudMapping } from "../packets/cloud/cloudMapping";
import { CloudPKT } from "../packets/cloud/CloudPKT";
import { cloudId } from "../packets/cloud/cloudIds";
import { CloudPKTType } from "../packets/cloud/cloudPKTType";
import { Write } from "../packets/stream";
import { version } from "../packets/log/version";
import axios from "axios";

export enum ConnState {
  OFFLINE,
  NO_GAME, //Same as offline, but does not auto reconnect except when new game packet arrives
  CONNECTING,
  AUTHING,
  IDLE,
  SENDING,
  NO_AUTH,
  ERROR,
}

export class CloudConnection extends TypedEmitter<CloudStreamEvent> {
  socket: net.Socket;
  serverList = [
    //{ ip: "127.0.0.1", port: 8001 }
  ];
  token: string | undefined;
  #sendQueue: Array<Buffer> = [];
  connState: ConnState = ConnState.NO_AUTH;
  reconnectTimeout: ReturnType<typeof setTimeout> | undefined;
  gameIdleTimeout: ReturnType<typeof setTimeout> | undefined;

  constructor(token?: string | undefined) {
    super();
    this.socket = new net.Socket();
    this.token = token;
    if (token) this.setAuthState(ConnState.OFFLINE);
    const pktBuffer = new PacketBuffer();
    this.socket
      .on("data", (data) => {
        pktBuffer.write(data);
        let b: Buffer | undefined;
        while ((b = pktBuffer.read())) {
          if (b.length < 4) continue; //In case of empty/invalid header
          //read header
          const size = b.readUint16LE(0);
          if (size != b.length) continue; // check in case
          const opcode = b.readUint16LE(2);

          const pkt = cloudMapping.get(opcode);
          if (pkt) {
            const [name, read, write] = pkt;
            this.emit(name as keyof CloudStreamEvent, new CloudPKT(Buffer.from(b.subarray(4)), opcode, read));
            this.emit("*", name, new CloudPKT(Buffer.from(b.subarray(4)), opcode, read));
          }
        }
      })
      .on("close", () => {
        this.destroy();
        if (
          [ConnState.CONNECTING, ConnState.AUTHING, ConnState.IDLE, ConnState.SENDING, ConnState.OFFLINE].includes(
            this.connState
          )
        ) {
          this.setAuthState(ConnState.OFFLINE);
          clearTimeout(this.reconnectTimeout);
          this.reconnectTimeout = setTimeout(() => {
            //TODO: set up max retries for different reasons
            //Consider offline in those cases (it'll allow for reconnect with input or other trigger)
            this.reconnect();
          }, 5000);
        }
      })
      .on("error", (e) => {
        console.log(`Conn error ${e}`);
      })
      .on("connect", () => {
        if (this.token) {
          this.setAuthState(ConnState.AUTHING);
          this.#send(
            this.prepare("CC_Auth", {
              token: this.token,
              version,
            })
          );
        } else {
          this.setAuthState(ConnState.NO_AUTH);
          this.destroy();
        }
      });
    this.reconnect(); //even if we don't have game packets, we still connect once to try connectivity, license, and get codes & xorkey
  }
  destroy() {
    this.socket.destroy();
  }
  reconnect() {
    if (![ConnState.OFFLINE, ConnState.NO_GAME].includes(this.connState)) return; //Only reconnect if we are currently offline or disconnected
    this.setAuthState(ConnState.CONNECTING);
    this.getBestServer().then((server) => {
      if (!server) return;
      if (this.connState !== ConnState.CONNECTING) return; //Something weird happened, shouldn't create 2 connections
      console.info(`[CloudConnection] - Picked node: ${server.ip}:${server.port} with latency ${server.latency}`);
      this.socket.connect(server.port, server.ip);
    });
  }
  async getBestServer() {
    const res = await axios.get("https://nodes-la.herysia.com/nodes");
    if (res.status !== 200 && res.status !== 304) return;
    return Promise.all(
      [...res.data.map((ip: string) => ({ ip, port: 8001 })), ...this.serverList].map(({ ip, port }) =>
        this.getLatency(ip, port)
      )
    ).then((values) => {
      return values.reduce((prev, curr) => {
        return prev && prev.latency < curr.latency ? prev : curr;
      });
    });
  }
  getLatency(ip: string, port: number): Promise<{ ip: string; port: number; latency: number }> {
    return new Promise((resolve) => {
      const s = new net.Socket();
      const startTime = +new Date();
      s.setTimeout(5000);
      s.on("error", (e) => {
        s.destroy();
        resolve({ ip, port, latency: 5000 });
      }); //ignore error
      s.on("timeout", () => {
        s.destroy();
        resolve({ ip, port, latency: 5000 });
      });
      s.connect(port, ip, () => {
        s.destroy();
        resolve({ ip, port, latency: +new Date() - startTime });
      });
    });
  }
  prepare<T extends keyof typeof cloudId>(name: T, pkt: CloudPKTType[T]): Buffer | undefined {
    //Public send (prepare & queue)
    const code = cloudId[name];
    const m = cloudMapping.get(code);
    if (m) {
      const [name, read, write] = m;
      try {
        const writer = new Write();
        writer.skip(4); //skip header
        write(writer, pkt); // content
        const buf = writer.value;
        //header
        buf.writeUint16LE(buf.length); //size
        buf.writeUint16LE(code, 2); //opcode
        return buf;
      } catch (e) {}
    }
    return;
  }
  send<T extends keyof typeof cloudId>(name: T, pkt: CloudPKTType[T]) {
    let buf;
    if ((buf = this.prepare(name, pkt))) {
      this.#sendQueue.push(buf);
    }
    this.flushQueue();
  }
  async flushQueue() {
    //Empty queue
    switch (this.connState) {
      case ConnState.OFFLINE:
      case ConnState.NO_GAME:
        //TODO: start logging in
        break;
      case ConnState.IDLE:
        //Enter sending mode
        this.connState = ConnState.SENDING;
        //Try to send all packets in order
        let idx, buf;
        for ([idx, buf] of this.#sendQueue.entries()) {
          if (!(await this.#send(buf))) {
            break;
          }
        }
        this.#sendQueue.splice(0, (idx ?? 0) + 1); //Remove successfully sent elements from queue

        //Go back to Idle (if we're truly still sending -> don't override error state for ex)
        if (this.connState === ConnState.SENDING) this.connState = ConnState.IDLE;
        break;
      case ConnState.NO_AUTH:
      case ConnState.CONNECTING:
      case ConnState.SENDING:
      case ConnState.AUTHING:
      default:
        //We wait here
        break;
    }
  }
  /**
   * Used to send a buffer, return True if success
   * @param buf
   * @returns
   */
  #send(buf: Buffer | undefined): Promise<boolean> {
    return new Promise((resolve) => {
      if (!buf) return resolve(true);
      this.socket.write(buf, (e) => {
        if (e) console.log(e);
        resolve(!e);
      });
    });
  }
  failAuth() {
    //TODO: handle a few retries

    this.setAuthState(ConnState.NO_AUTH);
    this.destroy();
  }
  setError() {
    this.setAuthState(ConnState.ERROR);
    this.destroy();
  }
  /**
   * Set connection state, and emit an event (used to know the auth status -> shouldn't use it with sending & idle)
   * @param state
   */
  setAuthState(state: ConnState) {
    this.connState = state;
    this.emit("authState", state);
  }
  initGameIdleTimeout() {
    if (!this.gameIdleTimeout) {
      //Initialize gameIdleTimeout on 1st "idle" state
      this.gameIdleTimeout = setTimeout(() => {
        console.info("[CloudConnection] - No game packets detected, logging out");
        //This timeout must be reseted every time we receive a game packet. If it get triggers, user will reconnect as soon as it has a new game packet
        if (![ConnState.ERROR, ConnState.NO_AUTH].includes(this.connState))
          //Do not update connection state if it was previously in error or no auth (to not wrongly become OFFLINE)
          this.setAuthState(ConnState.NO_GAME);
        this.destroy();
      }, 300000); //300000 = 5mn without game packets (very safe as the game would have sent at least a ping way earlier)
    } else {
      this.gameIdleTimeout.refresh();
    }
  }
  /**
   * Update the currently used token with a new one
   * and try to reconnect if the previous connection was in "no auth" state
   * Otherwise, stay logged in to prevent disrupting the current connection
   * @param token
   */
  updateAuthToken(token: string | undefined) {
    this.token = token;
    if (token && this.connState === ConnState.NO_AUTH) {
      this.connState = ConnState.OFFLINE;
      this.reconnect();
    }
  }
}
