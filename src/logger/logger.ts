import { TypedEmitter } from "tiny-typed-emitter";
import type { Decompressor } from "../decompressor";
import type { LogStreamEvent } from "../packets/log/LogStreamEvent";
import { logMapping } from "../packets/log/logMapping";
import { PKT, PKTStream } from "../pkt-stream";
import {
  HEADER_DATE_OFFSET,
  HEADER_DATE_SIZE,
  HEADER_FULL_SIZE,
  HEADER_ID_OFFSET,
  HEADER_ID_SIZE,
  HEADER_VERSION_SIZE,
  LogEvent,
} from "./logEvent";
import { WriteStream, cp, createWriteStream } from "fs";
import type { GameState } from "./data";
import { PacketBuffer } from "../pkt-buffer";
import { createReadStream } from "fs";
import { version } from "../packets/log/version";
import { CC_Data, CS_Data } from "../packets/cloud/types";
import { CloudPKT } from "../packets/cloud/CloudPKT";
import { CloudConnection, ConnState } from "./cloudConnection";
import { logId } from "../packets/log/logIds";
import { MigrationExecute as WriteMigrationExecute } from "../packets/log/writes";

export { ConnState };

export abstract class Logger extends TypedEmitter<LogStreamEvent> {
  //Only common behaviour is the emitted logStreamEvent
}
export class LiveLogger extends Logger {
  #decompressor: Decompressor;
  #logWriter?: WriteStream;
  #cloudConnection: CloudConnection;
  #opcodeFilter: number[] = [];
  #migrationCode = 0;
  #waitingForMigration = false;
  ip: string | undefined;

