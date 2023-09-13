// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type ZoneStatusEffectData = {
  stackCount: number;
  id: number;
  target: number;
  instanceId: number;
};
export function read(reader: Read) {
  const data = {} as ZoneStatusEffectData;
  reader.skip(4);
  data.stackCount = reader.u8();
  data.id = reader.u32();
  data.target = reader.u8();
  data.instanceId = reader.u32();
  return data;
}
