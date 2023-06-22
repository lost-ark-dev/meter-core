// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type BossKillData = {
  npcId: number;
  isDead: boolean;
};
export function read(reader: Read) {
  const data = {} as BossKillData;
  data.npcId = reader.u32();
  data.isDead = reader.bool();
  return data;
}
