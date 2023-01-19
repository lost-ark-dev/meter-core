// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTPartyStatusEffectAddNotify = {
  PlayerIdOnRefresh: bigint;
  CharacterId: bigint;
  Unk2: number;
  Unk3: bigint;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectAddNotify;
  data.PlayerIdOnRefresh = reader.u64();
  data.CharacterId = reader.u64();
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  return data;
}
export const name = "PKTPartyStatusEffectAddNotify";
export const opcode = 29152;
