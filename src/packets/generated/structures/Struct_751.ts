// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_751 = {
  unk0: number;
  unk2_0?: number;
  unk4_0?: Buffer;
  unk5: number;
  unk6: number;
};
export function read(reader: Read) {
  const data = {} as Struct_751;
  data.unk0 = reader.u32();
  if (reader.bool()) data.unk2_0 = reader.u32();
  if (reader.bool()) data.unk4_0 = reader.bytes(9);
  data.unk5 = reader.u32();
  data.unk6 = reader.u32();
  return data;
}
