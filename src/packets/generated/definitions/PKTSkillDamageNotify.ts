// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
export type PKTSkillDamageNotify = {
  skillId: number;
  skillDamageEvents: SkillDamageEvent.SkillDamageEvent[];
  sourceId: bigint;
  skillEffectId: number;
  skillLevel: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillDamageNotify;
  data.skillId = reader.u32();
  data.skillDamageEvents = reader.array(reader.u16(), () => SkillDamageEvent.read(reader), 50);
  data.sourceId = reader.u64();
  data.skillEffectId = reader.u32();
  data.skillLevel = reader.u8();
  return data;
}
export const name = "PKTSkillDamageNotify";
export const opcode = 53866;
