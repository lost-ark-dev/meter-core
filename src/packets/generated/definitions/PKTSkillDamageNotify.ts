// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
export type PKTSkillDamageNotify = {
  SkillEffectId: number;
  SkillId: number;
  SourceId: bigint;
  SkillLevel: number;
  SkillDamageEvents: SkillDamageEvent.SkillDamageEvent[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillDamageNotify;
  data.SkillEffectId = reader.u32();
  data.SkillId = reader.u32();
  data.SourceId = reader.u64();
  data.SkillLevel = reader.u8();
  data.SkillDamageEvents = reader.array(reader.u16(), () => SkillDamageEvent.read(reader), 50);
  return data;
}
export const name = "PKTSkillDamageNotify";
export const opcode = 2813;
