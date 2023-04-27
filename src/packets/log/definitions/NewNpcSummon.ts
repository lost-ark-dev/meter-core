import type { Read, Write } from "../../stream";
import type { PKTNewNpcSummon } from "../../generated/types";
import * as NpcData from "../structures/NpcData";
export type NewNpcSummon = {
  PublishReason: number;
  OwnerId: bigint;
  NpcData: NpcData.NpcDataLog;
};
export function read(reader: Read, version: number) {
  const data = {} as NewNpcSummon;
  data.PublishReason = reader.u8();
  data.OwnerId = reader.u64();
  data.NpcData = NpcData.read(reader, version);
  return data;
}
export function write(writer: Write, data: NewNpcSummon | PKTNewNpcSummon) {
  writer.u8(data.PublishReason);
  writer.u64(data.OwnerId);
  NpcData.write(writer, data.NpcData);
}

export const logId = 13;
export const name = "NewNpcSummon";
