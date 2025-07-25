import { X as Xe$1 } from './vendor-min-mermaid~chunk-YR5264OA.BCCprDC8.chunk.js';
import { t as tt$1, i as ih, k as kh, f as ed, $ as $f, e as XC, h as hh } from './vendor-min-mermaid~chunk-U6SPV2NK.BkMACcv9.chunk.js';
import { m as m$1, q as q$1, n } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var define_process_env_default = {};
var Oe = /*#__PURE__*/ n((ar, Be)=>{
    var j = 1e3, D = j * 60, _ = D * 60, E = _ * 24, Ft = E * 7, vt = E * 365.25;
    Be.exports = function(t, e) {
        e = e || {};
        var n = typeof t;
        if (n === "string" && t.length > 0) return At(t);
        if (n === "number" && isFinite(t)) return e.long ? Et(t) : zt(t);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
    };
    function At(t) {
        if (t = /*#__PURE__*/ String(t), !(t.length > 100)) {
            var e = /*#__PURE__*/ /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
            if (e) {
                var n = /*#__PURE__*/ parseFloat(e[1]), s = /*#__PURE__*/ (e[2] || "ms").toLowerCase();
                switch(s){
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return n * vt;
                    case "weeks":
                    case "week":
                    case "w":
                        return n * Ft;
                    case "days":
                    case "day":
                    case "d":
                        return n * E;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return n * _;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return n * D;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return n * j;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return n;
                    default:
                        return;
                }
            }
        }
    }
    m$1(At, "parse");
    function zt(t) {
        var e = /*#__PURE__*/ Math.abs(t);
        return e >= E ? Math.round(t / E) + "d" : e >= _ ? Math.round(t / _) + "h" : e >= D ? Math.round(t / D) + "m" : e >= j ? Math.round(t / j) + "s" : t + "ms";
    }
    m$1(zt, "fmtShort");
    function Et(t) {
        var e = /*#__PURE__*/ Math.abs(t);
        return e >= E ? Z(t, e, E, "day") : e >= _ ? Z(t, e, _, "hour") : e >= D ? Z(t, e, D, "minute") : e >= j ? Z(t, e, j, "second") : t + " ms";
    }
    m$1(Et, "fmtLong");
    function Z(t, e, n, s) {
        var r = e >= n * 1.5;
        return Math.round(t / n) + " " + s + (r ? "s" : "");
    }
    m$1(Z, "plural");
});
var We = /*#__PURE__*/ n((pr, qe)=>{
    function Lt(t) {
        n.debug = n, n.default = n, n.coerce = c, n.disable = o, n.enable = r, n.enabled = l, n.humanize = /*#__PURE__*/ Oe(), n.destroy = p, Object.keys(t).forEach((u)=>{
            n[u] = t[u];
        }), n.names = [], n.skips = [], n.formatters = {};
        function e(u) {
            let f = 0;
            for(let h = 0; h < u.length; h++)f = (f << 5) - f + u.charCodeAt(h), f |= 0;
            return n.colors[Math.abs(f) % n.colors.length];
        }
        m$1(e, "selectColor"), n.selectColor = e;
        function n(u) {
            let f, h = null, g, d;
            function m(...b) {
                if (!m.enabled) return;
                let C = m, I = /*#__PURE__*/ Number(/* @__PURE__ */ new Date()), S = I - (f || I);
                C.diff = S, C.prev = f, C.curr = I, f = I, b[0] = /*#__PURE__*/ n.coerce(b[0]), typeof b[0] != "string" && b.unshift("%O");
                let w = 0;
                b[0] = /*#__PURE__*/ b[0].replace(/%([a-zA-Z%])/g, (v, A)=>{
                    if (v === "%%") return "%";
                    w++;
                    let Re = n.formatters[A];
                    if (typeof Re == "function") {
                        let mt = b[w];
                        v = /*#__PURE__*/ Re.call(C, mt), b.splice(w, 1), w--;
                    }
                    return v;
                }), n.formatArgs.call(C, b), (C.log || n.log).apply(C, b);
            }
            return m$1(m, "debug"), m.namespace = u, m.useColors = /*#__PURE__*/ n.useColors(), m.color = /*#__PURE__*/ n.selectColor(u), m.extend = s, m.destroy = n.destroy, Object.defineProperty(m, "enabled", {
                enumerable: true,
                configurable: false,
                get: /*#__PURE__*/ m$1(()=>h !== null ? h : (g !== n.namespaces && (g = n.namespaces, d = /*#__PURE__*/ n.enabled(u)), d), "get"),
                set: /*#__PURE__*/ m$1((b)=>{
                    h = b;
                }, "set")
            }), typeof n.init == "function" && n.init(m), m;
        }
        m$1(n, "createDebug");
        function s(u, f) {
            let h = /*#__PURE__*/ n(this.namespace + (typeof f > "u" ? ":" : f) + u);
            return h.log = this.log, h;
        }
        m$1(s, "extend");
        function r(u) {
            n.save(u), n.namespaces = u, n.names = [], n.skips = [];
            let f = /*#__PURE__*/ (typeof u == "string" ? u : "").trim().replace(" ", ",").split(",").filter(Boolean);
            for (let h of f)h[0] === "-" ? n.skips.push(/*#__PURE__*/ h.slice(1)) : n.names.push(h);
        }
        m$1(r, "enable");
        function i(u, f) {
            let h = 0, g = 0, d = -1, m = 0;
            for(; h < u.length;)if (g < f.length && (f[g] === u[h] || f[g] === "*")) f[g] === "*" ? (d = g, m = h, g++) : (h++, g++);
            else if (d !== -1) g = d + 1, m++, h = m;
            else return false;
            for(; g < f.length && f[g] === "*";)g++;
            return g === f.length;
        }
        m$1(i, "matchesTemplate");
        function o() {
            let u = /*#__PURE__*/ [
                ...n.names,
                .../*#__PURE__*/ n.skips.map((f)=>"-" + f)
            ].join(",");
            return n.enable(""), u;
        }
        m$1(o, "disable");
        function l(u) {
            for (let f of n.skips)if (i(u, f)) return false;
            for (let f of n.names)if (i(u, f)) return true;
            return false;
        }
        m$1(l, "enabled");
        function c(u) {
            return u instanceof Error ? u.stack || u.message : u;
        }
        m$1(c, "coerce");
        function p() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        return m$1(p, "destroy"), n.enable(/*#__PURE__*/ n.load()), n;
    }
    m$1(Lt, "setup");
    qe.exports = Lt;
});
var Ge = /*#__PURE__*/ n((T, V)=>{
    T.formatArgs = Pt;
    T.save = jt;
    T.load = Dt;
    T.useColors = Mt;
    T.storage = /*#__PURE__*/ _t();
    T.destroy = /* @__PURE__ */ /*#__PURE__*/ (()=>{
        let t = false;
        return ()=>{
            t || (t = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
        };
    })();
    T.colors = [
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
    function Mt() {
        if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return true;
        if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
        let t;
        return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (t = /*#__PURE__*/ navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(t[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    m$1(Mt, "useColors");
    function Pt(t) {
        if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + V.exports.humanize(this.diff), !this.useColors) return;
        let e = "color: " + this.color;
        t.splice(1, 0, e, "color: inherit");
        let n = 0, s = 0;
        t[0].replace(/%[a-zA-Z%]/g, (r)=>{
            r !== "%%" && (n++, r === "%c" && (s = n));
        }), t.splice(s, 0, e);
    }
    m$1(Pt, "formatArgs");
    T.log = console.debug || console.log || (()=>{});
    function jt(t) {
        try {
            t ? T.storage.setItem("debug", t) : T.storage.removeItem("debug");
        } catch  {}
    }
    m$1(jt, "save");
    function Dt() {
        let t;
        try {
            t = /*#__PURE__*/ T.storage.getItem("debug");
        } catch  {}
        return !t && typeof process < "u" && "env" in process && (t = define_process_env_default.DEBUG), t;
    }
    m$1(Dt, "load");
    function _t() {
        try {
            return localStorage;
        } catch  {}
    }
    m$1(_t, "localstorage");
    V.exports = /*#__PURE__*/ We()(T);
    var { formatters: Bt } = V.exports;
    Bt.j = function(t) {
        try {
            return JSON.stringify(t);
        } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
        }
    };
});
var xt = /*#__PURE__*/ Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16
}), P = /*#__PURE__*/ Object.freeze({
    rotate: 0,
    vFlip: false,
    hFlip: false
}), ne = /*#__PURE__*/ Object.freeze({
    ...xt,
    ...P
}), Le = /*#__PURE__*/ Object.freeze({
    ...ne,
    body: "",
    hidden: false
});
var bt = /*#__PURE__*/ Object.freeze({
    width: null,
    height: null
}), Me = /*#__PURE__*/ Object.freeze({
    ...bt,
    ...P
});
var re = /*#__PURE__*/ m$1((t, e, n, s = "")=>{
    let r = /*#__PURE__*/ t.split(":");
    if (t.slice(0, 1) === "@") {
        if (r.length < 2 || r.length > 3) return null;
        s = /*#__PURE__*/ r.shift().slice(1);
    }
    if (r.length > 3 || !r.length) return null;
    if (r.length > 1) {
        let l = /*#__PURE__*/ r.pop(), c = /*#__PURE__*/ r.pop(), p = {
            provider: r.length > 0 ? r[0] : s,
            prefix: c,
            name: l
        };
        return e && !N(p) ? null : p;
    }
    let i = r[0], o = /*#__PURE__*/ i.split("-");
    if (o.length > 1) {
        let l = {
            provider: s,
            prefix: /*#__PURE__*/ o.shift(),
            name: /*#__PURE__*/ o.join("-")
        };
        return e && !N(l) ? null : l;
    }
    if (n && s === "") {
        let l = {
            provider: s,
            prefix: "",
            name: i
        };
        return e && !N(l, n) ? null : l;
    }
    return null;
}, "stringToIcon"), N = /*#__PURE__*/ m$1((t, e)=>t ? !!((e && t.prefix === "" || t.prefix) && t.name) : false, "validateIconName");
function Pe(t, e) {
    let n = {};
    !t.hFlip != !e.hFlip && (n.hFlip = true), !t.vFlip != !e.vFlip && (n.vFlip = true);
    let s = ((t.rotate || 0) + (e.rotate || 0)) % 4;
    return s && (n.rotate = s), n;
}
m$1(Pe, "mergeIconTransformations");
function se(t, e) {
    let n = /*#__PURE__*/ Pe(t, e);
    for(let s in Le)s in P ? s in t && !(s in n) && (n[s] = P[s]) : s in e ? n[s] = e[s] : s in t && (n[s] = t[s]);
    return n;
}
m$1(se, "mergeIconData");
function je(t, e) {
    let n = t.icons, s = t.aliases || /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ /*#__PURE__*/ Object.create(null);
    function i(o) {
        if (n[o]) return r[o] = [];
        if (!(o in r)) {
            r[o] = null;
            let l = s[o] && s[o].parent, c = l && i(l);
            c && (r[o] = /*#__PURE__*/ [
                l
            ].concat(c));
        }
        return r[o];
    }
    return m$1(i, "resolve"), (e || Object.keys(n).concat(/*#__PURE__*/ Object.keys(s))).forEach(i), r;
}
m$1(je, "getIconsTree");
function De(t, e, n) {
    let s = t.icons, r = t.aliases || /* @__PURE__ */ Object.create(null), i = {};
    function o(l) {
        i = /*#__PURE__*/ se(s[l] || r[l], i);
    }
    return m$1(o, "parse"), o(e), n.forEach(o), se(t, i);
}
m$1(De, "internalGetIconData");
function oe(t, e) {
    if (t.icons[e]) return De(t, e, []);
    let n = je(t, [
        e
    ])[e];
    return n ? De(t, e, n) : null;
}
m$1(oe, "getIconData");
var wt = /(-?[0-9.]*[0-9]+[0-9.]*)/g, yt = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ie(t, e, n) {
    if (e === 1) return t;
    if (n = n || 100, typeof t == "number") return Math.ceil(t * e * n) / n;
    if (typeof t != "string") return t;
    let s = /*#__PURE__*/ t.split(wt);
    if (s === null || !s.length) return t;
    let r = [], i = /*#__PURE__*/ s.shift(), o = /*#__PURE__*/ yt.test(i);
    for(;;){
        if (o) {
            let l = /*#__PURE__*/ parseFloat(i);
            isNaN(l) ? r.push(i) : r.push(Math.ceil(l * e * n) / n);
        } else r.push(i);
        if (i = /*#__PURE__*/ s.shift(), i === void 0) return r.join("");
        o = !o;
    }
}
m$1(ie, "calculateSize");
function Ct(t, e = "defs") {
    let n = "", s = /*#__PURE__*/ t.indexOf("<" + e);
    for(; s >= 0;){
        let r = /*#__PURE__*/ t.indexOf(">", s), i = /*#__PURE__*/ t.indexOf("</" + e);
        if (r === -1 || i === -1) break;
        let o = /*#__PURE__*/ t.indexOf(">", i);
        if (o === -1) break;
        n += /*#__PURE__*/ t.slice(r + 1, i).trim(), t = t.slice(0, s).trim() + t.slice(o + 1);
    }
    return {
        defs: n,
        content: t
    };
}
m$1(Ct, "splitSVGDefs");
function St(t, e) {
    return t ? "<defs>" + t + "</defs>" + e : e;
}
m$1(St, "mergeDefsAndContent");
function _e(t, e, n) {
    let s = /*#__PURE__*/ Ct(t);
    return St(s.defs, e + s.content + n);
}
m$1(_e, "wrapSVGContent");
var Tt = /*#__PURE__*/ m$1((t)=>t === "unset" || t === "undefined" || t === "none", "isUnsetKeyword");
function le(t, e) {
    let n = {
        ...ne,
        ...t
    }, s = {
        ...Me,
        ...e
    }, r = {
        left: n.left,
        top: n.top,
        width: n.width,
        height: n.height
    }, i = n.body;
    [
        n,
        s
    ].forEach((m)=>{
        let b = [], C = m.hFlip, I = m.vFlip, S = m.rotate;
        C ? I ? S += 2 : (b.push("translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"), b.push("scale(-1 1)"), r.top = r.left = 0) : I && (b.push("translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"), b.push("scale(1 -1)"), r.top = r.left = 0);
        let w;
        switch(S < 0 && (S -= Math.floor(S / 4) * 4), S = S % 4, S){
            case 1:
                w = r.height / 2 + r.top, b.unshift("rotate(90 " + w.toString() + " " + w.toString() + ")");
                break;
            case 2:
                b.unshift("rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")");
                break;
            case 3:
                w = r.width / 2 + r.left, b.unshift("rotate(-90 " + w.toString() + " " + w.toString() + ")");
                break;
        }
        S % 2 === 1 && (r.left !== r.top && (w = r.left, r.left = r.top, r.top = w), r.width !== r.height && (w = r.width, r.width = r.height, r.height = w)), b.length && (i = /*#__PURE__*/ _e(i, '<g transform="' + b.join(" ") + '">', "</g>"));
    });
    let o = s.width, l = s.height, c = r.width, p = r.height, u, f;
    o === null ? (f = l === null ? "1em" : l === "auto" ? p : l, u = /*#__PURE__*/ ie(f, c / p)) : (u = o === "auto" ? c : o, f = l === null ? ie(u, p / c) : l === "auto" ? p : l);
    let h = {}, g = /*#__PURE__*/ m$1((m, b)=>{
        Tt(b) || (h[m] = /*#__PURE__*/ b.toString());
    }, "setAttr");
    g("width", u), g("height", f);
    let d = [
        r.left,
        r.top,
        c,
        p
    ];
    return h.viewBox = /*#__PURE__*/ d.join(" "), {
        attributes: h,
        viewBox: d,
        body: i
    };
}
m$1(le, "iconToSVG");
var It = /\sid="(\S+)"/g, $t = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16), Rt = 0;
function ae(t, e = $t) {
    let n = [], s;
    for(; s = /*#__PURE__*/ It.exec(t);)n.push(s[1]);
    if (!n.length) return t;
    let r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
    return n.forEach((i)=>{
        let o = typeof e == "function" ? e(i) : e + (Rt++).toString(), l = /*#__PURE__*/ i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        t = /*#__PURE__*/ t.replace(new RegExp('([#;"])(' + l + ')([")]|\\.[a-z])', "g"), "$1" + o + r + "$3");
    }), t = /*#__PURE__*/ t.replace(new RegExp(r, "g"), ""), t;
}
m$1(ae, "replaceIDs");
function ce(t, e) {
    let n = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for(let s in e)n += " " + s + '="' + e[s] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
m$1(ce, "iconToHTML");
q$1(/*#__PURE__*/ Ge());
var Ot = {
    body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
    height: 80,
    width: 80
}, pe = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), Sr = /*#__PURE__*/ m$1((t)=>{
    for (let e of t){
        if (!e.name) throw new Error('Invalid icon loader. Must have a "name" property with non-empty string value.');
        if (tt$1.debug("Registering icon pack:", e.name), "loader" in e) Ne.set(e.name, e.loader);
        else if ("icons" in e) pe.set(e.name, e.icons);
        else throw tt$1.error("Invalid icon loader:", e), new Error('Invalid icon loader. Must have either "icons" or "loader" property.');
    }
}, "registerIconPacks"), Ze = /*#__PURE__*/ m$1(async (t, e)=>{
    let n = /*#__PURE__*/ re(t, true, e !== void 0);
    if (!n) throw new Error(`Invalid icon name: ${t}`);
    let s = n.prefix || e;
    if (!s) throw new Error(`Icon name must contain a prefix: ${t}`);
    let r = /*#__PURE__*/ pe.get(s);
    if (!r) {
        let o = /*#__PURE__*/ Ne.get(s);
        if (!o) throw new Error(`Icon set not found: ${n.prefix}`);
        try {
            r = {
                ...await o(),
                prefix: s
            }, pe.set(s, r);
        } catch (l) {
            throw tt$1.error(l), new Error(`Failed to load icon set: ${n.prefix}`);
        }
    }
    let i = /*#__PURE__*/ oe(r, n.name);
    if (!i) throw new Error(`Icon not found: ${t}`);
    return i;
}, "getRegisteredIconData"), Ve = /*#__PURE__*/ m$1(async (t)=>{
    try {
        return await Ze(t), true;
    } catch  {
        return false;
    }
}, "isIconAvailable"), He = /*#__PURE__*/ m$1(async (t, e, n)=>{
    let s;
    try {
        s = await Ze(t, e?.fallbackPrefix);
    } catch (o) {
        tt$1.error(o), s = Ot;
    }
    let r = /*#__PURE__*/ le(s, e);
    return ce(/*#__PURE__*/ ae(r.body), {
        ...r.attributes,
        ...n
    });
}, "getIconSVG");
function Ue(t) {
    for(var e = [], n = 1; n < arguments.length; n++)e[n - 1] = arguments[n];
    var s = /*#__PURE__*/ Array.from(typeof t == "string" ? [
        t
    ] : t);
    s[s.length - 1] = /*#__PURE__*/ s[s.length - 1].replace(/\r?\n([\t ]*)$/, "");
    var r = /*#__PURE__*/ s.reduce(function(l, c) {
        var p = /*#__PURE__*/ c.match(/\n([\t ]+|(?!\s).)/g);
        return p ? l.concat(/*#__PURE__*/ p.map(function(u) {
            var f, h;
            return (h = (f = /*#__PURE__*/ u.match(/[\t ]/g)) === null || f === void 0 ? void 0 : f.length) !== null && h !== void 0 ? h : 0;
        })) : l;
    }, []);
    if (r.length) {
        var i = new RegExp(`
[	 ]{` + Math.min.apply(Math, r) + "}", "g");
        s = /*#__PURE__*/ s.map(function(l) {
            return l.replace(i, `
`);
        });
    }
    s[0] = /*#__PURE__*/ s[0].replace(/^\r?\n/, "");
    var o = s[0];
    return e.forEach(function(l, c) {
        var p = /*#__PURE__*/ o.match(/(?:^|\n)( *)$/), u = p ? p[1] : "", f = l;
        typeof l == "string" && l.includes(`
`) && (f = /*#__PURE__*/ String(l).split(`
`).map(function(h, g) {
            return g === 0 ? h : "" + u + h;
        }).join(`
`)), o += f + s[c + 1];
    }), o;
}
m$1(Ue, "dedent");
function ge() {
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
m$1(ge, "M");
var M = /*#__PURE__*/ ge();
function et(t) {
    M = t;
}
m$1(et, "H");
var q = {
    exec: /*#__PURE__*/ m$1(()=>null, "exec")
};
function x(t, e = "") {
    let n = typeof t == "string" ? t : t.source, s = {
        replace: /*#__PURE__*/ m$1((r, i)=>{
            let o = typeof i == "string" ? i : i.source;
            return o = /*#__PURE__*/ o.replace(y.caret, "$1"), n = /*#__PURE__*/ n.replace(r, o), s;
        }, "replace"),
        getRegex: /*#__PURE__*/ m$1(()=>new RegExp(n, e), "getRegex")
    };
    return s;
}
m$1(x, "h");
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
    listItemRegex: /*#__PURE__*/ m$1((t)=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`), "listItemRegex"),
    nextBulletRegex: /*#__PURE__*/ m$1((t)=>new RegExp(`^ {0,${Math.min(3, t - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), "nextBulletRegex"),
    hrRegex: /*#__PURE__*/ m$1((t)=>new RegExp(`^ {0,${Math.min(3, t - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), "hrRegex"),
    fencesBeginRegex: /*#__PURE__*/ m$1((t)=>new RegExp(`^ {0,${Math.min(3, t - 1)}}(?:\`\`\`|~~~)`), "fencesBeginRegex"),
    headingBeginRegex: /*#__PURE__*/ m$1((t)=>new RegExp(`^ {0,${Math.min(3, t - 1)}}#`), "headingBeginRegex"),
    htmlBeginRegex: /*#__PURE__*/ m$1((t)=>new RegExp(`^ {0,${Math.min(3, t - 1)}}<(?:[a-z].*>|!--)`, "i"), "htmlBeginRegex")
}, qt = /^(?:[ \t]*(?:\n|$))+/, Wt = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Gt = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, W = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Nt = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, de = /(?:[*+-]|\d{1,9}[.)])/, tt = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, nt = /*#__PURE__*/ x(tt).replace(/bull/g, de).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Zt = /*#__PURE__*/ x(tt).replace(/bull/g, de).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), me = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Vt = /^[^\n]+/, ke = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Ht = /*#__PURE__*/ x(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", ke).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Ut = /*#__PURE__*/ x(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, de).getRegex(), X = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", xe = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Qt = /*#__PURE__*/ x("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", xe).replace("tag", X).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), rt = /*#__PURE__*/ x(me).replace("hr", W).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", X).getRegex(), Jt = /*#__PURE__*/ x(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", rt).getRegex(), be = {
    blockquote: Jt,
    code: Wt,
    def: Ht,
    fences: Gt,
    heading: Nt,
    hr: W,
    html: Qt,
    lheading: nt,
    list: Ut,
    newline: qt,
    paragraph: rt,
    table: q,
    text: Vt
}, Qe = /*#__PURE__*/ x("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", W).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", X).getRegex(), Kt = {
    ...be,
    lheading: Zt,
    table: Qe,
    paragraph: /*#__PURE__*/ x(me).replace("hr", W).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Qe).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", X).getRegex()
}, Xt = {
    ...be,
    html: /*#__PURE__*/ x(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", xe).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: q,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: /*#__PURE__*/ x(me).replace("hr", W).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", nt).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Yt = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, en = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, st = /^( {2,}|\\)\n(?!\s*$)/, tn = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Y = /[\p{P}\p{S}]/u, we = /[\s\p{P}\p{S}]/u, ot = /[^\s\p{P}\p{S}]/u, nn = /*#__PURE__*/ x(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, we).getRegex(), it = /(?!~)[\p{P}\p{S}]/u, rn = /(?!~)[\s\p{P}\p{S}]/u, sn = /(?:[^\s\p{P}\p{S}]|~)/u, on = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, lt = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, ln = /*#__PURE__*/ x(lt, "u").replace(/punct/g, Y).getRegex(), an = /*#__PURE__*/ x(lt, "u").replace(/punct/g, it).getRegex(), at = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", cn = /*#__PURE__*/ x(at, "gu").replace(/notPunctSpace/g, ot).replace(/punctSpace/g, we).replace(/punct/g, Y).getRegex(), pn = /*#__PURE__*/ x(at, "gu").replace(/notPunctSpace/g, sn).replace(/punctSpace/g, rn).replace(/punct/g, it).getRegex(), un = /*#__PURE__*/ x("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ot).replace(/punctSpace/g, we).replace(/punct/g, Y).getRegex(), hn = /*#__PURE__*/ x(/\\(punct)/, "gu").replace(/punct/g, Y).getRegex(), fn = /*#__PURE__*/ x(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), gn = /*#__PURE__*/ x(xe).replace("(?:-->|$)", "-->").getRegex(), dn = /*#__PURE__*/ x("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", gn).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Q = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, mn = /*#__PURE__*/ x(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Q).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ct = /*#__PURE__*/ x(/^!?\[(label)\]\[(ref)\]/).replace("label", Q).replace("ref", ke).getRegex(), pt = /*#__PURE__*/ x(/^!?\[(ref)\](?:\[\])?/).replace("ref", ke).getRegex(), kn = /*#__PURE__*/ x("reflink|nolink(?!\\()", "g").replace("reflink", ct).replace("nolink", pt).getRegex(), ye = {
    _backpedal: q,
    anyPunctuation: hn,
    autolink: fn,
    blockSkip: on,
    br: st,
    code: en,
    del: q,
    emStrongLDelim: ln,
    emStrongRDelimAst: cn,
    emStrongRDelimUnd: un,
    escape: Yt,
    link: mn,
    nolink: pt,
    punctuation: nn,
    reflink: ct,
    reflinkSearch: kn,
    tag: dn,
    text: tn,
    url: q
}, xn = {
    ...ye,
    link: /*#__PURE__*/ x(/^!?\[(label)\]\((.*?)\)/).replace("label", Q).getRegex(),
    reflink: /*#__PURE__*/ x(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Q).getRegex()
}, ue = {
    ...ye,
    emStrongRDelimAst: pn,
    emStrongLDelim: an,
    url: /*#__PURE__*/ x(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, bn = {
    ...ue,
    br: /*#__PURE__*/ x(st).replace("{2,}", "*").getRegex(),
    text: /*#__PURE__*/ x(ue.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, H = {
    normal: be,
    gfm: Kt,
    pedantic: Xt
}, B = {
    normal: ye,
    gfm: ue,
    breaks: bn,
    pedantic: xn
}, wn = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
}, Je = /*#__PURE__*/ m$1((t)=>wn[t], "ge");
function $(t, e) {
    if (e) {
        if (y.escapeTest.test(t)) return t.replace(y.escapeReplace, Je);
    } else if (y.escapeTestNoEncode.test(t)) return t.replace(y.escapeReplaceNoEncode, Je);
    return t;
}
m$1($, "R");
function Ke(t) {
    try {
        t = /*#__PURE__*/ encodeURI(t).replace(y.percentDecode, "%");
    } catch  {
        return null;
    }
    return t;
}
m$1(Ke, "J");
function Xe(t, e) {
    let n = /*#__PURE__*/ t.replace(y.findPipe, (i, o, l)=>{
        let c = false, p = o;
        for(; --p >= 0 && l[p] === "\\";)c = !c;
        return c ? "|" : " |";
    }), s = /*#__PURE__*/ n.split(y.splitPipe), r = 0;
    if (s[0].trim() || s.shift(), s.length > 0 && !s.at(-1)?.trim() && s.pop(), e) if (s.length > e) s.splice(e);
    else for(; s.length < e;)s.push("");
    for(; r < s.length; r++)s[r] = /*#__PURE__*/ s[r].trim().replace(y.slashPipe, "|");
    return s;
}
m$1(Xe, "V");
function O(t, e, n) {
    let s = t.length;
    if (s === 0) return "";
    let r = 0;
    for(; r < s;){
        let i = /*#__PURE__*/ t.charAt(s - r - 1);
        if (i === e && !n) r++;
        else if (i !== e && n) r++;
        else break;
    }
    return t.slice(0, s - r);
}
m$1(O, "A");
function yn(t, e) {
    if (t.indexOf(e[1]) === -1) return -1;
    let n = 0;
    for(let s = 0; s < t.length; s++)if (t[s] === "\\") s++;
    else if (t[s] === e[0]) n++;
    else if (t[s] === e[1] && (n--, n < 0)) return s;
    return n > 0 ? -2 : -1;
}
m$1(yn, "fe");
function Ye(t, e, n, s, r) {
    let i = e.href, o = e.title || null, l = /*#__PURE__*/ t[1].replace(r.other.outputLinkReplace, "$1");
    s.state.inLink = true;
    let c = {
        type: t[0].charAt(0) === "!" ? "image" : "link",
        raw: n,
        href: i,
        title: o,
        text: l,
        tokens: /*#__PURE__*/ s.inlineTokens(l)
    };
    return s.state.inLink = false, c;
}
m$1(Ye, "de");
function Cn(t, e, n) {
    let s = /*#__PURE__*/ t.match(n.other.indentCodeCompensation);
    if (s === null) return e;
    let r = s[1];
    return e.split(`
`).map((i)=>{
        let o = /*#__PURE__*/ i.match(n.other.beginningSpace);
        if (o === null) return i;
        let [l] = o;
        return l.length >= r.length ? i.slice(r.length) : i;
    }).join(`
`);
}
m$1(Cn, "Je");
var J = class {
    static{
        m$1(this, "S");
    }
    options;
    rules;
    lexer;
    constructor(t){
        this.options = t || M;
    }
    space(t) {
        let e = /*#__PURE__*/ this.rules.block.newline.exec(t);
        if (e && e[0].length > 0) return {
            type: "space",
            raw: e[0]
        };
    }
    code(t) {
        let e = /*#__PURE__*/ this.rules.block.code.exec(t);
        if (e) {
            let n = /*#__PURE__*/ e[0].replace(this.rules.other.codeRemoveIndent, "");
            return {
                type: "code",
                raw: e[0],
                codeBlockStyle: "indented",
                text: this.options.pedantic ? n : O(n, `
`)
            };
        }
    }
    fences(t) {
        let e = /*#__PURE__*/ this.rules.block.fences.exec(t);
        if (e) {
            let n = e[0], s = /*#__PURE__*/ Cn(n, e[3] || "", this.rules);
            return {
                type: "code",
                raw: n,
                lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2],
                text: s
            };
        }
    }
    heading(t) {
        let e = /*#__PURE__*/ this.rules.block.heading.exec(t);
        if (e) {
            let n = /*#__PURE__*/ e[2].trim();
            if (this.rules.other.endingHash.test(n)) {
                let s = /*#__PURE__*/ O(n, "#");
                (this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (n = /*#__PURE__*/ s.trim());
            }
            return {
                type: "heading",
                raw: e[0],
                depth: e[1].length,
                text: n,
                tokens: /*#__PURE__*/ this.lexer.inline(n)
            };
        }
    }
    hr(t) {
        let e = /*#__PURE__*/ this.rules.block.hr.exec(t);
        if (e) return {
            type: "hr",
            raw: /*#__PURE__*/ O(e[0], `
`)
        };
    }
    blockquote(t) {
        let e = /*#__PURE__*/ this.rules.block.blockquote.exec(t);
        if (e) {
            let n = /*#__PURE__*/ O(e[0], `
`).split(`
`), s = "", r = "", i = [];
            for(; n.length > 0;){
                let o = false, l = [], c;
                for(c = 0; c < n.length; c++)if (this.rules.other.blockquoteStart.test(n[c])) l.push(n[c]), o = true;
                else if (!o) l.push(n[c]);
                else break;
                n = /*#__PURE__*/ n.slice(c);
                let p = /*#__PURE__*/ l.join(`
`), u = /*#__PURE__*/ p.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
                s = s ? `${s}
${p}` : p, r = r ? `${r}
${u}` : u;
                let f = this.lexer.state.top;
                if (this.lexer.state.top = true, this.lexer.blockTokens(u, i, true), this.lexer.state.top = f, n.length === 0) break;
                let h = /*#__PURE__*/ i.at(-1);
                if (h?.type === "code") break;
                if (h?.type === "blockquote") {
                    let g = h, d = g.raw + `
` + n.join(`
`), m = /*#__PURE__*/ this.blockquote(d);
                    i[i.length - 1] = m, s = s.substring(0, s.length - g.raw.length) + m.raw, r = r.substring(0, r.length - g.text.length) + m.text;
                    break;
                } else if (h?.type === "list") {
                    let g = h, d = g.raw + `
` + n.join(`
`), m = /*#__PURE__*/ this.list(d);
                    i[i.length - 1] = m, s = s.substring(0, s.length - h.raw.length) + m.raw, r = r.substring(0, r.length - g.raw.length) + m.raw, n = /*#__PURE__*/ d.substring(i.at(-1).raw.length).split(`
`);
                    continue;
                }
            }
            return {
                type: "blockquote",
                raw: s,
                tokens: i,
                text: r
            };
        }
    }
    list(t) {
        let e = /*#__PURE__*/ this.rules.block.list.exec(t);
        if (e) {
            let n = /*#__PURE__*/ e[1].trim(), s = n.length > 1, r = {
                type: "list",
                raw: "",
                ordered: s,
                start: s ? +n.slice(0, -1) : "",
                loose: false,
                items: []
            };
            n = s ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = s ? n : "[*+-]");
            let i = /*#__PURE__*/ this.rules.other.listItemRegex(n), o = false;
            for(; t;){
                let c = false, p = "", u = "";
                if (!(e = /*#__PURE__*/ i.exec(t)) || this.rules.block.hr.test(t)) break;
                p = e[0], t = /*#__PURE__*/ t.substring(p.length);
                let f = /*#__PURE__*/ e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (C)=>" ".repeat(3 * C.length)), h = t.split(`
`, 1)[0], g = !f.trim(), d = 0;
                if (this.options.pedantic ? (d = 2, u = /*#__PURE__*/ f.trimStart()) : g ? d = e[1].length + 1 : (d = /*#__PURE__*/ e[2].search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, u = /*#__PURE__*/ f.slice(d), d += e[1].length), g && this.rules.other.blankLine.test(h) && (p += h + `
`, t = /*#__PURE__*/ t.substring(h.length + 1), c = true), !c) {
                    let C = /*#__PURE__*/ this.rules.other.nextBulletRegex(d), I = /*#__PURE__*/ this.rules.other.hrRegex(d), S = /*#__PURE__*/ this.rules.other.fencesBeginRegex(d), w = /*#__PURE__*/ this.rules.other.headingBeginRegex(d), $e = /*#__PURE__*/ this.rules.other.htmlBeginRegex(d);
                    for(; t;){
                        let v = t.split(`
`, 1)[0], A;
                        if (h = v, this.options.pedantic ? (h = /*#__PURE__*/ h.replace(this.rules.other.listReplaceNesting, "  "), A = h) : A = /*#__PURE__*/ h.replace(this.rules.other.tabCharGlobal, "    "), S.test(h) || w.test(h) || $e.test(h) || C.test(h) || I.test(h)) break;
                        if (A.search(this.rules.other.nonSpaceChar) >= d || !h.trim()) u += `
` + A.slice(d);
                        else {
                            if (g || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || S.test(f) || w.test(f) || I.test(f)) break;
                            u += `
` + h;
                        }
                        !g && !h.trim() && (g = true), p += v + `
`, t = /*#__PURE__*/ t.substring(v.length + 1), f = /*#__PURE__*/ A.slice(d);
                    }
                }
                r.loose || (o ? r.loose = true : this.rules.other.doubleBlankLine.test(p) && (o = true));
                let m = null, b;
                this.options.gfm && (m = /*#__PURE__*/ this.rules.other.listIsTask.exec(u), m && (b = m[0] !== "[ ] ", u = /*#__PURE__*/ u.replace(this.rules.other.listReplaceTask, ""))), r.items.push({
                    type: "list_item",
                    raw: p,
                    task: !!m,
                    checked: b,
                    loose: false,
                    text: u,
                    tokens: []
                }), r.raw += p;
            }
            let l = /*#__PURE__*/ r.items.at(-1);
            if (l) l.raw = /*#__PURE__*/ l.raw.trimEnd(), l.text = /*#__PURE__*/ l.text.trimEnd();
            else return;
            r.raw = /*#__PURE__*/ r.raw.trimEnd();
            for(let c = 0; c < r.items.length; c++)if (this.lexer.state.top = false, r.items[c].tokens = /*#__PURE__*/ this.lexer.blockTokens(r.items[c].text, []), !r.loose) {
                let p = /*#__PURE__*/ r.items[c].tokens.filter((f)=>f.type === "space"), u = p.length > 0 && p.some((f)=>this.rules.other.anyLine.test(f.raw));
                r.loose = u;
            }
            if (r.loose) for(let c = 0; c < r.items.length; c++)r.items[c].loose = true;
            return r;
        }
    }
    html(t) {
        let e = /*#__PURE__*/ this.rules.block.html.exec(t);
        if (e) return {
            type: "html",
            block: true,
            raw: e[0],
            pre: e[1] === "pre" || e[1] === "script" || e[1] === "style",
            text: e[0]
        };
    }
    def(t) {
        let e = /*#__PURE__*/ this.rules.block.def.exec(t);
        if (e) {
            let n = /*#__PURE__*/ e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
            return {
                type: "def",
                tag: n,
                raw: e[0],
                href: s,
                title: r
            };
        }
    }
    table(t) {
        let e = /*#__PURE__*/ this.rules.block.table.exec(t);
        if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
        let n = /*#__PURE__*/ Xe(e[1]), s = /*#__PURE__*/ e[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], i = {
            type: "table",
            raw: e[0],
            header: [],
            align: [],
            rows: []
        };
        if (n.length === s.length) {
            for (let o of s)this.rules.other.tableAlignRight.test(o) ? i.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? i.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? i.align.push("left") : i.align.push(null);
            for(let o = 0; o < n.length; o++)i.header.push({
                text: n[o],
                tokens: /*#__PURE__*/ this.lexer.inline(n[o]),
                header: true,
                align: i.align[o]
            });
            for (let o of r)i.rows.push(/*#__PURE__*/ Xe(o, i.header.length).map((l, c)=>({
                    text: l,
                    tokens: /*#__PURE__*/ this.lexer.inline(l),
                    header: false,
                    align: i.align[c]
                })));
            return i;
        }
    }
    lheading(t) {
        let e = /*#__PURE__*/ this.rules.block.lheading.exec(t);
        if (e) return {
            type: "heading",
            raw: e[0],
            depth: e[2].charAt(0) === "=" ? 1 : 2,
            text: e[1],
            tokens: /*#__PURE__*/ this.lexer.inline(e[1])
        };
    }
    paragraph(t) {
        let e = /*#__PURE__*/ this.rules.block.paragraph.exec(t);
        if (e) {
            let n = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
            return {
                type: "paragraph",
                raw: e[0],
                text: n,
                tokens: /*#__PURE__*/ this.lexer.inline(n)
            };
        }
    }
    text(t) {
        let e = /*#__PURE__*/ this.rules.block.text.exec(t);
        if (e) return {
            type: "text",
            raw: e[0],
            text: e[0],
            tokens: /*#__PURE__*/ this.lexer.inline(e[0])
        };
    }
    escape(t) {
        let e = /*#__PURE__*/ this.rules.inline.escape.exec(t);
        if (e) return {
            type: "escape",
            raw: e[0],
            text: e[1]
        };
    }
    tag(t) {
        let e = /*#__PURE__*/ this.rules.inline.tag.exec(t);
        if (e) return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = false), {
            type: "html",
            raw: e[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            block: false,
            text: e[0]
        };
    }
    link(t) {
        let e = /*#__PURE__*/ this.rules.inline.link.exec(t);
        if (e) {
            let n = /*#__PURE__*/ e[2].trim();
            if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
                if (!this.rules.other.endAngleBracket.test(n)) return;
                let i = /*#__PURE__*/ O(/*#__PURE__*/ n.slice(0, -1), "\\");
                if ((n.length - i.length) % 2 === 0) return;
            } else {
                let i = /*#__PURE__*/ yn(e[2], "()");
                if (i === -2) return;
                if (i > -1) {
                    let o = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + i;
                    e[2] = /*#__PURE__*/ e[2].substring(0, i), e[0] = /*#__PURE__*/ e[0].substring(0, o).trim(), e[3] = "";
                }
            }
            let s = e[2], r = "";
            if (this.options.pedantic) {
                let i = /*#__PURE__*/ this.rules.other.pedanticHrefTitle.exec(s);
                i && (s = i[1], r = i[3]);
            } else r = e[3] ? e[3].slice(1, -1) : "";
            return s = /*#__PURE__*/ s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? s = /*#__PURE__*/ s.slice(1) : s = /*#__PURE__*/ s.slice(1, -1)), Ye(e, {
                href: s && s.replace(this.rules.inline.anyPunctuation, "$1"),
                title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
            }, e[0], this.lexer, this.rules);
        }
    }
    reflink(t, e) {
        let n;
        if ((n = /*#__PURE__*/ this.rules.inline.reflink.exec(t)) || (n = /*#__PURE__*/ this.rules.inline.nolink.exec(t))) {
            let s = /*#__PURE__*/ (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), r = e[s.toLowerCase()];
            if (!r) {
                let i = /*#__PURE__*/ n[0].charAt(0);
                return {
                    type: "text",
                    raw: i,
                    text: i
                };
            }
            return Ye(n, r, n[0], this.lexer, this.rules);
        }
    }
    emStrong(t, e, n = "") {
        let s = /*#__PURE__*/ this.rules.inline.emStrongLDelim.exec(t);
        if (!(!s || s[3] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(s[1] || s[2]) || !n || this.rules.inline.punctuation.exec(n))) {
            let r = [
                ...s[0]
            ].length - 1, i, o, l = r, c = 0, p = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
            for(p.lastIndex = 0, e = /*#__PURE__*/ e.slice(-1 * t.length + r); (s = /*#__PURE__*/ p.exec(e)) != null;){
                if (i = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !i) continue;
                if (o = [
                    ...i
                ].length, s[3] || s[4]) {
                    l += o;
                    continue;
                } else if ((s[5] || s[6]) && r % 3 && !((r + o) % 3)) {
                    c += o;
                    continue;
                }
                if (l -= o, l > 0) continue;
                o = /*#__PURE__*/ Math.min(o, o + l + c);
                let u = [
                    ...s[0]
                ][0].length, f = /*#__PURE__*/ t.slice(0, r + s.index + u + o);
                if (Math.min(r, o) % 2) {
                    let g = /*#__PURE__*/ f.slice(1, -1);
                    return {
                        type: "em",
                        raw: f,
                        text: g,
                        tokens: /*#__PURE__*/ this.lexer.inlineTokens(g)
                    };
                }
                let h = /*#__PURE__*/ f.slice(2, -2);
                return {
                    type: "strong",
                    raw: f,
                    text: h,
                    tokens: /*#__PURE__*/ this.lexer.inlineTokens(h)
                };
            }
        }
    }
    codespan(t) {
        let e = /*#__PURE__*/ this.rules.inline.code.exec(t);
        if (e) {
            let n = /*#__PURE__*/ e[2].replace(this.rules.other.newLineCharGlobal, " "), s = /*#__PURE__*/ this.rules.other.nonSpaceChar.test(n), r = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
            return s && r && (n = /*#__PURE__*/ n.substring(1, n.length - 1)), {
                type: "codespan",
                raw: e[0],
                text: n
            };
        }
    }
    br(t) {
        let e = /*#__PURE__*/ this.rules.inline.br.exec(t);
        if (e) return {
            type: "br",
            raw: e[0]
        };
    }
    del(t) {
        let e = /*#__PURE__*/ this.rules.inline.del.exec(t);
        if (e) return {
            type: "del",
            raw: e[0],
            text: e[2],
            tokens: /*#__PURE__*/ this.lexer.inlineTokens(e[2])
        };
    }
    autolink(t) {
        let e = /*#__PURE__*/ this.rules.inline.autolink.exec(t);
        if (e) {
            let n, s;
            return e[2] === "@" ? (n = e[1], s = "mailto:" + n) : (n = e[1], s = n), {
                type: "link",
                raw: e[0],
                text: n,
                href: s,
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
    url(t) {
        let e;
        if (e = /*#__PURE__*/ this.rules.inline.url.exec(t)) {
            let n, s;
            if (e[2] === "@") n = e[0], s = "mailto:" + n;
            else {
                let r;
                do r = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
                while (r !== e[0]);
                n = e[0], e[1] === "www." ? s = "http://" + e[0] : s = e[0];
            }
            return {
                type: "link",
                raw: e[0],
                text: n,
                href: s,
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
    inlineText(t) {
        let e = /*#__PURE__*/ this.rules.inline.text.exec(t);
        if (e) {
            let n = this.lexer.state.inRawBlock;
            return {
                type: "text",
                raw: e[0],
                text: e[0],
                escaped: n
            };
        }
    }
}, R = class he {
    static{
        m$1(this, "a");
    }
    tokens;
    options;
    state;
    tokenizer;
    inlineQueue;
    constructor(e){
        this.tokens = [], this.tokens.links = /* @__PURE__ */ /*#__PURE__*/ Object.create(null), this.options = e || M, this.options.tokenizer = this.options.tokenizer || new J(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
            inLink: false,
            inRawBlock: false,
            top: true
        };
        let n = {
            other: y,
            block: H.normal,
            inline: B.normal
        };
        this.options.pedantic ? (n.block = H.pedantic, n.inline = B.pedantic) : this.options.gfm && (n.block = H.gfm, this.options.breaks ? n.inline = B.breaks : n.inline = B.gfm), this.tokenizer.rules = n;
    }
    static get rules() {
        return {
            block: H,
            inline: B
        };
    }
    static lex(e, n) {
        return new he(n).lex(e);
    }
    static lexInline(e, n) {
        return new he(n).inlineTokens(e);
    }
    lex(e) {
        e = /*#__PURE__*/ e.replace(y.carriageReturn, `
`), this.blockTokens(e, this.tokens);
        for(let n = 0; n < this.inlineQueue.length; n++){
            let s = this.inlineQueue[n];
            this.inlineTokens(s.src, s.tokens);
        }
        return this.inlineQueue = [], this.tokens;
    }
    blockTokens(e, n = [], s = false) {
        for(this.options.pedantic && (e = /*#__PURE__*/ e.replace(y.tabCharGlobal, "    ").replace(y.spaceLine, "")); e;){
            let r;
            if (this.options.extensions?.block?.some((o)=>(r = /*#__PURE__*/ o.call({
                    lexer: this
                }, e, n)) ? (e = /*#__PURE__*/ e.substring(r.raw.length), n.push(r), true) : false)) continue;
            if (r = /*#__PURE__*/ this.tokenizer.space(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length);
                let o = /*#__PURE__*/ n.at(-1);
                r.raw.length === 1 && o !== void 0 ? o.raw += `
` : n.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.code(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length);
                let o = /*#__PURE__*/ n.at(-1);
                o?.type === "paragraph" || o?.type === "text" ? (o.raw += `
` + r.raw, o.text += `
` + r.text, this.inlineQueue.at(-1).src = o.text) : n.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.fences(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), n.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.heading(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), n.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.hr(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), n.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.blockquote(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), n.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.list(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), n.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.html(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), n.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.def(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length);
                let o = /*#__PURE__*/ n.at(-1);
                o?.type === "paragraph" || o?.type === "text" ? (o.raw += `
` + r.raw, o.text += `
` + r.raw, this.inlineQueue.at(-1).src = o.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
                    href: r.href,
                    title: r.title
                });
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.table(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), n.push(r);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.lheading(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length), n.push(r);
                continue;
            }
            let i = e;
            if (this.options.extensions?.startBlock) {
                let o = 1 / 0, l = /*#__PURE__*/ e.slice(1), c;
                this.options.extensions.startBlock.forEach((p)=>{
                    c = /*#__PURE__*/ p.call({
                        lexer: this
                    }, l), typeof c == "number" && c >= 0 && (o = /*#__PURE__*/ Math.min(o, c));
                }), o < 1 / 0 && o >= 0 && (i = /*#__PURE__*/ e.substring(0, o + 1));
            }
            if (this.state.top && (r = /*#__PURE__*/ this.tokenizer.paragraph(i))) {
                let o = /*#__PURE__*/ n.at(-1);
                s && o?.type === "paragraph" ? (o.raw += `
` + r.raw, o.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : n.push(r), s = i.length !== e.length, e = /*#__PURE__*/ e.substring(r.raw.length);
                continue;
            }
            if (r = /*#__PURE__*/ this.tokenizer.text(e)) {
                e = /*#__PURE__*/ e.substring(r.raw.length);
                let o = /*#__PURE__*/ n.at(-1);
                o?.type === "text" ? (o.raw += `
` + r.raw, o.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : n.push(r);
                continue;
            }
            if (e) {
                let o = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                    console.error(o);
                    break;
                } else throw new Error(o);
            }
        }
        return this.state.top = true, n;
    }
    inline(e, n = []) {
        return this.inlineQueue.push({
            src: e,
            tokens: n
        }), n;
    }
    inlineTokens(e, n = []) {
        let s = e, r = null;
        if (this.tokens.links) {
            let l = /*#__PURE__*/ Object.keys(this.tokens.links);
            if (l.length > 0) for(; (r = /*#__PURE__*/ this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null;)l.includes(/*#__PURE__*/ r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (s = s.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
        }
        for(; (r = /*#__PURE__*/ this.tokenizer.rules.inline.anyPunctuation.exec(s)) != null;)s = s.slice(0, r.index) + "++" + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
        for(; (r = /*#__PURE__*/ this.tokenizer.rules.inline.blockSkip.exec(s)) != null;)s = s.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        let i = false, o = "";
        for(; e;){
            i || (o = ""), i = false;
            let l;
            if (this.options.extensions?.inline?.some((p)=>(l = /*#__PURE__*/ p.call({
                    lexer: this
                }, e, n)) ? (e = /*#__PURE__*/ e.substring(l.raw.length), n.push(l), true) : false)) continue;
            if (l = /*#__PURE__*/ this.tokenizer.escape(e)) {
                e = /*#__PURE__*/ e.substring(l.raw.length), n.push(l);
                continue;
            }
            if (l = /*#__PURE__*/ this.tokenizer.tag(e)) {
                e = /*#__PURE__*/ e.substring(l.raw.length), n.push(l);
                continue;
            }
            if (l = /*#__PURE__*/ this.tokenizer.link(e)) {
                e = /*#__PURE__*/ e.substring(l.raw.length), n.push(l);
                continue;
            }
            if (l = /*#__PURE__*/ this.tokenizer.reflink(e, this.tokens.links)) {
                e = /*#__PURE__*/ e.substring(l.raw.length);
                let p = /*#__PURE__*/ n.at(-1);
                l.type === "text" && p?.type === "text" ? (p.raw += l.raw, p.text += l.text) : n.push(l);
                continue;
            }
            if (l = /*#__PURE__*/ this.tokenizer.emStrong(e, s, o)) {
                e = /*#__PURE__*/ e.substring(l.raw.length), n.push(l);
                continue;
            }
            if (l = /*#__PURE__*/ this.tokenizer.codespan(e)) {
                e = /*#__PURE__*/ e.substring(l.raw.length), n.push(l);
                continue;
            }
            if (l = /*#__PURE__*/ this.tokenizer.br(e)) {
                e = /*#__PURE__*/ e.substring(l.raw.length), n.push(l);
                continue;
            }
            if (l = /*#__PURE__*/ this.tokenizer.del(e)) {
                e = /*#__PURE__*/ e.substring(l.raw.length), n.push(l);
                continue;
            }
            if (l = /*#__PURE__*/ this.tokenizer.autolink(e)) {
                e = /*#__PURE__*/ e.substring(l.raw.length), n.push(l);
                continue;
            }
            if (!this.state.inLink && (l = /*#__PURE__*/ this.tokenizer.url(e))) {
                e = /*#__PURE__*/ e.substring(l.raw.length), n.push(l);
                continue;
            }
            let c = e;
            if (this.options.extensions?.startInline) {
                let p = 1 / 0, u = /*#__PURE__*/ e.slice(1), f;
                this.options.extensions.startInline.forEach((h)=>{
                    f = /*#__PURE__*/ h.call({
                        lexer: this
                    }, u), typeof f == "number" && f >= 0 && (p = /*#__PURE__*/ Math.min(p, f));
                }), p < 1 / 0 && p >= 0 && (c = /*#__PURE__*/ e.substring(0, p + 1));
            }
            if (l = /*#__PURE__*/ this.tokenizer.inlineText(c)) {
                e = /*#__PURE__*/ e.substring(l.raw.length), l.raw.slice(-1) !== "_" && (o = /*#__PURE__*/ l.raw.slice(-1)), i = true;
                let p = /*#__PURE__*/ n.at(-1);
                p?.type === "text" ? (p.raw += l.raw, p.text += l.text) : n.push(l);
                continue;
            }
            if (e) {
                let p = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                    console.error(p);
                    break;
                } else throw new Error(p);
            }
        }
        return n;
    }
}, K = class {
    static{
        m$1(this, "$");
    }
    options;
    parser;
    constructor(t){
        this.options = t || M;
    }
    space(t) {
        return "";
    }
    code({ text: t, lang: e, escaped: n }) {
        let s = (e || "").match(y.notSpaceStart)?.[0], r = t.replace(y.endingNewline, "") + `
`;
        return s ? '<pre><code class="language-' + $(s) + '">' + (n ? r : $(r, true)) + `</code></pre>
` : "<pre><code>" + (n ? r : $(r, true)) + `</code></pre>
`;
    }
    blockquote({ tokens: t }) {
        return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
    }
    html({ text: t }) {
        return t;
    }
    heading({ tokens: t, depth: e }) {
        return `<h${e}>${this.parser.parseInline(t)}</h${e}>
`;
    }
    hr(t) {
        return `<hr>
`;
    }
    list(t) {
        let e = t.ordered, n = t.start, s = "";
        for(let o = 0; o < t.items.length; o++){
            let l = t.items[o];
            s += /*#__PURE__*/ this.listitem(l);
        }
        let r = e ? "ol" : "ul", i = e && n !== 1 ? ' start="' + n + '"' : "";
        return "<" + r + i + `>
` + s + "</" + r + `>
`;
    }
    listitem(t) {
        let e = "";
        if (t.task) {
            let n = /*#__PURE__*/ this.checkbox({
                checked: !!t.checked
            });
            t.loose ? t.tokens[0]?.type === "paragraph" ? (t.tokens[0].text = n + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = n + " " + $(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = true)) : t.tokens.unshift({
                type: "text",
                raw: n + " ",
                text: n + " ",
                escaped: true
            }) : e += n + " ";
        }
        return e += /*#__PURE__*/ this.parser.parse(t.tokens, !!t.loose), `<li>${e}</li>
`;
    }
    checkbox({ checked: t }) {
        return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
    }
    paragraph({ tokens: t }) {
        return `<p>${this.parser.parseInline(t)}</p>
`;
    }
    table(t) {
        let e = "", n = "";
        for(let r = 0; r < t.header.length; r++)n += /*#__PURE__*/ this.tablecell(t.header[r]);
        e += /*#__PURE__*/ this.tablerow({
            text: n
        });
        let s = "";
        for(let r = 0; r < t.rows.length; r++){
            let i = t.rows[r];
            n = "";
            for(let o = 0; o < i.length; o++)n += /*#__PURE__*/ this.tablecell(i[o]);
            s += /*#__PURE__*/ this.tablerow({
                text: n
            });
        }
        return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + s + `</table>
`;
    }
    tablerow({ text: t }) {
        return `<tr>
${t}</tr>
`;
    }
    tablecell(t) {
        let e = /*#__PURE__*/ this.parser.parseInline(t.tokens), n = t.header ? "th" : "td";
        return (t.align ? `<${n} align="${t.align}">` : `<${n}>`) + e + `</${n}>
`;
    }
    strong({ tokens: t }) {
        return `<strong>${this.parser.parseInline(t)}</strong>`;
    }
    em({ tokens: t }) {
        return `<em>${this.parser.parseInline(t)}</em>`;
    }
    codespan({ text: t }) {
        return `<code>${$(t, true)}</code>`;
    }
    br(t) {
        return "<br>";
    }
    del({ tokens: t }) {
        return `<del>${this.parser.parseInline(t)}</del>`;
    }
    link({ href: t, title: e, tokens: n }) {
        let s = /*#__PURE__*/ this.parser.parseInline(n), r = /*#__PURE__*/ Ke(t);
        if (r === null) return s;
        t = r;
        let i = '<a href="' + t + '"';
        return e && (i += ' title="' + $(e) + '"'), i += ">" + s + "</a>", i;
    }
    image({ href: t, title: e, text: n, tokens: s }) {
        s && (n = /*#__PURE__*/ this.parser.parseInline(s, this.parser.textRenderer));
        let r = /*#__PURE__*/ Ke(t);
        if (r === null) return $(n);
        t = r;
        let i = `<img src="${t}" alt="${n}"`;
        return e && (i += ` title="${$(e)}"`), i += ">", i;
    }
    text(t) {
        return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : $(t.text);
    }
}, Ce = class {
    static{
        m$1(this, "_");
    }
    strong({ text: t }) {
        return t;
    }
    em({ text: t }) {
        return t;
    }
    codespan({ text: t }) {
        return t;
    }
    del({ text: t }) {
        return t;
    }
    html({ text: t }) {
        return t;
    }
    text({ text: t }) {
        return t;
    }
    link({ text: t }) {
        return "" + t;
    }
    image({ text: t }) {
        return "" + t;
    }
    br() {
        return "";
    }
}, F = class fe {
    static{
        m$1(this, "a");
    }
    options;
    renderer;
    textRenderer;
    constructor(e){
        this.options = e || M, this.options.renderer = this.options.renderer || new K(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Ce();
    }
    static parse(e, n) {
        return new fe(n).parse(e);
    }
    static parseInline(e, n) {
        return new fe(n).parseInline(e);
    }
    parse(e, n = true) {
        let s = "";
        for(let r = 0; r < e.length; r++){
            let i = e[r];
            if (this.options.extensions?.renderers?.[i.type]) {
                let l = i, c = /*#__PURE__*/ this.options.extensions.renderers[l.type].call({
                    parser: this
                }, l);
                if (c !== false || ![
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
                    s += c || "";
                    continue;
                }
            }
            let o = i;
            switch(o.type){
                case "space":
                    {
                        s += /*#__PURE__*/ this.renderer.space(o);
                        continue;
                    }
                case "hr":
                    {
                        s += /*#__PURE__*/ this.renderer.hr(o);
                        continue;
                    }
                case "heading":
                    {
                        s += /*#__PURE__*/ this.renderer.heading(o);
                        continue;
                    }
                case "code":
                    {
                        s += /*#__PURE__*/ this.renderer.code(o);
                        continue;
                    }
                case "table":
                    {
                        s += /*#__PURE__*/ this.renderer.table(o);
                        continue;
                    }
                case "blockquote":
                    {
                        s += /*#__PURE__*/ this.renderer.blockquote(o);
                        continue;
                    }
                case "list":
                    {
                        s += /*#__PURE__*/ this.renderer.list(o);
                        continue;
                    }
                case "html":
                    {
                        s += /*#__PURE__*/ this.renderer.html(o);
                        continue;
                    }
                case "paragraph":
                    {
                        s += /*#__PURE__*/ this.renderer.paragraph(o);
                        continue;
                    }
                case "text":
                    {
                        let l = o, c = /*#__PURE__*/ this.renderer.text(l);
                        for(; r + 1 < e.length && e[r + 1].type === "text";)l = e[++r], c += `
` + this.renderer.text(l);
                        n ? s += /*#__PURE__*/ this.renderer.paragraph({
                            type: "paragraph",
                            raw: c,
                            text: c,
                            tokens: [
                                {
                                    type: "text",
                                    raw: c,
                                    text: c,
                                    escaped: true
                                }
                            ]
                        }) : s += c;
                        continue;
                    }
                default:
                    {
                        let l = 'Token with "' + o.type + '" type was not found.';
                        if (this.options.silent) return console.error(l), "";
                        throw new Error(l);
                    }
            }
        }
        return s;
    }
    parseInline(e, n = this.renderer) {
        let s = "";
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
                    s += l || "";
                    continue;
                }
            }
            let o = i;
            switch(o.type){
                case "escape":
                    {
                        s += /*#__PURE__*/ n.text(o);
                        break;
                    }
                case "html":
                    {
                        s += /*#__PURE__*/ n.html(o);
                        break;
                    }
                case "link":
                    {
                        s += /*#__PURE__*/ n.link(o);
                        break;
                    }
                case "image":
                    {
                        s += /*#__PURE__*/ n.image(o);
                        break;
                    }
                case "strong":
                    {
                        s += /*#__PURE__*/ n.strong(o);
                        break;
                    }
                case "em":
                    {
                        s += /*#__PURE__*/ n.em(o);
                        break;
                    }
                case "codespan":
                    {
                        s += /*#__PURE__*/ n.codespan(o);
                        break;
                    }
                case "br":
                    {
                        s += /*#__PURE__*/ n.br(o);
                        break;
                    }
                case "del":
                    {
                        s += /*#__PURE__*/ n.del(o);
                        break;
                    }
                case "text":
                    {
                        s += /*#__PURE__*/ n.text(o);
                        break;
                    }
                default:
                    {
                        let l = 'Token with "' + o.type + '" type was not found.';
                        if (this.options.silent) return console.error(l), "";
                        throw new Error(l);
                    }
            }
        }
        return s;
    }
}, U = class {
    static{
        m$1(this, "L");
    }
    options;
    block;
    constructor(t){
        this.options = t || M;
    }
    static passThroughHooks = /* @__PURE__ */ new Set([
        "preprocess",
        "postprocess",
        "processAllTokens"
    ]);
    preprocess(t) {
        return t;
    }
    postprocess(t) {
        return t;
    }
    processAllTokens(t) {
        return t;
    }
    provideLexer() {
        return this.block ? R.lex : R.lexInline;
    }
    provideParser() {
        return this.block ? F.parse : F.parseInline;
    }
}, Sn = class {
    static{
        m$1(this, "B");
    }
    defaults = ge();
    options = this.setOptions;
    parse = this.parseMarkdown(true);
    parseInline = this.parseMarkdown(false);
    Parser = F;
    Renderer = K;
    TextRenderer = Ce;
    Lexer = R;
    Tokenizer = J;
    Hooks = U;
    constructor(...t){
        this.use(...t);
    }
    walkTokens(t, e) {
        let n = [];
        for (let s of t)switch(n = /*#__PURE__*/ n.concat(/*#__PURE__*/ e.call(this, s)), s.type){
            case "table":
                {
                    let r = s;
                    for (let i of r.header)n = /*#__PURE__*/ n.concat(/*#__PURE__*/ this.walkTokens(i.tokens, e));
                    for (let i of r.rows)for (let o of i)n = /*#__PURE__*/ n.concat(/*#__PURE__*/ this.walkTokens(o.tokens, e));
                    break;
                }
            case "list":
                {
                    let r = s;
                    n = /*#__PURE__*/ n.concat(/*#__PURE__*/ this.walkTokens(r.items, e));
                    break;
                }
            default:
                {
                    let r = s;
                    this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((i)=>{
                        let o = /*#__PURE__*/ r[i].flat(1 / 0);
                        n = /*#__PURE__*/ n.concat(/*#__PURE__*/ this.walkTokens(o, e));
                    }) : r.tokens && (n = /*#__PURE__*/ n.concat(/*#__PURE__*/ this.walkTokens(r.tokens, e)));
                }
        }
        return n;
    }
    use(...t) {
        let e = this.defaults.extensions || {
            renderers: {},
            childTokens: {}
        };
        return t.forEach((n)=>{
            let s = {
                ...n
            };
            if (s.async = this.defaults.async || s.async || false, n.extensions && (n.extensions.forEach((r)=>{
                if (!r.name) throw new Error("extension name required");
                if ("renderer" in r) {
                    let i = e.renderers[r.name];
                    i ? e.renderers[r.name] = function(...o) {
                        let l = /*#__PURE__*/ r.renderer.apply(this, o);
                        return l === false && (l = /*#__PURE__*/ i.apply(this, o)), l;
                    } : e.renderers[r.name] = r.renderer;
                }
                if ("tokenizer" in r) {
                    if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
                    let i = e[r.level];
                    i ? i.unshift(r.tokenizer) : e[r.level] = [
                        r.tokenizer
                    ], r.start && (r.level === "block" ? e.startBlock ? e.startBlock.push(r.start) : e.startBlock = [
                        r.start
                    ] : r.level === "inline" && (e.startInline ? e.startInline.push(r.start) : e.startInline = [
                        r.start
                    ]));
                }
                "childTokens" in r && r.childTokens && (e.childTokens[r.name] = r.childTokens);
            }), s.extensions = e), n.renderer) {
                let r = this.defaults.renderer || new K(this.defaults);
                for(let i in n.renderer){
                    if (!(i in r)) throw new Error(`renderer '${i}' does not exist`);
                    if ([
                        "options",
                        "parser"
                    ].includes(i)) continue;
                    let o = i, l = n.renderer[o], c = r[o];
                    r[o] = (...p)=>{
                        let u = /*#__PURE__*/ l.apply(r, p);
                        return u === false && (u = /*#__PURE__*/ c.apply(r, p)), u || "";
                    };
                }
                s.renderer = r;
            }
            if (n.tokenizer) {
                let r = this.defaults.tokenizer || new J(this.defaults);
                for(let i in n.tokenizer){
                    if (!(i in r)) throw new Error(`tokenizer '${i}' does not exist`);
                    if ([
                        "options",
                        "rules",
                        "lexer"
                    ].includes(i)) continue;
                    let o = i, l = n.tokenizer[o], c = r[o];
                    r[o] = (...p)=>{
                        let u = /*#__PURE__*/ l.apply(r, p);
                        return u === false && (u = /*#__PURE__*/ c.apply(r, p)), u;
                    };
                }
                s.tokenizer = r;
            }
            if (n.hooks) {
                let r = this.defaults.hooks || new U();
                for(let i in n.hooks){
                    if (!(i in r)) throw new Error(`hook '${i}' does not exist`);
                    if ([
                        "options",
                        "block"
                    ].includes(i)) continue;
                    let o = i, l = n.hooks[o], c = r[o];
                    U.passThroughHooks.has(i) ? r[o] = (p)=>{
                        if (this.defaults.async) return Promise.resolve(/*#__PURE__*/ l.call(r, p)).then((f)=>c.call(r, f));
                        let u = /*#__PURE__*/ l.call(r, p);
                        return c.call(r, u);
                    } : r[o] = (...p)=>{
                        let u = /*#__PURE__*/ l.apply(r, p);
                        return u === false && (u = /*#__PURE__*/ c.apply(r, p)), u;
                    };
                }
                s.hooks = r;
            }
            if (n.walkTokens) {
                let r = this.defaults.walkTokens, i = n.walkTokens;
                s.walkTokens = function(o) {
                    let l = [];
                    return l.push(/*#__PURE__*/ i.call(this, o)), r && (l = /*#__PURE__*/ l.concat(/*#__PURE__*/ r.call(this, o))), l;
                };
            }
            this.defaults = {
                ...this.defaults,
                ...s
            };
        }), this;
    }
    setOptions(t) {
        return this.defaults = {
            ...this.defaults,
            ...t
        }, this;
    }
    lexer(t, e) {
        return R.lex(t, e ?? this.defaults);
    }
    parser(t, e) {
        return F.parse(t, e ?? this.defaults);
    }
    parseMarkdown(t) {
        return (e, n)=>{
            let s = {
                ...n
            }, r = {
                ...this.defaults,
                ...s
            }, i = /*#__PURE__*/ this.onError(!!r.silent, !!r.async);
            if (this.defaults.async === true && s.async === false) return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
            if (typeof e > "u" || e === null) return i(new Error("marked(): input parameter is undefined or null"));
            if (typeof e != "string") return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
            r.hooks && (r.hooks.options = r, r.hooks.block = t);
            let o = r.hooks ? r.hooks.provideLexer() : t ? R.lex : R.lexInline, l = r.hooks ? r.hooks.provideParser() : t ? F.parse : F.parseInline;
            if (r.async) return Promise.resolve(r.hooks ? r.hooks.preprocess(e) : e).then((c)=>o(c, r)).then((c)=>r.hooks ? r.hooks.processAllTokens(c) : c).then((c)=>r.walkTokens ? Promise.all(/*#__PURE__*/ this.walkTokens(c, r.walkTokens)).then(()=>c) : c).then((c)=>l(c, r)).then((c)=>r.hooks ? r.hooks.postprocess(c) : c).catch(i);
            try {
                r.hooks && (e = /*#__PURE__*/ r.hooks.preprocess(e));
                let c = /*#__PURE__*/ o(e, r);
                r.hooks && (c = /*#__PURE__*/ r.hooks.processAllTokens(c)), r.walkTokens && this.walkTokens(c, r.walkTokens);
                let p = /*#__PURE__*/ l(c, r);
                return r.hooks && (p = /*#__PURE__*/ r.hooks.postprocess(p)), p;
            } catch (c) {
                return i(c);
            }
        };
    }
    onError(t, e) {
        return (n)=>{
            if (n.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
                let s = "<p>An error occurred:</p><pre>" + $(n.message + "", true) + "</pre>";
                return e ? Promise.resolve(s) : s;
            }
            if (e) return Promise.reject(n);
            throw n;
        };
    }
}, L = new Sn();
function k(t, e) {
    return L.parse(t, e);
}
m$1(k, "k");
k.options = k.setOptions = function(t) {
    return L.setOptions(t), k.defaults = L.defaults, et(k.defaults), k;
};
k.getDefaults = ge;
k.defaults = M;
k.use = function(...t) {
    return L.use(...t), k.defaults = L.defaults, et(k.defaults), k;
};
k.walkTokens = function(t, e) {
    return L.walkTokens(t, e);
};
k.parseInline = L.parseInline;
k.Parser = F;
k.parser = F.parse;
k.Renderer = K;
k.TextRenderer = Ce;
k.Lexer = R;
k.lexer = R.lex;
k.Tokenizer = J;
k.Hooks = U;
k.parse = k;
k.options;
k.setOptions;
k.use;
k.walkTokens;
k.parseInline;
F.parse;
R.lex;
function Tn(t, { markdownAutoWrap: e }) {
    let s = /*#__PURE__*/ t.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`), r = /*#__PURE__*/ Ue(s);
    return e === false ? r.replace(/ /g, "&nbsp;") : r;
}
m$1(Tn, "preprocessMarkdown");
function ut(t, e = {}) {
    let n = /*#__PURE__*/ Tn(t, e), s = /*#__PURE__*/ k.lexer(n), r = [
        []
    ], i = 0;
    function o(l, c = "normal") {
        l.type === "text" ? l.text.split(`
`).forEach((u, f)=>{
            f !== 0 && (i++, r.push([])), u.split(" ").forEach((h)=>{
                h = /*#__PURE__*/ h.replace(/&#39;/g, "'"), h && r[i].push({
                    content: h,
                    type: c
                });
            });
        }) : l.type === "strong" || l.type === "em" ? l.tokens.forEach((p)=>{
            o(p, l.type);
        }) : l.type === "html" && r[i].push({
            content: l.text,
            type: "normal"
        });
    }
    return m$1(o, "processNode"), s.forEach((l)=>{
        l.type === "paragraph" ? l.tokens?.forEach((c)=>{
            o(c);
        }) : l.type === "html" && r[i].push({
            content: l.text,
            type: "normal"
        });
    }), r;
}
m$1(ut, "markdownToLines");
function ht(t, { markdownAutoWrap: e } = {}) {
    let n = /*#__PURE__*/ k.lexer(t);
    function s(r) {
        return r.type === "text" ? e === false ? r.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : r.text.replace(/\n */g, "<br/>") : r.type === "strong" ? `<strong>${r.tokens?.map(s).join("")}</strong>` : r.type === "em" ? `<em>${r.tokens?.map(s).join("")}</em>` : r.type === "paragraph" ? `<p>${r.tokens?.map(s).join("")}</p>` : r.type === "space" ? "" : r.type === "html" ? `${r.text}` : r.type === "escape" ? r.text : `Unsupported markdown: ${r.type}`;
    }
    return m$1(s, "output"), n.map(s).join("");
}
m$1(ht, "markdownToHTML");
function In(t) {
    return Intl.Segmenter ? [
        .../*#__PURE__*/ new Intl.Segmenter().segment(t)
    ].map((e)=>e.segment) : [
        ...t
    ];
}
m$1(In, "splitTextToChars");
function $n(t, e) {
    let n = /*#__PURE__*/ In(e.content);
    return ft(t, [], n, e.type);
}
m$1($n, "splitWordToFitWidth");
function ft(t, e, n, s) {
    if (n.length === 0) return [
        {
            content: /*#__PURE__*/ e.join(""),
            type: s
        },
        {
            content: "",
            type: s
        }
    ];
    let [r, ...i] = n, o = [
        ...e,
        r
    ];
    return t([
        {
            content: /*#__PURE__*/ o.join(""),
            type: s
        }
    ]) ? ft(t, o, i, s) : (e.length === 0 && r && (e.push(r), n.shift()), [
        {
            content: /*#__PURE__*/ e.join(""),
            type: s
        },
        {
            content: /*#__PURE__*/ n.join(""),
            type: s
        }
    ]);
}
m$1(ft, "splitWordToFitWidthRecursion");
function gt(t, e) {
    if (t.some(({ content: n })=>n.includes(`
`))) throw new Error("splitLineToFitWidth does not support newlines in the line");
    return Se(t, e);
}
m$1(gt, "splitLineToFitWidth");
function Se(t, e, n = [], s = []) {
    if (t.length === 0) return s.length > 0 && n.push(s), n.length > 0 ? n : [];
    let r = "";
    t[0].content === " " && (r = " ", t.shift());
    let i = t.shift() ?? {
        content: " ",
        type: "normal"
    }, o = [
        ...s
    ];
    if (r !== "" && o.push({
        content: r,
        type: "normal"
    }), o.push(i), e(o)) return Se(t, e, n, o);
    if (s.length > 0) n.push(s), t.unshift(i);
    else if (i.content) {
        let [l, c] = $n(e, i);
        n.push([
            l
        ]), c.content && t.unshift(c);
    }
    return Se(t, e, n);
}
m$1(Se, "splitLineToFitWidthRecursion");
function dt(t, e) {
    e && t.attr("style", e);
}
m$1(dt, "applyStyle");
async function Rn(t, e, n, s, r = false) {
    let i = /*#__PURE__*/ t.append("foreignObject");
    i.attr("width", `${10 * n}px`), i.attr("height", `${10 * n}px`);
    let o = /*#__PURE__*/ i.append("xhtml:div"), l = e.label;
    e.label && ih(e.label) && (l = await $f(/*#__PURE__*/ e.label.replace(XC.lineBreakRegex, `
`), /*#__PURE__*/ hh()));
    let c = e.isNode ? "nodeLabel" : "edgeLabel", p = /*#__PURE__*/ o.append("span");
    p.html(l), dt(p, e.labelStyle), p.attr("class", `${c} ${s}`), dt(o, e.labelStyle), o.style("display", "table-cell"), o.style("white-space", "nowrap"), o.style("line-height", "1.5"), o.style("max-width", n + "px"), o.style("text-align", "center"), o.attr("xmlns", "http://www.w3.org/1999/xhtml"), r && o.attr("class", "labelBkg");
    let u = /*#__PURE__*/ o.node().getBoundingClientRect();
    return u.width === n && (o.style("display", "table"), o.style("white-space", "break-spaces"), o.style("width", n + "px"), u = /*#__PURE__*/ o.node().getBoundingClientRect()), i.node();
}
m$1(Rn, "addHtmlSpan");
function Te(t, e, n) {
    return t.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", e * n - 0.1 + "em").attr("dy", n + "em");
}
m$1(Te, "createTspan");
function Fn(t, e, n) {
    let s = /*#__PURE__*/ t.append("text"), r = /*#__PURE__*/ Te(s, 1, e);
    Ie(r, n);
    let i = /*#__PURE__*/ r.node().getComputedTextLength();
    return s.remove(), i;
}
m$1(Fn, "computeWidthOfText");
function ns(t, e, n) {
    let s = /*#__PURE__*/ t.append("text"), r = /*#__PURE__*/ Te(s, 1, e);
    Ie(r, [
        {
            content: n,
            type: "normal"
        }
    ]);
    let i = r.node()?.getBoundingClientRect();
    return i && s.remove(), i;
}
m$1(ns, "computeDimensionOfText");
function vn(t, e, n, s = false) {
    let i = /*#__PURE__*/ e.append("g"), o = /*#__PURE__*/ i.insert("rect").attr("class", "background").attr("style", "stroke: none"), l = /*#__PURE__*/ i.append("text").attr("y", "-10.1"), c = 0;
    for (let p of n){
        let u = /*#__PURE__*/ m$1((h)=>Fn(i, 1.1, h) <= t, "checkWidth"), f = u(p) ? [
            p
        ] : gt(p, u);
        for (let h of f){
            let g = /*#__PURE__*/ Te(l, c, 1.1);
            Ie(g, h), c++;
        }
    }
    if (s) {
        let p = /*#__PURE__*/ l.node().getBBox(), u = 2;
        return o.attr("x", p.x - u).attr("y", p.y - u).attr("width", p.width + 2 * u).attr("height", p.height + 2 * u), i.node();
    } else return l.node();
}
m$1(vn, "createFormattedText");
function Ie(t, e) {
    t.text(""), e.forEach((n, s)=>{
        let r = /*#__PURE__*/ t.append("tspan").attr("font-style", n.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", n.type === "strong" ? "bold" : "normal");
        s === 0 ? r.text(n.content) : r.text(" " + n.content);
    });
}
m$1(Ie, "updateTextContentAndStyles");
async function An(t) {
    let e = [];
    t.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (s, r, i)=>(e.push(/*#__PURE__*/ (async ()=>{
            let o = `${r}:${i}`;
            return await Ve(o) ? await He(o, void 0, {
                class: "label-icon"
            }) : `<i class='${ed(s).replace(":", " ")}'></i>`;
        })()), s));
    let n = await Promise.all(e);
    return t.replace(/(fa[bklrs]?):fa-([\w-]+)/g, ()=>n.shift() ?? "");
}
m$1(An, "replaceIconSubstring");
var rs = /*#__PURE__*/ m$1(async (t, e = "", { style: n = "", isTitle: s = false, classes: r = "", useHtmlLabels: i = true, isNode: o = true, width: l = 200, addSvgBackground: c = false } = {}, p)=>{
    if (tt$1.debug("XYZ createText", e, n, s, r, i, o, "addSvgBackground: ", c), i) {
        let u = /*#__PURE__*/ ht(e, p), f = await An(/*#__PURE__*/ Xe$1(u)), h = /*#__PURE__*/ e.replace(/\\\\/g, "\\"), g = {
            isNode: o,
            label: ih(e) ? h : f,
            labelStyle: /*#__PURE__*/ n.replace("fill:", "color:")
        };
        return await Rn(t, g, l, r, c);
    } else {
        let u = /*#__PURE__*/ e.replace(/<br\s*\/?>/g, "<br/>"), f = /*#__PURE__*/ ut(/*#__PURE__*/ u.replace("<br>", "<br/>"), p), h = /*#__PURE__*/ vn(l, t, f, e ? c : false);
        if (o) {
            /stroke:/.exec(n) && (n = /*#__PURE__*/ n.replace("stroke:", "lineColor:"));
            let g = /*#__PURE__*/ n.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
            kh(h).attr("style", g);
        } else {
            let g = /*#__PURE__*/ n.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
            kh(h).select("rect").attr("style", /*#__PURE__*/ g.replace(/background:/g, "fill:"));
            let d = /*#__PURE__*/ n.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
            kh(h).select("text").attr("style", d);
        }
        return h;
    }
}, "createText");
export { An as A, He as H, Ot as O, Sr as S, Ue as U, ns as n, rs as r };
