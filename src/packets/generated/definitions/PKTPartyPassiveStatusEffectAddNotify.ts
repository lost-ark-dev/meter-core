// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyPassiveStatusEffectAddNotify = {
  objectId: bigint;
  passiveStatusEffectList: number[];
  unk0_m: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyPassiveStatusEffectAddNotify;
  data.objectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  data.unk0_m = reader.u8();
  return data;
}
export const name = "PKTPartyPassiveStatusEffectAddNotify";
export const opcode = 21670;
