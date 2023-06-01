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
  reader.skip(3);
  data.objectId = reader.u64();
  return data;
}
export const name = "PKTIdentityStanceChangeNotify";
export const opcode = 41549;
