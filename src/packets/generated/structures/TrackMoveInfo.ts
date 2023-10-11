// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type TrackMoveInfo = {
  unk0: Buffer;
  unk2_0?: Buffer;
  unk3: number;
  unk4: number;
};
export function read(reader: Read) {
  const data = {} as TrackMoveInfo;
  data.unk0 = reader.bytes(12);
  if (reader.bool()) data.unk2_0 = reader.bytes(12);
  data.unk3 = reader.u32();
  data.unk4 = reader.u32();
  return data;
}
