// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type SkillDamageEvent = {
  damage: bigint;
  damageAttr?: number;
  curHp: bigint;
  targetId: bigint;
  unk3_m: number;
  maxHp: bigint;
  damageType: number;
  modifier: number;
};
export function read(reader: Read) {
  const data = {} as SkillDamageEvent;
  data.damage = ReadNBytesInt64.read(reader);
  if (reader.bool()) data.damageAttr = reader.u8();
  data.curHp = ReadNBytesInt64.read(reader);
  data.targetId = reader.u64();
  data.unk3_m = reader.u16();
  data.maxHp = ReadNBytesInt64.read(reader);
  data.damageType = reader.u8();
  data.modifier = reader.u8();
  return data;
}
