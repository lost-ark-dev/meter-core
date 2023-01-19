// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ProjectileInfo from "../structures/ProjectileInfo";
export type PKTNewProjectile = {
  projectileInfo: ProjectileInfo.ProjectileInfo;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewProjectile;
  data.projectileInfo = ProjectileInfo.read(reader);
  return data;
}
export const name = "PKTNewProjectile";
export const opcode = 36459;
