// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type ActiveAbility = {
  featureType: number;
  level: number;
};
export function read(reader: Read) {
  const data = {} as ActiveAbility;
  data.featureType = reader.u16();
  data.level = reader.u32();
  return data;
}
