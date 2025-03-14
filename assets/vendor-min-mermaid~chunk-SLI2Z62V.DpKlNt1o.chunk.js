var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, __2;
import { z as zs, X as Xl, q as ql, j, a as aC, t as tC, Q as Ql, l as lC, C as Cg } from "./vendor-min-mermaid~chunk-XVEYI5JQ.Dmkg_uJ9.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var h = (_a = class extends Cg {
  constructor() {
    super([
      "gitGraph"
    ]);
  }
}, __ = new WeakMap(), __2 = new WeakMap(), __privateAdd(_a, __, m$1(_a, "GitGraphTokenBuilder")), __privateAdd(_a, __2, j(_a, "GitGraphTokenBuilder")), _a), m = {
  parser: {
    TokenBuilder: /* @__PURE__ */ j(() => new h(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ j(() => new lC(), "ValueConverter")
  }
};
function v() {
  let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ql;
  let r = /* @__PURE__ */ zs(/* @__PURE__ */ Xl(c), tC), i = /* @__PURE__ */ zs(/* @__PURE__ */ ql({
    shared: r
  }), aC, m);
  return r.ServiceRegistry.register(i), {
    shared: r,
    GitGraph: i
  };
}
m$1(v, "createGitGraphServices");
j(v, "createGitGraphServices");
export {
  m,
  v
};
