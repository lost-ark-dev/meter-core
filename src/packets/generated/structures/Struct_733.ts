// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_733 = {
  unk0: number;
  unk1: number;
  unk2: number;
  unk4_0?: Buffer;
  unk6_0?: number;
};
export function read(reader: Read) {
  const data = {} as Struct_733;
  data.unk0 = reader.u32();
  data.unk1 = reader.u32();
  data.unk2 = reader.u32();
  if (reader.bool()) data.unk4_0 = reader.bytes(9);
  if (reader.bool()) data.unk6_0 = reader.u32();
  return data;
}
