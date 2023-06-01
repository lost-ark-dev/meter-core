import type { Read, Write } from "../../stream";
import type { PKTSkillStageNotify } from "../../generated/types";
export type SkillStageNotify = {
  sourceId: bigint;
  skillId: number;
  stage: number;
};
export function read(reader: Read, version: number) {
  const data = {} as SkillStageNotify;
  data.sourceId = reader.u64();
  data.skillId = reader.u32();
  data.stage = reader.u8();
  return data;
}
export function write(writer: Write, data: SkillStageNotify | PKTSkillStageNotify) {
  writer.u64(data.sourceId);
  writer.u32(data.skillId);
  writer.u8(data.stage);
}

export const name = "SkillStageNotify";
