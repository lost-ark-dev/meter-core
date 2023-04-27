// src/logger/data.ts
var PARSED_LOG_VERSION = 16;
var StatusEffectTarget = /* @__PURE__ */ ((StatusEffectTarget2) => {
  StatusEffectTarget2[StatusEffectTarget2["OTHER"] = 0] = "OTHER";
  StatusEffectTarget2[StatusEffectTarget2["PARTY"] = 1] = "PARTY";
  StatusEffectTarget2[StatusEffectTarget2["SELF"] = 2] = "SELF";
  return StatusEffectTarget2;
})(StatusEffectTarget || {});
var StatusEffectBuffTypeFlags = /* @__PURE__ */ ((StatusEffectBuffTypeFlags2) => {
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["NONE"] = 0] = "NONE";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["DMG"] = 1] = "DMG";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["CRIT"] = 2] = "CRIT";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["ATKSPEED"] = 4] = "ATKSPEED";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["MOVESPEED"] = 8] = "MOVESPEED";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["HP"] = 16] = "HP";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["DEFENSE"] = 32] = "DEFENSE";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["RESOURCE"] = 64] = "RESOURCE";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["COOLDOWN"] = 128] = "COOLDOWN";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["STAGGER"] = 256] = "STAGGER";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["SHIELD"] = 512] = "SHIELD";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["ANY"] = 262144] = "ANY";
  return StatusEffectBuffTypeFlags2;
})(StatusEffectBuffTypeFlags || {});

export {
  PARSED_LOG_VERSION,
  StatusEffectTarget,
  StatusEffectBuffTypeFlags
};
