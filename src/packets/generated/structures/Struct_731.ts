// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_731 = {
  unk1_0?: Buffer;
  unk3_0?: number;
  unk4: number;
  unk5: number;
  unk6: number;
};
export function read(reader: Read) {
  const data = {} as Struct_731;
  if (reader.bool()) data.unk1_0 = reader.bytes(9);
  if (reader.bool()) data.unk3_0 = reader.u32();
  data.unk4 = reader.u32();
  data.unk5 = reader.u32();
  data.unk6 = reader.u32();
  return data;
}
