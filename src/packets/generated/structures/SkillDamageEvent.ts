// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type SkillDamageEvent = {
  MaxHp: bigint;
  Modifier: number;
  DamageAttr?: number;
  TargetId: bigint;
  CurHp: bigint;
  Damage: bigint;
  Unk3_m: number;
  DamageType: number;
};
export function read(reader: Read) {
  const data = {} as SkillDamageEvent;
  data.MaxHp = ReadNBytesInt64.read(reader);
  data.Modifier = reader.u8();
  if (reader.bool()) data.DamageAttr = reader.u8();
  data.TargetId = reader.u64();
  data.CurHp = ReadNBytesInt64.read(reader);
  data.Damage = ReadNBytesInt64.read(reader);
  data.Unk3_m = reader.i16();
  data.DamageType = reader.u8();
  return data;
}
