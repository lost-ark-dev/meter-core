import { readFileSync } from "fs";
import { inspect } from "util";
import { MeterData } from "./data";
import { Decompressor } from "./decompressor";
import { LegacyLogger } from "./legacy-logger";
import { PktCaptureAll, PktCaptureMode } from "./pkt-capture";
import { PKTStream } from "./pkt-stream";

const oodle_state = readFileSync("./meter-data/oodle_state.bin");
const xorTable = readFileSync("./meter-data/xor.bin");

const compressor = new Decompressor(oodle_state, xorTable);
const stream = new PKTStream(compressor);

const capture = new PktCaptureAll(PktCaptureMode.MODE_PCAP);
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

const legacyLogger = new LegacyLogger(stream, meterData);
legacyLogger.on("line", (line) => {
  console.log(line);
});
/*
stream.on("*", (data, opcode, compression, xor) => {
  try {
    compressor.decrypt(data, opcode, compression, xor);
  } catch (e) {
    compressor.logErrorFunc(e);
  }
});
*/
inspect.defaultOptions.depth = null;

console.log("Logging");
