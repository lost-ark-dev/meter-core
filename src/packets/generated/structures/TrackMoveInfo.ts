// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type TrackMoveInfo = {
  Unk0: number;
  Unk1: Buffer;
  Unk2: number;
  Unk3_0?: Buffer;
};
export function read(reader: Read) {
  const data = {} as TrackMoveInfo;
  data.Unk0 = reader.u32();
  data.Unk1 = reader.bytes(12);
  data.Unk2 = reader.u32();
  if (reader.bool()) data.Unk3_0 = reader.bytes(12);
  return data;
}
