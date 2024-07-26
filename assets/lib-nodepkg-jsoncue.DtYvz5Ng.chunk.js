var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var _t, _e, _r, _R_instances, i_fn;
import { s as t, t as e, E as r } from "./lib-nodepkg-codemirror.C1lpJ55M.chunk.js";
import { L as i } from "./webapp-openapi-playground-mod-openapi.Vs3g15KY.chunk.js";
let O = t({ PropertyName: e.propertyName, String: e.string, Bytes: e.string, Number: e.number, "True False": e.bool, ",": e.separator, ":": e.separator, "[ ]": e.squareBracket, "{ }": e.brace }), n = i.deserialize({ version: 14, states: "&`Q}QPOOOOQO'#C`'#C`O!UQPO'#C`O!^QPO'#CcO#ZQPO'#CfOOQO'#Cg'#CgOOQO'#Ch'#ChOOQO'#Ci'#CiOOQO'#Cj'#CjOOQO'#Ck'#CkOOQO'#Cl'#ClOOQO'#Cw'#CwO#bQPO'#C_OOQO'#Cm'#CmQ!aQPOOQOQPOOOOQO,58},58}O#gQPO,58}OOQO,59Q,59QO#rQPO,59QO#zQPO,58yOOQO-E6k-E6kOOQO1G.i1G.iO$RQPO1G.lO$YQPO1G.lOOQO1G.l1G.lO$bQQO'#C`O$vQPO'#CnO#zQPO1G.eO${QQO1G.eOOQO,59Z,59ZOOQO7+$W7+$WO%^QPO7+$WOOQO-E6m-E6mOOQO,59Y,59YOOQO-E6l-E6lO%eQQO7+$POOQO7+$P7+$POOQO<<Gr<<GrP!iQPO'#CoOOQO<<Gk<<Gk", stateData: "&S~OfOSgOSPOS~OUROXSOhPOmTOnUOoVOpWOqWOrXOsYO~OiQO~P]Od]XjSX~OT`OhPOiPO~OUROXSOiVOmTOnUOoVOpWOqWOrXOsYO~OWbO~P!iOjdO~OTfOhPOiPO~OWiOlgO~OijO~P]OWoO~P!iOWoOlpO~Od]Xh]Xi]XjSXt]XT]X~OjrO~OtuOdRihRiiRiTRi~OWvO~P!iOtxOdRqhRqiRqTRq~Otgqpoimrshr~", goto: "#PlPPPmsPP}PP}}}}}}}!W!b!hPPPPPPP!nX]OR^aW[OR^aTkdl_ZOSdglpwQ^OQaRTe^aQldRslQhcRqhQ_OQcSQmdUngpwRtl", nodeNames: "⚠ Comment Document Property PropertyName } { Object ] [ Array Null Number String Bytes True False", maxTerm: 36, nodeProps: [["isolate", 1, ""], ["openedBy", 5, "{", 8, "["], ["closedBy", 6, "}", 9, "]"]], propSources: [O], skippedNodes: [0, 1], repeatNodeCount: 3, tokenData: "C|~RiXY!pYZ!{]^!{pq!prs#Stu)`wx)t|}9w!O!P:O!P!Q;[!Q![;|![!]<b!c!})`!}#O<g#P#Q<l#R#S)`#T#Y)`#Y#Z<q#Z#b)`#b#c?b#c#h)`#h#iAj#i#o)`#o#pCr#q#rCw~!uQf~XY!ppq!p~#SOtQg~~#VWpq#oqr#ors&Xs#O#o#O#P$a#P;'S#o;'S;=`&R<%lO#o~#rWpq#oqr#ors$[s#O#o#O#P$a#P;'S#o;'S;=`&R<%lO#o~$aOi~~$dXrs#o!P!Q#o#O#P#o#U#V#o#Y#Z#o#b#c#o#f#g#o#h#i#o#i#j%P~%SR!Q![%]!c!i%]#T#Z%]~%`R!Q![%i!c!i%i#T#Z%i~%lR!Q![%u!c!i%u#T#Z%u~%xR!Q![#o!c!i#o#T#Z#o~&UP;=`<%l#o~&^Pi~rs&a~&dZXY&aYZ&a]^&apq&aqr&ars'Vs#O&a#O#P'h#P;'S&a;'S;=`)Y<%lO&a~'YPrs']~'`Prs'c~'hOo~~'kXrs&a!P!Q&a#O#P&a#U#V&a#Y#Z&a#b#c&a#f#g&a#h#i&a#i#j(W~(ZR!Q![(d!c!i(d#T#Z(d~(gR!Q![(p!c!i(p#T#Z(p~(sR!Q![(|!c!i(|#T#Z(|~)PR!Q![&a!c!i&a#T#Z&a~)]P;=`<%l&a~)eTh~tu)`!Q![)`!c!})`#R#S)`#T#o)`~)wXpq*dqr*dsw*dwx-lx#O*d#O#P+t#P;'S*d;'S;=`-f<%lO*d~*gXpq*dqr*dsw*dwx+Sx#O*d#O#P+t#P;'S*d;'S;=`-f<%lO*d~+XXp~pq*dqr*dsw*dwx+Sx#O*d#O#P+t#P;'S*d;'S;=`-f<%lO*d~+wXrs*d!P!Q*d#O#P*d#U#V*d#Y#Z*d#b#c*d#f#g*d#h#i*d#i#j,d~,gR!Q![,p!c!i,p#T#Z,p~,sR!Q![,|!c!i,|#T#Z,|~-PR!Q![-Y!c!i-Y#T#Z-Y~-]R!Q![*d!c!i*d#T#Z*d~-iP;=`<%l*d~-qXp~pq*dqr*dsw*dwx.^x#O*d#O#P+t#P;'S*d;'S;=`-f<%lO*d~.c[p~XY/XYZ/X]^/Xpq4eqr4esw4ewx5^x#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~/[[XY/XYZ/X]^/Xpq/Xqr/Xsw/Xwx0Qx#O/X#O#P2m#P;'S/X;'S;=`4_<%lO/X~0T[XY/XYZ/X]^/Xpq/Xqr/Xsw/Xwx0yx#O/X#O#P2m#P;'S/X;'S;=`4_<%lO/X~0|[XY/XYZ/X]^/Xpq/Xqr/Xsw/Xwx1rx#O/X#O#P2m#P;'S/X;'S;=`4_<%lO/X~1w[q~XY/XYZ/X]^/Xpq/Xqr/Xsw/Xwx1rx#O/X#O#P2m#P;'S/X;'S;=`4_<%lO/X~2pXrs/X!P!Q/X#O#P/X#U#V/X#Y#Z/X#b#c/X#f#g/X#h#i/X#i#j3]~3`R!Q![3i!c!i3i#T#Z3i~3lR!Q![3u!c!i3u#T#Z3u~3xR!Q![4R!c!i4R#T#Z4R~4UR!Q![/X!c!i/X#T#Z/X~4bP;=`<%l/X~4h[XY/XYZ/X]^/Xpq4eqr4esw4ewx5^x#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~5c[p~XY/XYZ/X]^/Xpq4eqr4esw4ewx6Xx#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~6^[p~XY/XYZ/X]^/Xpq4eqr4esw4ewx7Sx#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~7Z[q~p~XY/XYZ/X]^/Xpq4eqr4esw4ewx7Sx#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~8SXrs4e!P!Q4e#O#P4e#U#V4e#Y#Z4e#b#c4e#f#g4e#h#i4e#i#j8o~8rR!Q![8{!c!i8{#T#Z8{~9OR!Q![9X!c!i9X#T#Z9X~9[R!Q![9e!c!i9e#T#Z9e~9hR!Q![4e!c!i4e#T#Z4e~9tP;=`<%l4eR:OOlPtQ~:RP!Q![:U~:ZSn~!Q![:U!g!h:g#R#S:U#X#Y:g~:jS{|:v}!O:v!Q![;P#R#S;P~:yQ!Q![;P#R#S;P~;UQn~!Q![;P#R#S;P~;_P!P!Q;b~;gTP~OY;bZ];b^;'S;b;'S;=`;v<%lO;b~;yP;=`<%l;b~<RTn~!O!P:U!Q![;|!g!h:g#R#S;|#X#Y:g~<gOj~~<lOX~~<qOW~~<vUh~tu)`!Q![)`!c!})`#R#S)`#T#U=Y#U#o)`~=_Vh~tu)`!Q![)`!c!})`#R#S)`#T#`)`#`#a=t#a#o)`~=yVh~tu)`!Q![)`!c!})`#R#S)`#T#g)`#g#h>`#h#o)`~>eVh~tu)`!Q![)`!c!})`#R#S)`#T#X)`#X#Y>z#Y#o)`~?RTs~h~tu)`!Q![)`!c!})`#R#S)`#T#o)`~?gVh~tu)`!Q![)`!c!})`#R#S)`#T#i)`#i#j?|#j#o)`~@RVh~tu)`!Q![)`!c!})`#R#S)`#T#`)`#`#a@h#a#o)`~@mVh~tu)`!Q![)`!c!})`#R#S)`#T#`)`#`#aAS#a#o)`~AZTm~h~tu)`!Q![)`!c!})`#R#S)`#T#o)`~AoVh~tu)`!Q![)`!c!})`#R#S)`#T#f)`#f#gBU#g#o)`~BZVh~tu)`!Q![)`!c!})`#R#S)`#T#i)`#i#jBp#j#o)`~BuVh~tu)`!Q![)`!c!})`#R#S)`#T#X)`#X#YC[#Y#o)`~CcTr~h~tu)`!Q![)`!c!})`#R#S)`#T#o)`~CwOU~~C|OT~", tokenizers: [0, 1], topRules: { Document: [0, 2] }, tokenPrec: 222 });
const _s = class _s {
  constructor(t2, e2) {
    this.tree = t2, this.code = e2;
  }
  sliceDoc(t2, e2) {
    return this.code.slice(t2, e2);
  }
  get topNode() {
    return this.tree.topNode;
  }
};
__publicField(_s, "parse", (t2) => new _s(n.parse(t2), t2));
let s = _s;
class o extends Error {
  constructor(t2, e2, i2 = "") {
    let O2 = r.create({ doc: t2.sliceDoc(0) }), n2 = O2.doc.lineAt(e2.from), s2 = `${n2.number} | `;
    super(`SyntaxError${i2 ? `: ${i2}` : ""}
${s2}${O2.sliceDoc(n2.from, n2.to)}        
${Array(s2.length + (e2.from - n2.from - 1)).fill(" ").join("")} ^ at position ${e2.from}        
`), this.source = t2, this.node = e2, this.reason = i2;
  }
}
let l = Array.isArray;
function a(t2) {
  return !!t2 && t2.constructor === Object;
}
let c = (t2) => "string" == typeof t2 || t2 instanceof String;
function p(t2) {
  return void 0 === t2;
}
class u {
  constructor() {
    __privateAdd(this, _t, []);
    __privateAdd(this, _e, 0);
  }
  get written() {
    return __privateGet(this, _t).length > 0;
  }
  withIdent(t2) {
    __privateWrapper(this, _e)._++, t2(), __privateWrapper(this, _e)._--;
  }
  tab() {
    this.space(__privateGet(this, _e), "  ");
  }
  space(t2) {
    let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
    0 != t2 && this.write(Array(t2).fill(e2).join(""));
  }
  break() {
    this.write("\n");
  }
  write(t2) {
    __privateGet(this, _t).push(t2);
  }
  toString() {
    return __privateGet(this, _t).join("");
  }
}
_t = new WeakMap();
_e = new WeakMap();
function* h(t2) {
  for (let e2 = t2.firstChild; null != e2; e2 = e2.nextSibling) yield e2;
}
let P = function(t2, e2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  return d(t2, e2, [], r2);
}, d = (t2, e2, r2, i2) => {
  if (!e2) return null;
  switch (i2.onValueNode && i2.onValueNode(e2, r2), e2.type.id) {
    case 2:
      let O2;
      for (let n3 of h(e2)) if (!n3.type.is(1)) {
        if (n3.type.is(3)) {
          O2 || (O2 = {});
          let [e3, s3] = S(t2, n3), o2 = w(t2, e3);
          g(O2, o2, d(t2, s3, [...r2, ...o2], i2));
        } else {
          if (O2) {
            if (i2.invalidValueAsUndefined) return;
            throw new o(t2, n3, "Property / Value could not in same scope");
          }
          return d(t2, n3, r2, i2);
        }
      }
      return O2;
    case 7:
      let n2 = {};
      for (let O3 of h(e2)) if (!O3.type.is(1) && O3.type.is(3)) {
        let [e3, s3] = S(t2, O3), o2 = w(t2, e3);
        g(n2, o2, d(t2, s3, [...r2, ...o2], i2));
      }
      return n2;
    case 10:
      let s2 = [];
      for (let O3 of h(e2)) {
        if ("[" == O3.name || "]" == O3.name) continue;
        let e3 = d(t2, O3, [...r2, s2.length], i2);
        s2.push(e3);
      }
      return s2;
    case 14:
      if (e2.firstChild) throw new o(t2, e2, "invalid bytes");
      let l2 = t2.sliceDoc(e2.from, e2.to);
      if (l2.startsWith("'''")) return Q(X(l2.substring(3, l2.length - 3)));
      return Q(JSON.parse(l2.replaceAll("'", '"')));
    case 13:
      if (e2.firstChild) {
        if (i2.invalidValueAsUndefined) return;
        throw new o(t2, e2, "invalid string");
      }
      let a2 = t2.sliceDoc(e2.from, e2.to);
      if (a2.startsWith('"""')) return X(a2.substring(3, a2.length - 3));
      return JSON.parse(a2);
    case 12:
      if (e2.firstChild) {
        if (i2.invalidValueAsUndefined) return;
        throw new o(t2, e2, "invalid number");
      }
      return parseFloat(t2.sliceDoc(e2.from, e2.to));
    case 15:
      return true;
    case 16:
      return false;
    case 11:
      return null;
    default:
      if (i2.invalidValueAsUndefined) return;
      throw new o(t2, e2);
  }
};
function Q(t2) {
  return new f(new TextEncoder().encode(t2));
}
class f extends Uint8Array {
  toJSON() {
    return btoa(new TextDecoder().decode(this));
  }
}
function X(t2) {
  let e2 = t2.match(/^(([\n\r]+)[\t ]+)/);
  return e2 ? t2.replaceAll(e2[1], e2[2]).trimStart() : t2;
}
function S(t2, e2) {
  let r2;
  let i2 = [];
  for (let O2 of h(e2)) {
    if (O2.type.is(4)) {
      i2.push(O2);
      continue;
    }
    if (!p(r2)) throw new o(t2, O2, "Property must only one value");
    r2 = O2;
  }
  if (0 == i2.length) throw new o(t2, e2, "Property must have at least one PropertyName");
  if (p(r2)) throw new o(t2, e2, "Property must at least one value");
  return [i2, r2];
}
function w(t2, e2) {
  return e2.map((e3) => function(t3) {
    try {
      return JSON.parse(t3);
    } catch (e4) {
      return t3;
    }
  }(t2.sliceDoc(e3.from, e3.to)));
}
function g(t2, e2, r2) {
  if (0 === e2.length) return;
  if (1 === e2.length) {
    t2[e2[0]] = r2;
    return;
  }
  let [i2, ...O2] = e2;
  if (p(t2[i2])) t2[i2] = {};
  else if (!a(t2[i2])) throw Error(`o[${i2}] already have non-object value`);
  return g(t2[i2], O2, r2);
}
class R {
  constructor() {
    __privateAdd(this, _R_instances);
    __privateAdd(this, _r, new u());
  }
  toString() {
    return __privateGet(this, _r).toString();
  }
  print(t2) {
    if (l(t2)) {
      if (0 == t2.length) {
        __privateGet(this, _r).write("[]");
        return;
      }
      __privateGet(this, _r).write("["), __privateGet(this, _r).break(), __privateGet(this, _r).withIdent(() => {
        for (let e2 of t2) T(e2) && (__privateGet(this, _r).tab(), this.print(e2), __privateGet(this, _r).write(","), __privateGet(this, _r).break());
      }), __privateGet(this, _r).tab(), __privateGet(this, _r).write("]");
      return;
    }
    if (a(t2)) {
      let e2 = Object.entries(t2).filter((t3) => {
        let [e3, r3] = t3;
        return T(r3);
      });
      if (0 == e2.length) {
        __privateGet(this, _r).write("{}");
        return;
      }
      if (1 == e2.length) {
        let [t3, r3] = e2[0], i2 = m(t3);
        __privateGet(this, _r).write(i2), __privateGet(this, _r).write(": "), this.print(r3);
        return;
      }
      let r2 = () => {
        let t3 = {}, r3 = 0;
        for (let [i2, O2] of e2) {
          let e3 = `${m(i2)}: `, n2 = O2;
          for (; a(n2) && 1 == Object.keys(n2).length; ) {
            let [t4, r4] = Object.entries(n2)[0];
            e3 += `${m(t4)}: `, n2 = r4;
          }
          t3[e3] = n2;
          let s2 = e3.length;
          s2 > r3 && (r3 = s2);
        }
        for (let [e3, i2] of Object.entries(t3)) __privateGet(this, _r).tab(), __privateGet(this, _r).write(e3), __privateGet(this, _r).space(r3 - e3.length), this.print(i2), __privateGet(this, _r).break();
      };
      if (!__privateGet(this, _r).written) {
        r2();
        return;
      }
      __privateGet(this, _r).write("{"), __privateGet(this, _r).break(), __privateGet(this, _r).withIdent(() => {
        r2();
      }), __privateGet(this, _r).tab(), __privateGet(this, _r).write("}");
      return;
    }
    if (c(t2)) {
      if (/[\r\n]/.test(t2)) {
        __privateMethod(this, _R_instances, i_fn).call(this, t2, '"""');
        return;
      }
      __privateGet(this, _r).write(`"${t2.split("").map((t3) => '"' == t3 ? '\\"' : t3).join("")}"`);
      return;
    }
    __privateGet(this, _r).write(JSON.stringify(t2));
  }
}
_r = new WeakMap();
_R_instances = new WeakSet();
i_fn = function(t2, e2) {
  __privateGet(this, _r).write(e2), __privateGet(this, _r).break(), __privateGet(this, _r).withIdent(() => {
    for (let e3 of function* (t3) {
      let e4 = 0;
      for (let r2 = 0; r2 < t3.length; r2++) {
        let i2 = t3.charAt(r2);
        if ("\r\n".includes(i2)) {
          if (0 == r2) {
            yield "", e4 = r2 + 1;
            continue;
          }
          yield t3.slice(e4, r2), e4 = r2 + 1;
        }
      }
    }(t2)) __privateGet(this, _r).tab(), __privateGet(this, _r).write(e3), __privateGet(this, _r).break();
    __privateGet(this, _r).tab(), __privateGet(this, _r).write(e2);
  });
};
function m(t2) {
  return /^[A-Za-z$_]([$_A-Za-z0-9]+)?$/.test(t2) ? t2 : JSON.stringify(t2);
}
function T(t2) {
  return !(p(t2) || t2 && t2.constructor && t2.call && t2.apply);
}
class b {
  static parse(t2) {
    let e2 = s.parse(t2);
    return P(e2, e2.topNode);
  }
  static stringify(t2) {
    return function(t3) {
      let e2 = new R();
      return e2.print(t3), e2.toString();
    }(t2);
  }
  static asBytes(t2) {
    return Q(t2);
  }
  static stringifyPropertyName(t2) {
    return m(t2);
  }
}
export {
  b as J
};
