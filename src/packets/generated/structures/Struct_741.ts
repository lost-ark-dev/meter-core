// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_741 = {
  unk1_0?: number;
  unk3_0?: Buffer;
  unk4: number;
  unk5: number;
  unk6: number;
};
export function read(reader: Read) {
  const data = {} as Struct_741;
  if (reader.bool()) data.unk1_0 = reader.u32();
  if (reader.bool()) data.unk3_0 = reader.bytes(9);
  data.unk4 = reader.u32();
  data.unk5 = reader.u32();
  data.unk6 = reader.u32();
  return data;
}
