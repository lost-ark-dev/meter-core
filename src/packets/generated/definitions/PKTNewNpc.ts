// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type PKTNewNpc = {
  unk1_0?: string;
  unk1_1?: string;
  npcStruct: NpcData.NpcData;
  unk3_0?: number;
  unk4: number;
  unk6_0?: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewNpc;
  if (reader.bool() /*unk0*/) {
    data.unk1_0 = reader.string(20);
    data.unk1_1 = reader.string(20);
  }
  data.npcStruct = NpcData.read(reader);
  if (reader.bool()) data.unk3_0 = reader.u8();
  data.unk4 = reader.u8();
  if (reader.bool()) data.unk6_0 = reader.u64();
  return data;
}
export const name = "PKTNewNpc";
export const opcode = 23279;
