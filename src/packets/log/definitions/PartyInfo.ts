import type { Read, Write } from "../../stream";
import type { PKTPartyInfo } from "../../generated/types";
import * as PartyMemberData from "../structures/PartyMemberData";
export type PartyInfo = {
  raidInstanceId: number;
  lootGrade: number;
  partyType: number;
  partyInstanceId: number;
  partyLootType: number;
  memberDatas: PartyMemberData.PartyMemberDataLog[];
};
export function read(reader: Read, version: number) {
  const data = {} as PartyInfo;
  data.raidInstanceId = reader.u32();
  data.lootGrade = reader.u32();
  data.partyType = reader.u8();
  data.partyInstanceId = reader.u32();
  data.partyLootType = reader.u8();
  data.memberDatas = reader.array(reader.u16(), () => PartyMemberData.read(reader, version), 40);
  return data;
}
export function write(writer: Write, data: PartyInfo | PKTPartyInfo) {
  writer.u32(data.raidInstanceId);
  writer.u32(data.lootGrade);
  writer.u8(data.partyType);
  writer.u32(data.partyInstanceId);
  writer.u8(data.partyLootType);
  writer.array(data.memberDatas, { maxLen: 40, lenType: "u16" }, (obj: PartyMemberData.PartyMemberDataLog) => {
    PartyMemberData.write(writer, obj);
  });
}

export const name = "PartyInfo";
