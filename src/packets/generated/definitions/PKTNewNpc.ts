// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type PKTNewNpc = {
  NpcStruct: NpcData.NpcData;
  Unk1: number;
  Unk2_0?: bigint;
  Unk3_0?: number;
  Unk0_0?: string;
  Unk0_1?: string;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewNpc;
  data.NpcStruct = NpcData.read(reader);
  data.Unk1 = reader.u8();
  if (reader.bool()) data.Unk2_0 = reader.u64();
  if (reader.bool()) data.Unk3_0 = reader.u8();
  if (reader.bool() /*Unk0*/) {
    data.Unk0_0 = reader.string(20);
    data.Unk0_1 = reader.string(20);
  }
  return data;
}
export const name = "PKTNewNpc";
export const opcode = 11763;
