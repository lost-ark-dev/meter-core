// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_751 = {
  unk1_0?: Buffer;
  unk2: number;
  unk3: number;
  unk5_0?: number;
  unk6: number;
};
export function read(reader: Read) {
  const data = {} as Struct_751;
  if (reader.bool()) data.unk1_0 = reader.bytes(9);
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  if (reader.bool()) data.unk5_0 = reader.u32();
  data.unk6 = reader.u32();
  return data;
}
