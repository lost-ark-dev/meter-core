// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type SkillDamageEvent = {
  unk3_m: number;
  damageType: number;
  maxHp: bigint;
  modifier: number;
  damageAttr?: number;
  curHp: bigint;
  damage: bigint;
  targetId: bigint;
};
export function read(reader: Read) {
  const data = {} as SkillDamageEvent;
  data.unk3_m = reader.u16();
  data.damageType = reader.u8();
  data.maxHp = ReadNBytesInt64.read(reader);
  data.modifier = reader.u8();
  if (reader.bool()) data.damageAttr = reader.u8();
  data.curHp = ReadNBytesInt64.read(reader);
  data.damage = ReadNBytesInt64.read(reader);
  data.targetId = reader.u64();
  return data;
}
