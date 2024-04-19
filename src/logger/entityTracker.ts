import type { ItemSetCount, ItemSetData, MeterData, PassiveOption, SkillFeatureOption } from "../data";
import { TripodIndex } from "../packets/common/TripodIndex";
import { TripodLevel } from "../packets/common/TripodLevel";
import { equipcategory, npcgrade, playerclass, stattype } from "../packets/generated/enums";
import { EquipItemDataLog } from "../packets/log/structures/EquipItemData";
import type { InitEnv, InitPC, NewNpc, NewNpcSummon, NewPC } from "../packets/log/types";
import type { LogEvent } from "./logEvent";
import type { PartyTracker } from "./partytracker";
import type { PCIdMapper } from "./pcidmapper";
import { StatusEffectTargetType, StatusTracker } from "./statustracker";

export class EntityTracker {
  #pcIdMapper: PCIdMapper;
  #partyTracker: PartyTracker;
  #statusTracker: StatusTracker;
  #data: MeterData;

  entities = new Map<bigint, Entity>();
  localPlayer: Player;

  constructor(pcIdMapper: PCIdMapper, partyTracker: PartyTracker, statusTracker: StatusTracker, data: MeterData) {
    this.#pcIdMapper = pcIdMapper;
    this.#partyTracker = partyTracker;
    this.#statusTracker = statusTracker;
    this.#data = data;

    this.localPlayer = {
      entityId: 0n,
      entityType: EntityType.Player,
      name: "You",
      class: 0,
      gearLevel: 0,
      characterId: 0n,
      stance: 0,
      stats: new Map(),
      skills: new Map(),
      items: {},
    };
  }
  processNewPC(pkt: LogEvent<NewPC>): Player | undefined {
    const parsed = pkt.parsed;
    if (!parsed) return;
    const player: Player = {
      entityId: parsed.pcStruct.playerId,
      entityType: EntityType.Player,
      name: parsed.pcStruct.name,
      class: parsed.pcStruct.classId,
      gearLevel: parsed.pcStruct.maxItemLevel,
      characterId: parsed.pcStruct.characterId,
      stance: 0,
      stats: this.#data.getStatPairMap(parsed.pcStruct.statPair),
      skills: new Map(),
      items: {},
    };
    this.entities.set(player.entityId, player);
    const oldEntityId = this.#pcIdMapper.getEntityId(player.characterId);
    if (oldEntityId) {
      this.#partyTracker.changeEntityId(oldEntityId, parsed.pcStruct.playerId);
    }
    this.#pcIdMapper.addMapping(player.characterId, player.entityId);
    this.#partyTracker.completeEntry(player.characterId, player.entityId);

    this.#statusTracker.newPC(parsed, this.localPlayer.characterId, pkt.time);

    //Items
    player.itemSet = this.getPlayerSetOptions(parsed.pcStruct.equipItemDataList);

    const equipList: PlayerItemData[] = [];
    parsed.pcStruct.equipItemDataList.forEach((item) => {
      if (item.id !== undefined && item.slot !== undefined) equipList.push({ id: item.id, slot: item.slot });
    });
    player.items.equipList = equipList;

    const lifeToolList: PlayerItemData[] = [];
    parsed.pcStruct.equipLifeToolDataList.forEach((item) => {
      if (item.id !== undefined && item.slot !== undefined) lifeToolList.push({ id: item.id, slot: item.slot });
    });
    player.items.lifeToolList = lifeToolList;
    return player;
  }
  processInitEnv(pkt: LogEvent<InitEnv>) {
    const parsed = pkt.parsed;
    if (!parsed) return;

    if (this.localPlayer.entityId !== 0n) this.#partyTracker.changeEntityId(this.localPlayer.entityId, parsed.playerId);

    this.entities.clear(); //TODO: here we clear entities, this might be uncompatible with keeping previous encounter visible

    //Restore localplayer
    const player: Player = {
      entityId: parsed.playerId,
      entityType: EntityType.Player,
      name: this.localPlayer.name,
      class: this.localPlayer.class,
      gearLevel: this.localPlayer.gearLevel,
      characterId: this.localPlayer.characterId,
      stance: this.localPlayer.stance,
      stats: this.localPlayer.stats,
      skills: this.localPlayer.skills,
      items: this.localPlayer.items,
    };
    this.localPlayer = player;
    this.entities.set(player.entityId, player);
    this.#pcIdMapper.clear();
    this.#statusTracker.Clear(pkt.time);
    if (player.characterId !== 0n) this.#pcIdMapper.addMapping(player.characterId, player.entityId);
    if (this.localPlayer && this.localPlayer.characterId && this.localPlayer.characterId > 0n)
      this.#partyTracker.completeEntry(this.localPlayer.characterId, parsed.playerId);
  }
  processInitPC(pkt: LogEvent<InitPC>): Player | undefined {
    const parsed = pkt.parsed;
    if (!parsed) return;

    this.entities.clear(); //TODO: here we clear entities, this might be uncompatible with keeping previous encounter visible

    const player: Player = {
      entityId: parsed.playerId,
      entityType: EntityType.Player,
      name: parsed.name,
      class: parsed.classId,
      gearLevel: parsed.gearLevel,
      characterId: parsed.characterId,
      stance: 0,
      stats: this.#data.getStatPairMap(parsed.statPair),
      skills: new Map(),
      items: parsed.characterId === this.localPlayer.characterId ? this.localPlayer.items : {},
    };
    this.localPlayer = player;
    this.entities.set(player.entityId, player);
    this.#pcIdMapper.addMapping(player.characterId, player.entityId);
    this.#partyTracker.setOwnName(parsed.name);
    this.#partyTracker.completeEntry(player.characterId, parsed.playerId);
    this.#statusTracker.RemoveLocalObject(parsed.playerId, pkt.time);
    for (const se of parsed.statusEffectDatas) {
      const sourceEntity = this.getSourceEntity(se.sourceId);
      this.#statusTracker.RegisterStatusEffect(
        this.#statusTracker.buildStatusEffect(
          se,
          parsed.playerId,
          sourceEntity.entityId,
          StatusEffectTargetType.Local,
          pkt.time
        )
      );
    }
    return player;
  }
  processNewNpc(pkt: LogEvent<NewNpc>): Npc | undefined {
    const parsed = pkt.parsed;
    if (!parsed) return;

    let isBoss = false;
    const npcData = this.#data.npc.get(parsed.npcStruct.typeId);
    if (
      npcData &&
      [npcgrade.boss, npcgrade.raid, npcgrade.epic_raid, npcgrade.commander].includes(npcgrade[npcData.grade])
    ) {
      isBoss = true;
    }
    const npc: Npc = {
      entityId: parsed.npcStruct.objectId,
      entityType: EntityType.Npc,
      name: npcData?.name ?? parsed.npcStruct.objectId.toString(16),
      typeId: parsed.npcStruct.typeId,
      isBoss,
      grade: npcData?.grade ?? "none",
      pushimmune: npcData?.pushimmune ?? false,
      stats: this.#data.getStatPairMap(parsed.npcStruct.statPair),
      level: parsed.npcStruct.level,
      balanceLevel: parsed.npcStruct.balanceLevel ?? parsed.npcStruct.level,
    };
    const esther = this.#data.getNpcEsther(parsed.npcStruct.typeId);
    if (esther !== undefined) {
      npc.entityType = EntityType.Esther;
      npc.name = esther.name;
      (npc as Esther).icon = esther.icon;
    }
    this.entities.set(npc.entityId, npc);
    this.#statusTracker.RemoveLocalObject(parsed.npcStruct.objectId, pkt.time);
    for (const se of parsed.npcStruct.statusEffectDatas) {
      const sourceEntity = this.getSourceEntity(se.sourceId);
      this.#statusTracker.RegisterStatusEffect(
        this.#statusTracker.buildStatusEffect(
          se,
          parsed.npcStruct.objectId,
          sourceEntity.entityId,
          StatusEffectTargetType.Local,
          pkt.time
        )
      );
    }
    return npc;
  }
  processNewNpcSummon(pkt: LogEvent<NewNpcSummon>): Summon | undefined {
    const parsed = pkt.parsed;
    if (!parsed) return;

    let isBoss = false;
    const npc = this.#data.npc.get(parsed.npcData.typeId);
    if (npc && ["boss", "raid", "epic_raid", "commander"].includes(npc.grade)) {
      isBoss = true;
    }
    const summon: Summon = {
      entityId: parsed.npcData.objectId,
      entityType: EntityType.Summon,
      name: npc?.name ?? parsed.npcData.objectId.toString(16),
      ownerId: parsed.ownerId,
      typeId: parsed.npcData.typeId,
      isBoss,
      grade: npc?.grade ?? "none",
      pushimmune: npc?.pushimmune ?? false,
      stats: this.#data.getStatPairMap(parsed.npcData.statPair),
      level: parsed.npcData.level,
      balanceLevel: parsed.npcData.balanceLevel ?? parsed.npcData.level,
    };
    this.#statusTracker.RemoveLocalObject(parsed.npcData.objectId, pkt.time);
    for (const se of parsed.npcData.statusEffectDatas) {
      const sourceEntity = this.getSourceEntity(se.sourceId);
      this.#statusTracker.RegisterStatusEffect(
        this.#statusTracker.buildStatusEffect(
          se,
          parsed.npcData.objectId,
          sourceEntity.entityId,
          StatusEffectTargetType.Local,
          pkt.time
        )
      );
    }
    this.entities.set(summon.entityId, summon);
    return summon;
  }
  getPlayerSetOptions(itemDataList: { id?: number; slot?: number }[]): PassiveOption[] {
    const playerSet: Map<string /*name*/, Map<number /*level*/, number /*count*/>> = new Map();
    itemDataList.forEach((item) => {
      if (item.id && item.slot && item.slot >= equipcategory.weapon && item.slot <= equipcategory.armor_pauldron) {
        const itemSet = this.#data.itemSet.items.get(item.id);
        if (itemSet) {
          let setEntry = playerSet.get(itemSet.setname);
          if (!setEntry) {
            setEntry = new Map();
            playerSet.set(itemSet.setname, setEntry);
          }
          setEntry.set(itemSet.level, (setEntry.get(itemSet.level) ?? 0) + 1);
        }
      }
    });
    const effectiveOptions: PassiveOption[] = [];
    playerSet.forEach((v, setName) => {
      const effect = this.#data.itemSet.seteffects.get(setName);
      if (!effect) return;
      let maxCountApplied = 0;
      let higherLevelCount = 0;
      for (const [level, count] of [...v.entries()].sort((a, b) => b[0] - a[0])) {
        const effectLevel = effect.get(level);
        if (!effectLevel) return;
        for (const [requiredLevel, options] of [...effectLevel.entries()]) {
          if (requiredLevel > maxCountApplied && count + higherLevelCount >= requiredLevel) {
            effectiveOptions.push(...options.options);
            maxCountApplied = Math.max(maxCountApplied, requiredLevel);
          }
        }
        higherLevelCount = count;
      }
    });
    return effectiveOptions;
  }
  getSourceEntity(id: bigint): Entity {
    let entity = this.entities.get(id);
    if (entity?.entityType === EntityType.Projectile) {
      id = (entity as Projectile).ownerId;
    } else if (entity?.entityType === EntityType.Summon) {
      id = (entity as Summon).ownerId;
    }
    entity = this.entities.get(id);
    if (entity) return entity;
    const newEntity = {
      entityId: id,
      entityType: EntityType.Npc,
      name: id.toString(16),
      stats: new Map(),
    };
    this.entities.set(id, newEntity);
    return newEntity;
  }
  guessIsPlayer(entity: Entity, skillid: number): Entity {
    const classId = this.#data.getSkillClassId(skillid);
    if (classId !== 0) {
      let newEntity: Player;
      if (entity.entityType === EntityType.Player) {
        const player = entity as Player;
        if (player.class === classId) return player;
        newEntity = {
          entityId: player.entityId,
          entityType: EntityType.Player,
          name: player.name,
          class: classId,
          gearLevel: player.gearLevel,
          characterId: player.characterId,
          stance: player.stance,
          stats: player.stats,
          skills: new Map(),
          items: {},
        };
      } else if (entity.entityType === EntityType.Unknown) {
        newEntity = {
          entityId: entity.entityId,
          entityType: EntityType.Player,
          name: entity.name,
          class: classId,
          gearLevel: 0,
          characterId: 0n,
          stance: 0,
          stats: new Map(),
          skills: new Map(),
          items: {},
        };
      } else return entity;

      this.entities.set(entity.entityId, newEntity);
      return newEntity;
    }
    return entity;
  }
  getOrCreateEntity(entityId: bigint): Entity {
    let ent = this.entities.get(entityId);
    if (!ent) {
      ent = { entityId, entityType: EntityType.Unknown, name: entityId.toString(16), stats: new Map() };
      this.entities.set(entityId, ent);
    }
    return ent;
  }
  getEntityByName(name: string) {
    return [...this.entities.values()].find((e) => e.name === name);
  }
}

