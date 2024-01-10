// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTAuthTokenResult = {
  unk1_m: Buffer;
  unk1: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTAuthTokenResult;
  data.unk1_m = reader.bytes(reader.u32(), 688);
  data.unk1 = reader.u32();
  return data;
}
export const name = "PKTAuthTokenResult";
export const opcode = 28747;
