import { S as Su, z as za, $ as $u, k as ku, F, Z as ZN, J as JN, a as aC, i as iy } from './vendor-min-mermaid~chunk-L6MQJ2ZU.DtxICVSY.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var v = class extends iy {
    static{
        m$1(this, "PacketTokenBuilder");
    }
    static{
        F(this, "PacketTokenBuilder");
    }
    constructor(){
        super([
            "packet"
        ]);
    }
}, p = {
    parser: {
        TokenBuilder: /*#__PURE__*/ F(()=>new v, "TokenBuilder"),
        ValueConverter: /*#__PURE__*/ F(()=>new aC, "ValueConverter")
    }
};
function M(k = Su) {
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
