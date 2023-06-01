// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTPartyStatusEffectAddNotify = {
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  playerIdOnRefresh: bigint;
  characterId: bigint;
  unk3: number;
  unk4: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectAddNotify;
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.playerIdOnRefresh = reader.u64();
  data.characterId = reader.u64();
  data.unk3 = reader.u8();
  data.unk4 = reader.u64();
  return data;
}
export const name = "PKTPartyStatusEffectAddNotify";
export const opcode = 56075;
