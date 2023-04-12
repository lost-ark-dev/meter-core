// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTTriggerStartNotify = {
  TriggerId: number;
  TriggerSignalType: number;
  SourceId: bigint;
  InvolvedPCs: bigint[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTriggerStartNotify;
  data.TriggerId = reader.u32();
  data.TriggerSignalType = reader.u32();
  data.SourceId = reader.u64();
  data.InvolvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  return data;
}
export const name = "PKTTriggerStartNotify";
export const opcode = 49092;
