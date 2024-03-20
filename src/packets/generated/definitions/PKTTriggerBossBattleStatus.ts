// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTTriggerBossBattleStatus = {
  step: number;
  triggerId: number;
  unk2_m: boolean;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTriggerBossBattleStatus;
  data.step = reader.u32();
  data.triggerId = reader.u32();
  reader.skip(1);
  data.unk2_m = reader.bool();
  return data;
}
export const name = "PKTTriggerBossBattleStatus";
export const opcode = 12536;
