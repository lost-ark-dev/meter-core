import type { Read, Write } from "../../stream";
import type { SkillDamageEvent } from "../../generated/structures/SkillDamageEvent";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";

export type SkillDamageEventLog = {
  Modifier: number;
  TargetId: bigint;
  DamageType: number;
  DamageAttr?: number;
  CurHp: bigint;
  Unk3_m: number;
  MaxHp: bigint;
  Damage: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as SkillDamageEventLog;
  data.Modifier = reader.u8();
  data.TargetId = reader.u64();
  data.DamageType = reader.u8();
  if (reader.bool()) data.DamageAttr = reader.u8();
  data.CurHp = ReadNBytesInt64.read(reader, version);
  data.Unk3_m = reader.u16();
  data.MaxHp = ReadNBytesInt64.read(reader, version);
  data.Damage = ReadNBytesInt64.read(reader, version);
  return data;
}
export function write(writer: Write, data: SkillDamageEventLog | SkillDamageEvent) {
  writer.u8(data.Modifier);
  writer.u64(data.TargetId);
  writer.u8(data.DamageType);
  if (writer.bool(data.DamageAttr !== undefined)) writer.u8(data.DamageAttr);
  ReadNBytesInt64.write(writer, data.CurHp);
  writer.u16(data.Unk3_m);
  ReadNBytesInt64.write(writer, data.MaxHp);
  ReadNBytesInt64.write(writer, data.Damage);
}
