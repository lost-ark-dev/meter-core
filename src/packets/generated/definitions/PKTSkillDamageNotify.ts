// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
export type PKTSkillDamageNotify = {
  SkillId: number;
  SkillLevel: number;
  SkillEffectId: number;
  SkillDamageEvents: SkillDamageEvent.SkillDamageEvent[];
  SourceId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillDamageNotify;
  data.SkillId = reader.u32();
  data.SkillLevel = reader.u8();
  data.SkillEffectId = reader.u32();
  data.SkillDamageEvents = reader.array(reader.u16(), () => SkillDamageEvent.read(reader), 50);
  data.SourceId = reader.u64();
  return data;
}
export const name = "PKTSkillDamageNotify";
export const opcode = 17998;
