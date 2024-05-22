// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyLeaveResult = {
  name: string;
  partyLeaveType: number;
  partyInstanceId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyLeaveResult;
  data.name = reader.string(20);
  data.partyLeaveType = reader.u8();
  data.partyInstanceId = reader.u32();
  return data;
}
export const name = "PKTPartyLeaveResult";
export const opcode = 33775;
