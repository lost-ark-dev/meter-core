// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTIdentityGaugeChangeNotify = {
  playerId: bigint;
  identityGauge1: number;
  identityGauge2: number;
  identityGauge3: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTIdentityGaugeChangeNotify;
  data.playerId = reader.u64();
  data.identityGauge1 = reader.u32();
  data.identityGauge2 = reader.u32();
  data.identityGauge3 = reader.u32();
  reader.skip(2);
  return data;
}
export const name = "PKTIdentityGaugeChangeNotify";
export const opcode = 19646;
