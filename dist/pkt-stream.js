var c=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var u=(t,e)=>{for(var r in e)c(t,r,{get:e[r],enumerable:!0})},l=(t,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of d(e))!h.call(t,o)&&o!==r&&c(t,o,{get:()=>e[o],enumerable:!(s=f(e,o))||s.enumerable});return t};var b=t=>l(c({},"__esModule",{value:!0}),t);var B={};u(B,{PKT:()=>a,PKTStream:()=>i});module.exports=b(B);var m=require("tiny-typed-emitter"),i=class extends m.TypedEmitter{#e;constructor(e){super(),this.#e=e}read(e){try{if(e.length<8)return!1;let r=e.readUInt8(7);if(r>2)return!1;let s=e.readUInt8(6);if(s>3)return!1;let o=e.subarray(8),n=e.readUInt16LE(4);this.emit("*",o,n,s,!!r)}catch{return!1}}},a=class{#e;#t;#o;#s;#n;#c;constructor(e,r,s,o,n,p){this.#e=e,this.#t=r,this.#o=s,this.#s=o,this.#n=n,this.#c=p}#r;get parsed(){if(!this.#r)try{this.#r=this.#c(this.#n.decrypt(this.#e,this.#t,this.#o,this.#s))}catch(e){console.error(`[meter-core/pkt-stream] - ${e}`);return}return this.#r}};0&&(module.exports={PKT,PKTStream});
