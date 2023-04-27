import type { Read, Write } from "../../stream";
import type { PKTIdentityGaugeChangeNotify } from "../../generated/types";
export type IdentityGaugeChangeNotify = {
  IdentityGauge1: number;
  IdentityGauge2: number;
  IdentityGauge3: number;
  PlayerId: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as IdentityGaugeChangeNotify;
  data.IdentityGauge1 = reader.u32();
  data.IdentityGauge2 = reader.u32();
  data.IdentityGauge3 = reader.u32();
  data.PlayerId = reader.u64();
  return data;
}
export function write(writer: Write, data: IdentityGaugeChangeNotify | PKTIdentityGaugeChangeNotify) {
  writer.u32(data.IdentityGauge1);
  writer.u32(data.IdentityGauge2);
  writer.u32(data.IdentityGauge3);
  writer.u64(data.PlayerId);
}

export const logId = 42;
export const name = "IdentityGaugeChangeNotify";
