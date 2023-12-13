// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
export type PKTSkillDamageNotify = {
  skillLevel: number;
  skillDamageEvents: SkillDamageEvent.SkillDamageEvent[];
  sourceId: bigint;
  skillEffectId: number;
  skillId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillDamageNotify;
  data.skillLevel = reader.u8();
  data.skillDamageEvents = reader.array(reader.u16(), () => SkillDamageEvent.read(reader), 50);
  data.sourceId = reader.u64();
  data.skillEffectId = reader.u32();
  data.skillId = reader.u32();
  return data;
}
export const name = "PKTSkillDamageNotify";
export const opcode = 59818;
