import { z as za, A as Ac, E as Ec, U, a as zS, V as VS, N as Nc, X as Xg, Y as Yg } from './vendor-min-mermaid~chunk-JVB3IFOF.BvdmRkvX.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var A = class extends Yg {
    static #_ = m$1(this, "ArchitectureTokenBuilder");
    static #_2 = U(this, "ArchitectureTokenBuilder");
    constructor(){
        super([
            "architecture"
        ]);
    }
}, C = class extends Xg {
    static #_ = m$1(this, "ArchitectureValueConverter");
    static #_2 = U(this, "ArchitectureValueConverter");
    runCustomConverter(t, e, a) {
        if (t.name === "ARCH_ICON") return e.replace(/[()]/g, "").trim();
        if (t.name === "ARCH_TEXT_ICON") return e.replace(/["()]/g, "");
        if (t.name === "ARCH_TITLE") return e.replace(/[[\]]/g, "").trim();
    }
}, v = {
    parser: {
        TokenBuilder: /*#__PURE__*/ U(()=>new A, "TokenBuilder"),
        ValueConverter: /*#__PURE__*/ U(()=>new C, "ValueConverter")
    }
};
function T() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nc;
    let e = /*#__PURE__*/ za(/*#__PURE__*/ Ac(t), VS), a = /*#__PURE__*/ za(/*#__PURE__*/ Ec({
        shared: e
    }), zS, v);
    return e.ServiceRegistry.register(a), {
        shared: e,
        Architecture: a
    };
}
m$1(T, "createArchitectureServices");
U(T, "createArchitectureServices");
export { T, v };
