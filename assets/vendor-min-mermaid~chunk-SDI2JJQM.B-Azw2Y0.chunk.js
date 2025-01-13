var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, __2;
import { C as Cg, j, l as lC, z as zs, t as tC, X as Xl, n as nC, q as ql, Q as Ql } from "./vendor-min-mermaid~chunk-XVEYI5JQ.DH9eU0p3.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var v = (_a = class extends Cg {
  constructor() {
    super([
      "packet-beta"
    ]);
  }
}, __ = new WeakMap(), __2 = new WeakMap(), __privateAdd(_a, __, m$1(_a, "PacketTokenBuilder")), __privateAdd(_a, __2, j(_a, "PacketTokenBuilder")), _a), p = {
  parser: {
    TokenBuilder: /* @__PURE__ */ j(() => new v(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ j(() => new lC(), "ValueConverter")
  }
};
function M() {
  let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ql;
  let r = /* @__PURE__ */ zs(/* @__PURE__ */ Xl(k), tC), o = /* @__PURE__ */ zs(/* @__PURE__ */ ql({
    shared: r
  }), nC, p);
  return r.ServiceRegistry.register(o), {
    shared: r,
    Packet: o
  };
}
m$1(M, "createPacketServices");
j(M, "createPacketServices");
export {
  M,
  p
};
