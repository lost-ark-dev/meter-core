// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTAddonSkillFeatureChangeNotify = {
  ObjectId: bigint;
  struct_120: Buffer;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; SkillId: number }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTAddonSkillFeatureChangeNotify;
  data.ObjectId = reader.u64();
  data.struct_120 = reader.bytes(reader.u16(), 200, 4);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const P = {} as any;
      P.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      P.SkillId = reader.u32();
      return P;
    },
    200
  );
  return data;
}
export const name = "PKTAddonSkillFeatureChangeNotify";
export const opcode = 55274;
