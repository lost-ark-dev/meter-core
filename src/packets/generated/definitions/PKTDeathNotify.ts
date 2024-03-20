// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  unk0_m: bigint;
  deathType?: number;
  targetId: bigint;
  effectId: number;
  unk2_m: number;
  durabilityDecrement: number;
  sourceId: bigint;
  abnormalStatusType?: number;
  directionYaw: number;
  damageAttr?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.unk0_m = reader.u64();
  if (reader.bool()) data.deathType = reader.u8();
  data.targetId = reader.u64();
  data.effectId = reader.u32();
  data.unk2_m = reader.u32();
  data.durabilityDecrement = reader.u8();
  data.sourceId = reader.u64();
  if (reader.bool()) data.abnormalStatusType = reader.u8();
  data.directionYaw = reader.u16();
  if (reader.bool()) data.damageAttr = reader.u8();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 20789;
