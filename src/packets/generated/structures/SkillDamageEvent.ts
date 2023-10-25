// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type SkillDamageEvent = {
  targetId: bigint;
  damage: bigint;
  modifier: number;
  unk3_m: number;
  damageType: number;
  curHp: bigint;
  maxHp: bigint;
  damageAttr?: number;
};
export function read(reader: Read) {
  const data = {} as SkillDamageEvent;
  data.targetId = reader.u64();
  data.damage = ReadNBytesInt64.read(reader);
  data.modifier = reader.u8();
  data.unk3_m = reader.u16();
  data.damageType = reader.u8();
  data.curHp = ReadNBytesInt64.read(reader);
  data.maxHp = ReadNBytesInt64.read(reader);
  if (reader.bool()) data.damageAttr = reader.u8();
  return data;
}
