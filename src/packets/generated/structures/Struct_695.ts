// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_695 = {
  Unk0: number;
  Unk1: number;
  Unk2_0?: Buffer;
  Unk3_0?: number;
  Unk4: number;
};
export function read(reader: Read) {
  const data = {} as Struct_695;
  data.Unk0 = reader.u32();
  data.Unk1 = reader.u32();
  if (reader.bool()) data.Unk2_0 = reader.bytes(9);
  if (reader.bool()) data.Unk3_0 = reader.u32();
  data.Unk4 = reader.u32();
  return data;
}
