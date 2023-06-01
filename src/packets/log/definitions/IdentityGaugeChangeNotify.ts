import type { Read, Write } from "../../stream";
import type { PKTIdentityGaugeChangeNotify } from "../../generated/types";
export type IdentityGaugeChangeNotify = {
  identityGauge1: number;
  identityGauge2: number;
  identityGauge3: number;
  playerId: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as IdentityGaugeChangeNotify;
  data.identityGauge1 = reader.u32();
  data.identityGauge2 = reader.u32();
  data.identityGauge3 = reader.u32();
  data.playerId = reader.u64();
  return data;
}
export function write(writer: Write, data: IdentityGaugeChangeNotify | PKTIdentityGaugeChangeNotify) {
  writer.u32(data.identityGauge1);
  writer.u32(data.identityGauge2);
  writer.u32(data.identityGauge3);
  writer.u64(data.playerId);
}

export const name = "IdentityGaugeChangeNotify";
