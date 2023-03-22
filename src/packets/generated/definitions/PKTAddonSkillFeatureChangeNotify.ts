// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTAddonSkillFeatureChangeNotify = {
  addonSkillFeatureList: { SkillId: number; addonSkillFeatureIdList: number[] }[];
  ObjectId: bigint;
  struct_120: Buffer;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTAddonSkillFeatureChangeNotify;
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
  data.struct_120 = reader.bytes(reader.u16(), 200, 4);
  return data;
}
export const name = "PKTAddonSkillFeatureChangeNotify";
export const opcode = 27714;
