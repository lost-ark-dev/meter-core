// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTRemoveObject = {
  unpublishedObjects: Buffer[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRemoveObject;
  data.unpublishedObjects = reader.array(reader.u16(), () => reader.bytes(9), 200);
  return data;
}
export const name = "PKTRemoveObject";
export const opcode = 33454;
