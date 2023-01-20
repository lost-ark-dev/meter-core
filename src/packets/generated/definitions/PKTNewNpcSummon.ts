// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type PKTNewNpcSummon = {
  PublishReason: number;
  NpcData: NpcData.NpcData;
  OwnerId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewNpcSummon;
  data.PublishReason = reader.u8();
  data.NpcData = NpcData.read(reader);
  reader.skip(22);
  data.OwnerId = reader.u64();
  reader.skip(9);
  return data;
}
export const name = "PKTNewNpcSummon";
export const opcode = 26596;
