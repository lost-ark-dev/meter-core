import type { Read, Write } from "../../stream";
import type { PKTDeathNotify } from "../../generated/types";
export type DeathNotify = {
  sourceId: bigint;
  targetId: bigint;
  effectId: number;
  directionYaw: number;
  deathType: number;
  durabilityDecrement: number;
  abnormalStatusType: number;
  damageAttr: number;
  unk0_m: bigint;
  unk2_m: number;
};
export function read(reader: Read, version: number) {
  const data = {} as DeathNotify;
  data.sourceId = reader.u64();
  data.targetId = reader.u64();
  if (version >= 4) {
    data.effectId = reader.u32();
    data.directionYaw = reader.u16();
    data.deathType = reader.u8();
    data.durabilityDecrement = reader.u8();
    data.abnormalStatusType = reader.u8();
    data.damageAttr = reader.u8();
    data.unk0_m = reader.u64();
    data.unk2_m = reader.u32();
  } else {
    data.effectId = 0;
    data.directionYaw = 0;
    data.deathType = 0;
    data.durabilityDecrement = 0;
    data.abnormalStatusType = 0;
    data.damageAttr = 0;
    data.unk0_m = 0n;
    data.unk2_m = 0;
  }
  return data;
}
export function write(writer: Write, data: DeathNotify | PKTDeathNotify) {
  writer.u64(data.sourceId);
  writer.u64(data.targetId);
  writer.u32(data.effectId);
  writer.u16(data.directionYaw);
  writer.u8(data.deathType ?? 0);
  writer.u8(data.durabilityDecrement);
  writer.u8(data.abnormalStatusType ?? 0);
  writer.u8(data.damageAttr ?? 0);
  writer.u64(data.unk0_m);
  writer.u32(data.unk2_m);
}

export const name = "DeathNotify";
