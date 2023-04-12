// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTAddonSkillFeatureChangeNotify = {
  ObjectId: bigint;
  struct_117: Buffer;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; SkillId: number }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTAddonSkillFeatureChangeNotify;
  data.ObjectId = reader.u64();
  data.struct_117 = reader.bytes(reader.u16(), 200, 4);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const c = {} as any;
      c.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      c.SkillId = reader.u32();
      return c;
    },
    200
  );
  return data;
}
export const name = "PKTAddonSkillFeatureChangeNotify";
export const opcode = 36297;
