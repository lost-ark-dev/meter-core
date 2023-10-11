// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTTroopMemberUpdateMinNotify = {
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk0_m: number;
  position: bigint;
  characterId: bigint;
  curHp: bigint;
  maxHp: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTroopMemberUpdateMinNotify;
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.unk0_m = reader.u32();
  data.position = reader.u64();
  data.characterId = reader.u64();
  data.curHp = ReadNBytesInt64.read(reader);
  data.maxHp = ReadNBytesInt64.read(reader);
  return data;
}
export const name = "PKTTroopMemberUpdateMinNotify";
export const opcode = 39936;
