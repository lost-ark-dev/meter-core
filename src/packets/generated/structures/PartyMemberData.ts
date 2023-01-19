// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PartyMemberData = {
  Unk0: number;
  Unk1: bigint;
  Unk2: number;
  Unk3: number;
  CharacterLevel: number;
  Unk5: bigint;
  Unk6: number;
  Unk7: number;
  Unk8: number;
  Unk9: number;
  Unk10: number;
  Unk11: number;
  Unk12: number;
  Name: string;
  Unk14: number;
  CharacterId: bigint;
  Unk16: bigint;
  Unk17: bigint;
  Unk18: number;
  PartyMemberNumber: number;
};
export function read(reader: Read) {
  const data = {} as PartyMemberData;
  data.Unk0 = reader.u32();
  data.Unk1 = ReadNBytesInt64.read(reader);
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u8();
  data.CharacterLevel = reader.u16();
  data.Unk5 = reader.u64();
  data.Unk6 = reader.u8();
  data.Unk7 = reader.u32();
  data.Unk8 = reader.u8();
  data.Unk9 = reader.u8();
  data.Unk10 = reader.u16();
  data.Unk11 = reader.u32();
  data.Unk12 = reader.u8();
  data.Name = reader.string(20);
  data.Unk14 = reader.u16();
  data.CharacterId = reader.u64();
  data.Unk16 = reader.u64();
  data.Unk17 = ReadNBytesInt64.read(reader);
  data.Unk18 = reader.u8();
  data.PartyMemberNumber = reader.u8();
  return data;
}
