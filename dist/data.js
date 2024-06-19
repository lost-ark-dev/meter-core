var U=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var e=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var p=(k,h,n)=>h in k?U(k,h,{enumerable:!0,configurable:!0,writable:!0,value:n}):k[h]=n;var y=(k,h)=>{for(var n in h)U(k,n,{get:h[n],enumerable:!0})},t=(k,h,n,s)=>{if(h&&typeof h=="object"||typeof h=="function")for(let r of e(h))!g.call(k,r)&&r!==n&&U(k,r,{get:()=>h[r],enumerable:!(s=f(h,r))||s.enumerable});return k};var __=k=>t(U({},"__esModule",{value:!0}),k);var R=(k,h,n)=>(p(k,typeof h!="symbol"?h+"":h,n),n),q=(k,h,n)=>{if(!h.has(k))throw TypeError("Cannot "+n)};var I=(k,h,n)=>(q(k,h,"read from private field"),n?n.call(k):h.get(k)),C=(k,h,n)=>{if(h.has(k))throw TypeError("Cannot add the same private member more than once");h instanceof WeakSet?h.add(k):h.set(k,n)},G=(k,h,n,s)=>(q(k,h,"write to private field"),s?s.call(k,n):h.set(k,n),n);var N=(k,h,n)=>(q(k,h,"access private method"),n);var d_={};y(d_,{MeterData:()=>b});module.exports=__(d_);var D=require("fs"),a=require("path");var J=(l=>(l[l.none=0]="none",l[l.slot=1]="slot",l[l.stat=2]="stat",l[l.ability_point=3]="ability_point",l[l.combat_effect=4]="combat_effect",l[l.skill_damage=5]="skill_damage",l[l.skill_critical_ratio=6]="skill_critical_ratio",l[l.skill_critical_damage=7]="skill_critical_damage",l[l.skill_penetration=8]="skill_penetration",l[l.npc_grade_less_damage=9]="npc_grade_less_damage",l[l.npc_grade_less_critical_ratio=10]="npc_grade_less_critical_ratio",l[l.npc_grade_less_critical_damage=11]="npc_grade_less_critical_damage",l[l.npc_grade_less_penetration=12]="npc_grade_less_penetration",l[l.npc_grade_greater_damage=13]="npc_grade_greater_damage",l[l.npc_grade_greater_critical_ratio=14]="npc_grade_greater_critical_ratio",l[l.npc_grade_greater_critical_damage=15]="npc_grade_greater_critical_damage",l[l.npc_grade_greater_penetration=16]="npc_grade_greater_penetration",l[l.npc_species_damage=17]="npc_species_damage",l[l.npc_species_critical_ratio=18]="npc_species_critical_ratio",l[l.npc_species_critical_damage=19]="npc_species_critical_damage",l[l.npc_species_penetration=20]="npc_species_penetration",l[l.npc_attr_damage=21]="npc_attr_damage",l[l.npc_attr_critical_ratio=22]="npc_attr_critical_ratio",l[l.npc_attr_critical_damage=23]="npc_attr_critical_damage",l[l.npc_attr_penetration=24]="npc_attr_penetration",l[l.mana_reduction=25]="mana_reduction",l[l.skill_mana_reduction=26]="skill_mana_reduction",l[l.skill_cooldown_reduction=27]="skill_cooldown_reduction",l[l.ability_feature=28]="ability_feature",l[l.class_option=29]="class_option",l[l.ability_point_passive=30]="ability_point_passive",l[l.instrument=31]="instrument",l[l.skill_feature=32]="skill_feature",l[l.npc_adaptation=33]="npc_adaptation",l[l.skill_group_damage=34]="skill_group_damage",l[l.skill_group_cooldown_reduction=35]="skill_group_cooldown_reduction",l[l.skill_level=36]="skill_level",l[l.skill_feature_level=37]="skill_feature_level",l[l.life_casting_speed=38]="life_casting_speed",l[l.life_casting_tier=39]="life_casting_tier",l[l.life_bonus_type_success=40]="life_bonus_type_success",l[l.life_bonus_type_extra=41]="life_bonus_type_extra",l[l.life_bonus_type_skill_bonus=42]="life_bonus_type_skill_bonus",l[l.life_bonus_type_minigame_perfect=43]="life_bonus_type_minigame_perfect",l[l.life_durability_bonus=44]="life_durability_bonus",l[l.life_mini_game_difficulty=45]="life_mini_game_difficulty",l[l.combat_effect_cooldown_reduction=46]="combat_effect_cooldown_reduction",l[l.skill_damage_addend=47]="skill_damage_addend",l[l.awakening_usable_count_addend=48]="awakening_usable_count_addend",l[l.battle_item_heal=49]="battle_item_heal",l[l.party_heal=50]="party_heal",l[l.party_shield=51]="party_shield",l[l.identity_gauge=52]="identity_gauge",l[l.attack_power_amplify_addend=53]="attack_power_amplify_addend",l[l.attack_power_amplify_multiplier=54]="attack_power_amplify_multiplier",l[l.not_in_party_damage=55]="not_in_party_damage",l[l.skill_effect_group_set_damage=56]="skill_effect_group_set_damage",l))(J||{});var W=(c=>(c[c.none=0]="none",c[c.modify_damage=1]="modify_damage",c[c.modify_final_damage=2]="modify_final_damage",c[c.modify_critical_ratio=3]="modify_critical_ratio",c[c.modify_critical_multiplier=4]="modify_critical_multiplier",c[c.modify_penetration=5]="modify_penetration",c[c.modify_penetration_when_critical=6]="modify_penetration_when_critical",c[c.exec_active_effect_when_damage=7]="exec_active_effect_when_damage",c[c.exec_active_effect_when_critical=8]="exec_active_effect_when_critical",c[c.exec_reactive_effect_when_miss=9]="exec_reactive_effect_when_miss",c[c.exec_reactive_effect_when_damage=10]="exec_reactive_effect_when_damage",c[c.exec_reactive_effect_when_critical=11]="exec_reactive_effect_when_critical",c[c.exec_after_effect=12]="exec_after_effect",c[c.exec_after_skill=13]="exec_after_skill",c[c.apply_heal=14]="apply_heal",c[c.modify_reactive_damage=15]="modify_reactive_damage",c[c.modify_damage_shield_multiplier=16]="modify_damage_shield_multiplier",c[c.exec_active_effect_when_kill=17]="exec_active_effect_when_kill",c[c.exec_start_skill=18]="exec_start_skill",c[c.modify_penetration_addend=19]="modify_penetration_addend",c[c.modify_penetration_addend_when_critical=20]="modify_penetration_addend_when_critical",c[c.modify_reactive_critical_multiplier=21]="modify_reactive_critical_multiplier",c[c.modify_damage_when_critical=22]="modify_damage_when_critical",c[c.modify_paralyzation_point=23]="modify_paralyzation_point",c[c.exec_when_counter=24]="exec_when_counter",c[c.exec_when_be_killed=25]="exec_when_be_killed",c))(W||{}),Q=(r=>(r[r.none=0]="none",r[r.self=1]="self",r[r.target=2]="target",r[r.caster=3]="caster",r))(Q||{}),Y=(m=>(m[m.none=0]="none",m[m.current_skill=1]="current_skill",m[m.hp_less=2]="hp_less",m[m.hp_greater=3]="hp_greater",m[m.mp_less=4]="mp_less",m[m.mp_greater=5]="mp_greater",m[m.npc_grade_less=6]="npc_grade_less",m[m.npc_grade_greater=7]="npc_grade_greater",m[m.npc_grade_equal=8]="npc_grade_equal",m[m.npc_species=9]="npc_species",m[m.npc_attr=10]="npc_attr",m[m.abnormal_move=11]="abnormal_move",m[m.abnormal_status=12]="abnormal_status",m[m.abnormal_move_immune=13]="abnormal_move_immune",m[m.abnormal_status_immune=14]="abnormal_status_immune",m[m.abnormal_move_all=15]="abnormal_move_all",m[m.pc=16]="pc",m[m.skill_effect_id=17]="skill_effect_id",m[m.identity_stack_count=18]="identity_stack_count",m[m.status_effect_immunetype=19]="status_effect_immunetype",m[m.abnormal_not_move=20]="abnormal_not_move",m[m.target_count=21]="target_count",m[m.skill_identity_category=22]="skill_identity_category",m[m.identity_element_value=23]="identity_element_value",m[m.directional_attack=24]="directional_attack",m[m.current_skill_group=25]="current_skill_group",m[m.abnormal_move_status_all=26]="abnormal_move_status_all",m[m.identity_stance=27]="identity_stance",m[m.pc_skill=28]="pc_skill",m[m.skill_effect_group_set=29]="skill_effect_group_set",m[m.npc_id=30]="npc_id",m[m.identity_gauge0_value_less=31]="identity_gauge0_value_less",m[m.pc_without_me=32]="pc_without_me",m[m.npc_scaled_level_equal=33]="npc_scaled_level_equal",m[m.npc_scaled_level_less=34]="npc_scaled_level_less",m[m.npc_scaled_level_greater=35]="npc_scaled_level_greater",m[m.not_skill_effect_id=36]="not_skill_effect_id",m[m.abnormal_move_not_immune=37]="abnormal_move_not_immune",m[m.apply_target_marking=38]="apply_target_marking",m[m.damage_attr=39]="damage_attr",m[m.identity_element_value_less=40]="identity_element_value_less",m[m.command_skill_type=41]="command_skill_type",m))(Y||{});var Z=(d=>(d[d.none=0]="none",d[d.berserker_normal=1]="berserker_normal",d[d.berserker_rush=2]="berserker_rush",d[d.warlord_normal=3]="warlord_normal",d[d.warlord_shield_of_battlefield=4]="warlord_shield_of_battlefield",d[d.destroyer_normal=5]="destroyer_normal",d[d.destroyer_focus=6]="destroyer_focus",d[d.destroyer_release=7]="destroyer_release",d[d.battle_master_normal=8]="battle_master_normal",d[d.battle_master_bubble=9]="battle_master_bubble",d[d.infighter_normal=10]="infighter_normal",d[d.infighter_vigor=11]="infighter_vigor",d[d.infighter_shock=12]="infighter_shock",d[d.forcemaster_normal=13]="forcemaster_normal",d[d.forcemaster_soul=14]="forcemaster_soul",d[d.lance_master_normal=15]="lance_master_normal",d[d.lance_master_wild=16]="lance_master_wild",d[d.lance_master_focus=17]="lance_master_focus",d[d.devil_hunter_normal=18]="devil_hunter_normal",d[d.devil_hunter_pistol=19]="devil_hunter_pistol",d[d.devil_hunter_shotgun=20]="devil_hunter_shotgun",d[d.devil_hunter_rifle=21]="devil_hunter_rifle",d[d.blaster_normal=22]="blaster_normal",d[d.blaster_cannon=23]="blaster_cannon",d[d.hawkeye_normal=24]="hawkeye_normal",d[d.hawkeye_summon=25]="hawkeye_summon",d[d.summoner_normal=26]="summoner_normal",d[d.summoner_ancient=27]="summoner_ancient",d[d.arcana_normal=28]="arcana_normal",d[d.arcana_stack=29]="arcana_stack",d[d.arcana_ruin=30]="arcana_ruin",d[d.arcana_card=31]="arcana_card",d[d.bard_normal=32]="bard_normal",d[d.bard_serenade=33]="bard_serenade",d[d.blade_burst=34]="blade_burst",d[d.holyknight_normal=35]="holyknight_normal",d[d.holyknight_holy=36]="holyknight_holy",d[d.holyknight_retribution=37]="holyknight_retribution",d[d.demonic_normal=38]="demonic_normal",d[d.demonic_capture=39]="demonic_capture",d[d.demonic_demon=40]="demonic_demon",d[d.warlord_lance=41]="warlord_lance",d[d.reaper_normal=42]="reaper_normal",d[d.reaper_dagger=43]="reaper_dagger",d[d.reaper_shadow=44]="reaper_shadow",d[d.reaper_swoop=45]="reaper_swoop",d[d.scouter_scout=46]="scouter_scout",d[d.scouter_drone=47]="scouter_drone",d[d.scouter_hyper_sync=48]="scouter_hyper_sync",d[d.scouter_fusion=49]="scouter_fusion",d[d.blade_normal=50]="blade_normal",d[d.elemental_master_normal=51]="elemental_master_normal",d[d.elemental_master_fire=52]="elemental_master_fire",d[d.elemental_master_electricity=53]="elemental_master_electricity",d[d.elemental_master_ice=54]="elemental_master_ice",d[d.yinyangshi_normal=55]="yinyangshi_normal",d[d.yinyangshi_yin=56]="yinyangshi_yin",d[d.yinyangshi_yang=57]="yinyangshi_yang",d[d.weather_artist_weapon=58]="weather_artist_weapon",d[d.weather_artist_weather=59]="weather_artist_weather",d[d.summoner_summon=60]="summoner_summon",d[d.soul_eater_hollow=61]="soul_eater_hollow",d[d.soul_eater_killer=62]="soul_eater_killer",d[d.soul_eater_death=63]="soul_eater_death",d))(Z||{});var B=(S=>(S[S.none=0]="none",S[S.underling=1]="underling",S[S.normal=2]="normal",S[S.elite=3]="elite",S[S.named=4]="named",S[S.seed=5]="seed",S[S.boss=6]="boss",S[S.raid=7]="raid",S[S.lucky=8]="lucky",S[S.epic_raid=9]="epic_raid",S[S.commander=10]="commander",S))(B||{});var K=(_=>(_[_.none=0]="none",_[_.hp=1]="hp",_[_.mp=2]="mp",_[_.str=3]="str",_[_.agi=4]="agi",_[_.int=5]="int",_[_.con=6]="con",_[_.str_x=7]="str_x",_[_.agi_x=8]="agi_x",_[_.int_x=9]="int_x",_[_.con_x=10]="con_x",_[_.criticalhit=15]="criticalhit",_[_.specialty=16]="specialty",_[_.oppression=17]="oppression",_[_.rapidity=18]="rapidity",_[_.endurance=19]="endurance",_[_.mastery=20]="mastery",_[_.criticalhit_x=21]="criticalhit_x",_[_.specialty_x=22]="specialty_x",_[_.oppression_x=23]="oppression_x",_[_.rapidity_x=24]="rapidity_x",_[_.endurance_x=25]="endurance_x",_[_.mastery_x=26]="mastery_x",_[_.max_hp=27]="max_hp",_[_.max_mp=28]="max_mp",_[_.max_hp_x=29]="max_hp_x",_[_.max_mp_x=30]="max_mp_x",_[_.max_hp_x_x=31]="max_hp_x_x",_[_.max_mp_x_x=32]="max_mp_x_x",_[_.normal_hp_recovery=33]="normal_hp_recovery",_[_.combat_hp_recovery=34]="combat_hp_recovery",_[_.normal_hp_recovery_rate=35]="normal_hp_recovery_rate",_[_.combat_hp_recovery_rate=36]="combat_hp_recovery_rate",_[_.normal_mp_recovery=37]="normal_mp_recovery",_[_.combat_mp_recovery=38]="combat_mp_recovery",_[_.normal_mp_recovery_rate=39]="normal_mp_recovery_rate",_[_.combat_mp_recovery_rate=40]="combat_mp_recovery_rate",_[_.self_recovery_rate=41]="self_recovery_rate",_[_.drain_hp_dam_rate=42]="drain_hp_dam_rate",_[_.drain_mp_dam_rate=43]="drain_mp_dam_rate",_[_.dam_reflection_rate=44]="dam_reflection_rate",_[_.char_attack_dam=47]="char_attack_dam",_[_.skill_effect_dam_addend=48]="skill_effect_dam_addend",_[_.attack_power_rate=49]="attack_power_rate",_[_.skill_damage_rate=50]="skill_damage_rate",_[_.attack_power_rate_x=51]="attack_power_rate_x",_[_.skill_damage_rate_x=52]="skill_damage_rate_x",_[_.cooldown_reduction=53]="cooldown_reduction",_[_.paralyzation_point_rate=54]="paralyzation_point_rate",_[_.def=55]="def",_[_.res=56]="res",_[_.def_x=57]="def_x",_[_.res_x=58]="res_x",_[_.def_x_x=59]="def_x_x",_[_.res_x_x=60]="res_x_x",_[_.critical_physical_inc_rate=65]="critical_physical_inc_rate",_[_.critical_magical_inc_rate=66]="critical_magical_inc_rate",_[_.def_pen_rate=67]="def_pen_rate",_[_.res_pen_rate=68]="res_pen_rate",_[_.physical_inc_rate=69]="physical_inc_rate",_[_.magical_inc_rate=70]="magical_inc_rate",_[_.self_shield_rate=71]="self_shield_rate",_[_.hit_rate=72]="hit_rate",_[_.dodge_rate=73]="dodge_rate",_[_.critical_hit_rate=74]="critical_hit_rate",_[_.critical_res_rate=75]="critical_res_rate",_[_.critical_dam_rate=76]="critical_dam_rate",_[_.attack_speed=77]="attack_speed",_[_.attack_speed_rate=78]="attack_speed_rate",_[_.move_speed=79]="move_speed",_[_.move_speed_rate=80]="move_speed_rate",_[_.prop_move_speed=81]="prop_move_speed",_[_.prop_move_speed_rate=82]="prop_move_speed_rate",_[_.vehicle_move_speed=83]="vehicle_move_speed",_[_.vehicle_move_speed_rate=84]="vehicle_move_speed_rate",_[_.ship_move_speed=85]="ship_move_speed",_[_.ship_move_speed_rate=86]="ship_move_speed_rate",_[_.fire_dam_rate=87]="fire_dam_rate",_[_.ice_dam_rate=88]="ice_dam_rate",_[_.electricity_dam_rate=89]="electricity_dam_rate",_[_.earth_dam_rate=91]="earth_dam_rate",_[_.dark_dam_rate=92]="dark_dam_rate",_[_.holy_dam_rate=93]="holy_dam_rate",_[_.elements_dam_rate=94]="elements_dam_rate",_[_.fire_res_rate=95]="fire_res_rate",_[_.ice_res_rate=96]="ice_res_rate",_[_.electricity_res_rate=97]="electricity_res_rate",_[_.earth_res_rate=99]="earth_res_rate",_[_.dark_res_rate=100]="dark_res_rate",_[_.holy_res_rate=101]="holy_res_rate",_[_.elements_res_rate=102]="elements_res_rate",_[_.self_cc_time_rate=105]="self_cc_time_rate",_[_.enemy_cc_time_rate=106]="enemy_cc_time_rate",_[_.identity_value1=107]="identity_value1",_[_.identity_value2=108]="identity_value2",_[_.identity_value3=109]="identity_value3",_[_.awakening_dam_rate=110]="awakening_dam_rate",_[_.item_drop_rate=111]="item_drop_rate",_[_.gold_rate=112]="gold_rate",_[_.exp_rate=113]="exp_rate",_[_.attack_power_addend=123]="attack_power_addend",_[_.attack_power_addend_2=124]="attack_power_addend_2",_[_.npc_species_humanoid_dam_rate=125]="npc_species_humanoid_dam_rate",_[_.npc_species_devil_dam_rate=126]="npc_species_devil_dam_rate",_[_.npc_species_substance_dam_rate=127]="npc_species_substance_dam_rate",_[_.npc_species_undead_dam_rate=128]="npc_species_undead_dam_rate",_[_.npc_species_plant_dam_rate=129]="npc_species_plant_dam_rate",_[_.npc_species_insect_dam_rate=130]="npc_species_insect_dam_rate",_[_.npc_species_spirit_dam_rate=131]="npc_species_spirit_dam_rate",_[_.npc_species_wild_beast_dam_rate=132]="npc_species_wild_beast_dam_rate",_[_.npc_species_mechanic_dam_rate=133]="npc_species_mechanic_dam_rate",_[_.npc_species_ancient_dam_rate=134]="npc_species_ancient_dam_rate",_[_.npc_species_god_dam_rate=135]="npc_species_god_dam_rate",_[_.npc_species_archfiend_dam_rate=136]="npc_species_archfiend_dam_rate",_[_.vitality=137]="vitality",_[_.ship_booter_speed=138]="ship_booter_speed",_[_.ship_wreck_speed_rate=139]="ship_wreck_speed_rate",_[_.island_speed_rate=140]="island_speed_rate",_[_.attack_power_sub_rate_1=141]="attack_power_sub_rate_1",_[_.attack_power_sub_rate_2=142]="attack_power_sub_rate_2",_[_.physical_inc_sub_rate_1=143]="physical_inc_sub_rate_1",_[_.physical_inc_sub_rate_2=144]="physical_inc_sub_rate_2",_[_.magical_inc_sub_rate_1=145]="magical_inc_sub_rate_1",_[_.magical_inc_sub_rate_2=146]="magical_inc_sub_rate_2",_[_.skill_damage_sub_rate_1=147]="skill_damage_sub_rate_1",_[_.skill_damage_sub_rate_2=148]="skill_damage_sub_rate_2",_[_.resource_recovery_rate=149]="resource_recovery_rate",_[_.weapon_dam=151]="weapon_dam",_[_.weapon_dam_x=152]="weapon_dam_x",_))(K||{});var i=require("tiny-typed-emitter");var T,A,P,F,$,j,H,z=class extends i.TypedEmitter{constructor(n,s,r=!0,o=!!process.env.DEV){super();C(this,F);C(this,j);R(this,"PartyStatusEffectRegistry");R(this,"LocalStatusEffectRegistry");C(this,T,void 0);C(this,A,void 0);C(this,P,void 0);R(this,"debug");R(this,"trace",!1);this.PartyStatusEffectRegistry=new Map,this.LocalStatusEffectRegistry=new Map,this.debug=o,G(this,T,n),G(this,A,s),G(this,P,r)}getStatusEffectRegistryForPlayer(n,s){let r=this.getPlayerRegistry(s),o=r.get(n);if(o)return o;let w=new Map;return r.set(n,w),w}hasStatusEffectRegistryForPlayer(n,s){return this.getPlayerRegistry(s).has(n)}getPlayerRegistry(n){switch(n){case 1:return this.LocalStatusEffectRegistry;case 0:return this.PartyStatusEffectRegistry;default:break}return this.LocalStatusEffectRegistry}RemoveLocalObject(n,s){let r=this.LocalStatusEffectRegistry.get(n);if(r)for(let[,o]of r)this.RemoveStatusEffect(n,o.instanceId,1,void 0,s);this.LocalStatusEffectRegistry.delete(n)}RemovePartyObject(n,s){let r=this.PartyStatusEffectRegistry.get(n);if(r)for(let[,o]of r)this.RemoveStatusEffect(n,o.instanceId,0,void 0,s);this.PartyStatusEffectRegistry.delete(n)}RegisterStatusEffect(n){let s=this.getStatusEffectRegistryForPlayer(n.targetId,n.type),r=s.get(n.instanceId);r?I(this,P)&&r.expirationTimer&&(clearTimeout(r.expirationTimer),r.expirationTimer=void 0):n.effectType===0&&this.emit("shieldApplied",n),s.set(n.instanceId,n),this.SetupStatusEffectTimeout(n)}HasAnyStatusEffect(n,s,r,o){if(!this.hasStatusEffectRegistryForPlayer(n,s))return!1;let w=this.getStatusEffectRegistryForPlayer(n,s);for(let[,u]of w)if(!(!I(this,P)&&!this.IsReplayStatusEffectValidElseRemove(u,o))){for(let v of r)if(v===u.statusEffectId)return!0}return!1}IsReplayStatusEffectValidElseRemove(n,s){return n.expireAt===void 0||n.expireAt.getTime()>s.getTime()?!0:(this.ExpireStatusEffectByTimeout(n),!1)}HasAnyStatusEffectFromParty(n,s,r,o,w){if(!this.hasStatusEffectRegistryForPlayer(n,s))return!1;let u=this.getStatusEffectRegistryForPlayer(n,s);for(let[,v]of u)if(!(!I(this,P)&&!this.IsReplayStatusEffectValidElseRemove(v,w))&&o.includes(v.statusEffectId)){let E=I(this,T).getPartyIdFromEntityId(v.sourceId);if(this.ValidForWholeRaid(v))return E!==void 0;if(E===r)return!0}return!1}RemoveStatusEffect(n,s,r,o,w){if(!this.hasStatusEffectRegistryForPlayer(n,r))return;let u=this.getStatusEffectRegistryForPlayer(n,r),v=u.get(s);return v&&(I(this,P)&&(clearTimeout(v.expirationTimer),v.expirationTimer=void 0),u.delete(s),o===4&&(I(this,P)||this.IsReplayStatusEffectValidElseRemove(v,w))&&this.RegisterValueUpdate(v,v.value,0)),v}GetStatusEffects(n,s,r,o){if(!this.hasStatusEffectRegistryForPlayer(n,s))return[];let w=this.getStatusEffectRegistryForPlayer(n,s);if(!I(this,P))for(let[,v]of w)this.IsReplayStatusEffectValidElseRemove(v,r);let u=[...w.values()];return o!==void 0?u.filter((v,E,x)=>v.sourceId===o):u}GetStatusEffectsFromParty(n,s,r,o){if(!this.hasStatusEffectRegistryForPlayer(n,s))return[];let w=this.getStatusEffectRegistryForPlayer(n,s);if(!I(this,P))for(let[,u]of w)this.IsReplayStatusEffectValidElseRemove(u,o);return[...w.values()].filter(u=>this.ValidForWholeRaid(u)?I(this,T).getPartyIdFromEntityId(u.sourceId)!==void 0:r===I(this,T).getPartyIdFromEntityId(u.sourceId))}Clear(n){let s=0;for(let[,o]of this.LocalStatusEffectRegistry){for(let[,w]of o)this.RemoveStatusEffect(w.targetId,w.instanceId,w.type,void 0,n);s+=o.size}let r=0;for(let[,o]of this.PartyStatusEffectRegistry){for(let[,w]of o)this.RemoveStatusEffect(w.targetId,w.instanceId,w.type,void 0,n);r+=o.size}this.trace&&console.log("On Clear SE in local",s,"in party",r),this.LocalStatusEffectRegistry.clear(),this.PartyStatusEffectRegistry.clear()}UpdateDuration(n,s,r,o){let u=this.getStatusEffectRegistryForPlayer(s,o).get(n);if(u){let v=r-u.timestamp;if(I(this,P)&&u.expirationTimer&&(this.trace&&console.log("Clearing timeout for",u.instanceId,"because of duration change"),clearTimeout(u.expirationTimer),u.expirationTimer=void 0),u.expireAt){let E=u.expireAt.getTime()+Number(v),x=E-u.pktTime.getTime();x>0?(this.trace&&console.log("Extending duration by",v,"ms","New timeout delay",x,"from",u.expireAt.toISOString(),"to",new Date(E).toISOString()),I(this,P)&&(u.expirationTimer=setTimeout(this.ExpireStatusEffectByTimeout.bind(this,u),x)),u.expireAt=new Date(E),u.timestamp=r):u.expireAt=void 0}}else this.debug&&console.error("Tried to update duration for SE with instanceId",n," on target",s,"but where is no such SE registered")}SyncStatusEffect(n,s,r,o,w){let u=N(this,j,H).call(this,s,w),v=u?0:1,E=u?s:r;if(!E)return;let S=this.getStatusEffectRegistryForPlayer(E,v).get(n);if(!S)return;let O=S.value;S.value=o,this.RegisterValueUpdate(S,O,o)}ValidForWholeRaid(n){return(n.buffCategory===3||n.buffCategory===1||n.buffCategory===2)&&n.category===1&&n.showType===1}SetupStatusEffectTimeout(n){if(n.expirationDelay>0&&n.expirationDelay<604800){let s=n.pktTime.getTime()>n.occurTime.getTime()?n.pktTime:n.occurTime,r=Math.ceil(n.expirationDelay*1e3),o=s.getTime()+r+z.TIMEOUT_DELAY_MS-n.pktTime.getTime();n.expireAt=new Date(n.pktTime.getTime()+o),this.trace&&console.log("Setting up statuseffect expiration time for",n.name,n.instanceId,"to",n.expireAt.toISOString(),"with delay",o),I(this,P)&&(n.expirationTimer=setTimeout(this.ExpireStatusEffectByTimeout.bind(this,n),o))}}ExpireStatusEffectByTimeout(n){this.debug&&console.error("Triggered timeout on",n.name,"with iid",n.instanceId),this.RemoveStatusEffect(n.targetId,n.instanceId,n.type,void 0,new Date)}RegisterValueUpdate(n,s,r){n.effectType===0&&this.emit("shieldChanged",n,s,r)}newPC(n,s,r){let o=N(this,j,H).call(this,n.pcStruct.characterId,s);o?this.RemovePartyObject(n.pcStruct.characterId,r):this.RemoveLocalObject(n.pcStruct.playerId,r);for(let w of n.pcStruct.statusEffectDatas)this.RegisterStatusEffect(this.buildStatusEffect(w,o?n.pcStruct.characterId:n.pcStruct.playerId,w.sourceId,o?0:1,r))}buildStatusEffect(n,s,r,o,w){let u=n.value?n.value.readUInt32LE():0,v=n.value?n.value.readUInt32LE(8):0,E=u<v?u:v,x=0,S=0,O=0,V="Unknown",M=1,L=I(this,A).skillBuff.get(n.statusEffectId);if(L){switch(V=L.name,L.category){case"debuff":x=1;break}switch(L.buffcategory){case"bracelet":S=1;break;case"etc":S=2;break;case"battleitem":S=3;break}switch(L.iconshowtype){case"all":O=1;break}switch(L.type){case"shield":M=0;break}}return{instanceId:n.effectInstanceId,sourceId:r,statusEffectId:n.statusEffectId,targetId:s,type:o,dbTarget:L?.target??"none",value:E,buffCategory:S,category:x,showType:O,expirationDelay:n.totalTime,expirationTimer:void 0,timestamp:n.endTick,expireAt:void 0,occurTime:n.occurTime,name:V,pktTime:w,effectType:M,stackCount:n.stackCount}}getStatusEffects(n,s,r,o){let w=[],u=[],v=N(this,F,$).call(this,n,r),E=this.GetStatusEffects(v?n.characterId:n.entityId,v?0:1,o,void 0);for(let x of E)u.push([x.statusEffectId,x.sourceId,x.stackCount]);if(s){let x=N(this,F,$).call(this,s,r),S=I(this,T).isEntityInParty(n.entityId),O=S?I(this,T).getPartyIdFromEntityId(n.entityId):void 0,V=S&&O?this.GetStatusEffectsFromParty(x?s.characterId:s.entityId,x?0:1,O,o):this.GetStatusEffects(x?s.characterId:s.entityId,x?0:1,o,n.entityId);for(let M of V)M.type===1&&M.category===1&&M.sourceId!==n.entityId&&M.dbTarget==="self"||w.push([M.statusEffectId,M.sourceId,M.stackCount])}return[u,w]}},X=z;T=new WeakMap,A=new WeakMap,P=new WeakMap,F=new WeakSet,$=function(n,s){if(n.entityType!==1)return!1;let r=n;return N(this,j,H).call(this,r.characterId,s)},j=new WeakSet,H=function(n,s){let r=I(this,T).isCharacterInParty(s),o=I(this,T).isCharacterInParty(n);if(r){if(!o||n===s)return!1;let w=I(this,T).getPartyIdFromCharacterId(s),u=I(this,T).getPartyIdFromCharacterId(n);return w===u}return!1},R(X,"TIMEOUT_DELAY_MS",1e3);var b=class{dbPath="";modulePath;enums;npc;PCData;skill;skillBuff;skillEffect;skillFeature;combatEffect;elixir;esther;itemSet;statQueryFilter;constructor(h="./meter-core/data"){this.modulePath=h,this.enums=new Map,this.npc=new Map,this.PCData=new Map,this.skill=new Map,this.skillBuff=new Map,this.skillEffect=new Map,this.skillFeature=new Map,this.combatEffect=new Map,this.elixir={option:new Map,set:new Map},this.esther=[],this.itemSet={items:new Map,seteffects:new Map},this.statQueryFilter={zone:new Map,raid:new Map}}processEnumData(h){for(let[n,s]of Object.entries(h)){let r=new Map;for(let[o,w]of Object.entries(s))r.set(o,w);this.enums.set(n,r)}}processNpcData(h){for(let n of Object.values(h))this.npc.set(n.id,n)}processPCData(h){for(let[n,s]of Object.entries(h))this.PCData.set(parseInt(n),s)}processSkillData(h){for(let n of Object.values(h))this.skill.set(n.id,n)}processSkillBuffData(h){for(let n of Object.values(h))this.skillBuff.set(n.id,n)}processSkillBuffEffectData(h){for(let n of Object.values(h))this.skillEffect.set(n.id,n)}processSkillFeature(h){for(let n of Object.values(h)){let s=new Map;for(let r of Object.values(n.tripods))s.set(r.key,r);this.skillFeature.set(n.skillid,s)}}processCombatEffectData(h){for(let n of Object.values(h))this.combatEffect.set(n.id,n)}processElixir(h){for(let[n,s]of Object.entries(h.option))this.elixir.option.set(Number(n),s);for(let[n,s]of Object.entries(h.set)){let r=new Map;for(let[o,w]of Object.entries(s))r.set(Number(o),w);this.elixir.set.set(Number(n),r)}}processEsther(h){this.esther=Object.values(h)}processItemSet(h){for(let[n,s]of Object.entries(h)){let r=new Map;for(let[o,w]of Object.entries(s)){let u=new Map;for(let[v,E]of Object.entries(w.value))u.set(parseInt(v),E);r.set(parseInt(o),u);for(let v of Object.values(w.itemids))this.itemSet.items.set(v,{setname:n,level:parseInt(o)})}this.itemSet.seteffects.set(n,r)}}procesStatQueryFilter(h){for(let[n,s]of Object.entries(h.zone))this.statQueryFilter.zone.set(Number(n),s);for(let[n,s]of Object.entries(h.raid))this.statQueryFilter.raid.set(Number(n),s)}getNpcName(h){return this.npc.get(h)?.name||""}getClassName(h){return this.PCData.get(h)||""}getSkillName(h){return this.skill.get(h)?.name||""}getSkillClassId(h){return this.skill.get(h)?.classid||0}getSkillEffectComment(h){return this.skillEffect.get(h)?.comment||""}getSkillEffectDirectionalMask(h){return this.skillEffect.get(h)?.directionalmask||0}getSkillEsther(h){for(let n of this.esther)if(n.skills.includes(h))return n}getNpcEsther(h){for(let n of this.esther)if(n.npcs.includes(h))return n}getStatusEffectHeaderData(h){let n=this.skillBuff.get(h);if(!n||n.iconshowtype==="none")return;let s;n.buffcategory==="ability"&&[501,502,503,504,505].includes(n.uniquegroup)?s="dropsofether":s=n.buffcategory;let r={target:n.target==="none"?0:n.target==="self"?2:1,category:n.category,buffcategory:s,bufftype:this.getStatusEffectBuffTypeFlags(n),uniquegroup:n.uniquegroup,source:{name:n.name,desc:n.desc,icon:n.icon}};if(s==="classskill"||s==="identity"){let o;if(n.sourceskill?.[0])o=this.skill.get(n.sourceskill[0]),o&&(r.source.skill=o);else{let w=Math.floor(h/100)*10;if(o=this.skill.get(w),!o){let u=Math.floor(n.uniquegroup/100)*10;o=this.skill.get(u)}o&&(r.source.skill=o)}o&&(r.source.skill=o)}else if(s==="ability"&&n.uniquegroup!==0){let o;if(n.sourceskill?.[0])o=this.skill.get(n.sourceskill[0]),o&&(r.source.skill=o);else{let w=Math.floor(h/100)*10;if(o=this.skill.get(w),!o){let u=Math.floor(n.uniquegroup/100)*10;o=this.skill.get(u)}}o&&(r.source.skill=o)}else s==="set"&&n.setname&&(r.source.setname=n.setname);return r}getStatusEffectBuffTypeFlags(h){let n=0;return["weaken_defense","weaken_resistance","skill_damage_amplify","beattacked_damage_amplify","skill_damage_amplify_attack","directional_attack_amplify","instant_stat_amplify","attack_power_amplify","instant_stat_amplify_by_contents"].includes(h.type)?n|=1:["move_speed_down","all_speed_down"].includes(h.type)?n|=8:["reset_cooldown"].includes(h.type)?n|=128:["change_ai_point","ai_point_amplify"].includes(h.type)?n|=256:["increase_identity_gauge"].includes(h.type)&&(n|=64),h.passiveoption.forEach(s=>{let r=J[s.type];if(s.type==="stat"){let o=K[s.keystat];[20,26,54].includes(o)&&(n|=256),[18,24,53].includes(o)&&(n|=128),[28,30,32,37,38,39,40,149].includes(o)&&(n|=64),[6,10,27,29,31,33,34,35,36,41,42,137].includes(o)&&(n|=16),(55<=o&&o<=70||[19,25].includes(o))&&(h.category==="buff"&&s.value>=0||h.category==="debuff"&&s.value<=0?n|=1:n|=32),79<=o&&o<=84&&(n|=8),[77,78,18,24].includes(o)&&(n|=4),[74,15,21].includes(o)&&(n|=2),(141<=o&&o<=148||87<=o&&o<=94||[3,4,5,7,8,9,47,49,50,51,52,72,73,76,110,123,151].includes(o))&&(h.category==="buff"&&s.value>=0||h.category==="debuff"&&s.value<=0?n|=1:n|=32)}else if(6===r)n|=2;else if([5,29,34,7,8].includes(r))h.category==="buff"&&s.value>=0||h.category==="debuff"&&s.value<=0?n|=1:n|=32;else if([27,35].includes(r))n|=128;else if([26,25].includes(r))n|=64;else if(4===r){let o=this.combatEffect.get(s.keyindex);if(!o)return;o.effects.forEach(w=>{w.actions.forEach(u=>{let v=W[u.type];[1,2,4,5,6,19,20,16].includes(v)?n|=1:3===v&&(n|=2)})})}}),n}getStatPairMap(h){let n=new Map;return h.forEach(s=>{n.set(s.statType,s.value)}),n}isCombatEffectConditionsValid({effect:h,self:n,target:s,caster:r,skill:o,hitOption:w,targetCount:u}){let v=!0;return h.conditions.forEach(E=>{if(!v)return;let x=Q[E.actor];switch(Y[E.type]){case 21:(!u||u!==E.arg)&&(v=!1);break;case 1:(!o||o.id===E.arg)&&(v=!1);break;case 16:x===1?(!n||n.entityType!==1)&&(v=!1):x===2?(!s||s.entityType!==1)&&(v=!1):x===3?(!r||r.entityType!==1)&&(v=!1):v=!1;break;case 22:(!o||!o.identitycategory||Z[o.identitycategory]!=E.arg)&&(v=!1);break;case 13:(!s||![2,3].includes(s.entityType)||!s.pushimmune)&&(v=!1);break;case 15:v=!1;break;case 11:v=!1;break;case 12:v=!1;break;case 25:(!o||!o.groups||!o.groups.includes(E.arg))&&(v=!1);break;case 2:if(x===1)(!n||Number((n.stats.get(1)??0n)/(n.stats.get(27)??0n))>=E.arg/100)&&(v=!1);else if(x===2)(!s||Number((s.stats.get(1)??0n)/(s.stats.get(27)??0n))>=E.arg/100)&&(v=!1);else if(x===3)(!r||Number((r.stats.get(1)??0n)/(r.stats.get(27)??0n))>=E.arg/100)&&(v=!1);else{v=!1;break}break;case 34:x===2&&s&&[2,3].includes(s.entityType)?s.balanceLevel>E.arg&&(v=!1):v=!1;break;case 6:if(x===2)if(s&&[2,3].includes(s.entityType)){let S=B[s.grade];(!S||S>E.arg)&&(v=!1)}else v=!1;else v=!1;break;case 7:if(x===2)if(s&&[2,3].includes(s.entityType)){let S=B[s.grade];(!S||S<E.arg)&&(v=!1)}else v=!1;else v=!1;break;case 27:x===1?(!n||n.entityType!==1||n.stance!==E.arg)&&(v=!1):v=!1;break;case 24:(!w||!(w+1&E.arg))&&(v=!1);break;default:v=!1;break}}),v}isSupportClassId(h){return h===105||h===204||h===602}isBattleItem(h,n){let s=this.skillEffect.get(h)?.itemcategory;switch(n){case"attack":return s==="useup_battle_item_common_attack";case"buff":return s==="useup_battle_item_common_buff";case"function":return s==="useup_battle_item_common_function";default:return typeof s=="string"}}getBattleItemName(h){return this.skillEffect.get(h)?.itemname||""}loadDbs(h){this.dbPath=h,this.processEnumData(JSON.parse((0,D.readFileSync)((0,a.join)(h,"Enums.json"),"utf-8"))),this.processNpcData(JSON.parse((0,D.readFileSync)((0,a.join)(h,"Npc.json"),"utf-8"))),this.processPCData(JSON.parse((0,D.readFileSync)((0,a.join)(h,"PCData.json"),"utf-8"))),this.processSkillData(JSON.parse((0,D.readFileSync)((0,a.join)(h,"Skill.json"),"utf-8"))),this.processSkillBuffData(JSON.parse((0,D.readFileSync)((0,a.join)(h,"SkillBuff.json"),"utf-8"))),this.processSkillBuffEffectData(JSON.parse((0,D.readFileSync)((0,a.join)(h,"SkillEffect.json"),"utf-8"))),this.processSkillFeature(JSON.parse((0,D.readFileSync)((0,a.join)(h,"SkillFeature.json"),"utf-8"))),this.processCombatEffectData(JSON.parse((0,D.readFileSync)((0,a.join)(h,"CombatEffect.json"),"utf-8"))),this.processElixir(JSON.parse((0,D.readFileSync)((0,a.join)(h,"Elixir.json"),"utf-8"))),this.processEsther(JSON.parse((0,D.readFileSync)((0,a.join)(h,"Esther.json"),"utf-8"))),this.processItemSet(JSON.parse((0,D.readFileSync)((0,a.join)(h,"ItemSet.json"),"utf-8"))),this.procesStatQueryFilter(JSON.parse((0,D.readFileSync)((0,a.join)(h,"StatQueryFilter.json"),"utf-8")))}};0&&(module.exports={MeterData});
