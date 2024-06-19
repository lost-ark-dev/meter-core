import type { PartyInfo } from "../packets/log/types";
import { type Entity, EntityType, type Player } from "./entityTracker";
import type { LogEvent } from "./logEvent";
import type { PCIdMapper } from "./pcidmapper";

export class PartyTracker {
  private characterIdToPartyId: Map<bigint, number>;
  private entityIdToPartyId: Map<bigint, number>;
  private raidInstanceToPartyInstances: Map<number, Set<number>>;
  private ownName: string | undefined;
  private characterNameToCharacterId: Map<string, bigint>;
  #pcIdMapper: PCIdMapper;

  constructor(pcIdMapper: PCIdMapper) {
    this.characterIdToPartyId = new Map();
    this.entityIdToPartyId = new Map();
    this.raidInstanceToPartyInstances = new Map();
    this.characterNameToCharacterId = new Map();
    this.#pcIdMapper = pcIdMapper;
  }

  public add(
    raidInstanceId: number,
    partyId: number,
    characterId: bigint | undefined = undefined,
    entityId: bigint | undefined = undefined,
    name: string | undefined = undefined
  ) {
    if (!characterId && !entityId) return;
    if (characterId && !entityId) entityId = this.#pcIdMapper.getEntityId(characterId);
    if (entityId && !characterId) characterId = this.#pcIdMapper.getEntityId(entityId);
    if (characterId) this.characterIdToPartyId.set(characterId, partyId);
    if (entityId) this.entityIdToPartyId.set(entityId, partyId);
    if (name && characterId) this.characterNameToCharacterId.set(name, characterId);
    this.registerPartyId(raidInstanceId, partyId);
  }

  public completeEntry(characterId: bigint, entityId: bigint): void {
    const charPartyId = this.getPartyIdFromCharacterId(characterId);
    const entPartyId = this.getPartyIdFromEntityId(entityId);
    if (charPartyId && entPartyId) return;
    if (!charPartyId && entPartyId) {
      this.characterIdToPartyId.set(characterId, entPartyId);
    }
    if (!entPartyId && charPartyId) {
      this.entityIdToPartyId.set(entityId, charPartyId);
    }
  }

  public changeEntityId(oldEntityId: bigint, newEntityId: bigint): void {
    const partyId = this.getPartyIdFromEntityId(oldEntityId);
    if (partyId) {
      this.entityIdToPartyId.delete(oldEntityId);
      this.entityIdToPartyId.set(newEntityId, partyId);
    }
  }

  public setOwnName(name: string): void {
    this.ownName = name;
  }

  public remove(partyInstanceId: number, name: string): void {
    if (name === this.ownName) {
      this.removePartyMappings(partyInstanceId);
      return;
    }

    const chracterId = this.characterNameToCharacterId.get(name);
    this.characterNameToCharacterId.delete(name);
    if (!chracterId) return;
    this.characterIdToPartyId.delete(chracterId);
    const objectId = this.#pcIdMapper.getEntityId(chracterId);
    if (objectId) this.entityIdToPartyId.delete(objectId);
  }

  public isCharacterInParty(characterId: bigint): boolean {
    return this.characterIdToPartyId.has(characterId);
  }

  public isEntityInParty(entityId: bigint): boolean {
    return this.entityIdToPartyId.has(entityId);
  }

  public getPartyIdFromCharacterId(characterId: bigint): number | undefined {
    return this.characterIdToPartyId.get(characterId);
  }

  public getPartyIdFromEntityId(entityId: bigint): number | undefined {
    return this.entityIdToPartyId.get(entityId);
  }

