import type { Read, Write } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type NewNpc = {
  npcStruct: NpcData.NpcDataLog;
};
export function read(reader: Read, version: number) {
  const data = {} as NewNpc;
  data.npcStruct = NpcData.read(reader, version);
  return data;
}
export function write(writer: Write, data: NewNpc) {
  NpcData.write(writer, data.npcStruct);
}

export const name = "NewNpc";
