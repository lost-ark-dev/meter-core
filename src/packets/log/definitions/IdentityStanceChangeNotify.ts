import type { Read, Write } from "../../stream";
import type { PKTIdentityStanceChangeNotify } from "../../generated/types";

export type IdentityStanceChangeNotify = {
  objectId: bigint;
  stance: number;
};
export function read(reader: Read, version: number) {
  const data = {} as IdentityStanceChangeNotify;
  data.objectId = reader.u64();
  data.stance = reader.u8();
  return data;
}
export function write(writer: Write, data: IdentityStanceChangeNotify | PKTIdentityStanceChangeNotify) {
  writer.u64(data.objectId);
  writer.u8(data.stance);
}

export const name = "IdentityStanceChangeNotify";
