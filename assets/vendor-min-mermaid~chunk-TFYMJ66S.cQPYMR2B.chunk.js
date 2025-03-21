var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, __2;
import { z as za, E as Ec, R as Rc, j, M as MS, b as bS, I as Ic, W as WS, a as Wg } from "./vendor-min-mermaid~chunk-AXOSD5AS.pM-XJGXE.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var v = (_a = class extends Wg {
  constructor() {
    super([
      "info",
      "showInfo"
    ]);
  }
}, __ = new WeakMap(), __2 = new WeakMap(), __privateAdd(_a, __, m$1(_a, "InfoTokenBuilder")), __privateAdd(_a, __2, j(_a, "InfoTokenBuilder")), _a), I = {
  parser: {
    TokenBuilder: /* @__PURE__ */ j(() => new v(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ j(() => new WS(), "ValueConverter")
  }
};
function M() {
  let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ic;
  let r = /* @__PURE__ */ za(/* @__PURE__ */ Ec(f), bS), t = /* @__PURE__ */ za(/* @__PURE__ */ Rc({
    shared: r
  }), MS, I);
  return r.ServiceRegistry.register(t), {
    shared: r,
    Info: t
  };
}
m$1(M, "createInfoServices");
j(M, "createInfoServices");
export {
  I,
  M
};
