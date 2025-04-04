var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, __2, _b, __3, __22;
import { z as za, A as Ac, E as Ec, U, a as zS, V as VS, N as Nc, X as Xg, Y as Yg } from "./vendor-min-mermaid~chunk-JVB3IFOF.CyFWjgvM.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Cm_2-rE8.chunk.js";
var A = (_a = class extends Yg {
  constructor() {
    super([
      "architecture"
    ]);
  }
}, __ = new WeakMap(), __2 = new WeakMap(), __privateAdd(_a, __, m$1(_a, "ArchitectureTokenBuilder")), __privateAdd(_a, __2, U(_a, "ArchitectureTokenBuilder")), _a), C = (_b = class extends Xg {
  runCustomConverter(t, e, a) {
    if (t.name === "ARCH_ICON") return e.replace(/[()]/g, "").trim();
    if (t.name === "ARCH_TEXT_ICON") return e.replace(/["()]/g, "");
    if (t.name === "ARCH_TITLE") return e.replace(/[[\]]/g, "").trim();
  }
}, __3 = new WeakMap(), __22 = new WeakMap(), __privateAdd(_b, __3, m$1(_b, "ArchitectureValueConverter")), __privateAdd(_b, __22, U(_b, "ArchitectureValueConverter")), _b), v = {
  parser: {
    TokenBuilder: U(() => new A(), "TokenBuilder"),
    ValueConverter: U(() => new C(), "ValueConverter")
  }
};
function T() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nc;
  let e = za(Ac(t), VS), a = za(Ec({
    shared: e
  }), zS, v);
  return e.ServiceRegistry.register(a), {
    shared: e,
    Architecture: a
  };
}
m$1(T, "createArchitectureServices");
U(T, "createArchitectureServices");
export {
  T,
  v
};
