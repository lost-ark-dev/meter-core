import type { Read, Write } from "../../stream";
import type { PKTNewPC } from "../../generated/types";
import * as PCStruct from "../structures/PCStruct";
export type NewPC = {
  pcStruct: PCStruct.PCStructLog;
};
export function read(reader: Read, version: number) {
  const data = {} as NewPC;
  data.pcStruct = PCStruct.read(reader, version);
  return data;
}
export function write(writer: Write, data: NewPC | PKTNewPC) {
  PCStruct.write(writer, data.pcStruct);
}

export const name = "NewPC";
