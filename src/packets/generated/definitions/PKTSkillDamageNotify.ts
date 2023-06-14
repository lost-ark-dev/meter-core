// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
export type PKTSkillDamageNotify = {
  skillLevel: number;
  skillId: number;
  skillEffectId: number;
  sourceId: bigint;
  skillDamageEvents: SkillDamageEvent.SkillDamageEvent[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillDamageNotify;
  data.skillLevel = reader.u8();
  data.skillId = reader.u32();
  data.skillEffectId = reader.u32();
  data.sourceId = reader.u64();
  data.skillDamageEvents = reader.array(reader.u16(), () => SkillDamageEvent.read(reader), 50);
  return data;
}
export const name = "PKTSkillDamageNotify";
export const opcode = 10750;
