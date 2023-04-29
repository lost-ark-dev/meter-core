import { TypedEmitter } from "tiny-typed-emitter";
import type { MeterData } from "../data";
import { hitflag, hitoption } from "../packets/generated/enums";
import type { InitEnv } from "../packets/log/types";
import { Breakdown, EntitySkills, EntityState, GameState, GameTrackerOptions, StatusEffectTarget } from "./data";
import { Entity, EntityTracker, EntityType, Npc, Player, Projectile } from "./entityTracker";
import type { LogEvent } from "./logEvent";
import type { StatusTracker } from "./statustracker";
import type { ParserEvent } from "./parser";

const defaultOptions: GameTrackerOptions = {
  isLive: true,
  dontResetOnZoneChange: false,
  resetAfterPhaseTransition: false,
  splitOnPhaseTransition: false,
};
export class GameTracker extends TypedEmitter<ParserEvent> {
  #game: GameState;
  encounters: GameState[];

  #entityTracker: EntityTracker;
  #statusTracker: StatusTracker;
  #data: MeterData;
  options: GameTrackerOptions;

  resetTimer: NodeJS.Timeout | null;

  phaseTransitionResetRequest: boolean;
  phaseTransitionResetRequestTime: number;

  constructor(
    entityTracker: EntityTracker,
    statusTracker: StatusTracker,
    data: MeterData,
    options: Partial<GameTrackerOptions>
  ) {
    super();
    this.#entityTracker = entityTracker;
    this.#statusTracker = statusTracker;
    this.#data = data;
    this.options = { ...defaultOptions, ...options };

    this.resetTimer = null;

    this.phaseTransitionResetRequest = false;
    this.phaseTransitionResetRequestTime = 0;

    this.encounters = [];
    this.#game = {
      startedOn: 0,
      lastCombatPacket: 0,
      fightStartedOn: 0,
      localPlayer: this.#entityTracker.localPlayer.name, //this will be updated on dipatch
      currentBoss: undefined,
      entities: new Map(),
      damageStatistics: {
        totalDamageDealt: 0,
        topDamageDealt: 0,
        totalDamageTaken: 0,
        topDamageTaken: 0,
        totalHealingDone: 0,
        topHealingDone: 0,
        totalShieldDone: 0,
        topShieldDone: 0,
        debuffs: new Map(),
        buffs: new Map(),
        topShieldGotten: 0,
        totalEffectiveShieldingDone: 0,
        topEffectiveShieldingDone: 0,
        topEffectiveShieldingUsed: 0,
        effectiveShieldingBuffs: new Map(),
        appliedShieldingBuffs: new Map(),
      },
    };
  }

  onCounterAttack(source: Entity, time: Date) {
    const entity = this.updateEntity(source, {}, time);

    // TODO: Add skill name from logger
    entity.hits.counter += 1;
  }

  onInitEnv(pkt: LogEvent<InitEnv>, time: Date) {
    if (this.options.isLive) {
      //Cleanup entities that are not displayed (we keep others in case user want to keep his previous encounter)
      this.#game.entities.forEach((e, k, m) => {
        if (e.hits.total === 0) {
          m.delete(k);
        }
      });

      if (this.options.dontResetOnZoneChange === false && this.resetTimer === null) {
        //Then
        this.resetTimer = setTimeout(() => {
          this.resetState(+time + 6000);
        }, 6000);
        this.emit("message", "new-zone");
      }
    } else {
      this.splitEncounter(time);
      this.emit("message", "new-zone");
    }
  }
  splitEncounter(time: Date) {
    if (
      this.#game.fightStartedOn !== 0 && // no combat packets
      (this.#game.damageStatistics.totalDamageDealt !== 0 || this.#game.damageStatistics.totalDamageTaken !== 0) // no player damage dealt OR taken
    ) {
      const curState = structuredClone(this.#game);
      this.encounters.push(curState);
    }
    this.resetState(+time);
  }
  getBossIfStillExist(): EntityState | undefined {
    if (this.#game.currentBoss?.id) {
      const id = BigInt(`0x0${this.#game.currentBoss?.id}`);
      return this.#entityTracker.entities.has(id) ? this.#game.currentBoss : undefined;
    }
    return undefined;
  }
  resetState(curTime: number) {
    this.cancelReset();
    this.#game = {
      startedOn: +curTime,
      lastCombatPacket: +curTime,
      fightStartedOn: 0,
      localPlayer: this.#entityTracker.localPlayer.name, //We never reset localplayer outside of initenv or initpc
      currentBoss: this.getBossIfStillExist(),
      entities: new Map(),
      damageStatistics: {
        totalDamageDealt: 0,
        topDamageDealt: 0,
        totalDamageTaken: 0,
        topDamageTaken: 0,
        totalHealingDone: 0,
        topHealingDone: 0,
        totalShieldDone: 0,
        topShieldDone: 0,
        debuffs: new Map(),
        buffs: new Map(),
        appliedShieldingBuffs: new Map(),
        effectiveShieldingBuffs: new Map(),
        topEffectiveShieldingDone: 0,
        topEffectiveShieldingUsed: 0,
        topShieldGotten: 0,
        totalEffectiveShieldingDone: 0,
      },
    };
    this.emit("reset-state", this.#game);
  }
  cancelReset() {
    if (this.resetTimer) clearTimeout(this.resetTimer);
    this.resetTimer = null;
  }
  onPhaseTransition(phaseCode: number, time: Date) {
    //TODO: rework
    if (this.options.isLive) {
      this.emit("message", `phase-transition-${phaseCode}`);

      if (this.options.resetAfterPhaseTransition) {
        this.phaseTransitionResetRequest = true;
        this.phaseTransitionResetRequestTime = +time;
      }
    }

    if (!this.options.isLive && this.options.splitOnPhaseTransition) {
      this.splitEncounter(time);
    }
  }
  updateOptions(options: Partial<GameTrackerOptions>) {
    this.options = { ...this.options, ...options };
  }
  onDeath(target: Entity, time: Date) {
    const entity = this.#game.entities.get(target.name);
    let deaths = 0;
    if (!entity) deaths = 1;
    else if (entity.isDead) deaths = entity.deaths;
    else deaths = entity.deaths + 1;

    this.updateEntity(target, { isDead: true, deathTime: +time, deaths }, time);
  }
  onDamage(owner: Entity, source: Entity, target: Entity, damageData: DamageData, time: Date) {
    if (
      (damageData.modifier & 0xf) === hitflag.damage_share &&
      damageData.skillId === 0 &&
      damageData.skillEffectId === 0
    )
      return;

    //TODO: implement phaseTransitionRequest
    if (
      this.phaseTransitionResetRequest &&
      this.phaseTransitionResetRequestTime > 0 &&
      this.phaseTransitionResetRequestTime < +time - 8000
    ) {
      this.resetState(+time);
      this.phaseTransitionResetRequest = false;
    }

    const [statusEffectsOnSource, statusEffectsOnTarget] = this.#statusTracker.getStatusEffects(
      owner,
      target,
      this.#entityTracker.localPlayer.characterId,
      time
    );
    // Override skillEffect for battleitems (this way we know the real item used: splendid or not)
    if (this.#data.isBattleItem(damageData.skillEffectId, "attack")) {
      if (source && source.entityType === EntityType.Projectile) {
        const proj = source as Projectile;
        damageData.skillEffectId = proj.skillEffectId;
      }
    }
    const damageOwner = this.updateEntity(owner, {}, time);
    const damageTarget = this.updateEntity(
      target,
      {
        currentHp: damageData.targetCurHp,
        maxHp: damageData.targetMaxHp,
      },
      time
    );

    if (!damageOwner || !damageTarget) return;
    if (!damageTarget.isPlayer && damageData.targetCurHp < 0) {
      damageData.damage = damageData.damage + damageData.targetCurHp;
    }
    // When no skillId, use the skillEffect as key
    let skillId = damageData.skillId;
    if (damageData.skillId === 0 && damageData.skillEffectId !== 0) {
      skillId = damageData.skillEffectId;
    }

    let skill = damageOwner.skills.get(skillId);
    if (!skill) {
      skill = {
        ...this.createEntitySkill(),
        ...{
          id: skillId,
        },
        ...this.getSkillNameIcon(damageData.skillId, damageData.skillEffectId),
      };
      damageOwner.skills.set(skillId, skill);
    }

    const hitFlag: hitflag = damageData.modifier & 0xf;
    const hitOption: hitoption = ((damageData.modifier >> 4) & 0x7) - 1;

    const isCrit = (hitFlag & (hitflag.critical | hitflag.dot_critical)) !== 0;
    //const isCrit = hitFlag === HitFlag.HIT_FLAG_CRITICAL || hitFlag === HitFlag.HIT_FLAG_DOT_CRITICAL;

    // map status effects
    const mappedSeOnSource: Set<number> = new Set();
    const mappedSeOnTarget: Set<number> = new Set();
    statusEffectsOnSource.forEach((buffId) => {
      mappedSeOnSource.add(buffId[0] as number);
    });
    statusEffectsOnTarget.forEach((buffId) => {
      mappedSeOnTarget.add(buffId[0] as number);
    });

    // Damage update
    skill.damageDealt += damageData.damage;
    if (damageData.damage > skill.maxDamage) skill.maxDamage = damageData.damage;

    damageOwner.hits.total += 1;
    skill.hits.total += 1;

    damageOwner.damageDealt += damageData.damage;
    damageTarget.damageTaken += damageData.damage;

    // Crit update
    const critCount = isCrit ? 1 : 0;
    damageOwner.hits.crit += critCount;
    skill.hits.crit += critCount;
    // Directional update
    let isFrontAttack = false,
      isBackAttack = false;
    //TODO: check if target can be back attacked
    const directionalmask = this.#data.getSkillEffectDirectionalMask(damageData.skillEffectId) - 1;
    if (directionalmask === hitoption.back_attack || directionalmask === hitoption.flank_attack) {
      isBackAttack = hitOption === hitoption.back_attack;
      const backAttackCount = isBackAttack ? 1 : 0;
      damageOwner.hits.backAttack += backAttackCount;
      damageOwner.hits.totalBackAttack += 1;
      skill.hits.backAttack += backAttackCount;
      skill.hits.totalBackAttack += 1;
    }
    if (directionalmask === hitoption.frontal_attack || directionalmask === hitoption.flank_attack) {
      isFrontAttack = hitOption === hitoption.frontal_attack;
      const frontAttackCount = isFrontAttack ? 1 : 0;
      damageOwner.hits.frontAttack += frontAttackCount;
      damageOwner.hits.totalFrontAttack += 1;
      skill.hits.frontAttack += frontAttackCount;
      skill.hits.totalFrontAttack += 1;
    }

    if (damageOwner.isPlayer) {
      this.#game.damageStatistics.totalDamageDealt += damageData.damage;
      this.#game.damageStatistics.topDamageDealt = Math.max(
        this.#game.damageStatistics.topDamageDealt,
        damageOwner.damageDealt
      );
      //#region Player buff
      let isBuffedBySupport = false,
        isDebuffedBySupport = false;

      mappedSeOnSource.forEach((buffId) => {
        //TODO: cache invalid results (if statusEffect is undefined, don't query again every time)
        if (!this.#game.damageStatistics.buffs.has(buffId)) {
          const statusEffect = this.#data.getStatusEffectHeaderData(buffId);
          if (statusEffect) this.#game.damageStatistics.buffs.set(buffId, statusEffect);
        }
        const statusEffect = this.#game.damageStatistics.buffs.get(buffId);
        if (statusEffect && !isBuffedBySupport) {
          isBuffedBySupport =
            (statusEffect.buffcategory === "classskill" ||
              statusEffect.buffcategory === "identity" ||
              statusEffect.buffcategory === "ability") &&
            statusEffect.source.skill !== undefined &&
            statusEffect.target === StatusEffectTarget.PARTY &&
            this.#data.isSupportClassId(statusEffect.source.skill.classid);
        }
      });
      mappedSeOnTarget.forEach((buffId) => {
        if (!this.#game.damageStatistics.debuffs.has(buffId)) {
          const statusEffect = this.#data.getStatusEffectHeaderData(buffId);
          if (statusEffect) this.#game.damageStatistics.debuffs.set(buffId, statusEffect);
        }
        const statusEffect = this.#game.damageStatistics.debuffs.get(buffId);
        if (statusEffect && !isDebuffedBySupport) {
          isDebuffedBySupport =
            (statusEffect.buffcategory === "classskill" ||
              statusEffect.buffcategory === "identity" ||
              statusEffect.buffcategory === "ability") &&
            statusEffect.source.skill !== undefined &&
            statusEffect.target === StatusEffectTarget.PARTY &&
            this.#data.isSupportClassId(statusEffect.source.skill.classid);
        }
      });

      const debuffAttackCount = isDebuffedBySupport ? 1 : 0;
      const buffAttackCount = isBuffedBySupport ? 1 : 0;

      skill.damageDealtBuffedBySupport += isBuffedBySupport ? damageData.damage : 0;
      skill.damageDealtDebuffedBySupport += isDebuffedBySupport ? damageData.damage : 0;

      mappedSeOnSource.forEach((buffId) => {
        const oldval = skill!.damageDealtBuffedBy.get(buffId) ?? 0;
        skill!.damageDealtBuffedBy.set(buffId, oldval + damageData.damage);
        const oldOwnerDamage = damageOwner.damageDealtBuffedBy.get(buffId) ?? 0;
        damageOwner.damageDealtBuffedBy.set(buffId, oldOwnerDamage + damageData.damage);
      });
      mappedSeOnTarget.forEach((buffId) => {
        const oldSkillDmg = skill!.damageDealtDebuffedBy.get(buffId) ?? 0;
        skill!.damageDealtDebuffedBy.set(buffId, oldSkillDmg + damageData.damage);
        const oldOwnerDamage = damageOwner.damageDealtDebuffedBy.get(buffId) ?? 0;
        damageOwner.damageDealtDebuffedBy.set(buffId, oldOwnerDamage + damageData.damage);
      });

      damageOwner.damageDealtBuffedBySupport += isBuffedBySupport ? damageData.damage : 0;
      damageOwner.damageDealtDebuffedBySupport += isDebuffedBySupport ? damageData.damage : 0;

      damageOwner.hits.hitsBuffedBySupport += buffAttackCount;
      damageOwner.hits.hitsDebuffedBySupport += debuffAttackCount;
      mappedSeOnSource.forEach((buffId) => {
        const oldHitAmountTotal = damageOwner.hits.hitsBuffedBy.get(buffId) ?? 0;
        damageOwner.hits.hitsBuffedBy.set(buffId, oldHitAmountTotal + 1);
        const oldHitAmountSkill = skill!.hits.hitsBuffedBy.get(buffId) ?? 0;
        skill!.hits.hitsBuffedBy.set(buffId, oldHitAmountSkill + 1);
      });
      mappedSeOnTarget.forEach((buffId) => {
        const oldHitAmountTotal = damageOwner.hits.hitsDebuffedBy.get(buffId) ?? 0;
        damageOwner.hits.hitsDebuffedBy.set(buffId, oldHitAmountTotal + 1);
        const oldHitAmountSkill = skill!.hits.hitsDebuffedBy.get(buffId) ?? 0;
        skill!.hits.hitsDebuffedBy.set(buffId, oldHitAmountSkill + 1);
      });

      skill.hits.hitsBuffedBySupport += buffAttackCount;
      skill.hits.hitsDebuffedBySupport += debuffAttackCount;

      //#endregion

      const breakdown: Breakdown = {
        timestamp: +time,
        damage: damageData.damage,
        targetEntity: damageTarget.id,
        isCrit,
        isBackAttack,
        isFrontAttack,
        isBuffedBySupport: isBuffedBySupport,
        isDebuffedBySupport: isDebuffedBySupport,
        buffedBy: [...mappedSeOnSource],
        debuffedBy: [...mappedSeOnTarget],
      };

      skill.breakdown.push(breakdown);
    }

    if (damageTarget.isPlayer) {
      this.#game.damageStatistics.totalDamageTaken += damageData.damage;
      this.#game.damageStatistics.topDamageTaken = Math.max(
        this.#game.damageStatistics.topDamageTaken,
        damageTarget.damageTaken
      );
    }

    // Update tracked boss hp
    if (damageTarget.isBoss) {
      this.#game.currentBoss = damageTarget;
    }

    if (this.#game.fightStartedOn === 0) this.#game.fightStartedOn = +time;
    this.#game.lastCombatPacket = +time;
  }
  onStartSkill(owner: Entity, skillId: number, time: Date) {
    const entity = this.updateEntity(
      owner,
      {
        isDead: false,
      },
      time
    );

    if (entity) {
      entity.hits.casts += 1;
      let skill = entity.skills.get(skillId);
      if (!skill) {
        skill = {
          ...this.createEntitySkill(),
          ...{
            id: skillId,
          },
          ...this.getSkillNameIcon(skillId, 0),
        };
        entity.skills.set(skillId, skill);
      }

      skill.hits.casts += 1;
    }
  }
  onShieldUsed(targetEntity: Entity, sourceEntity: Entity, statusEffectId: number, shieldAmountRemoved: number): void {
    if (shieldAmountRemoved < 0) {
      console.error("Shield change values was negative, shield ammount increased");
    }

    if (targetEntity.entityType === EntityType.Player && sourceEntity.entityType === EntityType.Player) {
      if (!this.#game.damageStatistics.effectiveShieldingBuffs.has(statusEffectId)) {
        const statusEffect = this.#data.getStatusEffectHeaderData(statusEffectId);
        if (statusEffect) {
          this.#game.damageStatistics.effectiveShieldingBuffs.set(statusEffectId, statusEffect);
        }
      }
      const now = new Date();
      const targetEntityState = this.updateEntity(targetEntity, {}, now);

      const sourceEntityState = this.updateEntity(sourceEntity, {}, now);

      targetEntityState.damagePreventedByShield += shieldAmountRemoved;

      const oldDmgPreventedBy = targetEntityState.damagePreventedByShieldBy.get(statusEffectId) ?? 0;
      targetEntityState.damagePreventedByShieldBy.set(statusEffectId, oldDmgPreventedBy + shieldAmountRemoved);

      this.#game.damageStatistics.topEffectiveShieldingUsed = Math.max(
        targetEntityState.damagePreventedByShield,
        this.#game.damageStatistics.topEffectiveShieldingUsed
      );

      sourceEntityState.damagePreventedWithShieldOnOthers += shieldAmountRemoved;

      const oldDmgPreventedWith = sourceEntityState.damagePreventedWithShieldOnOthersBy.get(statusEffectId) ?? 0;
      sourceEntityState.damagePreventedWithShieldOnOthersBy.set(
        statusEffectId,
        oldDmgPreventedWith + shieldAmountRemoved
      );

      this.#game.damageStatistics.topEffectiveShieldingDone = Math.max(
        sourceEntityState.damagePreventedWithShieldOnOthers,
        this.#game.damageStatistics.topEffectiveShieldingDone
      );

      this.#game.damageStatistics.totalEffectiveShieldingDone += shieldAmountRemoved;
    }
  }
  onShieldApplied(targetEntity: Entity, sourceEntity: Entity, statusEffectId: number, amount: number) {
    const now = new Date();
    const targetEntityState = this.updateEntity(targetEntity, {}, now);
    const sourceEntityState = this.updateEntity(sourceEntity, {}, now);

    if (sourceEntityState.isPlayer && targetEntityState.isPlayer) {
      if (!this.#game.damageStatistics.appliedShieldingBuffs.has(statusEffectId)) {
        const statusEffect = this.#data.getStatusEffectHeaderData(statusEffectId);
        if (statusEffect) {
          this.#game.damageStatistics.appliedShieldingBuffs.set(statusEffectId, statusEffect);
        }
      }

      targetEntityState.shieldReceived += amount;
      sourceEntityState.shieldDone += amount;

      const oldDoneByValue = sourceEntityState.shieldDoneBy.get(statusEffectId) ?? 0;
      sourceEntityState.shieldDoneBy.set(statusEffectId, oldDoneByValue + amount);

      const oldReceivedByValue = targetEntityState.shieldReceivedBy.get(statusEffectId) ?? 0;
      targetEntityState.shieldReceivedBy.set(statusEffectId, oldReceivedByValue + amount);

      this.#game.damageStatistics.topShieldDone = Math.max(
        sourceEntityState.shieldDone,
        this.#game.damageStatistics.topShieldDone
      );
      this.#game.damageStatistics.topShieldGotten = Math.max(
        sourceEntityState.shieldReceived,
        this.#game.damageStatistics.topShieldGotten
      );
      this.#game.damageStatistics.totalShieldDone += amount;
    }
  }
  getSkillNameIcon(skillId: number, skillEffectId: number): { name: string; icon?: string } {
    if (skillId === 0 && skillEffectId === 0) {
      //TODO: check if we get only hit hitflag.dot or hitflag.dot_critical
      return { name: "Bleed", icon: "buff_168.png" };
    } else if (skillId === 0) {
      const effect = this.#data.skillEffect.get(skillEffectId);
      if (effect && effect.itemname) {
        return { name: effect.itemname, icon: effect.icon ?? "" };
      } else if (effect) {
        if (effect.sourceskill) {
          const skill = this.#data.skill.get(effect.sourceskill);
          if (skill) return { name: skill.name, icon: skill.icon };
        } else {
          const skill = this.#data.skill.get(Math.floor(skillEffectId / 10));
          if (skill) return { name: skill.name, icon: skill.icon };
        }
        return { name: effect.comment };
      } else {
        return { name: this.#data.getSkillName(skillId) };
      }
    } else {
      let skill = this.#data.skill.get(skillId);
      if (!skill) {
        skill = this.#data.skill.get(skillId - (skillId % 10));
        if (!skill) return { name: this.#data.getSkillName(skillId), icon: "" };
      }

      if (skill.summonsourceskill) {
        skill = this.#data.skill.get(skill.summonsourceskill);
        if (skill) {
          return { name: skill.name + " (Summon)", icon: skill.icon };
        } else {
          return { name: this.#data.getSkillName(skillId), icon: "" };
        }
      } else if (skill.sourceskill) {
        skill = this.#data.skill.get(skill.sourceskill);
        if (skill) {
          return { name: skill.name, icon: skill.icon };
        } else {
          return { name: this.#data.getSkillName(skillId), icon: "" };
        }
      } else {
        return { name: skill.name, icon: skill.icon };
      }
    }
  }
  updateEntity(entity: Entity, values: Partial<EntityState>, time: Date) {
    const updateTime = { lastUpdate: +time };
    let entityState = this.#game.entities.get(entity.name);
    if (entityState) {
      Object.assign(entityState, values, updateTime);
    } else {
      let extraInfo: Partial<EntityState> = {};
      if (entity.entityType === EntityType.Player) {
        const player = entity as Player;
        extraInfo = { classId: player.class, gearScore: player.gearLevel, isPlayer: true };
      } else if (entity.entityType === EntityType.Npc) {
        const npc = entity as Npc;
        extraInfo = { npcId: npc.typeId, isBoss: npc.isBoss };
      }
      entityState = {
        ...this.createEntity(),
        ...values,
        ...updateTime,
        ...extraInfo,
        ...{ name: entity.name },
        ...{ id: entity.entityId.toString(16) },
      };
      this.#game.entities.set(entity.name, entityState);
    }
    return entityState;
  }

  updateOrCreateEntity(entity: Entity, entityState: Partial<EntityState>, time: Date) {
    if (!entityState.name || !entityState.id) return;

    // We look for entity with the same Id
    for (const [k, e] of this.#game.entities) {
      if (entityState.id === e.id) {
        this.#game.entities.delete(k);
        this.updateEntity(entity, { ...e, ...entityState }, time);
        return;
      }
    }
    //We found no entity with the same id, create new one
    this.updateEntity(entity, entityState, time);
  }
  createEntitySkill(): EntitySkills {
    const newEntitySkill: EntitySkills = {
      id: 0,
      name: "",
      icon: "",
      damageDealt: 0,
      damageDealtDebuffedBySupport: 0,
      damageDealtBuffedBySupport: 0,
      maxDamage: 0,
      hits: {
        casts: 0,
        total: 0,
        crit: 0,
        backAttack: 0,
        totalBackAttack: 0,
        frontAttack: 0,
        totalFrontAttack: 0,
        counter: 0,
        hitsDebuffedBySupport: 0,
        hitsBuffedBySupport: 0,
        hitsBuffedBy: new Map(),
        hitsDebuffedBy: new Map(),
      },
      breakdown: [],
      damageDealtDebuffedBy: new Map(),
      damageDealtBuffedBy: new Map(),
    };
    return newEntitySkill;
  }
  createEntity(): EntityState {
    const newEntity: EntityState = {
      lastUpdate: 0,
      id: "",
      npcId: 0,
      name: "",
      classId: 0,
      isBoss: false,
      isPlayer: false,
      isDead: false,
      deaths: 0,
      deathTime: 0,
      gearScore: 0,
      currentHp: 0,
      maxHp: 0,
      damageDealt: 0,
      damageDealtDebuffedBySupport: 0,
      damageDealtBuffedBySupport: 0,
      healingDone: 0,
      shieldDone: 0,
      damageTaken: 0,
      skills: new Map(),
      hits: {
        casts: 0,
        total: 0,
        crit: 0,
        backAttack: 0,
        totalBackAttack: 0,
        frontAttack: 0,
        totalFrontAttack: 0,
        counter: 0,
        hitsDebuffedBySupport: 0,
        hitsBuffedBySupport: 0,
        hitsBuffedBy: new Map(),
        hitsDebuffedBy: new Map(),
      },
      damageDealtDebuffedBy: new Map(),
      damageDealtBuffedBy: new Map(),
      damagePreventedByShieldBy: new Map(),
      damagePreventedWithShieldOnOthersBy: new Map(),
      shieldDoneBy: new Map(),
      shieldReceivedBy: new Map(),
      damagePreventedWithShieldOnOthers: 0,
      damagePreventedByShield: 0,
      shieldReceived: 0,
    };
    return newEntity;
  }

  getBroadcast(): GameState {
    const clone: GameState = { ...this.#game };
    clone.entities = new Map();
    this.#game.entities.forEach((e, k, m) => {
      // Remove all entities that are not players (if live)
      if (!e.isPlayer) {
        return;
      }
      const eCopy = { ...e };
      eCopy.skills = new Map(e.skills);
      eCopy.skills.forEach((s) => {
        // Dont send breakdowns; will hang up UI
        s.breakdown = [];
      });
      clone.entities.set(k, eCopy);
    });
    clone.localPlayer = this.#entityTracker.localPlayer.name;
    return clone;
  }
}
export type DamageData = {
  skillId: number;
  skillEffectId: number;
  damage: number;
  modifier: number;
  targetCurHp: number;
  targetMaxHp: number;
};
