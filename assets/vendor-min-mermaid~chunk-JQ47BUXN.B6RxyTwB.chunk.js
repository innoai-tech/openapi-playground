import { z as za, $ as $u, k as ku, F, Z as ZN, J as JN, S as Su, b as aC, a as iy } from './vendor-min-mermaid~chunk-NPFRQMEE.DBwAjtMn.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var v = class extends iy {
    static #_ = m$1(this, "PacketTokenBuilder");
    static #_2 = F(this, "PacketTokenBuilder");
    constructor(){
        super([
            "packet-beta"
        ]);
    }
}, p = {
    parser: {
        TokenBuilder: /*#__PURE__*/ F(()=>new v, "TokenBuilder"),
        ValueConverter: /*#__PURE__*/ F(()=>new aC, "ValueConverter")
    }
};
function M() {
    let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Su;
    let r = /*#__PURE__*/ za(/*#__PURE__*/ $u(k), JN), o = /*#__PURE__*/ za(/*#__PURE__*/ ku({
        shared: r
    }), ZN, p);
    return r.ServiceRegistry.register(o), {
        shared: r,
        Packet: o
    };
}
m$1(M, "createPacketServices");
F(M, "createPacketServices");
export { M, p };
