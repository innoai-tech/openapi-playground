import { z as za, A as Ac, E as Ec, U, j as jS, V as VS, N as Nc, J as JS, Y as Yg } from './vendor-min-mermaid~chunk-JVB3IFOF.DXQY8UJ9.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.ByXaayWf.chunk.js';
var v = class extends Yg {
    static #_ = m$1(this, "PacketTokenBuilder");
    static #_2 = U(this, "PacketTokenBuilder");
    constructor(){
        super([
            "packet-beta"
        ]);
    }
}, p = {
    parser: {
        TokenBuilder: U(()=>new v, "TokenBuilder"),
        ValueConverter: U(()=>new JS, "ValueConverter")
    }
};
function M() {
    let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nc;
    let r = za(Ac(k), VS), o = za(Ec({
        shared: r
    }), jS, p);
    return r.ServiceRegistry.register(o), {
        shared: r,
        Packet: o
    };
}
m$1(M, "createPacketServices");
U(M, "createPacketServices");
export { M, p };
