import type { MeterData } from "../data";
import type { InitEnv, InitPC, NewNpc, NewNpcSummon, NewPC } from "../packets/log/types";
import type { LogEvent } from "./logEvent";
import type { PartyTracker } from "./partytracker";
import type { PCIdMapper } from "./pcidmapper";
import { StatusEffectTargetType, StatusTracker } from "./statustracker";
import { u32tof32 } from "./utils";

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
    };
  }
  processNewPC(pkt: LogEvent<NewPC>): Player | undefined {
    const parsed = pkt.parsed;
    if (!parsed) return;

    const player: Player = {
      entityId: parsed.PCStruct.PlayerId,
      entityType: EntityType.Player,
      name: parsed.PCStruct.Name,
      class: parsed.PCStruct.ClassId,
      gearLevel: u32tof32(parsed.PCStruct.GearLevel),
      characterId: parsed.PCStruct.CharacterId,
    };
    this.entities.set(player.entityId, player);
    const oldEntityId = this.#pcIdMapper.getEntityId(player.characterId);
    if (oldEntityId) {
      this.#partyTracker.changeEntityId(oldEntityId, parsed.PCStruct.PlayerId);
    }
    this.#pcIdMapper.addMapping(player.characterId, player.entityId);
    this.#partyTracker.completeEntry(player.characterId, player.entityId);

    this.#statusTracker.newPC(parsed, this.localPlayer.characterId, pkt.time);
    return player;
  }
  processInitEnv(pkt: LogEvent<InitEnv>) {
    const parsed = pkt.parsed;
    if (!parsed) return;

    if (this.localPlayer.entityId !== 0n) this.#partyTracker.changeEntityId(this.localPlayer.entityId, parsed.PlayerId);

    this.entities.clear(); //TODO: here we clear entities, this might be uncompatible with keeping previous encounter visible
    const player: Player = {
      entityId: parsed.PlayerId,
      entityType: EntityType.Player,
      name: this.localPlayer.name,
      class: this.localPlayer.class,
      gearLevel: this.localPlayer.gearLevel,
      characterId: this.localPlayer.characterId,
    };
    this.localPlayer = player;
    this.entities.set(player.entityId, player);
    this.#pcIdMapper.clear();
    this.#statusTracker.Clear(pkt.time);
    if (player.characterId !== 0n) this.#pcIdMapper.addMapping(player.characterId, player.entityId);
    if (this.localPlayer && this.localPlayer.characterId && this.localPlayer.characterId > 0n)
      this.#partyTracker.completeEntry(this.localPlayer.characterId, parsed.PlayerId);
  }
  processInitPC(pkt: LogEvent<InitPC>): Player | undefined {
    const parsed = pkt.parsed;
    if (!parsed) return;

    this.entities.clear(); //TODO: here we clear entities, this might be uncompatible with keeping previous encounter visible
    const player: Player = {
      entityId: parsed.PlayerId,
      entityType: EntityType.Player,
      name: parsed.Name,
      class: parsed.ClassId,
      gearLevel: u32tof32(parsed.GearLevel),
      characterId: parsed.CharacterId,
    };
    this.localPlayer = player;
    this.entities.set(player.entityId, player);
    this.#pcIdMapper.addMapping(player.characterId, player.entityId);
    this.#partyTracker.setOwnName(parsed.Name);
    this.#partyTracker.completeEntry(player.characterId, parsed.PlayerId);
    this.#statusTracker.RemoveLocalObject(parsed.PlayerId, pkt.time);
    for (const se of parsed.statusEffectDatas) {
      const sourceEntity = this.getSourceEntity(se.SourceId);
      this.#statusTracker.RegisterStatusEffect(
        this.#statusTracker.buildStatusEffect(
          se,
          parsed.PlayerId,
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
    const npcData = this.#data.npc.get(parsed.NpcStruct.TypeId);
    if (npcData && ["boss", "raid", "epic_raid", "commander"].includes(npcData.grade)) {
      isBoss = true;
    }
    const npc: Npc = {
      entityId: parsed.NpcStruct.ObjectId,
      entityType: EntityType.Npc,
      name: npcData?.name ?? parsed.NpcStruct.ObjectId.toString(16),
      typeId: parsed.NpcStruct.TypeId,
      isBoss,
    };
    const esther = this.#data.getNpcEsther(parsed.NpcStruct.TypeId);
    if (esther !== undefined) {
      npc.entityType = EntityType.Esther;
      npc.name = esther.name;
      (npc as Esther).icon = esther.icon;
    }
    this.entities.set(npc.entityId, npc);
    this.#statusTracker.RemoveLocalObject(parsed.NpcStruct.ObjectId, pkt.time);
    for (const se of parsed.NpcStruct.statusEffectDatas) {
      const sourceEntity = this.getSourceEntity(se.SourceId);
      this.#statusTracker.RegisterStatusEffect(
        this.#statusTracker.buildStatusEffect(
          se,
          parsed.NpcStruct.ObjectId,
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
    const npc = this.#data.npc.get(parsed.NpcData.TypeId);
    if (npc && ["boss", "raid", "epic_raid", "commander"].includes(npc.grade)) {
      isBoss = true;
    }
    const summon: Summon = {
      entityId: parsed.NpcData.ObjectId,
      entityType: EntityType.Summon,
      name: npc?.name ?? parsed.NpcData.ObjectId.toString(16),
      ownerId: parsed.OwnerId,
      typeId: parsed.NpcData.TypeId,
      isBoss,
    };
    this.#statusTracker.RemoveLocalObject(parsed.NpcData.ObjectId, pkt.time);
    for (const se of parsed.NpcData.statusEffectDatas) {
      const sourceEntity = this.getSourceEntity(se.SourceId);
      this.#statusTracker.RegisterStatusEffect(
        this.#statusTracker.buildStatusEffect(
          se,
          parsed.NpcData.ObjectId,
          sourceEntity.entityId,
          StatusEffectTargetType.Local,
          pkt.time
        )
      );
    }
    this.entities.set(summon.entityId, summon);
    return summon;
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
        };
      } else {
        newEntity = {
          entityId: entity.entityId,
          entityType: EntityType.Player,
          name: entity.name,
          class: classId,
          gearLevel: 0,
          characterId: 0n,
        };
      }
      this.entities.set(entity.entityId, newEntity);
      return newEntity;
    }
    return entity;
  }
  getOrCreateEntity(entityId: bigint): Entity {
    let ent = this.entities.get(entityId);
    if (!ent) {
      ent = { entityId, entityType: EntityType.Unknown, name: entityId.toString(16) };
      this.entities.set(entityId, ent);
    }
    return ent;
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
};

export type Player = Entity & {
  entityType: EntityType.Player;
  class: number;
  gearLevel: number;
  characterId: bigint;
};

export type Npc = Entity & {
  entityType: EntityType.Npc | EntityType.Summon | EntityType.Esther;
  typeId: number;
  isBoss: boolean;
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
