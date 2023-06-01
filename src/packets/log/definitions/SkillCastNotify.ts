import type { Read, Write } from "../../stream";
import type { PKTSkillCastNotify } from "../../generated/types";

export type SkillCastNotify = {
  skillLevel: number;
  caster: bigint;
  skillId: number;
};
export function read(reader: Read, version: number) {
  const data = {} as SkillCastNotify;
  data.skillLevel = reader.u8();
  data.caster = reader.u64();
  data.skillId = reader.u32();
  return data;
}
export function write(writer: Write, data: SkillCastNotify | PKTSkillCastNotify) {
  writer.u8(data.skillLevel);
  writer.u64(data.caster);
  writer.u32(data.skillId);
}

export const name = "SkillCastNotify";
