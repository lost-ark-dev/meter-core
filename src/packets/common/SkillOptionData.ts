import type { Read } from "../stream";
import * as TripodIndex from "./TripodIndex";
import * as TripodLevel from "./TripodLevel";

export type SkillOptionData = {
  LayerIndex?: number;
  StartStageIndex?: number;
  TransitIndex?: number;
  StageStartTime?: number;
  FarmostDistance?: number;
  TripodIndex?: TripodIndex.TripodIndex;
  TripodLevel?: TripodLevel.TripodLevel;
};

export function read(reader: Read) {
  const data: SkillOptionData = {};
  const flag = reader.u8();
  if (flag & 1) data.LayerIndex = reader.u8();
  if (flag & 2) data.StartStageIndex = reader.u8();
  if (flag & 4) data.TransitIndex = reader.u32();
  if (flag & 8) data.StageStartTime = reader.u32();
  if (flag & 0x10) data.FarmostDistance = reader.u32();
  if (flag & 0x20) data.TripodIndex = TripodIndex.read(reader);
  if (flag & 0x40) data.TripodLevel = TripodLevel.read(reader);
  return data;
}
