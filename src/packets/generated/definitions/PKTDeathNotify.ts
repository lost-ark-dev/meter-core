// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  deathType?: number;
  durabilityDecrement: number;
  targetId: bigint;
  effectId: number;
  damageAttr?: number;
  unk2_m: number;
  abnormalStatusType?: number;
  sourceId: bigint;
  directionYaw: number;
  unk0_m: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  if (reader.bool()) data.deathType = reader.u8();
  data.durabilityDecrement = reader.u8();
  data.targetId = reader.u64();
  data.effectId = reader.u32();
  if (reader.bool()) data.damageAttr = reader.u8();
  data.unk2_m = reader.u32();
  if (reader.bool()) data.abnormalStatusType = reader.u8();
  data.sourceId = reader.u64();
  data.directionYaw = reader.u16();
  data.unk0_m = reader.u64();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 17693;
