import type { Read, Write } from "../../stream";
import type { PKTPartyLeaveResult } from "../../generated/types";
export type PartyLeaveResult = {
  partyLeaveType: number;
  partyInstanceId: number;
  name: string;
};
export function read(reader: Read, version: number) {
  const data = {} as PartyLeaveResult;
  data.partyLeaveType = reader.u8();
  data.partyInstanceId = reader.u32();
  data.name = reader.string(20);
  return data;
}
export function write(writer: Write, data: PartyLeaveResult | PKTPartyLeaveResult) {
  writer.u8(data.partyLeaveType);
  writer.u32(data.partyInstanceId);
  writer.string(data.name, 20);
}

export const name = "PartyLeaveResult";
