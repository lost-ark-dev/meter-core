// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type TrackMoveInfo = {
  Unk0: Buffer;
  Unk1_0?: Buffer;
  Unk2: number;
  Unk3: number;
};
export function read(reader: Read) {
  const data = {} as TrackMoveInfo;
  data.Unk0 = reader.bytes(12);
  if (reader.bool()) data.Unk1_0 = reader.bytes(12);
  data.Unk2 = reader.u32();
  data.Unk3 = reader.u32();
  return data;
}
