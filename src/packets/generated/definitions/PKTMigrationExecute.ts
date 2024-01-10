// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTMigrationExecute = {
  account_CharacterId1: bigint;
  account_CharacterId2: bigint;
  serverAddr: string;
  unk3: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTMigrationExecute;
  data.account_CharacterId1 = reader.u64();
  data.account_CharacterId2 = reader.u64();
  data.serverAddr = reader.string(256);
  data.unk3 = reader.u32();
  return data;
}
export const name = "PKTMigrationExecute";
export const opcode = 27501;
