import type { Read, Write } from "../../stream";
import type { PartyMemberData } from "../../generated/structures/PartyMemberData";
import * as Vector3F from "../../common/Vector3F";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PartyMemberDataLog = {
  maxHp: bigint;
  characterId: bigint;
  position: Vector3F.Vector3F;
  transitIndex: number;
  curHp: bigint;
  characterLevel: number;
  gearLevel: number;
  zoneId: number;
  partyMemberNumber: number;
  name: string;
  zoneInstId: bigint;
  worldId: number;
  classId: number;
  auths: number;
};
export function read(reader: Read, version: number) {
  const data = {} as PartyMemberDataLog;
  data.maxHp = ReadNBytesInt64.read(reader, version);
  data.characterId = reader.u64();
  data.position = Vector3F.read(reader, version);
  data.transitIndex = reader.u32();
  data.curHp = ReadNBytesInt64.read(reader, version);
  data.characterLevel = reader.u16();
  data.gearLevel = reader.f32();
  data.zoneId = reader.u32();
  data.partyMemberNumber = reader.u8();
  data.name = reader.string(20);
  data.zoneInstId = reader.u64();
  data.worldId = reader.u8();
  data.classId = reader.u16();
  data.auths = reader.u8();
  return data;
}
export function write(writer: Write, data: PartyMemberDataLog | PartyMemberData) {
  ReadNBytesInt64.write(writer, data.maxHp);
  writer.u64(data.characterId);
  Vector3F.write(writer, data.position);
  writer.u32(data.transitIndex);
  ReadNBytesInt64.write(writer, data.curHp);
  writer.u16(data.characterLevel);
  writer.f32(data.gearLevel);
  writer.u32(data.zoneId);
  writer.u8(data.partyMemberNumber);
  writer.string(data.name, 20);
  writer.u64(data.zoneInstId);
  writer.u8(data.worldId);
  writer.u16(data.classId);
  writer.u8(data.auths);
}
