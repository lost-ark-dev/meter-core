// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTAddonSkillFeatureChangeNotify = {
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  objectId: bigint;
  addonFeatureIdList: Buffer;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTAddonSkillFeatureChangeNotify;
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const c = {} as { addonSkillFeatureIdList: number[]; skillId: number };
      c.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      c.skillId = reader.u32();
      return c;
    },
    200
  );
  data.objectId = reader.u64();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  return data;
}
export const name = "PKTAddonSkillFeatureChangeNotify";
export const opcode = 40982;
