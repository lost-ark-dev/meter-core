// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTPartyStatusEffectAddNotify = {
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  PlayerIdOnRefresh: bigint;
  CharacterId: bigint;
  Unk3: number;
  Unk4: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectAddNotify;
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.PlayerIdOnRefresh = reader.u64();
  data.CharacterId = reader.u64();
  data.Unk3 = reader.u8();
  data.Unk4 = reader.u64();
  return data;
}
export const name = "PKTPartyStatusEffectAddNotify";
export const opcode = 56075;
