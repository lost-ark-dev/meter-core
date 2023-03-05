// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTPartyStatusEffectAddNotify = {
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  CharacterId: bigint;
  Unk2: bigint;
  Unk3: number;
  PlayerIdOnRefresh: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectAddNotify;
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.CharacterId = reader.u64();
  data.Unk2 = reader.u64();
  data.Unk3 = reader.u8();
  data.PlayerIdOnRefresh = reader.u64();
  return data;
}
export const name = "PKTPartyStatusEffectAddNotify";
export const opcode = 44010;
