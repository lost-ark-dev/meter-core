// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyLeaveResult = {
  partyInstanceId: number;
  partyLeaveType: number;
  name: string;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyLeaveResult;
  data.partyInstanceId = reader.u32();
  data.partyLeaveType = reader.u8();
  data.name = reader.string(20);
  return data;
}
export const name = "PKTPartyLeaveResult";
export const opcode = 22077;
