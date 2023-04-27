import type { Read, Write } from "../../stream";
import type { PKTPartyStatusEffectAddNotify } from "../../generated/types";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PartyStatusEffectAddNotify = {
  CharacterId: bigint;
  statusEffectDatas: StatusEffectData.StatusEffectDataLog[];
  PlayerIdOnRefresh: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as PartyStatusEffectAddNotify;
  data.CharacterId = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader, version), 80);
  data.PlayerIdOnRefresh = reader.u64();
  return data;
}
export function write(writer: Write, data: PartyStatusEffectAddNotify | PKTPartyStatusEffectAddNotify) {
  writer.u64(data.CharacterId);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj: StatusEffectData.StatusEffectDataLog) => {
    StatusEffectData.write(writer, obj);
  });
  writer.u64(data.PlayerIdOnRefresh);
}

export const logId = 21;
export const name = "PartyStatusEffectAddNotify";
