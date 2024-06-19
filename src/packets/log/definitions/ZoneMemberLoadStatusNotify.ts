import type { Read, Write } from "../../stream";
import * as AbilityData from "../structures/AbilityData";
export type ZoneMemberLoadStatusNotify = {
  zoneInstId: bigint;
  zoneId: number;
  loadComplete: boolean;
  completeMembers: bigint[];
  totalMembers: bigint[];
  firstPCEnterTick: bigint;
  zoneLevel: number;
};
export function read(reader: Read, version: number) {
  const data = {} as ZoneMemberLoadStatusNotify;
  data.zoneInstId = reader.u64();
  data.zoneId = reader.u32();
  data.loadComplete = reader.bool();
  data.completeMembers = reader.array(reader.u16(), () => reader.u64());
  data.totalMembers = reader.array(reader.u16(), () => reader.u64());
  data.firstPCEnterTick = reader.u64();
  data.zoneLevel = reader.u8();
  return data;
}
export function write(writer: Write, data: ZoneMemberLoadStatusNotify) {
  writer.u64(data.zoneInstId);
  writer.u32(data.zoneId);
  writer.bool(data.loadComplete);
  writer.array(data.completeMembers, { lenType: "u16" }, (obj: bigint) => {
    writer.u64(obj);
  });
  writer.array(data.totalMembers, { lenType: "u16" }, (obj: bigint) => {
    writer.u64(obj);
  });
  writer.u64(data.firstPCEnterTick);
  writer.u8(data.zoneLevel);
}

export const name = "ZoneMemberLoadStatusNotify";
