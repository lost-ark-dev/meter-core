import type { Read, Write } from "../../stream";
import type { PKTNewNpcSummon } from "../../generated/types";
import * as NpcData from "../structures/NpcData";
export type NewNpcSummon = {
  publishReason: number;
  ownerId: bigint;
  npcData: NpcData.NpcDataLog;
};
export function read(reader: Read, version: number) {
  const data = {} as NewNpcSummon;
  data.publishReason = reader.u8();
  data.ownerId = reader.u64();
  data.npcData = NpcData.read(reader, version);
  return data;
}
export function write(writer: Write, data: NewNpcSummon | PKTNewNpcSummon) {
  writer.u8(data.publishReason);
  writer.u64(data.ownerId);
  NpcData.write(writer, data.npcData);
}

export const name = "NewNpcSummon";
