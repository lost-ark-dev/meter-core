// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_756 = {
  unk0: number;
  unk2_0?: number;
  unk3: number;
  unk5_0?: Buffer;
  unk6: number;
};
export function read(reader: Read) {
  const data = {} as Struct_756;
  data.unk0 = reader.u32();
  if (reader.bool()) data.unk2_0 = reader.u32();
  data.unk3 = reader.u32();
  if (reader.bool()) data.unk5_0 = reader.bytes(9);
  data.unk6 = reader.u32();
  return data;
}
