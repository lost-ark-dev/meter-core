// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as TrackMoveInfo from "../structures/TrackMoveInfo";
import * as PCStruct from "../structures/PCStruct";
export type PKTNewPC = {
  unk5_0_m?: Buffer;
  unk3_0_m?: number;
  trackMoveInfo?: TrackMoveInfo.TrackMoveInfo;
  unk4_0_m?: Buffer;
  struct_59?: { itemTint: Buffer; unk1_0_1: number; unk1_0_2: bigint }[];
  unk2_m: number;
  pcStruct: PCStruct.PCStruct;
  unk1_0?: number;
  itemTint?: Buffer;
  unk1_2?: bigint;
  unk0_m: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewPC;
  if (reader.bool()) data.unk5_0_m = reader.bytes(20);
  if (reader.bool()) data.unk3_0_m = reader.u32();
  if (reader.bool()) data.trackMoveInfo = TrackMoveInfo.read(reader);
  if (reader.bool()) data.unk4_0_m = reader.bytes(12);
  if (reader.bool() /*unk0*/) {
    data.struct_59 = reader.array(
      reader.u16(),
      () => {
        const P = {} as { itemTint: Buffer; unk1_0_1: number; unk1_0_2: bigint };
        P.itemTint = reader.bytes(reader.u16(), 5, 14);
        P.unk1_0_1 = reader.u32();
        P.unk1_0_2 = reader.u64();
        return P;
      },
      5
    );
  }
  data.unk2_m = reader.u8();
  data.pcStruct = PCStruct.read(reader);
  if (reader.bool() /*unk0*/) {
    data.unk1_0 = reader.u32();
    data.itemTint = reader.bytes(reader.u16(), 5, 14);
    data.unk1_2 = reader.u64();
  }
  data.unk0_m = reader.u8();
  return data;
}
export const name = "PKTNewPC";
export const opcode = 33762;
