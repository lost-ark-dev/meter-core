// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as PCStruct from "../structures/PCStruct";
import * as TrackMoveInfo from "../structures/TrackMoveInfo";
export type PKTNewPC = {
  Unk5_0_m?: Buffer;
  Unk4_0_m?: Buffer;
  Unk2_m: number;
  Unk0_m: number;
  PCStruct: PCStruct.PCStruct;
  TrackMoveInfo?: TrackMoveInfo.TrackMoveInfo;
  Unk3_0_m?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewPC;
  if (reader.bool()) data.Unk5_0_m = reader.bytes(20);
  if (reader.bool()) data.Unk4_0_m = reader.bytes(12);
  data.Unk2_m = reader.u8();
  data.Unk0_m = reader.u8();
  data.PCStruct = PCStruct.read(reader);
  if (reader.bool()) data.TrackMoveInfo = TrackMoveInfo.read(reader);
  if (reader.bool()) data.Unk3_0_m = reader.u32();
  return data;
}
export const name = "PKTNewPC";
export const opcode = 55660;
