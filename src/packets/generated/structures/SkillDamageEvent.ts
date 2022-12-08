// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type SkillDamageEvent = {
  CurHp: bigint;
  TargetId: bigint;
  MaxHp: bigint;
  DamageAttr?: number;
  DamageType: number;
  Unk3_m: number;
  Modifier: number;
  Damage: bigint;
};
export function read(reader: Read) {
  const data = {} as SkillDamageEvent;
  data.CurHp = ReadNBytesInt64.read(reader);
  data.TargetId = reader.u64();
  data.MaxHp = ReadNBytesInt64.read(reader);
  if (reader.bool()) data.DamageAttr = reader.u8();
  data.DamageType = reader.u8();
  data.Unk3_m = reader.i16();
  data.Modifier = reader.u8();
  data.Damage = ReadNBytesInt64.read(reader);
  return data;
}
