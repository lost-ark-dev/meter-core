// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type ZoneStatusEffectData = {
  Target: number;
  StackCount: number;
  InstanceId: bigint;
  Id: number;
};
export function read(reader: Read) {
  const data = {} as ZoneStatusEffectData;
  data.Target = reader.u8();
  data.StackCount = reader.u8();
  data.InstanceId = reader.u64();
  data.Id = reader.u32();
  return data;
}
