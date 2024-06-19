import type { Read, Write } from "../../stream";
export type CS_SyncZone = {
  isValid: boolean;
};
export function read(reader: Read) {
  const data = {} as CS_SyncZone;
  data.isValid = reader.bool();
  return data;
}
export function write(writer: Write, data: CS_SyncZone) {
  writer.bool(data.isValid);
}

export const name = "CS_SyncZone";
