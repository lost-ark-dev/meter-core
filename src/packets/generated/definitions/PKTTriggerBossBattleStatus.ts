// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTTriggerBossBattleStatus = {
  triggerId: number;
  unk2_m: boolean;
  step: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTriggerBossBattleStatus;
  data.triggerId = reader.u32();
  data.unk2_m = reader.bool();
  reader.skip(2);
  data.step = reader.u32();
  return data;
}
export const name = "PKTTriggerBossBattleStatus";
export const opcode = 31690;
