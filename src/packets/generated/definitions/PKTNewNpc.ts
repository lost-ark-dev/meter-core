// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type PKTNewNpc = {
  npcStruct: NpcData.NpcData;
  unk2_0?: number;
  unk1_0?: string;
  unk1_1?: string;
  unk4: number;
  unk6_0?: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewNpc;
  data.npcStruct = NpcData.read(reader);
  if (reader.bool()) data.unk2_0 = reader.u8();
  if (reader.bool() /*unk0*/) {
    data.unk1_0 = reader.string(20);
    data.unk1_1 = reader.string(20);
  }
  data.unk4 = reader.u8();
  if (reader.bool()) data.unk6_0 = reader.u64();
  return data;
}
export const name = "PKTNewNpc";
export const opcode = 17856;
