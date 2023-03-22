// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
export type PKTSkillDamageNotify = {
  SourceId: bigint;
  SkillId: number;
  SkillLevel: number;
  SkillDamageEvents: SkillDamageEvent.SkillDamageEvent[];
  SkillEffectId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillDamageNotify;
  data.SourceId = reader.u64();
  data.SkillId = reader.u32();
  data.SkillLevel = reader.u8();
  data.SkillDamageEvents = reader.array(reader.u16(), () => SkillDamageEvent.read(reader), 50);
  data.SkillEffectId = reader.u32();
  return data;
}
export const name = "PKTSkillDamageNotify";
export const opcode = 30373;
