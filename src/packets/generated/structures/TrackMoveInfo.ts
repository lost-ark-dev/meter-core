// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type TrackMoveInfo = {
  unk0: number;
  unk1: number;
  unk2: Buffer;
  unk4_0?: Buffer;
};
export function read(reader: Read) {
  const data = {} as TrackMoveInfo;
  data.unk0 = reader.u32();
  data.unk1 = reader.u32();
  data.unk2 = reader.bytes(12);
  if (reader.bool()) data.unk4_0 = reader.bytes(12);
  return data;
}
