// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
export type PKTSkillDamageNotify = {
  skillEffectId: number;
  skillLevel: number;
  skillId: number;
  skillDamageEvents: SkillDamageEvent.SkillDamageEvent[];
  sourceId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillDamageNotify;
  data.skillEffectId = reader.u32();
  data.skillLevel = reader.u8();
  data.skillId = reader.u32();
  data.skillDamageEvents = reader.array(reader.u16(), () => SkillDamageEvent.read(reader), 50);
  data.sourceId = reader.u64();
  return data;
}
export const name = "PKTSkillDamageNotify";
export const opcode = 17244;
