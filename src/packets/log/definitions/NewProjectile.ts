import type { Read, Write } from "../../stream";
import * as ProjectileInfo from "../structures/ProjectileInfo";
export type NewProjectile = {
  projectileInfo: ProjectileInfo.ProjectileLogInfo;
};
export function read(reader: Read, version: number) {
  const data = {} as NewProjectile;
  data.projectileInfo = ProjectileInfo.read(reader, version);
  return data;
}
export function write(writer: Write, data: NewProjectile) {
  ProjectileInfo.write(writer, data.projectileInfo);
}

export const name = "NewProjectile";
