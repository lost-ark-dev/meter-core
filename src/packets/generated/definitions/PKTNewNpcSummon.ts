// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type PKTNewNpcSummon = {
  publishReason: number;
  ownerId: bigint;
  npcData: NpcData.NpcData;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewNpcSummon;
  data.publishReason = reader.u8();
  reader.skip(17);
  data.ownerId = reader.u64();
  reader.skip(18);
  data.npcData = NpcData.read(reader);
  return data;
}
export const name = "PKTNewNpcSummon";
export const opcode = 56600;
