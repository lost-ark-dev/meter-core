import type { Read, Write } from "../../stream";
import type { PKTMigrationExecute } from "../../generated/types";
export type MigrationExecute = {
  account_CharacterId1: bigint;
  serverAddr: string;
  account_CharacterId2: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as MigrationExecute;
  data.account_CharacterId1 = reader.u64();
  data.serverAddr = reader.string(256);
  data.account_CharacterId2 = reader.u64();
  return data;
}
export function write(writer: Write, data: MigrationExecute | PKTMigrationExecute) {
  writer.u64(data.account_CharacterId1);
  writer.string(data.serverAddr, 256);
  writer.u64(data.account_CharacterId2);
}

export const name = "MigrationExecute";