  constructor(stream: PKTStream, decompressor: Decompressor, filepath?: string) {
    super();
    this.#decompressor = decompressor;
    this.#cloudConnection = new CloudConnection();
    this.#cloudConnection
      .on("CS_Auth", (pkt) => {
        const parsed = pkt.parsed;
        if (parsed) {
          this.#opcodeFilter = parsed.opcodes;
          this.#decompressor.xorTable = parsed.xorkey;
          this.#migrationCode = parsed.migration;
          if (this.#cloudConnection.connState === ConnState.AUTHING) this.#cloudConnection.setAuthState(ConnState.IDLE);
          this.#cloudConnection.initGameIdleTimeout(); //Init/refresh game packet timeout
        }
      })
      .on("CS_Data", this.handlePkt.bind(this))
      .on("CS_Error", (pkt) => {
        //TODO: handle & display errors
        //TODO: map error codes ?
        switch (pkt.parsed?.code) {
          case 0: //bad auth
          case 8: //auth timeout
            this.#cloudConnection.failAuth();
            break;
          case 2:
            //Bad version
            this.#cloudConnection.setError();
            break;
          case 10: // Multiple connections
            this.#cloudConnection.failAuth();
            break;
          case 60000:
            //Prepare for migration
            this.#waitingForMigration = true;
            break;
          case 5:
          case 4:
            //TODO: add max occurences (to detect bad game version) and try to relog
            break;
          case 1:
          case 3:
          case 6:
          case 7:
          case 9:
          default:
            break;
        }
        console.error(`[meter-core/logger] - cloud error (${pkt.parsed?.code}): ${pkt.parsed?.msg}`);
      })
      .on("CCS_PingPong", () => {
        this.#cloudConnection.send("CCS_PingPong", {});
      })
      .on("CS_SyncDmg", (pkt) => {
        const parsed = pkt.parsed;
        if (parsed) this.emit("syncDmg", parsed);
      })
      .on("CS_SyncZone", (pkt) => {
        const parsed = pkt.parsed;
        if (parsed) this.emit("syncZone", parsed);
      })
      .on("authState", (state) => {
        this.emit("authState", state); //Forward auth state event
      });

    if (filepath) {
      this.#logWriter = createWriteStream(filepath, { highWaterMark: 0 });
    }

    //Write log header
    const versionBuffer = Buffer.allocUnsafe(HEADER_VERSION_SIZE);
    versionBuffer.writeUIntLE(version, 0, HEADER_VERSION_SIZE);
    this.#logWriter?.write(versionBuffer);

    stream.on("*", (data: Buffer, opcode: number, compression: number, xor: boolean) => {
      try {
        this.#cloudConnection.gameIdleTimeout?.refresh();
        //If the server requested migration, we reconnect in that case
        if (this.#waitingForMigration && opcode === this.#migrationCode) {
          this.#cloudConnection.setAuthState(ConnState.OFFLINE); //Manually set offline to be sure not to send any more packets as they'll be lost
          this.#cloudConnection.destroy();
          if (this.ip) this.#cloudConnection.send("CC_OnConnect", { ip: this.ip }); //On migration, send the current server IP for rdps region resolving
        }
        if (this.#opcodeFilter.includes(opcode) && this.#decompressor.xorTable) {
          //Send pkt to server
          const timestamp = +new Date();
          const decomp = this.#decompressor.decrypt(data, opcode, compression, xor);
          this.#cloudConnection.send("CC_Data", { data: decomp, opcode, timestamp });
        }
      } catch (e) {
        console.error(e);
      }
    });
  }
  handlePkt(pkt: CloudPKT<CS_Data>) {
    try {
      const parsed = pkt.parsed;
      if (parsed) {
        const logMap = logMapping.get(parsed.logId);
        if (logMap) {
          const [logName, readLog, writeLog] = logMap;
          const logEvent = new LogEvent(
            parsed.data,
            parsed.logId,
            new Date(parsed.timestamp),
            (reader) => readLog(reader, version),
            writeLog
          );
          // Dispatch LogEvent
          this.emit(logName as keyof LogStreamEvent, logEvent);
          this.emit("*", logName, logEvent);
          // Dispatch serialized event
          this.appendLog(logEvent);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
  appendLog(logEvent: LogEvent<any>) {
    if (this.#logWriter && logEvent.serialized) this.#logWriter.write(logEvent.serialized);
  }
  onConnect(ip: string) {
    this.ip = ip; //Store ip here in case of migration
    this.#cloudConnection.send("CC_OnConnect", { ip });
  }
  updateAuthToken(jwt: string | undefined) {
    this.#cloudConnection.updateAuthToken(jwt);
  }
  forceUpdateAuthState() {
    if (
      [
        ConnState.OFFLINE,
        ConnState.NO_GAME,
        ConnState.CONNECTING,
        ConnState.AUTHING,
        ConnState.IDLE,
        ConnState.NO_AUTH,
        ConnState.ERROR,
      ].includes(this.#cloudConnection.connState)
    )
      this.emit("authState", this.#cloudConnection.connState);
  }
}
export class ReplayLogger extends Logger {
  readLogByChunk(filepath: string) {
    const pktBuffer = new PacketBuffer();
    const logReader = createReadStream(filepath);
    let end = false;
    let ver: number | undefined;
    logReader
      .on("data", (chunk: Buffer) => {
        if (ver === undefined) {
          ver = this.readVersion(chunk);
          if (ver > version) {
            logReader.destroy();
            return;
          }
          chunk = chunk.subarray(HEADER_VERSION_SIZE);
        }
        pktBuffer.write(chunk);
        let pkt: Buffer | undefined;
        while ((pkt = pktBuffer.read())) {
          this.readLogChunk(pkt, ver);
        }
      })
      .on("end", () => {
        end = true;
        this.emit("fileEnd", "end");
      })
      .on("close", () => {
        if (!end) this.emit("fileEnd", "closed");
      });
  }
  readLogChunk(buf: Buffer, version: number): false | void {
    try {
      if (buf.length < 8) return false;

      //const len = buf.readUint16LE(HEADER_LEN_OFFSET);
      const logId = buf.readUIntLE(HEADER_ID_OFFSET, HEADER_ID_SIZE);
      const time = new Date(buf.readUintLE(HEADER_DATE_OFFSET, HEADER_DATE_SIZE));
      const data = buf.subarray(HEADER_FULL_SIZE);

      const logMap = logMapping.get(logId);
      if (logMap) {
        const [logName, readLog, writeLog] = logMap;
        const logEvent = new LogEvent(data, logId, new Date(time), (reader) => readLog(reader, version), writeLog);
        // Dispatch LogEvent
        this.emit(logName as keyof LogStreamEvent, logEvent);
        this.emit("*", logName, logEvent);
      }
    } catch (e) {
      console.error(e);
    }
  }
  readVersion(b: Buffer): number {
    return b.readUintLE(0, HEADER_VERSION_SIZE);
  }
}

export type LogFileEntry = {
  filename: string;
  parsedContents: GameState;
  date: Date;
};
