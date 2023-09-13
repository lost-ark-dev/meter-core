// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type PKTNewNpcSummon = {
  ownerId: bigint;
  publishReason: number;
  npcData: NpcData.NpcData;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewNpcSummon;
  reader.skip(20);
  data.ownerId = reader.u64();
  reader.skip(15);
  data.publishReason = reader.u8();
  data.npcData = NpcData.read(reader);
  return data;
}
export const name = "PKTNewNpcSummon";
export const opcode = 87;
