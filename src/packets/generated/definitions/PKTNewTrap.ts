// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as TrapData from "../structures/TrapData";
export type PKTNewTrap = {
  unk0: number;
  unk1: number;
  trapData: TrapData.TrapData;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewTrap;
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.trapData = TrapData.read(reader);
  return data;
}
export const name = "PKTNewTrap";
export const opcode = 59244;
