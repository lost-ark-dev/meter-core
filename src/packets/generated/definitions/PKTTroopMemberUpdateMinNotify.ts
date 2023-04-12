// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTTroopMemberUpdateMinNotify = {
  MaxHp: bigint;
  CharacterId: bigint;
  Unk0_m: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  Position: bigint;
  CurHp: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTroopMemberUpdateMinNotify;
  data.MaxHp = ReadNBytesInt64.read(reader);
  data.CharacterId = reader.u64();
  data.Unk0_m = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.Position = reader.u64();
  data.CurHp = ReadNBytesInt64.read(reader);
  return data;
}
export const name = "PKTTroopMemberUpdateMinNotify";
export const opcode = 7345;
