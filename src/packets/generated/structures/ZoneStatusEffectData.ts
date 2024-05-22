// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type ZoneStatusEffectData = {
  target: number;
  id: number;
  instanceId: number;
  stackCount: number;
};
export function read(reader: Read) {
  const data = {} as ZoneStatusEffectData;
  reader.skip(4);
  data.target = reader.u8();
  data.id = reader.u32();
  data.instanceId = reader.u32();
  data.stackCount = reader.u8();
  return data;
}
