// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTIdentityStanceChangeNotify = {
  stance: number;
  objectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTIdentityStanceChangeNotify;
  data.stance = reader.u8();
  data.objectId = reader.u64();
  reader.skip(2);
  return data;
}
export const name = "PKTIdentityStanceChangeNotify";
export const opcode = 13939;
