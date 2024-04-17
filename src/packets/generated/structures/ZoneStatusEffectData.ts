// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type ZoneStatusEffectData = {
  target: number;
  instanceId: number;
  id: number;
  stackCount: number;
};
export function read(reader: Read) {
  const data = {} as ZoneStatusEffectData;
  data.target = reader.u8();
  reader.skip(4);
  data.instanceId = reader.u32();
  data.id = reader.u32();
  data.stackCount = reader.u8();
  return data;
}
