// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
export type PKTSkillDamageNotify = {
  skillId: number;
  skillDamageEvents: SkillDamageEvent.SkillDamageEvent[];
  unk3_0?: number;
  sourceId: bigint;
  skillEffectId?: number;
  skillLevel: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillDamageNotify;
  data.skillId = reader.u32();
  data.skillDamageEvents = reader.array(reader.u16(), () => SkillDamageEvent.read(reader), 50);
  if (reader.bool()) data.unk3_0 = reader.u32();
  data.sourceId = reader.u64();
  if (reader.bool()) data.skillEffectId = reader.u32();
  data.skillLevel = reader.u8();
  return data;
}
export const name = "PKTSkillDamageNotify";
export const opcode = 15734;
