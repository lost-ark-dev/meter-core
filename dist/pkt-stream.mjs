import{a as o}from"./chunk-MLEMKYRO.mjs";import"./chunk-RYE4PZCG.mjs";import"./chunk-EFM4SUD6.mjs";import"./chunk-RVEUDURD.mjs";import"./chunk-REJVTTFE.mjs";import{TypedEmitter as m}from"tiny-typed-emitter";var a=class extends m{#e;constructor(e){super(),this.#e=e}read(e){try{let r=e.readUInt16LE(2),t=o.get(r);if(t){let[c,p]=t;this.emit(c,new s(e,this.#e,p))}else this.emit("*",e.subarray(6),r,e.readUInt8(4),e.readUInt8(5))}catch(r){console.log(r)}}},s=class{#e;#t;#s;constructor(e,r,t){this.#e=e,this.#t=r,this.#s=t}#r;get parsed(){return this.#r||(this.#r=this.#s(this.#t.decrypt(this.#e.subarray(6),this.#e.readUInt16LE(2),this.#e.readUInt8(4),this.#e.readUInt8(5)))),this.#r}};export{s as PKT,a as PKTStream};