export const enum EntityType {
  Unknown,
  Player,
  Npc,
  Summon,
  Esther,
  Projectile,
}

export type Entity = {
  entityId: bigint;
  entityType: EntityType;
  name: string;
  stats: Map<stattype, bigint>;
};
export type PlayerSet = Map<ItemSetData, { count: number; level: number; effects: ItemSetCount }>;

export type Player = Entity & {
  entityType: EntityType.Player;
  class: playerclass;
  gearLevel: number;
  characterId: bigint;
  stance: number;
  skills: Map<number /* skillid */, PlayerSkillData>;
  itemSet?: PassiveOption[]; // TODO: store PassiveOption instead, and reprocess all items on change ?
  items: {
    lifeToolList?: PlayerItemData[];
    equipList?: PlayerItemData[];
  };
};
export type PlayerItemData = {
  id: number;
  slot: number;
};

export type Npc = Entity & {
  entityType: EntityType.Npc | EntityType.Summon | EntityType.Esther;
  typeId: number;
  isBoss: boolean;
  grade: keyof typeof npcgrade;
  pushimmune: boolean;
  level: number;
  balanceLevel: number;
};

export type Esther = Npc & {
  entityType: EntityType.Esther;
  icon: string;
};

export type Summon = Npc & {
  entityType: EntityType.Summon;
  ownerId: bigint;
};

export type Projectile = Entity & {
  entityType: EntityType.Projectile;
  ownerId: bigint;
  skillEffectId: number;
  skillId: number;
};

export type PlayerSkillData = {
  effects: Set<number>;
  tripods: Map<number /* tripodindex */, TripodData>;
  level?: number;
  gems?: unknown;
  rune?: unknown;
  //skillData with db info ?
};
export type TripodData = { level: number; options: SkillFeatureOption[] };
