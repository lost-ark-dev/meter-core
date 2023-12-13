// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as TrapData from "../structures/TrapData";
export type PKTNewTrap = {
  trapData: TrapData.TrapData;
  unk1: number;
  unk2: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewTrap;
  data.trapData = TrapData.read(reader);
  data.unk1 = reader.u8();
  data.unk2 = reader.u8();
  return data;
}
export const name = "PKTNewTrap";
export const opcode = 8910;
