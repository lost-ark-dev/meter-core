// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type ZoneStatusEffectData = {
  instanceId: number;
  target: number;
  stackCount: number;
  id: number;
};
export function read(reader: Read) {
  const data = {} as ZoneStatusEffectData;
  reader.skip(4);
  data.instanceId = reader.u32();
  data.target = reader.u8();
  data.stackCount = reader.u8();
  data.id = reader.u32();
  return data;
}
