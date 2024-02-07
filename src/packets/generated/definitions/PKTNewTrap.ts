// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as TrapData from "../structures/TrapData";
export type PKTNewTrap = {
  unk0: number;
  trapData: TrapData.TrapData;
  unk2: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewTrap;
  data.unk0 = reader.u8();
  data.trapData = TrapData.read(reader);
  data.unk2 = reader.u8();
  return data;
}
export const name = "PKTNewTrap";
export const opcode = 59491;
