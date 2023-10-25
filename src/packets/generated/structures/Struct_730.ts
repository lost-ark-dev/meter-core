// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_730 = {
  unk1_0?: Buffer;
  unk2: number;
  unk4_0?: number;
  unk5: number;
  unk6: number;
};
export function read(reader: Read) {
  const data = {} as Struct_730;
  if (reader.bool()) data.unk1_0 = reader.bytes(9);
  data.unk2 = reader.u32();
  if (reader.bool()) data.unk4_0 = reader.u32();
  data.unk5 = reader.u32();
  data.unk6 = reader.u32();
  return data;
}
