// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTTriggerFinishNotify = {
  involvedPCs: bigint[];
  triggerId: number;
  unk0_m: number;
  packetResultCode: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTriggerFinishNotify;
  data.involvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  data.triggerId = reader.u32();
  data.unk0_m = reader.u32();
  data.packetResultCode = reader.u32();
  return data;
}
export const name = "PKTTriggerFinishNotify";
export const opcode = 49699;
