// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTMigrationExecute = {
  unk0: number;
  account_CharacterId1: bigint;
  serverAddr: string;
  account_CharacterId2: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTMigrationExecute;
  data.unk0 = reader.u32();
  data.account_CharacterId1 = reader.u64();
  data.serverAddr = reader.string(256);
  data.account_CharacterId2 = reader.u64();
  return data;
}
export const name = "PKTMigrationExecute";
export const opcode = 24749;
