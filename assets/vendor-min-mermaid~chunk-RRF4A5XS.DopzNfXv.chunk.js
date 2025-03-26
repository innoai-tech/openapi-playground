var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, __2;
import { z as za, A as Ac, E as Ec, U, b as XS, V as VS, N as Nc, J as JS, Y as Yg } from "./vendor-min-mermaid~chunk-JVB3IFOF.Df_azfO7.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var R = (_a = class extends Yg {
  constructor() {
    super([
      "radar-beta"
    ]);
  }
}, __ = new WeakMap(), __2 = new WeakMap(), __privateAdd(_a, __, m$1(_a, "RadarTokenBuilder")), __privateAdd(_a, __2, U(_a, "RadarTokenBuilder")), _a), M = {
  parser: {
    TokenBuilder: /* @__PURE__ */ U(() => new R(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ U(() => new JS(), "ValueConverter")
  }
};
function p() {
  let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nc;
  let r = /* @__PURE__ */ za(/* @__PURE__ */ Ac(m), VS), o = /* @__PURE__ */ za(/* @__PURE__ */ Ec({
    shared: r
  }), XS, M);
  return r.ServiceRegistry.register(o), {
    shared: r,
    Radar: o
  };
}
m$1(p, "createRadarServices");
U(p, "createRadarServices");
export {
  M,
  p
};
