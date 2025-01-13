var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __;
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var s = (_a = class {
  constructor(t) {
    this.init = t;
    this.records = /* @__PURE__ */ this.init();
  }
  reset() {
    this.records = /* @__PURE__ */ this.init();
  }
}, __ = new WeakMap(), __privateAdd(_a, __, m$1(_a, "ImperativeState")), _a);
export {
  s
};
