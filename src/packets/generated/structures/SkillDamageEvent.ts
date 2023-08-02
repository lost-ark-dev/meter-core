// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type SkillDamageEvent = {
  targetId: bigint;
  unk3_m: number;
  modifier: number;
  curHp: bigint;
  damageType: number;
  damageAttr?: number;
  maxHp: bigint;
  damage: bigint;
};
export function read(reader: Read) {
  const data = {} as SkillDamageEvent;
  data.targetId = reader.u64();
  data.unk3_m = reader.u16();
  data.modifier = reader.u8();
  data.curHp = ReadNBytesInt64.read(reader);
  data.damageType = reader.u8();
  if (reader.bool()) data.damageAttr = reader.u8();
  data.maxHp = ReadNBytesInt64.read(reader);
  data.damage = ReadNBytesInt64.read(reader);
  return data;
}
