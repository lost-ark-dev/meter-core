// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type SkillDamageEvent = {
  damage: bigint;
  maxHp: bigint;
  modifier: number;
  curHp: bigint;
  unk3_m: number;
  targetId: bigint;
  damageType: number;
  damageAttr?: number;
};
export function read(reader: Read) {
  const data = {} as SkillDamageEvent;
  data.damage = ReadNBytesInt64.read(reader);
  data.maxHp = ReadNBytesInt64.read(reader);
  data.modifier = reader.u8();
  data.curHp = ReadNBytesInt64.read(reader);
  data.unk3_m = reader.u16();
  data.targetId = reader.u64();
  data.damageType = reader.u8();
  if (reader.bool()) data.damageAttr = reader.u8();
  return data;
}
