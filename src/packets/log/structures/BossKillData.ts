import type { Read, Write } from "../../stream";
export type BossKillDataLog = {
  npcId: number;
  isDead: boolean;
};
export function read(reader: Read, version: number) {
  const data = {} as BossKillDataLog;
  data.npcId = reader.u32();
  data.isDead = reader.bool();
  return data;
}
export function write(writer: Write, data: BossKillDataLog) {
  writer.u32(data.npcId);
  writer.bool(data.isDead);
}
