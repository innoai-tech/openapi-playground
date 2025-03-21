var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, __2;
import { z as za, E as Ec, R as Rc, j, D as DS, b as bS, I as Ic, W as WS, a as Wg } from "./vendor-min-mermaid~chunk-AXOSD5AS.pM-XJGXE.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var v = (_a = class extends Wg {
  constructor() {
    super([
      "packet-beta"
    ]);
  }
}, __ = new WeakMap(), __2 = new WeakMap(), __privateAdd(_a, __, m$1(_a, "PacketTokenBuilder")), __privateAdd(_a, __2, j(_a, "PacketTokenBuilder")), _a), p = {
  parser: {
    TokenBuilder: /* @__PURE__ */ j(() => new v(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ j(() => new WS(), "ValueConverter")
  }
};
function M() {
  let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ic;
  let r = /* @__PURE__ */ za(/* @__PURE__ */ Ec(k), bS), o = /* @__PURE__ */ za(/* @__PURE__ */ Rc({
    shared: r
  }), DS, p);
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
