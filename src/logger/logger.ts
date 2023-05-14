import { TypedEmitter } from "tiny-typed-emitter";
import type { Decompressor } from "../decompressor";
import { mapping as pktMapping } from "../packets/generated/mapping";
import type { LogStreamEvent } from "../packets/log/LogStreamEvent";
import { codeMapping } from "../packets/log/codeMapping";
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
import { WriteStream, createWriteStream } from "fs";
import type { GameState } from "./data";
import { PacketBuffer } from "../pkt-buffer";
import { createReadStream } from "fs";
import { version } from "../packets/log/version";

export abstract class Logger extends TypedEmitter<LogStreamEvent> {
  //Only common behaviour is the emitted logStreamEvent
}
export class LiveLogger extends Logger {
  #decompressor: Decompressor;
  #logWriter?: WriteStream;
  constructor(stream: PKTStream, decompressor: Decompressor, filepath?: string) {
    super();
    this.#decompressor = decompressor;
    if (filepath) {
      this.#logWriter = createWriteStream(filepath, { highWaterMark: 0 });
    }

    //Write log header
    const versionBuffer = Buffer.allocUnsafe(HEADER_VERSION_SIZE);
    versionBuffer.writeUIntLE(version, 0, HEADER_VERSION_SIZE);
    this.#logWriter?.write(versionBuffer);

    stream.on("*", this.handlePkt.bind(this));
  }
  handlePkt(data: Buffer, opcode: number, compression: number, xor: boolean) {
    try {
      const pktMap = pktMapping.get(opcode);
      const codeMap = codeMapping.get(opcode);
      if (pktMap && codeMap) {
        const [logId] = codeMap;
        const [pktName, readPkt] = pktMap;
        const logMap = logMapping.get(logId);
        if (logMap) {
          const [logName, readLog, writeLog] = logMap;
          const pkt = new PKT(Buffer.from(data), opcode, compression, Boolean(xor), this.#decompressor, readPkt);
          const parsed = pkt.parsed;
          if (!parsed) return;
          const logEvent = new LogEvent(parsed, logId, writeLog);
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
