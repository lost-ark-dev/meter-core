// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type SkillDamageEvent = {
  damageAttr?: number;
  curHp: bigint;
  unk3_m: number;
  modifier: number;
  damageType: number;
  targetId: bigint;
  damage: bigint;
  maxHp: bigint;
};
export function read(reader: Read) {
  const data = {} as SkillDamageEvent;
  if (reader.bool()) data.damageAttr = reader.u8();
  data.curHp = ReadNBytesInt64.read(reader);
  data.unk3_m = reader.u16();
  data.modifier = reader.u8();
  data.damageType = reader.u8();
  data.targetId = reader.u64();
  data.damage = ReadNBytesInt64.read(reader);
  data.maxHp = ReadNBytesInt64.read(reader);
  return data;
}
