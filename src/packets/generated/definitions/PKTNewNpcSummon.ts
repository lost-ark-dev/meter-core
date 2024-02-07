// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type PKTNewNpcSummon = {
  publishReason: number;
  npcData: NpcData.NpcData;
  ownerId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewNpcSummon;
  data.publishReason = reader.u8();
  data.npcData = NpcData.read(reader);
  data.ownerId = reader.u64();
  reader.skip(35);
  return data;
}
export const name = "PKTNewNpcSummon";
export const opcode = 47111;
