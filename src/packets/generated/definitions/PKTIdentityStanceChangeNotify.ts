// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTIdentityStanceChangeNotify = {
  objectId: bigint;
  stance: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTIdentityStanceChangeNotify;
  reader.skip(2);
  data.objectId = reader.u64();
  data.stance = reader.u8();
  return data;
}
export const name = "PKTIdentityStanceChangeNotify";
export const opcode = 59912;
