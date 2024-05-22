// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as PCStruct from "../structures/PCStruct";
import * as TrackMoveInfo from "../structures/TrackMoveInfo";
export type PKTNewPC = {
  unk3_0_m?: number;
  struct_63?: { unk1_0_0: number; itemTint: Buffer; unk1_0_2: bigint }[];
  unk5_0_m?: Buffer;
  unk2_m: number;
  pcStruct: PCStruct.PCStruct;
  unk4_0_m?: Buffer;
  trackMoveInfo?: TrackMoveInfo.TrackMoveInfo;
  unk0_m: number;
  unk1_0?: bigint;
  itemTint?: Buffer;
  unk1_2?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewPC;
  if (reader.bool()) data.unk3_0_m = reader.u32();
  if (reader.bool() /*unk0*/) {
    data.struct_63 = reader.array(
      reader.u16(),
      () => {
        const R = {} as { unk1_0_0: number; itemTint: Buffer; unk1_0_2: bigint };
        R.unk1_0_0 = reader.u32();
        R.itemTint = reader.bytes(reader.u16(), 5, 14);
        R.unk1_0_2 = reader.u64();
        return R;
      },
      5
    );
  }
  if (reader.bool()) data.unk5_0_m = reader.bytes(20);
  data.unk2_m = reader.u8();
  data.pcStruct = PCStruct.read(reader);
  if (reader.bool()) data.unk4_0_m = reader.bytes(12);
  if (reader.bool()) data.trackMoveInfo = TrackMoveInfo.read(reader);
  data.unk0_m = reader.u8();
  if (reader.bool() /*unk0*/) {
    data.unk1_0 = reader.u64();
    data.itemTint = reader.bytes(reader.u16(), 5, 14);
    data.unk1_2 = reader.u32();
  }
  return data;
}
export const name = "PKTNewPC";
export const opcode = 47390;
