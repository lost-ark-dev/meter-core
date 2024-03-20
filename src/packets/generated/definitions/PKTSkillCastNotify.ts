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
  reader.skip(1);
  data.skillId = reader.u32();
  data.caster = reader.u64();
  reader.skip(1);
  data.skillLevel = reader.u8();
  return data;
}
export const name = "PKTSkillCastNotify";
export const opcode = 39612;
