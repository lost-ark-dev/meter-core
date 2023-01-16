// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type ActiveAbility = {
  Level: number;
  FeatureType: number;
};
export function read(reader: Read) {
  const data = {} as ActiveAbility;
  data.Level = reader.u32();
  data.FeatureType = reader.u16();
  return data;
}
