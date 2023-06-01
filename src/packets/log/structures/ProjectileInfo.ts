import type { Read, Write } from "../../stream";
import type { ProjectileInfo } from "../../generated/structures/ProjectileInfo";
import * as TripodIndex from "../../common/TripodIndex";
import * as TripodLevel from "../../common/TripodLevel";
export type ProjectileLogInfo = {
  tripodIndex: TripodIndex.TripodIndex;
  chainSkillEffect: number;
  skillEffect: number;
  skillId: number;
  targetObjectId: bigint;
  ownerId: bigint;
  skillLevel: number;
  projectileId: bigint;
  tripodLevel: TripodLevel.TripodLevel;
};
export function read(reader: Read, version: number) {
  const data = {} as ProjectileLogInfo;
  data.tripodIndex = TripodIndex.read(reader, version);
  data.chainSkillEffect = reader.u32();
  data.skillEffect = reader.u32();
  data.skillId = reader.u32();
  data.targetObjectId = reader.u64();
  data.ownerId = reader.u64();
  data.skillLevel = reader.u8();
  data.projectileId = reader.u64();
  data.tripodLevel = TripodLevel.read(reader, version);
  return data;
}
export function write(writer: Write, data: ProjectileLogInfo | ProjectileInfo) {
  TripodIndex.write(writer, data.tripodIndex);
  writer.u32(data.chainSkillEffect);
  writer.u32(data.skillEffect);
  writer.u32(data.skillId);
  writer.u64(data.targetObjectId);
  writer.u64(data.ownerId);
  writer.u8(data.skillLevel);
  writer.u64(data.projectileId);
  TripodLevel.write(writer, data.tripodLevel);
}
