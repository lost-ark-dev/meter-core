// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyPassiveStatusEffectAddNotify = {
  passiveStatusEffectList: number[];
  unk0_m: number;
  objectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyPassiveStatusEffectAddNotify;
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  data.unk0_m = reader.u8();
  data.objectId = reader.u64();
  return data;
}
export const name = "PKTPartyPassiveStatusEffectAddNotify";
export const opcode = 37640;
