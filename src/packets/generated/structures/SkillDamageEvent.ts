// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type SkillDamageEvent = {
  damageType: number;
  modifier: number;
  unk3_m: number;
  maxHp: bigint;
  damageAttr?: number;
  curHp: bigint;
  damage: bigint;
  targetId: bigint;
};
export function read(reader: Read) {
  const data = {} as SkillDamageEvent;
  data.damageType = reader.u8();
  data.modifier = reader.u8();
  data.unk3_m = reader.u16();
  data.maxHp = ReadNBytesInt64.read(reader);
  if (reader.bool()) data.damageAttr = reader.u8();
  data.curHp = ReadNBytesInt64.read(reader);
  data.damage = ReadNBytesInt64.read(reader);
  data.targetId = reader.u64();
  return data;
}
