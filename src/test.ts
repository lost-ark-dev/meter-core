import { createReadStream, createWriteStream, readFileSync } from "fs";
import { MeterData } from "./data";
import { Decompressor } from "./decompressor";
import { LiveLogger, Logger, ReplayLogger } from "./logger/logger";
import { PktCaptureAll, PktCaptureMode } from "./pkt-capture";
import { PKTStream } from "./pkt-stream";
import { Parser } from "./logger/parser";
import path from "path";
import { LogEvent } from "./logger/logEvent";
import { damagetype, hitflag, itemstoragetype, triggersignaltype } from "./packets/generated/enums";
import * as reads from "./packets/generated/reads";
import { logId } from "./packets/log/logIds";
import { logMapping } from "./packets/log/logMapping";
import * as Vector3F from "./packets/common/Vector3F";
import { Read } from "./packets/stream";

import { inspect } from "util";
inspect.defaultOptions.depth = null; //Use to console log full objects for debug

const oodle_state = readFileSync("./meter-data/oodle_state.bin");
const xorTable = readFileSync("./meter-data/xor.bin");

const decompressor = new Decompressor(oodle_state, xorTable);
const stream = new PKTStream(decompressor);

const capture = new PktCaptureAll(PktCaptureMode.MODE_PCAP, 6040);
capture.on("packet", (buf) => {
  try {
    const badPkt = stream.read(buf);
    if (badPkt === false) console.error(`bad pkt ${buf.toString("hex")}`);
  } catch (e) {
    console.error(e);
  }
});

const meterData = new MeterData();
meterData.processEnumData(JSON.parse(readFileSync("meter-data/databases/Enums.json", "utf-8")));
meterData.processNpcData(JSON.parse(readFileSync("meter-data/databases/Npc.json", "utf-8")));
meterData.processPCData(JSON.parse(readFileSync("meter-data/databases/PCData.json", "utf-8")));
meterData.processSkillData(JSON.parse(readFileSync("meter-data/databases/Skill.json", "utf-8")));
meterData.processSkillBuffData(JSON.parse(readFileSync("meter-data/databases/SkillBuff.json", "utf-8")));
meterData.processSkillBuffEffectData(JSON.parse(readFileSync("meter-data/databases/SkillEffect.json", "utf-8")));

function logEvent(name: string, pkt: LogEvent<any>) {
  //console.log(name, pkt.time, pkt.parsed);
  console.log(
    `${name} - ${+pkt.time} - ${JSON.stringify(pkt.parsed, (_, v) => (typeof v === "bigint" ? v.toString() : v))}`
  );
}
/*
console.log(
  JSON.stringify(
    reads.PKTSkillDamageNotify(Buffer.from("", "hex")),
    (_, v) => {
      if (typeof v === "bigint") return v.toString() + "n";
      else if (typeof v === "object" && v.type === "Buffer") {
        return v.data.map((x: number) => x.toString(16).padStart(2, "0")).join("");
      } else return v;
    },
    2
  )
);*/

const testLive = true;
if (testLive) {
  const logger = new LiveLogger(stream, decompressor, path.resolve("../logs/test.raw"));

  const parser = new Parser(logger, meterData, "test_client", {
    isLive: true,
    resetAfterPhaseTransition: true,
  });
  logger.on("*", logEvent);
} else {
  const test = new Map();
  const logger = new ReplayLogger();

  let count = 0;
  const m = new Map<number, string | undefined>();
  const parser = new Parser(logger, meterData, "test_client", {
    isLive: true,
    resetAfterPhaseTransition: true,
  });
  logger.on("*", (name, pkt) => {
    logEvent(name, pkt);
  });
  logger.readLogByChunk(path.resolve("../logs/test.raw"));
  logger.on("fileEnd", () => {
    console.log(count);
    //parser.encounters;
    //console.log(parser.encounters);
  });
}

const opcodes: { [key: number]: string } = {};
try {
  readFileSync("../dump/opcodes.map", "utf-8")
    .split("\n")
    .forEach((line) => {
      const split = line.split(" ");
      if (split.length == 2) opcodes[parseInt(split[1]!)] = split[0]!;
    });
} catch (e) {
  console.error(`Couldn't find opcodes map file, using id instead of names`);
}

for (const server of [6010, 6020, 6030, 6040]) {
  const stream = new PKTStream(decompressor);

  const capture = new PktCaptureAll(PktCaptureMode.MODE_PCAP, server);
  capture.on("packet", (buf) => {
    try {
      const badPkt = stream.read(buf);
      if (badPkt === false) console.error(`bad pkt ${buf.toString("hex")}`);
    } catch (e) {
      console.error(e);
    }
  });

  // stream.on("PKTRaidTimerStart", (pkt) => {
  //   console.log(pkt.parsed);
  // });
  // stream.on("PKTNpcFuryInfoNotify", (pkt) => {
  //   console.log(pkt.parsed);
  // });

  stream.on("*", (data, opcode, compression, xor) => {
    try {
      const decomp = decompressor.decrypt(data, opcode, compression, xor);
      console.log(`${new Date().toISOString()} ${server} <- ${opcodes[opcode] ?? opcode} | ${decomp.toString("hex")}`);
    } catch (e) {
      console.error(e);
    }
  });
}
console.log("Logging");
