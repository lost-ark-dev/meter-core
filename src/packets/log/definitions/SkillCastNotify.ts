import type { Read, Write } from "../../stream";
import type { PKTSkillCastNotify } from "../../generated/types";

export type SkillCastNotify = {
  SkillLevel: number;
  Caster: bigint;
  SkillId: number;
};
export function read(reader: Read, version: number) {
  const data = {} as SkillCastNotify;
  data.SkillLevel = reader.u8();
  data.Caster = reader.u64();
  data.SkillId = reader.u32();
  return data;
}
export function write(writer: Write, data: SkillCastNotify | PKTSkillCastNotify) {
  writer.u8(data.SkillLevel);
  writer.u64(data.Caster);
  writer.u32(data.SkillId);
}

export const logId = 46;
export const name = "SkillCastNotify";
