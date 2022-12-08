// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PartyMemberData = {
  CharacterLevel: number;
  Unk1: number;
  Unk2: bigint;
  Unk3: number;
  Unk4: number;
  Unk5: number;
  Unk6: bigint;
  Name: string;
  PartyMemberNumber: number;
  Unk9: bigint;
  Unk10: bigint;
  CharacterId: bigint;
  Unk12: number;
  Unk13: number;
  Unk14: number;
  Unk15: number;
  Unk16: number;
  Unk17: number;
  Unk18: number;
  Unk19: number;
};
export function read(reader: Read) {
  const data = {} as PartyMemberData;
  data.CharacterLevel = reader.u16();
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u64();
  data.Unk3 = reader.u8();
  data.Unk4 = reader.u32();
  data.Unk5 = reader.u16();
  data.Unk6 = ReadNBytesInt64.read(reader);
  data.Name = reader.string(20);
  data.PartyMemberNumber = reader.u8();
  data.Unk9 = reader.u64();
  data.Unk10 = ReadNBytesInt64.read(reader);
  data.CharacterId = reader.u64();
  data.Unk12 = reader.u8();
  data.Unk13 = reader.u8();
  data.Unk14 = reader.u8();
  data.Unk15 = reader.u8();
  data.Unk16 = reader.u32();
  data.Unk17 = reader.u32();
  data.Unk18 = reader.u8();
  data.Unk19 = reader.u16();
  return data;
}
