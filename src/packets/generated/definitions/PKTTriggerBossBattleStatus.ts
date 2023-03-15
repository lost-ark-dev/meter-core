// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTTriggerBossBattleStatus = {
  TriggerId: number;
  Unk2_m: boolean;
  Step: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTriggerBossBattleStatus;
  reader.skip(1);
  data.TriggerId = reader.u32();
  data.Unk2_m = reader.bool();
  reader.skip(1);
  data.Step = reader.u32();
  reader.skip(1);
  return data;
}
export const name = "PKTTriggerBossBattleStatus";
export const opcode = 42951;
