// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTIdentityStanceChangeNotify = {
  objectId: bigint;
  stance: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTIdentityStanceChangeNotify;
  reader.skip(1);
  data.objectId = reader.u64();
  reader.skip(1);
  data.stance = reader.u8();
  return data;
}
export const name = "PKTIdentityStanceChangeNotify";
export const opcode = 44184;
