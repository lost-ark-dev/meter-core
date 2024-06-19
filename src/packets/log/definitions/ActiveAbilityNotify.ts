import type { Read, Write } from "../../stream";
import * as ActiveAbility from "../structures/ActiveAbility";
export type ActiveAbilityNotify = {
  activeAbilityList: ActiveAbility.ActiveAbilityLog[];
  objectId: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as ActiveAbilityNotify;
  data.activeAbilityList = reader.array(reader.u16(), () => ActiveAbility.read(reader, version));
  data.objectId = reader.u64();
  return data;
}
export function write(writer: Write, data: ActiveAbilityNotify) {
  writer.array(data.activeAbilityList, { lenType: "u16" }, (obj: ActiveAbility.ActiveAbilityLog) => {
    ActiveAbility.write(writer, obj);
  });
  writer.u64(data.objectId);
}

export const name = "ActiveAbilityNotify";
