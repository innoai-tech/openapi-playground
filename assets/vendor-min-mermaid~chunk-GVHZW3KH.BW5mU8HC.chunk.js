var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, __2, _b, __3, __22;
import { z as za, E as Ec, R as Rc, j, F as FS, b as bS, I as Ic, B as Bg, a as Wg } from "./vendor-min-mermaid~chunk-AXOSD5AS.pM-XJGXE.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var C = (_a = class extends Wg {
  constructor() {
    super([
      "pie",
      "showData"
    ]);
  }
}, __ = new WeakMap(), __2 = new WeakMap(), __privateAdd(_a, __, m$1(_a, "PieTokenBuilder")), __privateAdd(_a, __2, j(_a, "PieTokenBuilder")), _a), P = (_b = class extends Bg {
  runCustomConverter(i, r, a) {
    if (i.name === "PIE_SECTION_LABEL") return r.replace(/"/g, "").trim();
  }
}, __3 = new WeakMap(), __22 = new WeakMap(), __privateAdd(_b, __3, m$1(_b, "PieValueConverter")), __privateAdd(_b, __22, j(_b, "PieValueConverter")), _b), p = {
  parser: {
    TokenBuilder: /* @__PURE__ */ j(() => new C(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ j(() => new P(), "ValueConverter")
  }
};
function M() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ic;
  let r = /* @__PURE__ */ za(/* @__PURE__ */ Ec(i), bS), a = /* @__PURE__ */ za(/* @__PURE__ */ Rc({
    shared: r
  }), FS, p);
  return r.ServiceRegistry.register(a), {
    shared: r,
    Pie: a
  };
}
m$1(M, "createPieServices");
j(M, "createPieServices");
export {
  M,
  p
};
