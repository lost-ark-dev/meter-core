// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyLeaveResult = {
  Name: string;
  PartyInstanceId: number;
  PartyLeaveType: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyLeaveResult;
  data.Name = reader.string(20);
  data.PartyInstanceId = reader.u32();
  data.PartyLeaveType = reader.u8();
  return data;
}
export const name = "PKTPartyLeaveResult";
export const opcode = 59312;
