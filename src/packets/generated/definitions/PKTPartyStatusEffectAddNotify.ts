// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTPartyStatusEffectAddNotify = {
  unk0: number;
  playerIdOnRefresh: bigint;
  unk2: bigint;
  characterId: bigint;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectAddNotify;
  data.unk0 = reader.u8();
  data.playerIdOnRefresh = reader.u64();
  data.unk2 = reader.u64();
  data.characterId = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  return data;
}
export const name = "PKTPartyStatusEffectAddNotify";
export const opcode = 27097;
