// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as PartyMemberData from "../structures/PartyMemberData";
export type PKTPartyInfo = {
  MemberDatas: PartyMemberData.PartyMemberData[];
  LootGrade: number;
  PartyLootType: number;
  RaidInstanceId: number;
  PartyType: number;
  PartyInstanceId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyInfo;
  data.MemberDatas = reader.array(reader.u16(), () => PartyMemberData.read(reader), 40);
  data.LootGrade = reader.u32();
  data.PartyLootType = reader.u8();
  data.RaidInstanceId = reader.u32();
  data.PartyType = reader.u8();
  data.PartyInstanceId = reader.u32();
  return data;
}
export const name = "PKTPartyInfo";
export const opcode = 39309;
