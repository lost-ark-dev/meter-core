// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type PKTNewNpc = {
  Unk0: number;
  Unk0_0?: string;
  Unk0_1?: string;
  NpcStruct: NpcData.NpcData;
  Unk3_0?: bigint;
  Unk4_0?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewNpc;
  data.Unk0 = reader.u8();
  if (reader.bool() /*Unk0*/) {
    data.Unk0_0 = reader.string(20);
    data.Unk0_1 = reader.string(20);
  }
  data.NpcStruct = NpcData.read(reader);
  if (reader.bool()) data.Unk3_0 = reader.u64();
  if (reader.bool()) data.Unk4_0 = reader.u8();
  return data;
}
export const name = "PKTNewNpc";
export const opcode = 9084;
