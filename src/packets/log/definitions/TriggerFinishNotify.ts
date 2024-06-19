import type { Read, Write } from "../../stream";
export type TriggerFinishNotify = {
  packetResultCode: number;
  triggerId: number;
  unk0_m: number;
  involvedPCs: bigint[];
};
export function read(reader: Read, version: number) {
  const data = {} as TriggerFinishNotify;
  data.packetResultCode = reader.u32();
  data.triggerId = reader.u32();
  data.unk0_m = reader.u32();
  data.involvedPCs = reader.array(reader.u16(), () => reader.u64());
  return data;
}
export function write(writer: Write, data: TriggerFinishNotify) {
  writer.u32(data.packetResultCode);
  writer.u32(data.triggerId);
  writer.u32(data.unk0_m);
  writer.array(data.involvedPCs, { lenType: "u16" }, (obj: bigint) => {
    writer.u64(obj);
  });
}

export const name = "TriggerFinishNotify";
