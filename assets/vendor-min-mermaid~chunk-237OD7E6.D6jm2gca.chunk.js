var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, __2;
import { z as za, A as Ac, E as Ec, U, j as jS, V as VS, N as Nc, J as JS, Y as Yg } from "./vendor-min-mermaid~chunk-JVB3IFOF.Df_azfO7.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var v = (_a = class extends Yg {
  constructor() {
    super([
      "packet-beta"
    ]);
  }
}, __ = new WeakMap(), __2 = new WeakMap(), __privateAdd(_a, __, m$1(_a, "PacketTokenBuilder")), __privateAdd(_a, __2, U(_a, "PacketTokenBuilder")), _a), p = {
  parser: {
    TokenBuilder: /* @__PURE__ */ U(() => new v(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ U(() => new JS(), "ValueConverter")
  }
};
function M() {
  let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nc;
  let r = /* @__PURE__ */ za(/* @__PURE__ */ Ac(k), VS), o = /* @__PURE__ */ za(/* @__PURE__ */ Ec({
    shared: r
  }), jS, p);
  return r.ServiceRegistry.register(o), {
    shared: r,
    Packet: o
  };
}
m$1(M, "createPacketServices");
U(M, "createPacketServices");
export {
  M,
  p
};
