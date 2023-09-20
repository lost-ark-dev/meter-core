// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type PKTNewNpc = {
  unk1_0?: number;
  unk1_0_0?: string;
  unk1_1?: string;
  unk3: number;
  npcStruct: NpcData.NpcData;
  unk6_0?: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewNpc;
  if (reader.bool()) data.unk1_0 = reader.u8();
  if (reader.bool() /*unk0*/) {
    data.unk1_0_0 = reader.string(20);
    data.unk1_1 = reader.string(20);
  }
  data.unk3 = reader.u8();
  data.npcStruct = NpcData.read(reader);
  if (reader.bool()) data.unk6_0 = reader.u64();
  return data;
}
export const name = "PKTNewNpc";
export const opcode = 14885;
