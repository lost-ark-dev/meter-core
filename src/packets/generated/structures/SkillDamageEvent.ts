// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type SkillDamageEvent = {
  Unk3_m: number;
  CurHp: bigint;
  Damage: bigint;
  DamageAttr?: number;
  DamageType: number;
  Modifier: number;
  TargetId: bigint;
  MaxHp: bigint;
};
export function read(reader: Read) {
  const data = {} as SkillDamageEvent;
  data.Unk3_m = reader.i16();
  data.CurHp = ReadNBytesInt64.read(reader);
  data.Damage = ReadNBytesInt64.read(reader);
  if (reader.bool()) data.DamageAttr = reader.u8();
  data.DamageType = reader.u8();
  data.Modifier = reader.u8();
  data.TargetId = reader.u64();
  data.MaxHp = ReadNBytesInt64.read(reader);
  return data;
}
