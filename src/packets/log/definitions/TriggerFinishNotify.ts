import type { Read, Write } from "../../stream";
import type { PKTTriggerFinishNotify } from "../../generated/types";
export type TriggerFinishNotify = {
  PacketResultCode: number;
  TriggerId: number;
  Unk0_m: number;
  InvolvedPCs: bigint[];
};
export function read(reader: Read, version: number) {
  const data = {} as TriggerFinishNotify;
  data.PacketResultCode = reader.u32();
  data.TriggerId = reader.u32();
  data.Unk0_m = reader.u32();
  data.InvolvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  return data;
}
export function write(writer: Write, data: TriggerFinishNotify | PKTTriggerFinishNotify) {
  writer.u32(data.PacketResultCode);
  writer.u32(data.TriggerId);
  writer.u32(data.Unk0_m);
  writer.array(data.InvolvedPCs, { maxLen: 40, lenType: "u16" }, (obj: bigint) => {
    writer.u64(obj);
  });
}

export const logId = 39;
export const name = "TriggerFinishNotify";
