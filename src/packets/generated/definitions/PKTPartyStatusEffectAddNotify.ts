// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTPartyStatusEffectAddNotify = {
  characterId: bigint;
  unk1: bigint;
  playerIdOnRefresh: bigint;
  unk3: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectAddNotify;
  data.characterId = reader.u64();
  data.unk1 = reader.u64();
  data.playerIdOnRefresh = reader.u64();
  data.unk3 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  return data;
}
export const name = "PKTPartyStatusEffectAddNotify";
export const opcode = 11830;
