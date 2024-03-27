// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTZoneMemberLoadStatusNotify = {
  totalMembers: bigint[];
  firstPCEnterTick: bigint;
  zoneId: number;
  zoneInstId: bigint;
  completeMembers: bigint[];
  loadComplete: boolean;
  zoneLevel: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTZoneMemberLoadStatusNotify;
  data.totalMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.firstPCEnterTick = reader.u64();
  data.zoneId = reader.u32();
  data.zoneInstId = reader.u64();
  data.completeMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.loadComplete = reader.bool();
  data.zoneLevel = reader.u8();
  return data;
}
export const name = "PKTZoneMemberLoadStatusNotify";
export const opcode = 58728;
