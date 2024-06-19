import type { Read, Write } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PartyStatusEffectAddNotify = {
  characterId: bigint;
  statusEffectDatas: StatusEffectData.StatusEffectDataLog[];
  playerIdOnRefresh: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as PartyStatusEffectAddNotify;
  data.characterId = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader, version));
  data.playerIdOnRefresh = reader.u64();
  return data;
}
export function write(writer: Write, data: PartyStatusEffectAddNotify) {
  writer.u64(data.characterId);
  writer.array(data.statusEffectDatas, { lenType: "u16" }, (obj: StatusEffectData.StatusEffectDataLog) => {
    StatusEffectData.write(writer, obj);
  });
  writer.u64(data.playerIdOnRefresh);
}

export const name = "PartyStatusEffectAddNotify";
