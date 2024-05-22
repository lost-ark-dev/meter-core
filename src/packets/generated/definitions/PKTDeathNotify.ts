// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  durabilityDecrement: number;
  deathType?: number;
  sourceId: bigint;
  unk2_m: number;
  unk0_m: bigint;
  abnormalStatusType?: number;
  directionYaw: number;
  targetId: bigint;
  damageAttr?: number;
  effectId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.durabilityDecrement = reader.u8();
  if (reader.bool()) data.deathType = reader.u8();
  data.sourceId = reader.u64();
  data.unk2_m = reader.u32();
  data.unk0_m = reader.u64();
  if (reader.bool()) data.abnormalStatusType = reader.u8();
  data.directionYaw = reader.u16();
  data.targetId = reader.u64();
  if (reader.bool()) data.damageAttr = reader.u8();
  data.effectId = reader.u32();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 40308;
