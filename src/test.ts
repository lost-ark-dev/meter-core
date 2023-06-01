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
import { damagetype, hitflag } from "./packets/generated/enums";
import * as reads from "./packets/generated/reads";
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
/*
console.log(
  JSON.stringify(
    reads.PKTNewNpc(
      Buffer.from(
        "00000400000200090001f470020242061bf470021c42064d42064f420651005300550001fa0000000000eb196039040442003200b73f01020000000052a50000000000000052e0311f0000000000000000000000e40000000400a7c2690c00000000f47002e80300000000a7c2690c00000000f47002e80301000000a7c2690c000000004206e80300000100a7c2690c000000004206e80301000100",
        "hex"
      )
    ),
    (_, v) => {
      if (typeof v === "bigint") return v.toString() + "n";
      else if (typeof v === "object" && v.type === "Buffer") {
        return v.data.map((x: number) => x.toString(16).padStart(2, "0")).join("");
      } else return v;
    },
    2
  )
);
*/

const testLive = false;
if (testLive) {
  const logger = new LiveLogger(stream, decompressor, path.resolve("test.raw"));
  //const parser = new Parser(logger, meterData);
  //logger.on("*", logEvent);
} else {
  const test = new Map();
  const logger = new ReplayLogger();
  let count = 0;
  /*
  logger.on("NewNpc", (pkt) => {
    if (!pkt.parsed) return;
    console.log(pkt.parsed.npcStruct.balanceLevel, pkt.parsed.npcStruct.level, pkt.parsed.npcStruct.typeId);
  });
  */
  const parser = new Parser(logger, meterData, {
    isLive: false,
    splitOnPhaseTransition: true,
  });
  logger.readLogByChunk(path.resolve("test.raw"));
  logger.on("fileEnd", () => {
    console.log(count);
    console.log(parser.encounters);
  });
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
  stream.on("PKTNewNpc", (pkt) => {
    console.log(
      JSON.stringify(
        pkt.parsed,
        (_, v) => {
          if (typeof v === "bigint") return v.toString() + "n";
          else if (typeof v === "object" && v.type === "Buffer") {
            return v.data.map((x: number) => x.toString(16).padStart(2, "0")).join("");
          } else return v;
        },
        2
      )
    );
  });
  let total = 0;
  let count = 0;
  stream.on("PKTSkillDamageNotify", (pkt) => {
    if (pkt.parsed?.skillId === 17040) return;
    const dmg = pkt.parsed?.skillDamageEvents[0]?.damage;
    if (dmg) {
      if (dmg < 12000) {
        console.log(`Cleared mean dmg: ${total / count}`);
        total = 0;
        count = 0;
      } else {
        total += Number(dmg);
        count++;
        console.log(
          `Mean: ${total / count} - hit: ${dmg} - total hits: ${count} - diff: ${Math.abs(
            total / count - (total - Number(dmg)) / (count - 1)
          )}`
        );
      }
    }
  });
  
  stream.on("*", (data, opcode, compression, xor) => {
    try {
      const decomp = decompressor.decrypt(data, opcode, compression, xor);
      console.log(`${new Date().toISOString()} ${server} <- ${opcodes[opcode] ?? opcode} | ${decomp.toString("hex")}`);
    } catch (e) {
      console.error(e);
    }
  });
  
}
*/
console.log("Logging");
