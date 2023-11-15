// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type ZoneStatusEffectData = {
  stackCount: number;
  id: number;
  instanceId: number;
  target: number;
};
export function read(reader: Read) {
  const data = {} as ZoneStatusEffectData;
  data.stackCount = reader.u8();
  reader.skip(4);
  data.id = reader.u32();
  data.instanceId = reader.u32();
  data.target = reader.u8();
  return data;
}
