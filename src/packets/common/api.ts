export enum ApiStatType {
  CRIT,
  SPEC,
  SWIFT,
  EXP,
  ATKPOWER,
  SKILLDMG,
}

export type CharacterExportInfo = {
  name: string;
  stats: { id: ApiStatType; value: number }[];
  elixirs: { slot: number; entries: { level: number; id: number }[] }[];
  gems: { id: number; skillId: number; type: number; value: number }[];
};
