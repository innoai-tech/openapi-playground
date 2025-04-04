var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, __2;
import { z as za, A as Ac, E as Ec, U, K as KS, V as VS, N as Nc, J as JS, Y as Yg } from "./vendor-min-mermaid~chunk-JVB3IFOF.CyFWjgvM.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Cm_2-rE8.chunk.js";
var v = (_a = class extends Yg {
  constructor() {
    super([
      "info",
      "showInfo"
    ]);
  }
}, __ = new WeakMap(), __2 = new WeakMap(), __privateAdd(_a, __, m$1(_a, "InfoTokenBuilder")), __privateAdd(_a, __2, U(_a, "InfoTokenBuilder")), _a), I = {
  parser: {
    TokenBuilder: U(() => new v(), "TokenBuilder"),
    ValueConverter: U(() => new JS(), "ValueConverter")
  }
};
function M() {
  let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nc;
  let r = za(Ac(f), VS), t = za(Ec({
    shared: r
  }), KS, I);
  return r.ServiceRegistry.register(t), {
    shared: r,
    Info: t
  };
}
m$1(M, "createInfoServices");
U(M, "createInfoServices");
export {
  I,
  M
};
