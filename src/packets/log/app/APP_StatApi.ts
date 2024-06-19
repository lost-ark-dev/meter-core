import { CharacterExportInfo } from "../../common/api";
import type { Read, Write } from "../../stream";
export type APP_StatApi = {
  players: CharacterExportInfo[];
};
export function read(reader: Read, version: number) {
  const data = {} as APP_StatApi;
  data.players = reader.array(reader.u8(), () => {
    const l = {} as CharacterExportInfo;
    l.name = reader.string();
    l.stats = reader.array(reader.u8(), () => {
      const i = {} as { id: number; value: number };
      i.id = reader.u8();
      i.value = reader.u32();
      return i;
    });
    if (version >= 4) {
      l.elixirs = reader.array(reader.u8(), () => {
        const i = {} as {
          slot: number;
          entries: {
            level: number;
            id: number;
          }[];
        };
        i.slot = reader.u8();
        i.entries = reader.array(reader.u8(), () => {
          const j = {} as { level: number; id: number };
          j.level = reader.u8();
          j.id = reader.u32();
          return j;
        });
        return i;
      });
    }
    if (version >= 5) {
      l.gems = reader.array(reader.u8(), () => {
        const i = {} as { id: number; skillId: number; type: number; value: number };
        i.id = reader.u32();
        i.skillId = reader.u32();
        i.type = reader.u8();
        i.value = reader.u16();
        return i;
      });
    }
    return l;
  });
  return data;
}
export function write(writer: Write, data: APP_StatApi) {
  writer.array(data.players, { lenType: "u8" }, (obj: CharacterExportInfo) => {
    writer.string(obj.name);
    writer.array(obj.stats, { lenType: "u8" }, (obj2: { id: number; value: number }) => {
      writer.u8(obj2.id);
      writer.u32(obj2.value);
    });
    writer.array(
      obj.elixirs,
      { lenType: "u8" },
      (obj3: {
        slot: number;
        entries: {
          level: number;
          id: number;
        }[];
      }) => {
        writer.u8(obj3.slot);
        writer.array(obj3.entries, { lenType: "u8" }, (obj4: { level: number; id: number }) => {
          writer.u8(obj4.level);
          writer.u32(obj4.id);
        });
      }
    );
    writer.array(
      obj.gems,
      { lenType: "u8" }, //20 in case they ever change gems count
      (obj4: { id: number; skillId: number; type: number; value: number }) => {
        writer.u32(obj4.id);
        writer.u32(obj4.skillId);
        writer.u8(obj4.type);
        writer.u16(obj4.value);
      }
    );
  });
}

export const name = "APP_StatApi";
