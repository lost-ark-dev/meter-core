import type { Read, Write } from "../../stream";
import type { PKTSkillStageNotify } from "../../generated/types";
export type SkillStageNotify = {
  SourceId: bigint;
  SkillId: number;
  Stage: number;
};
export function read(reader: Read, version: number) {
  const data = {} as SkillStageNotify;
  data.SourceId = reader.u64();
  data.SkillId = reader.u32();
  data.Stage = reader.u8();
  return data;
}
export function write(writer: Write, data: SkillStageNotify | PKTSkillStageNotify) {
  writer.u64(data.SourceId);
  writer.u32(data.SkillId);
  writer.u8(data.Stage);
}

export const logId = 31;
export const name = "SkillStageNotify";
