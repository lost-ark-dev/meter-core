// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTZoneMemberLoadStatusNotify = {
  firstPCEnterTick: bigint;
  zoneInstId: bigint;
  loadComplete: boolean;
  totalMembers: bigint[];
  zoneId: number;
  zoneLevel: number;
  completeMembers: bigint[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTZoneMemberLoadStatusNotify;
  data.firstPCEnterTick = reader.u64();
  data.zoneInstId = reader.u64();
  data.loadComplete = reader.bool();
  data.totalMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.zoneId = reader.u32();
  data.zoneLevel = reader.u8();
  data.completeMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  return data;
}
export const name = "PKTZoneMemberLoadStatusNotify";
export const opcode = 25608;
