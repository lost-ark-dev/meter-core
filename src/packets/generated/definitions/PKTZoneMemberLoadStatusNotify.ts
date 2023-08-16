// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTZoneMemberLoadStatusNotify = {
  totalMembers: bigint[];
  zoneInstId: bigint;
  loadComplete: boolean;
  completeMembers: bigint[];
  firstPCEnterTick: bigint;
  zoneId: number;
  zoneLevel: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTZoneMemberLoadStatusNotify;
  data.totalMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.zoneInstId = reader.u64();
  data.loadComplete = reader.bool();
  data.completeMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.firstPCEnterTick = reader.u64();
  data.zoneId = reader.u32();
  data.zoneLevel = reader.u8();
  return data;
}
export const name = "PKTZoneMemberLoadStatusNotify";
export const opcode = 35904;
