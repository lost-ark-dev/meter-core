// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTZoneMemberLoadStatusNotify = {
  completeMembers: bigint[];
  zoneLevel: number;
  totalMembers: bigint[];
  zoneId: number;
  firstPCEnterTick: bigint;
  zoneInstId: bigint;
  loadComplete: boolean;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTZoneMemberLoadStatusNotify;
  data.completeMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.zoneLevel = reader.u8();
  data.totalMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.zoneId = reader.u32();
  data.firstPCEnterTick = reader.u64();
  data.zoneInstId = reader.u64();
  data.loadComplete = reader.bool();
  return data;
}
export const name = "PKTZoneMemberLoadStatusNotify";
export const opcode = 24098;
