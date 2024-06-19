import type { Read, Write } from "../../stream";
export type CS_SyncDmg = {
  table: {
    name: string;
    typeId: number; //classId or typeId of sideral
    dealt: number;
    crit: number; //% of hits (12345 = 123.45%)
    fa: number; //% of hits (12345 = 123.45%)
    ba: number; //% of hits (12345 = 123.45%)
    receivedDps: number; //for rdps
    receivedSupp: number; //for rdps
    given: number; //for rdps
    deadDuration: number;
  }[];
  duration: number; //duration in ms
};
export function read(reader: Read) {
  const data = {} as CS_SyncDmg;
  data.table = reader.array(
    reader.u8(),
    () =>
      ({
        name: reader.string(),
        typeId: reader.u16(),
        dealt: reader.i48(),
        crit: reader.u16(),
        fa: reader.u16(),
        ba: reader.u16(),
        receivedDps: reader.i48(),
        receivedSupp: reader.i48(),
        given: reader.i48(),
        deadDuration: reader.u32(),
      } as CS_SyncDmg["table"][0])
  );
  data.duration = reader.u32();
  return data;
}
export function write(writer: Write, data: CS_SyncDmg) {
  writer.array(data.table, { lenType: "u8" }, (v) => {
    writer.string(v.name);
    writer.u16(v.typeId);
    writer.i48(v.dealt);
    writer.u16(v.crit);
    writer.u16(v.fa);
    writer.u16(v.ba);
    writer.i48(v.receivedDps);
    writer.i48(v.receivedSupp);
    writer.i48(v.given);
    writer.u32(v.deadDuration);
  });
  writer.u32(data.duration);
}

export const name = "CS_SyncDmg";
