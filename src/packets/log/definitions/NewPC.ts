import type { Read, Write } from "../../stream";
import type { PKTNewPC } from "../../generated/types";
import * as PCStruct from "../structures/PCStruct";
export type NewPC = {
  PCStruct: PCStruct.PCLogStruct;
};
export function read(reader: Read, version: number) {
  const data = {} as NewPC;
  data.PCStruct = PCStruct.read(reader, version);
  return data;
}
export function write(writer: Write, data: NewPC | PKTNewPC) {
  PCStruct.write(writer, data.PCStruct);
}

export const logId = 14;
export const name = "NewPC";
