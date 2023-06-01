import type { Read, Write } from "../../stream";
import type { PKTBlockSkillStateNotify } from "../../generated/types";
export type BlockSkillStateNotify = {
  paralyzationMaxPoint: number;
  type: number;
  objectId: bigint;
  paralyzationPoint: number;
};
export function read(reader: Read, version: number) {
  const data = {} as BlockSkillStateNotify;
  data.paralyzationMaxPoint = reader.u32();
  data.type = reader.u8();
  data.objectId = reader.u64();
  data.paralyzationPoint = reader.u32();
  return data;
}
export function write(writer: Write, data: BlockSkillStateNotify | PKTBlockSkillStateNotify) {
  writer.u32(data.paralyzationMaxPoint);
  writer.u8(data.type);
  writer.u64(data.objectId);
  writer.u32(data.paralyzationPoint);
}

export const name = "BlockSkillStateNotify";
