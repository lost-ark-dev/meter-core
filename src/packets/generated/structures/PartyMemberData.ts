// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PartyMemberData = {
  Unk0: number;
  Unk1: number;
  Unk2: bigint;
  Unk3: number;
  Unk4: number;
  PartyMemberNumber: number;
  CharacterLevel: number;
  Name: string;
  Unk8: number;
  Unk9: number;
  Unk10: number;
  Unk11: bigint;
  Unk12: number;
  Unk13: bigint;
  CharacterId: bigint;
  Unk15: number;
  Unk16: number;
  Unk17: number;
  Unk18: number;
  Unk19: bigint;
};
export function read(reader: Read) {
  const data = {} as PartyMemberData;
  data.Unk0 = reader.u8();
  data.Unk1 = reader.u16();
  data.Unk2 = ReadNBytesInt64.read(reader);
  data.Unk3 = reader.u32();
  data.Unk4 = reader.u8();
  data.PartyMemberNumber = reader.u8();
  data.CharacterLevel = reader.u16();
  data.Name = reader.string(20);
  data.Unk8 = reader.u8();
  data.Unk9 = reader.u8();
  data.Unk10 = reader.u8();
  data.Unk11 = ReadNBytesInt64.read(reader);
  data.Unk12 = reader.u8();
  data.Unk13 = reader.u64();
  data.CharacterId = reader.u64();
  data.Unk15 = reader.u32();
  data.Unk16 = reader.u32();
  data.Unk17 = reader.u16();
  data.Unk18 = reader.u8();
  data.Unk19 = reader.u64();
  return data;
}
