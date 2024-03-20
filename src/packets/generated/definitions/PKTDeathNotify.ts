// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  unk0_m: bigint;
  abnormalStatusType?: number;
  effectId: number;
  sourceId: bigint;
  targetId: bigint;
  durabilityDecrement: number;
  directionYaw: number;
  damageAttr?: number;
  unk2_m: number;
  deathType?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.unk0_m = reader.u64();
  if (reader.bool()) data.abnormalStatusType = reader.u8();
  data.effectId = reader.u32();
  data.sourceId = reader.u64();
  data.targetId = reader.u64();
  data.durabilityDecrement = reader.u8();
  data.directionYaw = reader.u16();
  if (reader.bool()) data.damageAttr = reader.u8();
  data.unk2_m = reader.u32();
  if (reader.bool()) data.deathType = reader.u8();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 40622;
