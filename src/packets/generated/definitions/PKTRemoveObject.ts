// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as UnpublishObject from "../structures/UnpublishObject";
export type PKTRemoveObject = {
  unpublishedObjects: UnpublishObject.UnpublishObject[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRemoveObject;
  data.unpublishedObjects = reader.array(reader.u16(), () => UnpublishObject.read(reader), 200);
  return data;
}
export const name = "PKTRemoveObject";
export const opcode = 29821;
