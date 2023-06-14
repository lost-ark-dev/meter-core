// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type SkillDamageEvent = {
  unk3_m: number;
  damageType: number;
  maxHp: bigint;
  damageAttr?: number;
  modifier: number;
  targetId: bigint;
  curHp: bigint;
  damage: bigint;
};
export function read(reader: Read) {
  const data = {} as SkillDamageEvent;
  data.unk3_m = reader.u16();
  data.damageType = reader.u8();
  data.maxHp = ReadNBytesInt64.read(reader);
  if (reader.bool()) data.damageAttr = reader.u8();
  data.modifier = reader.u8();
  data.targetId = reader.u64();
  data.curHp = ReadNBytesInt64.read(reader);
  data.damage = ReadNBytesInt64.read(reader);
  return data;
}
