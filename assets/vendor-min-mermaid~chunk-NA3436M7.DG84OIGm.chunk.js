var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, __2;
import { z as za, A as Ac, E as Ec, U, q as qS, V as VS, N as Nc, J as JS, Y as Yg } from "./vendor-min-mermaid~chunk-JVB3IFOF.CyFWjgvM.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Cm_2-rE8.chunk.js";
var h = (_a = class extends Yg {
  constructor() {
    super([
      "gitGraph"
    ]);
  }
}, __ = new WeakMap(), __2 = new WeakMap(), __privateAdd(_a, __, m$1(_a, "GitGraphTokenBuilder")), __privateAdd(_a, __2, U(_a, "GitGraphTokenBuilder")), _a), m = {
  parser: {
    TokenBuilder: U(() => new h(), "TokenBuilder"),
    ValueConverter: U(() => new JS(), "ValueConverter")
  }
};
function v() {
  let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nc;
  let r = za(Ac(c), VS), i = za(Ec({
    shared: r
  }), qS, m);
  return r.ServiceRegistry.register(i), {
    shared: r,
    GitGraph: i
  };
}
m$1(v, "createGitGraphServices");
U(v, "createGitGraphServices");
export {
  m,
  v
};
