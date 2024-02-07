// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type SkillDamageEvent = {
  maxHp: bigint;
  curHp: bigint;
  damageAttr?: number;
  damage: bigint;
  unk3_m: number;
  modifier: number;
  targetId: bigint;
  damageType: number;
};
export function read(reader: Read) {
  const data = {} as SkillDamageEvent;
  data.maxHp = ReadNBytesInt64.read(reader);
  data.curHp = ReadNBytesInt64.read(reader);
  if (reader.bool()) data.damageAttr = reader.u8();
  data.damage = ReadNBytesInt64.read(reader);
  data.unk3_m = reader.u16();
  data.modifier = reader.u8();
  data.targetId = reader.u64();
  data.damageType = reader.u8();
  return data;
}
