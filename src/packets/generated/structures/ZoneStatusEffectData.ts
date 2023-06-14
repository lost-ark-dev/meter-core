// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type ZoneStatusEffectData = {
  instanceId: bigint;
  target: number;
  stackCount: number;
  id: number;
};
export function read(reader: Read) {
  const data = {} as ZoneStatusEffectData;
  data.instanceId = reader.u64();
  data.target = reader.u8();
  data.stackCount = reader.u8();
  data.id = reader.u32();
  return data;
}
