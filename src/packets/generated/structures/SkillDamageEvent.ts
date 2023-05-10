// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type SkillDamageEvent = {
  DamageType: number;
  Modifier: number;
  Unk3_m: number;
  MaxHp: bigint;
  DamageAttr?: number;
  CurHp: bigint;
  Damage: bigint;
  TargetId: bigint;
};
export function read(reader: Read) {
  const data = {} as SkillDamageEvent;
  data.DamageType = reader.u8();
  data.Modifier = reader.u8();
  data.Unk3_m = reader.u16();
  data.MaxHp = ReadNBytesInt64.read(reader);
  if (reader.bool()) data.DamageAttr = reader.u8();
  data.CurHp = ReadNBytesInt64.read(reader);
  data.Damage = ReadNBytesInt64.read(reader);
  data.TargetId = reader.u64();
  return data;
}
