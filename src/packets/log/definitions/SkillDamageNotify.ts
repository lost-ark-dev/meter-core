import type { Read, Write } from "../../stream";
import type { PKTSkillDamageNotify } from "../../generated/types";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
export type SkillDamageNotify = {
  SkillLevel: number;
  SourceId: bigint;
  SkillId: number;
  SkillDamageEvents: SkillDamageEvent.SkillDamageEventLog[];
  SkillEffectId: number;
};
export function read(reader: Read, version: number) {
  const data = {} as SkillDamageNotify;
  data.SkillLevel = reader.u8();
  data.SourceId = reader.u64();
  data.SkillId = reader.u32();
  data.SkillDamageEvents = reader.array(reader.u16(), () => SkillDamageEvent.read(reader, version), 50);
  data.SkillEffectId = reader.u32();
  return data;
}
export function write(writer: Write, data: SkillDamageNotify | PKTSkillDamageNotify) {
  writer.u8(data.SkillLevel);
  writer.u64(data.SourceId);
  writer.u32(data.SkillId);
  writer.array(data.SkillDamageEvents, { maxLen: 50, lenType: "u16" }, (obj: SkillDamageEvent.SkillDamageEventLog) => {
    SkillDamageEvent.write(writer, obj);
  });
  writer.u32(data.SkillEffectId);
}

export const logId = 30;
export const name = "SkillDamageNotify";
