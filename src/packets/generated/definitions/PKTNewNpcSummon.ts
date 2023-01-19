// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type PKTNewNpcSummon = {
  OwnerId: bigint;
  PublishReason: number;
  NpcData: NpcData.NpcData;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewNpcSummon;
  reader.skip(5);
  data.OwnerId = reader.u64();
  reader.skip(26);
  data.PublishReason = reader.u8();
  data.NpcData = NpcData.read(reader);
  return data;
}
export const name = "PKTNewNpcSummon";
export const opcode = 13729;
