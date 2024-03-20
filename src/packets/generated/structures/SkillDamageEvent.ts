// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type SkillDamageEvent = {
  maxHp: bigint;
  damageType: number;
  unk3_m: number;
  damageAttr?: number;
  curHp: bigint;
  targetId: bigint;
  damage: bigint;
  modifier: number;
};
export function read(reader: Read) {
  const data = {} as SkillDamageEvent;
  data.maxHp = ReadNBytesInt64.read(reader);
  data.damageType = reader.u8();
  data.unk3_m = reader.u16();
  if (reader.bool()) data.damageAttr = reader.u8();
  data.curHp = ReadNBytesInt64.read(reader);
  data.targetId = reader.u64();
  data.damage = ReadNBytesInt64.read(reader);
  data.modifier = reader.u8();
  return data;
}
