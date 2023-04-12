// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type ActiveAbility = {
  FeatureType: number;
  Level: number;
};
export function read(reader: Read) {
  const data = {} as ActiveAbility;
  data.FeatureType = reader.u16();
  data.Level = reader.u32();
  return data;
}
