// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTTroopMemberUpdateMinNotify = {
  Unk0_m: number;
  Position: bigint;
  CharacterId: bigint;
  CurHp: bigint;
  MaxHp: bigint;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTroopMemberUpdateMinNotify;
  data.Unk0_m = reader.u32();
  data.Position = reader.u64();
  data.CharacterId = reader.u64();
  data.CurHp = ReadNBytesInt64.read(reader);
  data.MaxHp = ReadNBytesInt64.read(reader);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  return data;
}
export const name = "PKTTroopMemberUpdateMinNotify";
export const opcode = 36043;
