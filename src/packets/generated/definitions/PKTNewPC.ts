// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as PCStruct from "../structures/PCStruct";
import * as TrackMoveInfo from "../structures/TrackMoveInfo";
export type PKTNewPC = {
  unk5_0_m?: Buffer;
  unk4_0_m?: Buffer;
  unk0_m: number;
  itemTint?: Buffer;
  unk1_1?: number;
  unk1_2?: bigint;
  unk2_m: number;
  pcStruct: PCStruct.PCStruct;
  struct_58?: { unk1_0_0: number; unk1_0_1: bigint; itemTint: Buffer }[];
  trackMoveInfo?: TrackMoveInfo.TrackMoveInfo;
  unk3_0_m?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewPC;
  if (reader.bool()) data.unk5_0_m = reader.bytes(20);
  if (reader.bool()) data.unk4_0_m = reader.bytes(12);
  data.unk0_m = reader.u8();
  if (reader.bool() /*unk0*/) {
    data.itemTint = reader.bytes(reader.u16(), 5, 14);
    data.unk1_1 = reader.u32();
    data.unk1_2 = reader.u64();
  }
  data.unk2_m = reader.u8();
  data.pcStruct = PCStruct.read(reader);
  if (reader.bool() /*unk0*/) {
    data.struct_58 = reader.array(
      reader.u16(),
      () => {
        const P = {} as { unk1_0_0: number; unk1_0_1: bigint; itemTint: Buffer };
        P.unk1_0_0 = reader.u32();
        P.unk1_0_1 = reader.u64();
        P.itemTint = reader.bytes(reader.u16(), 5, 14);
        return P;
      },
      5
    );
  }
  if (reader.bool()) data.trackMoveInfo = TrackMoveInfo.read(reader);
  if (reader.bool()) data.unk3_0_m = reader.u32();
  return data;
}
export const name = "PKTNewPC";
export const opcode = 21282;
