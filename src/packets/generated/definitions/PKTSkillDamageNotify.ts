// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
export type PKTSkillDamageNotify = {
  SkillLevel: number;
  SourceId: bigint;
  SkillId: number;
  SkillDamageEvents: SkillDamageEvent.SkillDamageEvent[];
  SkillEffectId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillDamageNotify;
  data.SkillLevel = reader.u8();
  data.SourceId = reader.u64();
  data.SkillId = reader.u32();
  data.SkillDamageEvents = reader.array(reader.u16(), () => SkillDamageEvent.read(reader), 50);
  data.SkillEffectId = reader.u32();
  return data;
}
export const name = "PKTSkillDamageNotify";
export const opcode = 50947;
