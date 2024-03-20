// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTZoneMemberLoadStatusNotify = {
  totalMembers: bigint[];
  completeMembers: bigint[];
  zoneLevel: number;
  loadComplete: boolean;
  firstPCEnterTick: bigint;
  zoneId: number;
  zoneInstId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTZoneMemberLoadStatusNotify;
  data.totalMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.completeMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.zoneLevel = reader.u8();
  data.loadComplete = reader.bool();
  data.firstPCEnterTick = reader.u64();
  data.zoneId = reader.u32();
  data.zoneInstId = reader.u64();
  return data;
}
export const name = "PKTZoneMemberLoadStatusNotify";
export const opcode = 53608;
