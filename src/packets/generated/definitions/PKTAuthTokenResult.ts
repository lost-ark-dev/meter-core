// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTAuthTokenResult = {
  Unk1_m: Buffer;
  PacketResultCode: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTAuthTokenResult;
  data.Unk1_m = reader.bytes(reader.u32(), 688);
  data.PacketResultCode = reader.u32();
  return data;
}
export const name = "PKTAuthTokenResult";
export const opcode = 51585;
