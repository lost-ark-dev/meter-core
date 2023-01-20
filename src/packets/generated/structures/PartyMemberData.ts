// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PartyMemberData = {
  Unk0: number;
  Unk1: bigint;
  Unk2: number;
  Unk3: bigint;
  Unk4: number;
  CharacterId: bigint;
  Unk6: number;
  Unk7: bigint;
  PartyMemberNumber: number;
  Unk9: number;
  Unk10: number;
  Unk11: number;
  Unk12: number;
  Name: string;
  Unk14: number;
  CharacterLevel: number;
  Unk16: number;
  Unk17: number;
  Unk18: bigint;
  Unk19: number;
};
export function read(reader: Read) {
  const data = {} as PartyMemberData;
  data.Unk0 = reader.u32();
  data.Unk1 = reader.u64();
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u64();
  data.Unk4 = reader.u16();
  data.CharacterId = reader.u64();
  data.Unk6 = reader.u8();
  data.Unk7 = ReadNBytesInt64.read(reader);
  data.PartyMemberNumber = reader.u8();
  data.Unk9 = reader.u32();
  data.Unk10 = reader.u8();
  data.Unk11 = reader.u32();
  data.Unk12 = reader.u8();
  data.Name = reader.string(20);
  data.Unk14 = reader.u8();
  data.CharacterLevel = reader.u16();
  data.Unk16 = reader.u16();
  data.Unk17 = reader.u8();
  data.Unk18 = ReadNBytesInt64.read(reader);
  data.Unk19 = reader.u8();
  return data;
}
