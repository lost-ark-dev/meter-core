import{a as oa}from"../chunk-ZGEJ7KGT.mjs";import{$ as qa,A as Ea,B as va,C as Ta,D as Ra,E as Da,F as Aa,G as ka,H as La,I as ha,J as Ca,K as Ka,L as Ma,M as wa,N as Wa,O as Oa,P as ja,Q as Ba,R as Fa,S as Ua,T as Za,U as Va,V as _a,W as Ha,X as Ga,Y as za,Z as Ya,_ as $a,a as aa,aa as Ja,b as ia,ba as Qa,c as ra,ca as Xa,d as na,da as ti,e as sa,ea as ei,f as fa,fa as oi,g as ua,ga as ai,h as ma,ha as ii,i as la,ia as ri,j as ya,k as ca,ka as ni,l as pa,m as i,n as r,o as da,p as ga,q as Sa,r as l,s as y,t as p,u as d,v as Na,w as Ia,x as ba,y as Pa,z as xa}from"../chunk-DCR2ONF5.mjs";import"../chunk-K7C7TUE5.mjs";import{TypedEmitter as Zi}from"tiny-typed-emitter";function S(t,e){let o={};return o.Points=t.u16(),o.Id=t.u32(),o.Level=t.u8(),o}function N(t,e){t.u16(e.Points),t.u32(e.Id),t.u8(e.Level)}function Tt(t,e){let o={};return o.abilityDataList=t.array(t.u16(),()=>S(t,e),100),o}function Rt(t,e){t.array(e.abilityDataList,{maxLen:100,lenType:"u16"},o=>{N(t,o)})}var P=0,Dt="AbilityChangeNotify";function si(t,e){let o={};return o.FeatureType=t.u16(),o.Level=t.u32(),o}function fi(t,e){t.u16(e.FeatureType),t.u32(e.Level)}function At(t,e){let o={};return o.activeAbilityList=t.array(t.u16(),()=>si(t,e),60),o.ObjectId=t.u64(),o}function kt(t,e){t.array(e.activeAbilityList,{maxLen:60,lenType:"u16"},o=>{fi(t,o)}),t.u64(e.ObjectId)}var x=1,Lt="ActiveAbilityNotify";function ht(t,e){let o={};return o.ObjectId=t.u64(),o.addonSkillFeatureList=t.array(t.u16(),()=>{let a={};return a.addonSkillFeatureIdList=t.array(t.u16(),()=>t.u32(),5),a.SkillId=t.u32(),a},200),o}function Ct(t,e){t.u64(e.ObjectId),t.array(e.addonSkillFeatureList,{maxLen:200,lenType:"u16"},o=>{t.array(o.addonSkillFeatureIdList,{maxLen:5,lenType:"u16"},a=>{t.u32(a)}),t.u32(o.SkillId)})}var E=2,Kt="AddonSkillFeatureChangeNotify";function Mt(t,e){let o={};return o.ParalyzationMaxPoint=t.u32(),o.Type=t.u8(),o.ObjectId=t.u64(),o.ParalyzationPoint=t.u32(),o}function wt(t,e){t.u32(e.ParalyzationMaxPoint),t.u8(e.Type),t.u64(e.ObjectId),t.u32(e.ParalyzationPoint)}var v=4,Wt="BlockSkillStateNotify";function Ot(t,e){let o={};return o.SourceId=t.u64(),o.TargetId=t.u64(),o.Type=t.u32(),o}function jt(t,e){t.u64(e.SourceId),t.u64(e.TargetId),t.u32(e.Type)}var T=5,Bt="CounterAttackNotify";function Ft(t,e){let o={};return o.SourceId=t.u64(),o.TargetId=t.u64(),o}function Ut(t,e){t.u64(e.SourceId),t.u64(e.TargetId)}var R=6,Zt="DeathNotify";function Vt(t,e){let o={};return o.abilityDataList=t.array(t.u16(),()=>S(t,e),100),o}function _t(t,e){t.array(e.abilityDataList,{maxLen:100,lenType:"u16"},o=>{N(t,o)})}var D=7,Ht="InitAbility";function Gt(t,e){let o={};return o.PlayerId=t.u64(),o}function zt(t,e){t.u64(e.PlayerId)}var A=8,Yt="InitEnv";function n(t,e){let o={};return o.SkillLevel=t.u8(),o.OccurTime=ya(t,e),o.StatusEffectId=t.u32(),o.SourceId=t.u64(),o.TotalTime=t.u32(),o.EndTick=t.u64(),t.bool()&&(o.Value=t.bytes(16)),o.EffectInstanceId=t.u32(),o}function s(t,e){t.u8(e.SkillLevel),ca(t,e.OccurTime),t.u32(e.StatusEffectId),t.u64(e.SourceId),t.u32(e.TotalTime),t.u64(e.EndTick),t.bool(e.Value!==void 0)&&t.bytes(e.Value,{length:16}),t.u32(e.EffectInstanceId)}function $t(t,e){let o={};return o.statPair=t.array(t.u16(),()=>{let a={};return a.StatType=t.u8(),a.Value=i(t,e),a},152),o.Name=t.string(20),o.Level=t.u16(),o.statusEffectDatas=t.array(t.u16(),()=>n(t,e),80),o.CharacterId=t.u64(),o.GearLevel=t.u32(),o.PlayerId=t.u64(),o.ClassId=t.u16(),o}function qt(t,e){t.array(e.statPair,{maxLen:152,lenType:"u16"},o=>{t.u8(o.StatType),r(t,o.Value)}),t.string(e.Name,20),t.u16(e.Level),t.array(e.statusEffectDatas,{maxLen:80,lenType:"u16"},o=>{s(t,o)}),t.u64(e.CharacterId),t.u32(e.GearLevel),t.u64(e.PlayerId),t.u16(e.ClassId)}var k=9,Jt="InitPC";function Qt(t,e){let o={};return o.statPair=t.array(t.u16(),()=>{let a={};return a.StatType=t.u8(),a.Value=i(t,e),a},152),o.statusEffectDatas=t.array(t.u16(),()=>n(t,e),80),o.addonSkillFeatureList=t.array(t.u16(),()=>{let a={};return a.addonSkillFeatureIdList=t.array(t.u16(),()=>t.u32(),5),a.SkillId=t.u32(),a},200),o.abilityDataList=t.array(t.u16(),()=>S(t,e),100),o}function Xt(t,e){t.array(e.statPair,{maxLen:152,lenType:"u16"},o=>{t.u8(o.StatType),r(t,o.Value)}),t.array(e.statusEffectDatas,{maxLen:80,lenType:"u16"},o=>{s(t,o)}),t.array(e.addonSkillFeatureList,{maxLen:200,lenType:"u16"},o=>{t.array(o.addonSkillFeatureIdList,{maxLen:5,lenType:"u16"},a=>{t.u32(a)}),t.u32(o.SkillId)}),t.array(e.abilityDataList,{maxLen:100,lenType:"u16"},o=>{N(t,o)})}var L=10,te="InitLocal";function ee(t,e){let o={};return o.Account_CharacterId1=t.u64(),o.ServerAddr=t.string(256),o.Account_CharacterId2=t.u64(),o}function oe(t,e){t.u64(e.Account_CharacterId1),t.string(e.ServerAddr,256),t.u64(e.Account_CharacterId2)}var h=11,ae="MigrationExecute";function pt(t,e){let o={};return o.SpawnIndex=t.u32(),o.ObjectId=t.u64(),t.bool()&&(o.TransitIndex=t.u32()),o.Position=l(t,e),o.statusEffectDatas=t.array(t.u16(),()=>n(t,e),80),o.DirectionYaw=p(t,e),o.statPair=t.array(t.u16(),()=>{let a={};return a.StatType=t.u8(),a.Value=i(t,e),a},152),o.TypeId=t.u32(),o}function dt(t,e){t.u32(e.SpawnIndex),t.u64(e.ObjectId),t.bool(e.TransitIndex!==void 0)&&t.u32(e.TransitIndex),y(t,e.Position),t.array(e.statusEffectDatas,{maxLen:80,lenType:"u16"},o=>{s(t,o)}),d(t,e.DirectionYaw),t.array(e.statPair,{maxLen:152,lenType:"u16"},o=>{t.u8(o.StatType),r(t,o.Value)}),t.u32(e.TypeId)}function re(t,e){let o={};return o.NpcStruct=pt(t,e),o}function ne(t,e){dt(t,e.NpcStruct)}var C=12,se="NewNpc";function fe(t,e){let o={};return o.PublishReason=t.u8(),o.OwnerId=t.u64(),o.NpcData=pt(t,e),o}function ue(t,e){t.u8(e.PublishReason),t.u64(e.OwnerId),dt(t,e.NpcData)}var K=13,me="NewNpcSummon";function li(t,e){let o={};return o.GearLevel=t.u32(),o.statPair=t.array(t.u16(),()=>{let a={};return a.StatType=t.u8(),a.Value=i(t,e),a},152),o.Name=t.string(20),o.Heading=p(t,e),o.CharacterId=t.u64(),o.PlayerId=t.u64(),o.addonSkillFeatureList=t.array(t.u16(),()=>{let a={};return a.addonSkillFeatureIdList=t.array(t.u16(),()=>t.u32(),5),a.SkillId=t.u32(),a},200),o.ClassId=t.u16(),o.Level=t.u16(),o.statusEffectDatas=t.array(t.u16(),()=>n(t,e),80),o}function yi(t,e){t.u32(e.GearLevel),t.array(e.statPair,{maxLen:152,lenType:"u16"},o=>{t.u8(o.StatType),r(t,o.Value)}),t.string(e.Name,20),d(t,e.Heading),t.u64(e.CharacterId),t.u64(e.PlayerId),t.array(e.addonSkillFeatureList,{maxLen:200,lenType:"u16"},o=>{t.array(o.addonSkillFeatureIdList,{maxLen:5,lenType:"u16"},a=>{t.u32(a)}),t.u32(o.SkillId)}),t.u16(e.ClassId),t.u16(e.Level),t.array(e.statusEffectDatas,{maxLen:80,lenType:"u16"},o=>{s(t,o)})}function le(t,e){let o={};return o.PCStruct=li(t,e),o}function ye(t,e){yi(t,e.PCStruct)}var M=14,ce="NewPC";function ci(t,e){let o={};return o.tripodIndex=Pa(t,e),o.ChainSkillEffect=t.u32(),o.SkillEffect=t.u32(),o.SkillId=t.u32(),o.TargetObjectId=t.u64(),o.OwnerId=t.u64(),o.SkillLevel=t.u8(),o.ProjectileId=t.u64(),o.tripodLevel=Ea(t,e),o}function pi(t,e){xa(t,e.tripodIndex),t.u32(e.ChainSkillEffect),t.u32(e.SkillEffect),t.u32(e.SkillId),t.u64(e.TargetObjectId),t.u64(e.OwnerId),t.u8(e.SkillLevel),t.u64(e.ProjectileId),va(t,e.tripodLevel)}function pe(t,e){let o={};return o.projectileInfo=ci(t,e),o}function de(t,e){pi(t,e.projectileInfo)}var w=15,ge="NewProjectile";function Se(t,e){let o={};return o.Enable=t.bool(),o.ParalyzationPoint=t.u32(),o.DecreasePoint=t.u32(),o.ParalyzationMaxPoint=t.u32(),o.NoHitCheckTime=t.u32(),o.HitCheckTime=t.u32(),o.ObjectId=t.u64(),o}function Ne(t,e){t.bool(e.Enable),t.u32(e.ParalyzationPoint),t.u32(e.DecreasePoint),t.u32(e.ParalyzationMaxPoint),t.u32(e.NoHitCheckTime),t.u32(e.HitCheckTime),t.u64(e.ObjectId)}var W=16,Ie="ParalyzationStateNotify";function di(t,e){let o={};return o.MaxHp=i(t,e),o.CharacterId=t.u64(),o.Position=l(t,e),o.TransitIndex=t.u32(),o.CurHp=i(t,e),o.CharacterLevel=t.u16(),o.GearLevel=t.u32(),o.ZoneId=t.u32(),o.PartyMemberNumber=t.u8(),o.Name=t.string(20),o.ZoneInstId=t.u64(),o.WorldId=t.u8(),o.ClassId=t.u16(),o.Auths=t.u8(),o}function gi(t,e){r(t,e.MaxHp),t.u64(e.CharacterId),y(t,e.Position),t.u32(e.TransitIndex),r(t,e.CurHp),t.u16(e.CharacterLevel),t.u32(e.GearLevel),t.u32(e.ZoneId),t.u8(e.PartyMemberNumber),t.string(e.Name,20),t.u64(e.ZoneInstId),t.u8(e.WorldId),t.u16(e.ClassId),t.u8(e.Auths)}function be(t,e){let o={};return o.RaidInstanceId=t.u32(),o.LootGrade=t.u32(),o.PartyType=t.u8(),o.PartyInstanceId=t.u32(),o.PartyLootType=t.u8(),o.MemberDatas=t.array(t.u16(),()=>di(t,e),40),o}function Pe(t,e){t.u32(e.RaidInstanceId),t.u32(e.LootGrade),t.u8(e.PartyType),t.u32(e.PartyInstanceId),t.u8(e.PartyLootType),t.array(e.MemberDatas,{maxLen:40,lenType:"u16"},o=>{gi(t,o)})}var O=17,xe="PartyInfo";function Ee(t,e){let o={};return o.PartyLeaveType=t.u8(),o.PartyInstanceId=t.u32(),o.Name=t.string(20),o}function ve(t,e){t.u8(e.PartyLeaveType),t.u32(e.PartyInstanceId),t.string(e.Name,20)}var j=18,Te="PartyLeaveResult";function Re(t,e){let o={};return o.ObjectId=t.u64(),o.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),o.Unk0_m=t.u8(),o}function De(t,e){t.u64(e.ObjectId),t.array(e.passiveStatusEffectList,{maxLen:10,lenType:"u16"},o=>{t.u32(o)}),t.u8(e.Unk0_m)}var B=19,Ae="PartyPassiveStatusEffectAddNotify";function ke(t,e){let o={};return o.ObjectId=t.u64(),o.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),o}function Le(t,e){t.u64(e.ObjectId),t.array(e.passiveStatusEffectList,{maxLen:10,lenType:"u16"},o=>{t.u32(o)})}var F=20,he="PartyPassiveStatusEffectRemoveNotify";function Ce(t,e){let o={};return o.CharacterId=t.u64(),o.statusEffectDatas=t.array(t.u16(),()=>n(t,e),80),o.PlayerIdOnRefresh=t.u64(),o}function Ke(t,e){t.u64(e.CharacterId),t.array(e.statusEffectDatas,{maxLen:80,lenType:"u16"},o=>{s(t,o)}),t.u64(e.PlayerIdOnRefresh)}var U=21,Me="PartyStatusEffectAddNotify";function we(t,e){let o={};return o.CharacterId=t.u64(),o.statusEffectIds=t.array(t.u16(),()=>t.u32(),80),o.Reason=t.u8(),o}function We(t,e){t.u64(e.CharacterId),t.array(e.statusEffectIds,{maxLen:80,lenType:"u16"},o=>{t.u32(o)}),t.u8(e.Reason)}var Z=22,Oe="PartyStatusEffectRemoveNotify";function je(t,e){let o={};return o.PartyInstanceId=t.u32(),o.RaidInstanceId=t.u32(),o.CharacterId=t.u64(),o}function Be(t,e){t.u32(e.PartyInstanceId),t.u32(e.RaidInstanceId),t.u64(e.CharacterId)}var V=23,Fe="PartyStatusEffectResultNotify";function Ue(t,e){let o={};return o.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),o}function Ze(t,e){t.array(e.passiveStatusEffectList,{maxLen:10,lenType:"u16"},o=>{t.u32(o)})}var _=24,Ve="PassiveStatusEffectAddNotify";function _e(t,e){let o={};return o.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),o}function He(t,e){t.array(e.passiveStatusEffectList,{maxLen:10,lenType:"u16"},o=>{t.u32(o)})}var H=25,Ge="PassiveStatusEffectRemoveNotify";function ze(t,e){return{}}function Ye(t,e){}var G=26,$e="RaidBossKillNotify";function qe(t,e){return{}}function Je(t,e){}var z=27,Qe="RaidResult";function Si(t,e){let o={};return o.UnpublishReason=t.u8(),o.ObjectId=t.u64(),o}function Ni(t,e){t.u8(e.UnpublishReason),t.u64(e.ObjectId)}function Xe(t,e){let o={};return o.unpublishedObjects=t.array(t.u16(),()=>Si(t,e),200),o}function to(t,e){t.array(e.unpublishedObjects,{maxLen:200,lenType:"u16"},o=>{Ni(t,o)})}var Y=28,eo="RemoveObject";function gt(t,e){let o={};return o.Modifier=t.u8(),o.TargetId=t.u64(),o.DamageType=t.u8(),t.bool()&&(o.DamageAttr=t.u8()),o.CurHp=i(t,e),o.Unk3_m=t.u16(),o.MaxHp=i(t,e),o.Damage=i(t,e),o}function St(t,e){t.u8(e.Modifier),t.u64(e.TargetId),t.u8(e.DamageType),t.bool(e.DamageAttr!==void 0)&&t.u8(e.DamageAttr),r(t,e.CurHp),t.u16(e.Unk3_m),r(t,e.MaxHp),r(t,e.Damage)}function bi(t,e){let o={};return o.SkillMoveOptionData=Ba(t,e),o.Destination=l(t,e),o.Position=l(t,e),o.skillDamageEvent=gt(t,e),o}function Pi(t,e){Fa(t,e.SkillMoveOptionData),y(t,e.Destination),y(t,e.Position),St(t,e.skillDamageEvent)}function oo(t,e){let o={};return o.SkillId=t.u32(),o.SkillDamageAbnormalMoveEvents=t.array(t.u16(),()=>bi(t,e),50),o.SkillEffectId=t.u32(),o.SourceId=t.u64(),o}function ao(t,e){t.u32(e.SkillId),t.array(e.SkillDamageAbnormalMoveEvents,{maxLen:50,lenType:"u16"},o=>{Pi(t,o)}),t.u32(e.SkillEffectId),t.u64(e.SourceId)}var $=29,io="SkillDamageAbnormalMoveNotify";function ro(t,e){let o={};return o.SkillLevel=t.u8(),o.SourceId=t.u64(),o.SkillId=t.u32(),o.SkillDamageEvents=t.array(t.u16(),()=>gt(t,e),50),o.SkillEffectId=t.u32(),o}function no(t,e){t.u8(e.SkillLevel),t.u64(e.SourceId),t.u32(e.SkillId),t.array(e.SkillDamageEvents,{maxLen:50,lenType:"u16"},o=>{St(t,o)}),t.u32(e.SkillEffectId)}var q=30,so="SkillDamageNotify";function fo(t,e){let o={};return o.SourceId=t.u64(),o.SkillId=t.u32(),o.Stage=t.u8(),o}function uo(t,e){t.u64(e.SourceId),t.u32(e.SkillId),t.u8(e.Stage)}var J=31,mo="SkillStageNotify";function lo(t,e){let o={};return o.SourceId=t.u64(),o.CurDirectionYaw=p(t,e),o.NewDirectionYaw=p(t,e),o.AimTargetPosition=l(t,e),t.bool()&&(o.PitchRotation=p(t,e)),t.bool()&&(o.AiStateId=t.u32()),o.CurPosition=l(t,e),t.bool()&&(o.Unk1_m=t.u32()),o.SkillLevel=t.u8(),o.NewPosition=l(t,e),o.SkillId=t.u32(),o.SkillOptionData=_a(t,e),o}function yo(t,e){t.u64(e.SourceId),d(t,e.CurDirectionYaw),d(t,e.NewDirectionYaw),y(t,e.AimTargetPosition),t.bool(e.PitchRotation!==void 0)&&d(t,e.PitchRotation),t.bool(e.AiStateId!==void 0)&&t.u32(e.AiStateId),y(t,e.CurPosition),t.bool(e.Unk1_m!==void 0)&&t.u32(e.Unk1_m),t.u8(e.SkillLevel),y(t,e.NewPosition),t.u32(e.SkillId),Ha(t,e.SkillOptionData)}var Q=32,co="SkillStartNotify";function po(t,e){let o={};return o.statusEffectData=n(t,e),o.ObjectId=t.u64(),o.New=t.bool(),o}function go(t,e){s(t,e.statusEffectData),t.u64(e.ObjectId),t.bool(e.New)}var X=34,So="StatusEffectAddNotify";function No(t,e){let o={};return o.statusEffectIds=t.array(t.u16(),()=>t.u32(),80),o.ObjectId=t.u64(),o.Reason=t.u8(),o}function Io(t,e){t.array(e.statusEffectIds,{maxLen:80,lenType:"u16"},o=>{t.u32(o)}),t.u64(e.ObjectId),t.u8(e.Reason)}var tt=35,bo="StatusEffectRemoveNotify";function Po(t,e){let o={};return o.EffectInstanceId=t.u32(),o.TargetId=t.u64(),o.ExpirationTick=t.u64(),o}function xo(t,e){t.u32(e.EffectInstanceId),t.u64(e.TargetId),t.u64(e.ExpirationTick)}var et=36,Eo="StatusEffectDurationNotify";function vo(t,e){let o={};return o.ObjectId=t.u64(),o.EffectInstanceId=t.u32(),o.CharacterId=t.u64(),o.Value=t.u32(),o}function To(t,e){t.u64(e.ObjectId),t.u32(e.EffectInstanceId),t.u64(e.CharacterId),t.u32(e.Value)}var ot=37,Ro="StatusEffectSyncDataNotify";function Do(t,e){let o={};return o.Step=t.u32(),o.Unk2_m=t.bool(),o.TriggerId=t.u32(),o}function Ao(t,e){t.u32(e.Step),t.bool(e.Unk2_m),t.u32(e.TriggerId)}var at=38,ko="TriggerBossBattleStatus";function Lo(t,e){let o={};return o.PacketResultCode=t.u32(),o.TriggerId=t.u32(),o.Unk0_m=t.u32(),o.InvolvedPCs=t.array(t.u16(),()=>t.u64(),40),o}function ho(t,e){t.u32(e.PacketResultCode),t.u32(e.TriggerId),t.u32(e.Unk0_m),t.array(e.InvolvedPCs,{maxLen:40,lenType:"u16"},o=>{t.u64(o)})}var it=39,Co="TriggerFinishNotify";function Ko(t,e){let o={};return o.TriggerId=t.u32(),o.TriggerSignalType=t.u32(),o.SourceId=t.u64(),o.InvolvedPCs=t.array(t.u16(),()=>t.u64(),40),o}function Mo(t,e){t.u32(e.TriggerId),t.u32(e.TriggerSignalType),t.u64(e.SourceId),t.array(e.InvolvedPCs,{maxLen:40,lenType:"u16"},o=>{t.u64(o)})}var rt=40,wo="TriggerStartNotify";function Wo(t,e){let o={};return o.MaxHp=i(t,e),o.CharacterId=t.u64(),o.Unk0_m=t.u32(),o.statusEffectDatas=t.array(t.u16(),()=>n(t,e),80),o.Position=t.u64(),o.CurHp=i(t,e),o}function Oo(t,e){r(t,e.MaxHp),t.u64(e.CharacterId),t.u32(e.Unk0_m),t.array(e.statusEffectDatas,{maxLen:80,lenType:"u16"},o=>{s(t,o)}),t.u64(e.Position),r(t,e.CurHp)}var nt=41,jo="TroopMemberUpdateMinNotify";function Bo(t,e){let o={};return o.IdentityGauge1=t.u32(),o.IdentityGauge2=t.u32(),o.IdentityGauge3=t.u32(),o.PlayerId=t.u64(),o}function Fo(t,e){t.u32(e.IdentityGauge1),t.u32(e.IdentityGauge2),t.u32(e.IdentityGauge3),t.u64(e.PlayerId)}var st=42,Uo="IdentityGaugeChangeNotify";function Zo(t,e){let o={};return o.ObjectId=t.u64(),o}function Vo(t,e){t.u64(e.ObjectId)}var ft=43,_o="ZoneObjectUnpublishNotify";function xi(t,e){let o={};return o.StackCount=t.u8(),o.Target=t.u8(),o.Id=t.u32(),o}function Ei(t,e){t.u8(e.StackCount),t.u8(e.Target),t.u32(e.Id)}function Ho(t,e){let o={};return o.zoneStatusEffectDataList=t.array(t.u16(),()=>xi(t,e),4),o}function Go(t,e){t.array(e.zoneStatusEffectDataList,{maxLen:4,lenType:"u16"},o=>{Ei(t,o)})}var ut=44,zo="ZoneStatusEffectAddNotify";function Yo(t,e){let o={};return o.StatusEffectId=t.u32(),o}function $o(t,e){t.u32(e.StatusEffectId)}var mt=45,qo="ZoneStatusEffectRemoveNotify";var Ti=new Map([[ra,[P]],[na,[x]],[sa,[E]],[fa,[v]],[ua,[T]],[ma,[R]],[la,[D]],[pa,[A]],[da,[k]],[ga,[L]],[Sa,[h]],[Na,[C]],[Ia,[K]],[ba,[M]],[Ta,[w]],[Ra,[W]],[Da,[O]],[Aa,[j]],[ka,[B]],[La,[F]],[ha,[U]],[Ca,[Z]],[Ka,[V]],[Ma,[_]],[wa,[H]],[Wa,[G]],[Oa,[z]],[ja,[Y]],[Ua,[$]],[Za,[q]],[Va,[J]],[Ga,[Q]],[za,[X]],[Ya,[tt]],[$a,[et]],[qa,[ot]],[Ja,[at]],[Qa,[it]],[Xa,[rt]],[ti,[nt]],[ei,[st]],[oi,[ft]],[ai,[ut]],[ii,[mt]]]);var Jo=new Map([[P,[Dt,Tt,Rt]],[x,[Lt,At,kt]],[E,[Kt,ht,Ct]],[v,[Wt,Mt,wt]],[T,[Bt,Ot,jt]],[R,[Zt,Ft,Ut]],[D,[Ht,Vt,_t]],[A,[Yt,Gt,zt]],[k,[Jt,$t,qt]],[L,[te,Qt,Xt]],[h,[ae,ee,oe]],[C,[se,re,ne]],[K,[me,fe,ue]],[M,[ce,le,ye]],[w,[ge,pe,de]],[W,[Ie,Se,Ne]],[O,[xe,be,Pe]],[j,[Te,Ee,ve]],[B,[Ae,Re,De]],[F,[he,ke,Le]],[U,[Me,Ce,Ke]],[Z,[Oe,we,We]],[V,[Fe,je,Be]],[_,[Ve,Ue,Ze]],[H,[Ge,_e,He]],[G,[$e,ze,Ye]],[z,[Qe,qe,Je]],[Y,[eo,Xe,to]],[$,[io,oo,ao]],[q,[so,ro,no]],[J,[mo,fo,uo]],[Q,[co,lo,yo]],[X,[So,po,go]],[tt,[bo,No,Io]],[et,[Eo,Po,xo]],[ot,[Ro,vo,To]],[at,[ko,Do,Ao]],[it,[Co,Lo,ho]],[rt,[wo,Ko,Mo]],[nt,[jo,Wo,Oo]],[st,[Uo,Bo,Fo]],[ft,[_o,Zo,Vo]],[ut,[zo,Ho,Go]],[mt,[qo,Yo,$o]]]);var lt=class{time;#e;#t;#o;#a;constructor(...e){if(e.length===5){let[o,a,f,u,m]=e;this.#t=o,this.time=f,this.#e=a,this.#o=u,this.#a=m}else if(e.length===3){let[o,a,f]=e;this.#t=Buffer.alloc(0),this.time=new Date,this.#e=a,this.#o=()=>o,this.#a=f}else throw new Error("[meter-core/logger/parser] - LogEvent<T>: Invalid constructor arguments")}#i;get parsed(){if(!this.#i)try{this.#i=this.#o(new aa(this.#t))}catch(e){console.error(`[meter-core/logger/parser] - parsed - ${e}`);return}return this.#i}#r;get serialized(){if(!this.#r)try{if(!this.parsed)return;let e=new ia;e.skip(Xo),this.#a(e,this.parsed);let o=e.value;o.writeUint16LE(o.length,Di),o.writeUint16LE(this.#e,It),o.writeUintLE(+new Date,Qo,bt),this.#r=e.value}catch(e){console.error(`[meter-core/logger/parser] - serialized - ${e}`);return}return this.#r}},yt=6,Ri=2,Di=0,Nt=2,It=Di+Ri,bt=6,Qo=It+Nt,Xo=Ri+Nt+bt;import{createWriteStream as Vi}from"fs";import{createReadStream as _i}from"fs";var Pt=class extends Zi{},Ai=class extends Pt{#e;#t;constructor(e,o,a){super(),this.#e=o,a&&(this.#t=Vi(a,{highWaterMark:0}));let f=Buffer.allocUnsafe(yt);f.writeUIntLE(0,0,yt),this.#t?.write(f),e.on("*",this.handlePkt.bind(this))}handlePkt(e,o,a,f){try{let u=ri.get(o),m=Ti.get(o);if(u&&m){let[c]=m,[ta,xt]=u,b=Jo.get(c);if(b){let[ct,Hi,hi]=b,ea=new ni(Buffer.from(e),o,a,!!f,this.#e,xt).parsed;if(!ea)return;let Et=new lt(ea,c,hi);this.emit(ct,Et),this.emit("*",ct,Et),this.appendLog(Et)}}}catch(u){console.error(u)}}appendLog(e){this.#t&&e.serialized&&this.#t.write(e.serialized)}},ki=class extends Pt{readLogByChunk(e){let o=new oa,a=_i(e),f=!1,u;a.on("data",m=>{if(u===void 0){if(u=this.readVersion(m),u>0){a.destroy();return}m=m.subarray(yt)}o.write(m);let c;for(;c=o.read();)this.readLogChunk(c,u)}).on("end",()=>{f=!0,this.emit("fileEnd","end")}).on("close",()=>{f||this.emit("fileEnd","closed")})}readLogChunk(e,o){try{if(e.length<8)return!1;let a=e.readUIntLE(It,Nt),f=new Date(e.readUintLE(Qo,bt)),u=e.subarray(Xo),m=Jo.get(a);if(m){let[c,ta,xt]=m,b=new lt(u,a,new Date(f),ct=>ta(ct,o),xt);this.emit(c,b),this.emit("*",c,b)}}catch(a){console.error(a)}}readVersion(e){return e.readUintLE(0,yt)}};export{Ai as LiveLogger,Pt as Logger,ki as ReplayLogger};
