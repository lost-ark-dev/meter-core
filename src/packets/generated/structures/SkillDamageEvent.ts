// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type SkillDamageEvent = {
  TargetId: bigint;
  DamageAttr?: number;
  CurHp: bigint;
  MaxHp: bigint;
  Modifier: number;
  Unk3_m: number;
  DamageType: number;
  Damage: bigint;
};
export function read(reader: Read) {
  const data = {} as SkillDamageEvent;
  data.TargetId = reader.u64();
  if (reader.bool()) data.DamageAttr = reader.u8();
  data.CurHp = ReadNBytesInt64.read(reader);
  data.MaxHp = ReadNBytesInt64.read(reader);
  data.Modifier = reader.u8();
  data.Unk3_m = reader.i16();
  data.DamageType = reader.u8();
  data.Damage = ReadNBytesInt64.read(reader);
  return data;
}
