import type { Read, Write } from "../../stream";
import type { PKTTriggerBossBattleStatus } from "../../generated/types";
export type TriggerBossBattleStatus = {
  Step: number;
  Unk2_m: boolean;
  TriggerId: number;
};
export function read(reader: Read, version: number) {
  const data = {} as TriggerBossBattleStatus;
  data.Step = reader.u32();
  data.Unk2_m = reader.bool();
  data.TriggerId = reader.u32();
  return data;
}
export function write(writer: Write, data: TriggerBossBattleStatus | PKTTriggerBossBattleStatus) {
  writer.u32(data.Step);
  writer.bool(data.Unk2_m);
  writer.u32(data.TriggerId);
}

export const logId = 38;
export const name = "TriggerBossBattleStatus";
