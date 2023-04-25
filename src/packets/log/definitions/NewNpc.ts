import type { Read, Write } from "../../stream";
import type { PKTNewNpc } from "../../generated/types";
import * as NpcData from "../structures/NpcData";
export type NewNpc = {
  NpcStruct: NpcData.NpcDataLog;
};
export function read(reader: Read, version: number) {
  const data = {} as NewNpc;
  data.NpcStruct = NpcData.read(reader, version);
  return data;
}
export function write(writer: Write, data: NewNpc | PKTNewNpc) {
  NpcData.write(writer, data.NpcStruct);
}

export const logId = 12;
export const name = "NewNpc";
