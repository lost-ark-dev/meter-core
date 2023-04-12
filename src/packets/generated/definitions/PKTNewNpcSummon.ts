// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type PKTNewNpcSummon = {
  PublishReason: number;
  OwnerId: bigint;
  NpcData: NpcData.NpcData;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewNpcSummon;
  data.PublishReason = reader.u8();
  reader.skip(18);
  data.OwnerId = reader.u64();
  reader.skip(13);
  data.NpcData = NpcData.read(reader);
  return data;
}
export const name = "PKTNewNpcSummon";
export const opcode = 3448;
