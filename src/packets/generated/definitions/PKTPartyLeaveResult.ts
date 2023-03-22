// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyLeaveResult = {
  PartyInstanceId: number;
  PartyLeaveType: number;
  Name: string;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyLeaveResult;
  data.PartyInstanceId = reader.u32();
  data.PartyLeaveType = reader.u8();
  data.Name = reader.string(20);
  return data;
}
export const name = "PKTPartyLeaveResult";
export const opcode = 41810;
