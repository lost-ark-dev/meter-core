import type { Read, Write } from "../../stream";
export type PartyLeaveResult = {
  partyLeaveType: number;
  partyInstanceId: number;
  name: string;
};
export function read(reader: Read, version: number) {
  const data = {} as PartyLeaveResult;
  data.partyLeaveType = reader.u8();
  data.partyInstanceId = reader.u32();
  data.name = reader.string();
  return data;
}
export function write(writer: Write, data: PartyLeaveResult) {
  writer.u8(data.partyLeaveType);
  writer.u32(data.partyInstanceId);
  writer.string(data.name);
}

export const name = "PartyLeaveResult";
