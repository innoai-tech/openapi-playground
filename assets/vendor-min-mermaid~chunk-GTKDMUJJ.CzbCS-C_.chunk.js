var h = Object.create;
var e = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var j = Object.getOwnPropertyNames;
var k = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var m$1 = (b, a)=>e(b, "name", {
        value: a,
        configurable: true
    });
var n = (b, a)=>()=>(a || b((a = {
            exports: {}
        }).exports, a), a.exports), o = (b, a)=>{
    for(var c in a)e(b, c, {
        get: a[c],
        enumerable: true
    });
}, f = (b, a, c, g)=>{
    if (a && typeof a == "object" || typeof a == "function") for (let d of j(a))!l.call(b, d) && d !== c && e(b, d, {
        get: ()=>a[d],
        enumerable: !(g = /*#__PURE__*/ i(a, d)) || g.enumerable
    });
    return b;
}, p = (b, a, c)=>(f(b, a, "default"), c), q = (b, a, c)=>(c = b != null ? h(/*#__PURE__*/ k(b)) : {}, f(/*#__PURE__*/ e(c, "default", {
        value: b,
        enumerable: true
    }), b));
export { m$1 as m, n, o, p, q };
