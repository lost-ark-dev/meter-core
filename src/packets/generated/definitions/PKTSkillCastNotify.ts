// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTSkillCastNotify = {
  skillLevel: number;
  skillId: number;
  caster: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillCastNotify;
  data.skillLevel = reader.u8();
  data.skillId = reader.u32();
  reader.skip(2);
  data.caster = reader.u64();
  return data;
}
export const name = "PKTSkillCastNotify";
export const opcode = 56741;