  public removePartyMappings(partyInstanceId: number): void {
    const raidId = this.getRaidInstanceId(partyInstanceId);
    const partyIds: Set<number> = raidId
      ? this.raidInstanceToPartyInstances.get(raidId) ?? new Set([partyInstanceId])
      : new Set([partyInstanceId]);
    for (const [characterId, partyId] of this.characterIdToPartyId) {
      if (partyIds.has(partyId)) {
        this.characterIdToPartyId.delete(characterId);
        for (const [name, charId] of this.characterNameToCharacterId) {
          if (characterId === charId) {
            this.characterNameToCharacterId.delete(name);
            break;
          }
        }
      }
    }
    for (const [entityId, partyId] of this.entityIdToPartyId) {
      if (partyIds.has(partyId)) this.entityIdToPartyId.delete(entityId);
    }
  }

  private getRaidInstanceId(partyId: number): number | undefined {
    for (const [raidInstanceId, partyInstances] of this.raidInstanceToPartyInstances) {
      if (partyInstances.has(partyId)) return raidInstanceId;
    }
    return undefined;
  }

  private registerPartyId(raidInstanceId: number, partyId: number): void {
    let list: Set<number> | undefined = this.raidInstanceToPartyInstances.get(raidInstanceId);
    if (!list) {
      list = new Set();
      this.raidInstanceToPartyInstances.set(raidInstanceId, list);
    }
    list.add(partyId);
  }
  partyInfo(pkt: LogEvent<PartyInfo>, entities: Map<bigint, Entity>, localPlayer: Player) {
    const parsed = pkt.parsed;
    if (!parsed) return;
    // this means the party is collapsing because you are the only one left
    if (parsed.memberDatas.length === 1 && parsed.memberDatas[0]?.name === localPlayer.name) {
      this.remove(parsed.partyInstanceId, parsed.memberDatas[0].name);
      return;
    }
    //this.removePartyMappings(parsed.partyInstanceId); //We don't cleanup parties here, there was already a leak anw
    for (const pm of parsed.memberDatas) {
      if (pm.characterId === localPlayer.characterId) {
        this.setOwnName(pm.name);
      }
      // Update player info based on party info
      const entityId = this.#pcIdMapper.getEntityId(pm.characterId);
      if (entityId) {
        const ent = entities.get(entityId);
        if (ent && ent.entityType === EntityType.Player) {
          if (ent.name !== pm.name) {
            const p = ent as Player;
            p.gearLevel = pm.gearLevel;
            p.name = pm.name;
            p.class = pm.classId;
          }
        }
      }

      // Add to party
      this.add(parsed.raidInstanceId, parsed.partyInstanceId, pm.characterId, entityId, pm.name);
    }
    return;
  }
  clear(localPlayer: Player) {
    //Complete entry
    this.#pcIdMapper.addMapping(localPlayer.characterId, localPlayer.entityId);
    this.completeEntry(localPlayer.characterId, localPlayer.entityId);

    let partyIds: Set<number> | undefined;
    let raidId: number | undefined;
    //Get raids related to localplayer
    if (localPlayer.characterId) {
      const partyId = this.getPartyIdFromCharacterId(localPlayer.characterId);
      if (partyId) {
        raidId = this.getRaidInstanceId(partyId);
        partyIds = raidId ? this.raidInstanceToPartyInstances.get(raidId) ?? new Set([partyId]) : new Set([partyId]);
      }
    }

    //Clear everything that doesn't involve localplayer's party/raid
    this.characterIdToPartyId = new Map(
      [...this.characterIdToPartyId].filter(([charId, partyId]) => partyIds?.has(partyId))
    );
    this.entityIdToPartyId = new Map([...this.entityIdToPartyId].filter(([entId, partyId]) => partyIds?.has(partyId)));
    this.raidInstanceToPartyInstances = new Map(
      [...this.raidInstanceToPartyInstances].filter(([raid, party]) => raid == raidId)
    );
    this.ownName = localPlayer.name;
    this.characterNameToCharacterId = new Map(
      [...this.characterNameToCharacterId].filter(([name, charId]) => this.characterIdToPartyId?.has(charId))
    );

    this.#pcIdMapper.clear(Array.from(this.characterIdToPartyId.keys()));
  }
}
