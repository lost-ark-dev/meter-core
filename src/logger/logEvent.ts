import { Read, Write } from "../packets/stream";
export class LogEvent<T> {
  time: Date;

  #logId: number;
  #data: Buffer;
  #read: (reader: Read) => T;
  #write: (writer: Write, data: T) => void;

  constructor(pkt: T, logId: number, write: (writer: Write, data: T) => void);
  constructor(
    data: Buffer,
    logId: number,
    time: Date,
    read: (reader: Read) => T,
    write: (writer: Write, data: T) => void
  );
  constructor(...args: any[]) {
    if (args.length === 5) {
      // create from log file
      const [data, logId, time, read, write] = args as [
        Buffer,
        number,
        Date,
        (r: Read) => T,
        (writer: Write, data: T) => void
      ];
      this.#data = data;
      this.time = time;
      this.#logId = logId;
      this.#read = read;
      this.#write = write;
    } else if (args.length === 3) {
      // create from live pkt
      const [pkt, logId, write] = args as [T, number, (writer: Write, data: T) => void];
      this.#data = Buffer.alloc(0);
      this.time = new Date();
      this.#logId = logId;
      this.#read = () => pkt;
      this.#write = write;
    } else {
      throw new Error(`[meter-core/logger/parser] - LogEvent<T>: Invalid constructor arguments`);
    }
  }

  // in case we listen for it more than once
  #readCached?: T;

  get parsed() {
    if (!this.#readCached) {
      try {
        this.#readCached = this.#read(new Read(this.#data));
      } catch (e) {
        console.error(`[meter-core/logger/parser] - parsed - ${e}`);
        return undefined;
      }
    }
    return this.#readCached;
  }

  #writeCached?: Buffer;

  get serialized() {
    if (!this.#writeCached) {
      try {
        if (!this.parsed) return undefined;
        const writer = new Write(); //TODO: use shared max sized buffer & only copy the result
        //Skip header size
        writer.skip(HEADER_FULL_SIZE);
        //Write log
        this.#write(writer, this.parsed);
        //Write header
        const buf = writer.value;
        buf.writeUint16LE(buf.length, HEADER_LEN_OFFSET);
        buf.writeUint16LE(this.#logId, HEADER_ID_OFFSET);
        buf.writeUintLE(+new Date(), HEADER_DATE_OFFSET, HEADER_DATE_SIZE);

        this.#writeCached = writer.value;
      } catch (e) {
        console.error(`[meter-core/logger/parser] - serialized - ${e}`);
        return undefined;
      }
    }
    return this.#writeCached;
  }
}

export const HEADER_VERSION_SIZE = 6,
  HEADER_LEN_SIZE = 2,
  HEADER_LEN_OFFSET = 0,
  HEADER_ID_SIZE = 2,
  HEADER_ID_OFFSET = HEADER_LEN_OFFSET + HEADER_LEN_SIZE,
  HEADER_DATE_SIZE = 6,
  HEADER_DATE_OFFSET = HEADER_ID_OFFSET + HEADER_ID_SIZE,
  HEADER_FULL_SIZE = HEADER_LEN_SIZE + HEADER_ID_SIZE + HEADER_DATE_SIZE;
