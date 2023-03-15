// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_693 = {
  Unk0_0?: Buffer;
  Unk1: number;
  Unk2: number;
  Unk3_0?: number;
  Unk4: number;
};
export function read(reader: Read) {
  const data = {} as Struct_693;
  if (reader.bool()) data.Unk0_0 = reader.bytes(9);
  data.Unk1 = reader.u32();
  data.Unk2 = reader.u32();
  if (reader.bool()) data.Unk3_0 = reader.u32();
  data.Unk4 = reader.u32();
  return data;
}
