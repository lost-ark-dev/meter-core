// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type PKTNewNpcSummon = {
  NpcData: NpcData.NpcData;
  PublishReason: number;
  OwnerId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewNpcSummon;
  data.NpcData = NpcData.read(reader);
  data.PublishReason = reader.u8();
  reader.skip(28);
  data.OwnerId = reader.u64();
  reader.skip(3);
  return data;
}
export const name = "PKTNewNpcSummon";
export const opcode = 34300;
