// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTAuthTokenResult = {
  PacketResultCode: number;
  Unk1_m: Buffer;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTAuthTokenResult;
  data.PacketResultCode = reader.u32();
  data.Unk1_m = reader.bytes(reader.u32(), 688);
  return data;
}
export const name = "PKTAuthTokenResult";
export const opcode = 36363;
