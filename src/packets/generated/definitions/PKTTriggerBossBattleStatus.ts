// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTTriggerBossBattleStatus = {
  Unk2_m: boolean;
  TriggerId: number;
  Step: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTriggerBossBattleStatus;
  data.Unk2_m = reader.bool();
  reader.skip(1);
  data.TriggerId = reader.u32();
  data.Step = reader.u32();
  return data;
}
export const name = "PKTTriggerBossBattleStatus";
export const opcode = 51236;
