import type { Read, Write } from "../../stream";
import * as UnpublishObject from "../structures/UnpublishObject";
export type RemoveObject = {
  unpublishedObjects: UnpublishObject.UnpublishObjectLog[];
};
export function read(reader: Read, version: number) {
  const data = {} as RemoveObject;
  data.unpublishedObjects = reader.array(reader.u16(), () => UnpublishObject.read(reader, version));
  return data;
}
export function write(writer: Write, data: RemoveObject) {
  writer.array(data.unpublishedObjects, { lenType: "u16" }, (obj: UnpublishObject.UnpublishObjectLog) => {
    UnpublishObject.write(writer, obj);
  });
}

export const name = "RemoveObject";
