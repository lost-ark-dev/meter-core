import{TypedEmitter as jn}from"tiny-typed-emitter";var n=class{b;o;constructor(t){this.b=t,this.o=0}skip(t=0){this.o+=t}bool(){return this.u8()===1}u8(){return this.b.readUint8(this.o++)}i8(){return this.b.readInt8(this.o++)}u16(){let t=this.b.readUint16LE(this.o);return this.o+=2,t}i16(){let t=this.b.readInt16LE(this.o);return this.o+=2,t}u32(){let t=this.b.readUint32LE(this.o);return this.o+=4,t}i32(){let t=this.b.readInt32LE(this.o);return this.o+=4,t}f32(){let t=this.b.readFloatLE(this.o);return this.o+=4,t}u64(){let t=this.b.readBigUint64LE(this.o);return this.o+=8,t}i64(){let t=this.b.readBigInt64LE(this.o);return this.o+=8,t}string(t){let o=this.u16();if(o<=t){o=o*2;let a=this.b.toString("utf16le",this.o,this.o+o);return this.o+=o,a}return""}bytes(t=0,o,a){if(o&&t>o)return Buffer.alloc(0);a&&(t=t*a);let u=Buffer.from(this.b.subarray(this.o,this.o+t));return this.o+=t,u}array(t,o,a){return a&&t>a?[]:new Array(t).fill(void 0).map(o)}},Ao=class{b;o;constructor(t=65535){this.b=Buffer.allocUnsafe(t),this.o=0}get value(){return this.b.subarray(0,this.o)}skip(t=0){this.o+=t}bool(t=!1){return this.u8(t?1:0),t}u8(t=0){this.b.writeUInt8(t,this.o++)}i8(t=0){this.b.writeInt8(t,this.o++)}u16(t=0){this.o=this.b.writeUInt16LE(t,this.o)}i16(t=0){this.o=this.b.writeInt16LE(t,this.o)}u32(t=0){this.o=this.b.writeUInt32LE(t,this.o)}i32(t=0){this.o=this.b.writeInt32LE(t,this.o)}f32(t=0){this.o=this.b.writeFloatLE(t,this.o)}u64(t=0n){this.o=this.b.writeBigUInt64LE(BigInt(t),this.o)}i64(t=0n){this.o=this.b.writeBigInt64LE(BigInt(t),this.o)}string(t="",o=0){this.u16(t.length),t.length<=o&&(this.o+=this.b.write(t,this.o,"utf16le"))}bytes(t=Buffer.alloc(0),o={}){if(o.maxLen){let a=o.multiplier??1;if(t.length%a)throw new Error(`Error writing bytes, chunkSize should be a multiple of intut value size, got ${t.length}%${a}`);let u=t.length/a;if(u>o.maxLen)throw new Error(`Error writing bytes, input value size exceeded maxLen, got ${u} > ${o.maxLen}`);if(!o.lenType)throw new Error(`Error writing bytes, invalid lenType when writing chunks, got ${o.lenType}`);this[o.lenType](u)}else if(o.length&&t.length!==o.length)throw new Error(`Error writing bytes, input value size doesn't match opts.length, ${t.length} !== ${o.lenType}`);this.o+=t.copy(this.b,this.o)}array(t=[],o,a){if(t===void 0||t.length>o.maxLen){this[o.lenType](0);return}this[o.lenType](t.length),t.forEach(a)}};function y(e){let t={};return t.id=e.u32(),t.level=e.u8(),t.points=e.u16(),t}function h(e){let t=new n(e),o={};return o.abilityDataList=t.array(t.u16(),()=>y(t),100),o}var R="PKTAbilityChangeNotify",B=32639;function Lo(e){let t={};return t.level=e.u32(),t.featureType=e.u16(),t}function A(e){let t=new n(e),o={};return o.activeAbilityList=t.array(t.u16(),()=>Lo(t),60),o.objectId=t.u64(),o}var L="PKTActiveAbilityNotify",C=15158;function w(e){let t=new n(e),o={};return o.objectId=t.u64(),o.addonFeatureIdList=t.bytes(t.u16(),200,4),o.addonSkillFeatureList=t.array(t.u16(),()=>{let a={};return a.skillId=t.u32(),a.addonSkillFeatureIdList=t.array(t.u16(),()=>t.u32(),5),a},200),o}var M="PKTAddonSkillFeatureChangeNotify",j=59118;function F(e){let t=new n(e),o={};return o.packetResultCode=t.u32(),o.unk1_m=t.bytes(t.u32(),688),o}var U="PKTAuthTokenResult",O=54271;function q(e){let t=new n(e),o={};return o.paralyzationMaxPoint=t.u32(),o.type=t.u8(),o.objectId=t.u64(),o.paralyzationPoint=t.u32(),t.skip(1),o}var z="PKTBlockSkillStateNotify",Z=56034;function V(e){let t=new n(e),o={};return o.sourceId=t.u64(),t.skip(1),o.type=t.u32(),o.targetId=t.u64(),o}var H="PKTCounterAttackNotify",G=22899;function W(e){let t=new n(e),o={};return t.bool()&&(o.unk1_0=t.u8()),o.unk2=t.u8(),o.unk3=t.u32(),o.unk4=t.u64(),o.unk5=t.u16(),t.bool()&&(o.unk7_0=t.u8()),t.bool()&&(o.unk9_0=t.u8()),o.unk10=t.u32(),o.targetId=t.u64(),o.sourceId=t.u64(),o}var Y="PKTDeathNotify",$=27030;var pn=[0,31,28,31,30,31,30,31,31,30,31,30,31];function dn(e){return!(e%4||!(e%100)&&e%400)}function ln(e,t,o){if(e>99){if(e<1752||e==1752&&(t<9||t==9&&o<<14))return!1}else e+=1900;return o>0&&t<=12&&(o<=pn[t]||o==29&&t==2&&dn(e))}function X(e){let t=Number(e&0xffffffffn),o=Number(e>>32n&0xffffffffn),a=t&4095,u=(t&65535)>>12,f=t>>16&31;ln(a,u,f)||(a=u=f=0);let m=t>>21&31,T=t>>26&63,P=o&63,v=o>>6&16383;return m<24&&T<60&&P<60&&v<1e3||(m=24,T=P=v=0),new Date(Date.UTC(a<=99?a+1900:a,u-1,f,m,T,P,v))}function Co(e){let t=0n;return t|=BigInt(e.getUTCMilliseconds())<<38n,t|=BigInt(e.getUTCSeconds())<<32n,t|=BigInt(e.getUTCMinutes())<<26n,t|=BigInt(e.getUTCHours())<<21n,t|=BigInt(e.getUTCDate())<<16n,t|=BigInt(e.getUTCMonth()+1)<<12n,t|=BigInt(e.getUTCFullYear()<2e3?e.getUTCFullYear()-1900:e.getUTCFullYear()),t}function p(e,t=0){let o=e.u16();return(o&4095)<2079?(e.o-=2,X(e.i64())):X(BigInt(o)&0xfffn|0x11000n)}function ta(e,t=X(0x1181fn)){t.getUTCFullYear()>=2079?e.u16(Number(Co(t)&0xffffn)):e.i64(Co(t))}function d(e){let t={};return t.expireTime=p(e),t.slot=e.u16(),t.level=e.u16(),t.id=e.u32(),e.bool()&&(t.unk5_0=e.u8()),t.itemTint=e.bytes(e.u16(),3,14),t}function J(e){let t=new n(e),o={};return o.objectId=t.u64(),o.unk1=t.u32(),o.unk2=t.u32(),o.equipItemDataList=t.array(t.u16(),()=>d(t),32),o}var Q="PKTEquipChangeNotify",tt=33558;function et(e){let t=new n(e),o={};return o.equipLifeToolDataList=t.array(t.u16(),()=>d(t),9),o.objectId=t.u64(),o}var ot="PKTEquipLifeToolChangeNotify",nt=12610;function at(e){let t=new n(e),o={};return t.skip(1),o.objectId=t.u64(),t.skip(1),o.stance=t.u8(),o}var rt="PKTIdentityStanceChangeNotify",ut=29685;function it(e){let t=new n(e),o={};return o.struct_130=t.bytes(t.u16(),348,48),o.abilityDataList=t.array(t.u16(),()=>y(t),100),o}var st="PKTInitAbility",ft=44063;function mt(e){let t=new n(e),o={};return o.struct_574=t.string(128),o.struct_30=t.array(t.u16(),()=>{let a={};return a.struct_574=t.string(128),a.struct_560=t.string(32),a.versionString=t.string(64),a},64),o.unk2=t.u64(),o.lostArkDateTime=p(t),o.unk4=t.u32(),o.unk5=t.u8(),o.unk6=t.u32(),o.playerId=t.u64(),o}var ct="PKTInitEnv",pt=40210;function bn(e){if(e.length===0)return 0n;if(e.length>8)throw new Error("Value is too large");let t=Buffer.alloc(8);return e.copy(t),t.readBigInt64LE()}function r(e,t=0){let o=e.u8(),a=e.bytes(o>>1&7),u=bn(a)<<4n|BigInt(o>>4);return o&1?-u:u}function ca(e,t=0n){let o=Buffer.alloc(8),a=t<0n;o.writeBigInt64LE((a?-t:t)>>4n);let u=0;for(let[f,m]of o.entries())m!=0&&(u=f+1);if(u>7)throw new Error("Value is too large");e.u8(Number((a?-t:t)&0xfn)<<4|(u&7)<<1|(a?1:0)),e.bytes(o.subarray(0,u),{length:u})}function k(e){let t={};return t.unk0=e.u8(),t.unk1=e.u8(),t.unk2=r(e),t.unk3=r(e),t.unk4=e.u16(),t.unk5=e.u8(),t.unk6=e.u64(),t}function i(e){let t={};return e.bool()&&(t.value=e.bytes(16)),t.occurTime=p(e),t.effectInstanceId=e.u32(),t.totalTime=e.f32(),t.struct_445=e.bytes(e.u16(),8,7),t.endTick=e.u64(),t.stackCount=e.u8(),e.bool()&&(t.unk9_0=e.u64()),t.skillLevel=e.u8(),t.sourceId=e.u64(),t.statusEffectId=e.u32(),t}function lt(e){let t=new n(e),o={};return t.bool()&&(o.unk1_0=t.u32()),o.unk2=t.u8(),o.unk3=t.bytes(120),o.classId=t.u16(),o.unk5=t.u32(),o.unk6=t.u8(),o.characterId=t.u64(),o.statPair=t.array(t.u16(),()=>{let a={};return a.statType=t.u8(),a.value=r(t),a},152),o.unk9=t.u8(),o.unk10=t.u32(),o.unk11=t.u8(),o.unk12=t.u8(),o.struct_366=t.string(7),o.struct_99=t.bytes(t.u16(),58),o.unk15=t.u8(),o.unk16=t.u8(),o.unk17=t.u64(),o.unk18=t.u64(),o.struct_227=t.bytes(t.u16(),3,17),o.unk20=t.u8(),o.periodUpdateStatDataList=t.array(t.u16(),()=>k(t),5),o.unk22=t.u8(),o.unk23=t.u8(),o.unk24=t.u32(),o.unk25=t.u32(),o.playerId=t.u64(),o.unk27=t.u32(),o.gearLevel=t.f32(),o.unk29=t.u8(),o.unk30=t.u32(),o.unk31=t.u32(),o.unk32=t.u32(),o.unk33=t.u16(),o.unk34=t.u64(),o.unk35=t.u8(),o.unk36=t.u16(),o.name=t.string(20),o.unk38=t.u64(),o.unk39=t.u32(),o.unk40=t.u8(),o.unk41=t.u32(),o.unk42=t.bytes(25),o.unk43=t.u8(),o.unk44=t.u16(),o.unk45=t.u8(),o.unk46=t.u16(),o.unk47=t.bytes(35),o.struct_341=t.bytes(t.u16(),104,30),o.level=t.u16(),o.unk50=t.u32(),o.unk51=t.u8(),o.unk52=t.u8(),o.unk53=t.u8(),o.unk54=t.u8(),o.statusEffectDatas=t.array(t.u16(),()=>i(t),80),o.unk56=t.u32(),o.unk57=t.u8(),o}var bt="PKTInitPC",yt=58039;function wo(e){let t={},o=e.u16();return o===1&&(t.unk1_0=e.bytes(o)),t}function Mo(e){let t={};return t.unk0=e.u8(),t.unk1=e.u32(),t.unk2=e.u8(),t.unk3=e.u8(),t.unk4=e.u8(),t.unk5=e.u32(),t.struct_140=e.bytes(e.u16(),3,9),t.struct_139=wo(e),t}function jo(e){let t={};return t.struct_238=e.bytes(e.u16(),10,18),t.struct_141=e.bytes(e.u16(),10,9),t.unk2=e.u32(),t.unk3=e.u8(),t.struct_236=e.array(e.u16(),()=>Mo(e),3),t.unk5=e.u32(),t.unk6=e.u32(),t.unk7=e.u32(),t.unk8=e.u32(),t.struct_259=e.bytes(e.u16(),2,9),t.unk10=e.u16(),t.struct_391=e.bytes(e.u16(),2,10),t.unk12=e.u32(),t.unk13=e.u64(),t}function Fo(e){let t={};return t.unk0=e.u32(),t.unk1=e.u32(),t.unk2=e.u32(),t.unk3=e.u32(),t.struct_240=e.bytes(e.u16(),10,29),t.unk5=e.u8(),t.struct_270=e.bytes(e.u16(),3,21),t.itemTint=e.bytes(e.u16(),3,14),t.struct_483=e.bytes(e.u16(),3,7),t.struct_440=e.bytes(e.u16(),3,10),e.bool()&&(t.unk11_0=e.bytes(9)),t.unk12=e.u32(),t.unk13=e.u32(),e.bool()&&(t.struct_188=e.bytes(e.u16(),5,30),t.unk1_1=e.u32(),t.unk1_2=e.u32()),e.bool()&&(t.struct_232=e.bytes(e.u16(),2,32)),t}function S(e){let t={};return t.npcId=e.u32(),t.isDead=e.bool(),t}function Oo(e){let t={};return t.bossKillDataList=e.array(e.u16(),()=>S(e),3),t.unk1=e.u8(),t.unk2=e.u32(),t.struct_0=e.array(e.u16(),()=>{let o={};return o.unk1_0_0=e.u32(),o.struct_511=e.bytes(e.u16(),10),o},3),t.unk4=e.u8(),t}function qo(e){let t={};return t.struct_22=e.array(e.u16(),()=>{let o={};return o.unk1_0_0=e.u16(),o.struct_234=e.string(2),o.unk1_0_2=e.u8(),o},20),t.struct_235=e.bytes(e.u16(),5,7),t.struct_483=e.bytes(e.u16(),3,7),t.unk3=e.u8(),t.unk4=e.u8(),t.unk5=e.u8(),t}function zo(e){let t={},o=e.u8();return o===1&&(t.struct_643=jo(e)),o===2&&(t.struct_1=e.array(e.u16(),()=>{let a={};return a.struct_511=e.bytes(e.u16(),10),a.unk1_0_1=e.u32(),a.unk1_0_2=e.u8(),a.unk1_0_3=e.u8(),a},3),t.struct_127=e.bytes(e.u16(),3,6),t.unk2_2=e.u8()),o===3&&(t.unk3_0=e.bytes(26)),o===4&&(t.unk4_0=e.u32(),t.unk4_1=e.bytes(e.u16(),10,13),t.unk4_2=e.bytes(e.u16(),10,13)),o===5&&(t.struct_642=Fo(e)),o===6&&(t.struct_586=Oo(e)),o===7&&(t.unk7_0=e.bytes(9)),o===8&&(t.struct_636=qo(e)),t}function Zo(e){let t={};return e.u32()>0&&(t.serialNumber=e.u64(),t.id=e.u32(),t.level=e.u16(),t.slot=e.u16(),t.durability=e.u32(),t.unk1_6_m=e.u32(),t.flag=e.u32(),t.expireTime=p(e),t.lockUpdateTime=p(e),e.bool()&&(t.unk1_10_0=e.bytes(9)),t.unk1_11=e.u8(),t.unk1_12=e.u8(),t.unk1_13=e.u32(),t.struct_533=zo(e),t.unk1_15=e.u32()),t}function kt(e){let t=new n(e),o={};return o.storageType=t.u8(),o.itemDataList=t.array(t.u16(),()=>Zo(t),80),o}var Tt="PKTInitItem",Pt=22170;function Vo(e){let t={};return t.unk0=e.u32(),t.unk1=e.u32(),e.bool()&&(t.unk3_0=e.bytes(9)),e.bool()&&(t.unk5_0=e.u32()),t.unk6=e.u32(),t}function xt(e){let t=new n(e),o={};return o.unk0=t.u32(),o.addonFeatureIdList=t.bytes(t.u16(),200,4),o.struct_341=t.bytes(t.u16(),104,30),o.struct_130=t.bytes(t.u16(),348,48),o.unk4=t.u64(),o.struct_227=t.bytes(t.u16(),3,17),o.unk6=t.u8(),o.unk7=t.u64(),o.statPair=t.array(t.u16(),()=>{let a={};return a.statType=t.u8(),a.value=r(t),a},152),o.unk9=t.u8(),o.addonSkillFeatureList=t.array(t.u16(),()=>{let a={};return a.skillId=t.u32(),a.addonSkillFeatureIdList=t.array(t.u16(),()=>t.u32(),5),a},200),t.bool()&&(o.unk12_0=t.u32()),o.unk13=t.u8(),o.abilityDataList=t.array(t.u16(),()=>y(t),100),o.statusEffectDatas=t.array(t.u16(),()=>i(t),80),o.struct_422=t.array(t.u16(),()=>Vo(t),300),o}var gt="PKTInitLocal",Kt=11094;function St(e){let t=new n(e),o={};return o.account_CharacterId1=t.u64(),o.unk1=t.u32(),o.serverAddr=t.string(256),o.account_CharacterId2=t.u64(),o}var It="PKTMigrationExecute",Nt=54418;function Ho(e){let t={};return t.unk0=e.u16(),t.lostArkString=e.string(20),t.lookData=e.bytes(e.u32(),512),t.unk3=e.u64(),t.unk4=e.u8(),t.equipItemDataList=e.array(e.u16(),()=>d(e),32),t.unk6=e.u8(),t.unk7=e.u8(),t}function _t(e){return e>>20===1?-((~e>>>0)+1&2097151):e}function s(e,t=0){let o=e.u64();return{x:_t(Number(o&0x1fffffn)),y:_t(Number(o>>21n&0x1fffffn)),z:_t(Number(o>>42n&0x1fffffn))}}function xa(e,t={x:0,y:0,z:0}){e.u64(BigInt(Math.round(t.x??0)>>>0&2097151)|BigInt(Math.round(t.y??0)>>>0&2097151)<<21n|BigInt(Math.round(t.z??0)>>>0&2097151)<<42n)}function l(e,t=0){return e.u16()*(2*Math.PI)/65536}function ga(e,t=0){e.u16(Math.round(t*65536/(2*Math.PI))%65536)}function I(e){let t={};return t.level=e.u16(),e.bool()&&(t.unk2_0=e.u8()),t.position=s(e),e.bool()&&(t.transitIndex=e.u32()),e.bool()&&(t.unk7_0=e.u8()),e.bool()&&(t.balanceLevel=e.u16()),e.bool()&&(t.unk11_0=e.u32()),t.statusEffectDatas=e.array(e.u16(),()=>i(e),80),t.directionYaw=l(e),t.unk14=e.u8(),t.unk15=e.u8(),t.periodUpdateStatDataList=e.array(e.u16(),()=>k(e),5),e.bool()&&(t.unk18_0=e.u32()),t.unk19=e.u8(),e.bool()&&(t.unk21_0=e.u64()),t.objectId=e.u64(),e.bool()&&(t.unk24_0=e.u16()),e.bool()&&(t.unk26_0=e.u8()),t.unk27=e.u8(),e.bool()&&(t.struct_711=Ho(e)),e.bool()&&(t.unk31_0=e.u8()),t.typeId=e.u32(),e.bool()&&(t.struct_271=e.bytes(e.u16(),12,12)),e.bool()&&(t.unk36_0=e.u8()),e.bool()&&(t.struct_336=e.bytes(e.u16(),11,9)),e.bool()&&(t.unk40_0=e.u32()),e.bool()&&(t.unk42_0=e.u32()),t.unk43=e.u8(),t.spawnIndex=e.u32(),t.statPair=e.array(e.u16(),()=>{let o={};return o.statType=e.u8(),o.value=r(e),o},152),e.bool()&&(t.unk47_0=e.u8()),e.bool()&&(t.unk49_0=e.u8()),t.unk50=e.u8(),t}function vt(e){let t=new n(e),o={};return t.bool()&&(o.unk1_0=t.u64()),t.bool()&&(o.unk1_0_0=t.string(20),o.unk1_1=t.string(20)),t.bool()&&(o.unk4_0=t.u8()),o.unk5=t.u8(),o.npcStruct=I(t),o}var Et="PKTNewNpc",ht=37833;function Rt(e){let t=new n(e),o={};return o.npcData=I(t),o.publishReason=t.u8(),t.skip(11),o.ownerId=t.u64(),t.skip(20),o}var Bt="PKTNewNpcSummon",At=20114;function Wo(e){let t={};return e.bool()&&(t.unk1_0=e.bytes(12)),t.unk2=e.u32(),t.unk3=e.u32(),t.unk4=e.bytes(12),t}function Yo(e){let t={};return t.heading=l(e),t.unk15_m=e.u8(),t.unk2=e.u8(),t.unk3=e.u32(),t.secondHonorTitleId=e.u16(),t.lookData=e.bytes(e.u32(),512),t.name=e.string(20),t.unk45_m=e.u32(),t.unk23_m=e.u8(),t.periodUpdateStatDataList=e.array(e.u16(),()=>k(e),5),t.unk2_m=e.u8(),t.unk29_m=e.u8(),t.avatarHide=e.u8(),t.avgItemLevel=e.f32(),e.bool()&&(t.grabbedData=e.bytes(12)),t.unk7_m=e.u32(),t.equipLifeToolDataList=e.array(e.u16(),()=>d(e),9),t.unk5_m=e.u32(),t.unk0_m=e.bytes(5),t.unk1_m=e.u8(),t.unk21=e.u32(),t.rvRLevel=e.u16(),t.level=e.u16(),t.playerId=e.u64(),t.petId=e.u32(),t.classId=e.u16(),t.characterId=e.u64(),t.guildId=e.u32(),t.statusEffectDatas=e.array(e.u16(),()=>i(e),80),t.identityData=e.bytes(25),t.unk17_m=e.u8(),t.unk32=e.u32(),t.position=s(e),t.unk32_m=e.u8(),t.unk25_m=e.u8(),t.equipItemDataList=e.array(e.u16(),()=>d(e),32),t.addonFeatureIdList=e.bytes(e.u16(),200,4),t.firstHonorTitleId=e.u16(),t.guildName=e.string(20),t.unk28_m=e.u8(),t.worldId=e.u8(),t.unk4_m=e.u32(),t.addonSkillFeatureList=e.array(e.u16(),()=>{let o={};return o.skillId=e.u32(),o.addonSkillFeatureIdList=e.array(e.u16(),()=>e.u32(),5),o},200),t.statPair=e.array(e.u16(),()=>{let o={};return o.statType=e.u8(),o.value=r(e),o},152),t.maxItemLevel=e.f32(),t}function Lt(e){let t=new n(e),o={};return t.bool()&&(o.unk4_0_m=t.bytes(12)),t.bool()&&(o.unk3_0_m=t.u32()),o.unk0_m=t.u8(),t.bool()&&(o.trackMoveInfo=Wo(t)),o.pcStruct=Yo(t),o.unk2_m=t.u8(),t.bool()&&(o.unk5_0_m=t.bytes(20)),o}var Ct="PKTNewPC",wt=28636;function N(e,t=0){return{first:e.u16(),second:e.u16(),third:e.u16()}}function $o(e,t){e.u16(t.first),e.u16(t.second),e.u16(t.third)}function _(e,t=0){return{first:e.u8(),second:e.u8(),third:e.u8()}}function Jo(e,t){e.u8(t.first),e.u8(t.second),e.u8(t.third)}function tn(e){let t={};return t.ownerId=e.u64(),t.targetObjectId=e.u64(),t.unk2=e.u32(),t.chainSkillEffect=e.u32(),t.projectileId=e.u64(),t.unk5=e.u16(),t.unk6=e.u64(),t.unk7=e.u32(),t.unk8=e.u16(),t.unk9=e.u8(),t.unk10=e.u8(),t.tripodLevel=N(e),t.skillLevel=e.u8(),e.bool()&&(t.unk14_0=e.u64()),e.bool()&&(t.unk16_0=e.u32()),t.unk17=e.u32(),t.skillId=e.u32(),t.skillEffect=e.u32(),e.bool()&&(t.struct_336=e.bytes(e.u16(),11,9)),t.unk22=e.u64(),t.tripodIndex=_(e),t}function Mt(e){let t=new n(e),o={};return o.projectileInfo=tn(t),o}var jt="PKTNewProjectile",Ft=57958;function Ut(e){let t=new n(e),o={};return t.skip(1),o.paralyzationPoint=t.u32(),o.decreasePoint=t.u32(),t.skip(1),o.noHitCheckTime=t.u32(),o.objectId=t.u64(),o.hitCheckTime=t.u32(),o.paralyzationMaxPoint=t.u32(),t.skip(1),o.enable=t.bool(),o}var Ot="PKTParalyzationStateNotify",qt=36057;function en(e){let t={};return t.unk0=e.u16(),t.zoneInstId=e.u64(),t.zoneId=e.u32(),t.characterLevel=e.u16(),t.curHp=r(e),t.maxHp=r(e),t.name=e.string(20),t.gearLevel=e.f32(),t.unk8=e.u8(),t.transitIndex=e.u32(),t.unk10=e.u8(),t.unk11=e.u8(),t.worldId=e.u8(),t.characterId=e.u64(),t.classId=e.u16(),t.position=s(e),t.unk16=e.u8(),t.unk17=e.u8(),t.auths=e.u8(),t.partyMemberNumber=e.u8(),t}function zt(e){let t=new n(e),o={};return o.memberDatas=t.array(t.u16(),()=>en(t),40),o.raidInstanceId=t.u32(),o.partyType=t.u8(),o.lootGrade=t.u32(),o.partyLootType=t.u8(),o.partyInstanceId=t.u32(),o}var Zt="PKTPartyInfo",Vt=31030;function Ht(e){let t=new n(e),o={};return o.partyInstanceId=t.u32(),o.partyLeaveType=t.u8(),o.name=t.string(20),o}var Gt="PKTPartyLeaveResult",Wt=22077;function Yt(e){let t=new n(e),o={};return o.objectId=t.u64(),o.unk0_m=t.u8(),o.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),o}var $t="PKTPartyPassiveStatusEffectAddNotify",Xt=147;function Jt(e){let t=new n(e),o={};return o.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),o.objectId=t.u64(),o}var Qt="PKTPartyPassiveStatusEffectRemoveNotify",te=26838;function ee(e){let t=new n(e),o={};return o.characterId=t.u64(),o.unk1=t.u8(),o.unk2=t.u64(),o.statusEffectDatas=t.array(t.u16(),()=>i(t),80),o.playerIdOnRefresh=t.u64(),o}var oe="PKTPartyStatusEffectAddNotify",ne=13271;function ae(e){let t=new n(e),o={};return o.reason=t.u8(),o.characterId=t.u64(),o.statusEffectIds=t.array(t.u16(),()=>t.u32(),80),o.unk3=t.u64(),o}var re="PKTPartyStatusEffectRemoveNotify",ue=33972;function ie(e){let t=new n(e),o={};return o.raidInstanceId=t.u32(),t.skip(27),o.partyInstanceId=t.u32(),o.characterId=t.u64(),o}var se="PKTPartyStatusEffectResultNotify",fe=2404;function me(e){let t=new n(e),o={};return o.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),o}var ce="PKTPassiveStatusEffectAddNotify",pe=40581;function de(e){let t=new n(e),o={};return o.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),o}var le="PKTPassiveStatusEffectRemoveNotify",be=13308;function ye(e){let t=new n(e),o={};return o.unk6_m=t.u64(),o.initBraveHeartCount=t.u8(),o.unk5_m=t.u64(),o.endTick=t.u64(),o.raidResult=t.u8(),o.unk0_m=t.bool(),o.raidId=t.u32(),o.bossKillDataList=t.array(t.u16(),()=>S(t),3),o.unk4_m=t.u64(),o.totalTime=t.u64(),o.startTick=t.u64(),o.unk1_m=t.bool(),o.unk11_m=t.bool(),o.braveHeartCount=t.u8(),o}var ke="PKTRaidBegin",Te=8315;function Pe(e){let t=new n(e),o={};return o.unk0=t.bytes(5),o}var xe="PKTRaidBossKillNotify",ge=52939;function Ke(e){let t=new n(e),o={};return o.unk0=t.u64(),o.unk1=t.u8(),o.unk2=t.u64(),o.unk3=t.u64(),o.unk4=t.u8(),o.unk5=t.u8(),o.struct_49=t.array(t.u16(),()=>{let a={};return a.unk1_0_0=t.u32(),a.unk1_0_1=r(t),a.unk1_0_2=r(t),a.struct_517=t.bytes(t.u16(),3),a},3),o.unk7=t.u64(),o}var Se="PKTRaidResult",Ie=35840;function on(e){let t={};return t.unpublishReason=e.u8(),t.objectId=e.u64(),t}function Ne(e){let t=new n(e),o={};return o.unpublishedObjects=t.array(t.u16(),()=>on(t),200),o}var _e="PKTRemoveObject",De=55906;function ve(e){let t=new n(e),o={};return o.skillId=t.u32(),t.skip(2),o.caster=t.u64(),t.skip(1),o.skillLevel=t.u8(),o}var Ee="PKTSkillCastNotify",he=52190;function D(e){let t={};return t.targetId=e.u64(),t.unk3_m=e.u16(),t.modifier=e.u8(),t.curHp=r(e),t.damageType=e.u8(),e.bool()&&(t.damageAttr=e.u8()),t.maxHp=r(e),t.damage=r(e),t}function an(e,t=0){let o={},a=e.u8();return a&1&&(o.moveTime=e.u32()),a&2&&(o.standUpTime=e.u32()),a&4&&(o.downTime=e.u32()),a&8&&(o.freezeTime=e.u32()),a&16&&(o.moveHeight=e.u32()),a&32&&(o.farmostDist=e.u32()),a&64&&(o.flag40=e.bytes(e.u16(),6)),o}function ur(e,t){let o=(t.moveTime===void 0?0:1)|(t.standUpTime===void 0?0:2)|(t.downTime===void 0?0:4)|(t.freezeTime===void 0?0:8)|(t.moveHeight===void 0?0:16)|(t.farmostDist===void 0?0:32)|(t.flag40===void 0?0:64);e.u8(o),o&1&&e.u32(t.moveTime),o&2&&e.u32(t.standUpTime),o&4&&e.u32(t.downTime),o&8&&e.u32(t.freezeTime),o&16&&e.u32(t.moveHeight),o&32&&e.u32(t.farmostDist),o&64&&e.bytes(t.flag40,{maxLen:6,lenType:"u16"})}function rn(e){let t={};return t.destination=s(e),t.unk1_m=e.u8(),t.unk4_m=e.u16(),t.skillDamageEvent=D(e),t.unk8_m=e.u16(),t.skillMoveOptionData=an(e),t.unk3_m=e.u16(),t.position=s(e),t.unk2_m=e.u64(),t}function Re(e){let t=new n(e),o={};return o.unk1_m=t.u8(),o.skillEffectId=t.u32(),o.skillDamageAbnormalMoveEvents=t.array(t.u16(),()=>rn(t),50),o.sourceId=t.u64(),o.unk2_m=t.u32(),o.skillId=t.u32(),o}var Be="PKTSkillDamageAbnormalMoveNotify",Ae=32994;function Le(e){let t=new n(e),o={};return o.sourceId=t.u64(),o.skillLevel=t.u8(),o.skillEffectId=t.u32(),o.skillDamageEvents=t.array(t.u16(),()=>D(t),50),o.skillId=t.u32(),o}var Ce="PKTSkillDamageNotify",we=38749;function Me(e){let t=new n(e),o={};return t.skip(12),o.stage=t.u8(),t.skip(16),o.sourceId=t.u64(),t.skip(13),o.skillId=t.u32(),o}var je="PKTSkillStageNotify",Fe=10486;function un(e,t=0){let o={},a=e.u8();return a&1&&(o.layerIndex=e.u8()),a&2&&(o.startStageIndex=e.u8()),a&4&&(o.transitIndex=e.u32()),a&8&&(o.stageStartTime=e.u32()),a&16&&(o.farmostDistance=e.u32()),a&32&&(o.tripodIndex=_(e)),a&64&&(o.tripodLevel=N(e)),o}function dr(e,t){let o=(t.layerIndex===void 0?0:1)|(t.startStageIndex===void 0?0:2)|(t.transitIndex===void 0?0:4)|(t.stageStartTime===void 0?0:8)|(t.farmostDistance===void 0?0:16)|(t.tripodIndex===void 0?0:32)|(t.tripodLevel===void 0?0:64);e.u8(o),o&1&&e.u8(t.layerIndex),o&2&&e.u8(t.startStageIndex),o&4&&e.u32(t.transitIndex),o&8&&e.u32(t.stageStartTime),o&16&&e.u32(t.farmostDistance),o&32&&Jo(e,t.tripodIndex),o&64&&$o(e,t.tripodLevel)}function Ue(e){let t=new n(e),o={};return t.bool()&&(o.aiStateId=t.u32()),o.newPosition=s(t),o.curPosition=s(t),o.curDirectionYaw=l(t),o.skillId=t.u32(),o.skillLevel=t.u8(),o.sourceId=t.u64(),o.skillOptionData=un(t),t.bool()&&(o.pitchRotation=l(t)),t.bool()&&(o.unk1_m=t.u32()),o.newDirectionYaw=l(t),o.aimTargetPosition=s(t),o}var Oe="PKTSkillStartNotify",qe=37543;function ze(e){let t=new n(e),o={};return o.unk0=t.array(t.u16(),()=>{let a={};return a.statType=t.u8(),a.value=r(t),a},152),o.objectId=t.u64(),o.unk2=t.array(t.u16(),()=>{let a={};return a.statType=t.u8(),a.value=r(t),a},152),t.bool()&&(o.unk4_0=t.u32()),o.unk5=t.u8(),o}var Ze="PKTStatChangeOriginNotify",Ve=41365;function He(e){let t=new n(e),o={};return o.unk0=t.u64(),t.bool()&&(o.unk2_0=t.u64()),o.new=t.bool(),o.objectId=t.u64(),o.statusEffectData=i(t),o}var Ge="PKTStatusEffectAddNotify",We=43258;function Ye(e){let t=new n(e),o={};return o.objectId=t.u64(),o.statusEffectIds=t.array(t.u16(),()=>t.u32(),80),o.reason=t.u8(),o}var $e="PKTStatusEffectRemoveNotify",Xe=35010;function Je(e){let t=new n(e),o={};return t.skip(1),o.effectInstanceId=t.u32(),o.targetId=t.u64(),o.expirationTick=t.u64(),o}var Qe="PKTStatusEffectDurationNotify",to=43704;function eo(e){let t=new n(e),o={};return o.objectId=t.u64(),t.skip(2),o.effectInstanceId=t.u32(),o.characterId=t.u64(),t.skip(1),o.value=t.u32(),t.skip(4),o}var oo="PKTStatusEffectSyncDataNotify",no=43249;function ao(e){let t=new n(e),o={};return t.skip(2),o.unk2_m=t.bool(),t.skip(1),o.triggerId=t.u32(),o.step=t.u32(),o}var ro="PKTTriggerBossBattleStatus",uo=32992;function io(e){let t=new n(e),o={};return o.triggerId=t.u32(),o.involvedPCs=t.array(t.u16(),()=>t.u64(),40),o.packetResultCode=t.u32(),o.unk0_m=t.u32(),o}var so="PKTTriggerFinishNotify",fo=28312;function mo(e){let t=new n(e),o={};return o.involvedPCs=t.array(t.u16(),()=>t.u64(),40),o.sourceId=t.u64(),o.triggerId=t.u32(),o.triggerSignalType=t.u32(),o}var co="PKTTriggerStartNotify",po=9325;function lo(e){let t=new n(e),o={};return o.position=t.u64(),o.unk0_m=t.u32(),o.maxHp=r(t),o.curHp=r(t),o.characterId=t.u64(),o.statusEffectDatas=t.array(t.u16(),()=>i(t),80),o}var bo="PKTTroopMemberUpdateMinNotify",yo=2111;function ko(e){let t=new n(e),o={};return o.identityGauge1=t.u32(),o.identityGauge2=t.u32(),o.identityGauge3=t.u32(),o.playerId=t.u64(),t.skip(3),o}var To="PKTIdentityGaugeChangeNotify",Po=40271;function xo(e){let t=new n(e),o={};return o.zoneInstId=t.u64(),o.firstPCEnterTick=t.u64(),o.completeMembers=t.array(t.u16(),()=>t.u64(),40),o.loadComplete=t.bool(),o.zoneId=t.u32(),o.totalMembers=t.array(t.u16(),()=>t.u64(),40),o.zoneLevel=t.u8(),o}var go="PKTZoneMemberLoadStatusNotify",Ko=18391;function So(e){let t=new n(e),o={};return t.skip(1),o.objectId=t.u64(),o}var Io="PKTZoneObjectUnpublishNotify",No=8020;function sn(e){let t={};return t.stackCount=e.u8(),t.instanceId=e.u32(),t.id=e.u32(),e.skip(4),t.target=e.u8(),t}function _o(e){let t=new n(e),o={};return o.zoneStatusEffectDataList=t.array(t.u16(),()=>sn(t),4),o}var Do="PKTZoneStatusEffectAddNotify",vo=8385;function Eo(e){let t=new n(e),o={};return o.statusEffectId=t.u32(),t.skip(3),o}var ho="PKTZoneStatusEffectRemoveNotify",Ro=23792;var fn=new Map([[B,[R,h]],[C,[L,A]],[j,[M,w]],[O,[U,F]],[Z,[z,q]],[G,[H,V]],[$,[Y,W]],[tt,[Q,J]],[nt,[ot,et]],[ut,[rt,at]],[ft,[st,it]],[pt,[ct,mt]],[yt,[bt,lt]],[Pt,[Tt,kt]],[Kt,[gt,xt]],[Nt,[It,St]],[ht,[Et,vt]],[At,[Bt,Rt]],[wt,[Ct,Lt]],[Ft,[jt,Mt]],[qt,[Ot,Ut]],[Vt,[Zt,zt]],[Wt,[Gt,Ht]],[Xt,[$t,Yt]],[te,[Qt,Jt]],[ne,[oe,ee]],[ue,[re,ae]],[fe,[se,ie]],[pe,[ce,me]],[be,[le,de]],[Te,[ke,ye]],[ge,[xe,Pe]],[Ie,[Se,Ke]],[De,[_e,Ne]],[he,[Ee,ve]],[Ae,[Be,Re]],[we,[Ce,Le]],[Fe,[je,Me]],[qe,[Oe,Ue]],[Ve,[Ze,ze]],[We,[Ge,He]],[Xe,[$e,Ye]],[to,[Qe,Je]],[no,[oo,eo]],[uo,[ro,ao]],[fo,[so,io]],[po,[co,mo]],[yo,[bo,lo]],[Po,[To,ko]],[Ko,[go,xo]],[No,[Io,So]],[vo,[Do,_o]],[Ro,[ho,Eo]]]);var mn=class extends jn{#t;constructor(t){super(),this.#t=t}read(t){try{if(t.length<6)return!1;let o=t.readUInt8(5);if(o>2)return!1;let a=t.readUInt8(4);if(a>3)return!1;let u=t.subarray(6),f=t.readUInt16LE(2),m=fn.get(f);if(m){let[T,P]=m;this.emit(T,new Bo(Buffer.from(u),f,a,!!o,this.#t,P))}this.emit("*",u,f,a,!!o)}catch{return!1}}},Bo=class{#t;#o;#n;#a;#r;#u;constructor(t,o,a,u,f,m){this.#t=t,this.#o=o,this.#n=a,this.#a=u,this.#r=f,this.#u=m}#e;get parsed(){if(!this.#e)try{this.#e=this.#u(this.#r.decrypt(this.#t,this.#o,this.#n,this.#a))}catch(t){console.error(`[meter-core/pkt-stream] - ${t}`);return}return this.#e}};export{n as a,Ao as b,B as c,C as d,j as e,Z as f,G as g,$ as h,p as i,ta as j,tt as k,nt as l,ut as m,ft as n,pt as o,r as p,ca as q,yt as r,Pt as s,Kt as t,Nt as u,s as v,xa as w,l as x,ga as y,ht as z,At as A,wt as B,N as C,$o as D,_ as E,Jo as F,Ft as G,qt as H,Vt as I,Wt as J,Xt as K,te as L,ne as M,ue as N,fe as O,pe as P,be as Q,Te as R,ge as S,Ie as T,De as U,he as V,an as W,ur as X,Ae as Y,we as Z,Fe as _,un as $,dr as aa,qe as ba,We as ca,Xe as da,to as ea,no as fa,uo as ga,fo as ha,po as ia,yo as ja,Po as ka,Ko as la,No as ma,vo as na,Ro as oa,fn as pa,mn as qa,Bo as ra};
