import type { Read, Write } from "../../stream";
import type { PKTAddonSkillFeatureChangeNotify } from "../../generated/types";
export type AddonSkillFeatureChangeNotify = {
  objectId: bigint;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
};
export function read(reader: Read, version: number) {
  const data = {} as AddonSkillFeatureChangeNotify;
  data.objectId = reader.u64();
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
  return data;
}
export function write(writer: Write, data: AddonSkillFeatureChangeNotify | PKTAddonSkillFeatureChangeNotify) {
  writer.u64(data.objectId);
  writer.array(
    data.addonSkillFeatureList,
    { maxLen: 200, lenType: "u16" },
    (obj: { addonSkillFeatureIdList: number[]; skillId: number }) => {
      writer.array(obj.addonSkillFeatureIdList, { maxLen: 5, lenType: "u16" }, (obj2: number) => {
        writer.u32(obj2);
      });
      writer.u32(obj.skillId);
    }
  );
}

export const name = "AddonSkillFeatureChangeNotify";
