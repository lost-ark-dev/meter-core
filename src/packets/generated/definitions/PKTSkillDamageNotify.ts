// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
export type PKTSkillDamageNotify = {
  skillLevel: number;
  sourceId: bigint;
  skillId: number;
  skillEffectId: number;
  skillDamageEvents: SkillDamageEvent.SkillDamageEvent[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillDamageNotify;
  data.skillLevel = reader.u8();
  data.sourceId = reader.u64();
  data.skillId = reader.u32();
  data.skillEffectId = reader.u32();
  data.skillDamageEvents = reader.array(reader.u16(), () => SkillDamageEvent.read(reader), 50);
  return data;
}
export const name = "PKTSkillDamageNotify";
export const opcode = 52509;
