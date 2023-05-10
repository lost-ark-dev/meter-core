// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type ZoneStatusEffectData = {
  StackCount: number;
  Id: number;
  InstanceId: bigint;
  Target: number;
};
export function read(reader: Read) {
  const data = {} as ZoneStatusEffectData;
  data.StackCount = reader.u8();
  data.Id = reader.u32();
  data.InstanceId = reader.u64();
  data.Target = reader.u8();
  return data;
}
