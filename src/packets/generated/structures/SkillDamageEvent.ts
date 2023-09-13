// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type SkillDamageEvent = {
  unk3_m: number;
  targetId: bigint;
  maxHp: bigint;
  modifier: number;
  damageType: number;
  curHp: bigint;
  damageAttr?: number;
  damage: bigint;
};
export function read(reader: Read) {
  const data = {} as SkillDamageEvent;
  data.unk3_m = reader.u16();
  data.targetId = reader.u64();
  data.maxHp = ReadNBytesInt64.read(reader);
  data.modifier = reader.u8();
  data.damageType = reader.u8();
  data.curHp = ReadNBytesInt64.read(reader);
  if (reader.bool()) data.damageAttr = reader.u8();
  data.damage = ReadNBytesInt64.read(reader);
  return data;
}
