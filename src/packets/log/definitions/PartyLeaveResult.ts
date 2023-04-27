import type { Read, Write } from "../../stream";
import type { PKTPartyLeaveResult } from "../../generated/types";
export type PartyLeaveResult = {
  PartyLeaveType: number;
  PartyInstanceId: number;
  Name: string;
};
export function read(reader: Read, version: number) {
  const data = {} as PartyLeaveResult;
  data.PartyLeaveType = reader.u8();
  data.PartyInstanceId = reader.u32();
  data.Name = reader.string(20);
  return data;
}
export function write(writer: Write, data: PartyLeaveResult | PKTPartyLeaveResult) {
  writer.u8(data.PartyLeaveType);
  writer.u32(data.PartyInstanceId);
  writer.string(data.Name, 20);
}

export const logId = 18;
export const name = "PartyLeaveResult";
