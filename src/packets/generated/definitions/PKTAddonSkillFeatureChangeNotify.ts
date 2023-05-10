// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTAddonSkillFeatureChangeNotify = {
  struct_120: Buffer;
  addonSkillFeatureList: { SkillId: number; addonSkillFeatureIdList: number[] }[];
  ObjectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTAddonSkillFeatureChangeNotify;
  data.struct_120 = reader.bytes(reader.u16(), 200, 4);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const c = {} as any;
      c.SkillId = reader.u32();
      c.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return c;
    },
    200
  );
  data.ObjectId = reader.u64();
  return data;
}
export const name = "PKTAddonSkillFeatureChangeNotify";
export const opcode = 15935;
