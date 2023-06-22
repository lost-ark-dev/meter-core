// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_730 = {
  unk1_0?: number;
  unk2: number;
  unk3: number;
  unk4: number;
  unk6_0?: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_730;
  if (reader.bool()) data.unk1_0 = reader.u32();
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  data.unk4 = reader.u32();
  if (reader.bool()) data.unk6_0 = reader.bytes(9);
  return data;
}
