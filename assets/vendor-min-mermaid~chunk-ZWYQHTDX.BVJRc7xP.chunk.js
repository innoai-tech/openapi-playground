var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, __2, _b, __3, __22;
import { z as za, A as Ac, E as Ec, U, H as HS, V as VS, N as Nc, X as Xg, Y as Yg } from "./vendor-min-mermaid~chunk-JVB3IFOF.Df_azfO7.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var C = (_a = class extends Yg {
  constructor() {
    super([
      "pie",
      "showData"
    ]);
  }
}, __ = new WeakMap(), __2 = new WeakMap(), __privateAdd(_a, __, m$1(_a, "PieTokenBuilder")), __privateAdd(_a, __2, U(_a, "PieTokenBuilder")), _a), P = (_b = class extends Xg {
  runCustomConverter(i, r, a) {
    if (i.name === "PIE_SECTION_LABEL") return r.replace(/"/g, "").trim();
  }
}, __3 = new WeakMap(), __22 = new WeakMap(), __privateAdd(_b, __3, m$1(_b, "PieValueConverter")), __privateAdd(_b, __22, U(_b, "PieValueConverter")), _b), p = {
  parser: {
    TokenBuilder: /* @__PURE__ */ U(() => new C(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ U(() => new P(), "ValueConverter")
  }
};
function M() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nc;
  let r = /* @__PURE__ */ za(/* @__PURE__ */ Ac(i), VS), a = /* @__PURE__ */ za(/* @__PURE__ */ Ec({
    shared: r
  }), HS, p);
  return r.ServiceRegistry.register(a), {
    shared: r,
    Pie: a
  };
}
m$1(M, "createPieServices");
U(M, "createPieServices");
export {
  M,
  p
};
