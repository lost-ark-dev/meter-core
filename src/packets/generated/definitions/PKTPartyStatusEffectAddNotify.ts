// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTPartyStatusEffectAddNotify = {
  playerIdOnRefresh: bigint;
  unk1: number;
  unk2: bigint;
  characterId: bigint;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectAddNotify;
  data.playerIdOnRefresh = reader.u64();
  data.unk1 = reader.u8();
  data.unk2 = reader.u64();
  data.characterId = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  return data;
}
export const name = "PKTPartyStatusEffectAddNotify";
export const opcode = 36361;
