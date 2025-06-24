import { z as za, E as Ec, R as Rc, B, j as jC, a as BC, I as Ic, c as zg, q as qg } from './vendor-min-mermaid~chunk-QEWQD23V.C_oZq47W.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var A = class extends qg {
    static #_ = m$1(this, "ArchitectureTokenBuilder");
    static #_2 = B(this, "ArchitectureTokenBuilder");
    constructor(){
        super([
            "architecture"
        ]);
    }
}, C = class extends zg {
    static #_ = m$1(this, "ArchitectureValueConverter");
    static #_2 = B(this, "ArchitectureValueConverter");
    runCustomConverter(t, e, a) {
        if (t.name === "ARCH_ICON") return e.replace(/[()]/g, "").trim();
        if (t.name === "ARCH_TEXT_ICON") return e.replace(/["()]/g, "");
        if (t.name === "ARCH_TITLE") return e.replace(/[[\]]/g, "").trim();
    }
}, v = {
    parser: {
        TokenBuilder: /*#__PURE__*/ B(()=>new A, "TokenBuilder"),
        ValueConverter: /*#__PURE__*/ B(()=>new C, "ValueConverter")
    }
};
function T() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ic;
    let e = /*#__PURE__*/ za(/*#__PURE__*/ Ec(t), BC), a = /*#__PURE__*/ za(/*#__PURE__*/ Rc({
        shared: e
    }), jC, v);
    return e.ServiceRegistry.register(a), {
        shared: e,
        Architecture: a
    };
}
m$1(T, "createArchitectureServices");
B(T, "createArchitectureServices");
export { T, v };
