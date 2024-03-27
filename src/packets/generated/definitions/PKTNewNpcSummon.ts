// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type PKTNewNpcSummon = {
  ownerId: bigint;
  npcData: NpcData.NpcData;
  publishReason: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewNpcSummon;
  reader.skip(21);
  data.ownerId = reader.u64();
  reader.skip(14);
  data.npcData = NpcData.read(reader);
  data.publishReason = reader.u8();
  return data;
}
export const name = "PKTNewNpcSummon";
export const opcode = 13454;
