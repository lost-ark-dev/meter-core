// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTSkillCastNotify = {
  skillId: number;
  caster: bigint;
  skillLevel: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillCastNotify;
  data.skillId = reader.u32();
  data.caster = reader.u64();
  data.skillLevel = reader.u8();
  reader.skip(1);
  return data;
}
export const name = "PKTSkillCastNotify";
export const opcode = 44248;
