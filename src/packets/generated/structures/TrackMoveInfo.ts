// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type TrackMoveInfo = {
  unk0: number;
  unk1: Buffer;
  unk2: number;
  unk4_0?: Buffer;
};
export function read(reader: Read) {
  const data = {} as TrackMoveInfo;
  data.unk0 = reader.u32();
  data.unk1 = reader.bytes(12);
  data.unk2 = reader.u32();
  if (reader.bool()) data.unk4_0 = reader.bytes(12);
  return data;
}
