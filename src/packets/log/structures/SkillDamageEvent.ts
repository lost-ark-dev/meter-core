import type { Read, Write } from "../../stream";
import type { SkillDamageEvent } from "../../generated/structures/SkillDamageEvent";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";

export type SkillDamageEventLog = {
  modifier: number;
  targetId: bigint;
  damageType: number;
  damageAttr?: number;
  curHp: bigint;
  unk3_m: number;
  maxHp: bigint;
  damage: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as SkillDamageEventLog;
  data.modifier = reader.u8();
  data.targetId = reader.u64();
  data.damageType = reader.u8();
  if (reader.bool()) data.damageAttr = reader.u8();
  data.curHp = ReadNBytesInt64.read(reader, version);
  data.unk3_m = reader.u16();
  data.maxHp = ReadNBytesInt64.read(reader, version);
  data.damage = ReadNBytesInt64.read(reader, version);
  return data;
}
export function write(writer: Write, data: SkillDamageEventLog | SkillDamageEvent) {
  writer.u8(data.modifier);
  writer.u64(data.targetId);
  writer.u8(data.damageType);
  if (writer.bool(data.damageAttr !== undefined)) writer.u8(data.damageAttr);
  ReadNBytesInt64.write(writer, data.curHp);
  writer.u16(data.unk3_m);
  ReadNBytesInt64.write(writer, data.maxHp);
  ReadNBytesInt64.write(writer, data.damage);
}
