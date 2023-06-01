import type { Read, Write } from "../../stream";
import type { PKTTroopMemberUpdateMinNotify } from "../../generated/types";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
export type TroopMemberUpdateMinNotify = {
  maxHp: bigint;
  characterId: bigint;
  unk0_m: number;
  statusEffectDatas: StatusEffectData.StatusEffectDataLog[];
  position: bigint;
  curHp: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as TroopMemberUpdateMinNotify;
  data.maxHp = ReadNBytesInt64.read(reader, version);
  data.characterId = reader.u64();
  data.unk0_m = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader, version), 80);
  data.position = reader.u64();
  data.curHp = ReadNBytesInt64.read(reader, version);
  return data;
}
export function write(writer: Write, data: TroopMemberUpdateMinNotify | PKTTroopMemberUpdateMinNotify) {
  ReadNBytesInt64.write(writer, data.maxHp);
  writer.u64(data.characterId);
  writer.u32(data.unk0_m);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj: StatusEffectData.StatusEffectDataLog) => {
    StatusEffectData.write(writer, obj);
  });
  writer.u64(data.position);
  ReadNBytesInt64.write(writer, data.curHp);
}

export const name = "TroopMemberUpdateMinNotify";
