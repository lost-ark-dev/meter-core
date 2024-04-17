// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as PartyMemberData from "../structures/PartyMemberData";
export type PKTPartyInfo = {
  partyInstanceId: number;
  raidInstanceId: number;
  partyLootType: number;
  lootGrade: number;
  partyType: number;
  memberDatas: PartyMemberData.PartyMemberData[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyInfo;
  data.partyInstanceId = reader.u32();
  data.raidInstanceId = reader.u32();
  data.partyLootType = reader.u8();
  data.lootGrade = reader.u32();
  data.partyType = reader.u8();
  data.memberDatas = reader.array(reader.u16(), () => PartyMemberData.read(reader), 40);
  return data;
}
export const name = "PKTPartyInfo";
export const opcode = 941;
