// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as PartyMemberData from "../structures/PartyMemberData";
export type PKTPartyInfo = {
  PartyType: number;
  PartyLootType: number;
  LootGrade: number;
  RaidInstanceId: number;
  PartyInstanceId: number;
  MemberDatas: PartyMemberData.PartyMemberData[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyInfo;
  data.PartyType = reader.u8();
  data.PartyLootType = reader.u8();
  data.LootGrade = reader.u32();
  data.RaidInstanceId = reader.u32();
  data.PartyInstanceId = reader.u32();
  data.MemberDatas = reader.array(reader.u16(), () => PartyMemberData.read(reader), 40);
  return data;
}
export const name = "PKTPartyInfo";
export const opcode = 10839;
