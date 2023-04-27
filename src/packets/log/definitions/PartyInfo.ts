import type { Read, Write } from "../../stream";
import type { PKTPartyInfo } from "../../generated/types";
import * as PartyMemberData from "../structures/PartyMemberData";
export type PartyInfo = {
  RaidInstanceId: number;
  LootGrade: number;
  PartyType: number;
  PartyInstanceId: number;
  PartyLootType: number;
  MemberDatas: PartyMemberData.PartyMemberDataLog[];
};
export function read(reader: Read, version: number) {
  const data = {} as PartyInfo;
  data.RaidInstanceId = reader.u32();
  data.LootGrade = reader.u32();
  data.PartyType = reader.u8();
  data.PartyInstanceId = reader.u32();
  data.PartyLootType = reader.u8();
  data.MemberDatas = reader.array(reader.u16(), () => PartyMemberData.read(reader, version), 40);
  return data;
}
export function write(writer: Write, data: PartyInfo | PKTPartyInfo) {
  writer.u32(data.RaidInstanceId);
  writer.u32(data.LootGrade);
  writer.u8(data.PartyType);
  writer.u32(data.PartyInstanceId);
  writer.u8(data.PartyLootType);
  writer.array(data.MemberDatas, { maxLen: 40, lenType: "u16" }, (obj: PartyMemberData.PartyMemberDataLog) => {
    PartyMemberData.write(writer, obj);
  });
}

export const logId = 17;
export const name = "PartyInfo";
