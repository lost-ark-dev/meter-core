// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PartyMemberData = {
  Unk0: number;
  Unk1: number;
  Unk2: number;
  Unk3: bigint;
  Unk4: number;
  Unk5: number;
  Unk6: number;
  Unk7: number;
  PartyMemberNumber: number;
  Unk9: number;
  Unk10: number;
  Unk11: number;
  CharacterId: bigint;
  Unk13: number;
  Unk14: number;
  Unk15: bigint;
  Name: string;
  CharacterLevel: number;
  Unk18: bigint;
  Unk19: bigint;
};
export function read(reader: Read) {
  const data = {} as PartyMemberData;
  data.Unk0 = reader.u16();
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u8();
  data.Unk3 = ReadNBytesInt64.read(reader);
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u16();
  data.Unk6 = reader.u32();
  data.Unk7 = reader.u8();
  data.PartyMemberNumber = reader.u8();
  data.Unk9 = reader.u8();
  data.Unk10 = reader.u8();
  data.Unk11 = reader.u32();
  data.CharacterId = reader.u64();
  data.Unk13 = reader.u8();
  data.Unk14 = reader.u32();
  data.Unk15 = reader.u64();
  data.Name = reader.string(20);
  data.CharacterLevel = reader.u16();
  data.Unk18 = ReadNBytesInt64.read(reader);
  data.Unk19 = reader.u64();
  return data;
}
