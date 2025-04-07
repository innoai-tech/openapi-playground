import { z as za, A as Ac, E as Ec, U, b as XS, V as VS, N as Nc, J as JS, Y as Yg } from './vendor-min-mermaid~chunk-JVB3IFOF.DXQY8UJ9.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.ByXaayWf.chunk.js';
var R = class extends Yg {
    static #_ = m$1(this, "RadarTokenBuilder");
    static #_2 = U(this, "RadarTokenBuilder");
    constructor(){
        super([
            "radar-beta"
        ]);
    }
}, M = {
    parser: {
        TokenBuilder: U(()=>new R, "TokenBuilder"),
        ValueConverter: U(()=>new JS, "ValueConverter")
    }
};
function p() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nc;
    let r = za(Ac(m), VS), o = za(Ec({
        shared: r
    }), XS, M);
    return r.ServiceRegistry.register(o), {
        shared: r,
        Radar: o
    };
}
m$1(p, "createRadarServices");
U(p, "createRadarServices");
export { M, p };
