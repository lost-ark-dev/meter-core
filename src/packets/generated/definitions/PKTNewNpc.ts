// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type PKTNewNpc = {
  Unk0_0?: number;
  Unk1_0?: bigint;
  NpcStruct: NpcData.NpcData;
  Unk3: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewNpc;
  if (reader.bool()) data.Unk0_0 = reader.u8();
  if (reader.bool()) data.Unk1_0 = reader.u64();
  data.NpcStruct = NpcData.read(reader);
  data.Unk3 = reader.u8();
  return data;
}
export const name = "PKTNewNpc";
export const opcode = 31638;
