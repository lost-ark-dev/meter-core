// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_707 = {
  Unk0_0?: Buffer;
  Unk1_0?: number;
  Unk2: number;
  Unk3: number;
  Unk4: number;
};
export function read(reader: Read) {
  const data = {} as Struct_707;
  if (reader.bool()) data.Unk0_0 = reader.bytes(9);
  if (reader.bool()) data.Unk1_0 = reader.u32();
  data.Unk2 = reader.u32();
  data.Unk3 = reader.u32();
  data.Unk4 = reader.u32();
  return data;
}
