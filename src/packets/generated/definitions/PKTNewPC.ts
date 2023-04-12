// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as PCStruct from "../structures/PCStruct";
import * as TrackMoveInfo from "../structures/TrackMoveInfo";
export type PKTNewPC = {
  Unk3_0_m?: number;
  PCStruct: PCStruct.PCStruct;
  Unk0_m: number;
  TrackMoveInfo?: TrackMoveInfo.TrackMoveInfo;
  Unk2_m: number;
  Unk4_0_m?: Buffer;
  Unk5_0_m?: Buffer;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewPC;
  if (reader.bool()) data.Unk3_0_m = reader.u32();
  data.PCStruct = PCStruct.read(reader);
  data.Unk0_m = reader.u8();
  if (reader.bool()) data.TrackMoveInfo = TrackMoveInfo.read(reader);
  data.Unk2_m = reader.u8();
  if (reader.bool()) data.Unk4_0_m = reader.bytes(12);
  if (reader.bool()) data.Unk5_0_m = reader.bytes(20);
  return data;
}
export const name = "PKTNewPC";
export const opcode = 15971;
