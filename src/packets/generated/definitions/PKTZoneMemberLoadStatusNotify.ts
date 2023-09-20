// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTZoneMemberLoadStatusNotify = {
  loadComplete: boolean;
  zoneInstId: bigint;
  zoneId: number;
  totalMembers: bigint[];
  firstPCEnterTick: bigint;
  zoneLevel: number;
  completeMembers: bigint[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTZoneMemberLoadStatusNotify;
  data.loadComplete = reader.bool();
  data.zoneInstId = reader.u64();
  data.zoneId = reader.u32();
  data.totalMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.firstPCEnterTick = reader.u64();
  data.zoneLevel = reader.u8();
  data.completeMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  return data;
}
export const name = "PKTZoneMemberLoadStatusNotify";
export const opcode = 5027;
