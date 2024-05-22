// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTZoneMemberLoadStatusNotify = {
  firstPCEnterTick: bigint;
  completeMembers: bigint[];
  zoneInstId: bigint;
  zoneId: number;
  loadComplete: boolean;
  zoneLevel: number;
  totalMembers: bigint[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTZoneMemberLoadStatusNotify;
  data.firstPCEnterTick = reader.u64();
  data.completeMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.zoneInstId = reader.u64();
  data.zoneId = reader.u32();
  data.loadComplete = reader.bool();
  data.zoneLevel = reader.u8();
  data.totalMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  return data;
}
export const name = "PKTZoneMemberLoadStatusNotify";
export const opcode = 59293;
