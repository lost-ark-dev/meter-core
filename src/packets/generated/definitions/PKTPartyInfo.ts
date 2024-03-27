// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as PartyMemberData from "../structures/PartyMemberData";
export type PKTPartyInfo = {
  lootGrade: number;
  raidInstanceId: number;
  partyInstanceId: number;
  memberDatas: PartyMemberData.PartyMemberData[];
  partyType: number;
  partyLootType: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyInfo;
  data.lootGrade = reader.u32();
  data.raidInstanceId = reader.u32();
  data.partyInstanceId = reader.u32();
  data.memberDatas = reader.array(reader.u16(), () => PartyMemberData.read(reader), 40);
  data.partyType = reader.u8();
  data.partyLootType = reader.u8();
  return data;
}
export const name = "PKTPartyInfo";
export const opcode = 36411;
