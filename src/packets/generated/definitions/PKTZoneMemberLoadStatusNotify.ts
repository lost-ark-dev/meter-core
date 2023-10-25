// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTZoneMemberLoadStatusNotify = {
  zoneLevel: number;
  zoneId: number;
  completeMembers: bigint[];
  zoneInstId: bigint;
  firstPCEnterTick: bigint;
  totalMembers: bigint[];
  loadComplete: boolean;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTZoneMemberLoadStatusNotify;
  data.zoneLevel = reader.u8();
  data.zoneId = reader.u32();
  data.completeMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.zoneInstId = reader.u64();
  data.firstPCEnterTick = reader.u64();
  data.totalMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.loadComplete = reader.bool();
  return data;
}
export const name = "PKTZoneMemberLoadStatusNotify";
export const opcode = 1241;
