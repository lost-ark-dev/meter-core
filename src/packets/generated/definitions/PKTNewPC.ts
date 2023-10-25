// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as PCStruct from "../structures/PCStruct";
import * as TrackMoveInfo from "../structures/TrackMoveInfo";
export type PKTNewPC = {
  unk4_0_m?: Buffer;
  unk0_m: number;
  unk2_m: number;
  unk5_0_m?: Buffer;
  pcStruct: PCStruct.PCStruct;
  trackMoveInfo?: TrackMoveInfo.TrackMoveInfo;
  unk3_0_m?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewPC;
  if (reader.bool()) data.unk4_0_m = reader.bytes(12);
  data.unk0_m = reader.u8();
  data.unk2_m = reader.u8();
  if (reader.bool()) data.unk5_0_m = reader.bytes(20);
  data.pcStruct = PCStruct.read(reader);
  if (reader.bool()) data.trackMoveInfo = TrackMoveInfo.read(reader);
  if (reader.bool()) data.unk3_0_m = reader.u32();
  return data;
}
export const name = "PKTNewPC";
export const opcode = 18659;
