// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_731 = {
  unk0: number;
  unk1: number;
  unk3_0?: Buffer;
  unk5_0?: number;
  unk6: number;
};
export function read(reader: Read) {
  const data = {} as Struct_731;
  data.unk0 = reader.u32();
  data.unk1 = reader.u32();
  if (reader.bool()) data.unk3_0 = reader.bytes(9);
  if (reader.bool()) data.unk5_0 = reader.u32();
  data.unk6 = reader.u32();
  return data;
}
