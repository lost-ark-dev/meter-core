import { CharacterExportInfo } from "../../common/api";
import type { Read, Write } from "../../stream";
export type APP_StatApi = {
  players: CharacterExportInfo[];
};
export function read(reader: Read, version: number) {
  const data = {} as APP_StatApi;
  data.players = reader.array(
    reader.u8(),
    () => {
      const l = {} as CharacterExportInfo;
      l.name = reader.string(20);
      l.stats = reader.array(
        reader.u8(),
        () => {
          const i = {} as { id: number; value: number };
          i.id = reader.u8();
          i.value = reader.u32();
          return i;
        },
        100
      );
      return l;
    },
    24
  );
  return data;
}
export function write(writer: Write, data: APP_StatApi) {
  writer.array(data.players, { maxLen: 24, lenType: "u8" }, (obj: CharacterExportInfo) => {
    writer.string(obj.name, 20);
    writer.array(obj.stats, { maxLen: 100, lenType: "u8" }, (obj2: { id: number; value: number }) => {
      writer.u8(obj2.id);
      writer.u32(obj2.value);
    });
  });
}

export const name = "APP_StatApi";
