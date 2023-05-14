// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTSkillCastNotify = {
  SkillLevel: number;
  Caster: bigint;
  SkillId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillCastNotify;
  data.SkillLevel = reader.u8();
  data.Caster = reader.u64();
  data.SkillId = reader.u32();
  reader.skip(2);
  return data;
}
export const name = "PKTSkillCastNotify";
export const opcode = 40202;
