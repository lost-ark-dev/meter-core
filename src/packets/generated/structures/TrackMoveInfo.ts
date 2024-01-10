// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type TrackMoveInfo = {
  unk0: number;
  unk1: Buffer;
  unk3_0?: Buffer;
  unk4: number;
};
export function read(reader: Read) {
  const data = {} as TrackMoveInfo;
  data.unk0 = reader.u32();
  data.unk1 = reader.bytes(12);
  if (reader.bool()) data.unk3_0 = reader.bytes(12);
  data.unk4 = reader.u32();
  return data;
}
