// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyLeaveResult = {
  name: string;
  partyInstanceId: number;
  partyLeaveType: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyLeaveResult;
  data.name = reader.string(20);
  data.partyInstanceId = reader.u32();
  data.partyLeaveType = reader.u8();
  return data;
}
export const name = "PKTPartyLeaveResult";
export const opcode = 43463;
