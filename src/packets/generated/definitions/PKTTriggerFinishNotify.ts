// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTTriggerFinishNotify = {
  PacketResultCode: number;
  TriggerId: number;
  InvolvedPCs: bigint[];
  Unk0_m: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTriggerFinishNotify;
  data.PacketResultCode = reader.u32();
  data.TriggerId = reader.u32();
  data.InvolvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  data.Unk0_m = reader.u32();
  return data;
}
export const name = "PKTTriggerFinishNotify";
export const opcode = 31636;
