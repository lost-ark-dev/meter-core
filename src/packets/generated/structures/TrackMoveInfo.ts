// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type TrackMoveInfo = {
  Unk0: number;
  Unk1: number;
  Unk2_0?: Buffer;
  Unk3: Buffer;
};
export function read(reader: Read) {
  const data = {} as TrackMoveInfo;
  data.Unk0 = reader.u32();
  data.Unk1 = reader.u32();
  if (reader.bool()) data.Unk2_0 = reader.bytes(12);
  data.Unk3 = reader.bytes(12);
  return data;
}
