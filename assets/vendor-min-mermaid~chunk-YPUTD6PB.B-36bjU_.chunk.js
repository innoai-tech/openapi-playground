import { M as M$1, a as N$1, $, i as X, G as G$1, y, n as K$1, v as Yt, x as j, o as d, z as lt, B as B$1 } from './vendor-min-mermaid~chunk-6BY5RJGC.DU6P-5on.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.ByXaayWf.chunk.js';
var C = Yt(Object.keys, Object), T = C;
var V = Object.prototype, D = V.hasOwnProperty;
function K(r) {
    if (!K$1(r)) return T(r);
    var t = [];
    for(var o in Object(r))D.call(r, o) && o != "constructor" && t.push(o);
    return t;
}
m$1(K, "baseKeys");
var O = K;
var N = j(d, "DataView"), s = N;
var W = j(d, "Promise"), c = W;
var B = j(d, "Set"), g = B;
var z = j(d, "WeakMap"), u = z;
var M = "[object Map]", E = "[object Object]", h = "[object Promise]", x = "[object Set]", k = "[object WeakMap]", l = "[object DataView]", G = lt(s), L = lt(B$1), q = lt(c), F = lt(g), H = lt(u), p = y;
(s && p(new s(new ArrayBuffer(1))) != l || B$1 && p(new B$1) != M || c && p(c.resolve()) != h || g && p(new g) != x || u && p(new u) != k) && (p = m$1(function(r) {
    var t = y(r), o = t == E ? r.constructor : void 0, w = o ? lt(o) : "";
    if (w) switch(w){
        case G:
            return l;
        case L:
            return M;
        case q:
            return h;
        case F:
            return x;
        case H:
            return k;
    }
    return t;
}, "getTag"));
var A = p;
var I = "[object Map]", J = "[object Set]", Q = Object.prototype, R = Q.hasOwnProperty;
function U(r) {
    if (r == null) return true;
    if (M$1(r) && (N$1(r) || typeof r == "string" || typeof r.splice == "function" || $(r) || X(r) || G$1(r))) return !r.length;
    var t = A(r);
    if (t == I || t == J) return !r.size;
    if (K$1(r)) return !O(r).length;
    for(var o in r)if (R.call(r, o)) return false;
    return true;
}
m$1(U, "isEmpty");
var Cr = U;
export { A, Cr as C, O, g };
