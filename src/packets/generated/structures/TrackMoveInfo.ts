// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type TrackMoveInfo = {
  unk1_0?: Buffer;
  unk2: Buffer;
  unk3: number;
  unk4: number;
};
export function read(reader: Read) {
  const data = {} as TrackMoveInfo;
  if (reader.bool()) data.unk1_0 = reader.bytes(12);
  data.unk2 = reader.bytes(12);
  data.unk3 = reader.u32();
  data.unk4 = reader.u32();
  return data;
}
