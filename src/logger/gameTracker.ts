import { TypedEmitter } from "tiny-typed-emitter";
import type { CombatEffectConditionData, MeterData, Skill, SkillBuff } from "../data";
import {
  addontype,
  combateffectactiontype,
  damageattr,
  damagetype,
  hitflag,
  hitoption,
  paramtype,
  playerclass,
  skillfeaturetype,
  stattype,
  zonelevel,
} from "../packets/generated/enums";
import type { InitEnv } from "../packets/log/types";
import { Breakdown, EntitySkills, EntityState, GameState, GameTrackerOptions, KillState } from "./data";
import { StatusEffectTarget } from "./data";
import type { Entity, Esther, Npc, Player, Projectile } from "./entityTracker";
import { EntityTracker, EntityType } from "./entityTracker";
import type { LogEvent } from "./logEvent";
import type { ParserEvent } from "./parser";
import type { StatusTracker } from "./statustracker";
import { CombatEffect } from "../data";
import { PlayerStatCacheStatus, StatApi } from "./statapi";
import { ApiStatType } from "../packets/common/api";

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
  #statApi: StatApi;
  #data: MeterData;
  options: GameTrackerOptions;

  resetTimer: NodeJS.Timeout | null;

  phaseTransitionResetRequest: boolean;
  phaseTransitionResetRequestTime: number;
  #entityToSkillBreakdown: Map<bigint, Map<number, Breakdown[]>>;

  constructor(
    entityTracker: EntityTracker,
    statusTracker: StatusTracker,
    statApi: StatApi,
    data: MeterData,
    options: Partial<GameTrackerOptions>
  ) {
    super();
    this.#entityTracker = entityTracker;
    this.#statusTracker = statusTracker;
    this.#statApi = statApi;
    this.#data = data;
    this.options = { ...defaultOptions, ...options };

    this.resetTimer = null;

    this.phaseTransitionResetRequest = false;
    this.phaseTransitionResetRequestTime = 0;
    this.#entityToSkillBreakdown = new Map();

    this.encounters = [];
    this.#game = {
      startedOn: 0,
      lastCombatPacket: 0,
      fightStartedOn: 0,
      localPlayer: this.#entityTracker.localPlayer.name, //this will be updated on dipatch
      currentBoss: undefined,
      killState: KillState.FAIL,
      zoneLevel: zonelevel[zonelevel.normal] as keyof typeof zonelevel,
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

      curState.entities.forEach((entity) => {
        if (!entity.isPlayer) return;
        entity.statApiValid =
          this.#statApi.isCurrentZoneValid() &&
          this.#statApi.cache.get(entity.name)?.status === PlayerStatCacheStatus.VALID;
      });
      curState.localPlayer = this.#entityTracker.localPlayer.name;

      this.applyBreakdowns(curState.entities);

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
    this.resetBreakdowns();

    this.#game = {
      startedOn: +curTime,
      lastCombatPacket: +curTime,
      fightStartedOn: 0,
      localPlayer: this.#entityTracker.localPlayer.name, //We never reset localplayer outside of initenv or initpc
      currentBoss: this.getBossIfStillExist(),
      entities: new Map(),
      killState: KillState.FAIL,
      zoneLevel: this.#game.zoneLevel,
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
  onDamage(owner: Entity, source: Entity, target: Entity, damageData: DamageData, targetCount: number, time: Date) {
    if (
      (damageData.modifier & 0xf) === hitflag.damage_share &&
      damageData.skillId === 0 &&
      damageData.skillEffectId === 0
    )
      return;

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
    statusEffectsOnSource.forEach(([buffId]) => {
      mappedSeOnSource.add(buffId);
    });
    statusEffectsOnTarget.forEach(([buffId]) => {
      mappedSeOnTarget.add(buffId);
    });

    // Damage update
    skill.damageInfo.damageDealt += damageData.damage;
    if (damageData.damage > skill.maxDamage) skill.maxDamage = damageData.damage;

    damageOwner.hits.total += 1;
    skill.hits.total += 1;

    damageOwner.damageInfo.damageDealt += damageData.damage;
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
        damageOwner.damageInfo.damageDealt
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

        const oldval = skill!.damageDealtBuffedBy.get(buffId) ?? 0;
        skill!.damageDealtBuffedBy.set(buffId, oldval + damageData.damage);
        const oldOwnerDamage = damageOwner.damageDealtBuffedBy.get(buffId) ?? 0;
        damageOwner.damageDealtBuffedBy.set(buffId, oldOwnerDamage + damageData.damage);

        const oldHitAmountTotal = damageOwner.hits.hitsBuffedBy.get(buffId) ?? 0;
        damageOwner.hits.hitsBuffedBy.set(buffId, oldHitAmountTotal + 1);
        const oldHitAmountSkill = skill!.hits.hitsBuffedBy.get(buffId) ?? 0;
        skill!.hits.hitsBuffedBy.set(buffId, oldHitAmountSkill + 1);
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

        const oldSkillDmg = skill!.damageDealtDebuffedBy.get(buffId) ?? 0;
        skill!.damageDealtDebuffedBy.set(buffId, oldSkillDmg + damageData.damage);
        const oldOwnerDamage = damageOwner.damageDealtDebuffedBy.get(buffId) ?? 0;
        damageOwner.damageDealtDebuffedBy.set(buffId, oldOwnerDamage + damageData.damage);

        const oldHitAmountTotal = damageOwner.hits.hitsDebuffedBy.get(buffId) ?? 0;
        damageOwner.hits.hitsDebuffedBy.set(buffId, oldHitAmountTotal + 1);
        const oldHitAmountSkill = skill!.hits.hitsDebuffedBy.get(buffId) ?? 0;
        skill!.hits.hitsDebuffedBy.set(buffId, oldHitAmountSkill + 1);
      });

      const debuffAttackCount = isDebuffedBySupport ? 1 : 0;
      const buffAttackCount = isBuffedBySupport ? 1 : 0;

      skill.damageInfo.damageDealtBuffedBySupport += isBuffedBySupport ? damageData.damage : 0;
      skill.damageInfo.damageDealtDebuffedBySupport += isDebuffedBySupport ? damageData.damage : 0;

      damageOwner.damageInfo.damageDealtBuffedBySupport += isBuffedBySupport ? damageData.damage : 0;
      damageOwner.damageInfo.damageDealtDebuffedBySupport += isDebuffedBySupport ? damageData.damage : 0;

      damageOwner.hits.hitsBuffedBySupport += buffAttackCount;
      damageOwner.hits.hitsDebuffedBySupport += debuffAttackCount;

      skill.hits.hitsBuffedBySupport += buffAttackCount;
      skill.hits.hitsDebuffedBySupport += debuffAttackCount;

      //#endregion

      //#region rDps
      /**
       * SkillBuff.Type
       *
       * statuseffecttype=="instant_stat_amplify"
       * -> ValueA = critRes
       * -> ValueB = never used
       * -> ValueC = Phys. Defense (always negative)
       * -> ValueD = Mag. Defense (always negative)
       * -> ValueE = never used
       * -> ValueF = never used
       * -> ValueG = 0/1/2 -> 0=examples, 1=self ?, 2=party ? -> only 6 are 0 or 1, other are 2 => ignore
       * -> ValueH = Incoming Phys. Damage (always positive)
       * -> ValueI = Incoming Mag. Damage (always positive)
       * -> ValueJ = Incoming Phys. Damage on crit (always positive)
       * -> ValueK = Incoming Mag. Damage on crit (always positive)
       *
       * statuseffecttype=="skill_damage_amplify"
       * -> ValueA = SkillId -> if != 0, only apply to the given skillId
       * -> ValueB = effect value (always positive)
       * -> ValueC = 0,1,2 -> 0=examples, 1=self, 2=party
       * -> ValueD = 2
       * -> ValueE = SkillEffectId -> if != 0, only apply to the given skillEffectId
       *
       * statuseffecttype=="directional_attack_amplify"
       * -> ValueA = frontValue
       * -> ValueE = backValue
       * -> ValueG = 0,1,2 -> 0=examples, 1=self, 2=party
       *
       * statuseffecttype=="attack_power_amplify" -> used by support buffs "15% of caster's basic attack"
       * -> ValueA = effect value (always positive)
       *
       *
       * PassiveOptions
       * addontype=="skill_group_damage" -> no party synergies
       *
       *
       * addontype=="stat" && keystat=="critical_hit_rate"
       * addontype=="stat" && keystat=="critical_dam_rate" -> used for crit dmg tracking only
       * addontype=="stat" && keystat=="attack_power_sub_rate_2"
       * addontype=="stat" && keystat=="physical_inc_sub_rate_2" -> resistance on yourself
       * addontype=="stat" && keystat=="magical_inc_sub_rate_2" -> resistance on yourself
       * addontype=="stat" && keystat=="skill_damage_sub_rate_2" -> bard's buble etc
       * TODO addontype=="stat" && keystat=="def_x"/"def_y"      -> used by dark nades & Dagger bracelet
       * TODO addontype=="stat" && keystat=="attack_power_rate"  -> used by strength orb, but as it's additive we need to handle every other sources, including engravings like cursed doll 
       *
       *
       *
       * addontype=="combat_effect" && combatEffect.Action.Type=="modify_critical_multiplier"
       * -> need following conditions to be handled:
       *  [
       *  abnormal_move_immune, -> tripod weak point detection (Crit Damage on Push-Immune foes) (200306, 350706), 32431 ?
       *  npc_grade_less, -> idk (77399997)
       *  target_count, -> Cull buff (arcana card) 192810, tripod isolation (crit damage ...) 268150, tripod Enhanced Magazine 350408, 350891
       *  current_skill: 
       *    192810 -> Cull buff (arcana card) (makes it work on arcana awakenings)
            268150 -> tripod isolation
            280908 -> tripod Steady Aim
            281315, 281416, 281506, 281903 -> tripod Solo Performance
            361808 -> tripod Light Explosion
            361917 -> unused Holy Sword tripod
            2324002 -> tripod Furious Hit
            3415010 -> unused Raging Dragon Slash tripod
       *  skill_identity_category-> 192810 cull buff (makes it work on any arcana skills -> identitycategory::arcana_normal, arcana_stack, arcana_ruin, arcana_card)
       *  pc, -> unused buffs ?
       *  abnormal_move_all -> itemset Express: ignore, anw value=0
       *  abnormal_move,-> ignore, anw value=0
       *  abnormal_status -> Cross Fire tripod (target frozen)
       *  npc_scaled_level_less -> bracelets (605000069, 605000070, 605000071, 605000072, 605000077, 605000078, 605000079, 605000080), 
       *  current_skill_group -> bracelets (77392001, 77392002, 77392003, 605000077, 605000078, 605000079, 605000080, 605010161, 605010162, 605010163, 605010164),
       *  hp_less,
       *    351708 -> tripod Evolved Shot
       *    380708 -> tripod Heaven Calls
       *    380709 -> ? deleted tripod ?
       *    380710 -> ? deleted tripod ?
       *    2324002 -> tripod Furious Hit
       *  npc_grade_greater (280908 (tripod Steady Aim), 350805, 380708, 380709, 380710, 3415010, 3459001),
       *  identity_stance (281315, 281416, 281506, 281903, 361808), -> sharpshooter silverhawk status (on/off)
       *  directional_attack (600000103, 610000103, 620000103) -> bracelets ?
       * ]
       * 
       * 
       * [Processing steps]
       * 1- get all relevent buffs with their respective type, value and source
       * 2- group up all additive buffs
       * 3- if there is at least 1 crit chance buff, calculate crit damage
       * 4- apply all buff group 1 by 1 (multiplicative) to calculate flatGain and each step effGain%
       * TODO: i think that, as for the stagger, the flat damage/flat stat is rounded after each effect applied -> this might create a tiny inaccuracy
       *    - dmg: amount=(1-1/buff%)*dmg
       *    - crit: amountIfCrit=buff%*(dmg-dmg/critDMGStat) / amount=buff% * ( dmg*critDMGStat - dmg)
       *    - effGain%=1-(dmg/(dmg-amount))
       *    - flatGain = sum(amount)
       * - attribute damageGain to each source based on their buff gain% and totalDamageGain%
       *    - attrDmg = (effGain%/sum(effGain%))*flatGain
       * 
       */
      if (damageData.damage > 0 && damageOwner.isPlayer) {
        type RdpsBuffData = {
          casterEntity: Entity;
          rate: number;
        };
        const rdpsData = {
          multDmg: {
            sumRate: 0.0,
            totalRate: 1.0,
            values: Array<RdpsBuffData>(),
          },
          atkPowSubRate2: {
            //Contains self, as it's additive
            selfSumRate: 0.0,
            sumRate: 0.0,
            values: Array<RdpsBuffData>(),
          },
          atkPowSubRate1: {
            sumRate: 0.0,
            totalRate: 1.0,
            values: Array<RdpsBuffData>(),
          },
          skillDamRate: {
            //Contains self, as it's additive
            selfSumRate: 0.0,
            sumRate: 0.0,
            values: Array<RdpsBuffData>(),
          },
          atkPowAmplify: {
            //Keep the highest
            values: Array<RdpsBuffData>(),
          },
          crit: {
            //Contains self, as it's additive
            selfSumRate: 0.0,
            sumRate: 0.0,
            values: Array<RdpsBuffData>(),
          },
          critDmgRate: 2.0,
        };
        // Process only if source is a player, excluding support of the rdps processing for now
        statusEffectsOnSource.forEach(([buffId, sourceEntityId, stackCount]) => {
          const casterEntity = this.#entityTracker.entities.get(sourceEntityId);
          if (!casterEntity) return;
          const buff = this.getBuffAfterTripods(this.#data.skillBuff.get(buffId), casterEntity, damageData);
          if (!buff) return;
          // Check for atk power buff, crit buff and dmg buff
          if (
            buff.type === "skill_damage_amplify" &&
            buff.statuseffectvalues &&
            casterEntity.entityType === EntityType.Player &&
            sourceEntityId !== owner.entityId
          ) {
            const skillId = buff.statuseffectvalues[0] ?? 0;
            const skillEffectId = buff.statuseffectvalues[4] ?? 0;
            if (
              (skillId === 0 || skillId === damageData.skillId) &&
              (skillEffectId === 0 || skillEffectId === damageData.skillEffectId)
            ) {
              const val = buff.statuseffectvalues[1] ?? 0;
              if (val !== 0) {
                const rate = (val / 10000) * stackCount;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate,
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
            }
          } else if (
            buff.type === "attack_power_amplify" &&
            buff.statuseffectvalues &&
            casterEntity.entityType === EntityType.Player &&
            sourceEntityId !== owner.entityId
          ) {
            //Get %gain from target & source base aktpower (statApi)
            //If atk power is unknown, default to equal atkpower (+15%)
            //Only the best effect will be kept

            const val = buff.statuseffectvalues[0] ?? 0;
            if (val !== 0) {
              let rate = (val / 10000) * stackCount;
              const casterBaseAtkPower = this.#statApi
                .getStats(casterEntity.name)
                ?.find((s) => s.id === ApiStatType.ATKPOWER)?.value;
              const targetBaseAtkPower = this.#statApi
                .getStats(owner.name)
                ?.find((s) => s.id === ApiStatType.ATKPOWER)?.value;

              if (casterBaseAtkPower && targetBaseAtkPower) {
                rate *= casterBaseAtkPower / targetBaseAtkPower;
              }
              rdpsData.atkPowAmplify.values.push({
                casterEntity,
                rate,
              });
            }
          }
          buff.passiveoption.forEach((passive) => {
            if (addontype[passive.type] === addontype.stat) {
              if (passive.keystat === "attack_power_sub_rate_2") {
                //There, every attack power buff of that same type (attack_power_sub_rate_2) is added together (instead of being multiplied)
                //But it is still multiplied with other buffs
                const val = passive.value;
                if (val !== 0) {
                  let rate = (val / 10000) * stackCount;
                  if (casterEntity.entityType === EntityType.Player && sourceEntityId !== owner.entityId) {
                    rdpsData.atkPowSubRate2.values.push({
                      casterEntity,
                      rate,
                    });
                    rdpsData.atkPowSubRate2.sumRate += rate;
                  } else {
                    rdpsData.atkPowSubRate2.selfSumRate += rate;
                  }
                }
              } else if (passive.keystat === "attack_power_sub_rate_1") {
                const val = passive.value;
                if (val !== 0) {
                  let rate = (val / 10000) * stackCount;
                  if (casterEntity.entityType === EntityType.Player && sourceEntityId !== owner.entityId) {
                    rdpsData.atkPowSubRate1.values.push({
                      casterEntity,
                      rate,
                    });
                    rdpsData.atkPowSubRate1.sumRate += rate;
                    rdpsData.atkPowSubRate1.totalRate *= 1 + rate;
                  }
                }
              } else if (passive.keystat === "skill_damage_rate") {
                //Yearning
                //TODO: we need to know weapon quality (and therefore additional damage from weapon), and emulate all buffs that increase skill_damage_rate because they are additive
                //This is an additive buff, so we'll keep track of all of them (including self buffs), and get the upgrade being rate/sumRate
                //gain = rate/(1+sumRate-rate)
                //where rate is the sum of applied rate (after removing the personal part)
                const val = passive.value;
                if (val !== 0) {
                  const rate = (val / 10000) * stackCount;

                  if (casterEntity.entityType === EntityType.Player && sourceEntityId !== owner.entityId) {
                    rdpsData.skillDamRate.values.push({
                      casterEntity,
                      rate,
                    });
                    rdpsData.skillDamRate.sumRate += rate;
                  } else {
                    rdpsData.skillDamRate.selfSumRate += rate;
                  }
                }
              }
            }
            if (passive.keystat === "critical_hit_rate") {
              // Only Lance of judgment
              const val = passive.value;
              if (val !== 0) {
                const rate = (val / 10000) * stackCount;
                if (casterEntity.entityType === EntityType.Player && sourceEntityId !== owner.entityId) {
                  rdpsData.crit.values.push({
                    casterEntity,
                    rate,
                  });
                  rdpsData.crit.sumRate += rate;
                } else {
                  rdpsData.crit.selfSumRate += rate;
                }
              }
            }
            if (casterEntity.entityType === EntityType.Player && sourceEntityId !== owner.entityId) {
              if (passive.keystat === "skill_damage_sub_rate_2") {
                const val = passive.value;
                if (val !== 0) {
                  let rate = (val / 10000) * stackCount;
                  //TODO: dynamic from dbs ?
                  //We're using base spec (after pet) there, but we'll have to make sure that there are no buffs that can increase spec
                  //Value=(spec/specRate)*stattype.identityvalue1_rate/10000
                  //specRate -> table PCLevel
                  //stattype.identityvalue1_rate (108) -> table PCStatCoeficient
                  //ex: 1600spec -> (1600/0.0699)*0.35/10000 = 0.80114 -> 3 bubble buff (0.15) will become 0.15*(1+0.80114) = 0.27

                  const spec =
                    this.#statApi.getStats(casterEntity.name)?.find((s) => s.id === ApiStatType.SPEC)?.value ?? 0;
                  switch ((casterEntity as Player).class) {
                    case playerclass.bard:
                      rate *= 1 + ((spec / 0.0699) * 0.35) / 10000; //0.05% per point
                      break;
                    case playerclass.holyknight:
                      rate *= 1 + ((spec / 0.0699) * 0.63) / 10000; //0.09% per point
                      break;
                    case playerclass.yinyangshi:
                      rate *= 1 + ((spec / 0.0699) * 0.38) / 10000; //0.054% per point
                      break;
                    default:
                      break;
                  }
                  rdpsData.multDmg.values.push({
                    casterEntity,
                    rate,
                  });
                  rdpsData.multDmg.sumRate += rate;
                  rdpsData.multDmg.totalRate *= 1 + rate;
                }
              } else {
                //Process self buffs
                if (passive.keystat === "critical_dam_rate" && buff.category === "buff") {
                  //we don't check for  && sourceEntityId === owner.entityId in case, but it should only tr
                  //always "buff" anw
                  rdpsData.critDmgRate += (passive.value / 10000) * stackCount;
                }
              }
            } else if (addontype[passive.type] === addontype.combat_effect) {
              const ce = this.#data.combatEffect.get(passive.keyindex);
              rdpsData.critDmgRate +=
                stackCount *
                this.getCritMultiplierFromCombatEffect(ce, {
                  self: owner,
                  target,
                  caster: casterEntity,
                  skill: this.#data.skill.get(skillId),
                  hitOption,
                  targetCount,
                });
            }
          });
        });
        statusEffectsOnTarget.forEach(([debuffId, sourceEntityId, stackCount]) => {
          const casterEntity = this.#entityTracker.entities.get(sourceEntityId);
          //On target doesn't have interesting self buffs, so we can filter there
          if (!casterEntity) return;
          const debuff = this.getBuffAfterTripods(this.#data.skillBuff.get(debuffId), casterEntity, damageData);
          if (!debuff) return;
          if (debuff.type === "instant_stat_amplify" && debuff.statuseffectvalues) {
            //Crit resistance
            const val = debuff.statuseffectvalues[0] ?? 0;
            if (val !== 0) {
              const rate = (val / 10000) * stackCount;
              if (casterEntity.entityType === EntityType.Player && sourceEntityId !== owner.entityId) {
                rdpsData.crit.values.push({
                  casterEntity,
                  rate,
                });
                rdpsData.crit.sumRate += rate;
              } else {
                rdpsData.crit.selfSumRate += rate;
              }
            }
          }
          if (casterEntity.entityType !== EntityType.Player || sourceEntityId === owner.entityId) return;
          // Check for defense reduction or crit resistance that are issued from players
          if (debuff.type === "instant_stat_amplify" && debuff.statuseffectvalues) {
            //Crit resistance
            const val = debuff.statuseffectvalues[0] ?? 0;
            if (damageData.damageType === damagetype.physics) {
              //Phys. Defense
              const val = debuff.statuseffectvalues[2] ?? 0;
              if (val !== 0) {
                const rate = -(val / 10000) * stackCount * 0.5; //TODO: currently we'll estimate the defense gain to be 50% of the stat, becasue defense emulation is a pain
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate,
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
              //Incoming Phys. Damage
              const val2 = debuff.statuseffectvalues[7] ?? 0;
              if (val2 !== 0) {
                const rate = (val2 / 10000) * stackCount;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate,
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
              //Incoming Phys. Damage when crit
              if (isCrit) {
                const val3 = debuff.statuseffectvalues[9] ?? 0;
                if (val3 !== 0) {
                  const rate = (val3 / 10000) * stackCount;
                  rdpsData.multDmg.values.push({
                    casterEntity,
                    rate,
                  });
                  rdpsData.multDmg.sumRate += rate;
                  rdpsData.multDmg.totalRate *= 1 + rate;
                }
              }
            } else if (damageData.damageType === damagetype.magic) {
              //Mag. Defense
              const val = debuff.statuseffectvalues[3] ?? 0;
              if (val !== 0) {
                const rate = -(val / 10000) * stackCount * 0.5; //TODO: for 0.5, see Phys. Defense
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate,
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
              //Incoming Mag. Damage
              const val2 = debuff.statuseffectvalues[8] ?? 0;
              if (val2 !== 0) {
                const rate = (val2 / 10000) * stackCount;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate,
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
              //Incoming Mag. Damage when crit
              if (isCrit) {
                const val3 = debuff.statuseffectvalues[10] ?? 0;
                if (val3 !== 0) {
                  const rate = (val3 / 10000) * stackCount;
                  rdpsData.multDmg.values.push({
                    casterEntity,
                    rate,
                  });
                  rdpsData.multDmg.sumRate += rate;
                  rdpsData.multDmg.totalRate *= 1 + rate;
                }
              }
            }
          }
          //check for skill dmg buffs
          if (debuff.type === "skill_damage_amplify" && debuff.statuseffectvalues) {
            const skillId = debuff.statuseffectvalues[0] ?? 0;
            const skillEffectId = debuff.statuseffectvalues[4] ?? 0;
            if (
              (skillId === 0 || skillId === damageData.skillId) &&
              (skillEffectId === 0 || skillEffectId === damageData.skillEffectId)
            ) {
              const val = debuff.statuseffectvalues[1] ?? 0;
              if (val !== 0) {
                const rate = (val / 10000) * stackCount;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate,
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
            }
          }
          //check for skill dmg buffs
          if (debuff.type === "directional_attack_amplify" && debuff.statuseffectvalues) {
            if (isFrontAttack) {
              const frontRate = debuff.statuseffectvalues[0] ?? 0;
              if (frontRate !== 0) {
                const rate = (frontRate / 100) * stackCount;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate,
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
            }
            if (isBackAttack) {
              const backRate = debuff.statuseffectvalues[4] ?? 0;
              if (backRate !== 0) {
                const rate = (backRate / 100) * stackCount;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate,
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
            }
          }
        });
        // If we have at least 1 crit synergy
        // - Calculate crit damage
        // - Evaluate dmg gain (%) for the sum of crit synergies
        // - attribute the dmg gain (%) to each crit synergy based on their rate
        if (rdpsData.crit.values.length > 0) {
          const skillCastedData = this.#data.skill.get(damageData.skillId);
          //Get crit dmg gained from set
          (owner as Player).itemSet?.forEach((option) => {
            if (addontype[option.type] === addontype.stat && stattype[option.keystat] === stattype.critical_dam_rate) {
              rdpsData.critDmgRate += option.value / 10000;
            } else if (addontype[option.type] === addontype.combat_effect) {
              const ce = this.#data.combatEffect.get(option.keyindex);
              rdpsData.critDmgRate += this.getCritMultiplierFromCombatEffect(ce, {
                self: owner,
                target,
                caster: owner,
                skill: skillCastedData,
                hitOption,
                targetCount,
              });
            }

            //Get crit dmg gained from tripods
            (owner as Player).skills.get(damageData.skillId)?.tripods.forEach((tripodData) => {
              //Get current combat effect
              const combatEffects = new Map<number, CombatEffect>();

              tripodData.options.forEach((option) => {
                const featureType = skillfeaturetype[option.type];
                if (featureType === skillfeaturetype.add_chain_combat_effect) {
                  if ((option.params[0] ?? 0) === 0 || damageData.skillEffectId === (option.params[0] ?? 0)) {
                    const ceId = option.params[1];
                    if (ceId) {
                      const ce = this.#data.combatEffect.get(ceId);
                      //add combat effect
                      if (ce) combatEffects.set(ce.id, ce);
                    }
                  }
                } else if (featureType === skillfeaturetype.remove_chain_combat_effect) {
                  //remove combat effect
                  combatEffects.delete(option.params[0] ?? 0);
                } else if (featureType === skillfeaturetype.change_combat_effect_arg) {
                  if ((option.params[0] ?? 0) === 0 || damageData.skillEffectId === (option.params[0] ?? 0)) {
                    //edit combat effect
                    const ce = combatEffects.get(option.params[1] ?? 0);
                    //we might not get the combatEffect, because in the db, there are refs to unused effects (such as addonSkillFeature that come from AstraOption)
                    if (ce) {
                      // ! We have to be careful here not to edit combat_effect original value
                      const newCe: CombatEffect = structuredClone(ce);
                      combatEffects.set(ce.id, newCe);
                      newCe.effects.forEach((effect) => {
                        effect.actions.forEach((action) => {
                          for (let i = 0; i < option.params.length - 2; i++) {
                            if (paramtype[option.paramtype] === paramtype.relative)
                              action.args[i] *= 1 + (option.params[i + 2] ?? 0) / 100;
                            else action.args[i] += option.params[i + 2] ?? 0;
                          }
                        });
                      });
                    }
                  }
                } /* else if (featureType === skillfeaturetype.swap_chain_combat_effect) {
                  // Unused - no examples
                } */ else if (featureType === skillfeaturetype.change_dam_critical) {
                  //Ex: Dark Resurrection (19050) Furious Blow
                  if ((option.params[0] ?? 0) === 0 || damageData.skillEffectId === (option.params[0] ?? 0)) {
                    //TODO: some are absolute, other relatives, but i'm pretty sure it's a mistake & all are absolute
                    rdpsData.critDmgRate += (option.params[1] ?? 0) / 10000;
                  }
                } else if (featureType === skillfeaturetype.change_dam_critical_rate) {
                  //Ex: Dark Resurrection (19050) Furious Blow
                  if ((option.params[0] ?? 0) === 0 || damageData.skillEffectId === (option.params[0] ?? 0)) {
                    rdpsData.crit.selfSumRate += (option.params[1] ?? 0) / 10000;
                  }
                }
                //TODO: change_dam_critical_rate / maybe at least check for tripods & buff in case we overcap, waiting until we get crit stat
              });
              combatEffects.forEach((ce) => {
                rdpsData.critDmgRate += this.getCritMultiplierFromCombatEffect(ce, {
                  self: owner,
                  target,
                  caster: owner,
                  skill: skillCastedData,
                  hitOption,
                  targetCount,
                });
              });
            });
          });
          //TODO: check change_skill_constraint, but i think it's not for the buffs but only skill casts -> not required
        }

        //Add weapon quality skill_damage_rate if known
        if (rdpsData.skillDamRate.values.length > 0) {
          const targetWeaponSkillDmg = this.#statApi
            .getStats(owner.name)
            ?.find((s) => s.id === ApiStatType.SKILLDMG)?.value;
          if (targetWeaponSkillDmg) rdpsData.skillDamRate.selfSumRate += targetWeaponSkillDmg / 10000;
        }
        /**
         * 4- apply all buff group 1 by 1 (multiplicative) to calculate flatGain and each step effGain%
         *    - dmg: amount=(1-1/buff%)*dmg
         *    - crit: amountIfCrit=buff%*(dmg-dmg/critDMGStat) / amount=buff% * ( dmg*critDMGStat - dmg)
         *    - effGain%=1-(dmg/(dmg-amount))
         *    - flatGain = sum(amount)
         * - attribute damageGain to each source based on their buff gain% and totalDamageGain%
         *    - attrDmg = (effGain%/sum(effGain%))*flatGain
         *
         */

        //Process crit group as single mult
        //Crit processing sample (https://www.desmos.com/calculator/aj2ddpzixz) TODO: modify for wiki graphs
        let critSumEffGainRate = 0.0;
        if (rdpsData.crit.values.length > 0) {
          //Get base crit from stats
          rdpsData.crit.selfSumRate +=
            (this.#statApi.getStats(owner.name)?.find((s) => s.id === ApiStatType.CRIT)?.value ?? 0) / 0.2794 / 10000;
          //Handling overcap. The contribution is still shared equally, but it only benefits from the extra
          //ex: base 80%, bonus 20+20=40%, we orvercap and only keep 20% total to reach 100%, and then the 20% remaning are shared between the 2 original 20%
          const cappedSumRate = Math.min(Math.max(0, 1 - rdpsData.crit.selfSumRate), rdpsData.crit.sumRate);

          //Process
          critSumEffGainRate =
            (cappedSumRate * rdpsData.critDmgRate - cappedSumRate) /
            (rdpsData.crit.selfSumRate * rdpsData.critDmgRate - rdpsData.crit.selfSumRate + 1);
        }
        //attack_power_amplify pick highest
        const attack_power_amplify =
          rdpsData.atkPowAmplify.values.length <= 0
            ? ({ rate: 0 } as RdpsBuffData)
            : rdpsData.atkPowAmplify.values.reduce((prev, curr) => {
                return prev.rate > curr.rate ? prev : curr;
              });

        const totalEffGainRate =
          (1 + critSumEffGainRate) *
            (1 + rdpsData.atkPowSubRate2.sumRate / (1 + rdpsData.atkPowSubRate2.selfSumRate)) *
            (1 + rdpsData.skillDamRate.sumRate / (1 + rdpsData.skillDamRate.selfSumRate)) *
            (1 + attack_power_amplify.rate) *
            rdpsData.multDmg.totalRate *
            rdpsData.atkPowSubRate1.totalRate -
          1;
        const totalSumGainRate =
          critSumEffGainRate +
          rdpsData.atkPowSubRate2.sumRate / (1 + rdpsData.atkPowSubRate2.selfSumRate) +
          rdpsData.skillDamRate.sumRate / (1 + rdpsData.skillDamRate.selfSumRate) +
          attack_power_amplify.rate +
          (rdpsData.multDmg.totalRate - 1) +
          (rdpsData.atkPowSubRate1.totalRate - 1);
        //if (totalSumGainRate > 0)
        {
          const unitRate = (totalEffGainRate * damageData.damage) / (totalSumGainRate * (1 + totalEffGainRate));

          //crit
          const critGainUnit = (critSumEffGainRate * unitRate) / rdpsData.crit.sumRate;
          rdpsData.crit.values.forEach((crit) => {
            const delta = crit.rate * critGainUnit;
            const sourceEntityState = this.#game.entities.get(crit.casterEntity.name);
            this.applyRdps(damageOwner, sourceEntityState, skill!, delta);
          });

          //Additive buff sample (https://www.desmos.com/calculator/igszu4cqmr) TODO: modify for wiki graphs
          //atkPowSubRate2
          rdpsData.atkPowSubRate2.values.forEach((dmg) => {
            const delta = (dmg.rate / (1 + rdpsData.atkPowSubRate2.selfSumRate)) * unitRate;
            const sourceEntityState = this.#game.entities.get(dmg.casterEntity.name);
            this.applyRdps(damageOwner, sourceEntityState, skill!, delta);
          });

          //skillDamRate
          rdpsData.skillDamRate.values.forEach((dmg) => {
            const delta = (dmg.rate / (1 + rdpsData.skillDamRate.selfSumRate)) * unitRate;
            const sourceEntityState = this.#game.entities.get(dmg.casterEntity.name);
            this.applyRdps(damageOwner, sourceEntityState, skill!, delta);
          });

          //multDmg
          const multGainUnit = ((rdpsData.multDmg.totalRate - 1) * unitRate) / rdpsData.multDmg.sumRate;
          rdpsData.multDmg.values.forEach((dmg) => {
            //const delta = dmg.rate * multGainUnit;
            const delta = dmg.rate * multGainUnit;
            const sourceEntityState = this.#game.entities.get(dmg.casterEntity.name);
            this.applyRdps(damageOwner, sourceEntityState, skill!, delta);
          });

          //atkPowSubRate1
          const atkPowSubRate1GainUnit =
            ((rdpsData.atkPowSubRate1.totalRate - 1) * unitRate) / rdpsData.atkPowSubRate1.sumRate;
          rdpsData.atkPowSubRate1.values.forEach((dmg) => {
            //const delta = dmg.rate * multGainUnit;
            const delta = dmg.rate * atkPowSubRate1GainUnit;
            const sourceEntityState = this.#game.entities.get(dmg.casterEntity.name);
            this.applyRdps(damageOwner, sourceEntityState, skill!, delta);
          });

          //atkPowAmplify
          if (attack_power_amplify.rate > 0) {
            const delta = attack_power_amplify.rate * unitRate;
            const sourceEntityState = this.#game.entities.get(attack_power_amplify.casterEntity?.name);
            this.applyRdps(damageOwner, sourceEntityState, skill, delta);
          }
        }
      }
      //#endregion

      //TODO: include rdps & some other processing into breakdown
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

      const breakdownOwner = BigInt("0x" + damageOwner.id);
      this.addBreakdown(breakdownOwner, skillId, breakdown);
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
  getBuffAfterTripods(oBuff: SkillBuff | undefined, entity: Entity, damageData: DamageData): SkillBuff | undefined {
    if (!oBuff || entity.entityType !== EntityType.Player) return oBuff;

    // ! same as with combatEffect, be careful not to edit originals
    const buff = structuredClone(oBuff);
    (entity as Player).skills.get(damageData.skillId)?.tripods.forEach((tripodData) => {
      tripodData.options.forEach((tripod) => {
        const featureType = skillfeaturetype[tripod.type];
        if (featureType === skillfeaturetype.change_buff_stat) {
          // change_buff_stat    -> (modify passiveoption stats)
          //                  -> [0,    210426,   39,       18,   40,       18]
          //                      idk   buffId   stattype  val   stattype  val
          //                                    |    pair1     |      pair2    |
          //    when "paramtype": "relative" -> newStat = oldStat * (1+val/100)
          //    when "paramtype": "absolute" -> newStat = oldStat + val
          // params[0] seems to be same as params[3] (or abs(params[3]))
          // it is probably used for tripod display (not buff display)
          // that's why tripod display is bugged on codex for Guardian Tune - Powerful Protection
          // they use the real value instead of the display value
          // https://lostarkcodex.com/us/skill/21250

          if ((tripod.params[0] ?? 0) === 0 || damageData.skillEffectId === (tripod.params[0] ?? 0)) {
            if (buff.id === (tripod.params[1] ?? 0)) {
              const changeMap = new Map<stattype, number>();
              for (let i = 2; i < tripod.params.length; i += 2) {
                if (tripod.params[i] && tripod.params[i + 1])
                  changeMap.set(tripod.params[i] ?? 0, tripod.params[i + 1] ?? 0);
              }
              buff.passiveoption.forEach((passive) => {
                const change = changeMap.get(stattype[passive.keystat]);
                if (addontype[passive.type] === addontype.stat && change) {
                  if (paramtype[tripod.paramtype] === paramtype.absolute) passive.value += change;
                  else passive.value *= 1 + change / 100; //relative
                }
                //TODO: addon can be skill_group_cooldown_reduction, and in that case we update value using params[2]
                // ex Reaper - Piercing Blade (26110) - Brand Activation (261170)
              });
            }
          }
        } else if (featureType === skillfeaturetype.add_buff_stat) {
          // add_buff_stat      -> (same as change_buff_stat, but create a new stat one)
          //    always "absolute"

          if ((tripod.params[0] ?? 0) === 0 || damageData.skillEffectId === (tripod.params[0] ?? 0)) {
            if (buff.id === (tripod.params[1] ?? 0)) {
              const keystat = stattype[tripod.params[2] ?? 0];
              const value = tripod.params[3] ?? 0;
              //TODO: we may need to check if the stat already exist ?
              if (keystat && value !== undefined)
                //Value can be equal to 0, in case base value is 0, but that it is modified later on
                buff.passiveoption.push({
                  type: "stat",
                  keystat: keystat as keyof typeof stattype,
                  keyindex: 0,
                  value: value,
                });
            }
          }
        } else if (featureType === skillfeaturetype.change_buff_param) {
          // change_buff_param -> (modify statuseffectvalues)
          //    when "absolute": just replace old buff param values (first 3 values are skipped, 2nd is buffId)
          //    when "relative": multiply each buff value with the respective (1+val/100)
          //"statuseffectvalues": [0, 10000, 1, 2, 212402],
          //        [0, 212404, 0, 0, 10000, 1, 2, 212402]
          //
          if (
            buff.statuseffectvalues &&
            ((tripod.params[0] ?? 0) === 0 || damageData.skillEffectId === (tripod.params[0] ?? 0))
          ) {
            //TODO: understand how tripod.paramtype[2] works
            // when absolute tripod.params[2] === 0
            // when relative tripod.params[2] === 1 -> except for buff 200307

            if (buff.id === (tripod.params[1] ?? 0)) {
              if ((tripod.params[2] ?? 0) === paramtype.absolute) {
                buff.statuseffectvalues = tripod.params.slice(3);
              } else {
                //relative
                const newValues = [];
                for (let i = 0; i < Math.max(buff.statuseffectvalues.length, tripod.params.length - 3); i++) {
                  if (tripod.params[i + 3]) {
                    newValues.push((buff.statuseffectvalues[i] ?? 0) * (1 + (tripod.params[i + 3] ?? 0) / 100));
                  }
                }
                buff.statuseffectvalues = newValues;
              }
            }
          }
        }
      });
    });
    return buff;
  }
  getCritMultiplierFromCombatEffect(
    ce: CombatEffect | undefined,
    ceConditionData: Partial<CombatEffectConditionData>
  ): number {
    if (!ce) return 0;
    let critDmgRate = 0;

    ce.effects
      .filter((effect) =>
        effect.actions.find(
          (action) => combateffectactiontype[action.type] === combateffectactiontype.modify_critical_multiplier
        )
      )
      .forEach((effect) => {
        if (this.#data.isCombatEffectConditionsValid({ effect, ...ceConditionData })) {
          effect.actions
            .filter(
              (action) => combateffectactiontype[action.type] === combateffectactiontype.modify_critical_multiplier
            )
            .forEach((action) => {
              critDmgRate += (action.args[0] ?? 0) / 100;
            });
        }
      });
    return critDmgRate;
  }
  applyRdps(damageOwner: EntityState, sourceEntityState: EntityState | undefined, skill: EntitySkills, delta: number) {
    if (sourceEntityState) {
      sourceEntityState.damageInfo.rdpsDamageGiven += delta;
    }
    if (sourceEntityState && this.#data.isSupportClassId(sourceEntityState.classId)) {
      damageOwner.damageInfo.rdpsDamageReceivedSupp += delta;
      skill.damageInfo.rdpsDamageReceivedSupp += delta;
    }
    damageOwner.damageInfo.rdpsDamageReceived += delta;
    skill.damageInfo.rdpsDamageReceived += delta;
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
        targetEntityState.shieldReceived,
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
    let extraInfo: Partial<EntityState> = {};
    if (
      !entityState ||
      (entity.entityType === EntityType.Player && entityState.isPlayer !== true) // We guessed isPlayer
    ) {
      if (entity.entityType === EntityType.Player) {
        const player = entity as Player;
        extraInfo = { classId: player.class, gearScore: player.gearLevel, isPlayer: true };
      } else if (entity.entityType === EntityType.Npc || entity.entityType === EntityType.Summon) {
        const npc = entity as Npc;
        extraInfo = { npcId: npc.typeId, isBoss: npc.isBoss };
      } else if (entity.entityType === EntityType.Esther) {
        const esther = entity as Esther;
        extraInfo = { npcId: esther.typeId, isBoss: esther.isBoss, isEsther: true, icon: esther.icon };
      }
    }
    if (entityState) {
      Object.assign(entityState, values, updateTime, extraInfo);
    } else {
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
      damageInfo: {
        damageDealt: 0,
        rdpsDamageReceived: 0,
        rdpsDamageReceivedSupp: 0,
        rdpsDamageGiven: 0,
        damageDealtDebuffedBySupport: 0,
        damageDealtBuffedBySupport: 0,
      },
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
      damageInfo: {
        damageDealt: 0,
        rdpsDamageReceived: 0,
        rdpsDamageReceivedSupp: 0,
        rdpsDamageGiven: 0,
        damageDealtDebuffedBySupport: 0,
        damageDealtBuffedBySupport: 0,
      },
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
      statApiValid: false,
    };
    return newEntity;
  }

  getBroadcast(): GameState {
    const clone: GameState = { ...this.#game };

    clone.entities = new Map();
    this.#game.entities.forEach((entity, id) => {
      // Skip all entities that are not players (if live)
      if (!entity.isPlayer && !entity.isEsther) return;
      entity.statApiValid =
        this.#statApi.isCurrentZoneValid() &&
        this.#statApi.cache.get(entity.name)?.status === PlayerStatCacheStatus.VALID;
      clone.entities.set(id, { ...entity });
    });

    clone.localPlayer = this.#entityTracker.localPlayer.name;
    return clone;
  }

  //#region Breakdown Tracker

  resetBreakdowns() {
    this.#entityToSkillBreakdown.clear();
  }

  /**
   * Adds a breakdown entry for the given entity if it doesn't exist yet.
   *
   * @param entityId
   * @returns The entry for the given entity.
   */
  createBreakdownEntity(entityId: bigint): Map<number, Breakdown[]> {
    if (!this.#entityToSkillBreakdown.has(entityId)) {
      this.#entityToSkillBreakdown.set(entityId, new Map());
    }
    return this.#entityToSkillBreakdown.get(entityId)!;
  }

  /**
   * Removes the entry for the given entity.
   *
   * @param entityId The ID of the entity to remove the entry for.
   */
  removeBreakdownEntry(entityId: bigint) {
    this.#entityToSkillBreakdown.delete(entityId);
  }

  /**
   * Adds a breakdown to the given entity and skill.
   *
   * @param entityId The ID of the entity to add the breakdown for.
   * @param skillId The ID of the skill to add the breakdown for.
   * @param breakdown The breakdown to add.
   */
  addBreakdown(entityId: bigint, skillId: number, breakdown: Breakdown) {
    const entityBreakdown = this.createBreakdownEntity(entityId);
    if (!entityBreakdown.has(skillId)) {
      const skill = new Array<Breakdown>(breakdown);
      entityBreakdown.set(skillId, skill);
    } else {
      entityBreakdown.get(skillId)!.push(breakdown);
    }
  }

  /**
   * Returns the breakdowns for the given entity and skill, or undefined if none exist.
   *
   * @param entityId The ID of the entity to get the breakdowns for.
   * @param skillId The ID of the skill to get the breakdowns for.
   * @returns The breakdowns for the given entity and skill, or undefined if none exist.
   */
  getBreakdowns(entityId: bigint, skillId: number): Breakdown[] | undefined {
    const entityBreakdown = this.#entityToSkillBreakdown.get(entityId);
    if (!entityBreakdown) return undefined;

    return entityBreakdown.get(skillId);
  }

  /**
   * Clears the breakdowns for the given entity and skill.
   *
   * @param entityId The ID of the entity to clear the breakdowns for.
   * @param skillId The ID of the skill to clear the breakdowns for.
   */
  clearBreakdowns(entityId: bigint, skillId: number) {
    const entityBreakdown = this.#entityToSkillBreakdown.get(entityId);
    if (!entityBreakdown) return;

    entityBreakdown.delete(skillId);
  }

  /**
   * Applies the breakdowns to the given entity states and optionally clears
   * stored breakdowns afterwards. (Defaults to true)
   *
   * @param entityStates The entity states to apply the breakdowns to.
   * @param reset Whether to clear the stored breakdowns afterwards.
   */
  applyBreakdowns(entityStates: Map<string, EntityState>, reset = true) {
    entityStates.forEach((entity) => {
      entity.skills.forEach((skill) => {
        const id = BigInt("0x" + entity.id);
        const breakdowns = this.getBreakdowns(id, skill.id);
        if (breakdowns) skill.breakdown = [...breakdowns];
      });
    });
    if (reset) this.resetBreakdowns();
  }

  //#endregion

  setKillState(state: KillState) {
    this.#game.killState = state;
  }
  setZoneLevel(zoneLevel: zonelevel) {
    this.#game.zoneLevel = zonelevel[zoneLevel] as keyof typeof zonelevel;
  }
}

export type DamageData = {
  skillId: number;
  skillEffectId: number;
  damage: number;
  modifier: number;
  targetCurHp: number;
  targetMaxHp: number;
  damageAttr: damageattr; //note: damageAttr=8 when damage=0
  damageType: damagetype; //note: damageAttr=2 when damage=0
};
