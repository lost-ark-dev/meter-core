// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyPassiveStatusEffectRemoveNotify = {
  ObjectId: bigint;
  passiveStatusEffectList: number[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyPassiveStatusEffectRemoveNotify;
  data.ObjectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
export const name = "PKTPartyPassiveStatusEffectRemoveNotify";
export const opcode = 40394;
