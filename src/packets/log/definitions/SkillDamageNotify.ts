import type { Read, Write } from "../../stream";
import type { PKTSkillDamageNotify } from "../../generated/types";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
export type SkillDamageNotify = {
  skillLevel: number;
  sourceId: bigint;
  skillId: number;
  skillDamageEvents: SkillDamageEvent.SkillDamageEventLog[];
  skillEffectId?: number;
};
export function read(reader: Read, version: number) {
  const data = {} as SkillDamageNotify;
  data.skillLevel = reader.u8();
  data.sourceId = reader.u64();
  data.skillId = reader.u32();
  data.skillDamageEvents = reader.array(reader.u16(), () => SkillDamageEvent.read(reader, version), 50);
  data.skillEffectId = reader.u32();
  return data;
}
export function write(writer: Write, data: SkillDamageNotify | PKTSkillDamageNotify) {
  writer.u8(data.skillLevel);
  writer.u64(data.sourceId);
  writer.u32(data.skillId);
  writer.array(data.skillDamageEvents, { maxLen: 50, lenType: "u16" }, (obj: SkillDamageEvent.SkillDamageEventLog) => {
    SkillDamageEvent.write(writer, obj);
  });
  writer.u32(data.skillEffectId ?? 0);
}

export const name = "SkillDamageNotify";
