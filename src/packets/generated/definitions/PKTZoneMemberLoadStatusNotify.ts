// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTZoneMemberLoadStatusNotify = {
  completeMembers: bigint[];
  zoneInstId: bigint;
  loadComplete: boolean;
  zoneLevel: number;
  zoneId: number;
  totalMembers: bigint[];
  firstPCEnterTick: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTZoneMemberLoadStatusNotify;
  data.completeMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.zoneInstId = reader.u64();
  data.loadComplete = reader.bool();
  data.zoneLevel = reader.u8();
  data.zoneId = reader.u32();
  data.totalMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.firstPCEnterTick = reader.u64();
  return data;
}
export const name = "PKTZoneMemberLoadStatusNotify";
export const opcode = 24164;
