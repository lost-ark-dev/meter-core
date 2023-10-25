// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type TrackMoveInfo = {
  unk1_0?: Buffer;
  unk2: number;
  unk3: number;
  unk4: Buffer;
};
export function read(reader: Read) {
  const data = {} as TrackMoveInfo;
  if (reader.bool()) data.unk1_0 = reader.bytes(12);
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  data.unk4 = reader.bytes(12);
  return data;
}
