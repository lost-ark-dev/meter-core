// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type PKTNewNpc = {
  unk0: number;
  unk2_0?: bigint;
  unk4_0?: number;
  unk1_0?: string;
  unk1_1?: string;
  npcStruct: NpcData.NpcData;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewNpc;
  data.unk0 = reader.u8();
  if (reader.bool()) data.unk2_0 = reader.u64();
  if (reader.bool()) data.unk4_0 = reader.u8();
  if (reader.bool() /*unk0*/) {
    data.unk1_0 = reader.string(20);
    data.unk1_1 = reader.string(20);
  }
  data.npcStruct = NpcData.read(reader);
  return data;
}
export const name = "PKTNewNpc";
export const opcode = 15395;
