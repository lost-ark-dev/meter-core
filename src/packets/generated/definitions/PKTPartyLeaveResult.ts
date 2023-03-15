// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyLeaveResult = {
  PartyLeaveType: number;
  Name: string;
  PartyInstanceId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyLeaveResult;
  data.PartyLeaveType = reader.u8();
  data.Name = reader.string(20);
  data.PartyInstanceId = reader.u32();
  return data;
}
export const name = "PKTPartyLeaveResult";
export const opcode = 26884;
