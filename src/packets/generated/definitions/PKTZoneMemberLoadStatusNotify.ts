// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTZoneMemberLoadStatusNotify = {
  zoneInstId: bigint;
  firstPCEnterTick: bigint;
  completeMembers: bigint[];
  loadComplete: boolean;
  zoneId: number;
  totalMembers: bigint[];
  zoneLevel: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTZoneMemberLoadStatusNotify;
  data.zoneInstId = reader.u64();
  data.firstPCEnterTick = reader.u64();
  data.completeMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.loadComplete = reader.bool();
  data.zoneId = reader.u32();
  data.totalMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.zoneLevel = reader.u8();
  return data;
}
export const name = "PKTZoneMemberLoadStatusNotify";
export const opcode = 18391;
