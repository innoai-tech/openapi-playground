import { X as Xe$1 } from './vendor-min-mermaid~chunk-IIWVAQKY.CwtpAX-Q.chunk.js';
import { t as tt$1, R as Rl, i as ih, f as Ef, C as Cf, g as gC, H as Hl } from './vendor-min-mermaid~chunk-RAMAZW42.vc82q0BN.chunk.js';
import { m as m$1, q, n } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var define_process_env_default = {};
var _e = /*#__PURE__*/ n((ir, Be)=>{
    var P = 1e3, j = P * 60, D = j * 60, E = D * 24, Rt = E * 7, Ft = E * 365.25;
    Be.exports = function(o3, e) {
        e = e || {};
        var t = typeof o3;
        if (t === "string" && o3.length > 0) return vt(o3);
        if (t === "number" && isFinite(o3)) return e.long ? Et(o3) : Lt(o3);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(o3));
    };
    function vt(o3) {
        if (o3 = /*#__PURE__*/ String(o3), !(o3.length > 100)) {
            var e = /*#__PURE__*/ /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o3);
            if (e) {
                var t = /*#__PURE__*/ parseFloat(e[1]), n = /*#__PURE__*/ (e[2] || "ms").toLowerCase();
                switch(n){
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return t * Ft;
                    case "weeks":
                    case "week":
                    case "w":
                        return t * Rt;
                    case "days":
                    case "day":
                    case "d":
                        return t * E;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return t * D;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return t * j;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return t * P;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return t;
                    default:
                        return;
                }
            }
        }
    }
    m$1(vt, "parse");
    function Lt(o3) {
        var e = /*#__PURE__*/ Math.abs(o3);
        return e >= E ? Math.round(o3 / E) + "d" : e >= D ? Math.round(o3 / D) + "h" : e >= j ? Math.round(o3 / j) + "m" : e >= P ? Math.round(o3 / P) + "s" : o3 + "ms";
    }
    m$1(Lt, "fmtShort");
    function Et(o3) {
        var e = /*#__PURE__*/ Math.abs(o3);
        return e >= E ? J(o3, e, E, "day") : e >= D ? J(o3, e, D, "hour") : e >= j ? J(o3, e, j, "minute") : e >= P ? J(o3, e, P, "second") : o3 + " ms";
    }
    m$1(Et, "fmtLong");
    function J(o3, e, t, n) {
        var r = e >= t * 1.5;
        return Math.round(o3 / t) + " " + n + (r ? "s" : "");
    }
    m$1(J, "plural");
});
var qe = /*#__PURE__*/ n((ar, Oe)=>{
    function At(o3) {
        t.debug = t, t.default = t, t.coerce = p, t.disable = s, t.enable = r, t.enabled = l, t.humanize = /*#__PURE__*/ _e(), t.destroy = u, Object.keys(o3).forEach((c)=>{
            t[c] = o3[c];
        }), t.names = [], t.skips = [], t.formatters = {};
        function e(c) {
            let h = 0;
            for(let f = 0; f < c.length; f++)h = (h << 5) - h + c.charCodeAt(f), h |= 0;
            return t.colors[Math.abs(h) % t.colors.length];
        }
        m$1(e, "selectColor"), t.selectColor = e;
        function t(c) {
            let h, f = null, g, b;
            function d() {
                for(var _len = arguments.length, m = new Array(_len), _key = 0; _key < _len; _key++){
                    m[_key] = arguments[_key];
                }
                if (!d.enabled) return;
                let T = d, I = /*#__PURE__*/ Number(/* @__PURE__ */ new Date()), C = I - (h || I);
                T.diff = C, T.prev = h, T.curr = I, h = I, m[0] = /*#__PURE__*/ t.coerce(m[0]), typeof m[0] != "string" && m.unshift("%O");
                let w = 0;
                m[0] = /*#__PURE__*/ m[0].replace(/%([a-zA-Z%])/g, (q, G)=>{
                    if (q === "%%") return "%";
                    w++;
                    let v = t.formatters[G];
                    if (typeof v == "function") {
                        let dt = m[w];
                        q = /*#__PURE__*/ v.call(T, dt), m.splice(w, 1), w--;
                    }
                    return q;
                }), t.formatArgs.call(T, m), (T.log || t.log).apply(T, m);
            }
            return m$1(d, "debug"), d.namespace = c, d.useColors = /*#__PURE__*/ t.useColors(), d.color = /*#__PURE__*/ t.selectColor(c), d.extend = n, d.destroy = t.destroy, Object.defineProperty(d, "enabled", {
                enumerable: true,
                configurable: false,
                get: /*#__PURE__*/ m$1(()=>f !== null ? f : (g !== t.namespaces && (g = t.namespaces, b = /*#__PURE__*/ t.enabled(c)), b), "get"),
                set: /*#__PURE__*/ m$1((m)=>{
                    f = m;
                }, "set")
            }), typeof t.init == "function" && t.init(d), d;
        }
        m$1(t, "createDebug");
        function n(c, h) {
            let f = /*#__PURE__*/ t(this.namespace + (typeof h > "u" ? ":" : h) + c);
            return f.log = this.log, f;
        }
        m$1(n, "extend");
        function r(c) {
            t.save(c), t.namespaces = c, t.names = [], t.skips = [];
            let h = /*#__PURE__*/ (typeof c == "string" ? c : "").trim().replace(" ", ",").split(",").filter(Boolean);
            for (let f of h)f[0] === "-" ? t.skips.push(/*#__PURE__*/ f.slice(1)) : t.names.push(f);
        }
        m$1(r, "enable");
        function i(c, h) {
            let f = 0, g = 0, b = -1, d = 0;
            for(; f < c.length;)if (g < h.length && (h[g] === c[f] || h[g] === "*")) h[g] === "*" ? (b = g, d = f, g++) : (f++, g++);
            else if (b !== -1) g = b + 1, d++, f = d;
            else return false;
            for(; g < h.length && h[g] === "*";)g++;
            return g === h.length;
        }
        m$1(i, "matchesTemplate");
        function s() {
            let c = /*#__PURE__*/ [
                ...t.names,
                .../*#__PURE__*/ t.skips.map((h)=>"-" + h)
            ].join(",");
            return t.enable(""), c;
        }
        m$1(s, "disable");
        function l(c) {
            for (let h of t.skips)if (i(c, h)) return false;
            for (let h of t.names)if (i(c, h)) return true;
            return false;
        }
        m$1(l, "enabled");
        function p(c) {
            return c instanceof Error ? c.stack || c.message : c;
        }
        m$1(p, "coerce");
        function u() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        return m$1(u, "destroy"), t.enable(/*#__PURE__*/ t.load()), t;
    }
    m$1(At, "setup");
    Oe.exports = At;
});
var Ge = /*#__PURE__*/ n((S, K)=>{
    S.formatArgs = Mt;
    S.save = Pt;
    S.load = jt;
    S.useColors = zt;
    S.storage = /*#__PURE__*/ Dt();
    S.destroy = /* @__PURE__ */ /*#__PURE__*/ (()=>{
        let o3 = false;
        return ()=>{
            o3 || (o3 = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
        };
    })();
    S.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33"
    ];
    function zt() {
        if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return true;
        if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
        let o3;
        return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (o3 = /*#__PURE__*/ navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(o3[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    m$1(zt, "useColors");
    function Mt(o3) {
        if (o3[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + o3[0] + (this.useColors ? "%c " : " ") + "+" + K.exports.humanize(this.diff), !this.useColors) return;
        let e = "color: " + this.color;
        o3.splice(1, 0, e, "color: inherit");
        let t = 0, n = 0;
        o3[0].replace(/%[a-zA-Z%]/g, (r)=>{
            r !== "%%" && (t++, r === "%c" && (n = t));
        }), o3.splice(n, 0, e);
    }
    m$1(Mt, "formatArgs");
    S.log = console.debug || console.log || (()=>{});
    function Pt(o3) {
        try {
            o3 ? S.storage.setItem("debug", o3) : S.storage.removeItem("debug");
        } catch  {}
    }
    m$1(Pt, "save");
    function jt() {
        let o3;
        try {
            o3 = /*#__PURE__*/ S.storage.getItem("debug");
        } catch  {}
        return !o3 && typeof process < "u" && "env" in process && (o3 = define_process_env_default.DEBUG), o3;
    }
    m$1(jt, "load");
    function Dt() {
        try {
            return localStorage;
        } catch  {}
    }
    m$1(Dt, "localstorage");
    K.exports = /*#__PURE__*/ qe()(S);
    var { formatters: Bt } = K.exports;
    Bt.j = function(o3) {
        try {
            return JSON.stringify(o3);
        } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
        }
    };
});
var kt = /*#__PURE__*/ Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16
}), M = /*#__PURE__*/ Object.freeze({
    rotate: 0,
    vFlip: false,
    hFlip: false
}), oe = /*#__PURE__*/ Object.freeze({
    ...kt,
    ...M
}), Ae = /*#__PURE__*/ Object.freeze({
    ...oe,
    body: "",
    hidden: false
});
var xt = /*#__PURE__*/ Object.freeze({
    width: null,
    height: null
}), ze = /*#__PURE__*/ Object.freeze({
    ...xt,
    ...M
});
var ie = /*#__PURE__*/ m$1(function(o3, e, t) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
    let r = /*#__PURE__*/ o3.split(":");
    if (o3.slice(0, 1) === "@") {
        if (r.length < 2 || r.length > 3) return null;
        n = /*#__PURE__*/ r.shift().slice(1);
    }
    if (r.length > 3 || !r.length) return null;
    if (r.length > 1) {
        let l = /*#__PURE__*/ r.pop(), p = /*#__PURE__*/ r.pop(), u = {
            provider: r.length > 0 ? r[0] : n,
            prefix: p,
            name: l
        };
        return e && !Q(u) ? null : u;
    }
    let i = r[0], s = /*#__PURE__*/ i.split("-");
    if (s.length > 1) {
        let l = {
            provider: n,
            prefix: /*#__PURE__*/ s.shift(),
            name: /*#__PURE__*/ s.join("-")
        };
        return e && !Q(l) ? null : l;
    }
    if (t && n === "") {
        let l = {
            provider: n,
            prefix: "",
            name: i
        };
        return e && !Q(l, t) ? null : l;
    }
    return null;
}, "stringToIcon"), Q = /*#__PURE__*/ m$1((o3, e)=>o3 ? !!((e && o3.prefix === "" || o3.prefix) && o3.name) : false, "validateIconName");
function Me(o3, e) {
    let t = {};
    !o3.hFlip != !e.hFlip && (t.hFlip = true), !o3.vFlip != !e.vFlip && (t.vFlip = true);
    let n = ((o3.rotate || 0) + (e.rotate || 0)) % 4;
    return n && (t.rotate = n), t;
}
m$1(Me, "mergeIconTransformations");
function le(o3, e) {
    let t = /*#__PURE__*/ Me(o3, e);
    for(let n in Ae)n in M ? n in o3 && !(n in t) && (t[n] = M[n]) : n in e ? t[n] = e[n] : n in o3 && (t[n] = o3[n]);
    return t;
}
m$1(le, "mergeIconData");
function Pe(o3, e) {
    let t = o3.icons, n = o3.aliases || /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ /*#__PURE__*/ Object.create(null);
    function i(s) {
        if (t[s]) return r[s] = [];
        if (!(s in r)) {
            r[s] = null;
            let l = n[s] && n[s].parent, p = l && i(l);
            p && (r[s] = /*#__PURE__*/ [
                l
            ].concat(p));
        }
        return r[s];
    }
    return m$1(i, "resolve"), (e || Object.keys(t).concat(/*#__PURE__*/ Object.keys(n))).forEach(i), r;
}
m$1(Pe, "getIconsTree");
function je(o3, e, t) {
    let n = o3.icons, r = o3.aliases || /* @__PURE__ */ Object.create(null), i = {};
    function s(l) {
        i = /*#__PURE__*/ le(n[l] || r[l], i);
    }
    return m$1(s, "parse"), s(e), t.forEach(s), le(o3, i);
}
m$1(je, "internalGetIconData");
function ae(o3, e) {
    if (o3.icons[e]) return je(o3, e, []);
    let t = Pe(o3, [
        e
    ])[e];
    return t ? je(o3, e, t) : null;
}
m$1(ae, "getIconData");
var bt = /(-?[0-9.]*[0-9]+[0-9.]*)/g, wt = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ce(o3, e, t) {
    if (e === 1) return o3;
    if (t = t || 100, typeof o3 == "number") return Math.ceil(o3 * e * t) / t;
    if (typeof o3 != "string") return o3;
    let n = /*#__PURE__*/ o3.split(bt);
    if (n === null || !n.length) return o3;
    let r = [], i = /*#__PURE__*/ n.shift(), s = /*#__PURE__*/ wt.test(i);
    for(;;){
        if (s) {
            let l = /*#__PURE__*/ parseFloat(i);
            isNaN(l) ? r.push(i) : r.push(Math.ceil(l * e * t) / t);
        } else r.push(i);
        if (i = /*#__PURE__*/ n.shift(), i === void 0) return r.join("");
        s = !s;
    }
}
m$1(ce, "calculateSize");
function yt(o3) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "defs";
    let t = "", n = /*#__PURE__*/ o3.indexOf("<" + e);
    for(; n >= 0;){
        let r = /*#__PURE__*/ o3.indexOf(">", n), i = /*#__PURE__*/ o3.indexOf("</" + e);
        if (r === -1 || i === -1) break;
        let s = /*#__PURE__*/ o3.indexOf(">", i);
        if (s === -1) break;
        t += /*#__PURE__*/ o3.slice(r + 1, i).trim(), o3 = o3.slice(0, n).trim() + o3.slice(s + 1);
    }
    return {
        defs: t,
        content: o3
    };
}
m$1(yt, "splitSVGDefs");
function Ct(o3, e) {
    return o3 ? "<defs>" + o3 + "</defs>" + e : e;
}
m$1(Ct, "mergeDefsAndContent");
function De(o3, e, t) {
    let n = /*#__PURE__*/ yt(o3);
    return Ct(n.defs, e + n.content + t);
}
m$1(De, "wrapSVGContent");
var St = /*#__PURE__*/ m$1((o3)=>o3 === "unset" || o3 === "undefined" || o3 === "none", "isUnsetKeyword");
function pe(o3, e) {
    let t = {
        ...oe,
        ...o3
    }, n = {
        ...ze,
        ...e
    }, r = {
        left: t.left,
        top: t.top,
        width: t.width,
        height: t.height
    }, i = t.body;
    [
        t,
        n
    ].forEach((d)=>{
        let m = [], T = d.hFlip, I = d.vFlip, C = d.rotate;
        T ? I ? C += 2 : (m.push("translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"), m.push("scale(-1 1)"), r.top = r.left = 0) : I && (m.push("translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"), m.push("scale(1 -1)"), r.top = r.left = 0);
        let w;
        switch(C < 0 && (C -= Math.floor(C / 4) * 4), C = C % 4, C){
            case 1:
                w = r.height / 2 + r.top, m.unshift("rotate(90 " + w.toString() + " " + w.toString() + ")");
                break;
            case 2:
                m.unshift("rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")");
                break;
            case 3:
                w = r.width / 2 + r.left, m.unshift("rotate(-90 " + w.toString() + " " + w.toString() + ")");
                break;
        }
        C % 2 === 1 && (r.left !== r.top && (w = r.left, r.left = r.top, r.top = w), r.width !== r.height && (w = r.width, r.width = r.height, r.height = w)), m.length && (i = /*#__PURE__*/ De(i, '<g transform="' + m.join(" ") + '">', "</g>"));
    });
    let s = n.width, l = n.height, p = r.width, u = r.height, c, h;
    s === null ? (h = l === null ? "1em" : l === "auto" ? u : l, c = /*#__PURE__*/ ce(h, p / u)) : (c = s === "auto" ? p : s, h = l === null ? ce(c, u / p) : l === "auto" ? u : l);
    let f = {}, g = /*#__PURE__*/ m$1((d, m)=>{
        St(m) || (f[d] = /*#__PURE__*/ m.toString());
    }, "setAttr");
    g("width", c), g("height", h);
    let b = [
        r.left,
        r.top,
        p,
        u
    ];
    return f.viewBox = /*#__PURE__*/ b.join(" "), {
        attributes: f,
        viewBox: b,
        body: i
    };
}
m$1(pe, "iconToSVG");
var Tt = /\sid="(\S+)"/g, It = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16), $t = 0;
function ue(o3) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : It;
    let t = [], n;
    for(; n = /*#__PURE__*/ Tt.exec(o3);)t.push(n[1]);
    if (!t.length) return o3;
    let r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
    return t.forEach((i)=>{
        let s = typeof e == "function" ? e(i) : e + ($t++).toString(), l = /*#__PURE__*/ i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        o3 = /*#__PURE__*/ o3.replace(new RegExp('([#;"])(' + l + ')([")]|\\.[a-z])', "g"), "$1" + s + r + "$3");
    }), o3 = /*#__PURE__*/ o3.replace(new RegExp(r, "g"), ""), o3;
}
m$1(ue, "replaceIDs");
function he(o3, e) {
    let t = o3.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for(let n in e)t += " " + n + '="' + e[n] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + t + ">" + o3 + "</svg>";
}
m$1(he, "iconToHTML");
q(/*#__PURE__*/ Ge());
var _t = {
    body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
    height: 80,
    width: 80
}, fe = /* @__PURE__ */ new Map(), We = /* @__PURE__ */ new Map(), yr = /*#__PURE__*/ m$1((o3)=>{
    for (let e of o3){
        if (!e.name) throw new Error('Invalid icon loader. Must have a "name" property with non-empty string value.');
        if (tt$1.debug("Registering icon pack:", e.name), "loader" in e) We.set(e.name, e.loader);
        else if ("icons" in e) fe.set(e.name, e.icons);
        else throw tt$1.error("Invalid icon loader:", e), new Error('Invalid icon loader. Must have either "icons" or "loader" property.');
    }
}, "registerIconPacks"), Ne = /*#__PURE__*/ m$1(async (o3, e)=>{
    let t = /*#__PURE__*/ ie(o3, true, e !== void 0);
    if (!t) throw new Error(`Invalid icon name: ${o3}`);
    let n = t.prefix || e;
    if (!n) throw new Error(`Icon name must contain a prefix: ${o3}`);
    let r = /*#__PURE__*/ fe.get(n);
    if (!r) {
        let s = /*#__PURE__*/ We.get(n);
        if (!s) throw new Error(`Icon set not found: ${t.prefix}`);
        try {
            r = {
                ...await s(),
                prefix: n
            }, fe.set(n, r);
        } catch (l) {
            throw tt$1.error(l), new Error(`Failed to load icon set: ${t.prefix}`);
        }
    }
    let i = /*#__PURE__*/ ae(r, t.name);
    if (!i) throw new Error(`Icon not found: ${o3}`);
    return i;
}, "getRegisteredIconData"), Ze = /*#__PURE__*/ m$1(async (o3)=>{
    try {
        return await Ne(o3), true;
    } catch  {
        return false;
    }
}, "isIconAvailable"), Ve = /*#__PURE__*/ m$1(async (o3, e, t)=>{
    let n;
    try {
        n = await Ne(o3, e?.fallbackPrefix);
    } catch (s) {
        tt$1.error(s), n = _t;
    }
    let r = /*#__PURE__*/ pe(n, e);
    return he(/*#__PURE__*/ ue(r.body), {
        ...r.attributes,
        ...t
    });
}, "getIconSVG");
function He(o3) {
    for(var e = [], t = 1; t < arguments.length; t++)e[t - 1] = arguments[t];
    var n = /*#__PURE__*/ Array.from(typeof o3 == "string" ? [
        o3
    ] : o3);
    n[n.length - 1] = /*#__PURE__*/ n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
    var r = /*#__PURE__*/ n.reduce(function(l, p) {
        var u = /*#__PURE__*/ p.match(/\n([\t ]+|(?!\s).)/g);
        return u ? l.concat(/*#__PURE__*/ u.map(function(c) {
            var h, f;
            return (f = (h = /*#__PURE__*/ c.match(/[\t ]/g)) === null || h === void 0 ? void 0 : h.length) !== null && f !== void 0 ? f : 0;
        })) : l;
    }, []);
    if (r.length) {
        var i = new RegExp(`
[	 ]{` + Math.min.apply(Math, r) + "}", "g");
        n = /*#__PURE__*/ n.map(function(l) {
            return l.replace(i, `
`);
        });
    }
    n[0] = /*#__PURE__*/ n[0].replace(/^\r?\n/, "");
    var s = n[0];
    return e.forEach(function(l, p) {
        var u = /*#__PURE__*/ s.match(/(?:^|\n)( *)$/), c = u ? u[1] : "", h = l;
        typeof l == "string" && l.includes(`
`) && (h = /*#__PURE__*/ String(l).split(`
`).map(function(f, g) {
            return g === 0 ? f : "" + c + f;
        }).join(`
`)), s += h + n[p + 1];
    }), s;
}
m$1(He, "dedent");
function me() {
    return {
        async: false,
        breaks: false,
        extensions: null,
        gfm: true,
        hooks: null,
        pedantic: false,
        renderer: null,
        silent: false,
        tokenizer: null,
        walkTokens: null
    };
}
m$1(me, "_getDefaults");
var z = /*#__PURE__*/ me();
function Ye(o3) {
    z = o3;
}
m$1(Ye, "changeDefaults");
var Z = {
    exec: /*#__PURE__*/ m$1(()=>null, "exec")
};
function x(o3) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    let t = typeof o3 == "string" ? o3 : o3.source, n = {
        replace: /*#__PURE__*/ m$1((r, i)=>{
            let s = typeof i == "string" ? i : i.source;
            return s = /*#__PURE__*/ s.replace(y.caret, "$1"), t = /*#__PURE__*/ t.replace(r, s), n;
        }, "replace"),
        getRegex: /*#__PURE__*/ m$1(()=>new RegExp(t, e), "getRegex")
    };
    return n;
}
m$1(x, "edit");
var y = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([\[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceTabs: /^\t+/,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] /,
    listReplaceTask: /^\[[ xX]\] +/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: /*#__PURE__*/ m$1((o3)=>new RegExp(`^( {0,3}${o3})((?:[	 ][^\\n]*)?(?:\\n|$))`), "listItemRegex"),
    nextBulletRegex: /*#__PURE__*/ m$1((o3)=>new RegExp(`^ {0,${Math.min(3, o3 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), "nextBulletRegex"),
    hrRegex: /*#__PURE__*/ m$1((o3)=>new RegExp(`^ {0,${Math.min(3, o3 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), "hrRegex"),
    fencesBeginRegex: /*#__PURE__*/ m$1((o3)=>new RegExp(`^ {0,${Math.min(3, o3 - 1)}}(?:\`\`\`|~~~)`), "fencesBeginRegex"),
    headingBeginRegex: /*#__PURE__*/ m$1((o3)=>new RegExp(`^ {0,${Math.min(3, o3 - 1)}}#`), "headingBeginRegex"),
    htmlBeginRegex: /*#__PURE__*/ m$1((o3)=>new RegExp(`^ {0,${Math.min(3, o3 - 1)}}<(?:[a-z].*>|!--)`, "i"), "htmlBeginRegex")
}, Ot = /^(?:[ \t]*(?:\n|$))+/, qt = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Gt = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, H = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Wt = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ke = /(?:[*+-]|\d{1,9}[.)])/, et = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, tt = /*#__PURE__*/ x(et).replace(/bull/g, ke).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Nt = /*#__PURE__*/ x(et).replace(/bull/g, ke).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), xe = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Zt = /^[^\n]+/, be = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Vt = /*#__PURE__*/ x(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", be).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Ht = /*#__PURE__*/ x(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ke).getRegex(), ee = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", we = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Ut = /*#__PURE__*/ x("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", we).replace("tag", ee).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), nt = /*#__PURE__*/ x(xe).replace("hr", H).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ee).getRegex(), Qt = /*#__PURE__*/ x(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", nt).getRegex(), ye = {
    blockquote: Qt,
    code: qt,
    def: Vt,
    fences: Gt,
    heading: Wt,
    hr: H,
    html: Ut,
    lheading: tt,
    list: Ht,
    newline: Ot,
    paragraph: nt,
    table: Z,
    text: Zt
}, Ue = /*#__PURE__*/ x("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", H).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ee).getRegex(), Jt = {
    ...ye,
    lheading: Nt,
    table: Ue,
    paragraph: /*#__PURE__*/ x(xe).replace("hr", H).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Ue).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ee).getRegex()
}, Kt = {
    ...ye,
    html: /*#__PURE__*/ x(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", we).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: Z,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: /*#__PURE__*/ x(xe).replace("hr", H).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", tt).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Xt = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Yt = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, rt = /^( {2,}|\\)\n(?!\s*$)/, en = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, te = /[\p{P}\p{S}]/u, Ce = /[\s\p{P}\p{S}]/u, st = /[^\s\p{P}\p{S}]/u, tn = /*#__PURE__*/ x(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Ce).getRegex(), ot = /(?!~)[\p{P}\p{S}]/u, nn = /(?!~)[\s\p{P}\p{S}]/u, rn = /(?:[^\s\p{P}\p{S}]|~)/u, sn = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, it = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, on = /*#__PURE__*/ x(it, "u").replace(/punct/g, te).getRegex(), ln = /*#__PURE__*/ x(it, "u").replace(/punct/g, ot).getRegex(), lt = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", an = /*#__PURE__*/ x(lt, "gu").replace(/notPunctSpace/g, st).replace(/punctSpace/g, Ce).replace(/punct/g, te).getRegex(), cn = /*#__PURE__*/ x(lt, "gu").replace(/notPunctSpace/g, rn).replace(/punctSpace/g, nn).replace(/punct/g, ot).getRegex(), pn = /*#__PURE__*/ x("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, st).replace(/punctSpace/g, Ce).replace(/punct/g, te).getRegex(), un = /*#__PURE__*/ x(/\\(punct)/, "gu").replace(/punct/g, te).getRegex(), hn = /*#__PURE__*/ x(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), fn = /*#__PURE__*/ x(we).replace("(?:-->|$)", "-->").getRegex(), gn = /*#__PURE__*/ x("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", fn).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Y = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, dn = /*#__PURE__*/ x(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Y).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), at = /*#__PURE__*/ x(/^!?\[(label)\]\[(ref)\]/).replace("label", Y).replace("ref", be).getRegex(), ct = /*#__PURE__*/ x(/^!?\[(ref)\](?:\[\])?/).replace("ref", be).getRegex(), mn = /*#__PURE__*/ x("reflink|nolink(?!\\()", "g").replace("reflink", at).replace("nolink", ct).getRegex(), Se = {
    _backpedal: Z,
    anyPunctuation: un,
    autolink: hn,
    blockSkip: sn,
    br: rt,
    code: Yt,
    del: Z,
    emStrongLDelim: on,
    emStrongRDelimAst: an,
    emStrongRDelimUnd: pn,
    escape: Xt,
    link: dn,
    nolink: ct,
    punctuation: tn,
    reflink: at,
    reflinkSearch: mn,
    tag: gn,
    text: en,
    url: Z
}, kn = {
    ...Se,
    link: /*#__PURE__*/ x(/^!?\[(label)\]\((.*?)\)/).replace("label", Y).getRegex(),
    reflink: /*#__PURE__*/ x(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Y).getRegex()
}, ge = {
    ...Se,
    emStrongRDelimAst: cn,
    emStrongLDelim: ln,
    url: /*#__PURE__*/ x(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, xn = {
    ...ge,
    br: /*#__PURE__*/ x(rt).replace("{2,}", "*").getRegex(),
    text: /*#__PURE__*/ x(ge.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, X = {
    normal: ye,
    gfm: Jt,
    pedantic: Kt
}, W = {
    normal: Se,
    gfm: ge,
    breaks: xn,
    pedantic: kn
}, bn = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
}, Qe = /*#__PURE__*/ m$1((o3)=>bn[o3], "getEscapeReplacement");
function F(o3, e) {
    if (e) {
        if (y.escapeTest.test(o3)) return o3.replace(y.escapeReplace, Qe);
    } else if (y.escapeTestNoEncode.test(o3)) return o3.replace(y.escapeReplaceNoEncode, Qe);
    return o3;
}
m$1(F, "escape");
function Je(o3) {
    try {
        o3 = /*#__PURE__*/ encodeURI(o3).replace(y.percentDecode, "%");
    } catch  {
        return null;
    }
    return o3;
}
m$1(Je, "cleanUrl");
function Ke(o3, e) {
    let t = /*#__PURE__*/ o3.replace(y.findPipe, (i, s, l)=>{
        let p = false, u = s;
        for(; --u >= 0 && l[u] === "\\";)p = !p;
        return p ? "|" : " |";
    }), n = /*#__PURE__*/ t.split(y.splitPipe), r = 0;
    if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
    else for(; n.length < e;)n.push("");
    for(; r < n.length; r++)n[r] = /*#__PURE__*/ n[r].trim().replace(y.slashPipe, "|");
    return n;
}
m$1(Ke, "splitCells");
function N(o3, e, t) {
    let n = o3.length;
    if (n === 0) return "";
    let r = 0;
    for(; r < n && o3.charAt(n - r - 1) === e;)r++;
    return o3.slice(0, n - r);
}
m$1(N, "rtrim");
function wn(o3, e) {
    if (o3.indexOf(e[1]) === -1) return -1;
    let t = 0;
    for(let n = 0; n < o3.length; n++)if (o3[n] === "\\") n++;
    else if (o3[n] === e[0]) t++;
    else if (o3[n] === e[1] && (t--, t < 0)) return n;
    return -1;
}
m$1(wn, "findClosingBracket");
function Xe(o3, e, t, n, r) {
    let i = e.href, s = e.title || null, l = /*#__PURE__*/ o3[1].replace(r.other.outputLinkReplace, "$1");
    if (o3[0].charAt(0) !== "!") {
        n.state.inLink = true;
        let p = {
            type: "link",
            raw: t,
            href: i,
            title: s,
            text: l,
            tokens: /*#__PURE__*/ n.inlineTokens(l)
        };
        return n.state.inLink = false, p;
    }
    return {
        type: "image",
        raw: t,
        href: i,
        title: s,
        text: l
    };
}
m$1(Xe, "outputLink");
function yn(o3, e, t) {
    let n = /*#__PURE__*/ o3.match(t.other.indentCodeCompensation);
    if (n === null) return e;
    let r = n[1];
    return e.split(`
`).map((i)=>{
        let s = /*#__PURE__*/ i.match(t.other.beginningSpace);
        if (s === null) return i;
        let [l] = s;
        return l.length >= r.length ? i.slice(r.length) : i;
    }).join(`
`);
}
m$1(yn, "indentCodeCompensation");
var _ = class {
    static #_ = m$1(this, "_Tokenizer");
    options;
    rules;
    lexer;
    constructor(e){
        this.options = e || z;
    }
    space(e) {
        let t = /*#__PURE__*/ this.rules.block.newline.exec(e);
        if (t && t[0].length > 0) return {
            type: "space",
            raw: t[0]
        };
    }
    code(e) {
        let t = /*#__PURE__*/ this.rules.block.code.exec(e);
        if (t) {
            let n = /*#__PURE__*/ t[0].replace(this.rules.other.codeRemoveIndent, "");
            return {
                type: "code",
                raw: t[0],
                codeBlockStyle: "indented",
                text: this.options.pedantic ? n : N(n, `
`)
            };
        }
    }
    fences(e) {
        let t = /*#__PURE__*/ this.rules.block.fences.exec(e);
        if (t) {
            let n = t[0], r = /*#__PURE__*/ yn(n, t[3] || "", this.rules);
            return {
                type: "code",
                raw: n,
                lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
                text: r
            };
        }
    }
    heading(e) {
        let t = /*#__PURE__*/ this.rules.block.heading.exec(e);
        if (t) {
            let n = /*#__PURE__*/ t[2].trim();
            if (this.rules.other.endingHash.test(n)) {
                let r = /*#__PURE__*/ N(n, "#");
                (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = /*#__PURE__*/ r.trim());
            }
            return {
                type: "heading",
                raw: t[0],
                depth: t[1].length,
                text: n,
                tokens: /*#__PURE__*/ this.lexer.inline(n)
            };
        }
    }
    hr(e) {
        let t = /*#__PURE__*/ this.rules.block.hr.exec(e);
        if (t) return {
            type: "hr",
            raw: /*#__PURE__*/ N(t[0], `
`)
        };
    }
    blockquote(e) {
        let t = /*#__PURE__*/ this.rules.block.blockquote.exec(e);
        if (t) {
            let n = /*#__PURE__*/ N(t[0], `
`).split(`
`), r = "", i = "", s = [];
            for(; n.length > 0;){
                let l = false, p = [], u;
                for(u = 0; u < n.length; u++)if (this.rules.other.blockquoteStart.test(n[u])) p.push(n[u]), l = true;
                else if (!l) p.push(n[u]);
                else break;
                n = /*#__PURE__*/ n.slice(u);
                let c = /*#__PURE__*/ p.join(`
`), h = /*#__PURE__*/ c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
                r = r ? `${r}
${c}` : c, i = i ? `${i}
${h}` : h;
                let f = this.lexer.state.top;
                if (this.lexer.state.top = true, this.lexer.blockTokens(h, s, true), this.lexer.state.top = f, n.length === 0) break;
                let g = /*#__PURE__*/ s.at(-1);
                if (g?.type === "code") break;
                if (g?.type === "blockquote") {
                    let b = g, d = b.raw + `
` + n.join(`
`), m = /*#__PURE__*/ this.blockquote(d);
                    s[s.length - 1] = m, r = r.substring(0, r.length - b.raw.length) + m.raw, i = i.substring(0, i.length - b.text.length) + m.text;
                    break;
                } else if (g?.type === "list") {
                    let b = g, d = b.raw + `
` + n.join(`
`), m = /*#__PURE__*/ this.list(d);
                    s[s.length - 1] = m, r = r.substring(0, r.length - g.raw.length) + m.raw, i = i.substring(0, i.length - b.raw.length) + m.raw, n = /*#__PURE__*/ d.substring(s.at(-1).raw.length).split(`
`);
                    continue;
                }
            }
            return {
                type: "blockquote",
                raw: r,
                tokens: s,
                text: i
            };
        }
    }
    list(e) {
        let t = /*#__PURE__*/ this.rules.block.list.exec(e);
        if (t) {
            let n = /*#__PURE__*/ t[1].trim(), r = n.length > 1, i = {
                type: "list",
                raw: "",
                ordered: r,
                start: r ? +n.slice(0, -1) : "",
                loose: false,
                items: []
            };
            n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
            let s = /*#__PURE__*/ this.rules.other.listItemRegex(n), l = false;
            for(; e;){
                let u = false, c = "", h = "";
                if (!(t = /*#__PURE__*/ s.exec(e)) || this.rules.block.hr.test(e)) break;
                c = t[0], e = /*#__PURE__*/ e.substring(c.length);
                let f = /*#__PURE__*/ t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (I)=>" ".repeat(3 * I.length)), g = e.split(`
`, 1)[0], b = !f.trim(), d = 0;
                if (this.options.pedantic ? (d = 2, h = /*#__PURE__*/ f.trimStart()) : b ? d = t[1].length + 1 : (d = /*#__PURE__*/ t[2].search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, h = /*#__PURE__*/ f.slice(d), d += t[1].length), b && this.rules.other.blankLine.test(g) && (c += g + `
`, e = /*#__PURE__*/ e.substring(g.length + 1), u = true), !u) {
                    let I = /*#__PURE__*/ this.rules.other.nextBulletRegex(d), C = /*#__PURE__*/ this.rules.other.hrRegex(d), w = /*#__PURE__*/ this.rules.other.fencesBeginRegex(d), ne = /*#__PURE__*/ this.rules.other.headingBeginRegex(d), q = /*#__PURE__*/ this.rules.other.htmlBeginRegex(d);
                    for(; e;){
                        let G = e.split(`
`, 1)[0], v;
                        if (g = G, this.options.pedantic ? (g = /*#__PURE__*/ g.replace(this.rules.other.listReplaceNesting, "  "), v = g) : v = /*#__PURE__*/ g.replace(this.rules.other.tabCharGlobal, "    "), w.test(g) || ne.test(g) || q.test(g) || I.test(g) || C.test(g)) break;
                        if (v.search(this.rules.other.nonSpaceChar) >= d || !g.trim()) h += `
` + v.slice(d);
                        else {
                            if (b || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || w.test(f) || ne.test(f) || C.test(f)) break;
                            h += `
` + g;
                        }
                        !b && !g.trim() && (b = true), c += G + `
`, e = /*#__PURE__*/ e.substring(G.length + 1), f = /*#__PURE__*/ v.slice(d);
                    }
                }
                i.loose || (l ? i.loose = true : this.rules.other.doubleBlankLine.test(c) && (l = true));
                let m = null, T;
                this.options.gfm && (m = /*#__PURE__*/ this.rules.other.listIsTask.exec(h), m && (T = m[0] !== "[ ] ", h = /*#__PURE__*/ h.replace(this.rules.other.listReplaceTask, ""))), i.items.push({
                    type: "list_item",
                    raw: c,
                    task: !!m,
                    checked: T,
                    loose: false,
                    text: h,
                    tokens: []
                }), i.raw += c;
            }
            let p = /*#__PURE__*/ i.items.at(-1);
            if (p) p.raw = /*#__PURE__*/ p.raw.trimEnd(), p.text = /*#__PURE__*/ p.text.trimEnd();
            else return;
            i.raw = /*#__PURE__*/ i.raw.trimEnd();
            for(let u = 0; u < i.items.length; u++)if (this.lexer.state.top = false, i.items[u].tokens = /*#__PURE__*/ this.lexer.blockTokens(i.items[u].text, []), !i.loose) {
                let c = /*#__PURE__*/ i.items[u].tokens.filter((f)=>f.type === "space"), h = c.length > 0 && c.some((f)=>this.rules.other.anyLine.test(f.raw));
                i.loose = h;
            }
            if (i.loose) for(let u = 0; u < i.items.length; u++)i.items[u].loose = true;
            return i;
        }
    }
    html(e) {
        let t = /*#__PURE__*/ this.rules.block.html.exec(e);
        if (t) return {
            type: "html",
            block: true,
            raw: t[0],
            pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
            text: t[0]
        };
    }
    def(e) {
        let t = /*#__PURE__*/ this.rules.block.def.exec(e);
        if (t) {
            let n = /*#__PURE__*/ t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
            return {
                type: "def",
                tag: n,
                raw: t[0],
                href: r,
                title: i
            };
        }
    }
    table(e) {
        let t = /*#__PURE__*/ this.rules.block.table.exec(e);
        if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
        let n = /*#__PURE__*/ Ke(t[1]), r = /*#__PURE__*/ t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = {
            type: "table",
            raw: t[0],
            header: [],
            align: [],
            rows: []
        };
        if (n.length === r.length) {
            for (let l of r)this.rules.other.tableAlignRight.test(l) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(l) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(l) ? s.align.push("left") : s.align.push(null);
            for(let l = 0; l < n.length; l++)s.header.push({
                text: n[l],
                tokens: /*#__PURE__*/ this.lexer.inline(n[l]),
                header: true,
                align: s.align[l]
            });
            for (let l of i)s.rows.push(/*#__PURE__*/ Ke(l, s.header.length).map((p, u)=>({
                    text: p,
                    tokens: /*#__PURE__*/ this.lexer.inline(p),
                    header: false,
                    align: s.align[u]
                })));
            return s;
        }
    }
    lheading(e) {
        let t = /*#__PURE__*/ this.rules.block.lheading.exec(e);
        if (t) return {
            type: "heading",
            raw: t[0],
            depth: t[2].charAt(0) === "=" ? 1 : 2,
            text: t[1],
            tokens: /*#__PURE__*/ this.lexer.inline(t[1])
        };
    }
    paragraph(e) {
        let t = /*#__PURE__*/ this.rules.block.paragraph.exec(e);
        if (t) {
            let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
            return {
                type: "paragraph",
                raw: t[0],
                text: n,
                tokens: /*#__PURE__*/ this.lexer.inline(n)
            };
        }
    }
    text(e) {
        let t = /*#__PURE__*/ this.rules.block.text.exec(e);
        if (t) return {
            type: "text",
            raw: t[0],
            text: t[0],
            tokens: /*#__PURE__*/ this.lexer.inline(t[0])
        };
    }
    escape(e) {
        let t = /*#__PURE__*/ this.rules.inline.escape.exec(e);
        if (t) return {
            type: "escape",
            raw: t[0],
            text: t[1]
        };
    }
    tag(e) {
        let t = /*#__PURE__*/ this.rules.inline.tag.exec(e);
        if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = false), {
            type: "html",
            raw: t[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            block: false,
            text: t[0]
        };
    }
    link(e) {
        let t = /*#__PURE__*/ this.rules.inline.link.exec(e);
        if (t) {
            let n = /*#__PURE__*/ t[2].trim();
            if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
                if (!this.rules.other.endAngleBracket.test(n)) return;
                let s = /*#__PURE__*/ N(/*#__PURE__*/ n.slice(0, -1), "\\");
                if ((n.length - s.length) % 2 === 0) return;
            } else {
                let s = /*#__PURE__*/ wn(t[2], "()");
                if (s > -1) {
                    let p = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + s;
                    t[2] = /*#__PURE__*/ t[2].substring(0, s), t[0] = /*#__PURE__*/ t[0].substring(0, p).trim(), t[3] = "";
                }
            }
            let r = t[2], i = "";
            if (this.options.pedantic) {
                let s = /*#__PURE__*/ this.rules.other.pedanticHrefTitle.exec(r);
                s && (r = s[1], i = s[3]);
            } else i = t[3] ? t[3].slice(1, -1) : "";
            return r = /*#__PURE__*/ r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = /*#__PURE__*/ r.slice(1) : r = /*#__PURE__*/ r.slice(1, -1)), Xe(t, {
                href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
                title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
            }, t[0], this.lexer, this.rules);
        }
    }
    reflink(e, t) {
        let n;
        if ((n = /*#__PURE__*/ this.rules.inline.reflink.exec(e)) || (n = /*#__PURE__*/ this.rules.inline.nolink.exec(e))) {
            let r = /*#__PURE__*/ (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = t[r.toLowerCase()];
            if (!i) {
                let s = /*#__PURE__*/ n[0].charAt(0);
                return {
                    type: "text",
                    raw: s,
                    text: s
                };
            }
            return Xe(n, i, n[0], this.lexer, this.rules);
        }
    }
    emStrong(e, t) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
        let r = /*#__PURE__*/ this.rules.inline.emStrongLDelim.exec(e);
        if (!r || r[3] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
        if (!(r[1] || r[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
            let s = [
                ...r[0]
            ].length - 1, l, p, u = s, c = 0, h = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
            for(h.lastIndex = 0, t = /*#__PURE__*/ t.slice(-1 * e.length + s); (r = /*#__PURE__*/ h.exec(t)) != null;){
                if (l = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !l) continue;
                if (p = [
                    ...l
                ].length, r[3] || r[4]) {
                    u += p;
                    continue;
                } else if ((r[5] || r[6]) && s % 3 && !((s + p) % 3)) {
                    c += p;
                    continue;
                }
                if (u -= p, u > 0) continue;
                p = /*#__PURE__*/ Math.min(p, p + u + c);
                let f = [
                    ...r[0]
                ][0].length, g = /*#__PURE__*/ e.slice(0, s + r.index + f + p);
                if (Math.min(s, p) % 2) {
                    let d = /*#__PURE__*/ g.slice(1, -1);
                    return {
                        type: "em",
                        raw: g,
                        text: d,
                        tokens: /*#__PURE__*/ this.lexer.inlineTokens(d)
                    };
                }
                let b = /*#__PURE__*/ g.slice(2, -2);
                return {
                    type: "strong",
                    raw: g,
                    text: b,
                    tokens: /*#__PURE__*/ this.lexer.inlineTokens(b)
                };
            }
        }
    }
    codespan(e) {
        let t = /*#__PURE__*/ this.rules.inline.code.exec(e);
        if (t) {
            let n = /*#__PURE__*/ t[2].replace(this.rules.other.newLineCharGlobal, " "), r = /*#__PURE__*/ this.rules.other.nonSpaceChar.test(n), i = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
            return r && i && (n = /*#__PURE__*/ n.substring(1, n.length - 1)), {
                type: "codespan",
                raw: t[0],
                text: n
            };
        }
    }
    br(e) {
        let t = /*#__PURE__*/ this.rules.inline.br.exec(e);
        if (t) return {
            type: "br",
            raw: t[0]
        };
    }
    del(e) {
        let t = /*#__PURE__*/ this.rules.inline.del.exec(e);
        if (t) return {
            type: "del",
            raw: t[0],
            text: t[2],
            tokens: /*#__PURE__*/ this.lexer.inlineTokens(t[2])
        };
    }
    autolink(e) {
        let t = /*#__PURE__*/ this.rules.inline.autolink.exec(e);
        if (t) {
            let n, r;
            return t[2] === "@" ? (n = t[1], r = "mailto:" + n) : (n = t[1], r = n), {
                type: "link",
                raw: t[0],
                text: n,
                href: r,
                tokens: [
                    {
                        type: "text",
                        raw: n,
                        text: n
                    }
                ]
            };
        }
    }
    url(e) {
        let t;
        if (t = /*#__PURE__*/ this.rules.inline.url.exec(e)) {
            let n, r;
            if (t[2] === "@") n = t[0], r = "mailto:" + n;
            else {
                let i;
                do i = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
                while (i !== t[0]);
                n = t[0], t[1] === "www." ? r = "http://" + t[0] : r = t[0];
            }
            return {
                type: "link",
                raw: t[0],
                text: n,
                href: r,
                tokens: [
                    {
                        type: "text",
                        raw: n,
                        text: n
                    }
                ]
            };
        }
    }
    inlineText(e) {
        let t = /*#__PURE__*/ this.rules.inline.text.exec(e);
        if (t) {
            let n = this.lexer.state.inRawBlock;
            return {
                type: "text",
                raw: t[0],
                text: t[0],
                escaped: n
            };
        }
    }
}, $ = class o {
    static #_ = m$1(this, "_Lexer");
    tokens;
    options;
    state;
    tokenizer;
    inlineQueue;
    constructor(e){
        this.tokens = [], this.tokens.links = /* @__PURE__ */ /*#__PURE__*/ Object.create(null), this.options = e || z, this.options.tokenizer = this.options.tokenizer || new _(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
            inLink: false,
            inRawBlock: false,
            top: true
        };
        let t = {
            other: y,
            block: X.normal,
            inline: W.normal
        };
        this.options.pedantic ? (t.block = X.pedantic, t.inline = W.pedantic) : this.options.gfm && (t.block = X.gfm, this.options.breaks ? t.inline = W.breaks : t.inline = W.gfm), this.tokenizer.rules = t;
    }
    static get rules() {
        return {
            block: X,
            inline: W
        };
    }
    static lex(e, t) {
        return new o(t).lex(e);
    }
    static lexInline(e, t) {
        return new o(t).inlineTokens(e);
    }
    lex(e) {
        e = /*#__PURE__*/ e.replace(y.carriageReturn, `
`), this.blockTokens(e, this.tokens);
        for(let t = 0; t < this.inlineQueue.length; t++){
            let n = this.inlineQueue[t];
            this.inlineTokens(n.src, n.tokens);
        }
        return this.inlineQueue = [], this.tokens;
    }
    blockTokens(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        for(this.options.pedantic && (e = /*#__PURE__*/ e.replace(y.tabCharGlobal, "    ").replace(y.spaceLine, "")); e;){
            let r;
            if (this.options.extensions?.block?.some((s)=>(r = /*#__PURE__*/ s.call({
                    lexer: this
                }, e, t)) ? (e = /*#__PURE__*/ e.substring(r.raw.length), t.push(r), true) : false)) continue;
            if (r = /*#__PURE__*/ this.tokenizer.space(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length);
                let s = /*#__PURE__*/ t.at(-1);
                r.raw.length === 1 && s !== void 0 ? s.raw += `
` : t.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.code(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length);
                let s = /*#__PURE__*/ t.at(-1);
                s?.type === "paragraph" || s?.type === "text" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.at(-1).src = s.text) : t.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.fences(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.heading(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.hr(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.blockquote(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.list(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.html(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.def(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length);
                let s = /*#__PURE__*/ t.at(-1);
                s?.type === "paragraph" || s?.type === "text" ? (s.raw += `
` + r.raw, s.text += `
` + r.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
                    href: r.href,
                    title: r.title
                });
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.table(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.lheading(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), t.push(r);
                continue;
            }
            let i = e;
            if (this.options.extensions?.startBlock) {
                let s = 1 / 0, l = /*#__PURE__*/ e.slice(1), p;
                this.options.extensions.startBlock.forEach((u)=>{
                    p = /*#__PURE__*/ u.call({
                        lexer: this
                    }, l), typeof p == "number" && p >= 0 && (s = /*#__PURE__*/ Math.min(s, p));
                }), s < 1 / 0 && s >= 0 && (i = /*#__PURE__*/ e.substring(0, s + 1));
            }
            if (this.state.top && (r = /*#__PURE__*/ this.tokenizer.paragraph(i))) {
                let s = /*#__PURE__*/ t.at(-1);
                n && s?.type === "paragraph" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r), n = i.length !== e.length, e = /*#__PURE__*/ e.substring(r.raw.length);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.text(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length);
                let s = /*#__PURE__*/ t.at(-1);
                s?.type === "text" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r);
                continue;
            }
            if (e) {
                let s = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                    console.error(s);
                    break;
                } else throw new Error(s);
            }
        }
        return this.state.top = true, t;
    }
    inline(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        return this.inlineQueue.push({
            src: e,
            tokens: t
        }), t;
    }
    inlineTokens(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        let n = e, r = null;
        if (this.tokens.links) {
            let l = /*#__PURE__*/ Object.keys(this.tokens.links);
            if (l.length > 0) for(; (r = /*#__PURE__*/ this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null;)l.includes(/*#__PURE__*/ r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
        }
        for(; (r = /*#__PURE__*/ this.tokenizer.rules.inline.blockSkip.exec(n)) != null;)n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        for(; (r = /*#__PURE__*/ this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null;)n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
        let i = false, s = "";
        for(; e;){
            i || (s = ""), i = false;
            let l;
            if (this.options.extensions?.inline?.some((u)=>(l = /*#__PURE__*/ u.call({
                    lexer: this
                }, e, t)) ? (e = /*#__PURE__*/ e.substring(l.raw.length), t.push(l), true) : false)) continue;
            if (l = /*#__PURE__*/ this.tokenizer.escape(e)) {
                e = /*#__PURE__*/ e.substring(l.raw.length), t.push(l);
                continue;
            }
            if (l = /*#__PURE__*/ this.tokenizer.tag(e)) {
                e = /*#__PURE__*/ e.substring(l.raw.length), t.push(l);
                continue;
            }
            if (l = /*#__PURE__*/ this.tokenizer.link(e)) {
                e = /*#__PURE__*/ e.substring(l.raw.length), t.push(l);
                continue;
            }
            if (l = /*#__PURE__*/ this.tokenizer.reflink(e, this.tokens.links)) {
                e = /*#__PURE__*/ e.substring(l.raw.length);
                let u = /*#__PURE__*/ t.at(-1);
                l.type === "text" && u?.type === "text" ? (u.raw += l.raw, u.text += l.text) : t.push(l);
                continue;
            }
            if (l = /*#__PURE__*/ this.tokenizer.emStrong(e, n, s)) {
                e = /*#__PURE__*/ e.substring(l.raw.length), t.push(l);
                continue;
            }
            if (l = /*#__PURE__*/ this.tokenizer.codespan(e)) {
                e = /*#__PURE__*/ e.substring(l.raw.length), t.push(l);
                continue;
            }
            if (l = /*#__PURE__*/ this.tokenizer.br(e)) {
                e = /*#__PURE__*/ e.substring(l.raw.length), t.push(l);
                continue;
            }
            if (l = /*#__PURE__*/ this.tokenizer.del(e)) {
                e = /*#__PURE__*/ e.substring(l.raw.length), t.push(l);
                continue;
            }
            if (l = /*#__PURE__*/ this.tokenizer.autolink(e)) {
                e = /*#__PURE__*/ e.substring(l.raw.length), t.push(l);
                continue;
            }
            if (!this.state.inLink && (l = /*#__PURE__*/ this.tokenizer.url(e))) {
                e = /*#__PURE__*/ e.substring(l.raw.length), t.push(l);
                continue;
            }
            let p = e;
            if (this.options.extensions?.startInline) {
                let u = 1 / 0, c = /*#__PURE__*/ e.slice(1), h;
                this.options.extensions.startInline.forEach((f)=>{
                    h = /*#__PURE__*/ f.call({
                        lexer: this
                    }, c), typeof h == "number" && h >= 0 && (u = /*#__PURE__*/ Math.min(u, h));
                }), u < 1 / 0 && u >= 0 && (p = /*#__PURE__*/ e.substring(0, u + 1));
            }
            if (l = /*#__PURE__*/ this.tokenizer.inlineText(p)) {
                e = /*#__PURE__*/ e.substring(l.raw.length), l.raw.slice(-1) !== "_" && (s = /*#__PURE__*/ l.raw.slice(-1)), i = true;
                let u = /*#__PURE__*/ t.at(-1);
                u?.type === "text" ? (u.raw += l.raw, u.text += l.text) : t.push(l);
                continue;
            }
            if (e) {
                let u = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                    console.error(u);
                    break;
                } else throw new Error(u);
            }
        }
        return t;
    }
}, O = class {
    static #_ = m$1(this, "_Renderer");
    options;
    parser;
    constructor(e){
        this.options = e || z;
    }
    space(e) {
        return "";
    }
    code(param) {
        let { text: e, lang: t, escaped: n } = param;
        let r = (t || "").match(y.notSpaceStart)?.[0], i = e.replace(y.endingNewline, "") + `
`;
        return r ? '<pre><code class="language-' + F(r) + '">' + (n ? i : F(i, true)) + `</code></pre>
` : "<pre><code>" + (n ? i : F(i, true)) + `</code></pre>
`;
    }
    blockquote(param) {
        let { tokens: e } = param;
        return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
    }
    html(param) {
        let { text: e } = param;
        return e;
    }
    heading(param) {
        let { tokens: e, depth: t } = param;
        return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
    }
    hr(e) {
        return `<hr>
`;
    }
    list(e) {
        let t = e.ordered, n = e.start, r = "";
        for(let l = 0; l < e.items.length; l++){
            let p = e.items[l];
            r += /*#__PURE__*/ this.listitem(p);
        }
        let i = t ? "ol" : "ul", s = t && n !== 1 ? ' start="' + n + '"' : "";
        return "<" + i + s + `>
` + r + "</" + i + `>
`;
    }
    listitem(e) {
        let t = "";
        if (e.task) {
            let n = /*#__PURE__*/ this.checkbox({
                checked: !!e.checked
            });
            e.loose ? e.tokens[0]?.type === "paragraph" ? (e.tokens[0].text = n + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = n + " " + F(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = true)) : e.tokens.unshift({
                type: "text",
                raw: n + " ",
                text: n + " ",
                escaped: true
            }) : t += n + " ";
        }
        return t += /*#__PURE__*/ this.parser.parse(e.tokens, !!e.loose), `<li>${t}</li>
`;
    }
    checkbox(param) {
        let { checked: e } = param;
        return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
    }
    paragraph(param) {
        let { tokens: e } = param;
        return `<p>${this.parser.parseInline(e)}</p>
`;
    }
    table(e) {
        let t = "", n = "";
        for(let i = 0; i < e.header.length; i++)n += /*#__PURE__*/ this.tablecell(e.header[i]);
        t += /*#__PURE__*/ this.tablerow({
            text: n
        });
        let r = "";
        for(let i = 0; i < e.rows.length; i++){
            let s = e.rows[i];
            n = "";
            for(let l = 0; l < s.length; l++)n += /*#__PURE__*/ this.tablecell(s[l]);
            r += /*#__PURE__*/ this.tablerow({
                text: n
            });
        }
        return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + r + `</table>
`;
    }
    tablerow(param) {
        let { text: e } = param;
        return `<tr>
${e}</tr>
`;
    }
    tablecell(e) {
        let t = /*#__PURE__*/ this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
        return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
    }
    strong(param) {
        let { tokens: e } = param;
        return `<strong>${this.parser.parseInline(e)}</strong>`;
    }
    em(param) {
        let { tokens: e } = param;
        return `<em>${this.parser.parseInline(e)}</em>`;
    }
    codespan(param) {
        let { text: e } = param;
        return `<code>${F(e, true)}</code>`;
    }
    br(e) {
        return "<br>";
    }
    del(param) {
        let { tokens: e } = param;
        return `<del>${this.parser.parseInline(e)}</del>`;
    }
    link(param) {
        let { href: e, title: t, tokens: n } = param;
        let r = /*#__PURE__*/ this.parser.parseInline(n), i = /*#__PURE__*/ Je(e);
        if (i === null) return r;
        e = i;
        let s = '<a href="' + e + '"';
        return t && (s += ' title="' + F(t) + '"'), s += ">" + r + "</a>", s;
    }
    image(param) {
        let { href: e, title: t, text: n } = param;
        let r = /*#__PURE__*/ Je(e);
        if (r === null) return F(n);
        e = r;
        let i = `<img src="${e}" alt="${n}"`;
        return t && (i += ` title="${F(t)}"`), i += ">", i;
    }
    text(e) {
        return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : F(e.text);
    }
}, V = class {
    static #_ = m$1(this, "_TextRenderer");
    strong(param) {
        let { text: e } = param;
        return e;
    }
    em(param) {
        let { text: e } = param;
        return e;
    }
    codespan(param) {
        let { text: e } = param;
        return e;
    }
    del(param) {
        let { text: e } = param;
        return e;
    }
    html(param) {
        let { text: e } = param;
        return e;
    }
    text(param) {
        let { text: e } = param;
        return e;
    }
    link(param) {
        let { text: e } = param;
        return "" + e;
    }
    image(param) {
        let { text: e } = param;
        return "" + e;
    }
    br() {
        return "";
    }
}, R = class o2 {
    static #_ = m$1(this, "_Parser");
    options;
    renderer;
    textRenderer;
    constructor(e){
        this.options = e || z, this.options.renderer = this.options.renderer || new O(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new V();
    }
    static parse(e, t) {
        return new o2(t).parse(e);
    }
    static parseInline(e, t) {
        return new o2(t).parseInline(e);
    }
    parse(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        let n = "";
        for(let r = 0; r < e.length; r++){
            let i = e[r];
            if (this.options.extensions?.renderers?.[i.type]) {
                let l = i, p = /*#__PURE__*/ this.options.extensions.renderers[l.type].call({
                    parser: this
                }, l);
                if (p !== false || ![
                    "space",
                    "hr",
                    "heading",
                    "code",
                    "table",
                    "blockquote",
                    "list",
                    "html",
                    "paragraph",
                    "text"
                ].includes(l.type)) {
                    n += p || "";
                    continue;
                }
            }
            let s = i;
            switch(s.type){
                case "space":
                    {
                        n += /*#__PURE__*/ this.renderer.space(s);
                        continue;
                    }
                case "hr":
                    {
                        n += /*#__PURE__*/ this.renderer.hr(s);
                        continue;
                    }
                case "heading":
                    {
                        n += /*#__PURE__*/ this.renderer.heading(s);
                        continue;
                    }
                case "code":
                    {
                        n += /*#__PURE__*/ this.renderer.code(s);
                        continue;
                    }
                case "table":
                    {
                        n += /*#__PURE__*/ this.renderer.table(s);
                        continue;
                    }
                case "blockquote":
                    {
                        n += /*#__PURE__*/ this.renderer.blockquote(s);
                        continue;
                    }
                case "list":
                    {
                        n += /*#__PURE__*/ this.renderer.list(s);
                        continue;
                    }
                case "html":
                    {
                        n += /*#__PURE__*/ this.renderer.html(s);
                        continue;
                    }
                case "paragraph":
                    {
                        n += /*#__PURE__*/ this.renderer.paragraph(s);
                        continue;
                    }
                case "text":
                    {
                        let l = s, p = /*#__PURE__*/ this.renderer.text(l);
                        for(; r + 1 < e.length && e[r + 1].type === "text";)l = e[++r], p += `
` + this.renderer.text(l);
                        t ? n += /*#__PURE__*/ this.renderer.paragraph({
                            type: "paragraph",
                            raw: p,
                            text: p,
                            tokens: [
                                {
                                    type: "text",
                                    raw: p,
                                    text: p,
                                    escaped: true
                                }
                            ]
                        }) : n += p;
                        continue;
                    }
                default:
                    {
                        let l = 'Token with "' + s.type + '" type was not found.';
                        if (this.options.silent) return console.error(l), "";
                        throw new Error(l);
                    }
            }
        }
        return n;
    }
    parseInline(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.renderer;
        let n = "";
        for(let r = 0; r < e.length; r++){
            let i = e[r];
            if (this.options.extensions?.renderers?.[i.type]) {
                let l = /*#__PURE__*/ this.options.extensions.renderers[i.type].call({
                    parser: this
                }, i);
                if (l !== false || ![
                    "escape",
                    "html",
                    "link",
                    "image",
                    "strong",
                    "em",
                    "codespan",
                    "br",
                    "del",
                    "text"
                ].includes(i.type)) {
                    n += l || "";
                    continue;
                }
            }
            let s = i;
            switch(s.type){
                case "escape":
                    {
                        n += /*#__PURE__*/ t.text(s);
                        break;
                    }
                case "html":
                    {
                        n += /*#__PURE__*/ t.html(s);
                        break;
                    }
                case "link":
                    {
                        n += /*#__PURE__*/ t.link(s);
                        break;
                    }
                case "image":
                    {
                        n += /*#__PURE__*/ t.image(s);
                        break;
                    }
                case "strong":
                    {
                        n += /*#__PURE__*/ t.strong(s);
                        break;
                    }
                case "em":
                    {
                        n += /*#__PURE__*/ t.em(s);
                        break;
                    }
                case "codespan":
                    {
                        n += /*#__PURE__*/ t.codespan(s);
                        break;
                    }
                case "br":
                    {
                        n += /*#__PURE__*/ t.br(s);
                        break;
                    }
                case "del":
                    {
                        n += /*#__PURE__*/ t.del(s);
                        break;
                    }
                case "text":
                    {
                        n += /*#__PURE__*/ t.text(s);
                        break;
                    }
                default:
                    {
                        let l = 'Token with "' + s.type + '" type was not found.';
                        if (this.options.silent) return console.error(l), "";
                        throw new Error(l);
                    }
            }
        }
        return n;
    }
}, B = class {
    static #_ = m$1(this, "_Hooks");
    options;
    block;
    constructor(e){
        this.options = e || z;
    }
    static passThroughHooks = /* @__PURE__ */ new Set([
        "preprocess",
        "postprocess",
        "processAllTokens"
    ]);
    preprocess(e) {
        return e;
    }
    postprocess(e) {
        return e;
    }
    processAllTokens(e) {
        return e;
    }
    provideLexer() {
        return this.block ? $.lex : $.lexInline;
    }
    provideParser() {
        return this.block ? R.parse : R.parseInline;
    }
}, de = class {
    static #_ = m$1(this, "Marked");
    defaults = me();
    options = this.setOptions;
    parse = this.parseMarkdown(true);
    parseInline = this.parseMarkdown(false);
    Parser = R;
    Renderer = O;
    TextRenderer = V;
    Lexer = $;
    Tokenizer = _;
    Hooks = B;
    constructor(...e){
        this.use(...e);
    }
    walkTokens(e, t) {
        let n = [];
        for (let r of e)switch(n = /*#__PURE__*/ n.concat(/*#__PURE__*/ t.call(this, r)), r.type){
            case "table":
                {
                    let i = r;
                    for (let s of i.header)n = /*#__PURE__*/ n.concat(/*#__PURE__*/ this.walkTokens(s.tokens, t));
                    for (let s of i.rows)for (let l of s)n = /*#__PURE__*/ n.concat(/*#__PURE__*/ this.walkTokens(l.tokens, t));
                    break;
                }
            case "list":
                {
                    let i = r;
                    n = /*#__PURE__*/ n.concat(/*#__PURE__*/ this.walkTokens(i.items, t));
                    break;
                }
            default:
                {
                    let i = r;
                    this.defaults.extensions?.childTokens?.[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((s)=>{
                        let l = /*#__PURE__*/ i[s].flat(1 / 0);
                        n = /*#__PURE__*/ n.concat(/*#__PURE__*/ this.walkTokens(l, t));
                    }) : i.tokens && (n = /*#__PURE__*/ n.concat(/*#__PURE__*/ this.walkTokens(i.tokens, t)));
                }
        }
        return n;
    }
    use() {
        for(var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++){
            e[_key] = arguments[_key];
        }
        let t = this.defaults.extensions || {
            renderers: {},
            childTokens: {}
        };
        return e.forEach((n)=>{
            let r = {
                ...n
            };
            if (r.async = this.defaults.async || r.async || false, n.extensions && (n.extensions.forEach((i)=>{
                if (!i.name) throw new Error("extension name required");
                if ("renderer" in i) {
                    let s = t.renderers[i.name];
                    s ? t.renderers[i.name] = function() {
                        for(var _len = arguments.length, l = new Array(_len), _key = 0; _key < _len; _key++){
                            l[_key] = arguments[_key];
                        }
                        let p = /*#__PURE__*/ i.renderer.apply(this, l);
                        return p === false && (p = /*#__PURE__*/ s.apply(this, l)), p;
                    } : t.renderers[i.name] = i.renderer;
                }
                if ("tokenizer" in i) {
                    if (!i.level || i.level !== "block" && i.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
                    let s = t[i.level];
                    s ? s.unshift(i.tokenizer) : t[i.level] = [
                        i.tokenizer
                    ], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [
                        i.start
                    ] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [
                        i.start
                    ]));
                }
                "childTokens" in i && i.childTokens && (t.childTokens[i.name] = i.childTokens);
            }), r.extensions = t), n.renderer) {
                let i = this.defaults.renderer || new O(this.defaults);
                for(let s in n.renderer){
                    if (!(s in i)) throw new Error(`renderer '${s}' does not exist`);
                    if ([
                        "options",
                        "parser"
                    ].includes(s)) continue;
                    let l = s, p = n.renderer[l], u = i[l];
                    i[l] = function() {
                        for(var _len = arguments.length, c = new Array(_len), _key = 0; _key < _len; _key++){
                            c[_key] = arguments[_key];
                        }
                        let h = /*#__PURE__*/ p.apply(i, c);
                        return h === false && (h = /*#__PURE__*/ u.apply(i, c)), h || "";
                    };
                }
                r.renderer = i;
            }
            if (n.tokenizer) {
                let i = this.defaults.tokenizer || new _(this.defaults);
                for(let s in n.tokenizer){
                    if (!(s in i)) throw new Error(`tokenizer '${s}' does not exist`);
                    if ([
                        "options",
                        "rules",
                        "lexer"
                    ].includes(s)) continue;
                    let l = s, p = n.tokenizer[l], u = i[l];
                    i[l] = function() {
                        for(var _len = arguments.length, c = new Array(_len), _key = 0; _key < _len; _key++){
                            c[_key] = arguments[_key];
                        }
                        let h = /*#__PURE__*/ p.apply(i, c);
                        return h === false && (h = /*#__PURE__*/ u.apply(i, c)), h;
                    };
                }
                r.tokenizer = i;
            }
            if (n.hooks) {
                let i = this.defaults.hooks || new B();
                for(let s in n.hooks){
                    if (!(s in i)) throw new Error(`hook '${s}' does not exist`);
                    if ([
                        "options",
                        "block"
                    ].includes(s)) continue;
                    let l = s, p = n.hooks[l], u = i[l];
                    B.passThroughHooks.has(s) ? i[l] = (c)=>{
                        if (this.defaults.async) return Promise.resolve(/*#__PURE__*/ p.call(i, c)).then((f)=>u.call(i, f));
                        let h = /*#__PURE__*/ p.call(i, c);
                        return u.call(i, h);
                    } : i[l] = function() {
                        for(var _len = arguments.length, c = new Array(_len), _key = 0; _key < _len; _key++){
                            c[_key] = arguments[_key];
                        }
                        let h = /*#__PURE__*/ p.apply(i, c);
                        return h === false && (h = /*#__PURE__*/ u.apply(i, c)), h;
                    };
                }
                r.hooks = i;
            }
            if (n.walkTokens) {
                let i = this.defaults.walkTokens, s = n.walkTokens;
                r.walkTokens = function(l) {
                    let p = [];
                    return p.push(/*#__PURE__*/ s.call(this, l)), i && (p = /*#__PURE__*/ p.concat(/*#__PURE__*/ i.call(this, l))), p;
                };
            }
            this.defaults = {
                ...this.defaults,
                ...r
            };
        }), this;
    }
    setOptions(e) {
        return this.defaults = {
            ...this.defaults,
            ...e
        }, this;
    }
    lexer(e, t) {
        return $.lex(e, t ?? this.defaults);
    }
    parser(e, t) {
        return R.parse(e, t ?? this.defaults);
    }
    parseMarkdown(e) {
        return m$1((n, r)=>{
            let i = {
                ...r
            }, s = {
                ...this.defaults,
                ...i
            }, l = /*#__PURE__*/ this.onError(!!s.silent, !!s.async);
            if (this.defaults.async === true && i.async === false) return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
            if (typeof n > "u" || n === null) return l(new Error("marked(): input parameter is undefined or null"));
            if (typeof n != "string") return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
            s.hooks && (s.hooks.options = s, s.hooks.block = e);
            let p = s.hooks ? s.hooks.provideLexer() : e ? $.lex : $.lexInline, u = s.hooks ? s.hooks.provideParser() : e ? R.parse : R.parseInline;
            if (s.async) return Promise.resolve(s.hooks ? s.hooks.preprocess(n) : n).then((c)=>p(c, s)).then((c)=>s.hooks ? s.hooks.processAllTokens(c) : c).then((c)=>s.walkTokens ? Promise.all(/*#__PURE__*/ this.walkTokens(c, s.walkTokens)).then(()=>c) : c).then((c)=>u(c, s)).then((c)=>s.hooks ? s.hooks.postprocess(c) : c).catch(l);
            try {
                s.hooks && (n = /*#__PURE__*/ s.hooks.preprocess(n));
                let c = /*#__PURE__*/ p(n, s);
                s.hooks && (c = /*#__PURE__*/ s.hooks.processAllTokens(c)), s.walkTokens && this.walkTokens(c, s.walkTokens);
                let h = /*#__PURE__*/ u(c, s);
                return s.hooks && (h = /*#__PURE__*/ s.hooks.postprocess(h)), h;
            } catch (c) {
                return l(c);
            }
        }, "parse");
    }
    onError(e, t) {
        return (n)=>{
            if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
                let r = "<p>An error occurred:</p><pre>" + F(n.message + "", true) + "</pre>";
                return t ? Promise.resolve(r) : r;
            }
            if (t) return Promise.reject(n);
            throw n;
        };
    }
}, A = new de();
function k(o3, e) {
    return A.parse(o3, e);
}
m$1(k, "marked");
k.options = k.setOptions = function(o3) {
    return A.setOptions(o3), k.defaults = A.defaults, Ye(k.defaults), k;
};
k.getDefaults = me;
k.defaults = z;
k.use = function() {
    for(var _len = arguments.length, o3 = new Array(_len), _key = 0; _key < _len; _key++){
        o3[_key] = arguments[_key];
    }
    return A.use(...o3), k.defaults = A.defaults, Ye(k.defaults), k;
};
k.walkTokens = function(o3, e) {
    return A.walkTokens(o3, e);
};
k.parseInline = A.parseInline;
k.Parser = R;
k.parser = R.parse;
k.Renderer = O;
k.TextRenderer = V;
k.Lexer = $;
k.lexer = $.lex;
k.Tokenizer = _;
k.Hooks = B;
k.parse = k;
k.options;
k.setOptions;
k.use;
k.walkTokens;
k.parseInline;
R.parse;
$.lex;
function Cn(o3, param) {
    let { markdownAutoWrap: e } = param;
    let n = /*#__PURE__*/ o3.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`), r = /*#__PURE__*/ He(n);
    return e === false ? r.replace(/ /g, "&nbsp;") : r;
}
m$1(Cn, "preprocessMarkdown");
function pt(o3) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let t = /*#__PURE__*/ Cn(o3, e), n = /*#__PURE__*/ k.lexer(t), r = [
        []
    ], i = 0;
    function s(l) {
        let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "normal";
        l.type === "text" ? l.text.split(`
`).forEach((c, h)=>{
            h !== 0 && (i++, r.push([])), c.split(" ").forEach((f)=>{
                f = /*#__PURE__*/ f.replace(/&#39;/g, "'"), f && r[i].push({
                    content: f,
                    type: p
                });
            });
        }) : l.type === "strong" || l.type === "em" ? l.tokens.forEach((u)=>{
            s(u, l.type);
        }) : l.type === "html" && r[i].push({
            content: l.text,
            type: "normal"
        });
    }
    return m$1(s, "processNode"), n.forEach((l)=>{
        l.type === "paragraph" ? l.tokens?.forEach((p)=>{
            s(p);
        }) : l.type === "html" && r[i].push({
            content: l.text,
            type: "normal"
        });
    }), r;
}
m$1(pt, "markdownToLines");
function ut(o3) {
    let { markdownAutoWrap: e } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let t = /*#__PURE__*/ k.lexer(o3);
    function n(r) {
        return r.type === "text" ? e === false ? r.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : r.text.replace(/\n */g, "<br/>") : r.type === "strong" ? `<strong>${r.tokens?.map(n).join("")}</strong>` : r.type === "em" ? `<em>${r.tokens?.map(n).join("")}</em>` : r.type === "paragraph" ? `<p>${r.tokens?.map(n).join("")}</p>` : r.type === "space" ? "" : r.type === "html" ? `${r.text}` : r.type === "escape" ? r.text : `Unsupported markdown: ${r.type}`;
    }
    return m$1(n, "output"), t.map(n).join("");
}
m$1(ut, "markdownToHTML");
function Sn(o3) {
    return Intl.Segmenter ? [
        .../*#__PURE__*/ new Intl.Segmenter().segment(o3)
    ].map((e)=>e.segment) : [
        ...o3
    ];
}
m$1(Sn, "splitTextToChars");
function Tn(o3, e) {
    let t = /*#__PURE__*/ Sn(e.content);
    return ht(o3, [], t, e.type);
}
m$1(Tn, "splitWordToFitWidth");
function ht(o3, e, t, n) {
    if (t.length === 0) return [
        {
            content: /*#__PURE__*/ e.join(""),
            type: n
        },
        {
            content: "",
            type: n
        }
    ];
    let [r, ...i] = t, s = [
        ...e,
        r
    ];
    return o3([
        {
            content: /*#__PURE__*/ s.join(""),
            type: n
        }
    ]) ? ht(o3, s, i, n) : (e.length === 0 && r && (e.push(r), t.shift()), [
        {
            content: /*#__PURE__*/ e.join(""),
            type: n
        },
        {
            content: /*#__PURE__*/ t.join(""),
            type: n
        }
    ]);
}
m$1(ht, "splitWordToFitWidthRecursion");
function ft(o3, e) {
    if (o3.some((param)=>{
        let { content: t } = param;
        return t.includes(`
`);
    })) throw new Error("splitLineToFitWidth does not support newlines in the line");
    return Te(o3, e);
}
m$1(ft, "splitLineToFitWidth");
function Te(o3, e) {
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
    if (o3.length === 0) return n.length > 0 && t.push(n), t.length > 0 ? t : [];
    let r = "";
    o3[0].content === " " && (r = " ", o3.shift());
    let i = o3.shift() ?? {
        content: " ",
        type: "normal"
    }, s = [
        ...n
    ];
    if (r !== "" && s.push({
        content: r,
        type: "normal"
    }), s.push(i), e(s)) return Te(o3, e, t, s);
    if (n.length > 0) t.push(n), o3.unshift(i);
    else if (i.content) {
        let [l, p] = Tn(e, i);
        t.push([
            l
        ]), p.content && o3.unshift(p);
    }
    return Te(o3, e, t);
}
m$1(Te, "splitLineToFitWidthRecursion");
function gt(o3, e) {
    e && o3.attr("style", e);
}
m$1(gt, "applyStyle");
async function In(o3, e, t, n) {
    let r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    let i = /*#__PURE__*/ o3.append("foreignObject");
    i.attr("width", `${10 * t}px`), i.attr("height", `${10 * t}px`);
    let s = /*#__PURE__*/ i.append("xhtml:div"), l = e.label;
    e.label && Rl(e.label) && (l = await Cf(/*#__PURE__*/ e.label.replace(gC.lineBreakRegex, `
`), /*#__PURE__*/ Hl()));
    let p = e.isNode ? "nodeLabel" : "edgeLabel", u = /*#__PURE__*/ s.append("span");
    u.html(l), gt(u, e.labelStyle), u.attr("class", `${p} ${n}`), gt(s, e.labelStyle), s.style("display", "table-cell"), s.style("white-space", "nowrap"), s.style("line-height", "1.5"), s.style("max-width", t + "px"), s.style("text-align", "center"), s.attr("xmlns", "http://www.w3.org/1999/xhtml"), r && s.attr("class", "labelBkg");
    let c = /*#__PURE__*/ s.node().getBoundingClientRect();
    return c.width === t && (s.style("display", "table"), s.style("white-space", "break-spaces"), s.style("width", t + "px"), c = /*#__PURE__*/ s.node().getBoundingClientRect()), i.node();
}
m$1(In, "addHtmlSpan");
function Ie(o3, e, t) {
    return o3.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", e * t - 0.1 + "em").attr("dy", t + "em");
}
m$1(Ie, "createTspan");
function $n(o3, e, t) {
    let n = /*#__PURE__*/ o3.append("text"), r = /*#__PURE__*/ Ie(n, 1, e);
    $e(r, t);
    let i = /*#__PURE__*/ r.node().getComputedTextLength();
    return n.remove(), i;
}
m$1($n, "computeWidthOfText");
function Qr(o3, e, t) {
    let n = /*#__PURE__*/ o3.append("text"), r = /*#__PURE__*/ Ie(n, 1, e);
    $e(r, [
        {
            content: t,
            type: "normal"
        }
    ]);
    let i = r.node()?.getBoundingClientRect();
    return i && n.remove(), i;
}
m$1(Qr, "computeDimensionOfText");
function Rn(o3, e, t) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    let i = /*#__PURE__*/ e.append("g"), s = /*#__PURE__*/ i.insert("rect").attr("class", "background").attr("style", "stroke: none"), l = /*#__PURE__*/ i.append("text").attr("y", "-10.1"), p = 0;
    for (let u of t){
        let c = /*#__PURE__*/ m$1((f)=>$n(i, 1.1, f) <= o3, "checkWidth"), h = c(u) ? [
            u
        ] : ft(u, c);
        for (let f of h){
            let g = /*#__PURE__*/ Ie(l, p, 1.1);
            $e(g, f), p++;
        }
    }
    if (n) {
        let u = /*#__PURE__*/ l.node().getBBox(), c = 2;
        return s.attr("x", u.x - c).attr("y", u.y - c).attr("width", u.width + 2 * c).attr("height", u.height + 2 * c), i.node();
    } else return l.node();
}
m$1(Rn, "createFormattedText");
function $e(o3, e) {
    o3.text(""), e.forEach((t, n)=>{
        let r = /*#__PURE__*/ o3.append("tspan").attr("font-style", t.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", t.type === "strong" ? "bold" : "normal");
        n === 0 ? r.text(t.content) : r.text(" " + t.content);
    });
}
m$1($e, "updateTextContentAndStyles");
async function Fn(o3) {
    let e = [];
    o3.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (n, r, i)=>(e.push(/*#__PURE__*/ (async ()=>{
            let s = `${r}:${i}`;
            return await Ze(s) ? await Ve(s, void 0, {
                class: "label-icon"
            }) : `<i class='${Ef(n).replace(":", " ")}'></i>`;
        })()), n));
    let t = await Promise.all(e);
    return o3.replace(/(fa[bklrs]?):fa-([\w-]+)/g, ()=>t.shift() ?? "");
}
m$1(Fn, "replaceIconSubstring");
var Jr = /*#__PURE__*/ m$1(async function(o3) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", { style: t = "", isTitle: n = false, classes: r = "", useHtmlLabels: i = true, isNode: s = true, width: l = 200, addSvgBackground: p = false } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = arguments.length > 3 ? arguments[3] : void 0;
    if (tt$1.debug("XYZ createText", e, t, n, r, i, s, "addSvgBackground: ", p), i) {
        let c = /*#__PURE__*/ ut(e, u), h = await Fn(/*#__PURE__*/ Xe$1(c)), f = /*#__PURE__*/ e.replace(/\\\\/g, "\\"), g = {
            isNode: s,
            label: Rl(e) ? f : h,
            labelStyle: /*#__PURE__*/ t.replace("fill:", "color:")
        };
        return await In(o3, g, l, r, p);
    } else {
        let c = /*#__PURE__*/ e.replace(/<br\s*\/?>/g, "<br/>"), h = /*#__PURE__*/ pt(/*#__PURE__*/ c.replace("<br>", "<br/>"), u), f = /*#__PURE__*/ Rn(l, o3, h, e ? p : false);
        if (s) {
            /stroke:/.exec(t) && (t = /*#__PURE__*/ t.replace("stroke:", "lineColor:"));
            let g = /*#__PURE__*/ t.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
            ih(f).attr("style", g);
        } else {
            let g = /*#__PURE__*/ t.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
            ih(f).select("rect").attr("style", /*#__PURE__*/ g.replace(/background:/g, "fill:"));
            let b = /*#__PURE__*/ t.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
            ih(f).select("text").attr("style", b);
        }
        return f;
    }
}, "createText");
export { Fn as F, He as H, Jr as J, Qr as Q, Ve as V, _t as _, yr as y };
