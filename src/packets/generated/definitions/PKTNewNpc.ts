// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type PKTNewNpc = {
  unk1_0?: string;
  unk1_1?: string;
  unk2_0?: bigint;
  npcStruct: NpcData.NpcData;
  unk5_0?: number;
  unk6: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewNpc;
  if (reader.bool() /*unk0*/) {
    data.unk1_0 = reader.string(20);
    data.unk1_1 = reader.string(20);
  }
  if (reader.bool()) data.unk2_0 = reader.u64();
  data.npcStruct = NpcData.read(reader);
  if (reader.bool()) data.unk5_0 = reader.u8();
  data.unk6 = reader.u8();
  return data;
}
export const name = "PKTNewNpc";
export const opcode = 26150;
