import type { Read, Write } from "../../stream";
import type { PartyMemberData } from "../../generated/structures/PartyMemberData";
import * as Vector3F from "../../common/Vector3F";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PartyMemberDataLog = {
  MaxHp: bigint;
  CharacterId: bigint;
  Position: Vector3F.Vector3F;
  TransitIndex: number;
  CurHp: bigint;
  CharacterLevel: number;
  GearLevel: number;
  ZoneId: number;
  PartyMemberNumber: number;
  Name: string;
  ZoneInstId: bigint;
  WorldId: number;
  ClassId: number;
  Auths: number;
};
export function read(reader: Read, version: number) {
  const data = {} as PartyMemberDataLog;
  data.MaxHp = ReadNBytesInt64.read(reader, version);
  data.CharacterId = reader.u64();
  data.Position = Vector3F.read(reader, version);
  data.TransitIndex = reader.u32();
  data.CurHp = ReadNBytesInt64.read(reader, version);
  data.CharacterLevel = reader.u16();
  data.GearLevel = reader.u32();
  data.ZoneId = reader.u32();
  data.PartyMemberNumber = reader.u8();
  data.Name = reader.string(20);
  data.ZoneInstId = reader.u64();
  data.WorldId = reader.u8();
  data.ClassId = reader.u16();
  data.Auths = reader.u8();
  return data;
}
export function write(writer: Write, data: PartyMemberDataLog | PartyMemberData) {
  ReadNBytesInt64.write(writer, data.MaxHp);
  writer.u64(data.CharacterId);
  Vector3F.write(writer, data.Position);
  writer.u32(data.TransitIndex);
  ReadNBytesInt64.write(writer, data.CurHp);
  writer.u16(data.CharacterLevel);
  writer.u32(data.GearLevel);
  writer.u32(data.ZoneId);
  writer.u8(data.PartyMemberNumber);
  writer.string(data.Name, 20);
  writer.u64(data.ZoneInstId);
  writer.u8(data.WorldId);
  writer.u16(data.ClassId);
  writer.u8(data.Auths);
}
