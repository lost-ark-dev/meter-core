// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTIdentityGaugeChangeNotify = {
  IdentityGauge1: number;
  IdentityGauge2: number;
  IdentityGauge3: number;
  PlayerId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTIdentityGaugeChangeNotify;
  reader.skip(1);
  data.IdentityGauge1 = reader.i32();
  data.IdentityGauge2 = reader.i32();
  data.IdentityGauge3 = reader.i32();
  reader.skip(1);
  data.PlayerId = reader.u64();
  return data;
}
export const name = "PKTIdentityGaugeChangeNotify";
export const opcode = 11255;
