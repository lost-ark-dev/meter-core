// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTTriggerBossBattleStatus = {
  Step: number;
  Unk2_m: boolean;
  TriggerId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTriggerBossBattleStatus;
  reader.skip(2);
  data.Step = reader.u32();
  data.Unk2_m = reader.bool();
  data.TriggerId = reader.u32();
  return data;
}
export const name = "PKTTriggerBossBattleStatus";
export const opcode = 4265;
