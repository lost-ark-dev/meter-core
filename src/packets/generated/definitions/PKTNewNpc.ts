// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type PKTNewNpc = {
  Unk0_0?: bigint;
  Unk1: number;
  Unk0_0?: string;
  Unk0_1?: string;
  Unk3_0?: number;
  NpcStruct: NpcData.NpcData;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewNpc;
  if (reader.bool()) data.Unk0_0 = reader.u64();
  data.Unk1 = reader.u8();
  if (reader.bool() /*Unk0*/) {
    data.Unk0_0 = reader.string(20);
    data.Unk0_1 = reader.string(20);
  }
  if (reader.bool()) data.Unk3_0 = reader.u8();
  data.NpcStruct = NpcData.read(reader);
  return data;
}
export const name = "PKTNewNpc";
export const opcode = 34376;
