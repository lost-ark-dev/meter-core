// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as TrackMoveInfo from "../structures/TrackMoveInfo";
import * as PCStruct from "../structures/PCStruct";
export type PKTNewPC = {
  unk4_0_m?: Buffer;
  unk3_0_m?: number;
  unk0_m: number;
  trackMoveInfo?: TrackMoveInfo.TrackMoveInfo;
  pcStruct: PCStruct.PCStruct;
  unk2_m: number;
  unk5_0_m?: Buffer;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewPC;
  if (reader.bool()) data.unk4_0_m = reader.bytes(12);
  if (reader.bool()) data.unk3_0_m = reader.u32();
  data.unk0_m = reader.u8();
  if (reader.bool()) data.trackMoveInfo = TrackMoveInfo.read(reader);
  data.pcStruct = PCStruct.read(reader);
  data.unk2_m = reader.u8();
  if (reader.bool()) data.unk5_0_m = reader.bytes(20);
  return data;
}
export const name = "PKTNewPC";
export const opcode = 28636;
