import{TypedEmitter as $n}from"tiny-typed-emitter";var n=class{b;o;constructor(t){this.b=t,this.o=0}skip(t=0){this.o+=t}bool(){return this.u8()===1}u8(){return this.b.readUint8(this.o++)}i8(){return this.b.readInt8(this.o++)}u16(){let t=this.b.readUint16LE(this.o);return this.o+=2,t}i16(){let t=this.b.readInt16LE(this.o);return this.o+=2,t}u32(){let t=this.b.readUint32LE(this.o);return this.o+=4,t}i32(){let t=this.b.readInt32LE(this.o);return this.o+=4,t}f32(){let t=this.b.readFloatLE(this.o);return this.o+=4,t}u64(){let t=this.b.readBigUint64LE(this.o);return this.o+=8,t}i64(){let t=this.b.readBigInt64LE(this.o);return this.o+=8,t}string(t){let o=this.u16();if(o<=t){o=o*2;let u=this.b.toString("utf16le",this.o,this.o+o);return this.o+=o,u}return""}bytes(t=0,o,u){if(o&&t>o)return Buffer.alloc(0);u&&(t=t*u);let a=Buffer.from(this.b.subarray(this.o,this.o+t));return this.o+=t,a}array(t,o,u){return u&&t>u?[]:new Array(t).fill(void 0).map(o)}},jo=class{b;o;constructor(t=65535){this.b=Buffer.allocUnsafe(t),this.o=0}get value(){return this.b.subarray(0,this.o)}skip(t=0){this.o+=t}bool(t=!1){return this.u8(t?1:0),t}u8(t=0){this.b.writeUInt8(t,this.o++)}i8(t=0){this.b.writeInt8(t,this.o++)}u16(t=0){this.o=this.b.writeUInt16LE(t,this.o)}i16(t=0){this.o=this.b.writeInt16LE(t,this.o)}u32(t=0){this.o=this.b.writeUInt32LE(t,this.o)}i32(t=0){this.o=this.b.writeInt32LE(t,this.o)}f32(t=0){this.o=this.b.writeFloatLE(t,this.o)}u64(t=0n){this.o=this.b.writeBigUInt64LE(BigInt(t),this.o)}i64(t=0n){this.o=this.b.writeBigInt64LE(BigInt(t),this.o)}string(t="",o=0){this.u16(t.length),t.length<=o&&(this.o+=this.b.write(t,this.o,"utf16le"))}bytes(t=Buffer.alloc(0),o={}){if(o.maxLen){let u=o.multiplier??1;if(t.length%u)throw new Error(`Error writing bytes, chunkSize should be a multiple of intut value size, got ${t.length}%${u}`);let a=t.length/u;if(a>o.maxLen)throw new Error(`Error writing bytes, input value size exceeded maxLen, got ${a} > ${o.maxLen}`);if(!o.lenType)throw new Error(`Error writing bytes, invalid lenType when writing chunks, got ${o.lenType}`);this[o.lenType](a)}else if(o.length&&t.length!==o.length)throw new Error(`Error writing bytes, input value size doesn't match opts.length, ${t.length} !== ${o.lenType}`);this.o+=t.copy(this.b,this.o)}array(t=[],o,u){if(t===void 0||t.length>o.maxLen){this[o.lenType](0);return}this[o.lenType](t.length),t.forEach(u)}};function k(e){let t={};return t.level=e.u8(),t.id=e.u32(),t.points=e.u16(),t}function h(e){let t=new n(e),o={};return o.abilityDataList=t.array(t.u16(),()=>k(t),100),o}var B="PKTAbilityChangeNotify",A=15874;function Uo(e){let t={};return t.level=e.u32(),t.featureType=e.u16(),t}function L(e){let t=new n(e),o={};return o.objectId=t.u64(),o.activeAbilityList=t.array(t.u16(),()=>Uo(t),60),o}var w="PKTActiveAbilityNotify",C=3507;function M(e){let t=new n(e),o={};return o.objectId=t.u64(),o.addonSkillFeatureList=t.array(t.u16(),()=>{let u={};return u.addonSkillFeatureIdList=t.array(t.u16(),()=>t.u32(),5),u.skillId=t.u32(),u},200),o.addonFeatureIdList=t.bytes(t.u16(),200,4),o}var F="PKTAddonSkillFeatureChangeNotify",j=40396;function U(e){let t=new n(e),o={};return o.packetResultCode=t.u32(),o.unk1_m=t.bytes(t.u32(),688),o}var O="PKTAuthTokenResult",q=9743;function z(e){let t=new n(e),o={};return o.objectId=t.u64(),o.paralyzationMaxPoint=t.u32(),t.skip(1),o.paralyzationPoint=t.u32(),o.type=t.u8(),o}var V="PKTBlockSkillStateNotify",Z=43294;function H(e){let t=new n(e),o={};return o.type=t.u32(),o.targetId=t.u64(),o.sourceId=t.u64(),t.skip(2),o}var G="PKTCounterAttackNotify",W=50518;function Y(e){let t=new n(e),o={};return o.targetId=t.u64(),o.unk2_m=t.u32(),t.bool()&&(o.damageAttr=t.u8()),o.effectId=t.u32(),o.unk0_m=t.u64(),o.directionYaw=t.u16(),t.bool()&&(o.deathType=t.u8()),o.durabilityDecrement=t.u8(),o.sourceId=t.u64(),t.bool()&&(o.abnormalStatusType=t.u8()),o}var $="PKTDeathNotify",J=47719;var gn=[0,31,28,31,30,31,30,31,31,30,31,30,31];function Kn(e){return!(e%4||!(e%100)&&e%400)}function Sn(e,t,o){if(e>99){if(e<1752||e==1752&&(t<9||t==9&&o<<14))return!1}else e+=1900;return o>0&&t<=12&&(o<=gn[t]||o==29&&t==2&&Kn(e))}function Q(e){let t=Number(e&0xffffffffn),o=Number(e>>32n&0xffffffffn),u=t&4095,a=(t&65535)>>12,f=t>>16&31;Sn(u,a,f)||(u=a=f=0);let m=t>>21&31,P=t>>26&63,x=o&63,E=o>>6&16383;return m<24&&P<60&&x<60&&E<1e3||(m=24,P=x=E=0),new Date(Date.UTC(u<=99?u+1900:u,a-1,f,m,P,x,E))}function Oo(e){let t=0n;return t|=BigInt(e.getUTCMilliseconds())<<38n,t|=BigInt(e.getUTCSeconds())<<32n,t|=BigInt(e.getUTCMinutes())<<26n,t|=BigInt(e.getUTCHours())<<21n,t|=BigInt(e.getUTCDate())<<16n,t|=BigInt(e.getUTCMonth()+1)<<12n,t|=BigInt(e.getUTCFullYear()<2e3?e.getUTCFullYear()-1900:e.getUTCFullYear()),t}function d(e,t=0){let o=e.u16();return(o&4095)<2079?(e.o-=2,Q(e.i64())):Q(BigInt(o)&0xfffn|0x11000n)}function pu(e,t=Q(0x1181fn)){t.getUTCFullYear()>=2079?e.u16(Number(Oo(t)&0xffffn)):e.i64(Oo(t))}function l(e){let t={};return e.bool()&&(t.unk1_0=e.u8()),t.id=e.u32(),t.expireTime=d(e),t.itemTint=e.bytes(e.u16(),5,14),t.unk5=e.u8(),t.level=e.u16(),t.slot=e.u16(),t}function X(e){let t=new n(e),o={};return o.unk0=t.u32(),o.equipItemDataList=t.array(t.u16(),()=>l(t),33),o.unk2=t.u32(),o.objectId=t.u64(),o}var tt="PKTEquipChangeNotify",et=37232;function ot(e){let t=new n(e),o={};return o.objectId=t.u64(),o.equipLifeToolDataList=t.array(t.u16(),()=>l(t),9),o}var nt="PKTEquipLifeToolChangeNotify",ut=36609;function rt(e){let t=new n(e),o={};return o.stance=t.u8(),o.objectId=t.u64(),t.skip(2),o}var at="PKTIdentityStanceChangeNotify",it=13939;function st(e){let t=new n(e),o={};return o.abilityDataList=t.array(t.u16(),()=>k(t),100),o.struct_137=t.bytes(t.u16(),353,48),o}var ft="PKTInitAbility",mt=37053;function ct(e){let t=new n(e),o={};return o.lostArkDateTime=d(t),o.struct_597=t.string(128),o.unk2=t.u8(),o.struct_31=t.array(t.u16(),()=>{let u={};return u.versionString=t.string(64),u.struct_597=t.string(128),u.struct_580=t.string(32),u},64),o.unk4=t.u32(),o.playerId=t.u64(),o.unk6=t.u64(),o.unk7=t.u32(),o}var pt="PKTInitEnv",dt=15335;function s(e){let t={};return t.sourceId=e.u64(),t.statusEffectId=e.u32(),t.totalTime=e.f32(),t.effectInstanceId=e.u32(),t.endTick=e.u64(),t.struct_443=e.bytes(e.u16(),8,7),e.bool()&&(t.unk7_0=e.u64()),t.occurTime=d(e),t.skillLevel=e.u8(),e.bool()&&(t.value=e.bytes(16)),t.stackCount=e.u8(),t}function In(e){if(e.length===0)return 0n;if(e.length>8)throw new Error("Value is too large");let t=Buffer.alloc(8);return e.copy(t),t.readBigInt64LE()}function r(e,t=0){let o=e.u8(),u=e.bytes(o>>1&7),a=In(u)<<4n|BigInt(o>>4);return o&1?-a:a}function Su(e,t=0n){let o=Buffer.alloc(8),u=t<0n;o.writeBigInt64LE((u?-t:t)>>4n);let a=0;for(let[f,m]of o.entries())m!=0&&(a=f+1);if(a>7)throw new Error("Value is too large");e.u8(Number((u?-t:t)&0xfn)<<4|(a&7)<<1|(u?1:0)),e.bytes(o.subarray(0,a),{length:a})}function T(e){let t={};return t.unk0=e.u16(),t.unk1=r(e),t.unk2=r(e),t.unk3=e.u8(),t.unk4=e.u8(),t.unk5=e.u8(),t.unk6=e.u64(),t}function bt(e){let t=new n(e),o={};return o.unk0=t.u64(),o.name=t.string(20),o.gearLevel=t.f32(),o.unk3=t.u8(),o.unk4=t.u8(),o.unk5=t.u32(),o.unk6=t.u8(),o.unk7=t.u8(),o.statusEffectDatas=t.array(t.u16(),()=>s(t),80),o.unk9=t.u16(),o.unk10=t.u8(),o.unk11=t.u8(),o.struct_368=t.string(7),o.unk13=t.u32(),o.struct_105=t.bytes(t.u16(),64),o.unk15=t.u8(),o.unk16=t.u64(),o.unk17=t.bytes(35),o.unk18=t.u8(),o.struct_226=t.bytes(t.u16(),3,17),o.unk20=t.u64(),o.unk21=t.u32(),o.unk22=t.u8(),o.classId=t.u16(),o.unk24=t.bytes(120),o.unk25=t.u64(),o.unk26=t.u8(),o.unk27=t.u8(),o.unk28=t.u8(),o.unk29=t.bytes(25),o.unk30=t.u8(),o.unk31=t.u64(),t.bool()&&(o.unk33_0=t.u32()),o.unk34=t.u32(),o.unk35=t.u8(),o.level=t.u16(),o.unk37=t.u8(),o.unk38=t.u32(),o.unk39=t.u8(),o.unk40=t.u16(),o.unk41=t.u32(),o.unk42=t.u8(),o.unk43=t.u32(),o.playerId=t.u64(),o.unk45=t.u32(),o.characterId=t.u64(),o.unk47=t.u16(),o.unk48=t.u8(),o.unk49=t.u16(),o.unk50=t.u32(),o.unk51=t.u32(),o.unk52=t.u8(),o.periodUpdateStatDataList=t.array(t.u16(),()=>T(t),5),o.unk54=t.u8(),o.struct_342=t.bytes(t.u16(),104,30),o.unk56=t.u32(),o.statPair=t.array(t.u16(),()=>{let u={};return u.statType=t.u8(),u.value=r(t),u},153),o}var yt="PKTInitPC",kt=54555;function qo(e){let t={},o=e.u16();return o===1&&(t.unk1_0=e.bytes(o)),t}function zo(e){let t={};return t.unk0=e.u8(),t.unk1=e.u8(),t.unk2=e.u8(),t.unk3=e.u8(),t.unk4=e.u32(),t.unk5=e.u32(),t.struct_145=qo(e),t.struct_146=e.bytes(e.u16(),3,9),t}function Vo(e){let t={};return t.struct_393=e.bytes(e.u16(),2,10),t.unk1=e.u32(),t.struct_147=e.bytes(e.u16(),10,9),t.struct_237=e.bytes(e.u16(),10,18),t.unk4=e.u32(),t.struct_235=e.array(e.u16(),()=>zo(e),3),t.unk6=e.u32(),t.unk7=e.u32(),t.unk8=e.u8(),t.unk9=e.u32(),t.struct_258=e.bytes(e.u16(),2,9),t.unk11=e.u32(),t.unk12=e.u16(),t.unk13=e.u64(),t}function Zo(e){let t={};return t.struct_99=e.bytes(e.u32(),51),t.unk1=e.u8(),t.unk2=e.bytes(3),t.unk3=e.u8(),t.unk4=e.u8(),t.unk5=e.u16(),t.unk6=e.u16(),t.unk7=e.u16(),t}function Ho(e){let t={};return e.bool()&&(t.struct_751=Zo(e)),t.unk2=e.bytes(e.u16(),7),t.unk3=e.bytes(e.u16(),7),t.unk4=e.u8(),t}function Go(e){let t={};return t.unk0=e.u32(),t.unk1=e.u32(),e.bool()&&(t.unk3_0=e.bytes(9)),t.unk4=e.u32(),t.struct_271=e.bytes(e.u16(),10,29),t.unk6=e.u8(),t.unk7=e.u32(),e.bool()&&(t.unk1_0=e.u32(),t.struct_190=e.bytes(e.u16(),5,30),t.unk1_2=e.u32()),e.bool()&&(t.struct_231=e.bytes(e.u16(),2,32)),t.struct_438=e.bytes(e.u16(),3,10),t.struct_269=e.bytes(e.u16(),3,21),t.itemTint=e.bytes(e.u16(),5,14),t.unk14=e.u32(),e.bool()&&(t.unk16_0=e.bytes(10)),e.bool()&&(t.struct_792=Ho(e)),t.struct_495=e.bytes(e.u16(),3,7),t.unk20=e.u32(),t}function S(e){let t={};return t.isDead=e.bool(),t.npcId=e.u32(),t}function Yo(e){let t={};return t.unk0=e.u8(),t.bossKillDataList=e.array(e.u16(),()=>S(e),3),t.struct_1=e.array(e.u16(),()=>{let o={};return o.unk1_0_0=e.u32(),o.struct_524=e.bytes(e.u16(),10),o},3),t.unk3=e.u8(),t.unk4=e.u32(),t}function $o(e){let t={};return t.unk0=e.u8(),t.struct_495=e.bytes(e.u16(),3,7),t.unk2=e.u8(),t.unk3=e.u8(),t.struct_234=e.bytes(e.u16(),5,7),t.struct_24=e.array(e.u16(),()=>{let o={};return o.unk1_0_0=e.u8(),o.unk1_0_1=e.u16(),o.struct_233=e.string(2),o},20),t}function Jo(e){let t={},o=e.u8();return o===1&&(t.struct_667=Vo(e)),o===2&&(t.unk2_0=e.u8(),t.struct_2=e.array(e.u16(),()=>{let u={};return u.struct_524=e.bytes(e.u16(),10),u.unk1_0_1=e.u32(),u.unk1_0_2=e.u8(),u.unk1_0_3=e.u8(),u},3),t.struct_134=e.bytes(e.u16(),3,6)),o===3&&(t.unk3_0=e.bytes(26)),o===4&&(t.unk4_0=e.bytes(e.u16(),10,13),t.unk4_1=e.bytes(e.u16(),10,13),t.unk4_2=e.u32()),o===5&&(t.struct_666=Go(e)),o===6&&(t.struct_612=Yo(e)),o===7&&(t.unk7_0=e.bytes(9)),o===8&&(t.struct_659=$o(e)),o===9&&(t.unk9_0=e.u8()),t}function Qo(e){let t={};return e.u32()>0&&(t.serialNumber=e.u64(),t.id=e.u32(),t.level=e.u16(),t.slot=e.u16(),t.durability=e.u32(),t.unk1_6_m=e.u32(),t.flag=e.u32(),t.expireTime=d(e),t.lockUpdateTime=d(e),e.bool()&&(t.unk1_10_0=e.bytes(9)),t.unk1_11=e.u8(),t.unk1_12=e.u8(),t.unk1_13=e.u32(),t.struct_567=Jo(e),t.unk1_15=e.u32()),t}function Tt(e){let t=new n(e),o={};return o.itemDataList=t.array(t.u16(),()=>Qo(t),80),o.storageType=t.u8(),o}var Pt="PKTInitItem",xt=31937;function Xo(e){let t={};return t.unk0=e.u32(),e.bool()&&(t.unk2_0=e.u32()),t.unk3=e.u32(),e.bool()&&(t.unk5_0=e.bytes(9)),t.unk6=e.u32(),t}function gt(e){let t=new n(e),o={};return o.unk0=t.u8(),o.struct_226=t.bytes(t.u16(),3,17),o.unk2=t.u64(),o.struct_422=t.array(t.u16(),()=>Xo(t),300),o.statPair=t.array(t.u16(),()=>{let u={};return u.statType=t.u8(),u.value=r(t),u},153),o.unk5=t.u32(),o.unk6=t.u8(),o.statusEffectDatas=t.array(t.u16(),()=>s(t),80),o.unk8=t.u64(),o.struct_137=t.bytes(t.u16(),353,48),o.addonFeatureIdList=t.bytes(t.u16(),200,4),o.unk11=t.u8(),t.bool()&&(o.unk13_0=t.u32()),o.abilityDataList=t.array(t.u16(),()=>k(t),100),o.struct_342=t.bytes(t.u16(),104,30),o.addonSkillFeatureList=t.array(t.u16(),()=>{let u={};return u.addonSkillFeatureIdList=t.array(t.u16(),()=>t.u32(),5),u.skillId=t.u32(),u},200),o}var Kt="PKTInitLocal",St=12070;function It(e){let t=new n(e),o={};return o.account_CharacterId1=t.u64(),o.serverAddr=t.string(256),o.account_CharacterId2=t.u64(),o.unk3=t.u32(),o}var Nt="PKTMigrationExecute",_t=44024;function tn(e){let t={};return t.equipItemDataList=e.array(e.u16(),()=>l(e),33),t.lostArkString=e.string(20),t.lookData=e.bytes(e.u32(),512),t.unk3=e.u8(),t.unk4=e.u64(),t.unk5=e.u8(),t.unk6=e.u64(),t.unk7=e.u8(),t.unk8=e.u16(),t}function p(e,t=0){return e.u16()*(2*Math.PI)/65536}function Bu(e,t=0){e.u16(Math.round(t*65536/(2*Math.PI))%65536)}function Dt(e){return e>>20===1?-((~e>>>0)+1&2097151):e}function i(e,t=0){let o=e.u64();return{x:Dt(Number(o&0x1fffffn)),y:Dt(Number(o>>21n&0x1fffffn)),z:Dt(Number(o>>42n&0x1fffffn))}}function Au(e,t={x:0,y:0,z:0}){e.u64(BigInt(Math.round(t.x??0)>>>0&2097151)|BigInt(Math.round(t.y??0)>>>0&2097151)<<21n|BigInt(Math.round(t.z??0)>>>0&2097151)<<42n)}function N(e){let t={};return t.statusEffectDatas=e.array(e.u16(),()=>s(e),80),e.bool()&&(t.unk2_0=e.u8()),e.bool()&&(t.balanceLevel=e.u16()),t.periodUpdateStatDataList=e.array(e.u16(),()=>T(e),5),e.bool()&&(t.unk7_0=e.u32()),t.unk8=e.u8(),e.bool()&&(t.unk10_0=e.u8()),e.bool()&&(t.unk12_0=e.u32()),e.bool()&&(t.struct_337=e.bytes(e.u16(),11,9)),e.bool()&&(t.unk16_0=e.u8()),e.bool()&&(t.transitIndex=e.u32()),t.typeId=e.u32(),e.bool()&&(t.unk21_0=e.u32()),t.unk22=e.u8(),e.bool()&&(t.unk24_0=e.u32()),t.unk25=e.u8(),t.unk26=e.u8(),t.directionYaw=p(e),t.objectId=e.u64(),e.bool()&&(t.unk30_0=e.u8()),e.bool()&&(t.unk32_0=e.u8()),e.bool()&&(t.unk34_0=e.u8()),t.unk35=e.u8(),e.bool()&&(t.unk37_0=e.u64()),t.position=i(e),t.spawnIndex=e.u32(),e.bool()&&(t.unk41_0=e.u8()),e.bool()&&(t.struct_735=tn(e)),t.unk44=e.u8(),e.bool()&&(t.unk46_0=e.u16()),e.bool()&&(t.struct_270=e.bytes(e.u16(),12,12)),t.statPair=e.array(e.u16(),()=>{let o={};return o.statType=e.u8(),o.value=r(e),o},153),t.level=e.u16(),t}function vt(e){let t=new n(e),o={};return o.unk0=t.u8(),t.bool()&&(o.unk1_0=t.string(20),o.unk1_1=t.string(20)),o.npcStruct=N(t),t.bool()&&(o.unk4_0=t.u8()),t.bool()&&(o.unk6_0=t.u64()),o}var Et="PKTNewNpc",Rt=17051;function ht(e){let t=new n(e),o={};return o.npcData=N(t),t.skip(12),o.ownerId=t.u64(),t.skip(23),o.publishReason=t.u8(),o}var Bt="PKTNewNpcSummon",At=9395;function on(e){let t={};return t.unk0=e.u32(),e.bool()&&(t.unk2_0=e.bytes(12)),t.unk3=e.u32(),t.unk4=e.bytes(12),t}function nn(e){let t={};return e.bool()&&(t.grabbedData=e.bytes(12)),t.guildName=e.string(20),t.characterId=e.u64(),t.avatarHide=e.u8(),t.position=i(e),t.unk7_m=e.u32(),t.level=e.u16(),t.unk4_m=e.u32(),t.heading=p(e),t.worldId=e.u8(),t.addonSkillFeatureList=e.array(e.u16(),()=>{let o={};return o.addonSkillFeatureIdList=e.array(e.u16(),()=>e.u32(),5),o.skillId=e.u32(),o},200),t.guildId=e.u64(),t.avgItemLevel=e.f32(),t.equipLifeToolDataList=e.array(e.u16(),()=>l(e),9),t.unk15=e.u64(),t.name=e.string(20),t.addonFeatureIdList=e.bytes(e.u16(),200,4),t.statusEffectDatas=e.array(e.u16(),()=>s(e),80),t.statPair=e.array(e.u16(),()=>{let o={};return o.statType=e.u8(),o.value=r(e),o},153),t.unk23_m=e.u8(),t.secondHonorTitleId=e.u16(),t.unk0_m=e.bytes(5),t.unk23=e.u32(),t.unk1_m=e.u8(),t.unk45_m=e.u32(),t.playerId=e.u64(),t.lookData=e.bytes(e.u32(),512),t.unk5_m=e.u32(),t.firstHonorTitleId=e.u16(),t.periodUpdateStatDataList=e.array(e.u16(),()=>T(e),5),t.unk31=e.u8(),t.unk2_m=e.u8(),t.unk33=e.u32(),t.unk17_m=e.u8(),t.equipItemDataList=e.array(e.u16(),()=>l(e),33),t.unk36=e.u32(),t.rvRLevel=e.u16(),t.maxItemLevel=e.f32(),t.unk25_m=e.u8(),t.petId=e.u32(),t.unk32_m=e.u8(),t.identityData=e.bytes(25),t.unk29_m=e.u8(),t.unk44=e.u8(),t.classId=e.u16(),t.unk46=e.u8(),t}function Lt(e){let t=new n(e),o={};return t.bool()&&(o.unk5_0_m=t.bytes(20)),t.bool()&&(o.unk1_0=t.u64(),o.unk1_1=t.u32(),o.itemTint=t.bytes(t.u16(),5,14)),t.bool()&&(o.unk4_0_m=t.bytes(12)),o.unk0_m=t.u8(),t.bool()&&(o.trackMoveInfo=on(t)),t.bool()&&(o.unk3_0_m=t.u32()),o.unk2_m=t.u8(),o.pcStruct=nn(t),t.bool()&&(o.struct_61=t.array(t.u16(),()=>{let u={};return u.itemTint=t.bytes(t.u16(),5,14),u.unk1_0_1=t.u32(),u.unk1_0_2=t.u64(),u},5)),o}var wt="PKTNewPC",Ct=7231;function _(e,t=0){return{first:e.u16(),second:e.u16(),third:e.u16()}}function un(e,t){e.u16(t.first),e.u16(t.second),e.u16(t.third)}function D(e,t=0){return{first:e.u8(),second:e.u8(),third:e.u8()}}function an(e,t){e.u8(t.first),e.u8(t.second),e.u8(t.third)}function fn(e){let t={};return t.unk0=e.u32(),t.tripodLevel=_(e),t.chainSkillEffect=e.u32(),t.unk3=e.u32(),t.unk4=e.u64(),t.unk5=e.u32(),t.ownerId=e.u64(),t.unk7=e.u8(),t.unk8=e.u16(),t.skillEffect=e.u32(),e.bool()&&(t.struct_337=e.bytes(e.u16(),11,9)),t.skillId=e.u32(),t.tripodIndex=D(e),t.projectileId=e.u64(),t.skillLevel=e.u8(),t.targetObjectId=e.u64(),t.unk17=e.u16(),t.unk18=e.u8(),e.bool()&&(t.unk20_0=e.u32()),e.bool()&&(t.unk22_0=e.u64()),t.unk23=e.u64(),t}function Mt(e){let t=new n(e),o={};return o.projectileInfo=fn(t),o}var Ft="PKTNewProjectile",jt=1647;function mn(e){let t={};return t.ownerId=e.u64(),t.skillId=e.u32(),t.position=i(e),t.unk3=e.u16(),t.unk4=e.u32(),t.unk5=e.u8(),t.skillEffect=e.u32(),t.objectId=e.u64(),t.unk8=e.u32(),t.unk9=e.u8(),t.unk10=e.u32(),t.unk11=e.u8(),e.bool()&&(t.struct_337=e.bytes(e.u16(),11,9)),t}function Ut(e){let t=new n(e),o={};return o.unk0=t.u8(),o.trapData=mn(t),o.unk2=t.u8(),o}var Ot="PKTNewTrap",qt=10128;function zt(e){let t=new n(e),o={};return o.paralyzationPoint=t.u32(),o.decreasePoint=t.u32(),t.skip(1),o.noHitCheckTime=t.u32(),t.skip(1),o.enable=t.bool(),o.objectId=t.u64(),o.hitCheckTime=t.u32(),o.paralyzationMaxPoint=t.u32(),o}var Vt="PKTParalyzationStateNotify",Zt=2363;function cn(e){let t={};return t.unk0=e.u8(),t.zoneInstId=e.u64(),t.name=e.string(20),t.characterLevel=e.u16(),t.maxHp=r(e),t.gearLevel=e.f32(),t.characterId=e.u64(),t.position=i(e),t.auths=e.u8(),t.unk9=e.u8(),t.curHp=r(e),t.worldId=e.u8(),t.unk12=e.u8(),t.unk13=e.u8(),t.unk14=e.u8(),t.partyMemberNumber=e.u8(),t.zoneId=e.u32(),t.unk17=e.u16(),t.transitIndex=e.u32(),t.classId=e.u16(),t}function Ht(e){let t=new n(e),o={};return o.partyInstanceId=t.u32(),o.raidInstanceId=t.u32(),o.partyLootType=t.u8(),o.lootGrade=t.u32(),o.partyType=t.u8(),o.memberDatas=t.array(t.u16(),()=>cn(t),40),o}var Gt="PKTPartyInfo",Wt=941;function Yt(e){let t=new n(e),o={};return o.partyInstanceId=t.u32(),o.partyLeaveType=t.u8(),o.name=t.string(20),o}var $t="PKTPartyLeaveResult",Jt=28645;function Qt(e){let t=new n(e),o={};return o.unk0_m=t.u8(),o.objectId=t.u64(),o.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),o}var Xt="PKTPartyPassiveStatusEffectAddNotify",te=44618;function ee(e){let t=new n(e),o={};return o.objectId=t.u64(),o.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),o}var oe="PKTPartyPassiveStatusEffectRemoveNotify",ne=21010;function ue(e){let t=new n(e),o={};return o.unk0=t.u64(),o.characterId=t.u64(),o.playerIdOnRefresh=t.u64(),o.unk3=t.u8(),o.statusEffectDatas=t.array(t.u16(),()=>s(t),80),o}var re="PKTPartyStatusEffectAddNotify",ae=29227;function ie(e){let t=new n(e),o={};return o.characterId=t.u64(),o.statusEffectIds=t.array(t.u16(),()=>t.u32(),80),o.reason=t.u8(),o.unk3=t.u64(),o}var se="PKTPartyStatusEffectRemoveNotify",fe=52833;function me(e){let t=new n(e),o={};return t.skip(1),o.raidInstanceId=t.u32(),t.skip(21),o.partyInstanceId=t.u32(),o.characterId=t.u64(),t.skip(4),o}var ce="PKTPartyStatusEffectResultNotify",pe=58067;function de(e){let t=new n(e),o={};return o.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),o}var le="PKTPassiveStatusEffectAddNotify",be=50673;function ye(e){let t=new n(e),o={};return o.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),o}var ke="PKTPassiveStatusEffectRemoveNotify",Te=5480;function Pe(e){let t=new n(e),o={};return o.initBraveHeartCount=t.u8(),o.unk0_m=t.bool(),o.unk4_m=t.u64(),o.unk5_m=t.u64(),o.raidResult=t.u8(),o.unk1_m=t.bool(),o.startTick=t.u64(),o.unk6_m=t.u64(),o.unk11_m=t.bool(),o.totalTime=t.u64(),o.bossKillDataList=t.array(t.u16(),()=>S(t),3),o.braveHeartCount=t.u8(),o.raidId=t.u32(),o.endTick=t.u64(),o}var xe="PKTRaidBegin",ge=26077;function Ke(e){let t=new n(e),o={};return t.skip(1),o.typeId=t.u32(),t.skip(2),o}var Se="PKTRaidBossKillNotify",Ie=33189;function Ne(e){let t=new n(e),o={};return o.unk0=t.u64(),o.unk1=t.u64(),o.unk2=t.u8(),o.unk3=t.u64(),o.unk4=t.u8(),o.struct_52=t.array(t.u16(),()=>{let u={};return u.unk1_0_0=r(t),u.unk1_0_1=r(t),u.struct_530=t.bytes(t.u16(),3),u.unk1_0_3=t.u32(),u},3),o.raidResult=t.u8(),o.unk7=t.u64(),o}var _e="PKTRaidResult",De=29676;function pn(e){let t={};return t.objectId=e.u64(),t.unpublishReason=e.u8(),t}function ve(e){let t=new n(e),o={};return o.unpublishedObjects=t.array(t.u16(),()=>pn(t),200),o}var Ee="PKTRemoveObject",Re=36542;function he(e){let t=new n(e),o={};return t.skip(1),o.skillId=t.u32(),o.newDirectionYaw=p(t),o.cancelReason=t.u8(),o.caster=t.u64(),t.skip(1),o.newPosition=i(t),o}var Be="PKTSkillCancelNotify",Ae=54544;function Le(e){let t=new n(e),o={};return t.skip(1),o.skillId=t.u32(),t.skip(2),o.caster=t.u64(),o.skillLevel=t.u8(),o}var we="PKTSkillCastNotify",Ce=30918;function dn(e,t=0){let o={},u=e.u8();return u&1&&(o.moveTime=e.u32()),u&2&&(o.standUpTime=e.u32()),u&4&&(o.downTime=e.u32()),u&8&&(o.freezeTime=e.u32()),u&16&&(o.moveHeight=e.u32()),u&32&&(o.farmostDist=e.u32()),u&64&&(o.flag40=e.bytes(e.u16(),6)),o}function Kr(e,t){let o=(t.moveTime===void 0?0:1)|(t.standUpTime===void 0?0:2)|(t.downTime===void 0?0:4)|(t.freezeTime===void 0?0:8)|(t.moveHeight===void 0?0:16)|(t.farmostDist===void 0?0:32)|(t.flag40===void 0?0:64);e.u8(o),o&1&&e.u32(t.moveTime),o&2&&e.u32(t.standUpTime),o&4&&e.u32(t.downTime),o&8&&e.u32(t.freezeTime),o&16&&e.u32(t.moveHeight),o&32&&e.u32(t.farmostDist),o&64&&e.bytes(t.flag40,{maxLen:6,lenType:"u16"})}function v(e){let t={};return t.unk3_m=e.u16(),t.damageType=e.u8(),t.maxHp=r(e),t.modifier=e.u8(),e.bool()&&(t.damageAttr=e.u8()),t.curHp=r(e),t.damage=r(e),t.targetId=e.u64(),t}function bn(e){let t={};return t.skillMoveOptionData=dn(e),t.unk8_m=e.u16(),t.position=i(e),t.unk4_m=e.u16(),t.unk1_m=e.u8(),t.unk3_m=e.u16(),t.destination=i(e),t.skillDamageEvent=v(e),t.unk2_m=e.u64(),t}function Me(e){let t=new n(e),o={};return o.unk2_m=t.u32(),o.unk1_m=t.u8(),o.skillDamageAbnormalMoveEvents=t.array(t.u16(),()=>bn(t),50),o.sourceId=t.u64(),o.skillEffectId=t.u32(),o.skillId=t.u32(),o}var Fe="PKTSkillDamageAbnormalMoveNotify",je=24311;function Ue(e){let t=new n(e),o={};return t.bool()&&(o.unk1_0=t.u32()),t.bool()&&(o.skillEffectId=t.u32()),o.sourceId=t.u64(),o.skillLevel=t.u8(),o.skillId=t.u32(),o.skillDamageEvents=t.array(t.u16(),()=>v(t),50),o}var Oe="PKTSkillDamageNotify",qe=28204;function ze(e){let t=new n(e),o={};return o.stage=t.u8(),t.skip(4),o.skillId=t.u32(),t.skip(16),o.sourceId=t.u64(),t.skip(19),o}var Ve="PKTSkillStageNotify",Ze=18388;function yn(e,t=0){let o={},u=e.u8();return u&1&&(o.layerIndex=e.u8()),u&2&&(o.startStageIndex=e.u8()),u&4&&(o.transitIndex=e.u32()),u&8&&(o.stageStartTime=e.u32()),u&16&&(o.farmostDistance=e.u32()),u&32&&(o.tripodIndex=D(e)),u&64&&(o.tripodLevel=_(e)),o}function Er(e,t){let o=(t.layerIndex===void 0?0:1)|(t.startStageIndex===void 0?0:2)|(t.transitIndex===void 0?0:4)|(t.stageStartTime===void 0?0:8)|(t.farmostDistance===void 0?0:16)|(t.tripodIndex===void 0?0:32)|(t.tripodLevel===void 0?0:64);e.u8(o),o&1&&e.u8(t.layerIndex),o&2&&e.u8(t.startStageIndex),o&4&&e.u32(t.transitIndex),o&8&&e.u32(t.stageStartTime),o&16&&e.u32(t.farmostDistance),o&32&&an(e,t.tripodIndex),o&64&&un(e,t.tripodLevel)}function He(e){let t=new n(e),o={};return t.bool()&&(o.pitchRotation=p(t)),o.newDirectionYaw=p(t),o.curPosition=i(t),o.sourceId=t.u64(),t.bool()&&(o.unk1_m=t.u32()),o.curDirectionYaw=p(t),o.skillId=t.u32(),o.skillLevel=t.u8(),o.skillOptionData=yn(t),o.aimTargetPosition=i(t),o.newPosition=i(t),t.bool()&&(o.aiStateId=t.u32()),o}var Ge="PKTSkillStartNotify",We=12220;function Ye(e){let t=new n(e),o={};return o.objectId=t.u64(),o.unk1=t.array(t.u16(),()=>{let u={};return u.statType=t.u8(),u.value=r(t),u},153),o.unk2=t.u8(),o.unk3=t.array(t.u16(),()=>{let u={};return u.statType=t.u8(),u.value=r(t),u},153),t.bool()&&(o.unk5_0=t.u32()),o}var $e="PKTStatChangeOriginNotify",Je=26564;function Qe(e){let t=new n(e),o={};return o.objectId=t.u64(),o.unk1=t.u64(),t.bool()&&(o.unk3_0=t.u64()),o.new=t.bool(),o.statusEffectData=s(t),o}var Xe="PKTStatusEffectAddNotify",to=50563;function eo(e){let t=new n(e),o={};return o.reason=t.u8(),o.objectId=t.u64(),o.statusEffectIds=t.array(t.u16(),()=>t.u32(),80),o}var oo="PKTStatusEffectRemoveNotify",no=39777;function uo(e){let t=new n(e),o={};return o.targetId=t.u64(),o.expirationTick=t.u64(),t.skip(1),o.effectInstanceId=t.u32(),t.skip(1),o}var ro="PKTStatusEffectDurationNotify",ao=50833;function io(e){let t=new n(e),o={};return o.value=t.u32(),t.skip(4),o.objectId=t.u64(),t.skip(1),o.characterId=t.u64(),o.effectInstanceId=t.u32(),o}var so="PKTStatusEffectSyncDataNotify",fo=25745;function mo(e){let t=new n(e),o={};return o.unk2_m=t.bool(),t.skip(1),o.step=t.u32(),o.triggerId=t.u32(),o}var co="PKTTriggerBossBattleStatus",po=55703;function lo(e){let t=new n(e),o={};return o.involvedPCs=t.array(t.u16(),()=>t.u64(),40),o.triggerId=t.u32(),o.unk0_m=t.u32(),o.packetResultCode=t.u32(),o}var bo="PKTTriggerFinishNotify",yo=33396;function ko(e){let t=new n(e),o={};return o.involvedPCs=t.array(t.u16(),()=>t.u64(),40),o.triggerSignalType=t.u32(),o.triggerId=t.u32(),o.sourceId=t.u64(),o}var To="PKTTriggerStartNotify",Po=40913;function xo(e){let t=new n(e),o={};return o.unk0_m=t.u32(),o.position=t.u64(),o.maxHp=r(t),o.curHp=r(t),o.characterId=t.u64(),o.statusEffectDatas=t.array(t.u16(),()=>s(t),80),o}var go="PKTTroopMemberUpdateMinNotify",Ko=16583;function So(e){let t=new n(e),o={};return t.skip(2),o.identityGauge1=t.u32(),o.identityGauge2=t.u32(),o.identityGauge3=t.u32(),o.playerId=t.u64(),o}var Io="PKTIdentityGaugeChangeNotify",No=1029;function _o(e){let t=new n(e),o={};return o.firstPCEnterTick=t.u64(),o.zoneInstId=t.u64(),o.loadComplete=t.bool(),o.totalMembers=t.array(t.u16(),()=>t.u64(),40),o.zoneId=t.u32(),o.zoneLevel=t.u8(),o.completeMembers=t.array(t.u16(),()=>t.u64(),40),o}var Do="PKTZoneMemberLoadStatusNotify",vo=25608;function Eo(e){let t=new n(e),o={};return o.objectId=t.u64(),t.skip(3),o}var Ro="PKTZoneObjectUnpublishNotify",ho=51409;function kn(e){let t={};return t.target=e.u8(),e.skip(4),t.instanceId=e.u32(),t.id=e.u32(),t.stackCount=e.u8(),t}function Bo(e){let t=new n(e),o={};return o.zoneStatusEffectDataList=t.array(t.u16(),()=>kn(t),4),o}var Ao="PKTZoneStatusEffectAddNotify",Lo=16635;function wo(e){let t=new n(e),o={};return o.statusEffectId=t.u32(),t.skip(2),o}var Co="PKTZoneStatusEffectRemoveNotify",Mo=43975;var Tn=new Map([[A,[B,h]],[C,[w,L]],[j,[F,M]],[q,[O,U]],[Z,[V,z]],[W,[G,H]],[J,[$,Y]],[et,[tt,X]],[ut,[nt,ot]],[it,[at,rt]],[mt,[ft,st]],[dt,[pt,ct]],[kt,[yt,bt]],[xt,[Pt,Tt]],[St,[Kt,gt]],[_t,[Nt,It]],[Rt,[Et,vt]],[At,[Bt,ht]],[Ct,[wt,Lt]],[jt,[Ft,Mt]],[qt,[Ot,Ut]],[Zt,[Vt,zt]],[Wt,[Gt,Ht]],[Jt,[$t,Yt]],[te,[Xt,Qt]],[ne,[oe,ee]],[ae,[re,ue]],[fe,[se,ie]],[pe,[ce,me]],[be,[le,de]],[Te,[ke,ye]],[ge,[xe,Pe]],[Ie,[Se,Ke]],[De,[_e,Ne]],[Re,[Ee,ve]],[Ae,[Be,he]],[Ce,[we,Le]],[je,[Fe,Me]],[qe,[Oe,Ue]],[Ze,[Ve,ze]],[We,[Ge,He]],[Je,[$e,Ye]],[to,[Xe,Qe]],[no,[oo,eo]],[ao,[ro,uo]],[fo,[so,io]],[po,[co,mo]],[yo,[bo,lo]],[Po,[To,ko]],[Ko,[go,xo]],[No,[Io,So]],[vo,[Do,_o]],[ho,[Ro,Eo]],[Lo,[Ao,Bo]],[Mo,[Co,wo]]]);var Pn=class extends $n{#t;constructor(t){super(),this.#t=t}read(t){try{if(t.length<8)return!1;let o=t.readUInt8(7);if(o>2)return!1;let u=t.readUInt8(6);if(u>3)return!1;let a=t.subarray(8),f=t.readUInt16LE(4),m=Tn.get(f);if(m){let[P,x]=m;this.emit(P,new Fo(Buffer.from(a),f,u,!!o,this.#t,x))}this.emit("*",a,f,u,!!o)}catch{return!1}}},Fo=class{#t;#o;#n;#u;#r;#a;constructor(t,o,u,a,f,m){this.#t=t,this.#o=o,this.#n=u,this.#u=a,this.#r=f,this.#a=m}#e;get parsed(){if(!this.#e)try{this.#e=this.#a(this.#r.decrypt(this.#t,this.#o,this.#n,this.#u))}catch(t){console.error(`[meter-core/pkt-stream] - ${t}`);return}return this.#e}};export{n as a,jo as b,A as c,C as d,j as e,Z as f,W as g,J as h,d as i,pu as j,et as k,ut as l,it as m,mt as n,dt as o,r as p,Su as q,kt as r,xt as s,St as t,_t as u,p as v,Bu as w,i as x,Au as y,Rt as z,At as A,Ct as B,_ as C,un as D,D as E,an as F,jt as G,qt as H,Zt as I,Wt as J,Jt as K,te as L,ne as M,ae as N,fe as O,pe as P,be as Q,Te as R,ge as S,Ie as T,De as U,Re as V,Ae as W,Ce as X,dn as Y,Kr as Z,je as _,qe as $,Ze as aa,yn as ba,Er as ca,We as da,to as ea,no as fa,ao as ga,fo as ha,po as ia,yo as ja,Po as ka,Ko as la,No as ma,vo as na,ho as oa,Lo as pa,Mo as qa,Tn as ra,Pn as sa,Fo as ta};