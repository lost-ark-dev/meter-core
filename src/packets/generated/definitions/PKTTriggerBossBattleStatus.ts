// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTTriggerBossBattleStatus = {
  Step: number;
  TriggerId: number;
  Unk2_m: boolean;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTriggerBossBattleStatus;
  data.Step = reader.u32();
  reader.skip(1);
  data.TriggerId = reader.u32();
  data.Unk2_m = reader.bool();
  reader.skip(1);
  return data;
}
export const name = "PKTTriggerBossBattleStatus";
export const opcode = 23146;
