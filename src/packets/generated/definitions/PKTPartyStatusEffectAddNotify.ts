// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTPartyStatusEffectAddNotify = {
  Unk0: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  CharacterId: bigint;
  Unk3: bigint;
  PlayerIdOnRefresh: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectAddNotify;
  data.Unk0 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.CharacterId = reader.u64();
  data.Unk3 = reader.u64();
  data.PlayerIdOnRefresh = reader.u64();
  return data;
}
export const name = "PKTPartyStatusEffectAddNotify";
export const opcode = 5853;
