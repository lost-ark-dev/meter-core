// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_691 = {
  Unk0: number;
  Unk1: number;
  Unk2: number;
  Unk3_0?: Buffer;
  Unk4_0?: number;
};
export function read(reader: Read) {
  const data = {} as Struct_691;
  data.Unk0 = reader.u32();
  data.Unk1 = reader.u32();
  data.Unk2 = reader.u32();
  if (reader.bool()) data.Unk3_0 = reader.bytes(9);
  if (reader.bool()) data.Unk4_0 = reader.u32();
  return data;
}
