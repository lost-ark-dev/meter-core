// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTTroopMemberUpdateMinNotify = {
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  maxHp: bigint;
  curHp: bigint;
  characterId: bigint;
  position: bigint;
  unk0_m: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTroopMemberUpdateMinNotify;
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.maxHp = ReadNBytesInt64.read(reader);
  data.curHp = ReadNBytesInt64.read(reader);
  data.characterId = reader.u64();
  data.position = reader.u64();
  data.unk0_m = reader.u32();
  return data;
}
export const name = "PKTTroopMemberUpdateMinNotify";
export const opcode = 21809;
