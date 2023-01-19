// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTTriggerFinishNotify = {
  InvolvedPCs: bigint[];
  PacketResultCode: number;
  TriggerId: number;
  Unk0_m: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTriggerFinishNotify;
  data.InvolvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  data.PacketResultCode = reader.u32();
  data.TriggerId = reader.u32();
  data.Unk0_m = reader.u32();
  return data;
}
export const name = "PKTTriggerFinishNotify";
export const opcode = 38227;
