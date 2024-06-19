import type { Read, Write } from "../../stream";
export type RaidBossKillNotify = {
  typeId: number;
};
export function read(reader: Read, version: number) {
  const data = {} as RaidBossKillNotify;
  if (version >= 4) data.typeId = reader.u32();
  else data.typeId = 0;

  return data;
}
export function write(writer: Write, data: RaidBossKillNotify) {
  writer.u32(data.typeId);
}

export const name = "RaidBossKillNotify";
