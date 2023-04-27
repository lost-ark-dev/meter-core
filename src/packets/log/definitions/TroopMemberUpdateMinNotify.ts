import type { Read, Write } from "../../stream";
import type { PKTTroopMemberUpdateMinNotify } from "../../generated/types";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
export type TroopMemberUpdateMinNotify = {
  MaxHp: bigint;
  CharacterId: bigint;
  Unk0_m: number;
  statusEffectDatas: StatusEffectData.StatusEffectDataLog[];
  Position: bigint;
  CurHp: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as TroopMemberUpdateMinNotify;
  data.MaxHp = ReadNBytesInt64.read(reader, version);
  data.CharacterId = reader.u64();
  data.Unk0_m = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader, version), 80);
  data.Position = reader.u64();
  data.CurHp = ReadNBytesInt64.read(reader, version);
  return data;
}
export function write(writer: Write, data: TroopMemberUpdateMinNotify | PKTTroopMemberUpdateMinNotify) {
  ReadNBytesInt64.write(writer, data.MaxHp);
  writer.u64(data.CharacterId);
  writer.u32(data.Unk0_m);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj: StatusEffectData.StatusEffectDataLog) => {
    StatusEffectData.write(writer, obj);
  });
  writer.u64(data.Position);
  ReadNBytesInt64.write(writer, data.CurHp);
}

export const logId = 41;
export const name = "TroopMemberUpdateMinNotify";
