import type { Read, Write } from "../../stream";
import type { PKTMigrationExecute } from "../../generated/types";
export type MigrationExecute = {
  Account_CharacterId1: bigint;
  ServerAddr: string;
  Account_CharacterId2: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as MigrationExecute;
  data.Account_CharacterId1 = reader.u64();
  data.ServerAddr = reader.string(256);
  data.Account_CharacterId2 = reader.u64();
  return data;
}
export function write(writer: Write, data: MigrationExecute | PKTMigrationExecute) {
  writer.u64(data.Account_CharacterId1);
  writer.string(data.ServerAddr, 256);
  writer.u64(data.Account_CharacterId2);
}

export const logId = 11;
export const name = "MigrationExecute";
