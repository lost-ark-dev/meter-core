// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTTriggerFinishNotify = {
  unk0_m: number;
  packetResultCode: number;
  triggerId: number;
  involvedPCs: bigint[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTriggerFinishNotify;
  data.unk0_m = reader.u32();
  data.packetResultCode = reader.u32();
  data.triggerId = reader.u32();
  data.involvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  return data;
}
export const name = "PKTTriggerFinishNotify";
export const opcode = 38704;
