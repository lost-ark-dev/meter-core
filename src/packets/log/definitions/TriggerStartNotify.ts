import type { Read, Write } from "../../stream";
import type { PKTTriggerStartNotify } from "../../generated/types";
export type TriggerStartNotify = {
  triggerId: number;
  triggerSignalType: number;
  sourceId: bigint;
  involvedPCs: bigint[];
};
export function read(reader: Read, version: number) {
  const data = {} as TriggerStartNotify;
  data.triggerId = reader.u32();
  data.triggerSignalType = reader.u32();
  data.sourceId = reader.u64();
  data.involvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  return data;
}
export function write(writer: Write, data: TriggerStartNotify | PKTTriggerStartNotify) {
  writer.u32(data.triggerId);
  writer.u32(data.triggerSignalType);
  writer.u64(data.sourceId);
  writer.array(data.involvedPCs, { maxLen: 40, lenType: "u16" }, (obj: bigint) => {
    writer.u64(obj);
  });
}

export const name = "TriggerStartNotify";
