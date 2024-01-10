// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
export type PKTSkillDamageNotify = {
  skillDamageEvents: SkillDamageEvent.SkillDamageEvent[];
  unk2_0?: number;
  skillEffectId?: number;
  sourceId: bigint;
  skillId: number;
  skillLevel: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillDamageNotify;
  data.skillDamageEvents = reader.array(reader.u16(), () => SkillDamageEvent.read(reader), 50);
  if (reader.bool()) data.unk2_0 = reader.u32();
  if (reader.bool()) data.skillEffectId = reader.u32();
  data.sourceId = reader.u64();
  data.skillId = reader.u32();
  data.skillLevel = reader.u8();
  return data;
}
export const name = "PKTSkillDamageNotify";
export const opcode = 4363;
