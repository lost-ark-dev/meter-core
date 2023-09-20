// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type ActiveAbility = {
  level: number;
  featureType: number;
};
export function read(reader: Read) {
  const data = {} as ActiveAbility;
  data.level = reader.u32();
  data.featureType = reader.u16();
  return data;
}
