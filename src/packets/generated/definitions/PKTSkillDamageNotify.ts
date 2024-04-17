// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
export type PKTSkillDamageNotify = {
  unk1_0?: number;
  skillEffectId?: number;
  sourceId: bigint;
  skillLevel: number;
  skillId: number;
  skillDamageEvents: SkillDamageEvent.SkillDamageEvent[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillDamageNotify;
  if (reader.bool()) data.unk1_0 = reader.u32();
  if (reader.bool()) data.skillEffectId = reader.u32();
  data.sourceId = reader.u64();
  data.skillLevel = reader.u8();
  data.skillId = reader.u32();
  data.skillDamageEvents = reader.array(reader.u16(), () => SkillDamageEvent.read(reader), 50);
  return data;
}
export const name = "PKTSkillDamageNotify";
export const opcode = 28204;
