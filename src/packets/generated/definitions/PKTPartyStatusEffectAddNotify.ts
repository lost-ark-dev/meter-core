// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTPartyStatusEffectAddNotify = {
  Unk0: bigint;
  CharacterId: bigint;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  PlayerIdOnRefresh: bigint;
  Unk4: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectAddNotify;
  data.Unk0 = reader.u64();
  data.CharacterId = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.PlayerIdOnRefresh = reader.u64();
  data.Unk4 = reader.u8();
  return data;
}
export const name = "PKTPartyStatusEffectAddNotify";
export const opcode = 17518;
