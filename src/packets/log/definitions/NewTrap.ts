import type { Read, Write } from "../../stream";
import * as TrapData from "../structures/TrapData";
export type NewTrap = {
  trapData: TrapData.TrapDataLog;
};
export function read(reader: Read, version: number) {
  const data = {} as NewTrap;
  data.trapData = TrapData.read(reader, version);
  return data;
}
export function write(writer: Write, data: NewTrap) {
  TrapData.write(writer, data.trapData);
}

export const name = "NewTrap";
