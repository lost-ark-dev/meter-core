import type { Read, Write } from "../../stream";
import type { PKTTriggerBossBattleStatus } from "../../generated/types";
export type TriggerBossBattleStatus = {
  step: number;
  unk2_m: boolean;
  triggerId: number;
};
export function read(reader: Read, version: number) {
  const data = {} as TriggerBossBattleStatus;
  data.step = reader.u32();
  data.unk2_m = reader.bool();
  data.triggerId = reader.u32();
  return data;
}
export function write(writer: Write, data: TriggerBossBattleStatus | PKTTriggerBossBattleStatus) {
  writer.u32(data.step);
  writer.bool(data.unk2_m);
  writer.u32(data.triggerId);
}

export const name = "TriggerBossBattleStatus";
