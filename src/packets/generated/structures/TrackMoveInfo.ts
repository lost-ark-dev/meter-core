// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type TrackMoveInfo = {
  unk0: Buffer;
  unk1: number;
  unk3_0?: Buffer;
  unk4: number;
};
export function read(reader: Read) {
  const data = {} as TrackMoveInfo;
  data.unk0 = reader.bytes(12);
  data.unk1 = reader.u32();
  if (reader.bool()) data.unk3_0 = reader.bytes(12);
  data.unk4 = reader.u32();
  return data;
}
