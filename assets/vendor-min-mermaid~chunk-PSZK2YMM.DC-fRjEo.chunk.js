var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, __2, _b, __3, __22;
import { z as za, E as Ec, R as Rc, j, U as US, b as bS, I as Ic, B as Bg, a as Wg } from "./vendor-min-mermaid~chunk-AXOSD5AS.pM-XJGXE.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var A = (_a = class extends Wg {
  constructor() {
    super([
      "architecture"
    ]);
  }
}, __ = new WeakMap(), __2 = new WeakMap(), __privateAdd(_a, __, m$1(_a, "ArchitectureTokenBuilder")), __privateAdd(_a, __2, j(_a, "ArchitectureTokenBuilder")), _a), C = (_b = class extends Bg {
  runCustomConverter(t, e, a) {
    if (t.name === "ARCH_ICON") return e.replace(/[()]/g, "").trim();
    if (t.name === "ARCH_TEXT_ICON") return e.replace(/["()]/g, "");
    if (t.name === "ARCH_TITLE") return e.replace(/[[\]]/g, "").trim();
  }
}, __3 = new WeakMap(), __22 = new WeakMap(), __privateAdd(_b, __3, m$1(_b, "ArchitectureValueConverter")), __privateAdd(_b, __22, j(_b, "ArchitectureValueConverter")), _b), v = {
  parser: {
    TokenBuilder: /* @__PURE__ */ j(() => new A(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ j(() => new C(), "ValueConverter")
  }
};
function T() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ic;
  let e = /* @__PURE__ */ za(/* @__PURE__ */ Ec(t), bS), a = /* @__PURE__ */ za(/* @__PURE__ */ Rc({
    shared: e
  }), US, v);
  return e.ServiceRegistry.register(a), {
    shared: e,
    Architecture: a
  };
}
m$1(T, "createArchitectureServices");
j(T, "createArchitectureServices");
export {
  T,
  v
};
