// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTInitPC = {
  unk0: number;
  unk1: number;
  unk2: number;
  unk3: number;
  unk4: number;
  struct_102: Buffer;
  unk6: Buffer;
  unk7: number;
  playerId: bigint;
  unk9: number;
  unk10: number;
  unk11: number;
  unk12: number;
  unk13: number;
  unk14: number;
  unk15: bigint;
  unk16: number;
  struct_217: Buffer;
  unk18: number;
  unk19: number;
  unk20: number;
  unk21: number;
  statPair: { value: bigint; statType: number }[];
  unk23: number;
  gearLevel: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk26: number;
  unk27: number;
  classId: number;
  unk29: bigint;
  unk30: number;
  unk31: bigint;
  unk32: number;
  unk33: bigint;
  unk34: number;
  level: number;
  unk36: bigint;
  unk37: number;
  unk38: number;
  unk40_0?: number;
  unk41: number;
  unk42: number;
  characterId: bigint;
  unk44: number;
  unk45: Buffer;
  unk46: Buffer;
  unk47: number;
  unk48: number;
  name: string;
  struct_328: string;
  unk51: number;
  unk52: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk54: number;
  unk55: number;
  unk56: number;
  struct_334: Buffer;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitPC;
  data.unk0 = reader.u8();
  data.unk1 = reader.u16();
  data.unk2 = reader.u16();
  data.unk3 = reader.u32();
  data.unk4 = reader.u8();
  data.struct_102 = reader.bytes(reader.u16(), 62);
  data.unk6 = reader.bytes(120);
  data.unk7 = reader.u8();
  data.playerId = reader.u64();
  data.unk9 = reader.u8();
  data.unk10 = reader.u8();
  data.unk11 = reader.u32();
  data.unk12 = reader.u8();
  data.unk13 = reader.u8();
  data.unk14 = reader.u8();
  data.unk15 = reader.u64();
  data.unk16 = reader.u8();
  data.struct_217 = reader.bytes(reader.u16(), 3, 17);
  data.unk18 = reader.u32();
  data.unk19 = reader.u32();
  data.unk20 = reader.u8();
  data.unk21 = reader.u16();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const j = {} as { value: bigint; statType: number };
      j.value = ReadNBytesInt64.read(reader);
      j.statType = reader.u8();
      return j;
    },
    152
  );
  data.unk23 = reader.u8();
  data.gearLevel = reader.f32();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.unk26 = reader.u8();
  data.unk27 = reader.u16();
  data.classId = reader.u16();
  data.unk29 = reader.u64();
  data.unk30 = reader.u32();
  data.unk31 = reader.u64();
  data.unk32 = reader.u8();
  data.unk33 = reader.u64();
  data.unk34 = reader.u32();
  data.level = reader.u16();
  data.unk36 = reader.u64();
  data.unk37 = reader.u8();
  data.unk38 = reader.u32();
  if (reader.bool()) data.unk40_0 = reader.u32();
  data.unk41 = reader.u32();
  data.unk42 = reader.u8();
  data.characterId = reader.u64();
  data.unk44 = reader.u8();
  data.unk45 = reader.bytes(25);
  data.unk46 = reader.bytes(35);
  data.unk47 = reader.u32();
  data.unk48 = reader.u8();
  data.name = reader.string(20);
  data.struct_328 = reader.string(7);
  data.unk51 = reader.u8();
  data.unk52 = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.unk54 = reader.u32();
  data.unk55 = reader.u8();
  data.unk56 = reader.u8();
  data.struct_334 = reader.bytes(reader.u16(), 104, 30);
  return data;
}
export const name = "PKTInitPC";
export const opcode = 37909;
