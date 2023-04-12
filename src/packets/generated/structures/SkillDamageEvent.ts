// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type SkillDamageEvent = {
  Modifier: number;
  TargetId: bigint;
  DamageType: number;
  DamageAttr?: number;
  CurHp: bigint;
  Unk3_m: number;
  MaxHp: bigint;
  Damage: bigint;
};
export function read(reader: Read) {
  const data = {} as SkillDamageEvent;
  data.Modifier = reader.u8();
  data.TargetId = reader.u64();
  data.DamageType = reader.u8();
  if (reader.bool()) data.DamageAttr = reader.u8();
  data.CurHp = ReadNBytesInt64.read(reader);
  data.Unk3_m = reader.i16();
  data.MaxHp = ReadNBytesInt64.read(reader);
  data.Damage = ReadNBytesInt64.read(reader);
  return data;
}
