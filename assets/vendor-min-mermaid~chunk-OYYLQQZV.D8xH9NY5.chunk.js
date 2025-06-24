import { z as za, E as Ec, R as Rc, B, K as KC, a as BC, I as Ic, X as XC, q as qg } from './vendor-min-mermaid~chunk-QEWQD23V.C_oZq47W.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var v = class extends qg {
    static #_ = m$1(this, "PacketTokenBuilder");
    static #_2 = B(this, "PacketTokenBuilder");
    constructor(){
        super([
            "packet-beta"
        ]);
    }
}, p = {
    parser: {
        TokenBuilder: /*#__PURE__*/ B(()=>new v, "TokenBuilder"),
        ValueConverter: /*#__PURE__*/ B(()=>new XC, "ValueConverter")
    }
};
function M() {
    let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ic;
    let r = /*#__PURE__*/ za(/*#__PURE__*/ Ec(k), BC), o = /*#__PURE__*/ za(/*#__PURE__*/ Rc({
        shared: r
    }), KC, p);
    return r.ServiceRegistry.register(o), {
        shared: r,
        Packet: o
    };
}
m$1(M, "createPacketServices");
B(M, "createPacketServices");
export { M, p };
