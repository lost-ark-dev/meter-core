import { createReadStream, createWriteStream, readFileSync } from "fs";
import { inspect } from "util";
import { MeterData } from "./data";
import { Decompressor } from "./decompressor";
import { LiveLogger, Logger, ReplayLogger } from "./logger/logger";
import { PktCaptureAll, PktCaptureMode } from "./pkt-capture";
import { PKTStream } from "./pkt-stream";
import { Parser } from "./logger/parser";
import path from "path";
import type { LogEvent } from "./logger/logEvent";
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
  console.log(`${name} - ${JSON.stringify(pkt.parsed, (_, v) => (typeof v === "bigint" ? v.toString() : v))}`);
}
const testLive = false;
if (testLive) {
  const logger = new LiveLogger(stream, decompressor, path.resolve("test.raw"));
  //const parser = new Parser(logger, meterData);
  logger.on("*", logEvent);
} else {
  const logger = new ReplayLogger();
  logger.on("InitPC", (pkt) => {
    logEvent("InitPC", pkt);
  });
  logger.readLogByChunk(path.resolve("test.raw"));
}

/*
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
stream.on("*", (data, opcode, compression, xor) => {
  try {
    const decomp = decompressor.decrypt(data, opcode, compression, xor);
    console.log(`${opcodes[opcode] ?? opcode} <- ${decomp.toString("hex")}`);
  } catch (e) {
    console.error(e);
  }
});
*/
console.log("Logging");
