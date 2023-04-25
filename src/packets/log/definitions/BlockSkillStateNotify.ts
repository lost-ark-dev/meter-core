import type { Read, Write } from "../../stream";
import type { PKTBlockSkillStateNotify } from "../../generated/types";
export type BlockSkillStateNotify = {
  ParalyzationMaxPoint: number;
  Type: number;
  ObjectId: bigint;
  ParalyzationPoint: number;
};
export function read(reader: Read, version: number) {
  const data = {} as BlockSkillStateNotify;
  data.ParalyzationMaxPoint = reader.u32();
  data.Type = reader.u8();
  data.ObjectId = reader.u64();
  data.ParalyzationPoint = reader.u32();
  return data;
}
export function write(writer: Write, data: BlockSkillStateNotify | PKTBlockSkillStateNotify) {
  writer.u32(data.ParalyzationMaxPoint);
  writer.u8(data.Type);
  writer.u64(data.ObjectId);
  writer.u32(data.ParalyzationPoint);
}

export const logId = 4;
export const name = "BlockSkillStateNotify";
