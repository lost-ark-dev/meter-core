import type { Read, Write } from "../../stream";
import type { PKTTriggerStartNotify } from "../../generated/types";
export type TriggerStartNotify = {
  TriggerId: number;
  TriggerSignalType: number;
  SourceId: bigint;
  InvolvedPCs: bigint[];
};
export function read(reader: Read, version: number) {
  const data = {} as TriggerStartNotify;
  data.TriggerId = reader.u32();
  data.TriggerSignalType = reader.u32();
  data.SourceId = reader.u64();
  data.InvolvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  return data;
}
export function write(writer: Write, data: TriggerStartNotify | PKTTriggerStartNotify) {
  writer.u32(data.TriggerId);
  writer.u32(data.TriggerSignalType);
  writer.u64(data.SourceId);
  writer.array(data.InvolvedPCs, { maxLen: 40, lenType: "u16" }, (obj: bigint) => {
    writer.u64(obj);
  });
}

export const logId = 40;
export const name = "TriggerStartNotify";
