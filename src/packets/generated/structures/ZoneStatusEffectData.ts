// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type ZoneStatusEffectData = {
  StackCount: number;
  Target: number;
  Id: number;
};
export function read(reader: Read) {
  const data = {} as ZoneStatusEffectData;
  data.StackCount = reader.u8();
  data.Target = reader.u8();
  reader.skip(4);
  reader.skip(4);
  data.Id = reader.u32();
  return data;
}
