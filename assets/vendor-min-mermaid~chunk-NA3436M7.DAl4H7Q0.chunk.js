import { z as za, A as Ac, E as Ec, U, q as qS, V as VS, N as Nc, J as JS, Y as Yg } from './vendor-min-mermaid~chunk-JVB3IFOF.DXQY8UJ9.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.ByXaayWf.chunk.js';
var h = class extends Yg {
    static #_ = m$1(this, "GitGraphTokenBuilder");
    static #_2 = U(this, "GitGraphTokenBuilder");
    constructor(){
        super([
            "gitGraph"
        ]);
    }
}, m = {
    parser: {
        TokenBuilder: U(()=>new h, "TokenBuilder"),
        ValueConverter: U(()=>new JS, "ValueConverter")
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
export { m, v };
