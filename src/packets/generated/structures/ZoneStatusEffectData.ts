// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type ZoneStatusEffectData = {
  stackCount: number;
  id: number;
  instanceId: bigint;
  target: number;
};
export function read(reader: Read) {
  const data = {} as ZoneStatusEffectData;
  data.stackCount = reader.u8();
  data.id = reader.u32();
  data.instanceId = reader.u64();
  data.target = reader.u8();
  return data;
}
