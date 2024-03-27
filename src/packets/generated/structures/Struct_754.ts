// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_754 = {
  unk0: number;
  unk2_0?: number;
  unk3: number;
  unk4: number;
  unk6_0?: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_754;
  data.unk0 = reader.u32();
  if (reader.bool()) data.unk2_0 = reader.u32();
  data.unk3 = reader.u32();
  data.unk4 = reader.u32();
  if (reader.bool()) data.unk6_0 = reader.bytes(9);
  return data;
}
