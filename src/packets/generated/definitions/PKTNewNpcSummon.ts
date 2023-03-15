// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type PKTNewNpcSummon = {
  OwnerId: bigint;
  NpcData: NpcData.NpcData;
  PublishReason: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewNpcSummon;
  reader.skip(4);
  data.OwnerId = reader.u64();
  reader.skip(27);
  data.NpcData = NpcData.read(reader);
  data.PublishReason = reader.u8();
  return data;
}
export const name = "PKTNewNpcSummon";
export const opcode = 20589;
