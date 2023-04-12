// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTTroopMemberUpdateMinNotify = {
  Unk0: bigint;
  Unk1: bigint;
  Unk0_m: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  Unk4: bigint;
  Unk5: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTroopMemberUpdateMinNotify;
  data.Unk0 = ReadNBytesInt64.read(reader);
  data.Unk1 = reader.u64();
  data.Unk0_m = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.Unk4 = reader.u64();
  data.Unk5 = ReadNBytesInt64.read(reader);
  return data;
}
export const name = "PKTTroopMemberUpdateMinNotify";
export const opcode = 7345;
