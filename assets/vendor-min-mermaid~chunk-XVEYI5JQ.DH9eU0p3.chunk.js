var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a2, __, _b, __2, _c2, __3, _d2, __4, _e2, __5, _f2, __6, _g, __7, _h2, __8, _i2, __9, _j, __10, _k, __11, _l, __12, _m2, __13, _n2, __14, _o2, __15, _p2, __16, _q, __17, _r2, __18, _s2, __19, _t2, __20, _u2, __21, _v, __22, _w, __23, _x, __24, _y, __25, _z, __26, _A, __27, _B, __28, _C, __29, _D, __30, _E, __31, _F, __32, _G, __33, _H, __34, _I, __35, _J, __36, _K, __37, _L, __38, _M, __39, _N, __40, _O, __41, _P, __42, _Q, __43, _R, __44, _S, __45, _T, __46, _U, __47, _V, __48, _W, __49, _X, __50, _Y, __51, _Z, __52, __53, __54, _$, __55, _aa, __56, _ba, __57, _ca, __58, _da, __59, _ea, __60, _fa, __61, _ga, __62, _ha, __63, _ia, __64, _ja, __65, _ka, __66, _la, __67, _ma, __68, _na, __69, _oa, __70, _pa, __71, _qa, __72, _ra, __73, _sa, __74, _ta, __75, _ua, __76, _va, __77, _wa, __78, _xa, __79, _ya, __80, _za, __81, _Aa, __82, _Ba, __83, _Ca, __84, _Da, __85, _Ea, __86, _Fa, __87, _Ga, __88, _Ha, __89, _Ia, __90, _Ja, __91, _Ka, __92, _La, __93, _Ma, __94, _Na, __95, _Oa, __96, _Pa, __97, _Qa, __98, _Ra, __99, _Sa, __100, _Ta, __101, _Ua, __102, _Va, __103, _Wa, __104, _Xa, __105, _Ya, __106, _Za, __107, __a, __108, _$a, __109, _ab, __110, _bb, __111, _cb, __112, _db, __113, _eb, __114, _fb, __115, _gb, __116, _hb, __117, _ib, __118, _jb, __119, _kb, __120, _lb, __121, _mb, __122, _nb, __123, __210, _ob, __124, __211, _pb, __125, __212, _qb, __126, __213, _rb, __127, __214;
import { Z as Zr$1, k as fi$1, m as Tm, p as pm$1, _ as _f$1, o as h, J as Jr, q as kr$1, R as Rn$1, D as Df$1, X as Xr$1, r as De$1, f as fm$1, u as _i$1, K as Ki$1, Q as Qr, z as zi$1, s as sn$1, U as Ui$1, v as mp$1, w as fp$1, y as ym$1, x as s0, A as pr$1, B as cm$1, M as Mi$1, N as Nf$1, C as Qm$1, E as lm$1, c as fn$1, F as Ri$1, G as Ai$1, V as Vi$1 } from "./vendor-min-mermaid~chunk-5ZJXQJOJ.DyIdZ9M4.chunk.js";
import { C as Cr$1 } from "./vendor-min-mermaid~chunk-YPUTD6PB.CV_wMLRV.chunk.js";
import { N, Y as Y$1, b as m$2, T } from "./vendor-min-mermaid~chunk-6BY5RJGC.C-4BwBYe.chunk.js";
import { o, m as m$1, p, q as q$1, n } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var wl = /* @__PURE__ */ n((_l2) => {
  Object.defineProperty(_l2, "__esModule", {
    value: true
  });
  var Sl;
  function Cl() {
    if (Sl === void 0) throw new Error("No runtime abstraction layer installed");
    return Sl;
  }
  m$1(Cl, "RAL");
  (function(r) {
    function e(t) {
      if (t === void 0) throw new Error("No runtime abstraction layer provided");
      Sl = t;
    }
    m$1(e, "install"), r.install = e;
  })(Cl);
  _l2.default = Cl;
});
var od = /* @__PURE__ */ n((we) => {
  Object.defineProperty(we, "__esModule", {
    value: true
  });
  we.stringArray = we.array = we.func = we.error = we.number = we.string = we.boolean = void 0;
  function Tm2(r) {
    return r === true || r === false;
  }
  m$1(Tm2, "boolean");
  we.boolean = Tm2;
  function sd(r) {
    return typeof r == "string" || r instanceof String;
  }
  m$1(sd, "string");
  we.string = sd;
  function xm(r) {
    return typeof r == "number" || r instanceof Number;
  }
  m$1(xm, "number");
  we.number = xm;
  function Rm(r) {
    return r instanceof Error;
  }
  m$1(Rm, "error");
  we.error = Rm;
  function Em(r) {
    return typeof r == "function";
  }
  m$1(Em, "func");
  we.func = Em;
  function ad(r) {
    return Array.isArray(r);
  }
  m$1(ad, "array");
  we.array = ad;
  function Am(r) {
    return ad(r) && r.every((e) => sd(e));
  }
  m$1(Am, "stringArray");
  we.stringArray = Am;
});
var Ol = /* @__PURE__ */ n((Jr2) => {
  var _a3, __128, _b2, __129;
  Object.defineProperty(Jr2, "__esModule", {
    value: true
  });
  Jr2.Emitter = Jr2.Event = void 0;
  var vm = /* @__PURE__ */ wl(), ld;
  (function(r) {
    let e = {
      dispose() {
      }
    };
    r.None = function() {
      return e;
    };
  })(ld || (Jr2.Event = ld = {}));
  var Ll = (_a3 = class {
    add(e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n2 = arguments.length > 2 ? arguments[2] : void 0;
      this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(e), this._contexts.push(t), Array.isArray(n2) && n2.push({
        dispose: /* @__PURE__ */ m$1(() => this.remove(e, t), "dispose")
      });
    }
    remove(e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      if (!this._callbacks) return;
      let n2 = false;
      for (let i = 0, s = this._callbacks.length; i < s; i++) if (this._callbacks[i] === e) if (this._contexts[i] === t) {
        this._callbacks.splice(i, 1), this._contexts.splice(i, 1);
        return;
      } else n2 = true;
      if (n2) throw new Error("When adding a listener with a context, you should remove it with the same context");
    }
    invoke() {
      for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
        e[_key] = arguments[_key];
      }
      if (!this._callbacks) return [];
      let t = [], n2 = /* @__PURE__ */ this._callbacks.slice(0), i = /* @__PURE__ */ this._contexts.slice(0);
      for (let s = 0, o2 = n2.length; s < o2; s++) try {
        t.push(/* @__PURE__ */ n2[s].apply(i[s], e));
      } catch (l) {
        (0, vm.default)().console.error(l);
      }
      return t;
    }
    isEmpty() {
      return !this._callbacks || this._callbacks.length === 0;
    }
    dispose() {
      this._callbacks = void 0, this._contexts = void 0;
    }
  }, __128 = new WeakMap(), __privateAdd(_a3, __128, m$1(_a3, "CallbackList")), _a3), Ds = (_b2 = class {
    constructor(e) {
      this._options = e;
    }
    get event() {
      return this._event || (this._event = (e, t, n2) => {
        this._callbacks || (this._callbacks = new Ll()), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(e, t);
        let i = {
          dispose: /* @__PURE__ */ m$1(() => {
            this._callbacks && (this._callbacks.remove(e, t), i.dispose = _b2._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
          }, "dispose")
        };
        return Array.isArray(n2) && n2.push(i), i;
      }), this._event;
    }
    fire(e) {
      this._callbacks && this._callbacks.invoke.call(this._callbacks, e);
    }
    dispose() {
      this._callbacks && (this._callbacks.dispose(), this._callbacks = void 0);
    }
  }, __129 = new WeakMap(), __privateAdd(_b2, __129, m$1(_b2, "Emitter")), _b2);
  Jr2.Emitter = Ds;
  Ds._noop = function() {
  };
});
var cd = /* @__PURE__ */ n((Qr2) => {
  var _a3, __128, _b2, __129;
  Object.defineProperty(Qr2, "__esModule", {
    value: true
  });
  Qr2.CancellationTokenSource = Qr2.CancellationToken = void 0;
  var km = /* @__PURE__ */ wl(), Im = /* @__PURE__ */ od(), $l = /* @__PURE__ */ Ol(), Fs;
  (function(r) {
    r.None = /* @__PURE__ */ Object.freeze({
      isCancellationRequested: false,
      onCancellationRequested: $l.Event.None
    }), r.Cancelled = /* @__PURE__ */ Object.freeze({
      isCancellationRequested: true,
      onCancellationRequested: $l.Event.None
    });
    function e(t) {
      let n2 = t;
      return n2 && (n2 === r.None || n2 === r.Cancelled || Im.boolean(n2.isCancellationRequested) && !!n2.onCancellationRequested);
    }
    m$1(e, "is"), r.is = e;
  })(Fs || (Qr2.CancellationToken = Fs = {}));
  var Nm = /* @__PURE__ */ Object.freeze(function(r, e) {
    let t = /* @__PURE__ */ (0, km.default)().timer.setTimeout(/* @__PURE__ */ r.bind(e), 0);
    return {
      dispose() {
        t.dispose();
      }
    };
  }), Us = (_a3 = class {
    constructor() {
      this._isCancelled = false;
    }
    cancel() {
      this._isCancelled || (this._isCancelled = true, this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      return this._isCancelled ? Nm : (this._emitter || (this._emitter = new $l.Emitter()), this._emitter.event);
    }
    dispose() {
      this._emitter && (this._emitter.dispose(), this._emitter = void 0);
    }
  }, __128 = new WeakMap(), __privateAdd(_a3, __128, m$1(_a3, "MutableToken")), _a3), Pl = (_b2 = class {
    get token() {
      return this._token || (this._token = new Us()), this._token;
    }
    cancel() {
      this._token ? this._token.cancel() : this._token = Fs.Cancelled;
    }
    dispose() {
      this._token ? this._token instanceof Us && this._token.dispose() : this._token = Fs.None;
    }
  }, __129 = new WeakMap(), __privateAdd(_b2, __129, m$1(_b2, "CancellationTokenSource")), _b2);
  Qr2.CancellationTokenSource = Pl;
});
var pe = {};
o(pe, {
  AbstractAstReflection: () => zt,
  AbstractCstNode: () => Kn,
  AbstractLangiumParser: () => Hn,
  AbstractParserErrorMessageProvider: () => Ps,
  AbstractThreadedAsyncParser: () => Hl,
  AstUtils: () => Fi,
  BiMap: () => yr,
  Cancellation: () => w,
  CompositeCstNodeImpl: () => hr,
  ContextCache: () => Tr,
  CstNodeBuilder: () => Vn,
  CstUtils: () => Si,
  DONE_RESULT: () => be,
  DatatypeSymbol: () => $s,
  DefaultAstNodeDescriptionProvider: () => li,
  DefaultAstNodeLocator: () => ui,
  DefaultAsyncParser: () => Ri,
  DefaultCommentProvider: () => xi,
  DefaultConfigurationProvider: () => fi,
  DefaultDocumentBuilder: () => di,
  DefaultDocumentValidator: () => oi,
  DefaultHydrator: () => Ai,
  DefaultIndexManager: () => hi,
  DefaultJsonSerializer: () => ii,
  DefaultLangiumDocumentFactory: () => Xn,
  DefaultLangiumDocuments: () => Yn,
  DefaultLexer: () => mi,
  DefaultLinker: () => Jn,
  DefaultNameProvider: () => Qn,
  DefaultReferenceDescriptionProvider: () => ci,
  DefaultReferences: () => Zn,
  DefaultScopeComputation: () => ei,
  DefaultScopeProvider: () => ni,
  DefaultServiceRegistry: () => si,
  DefaultTokenBuilder: () => mr,
  DefaultValueConverter: () => gr,
  DefaultWorkspaceLock: () => Ei,
  DefaultWorkspaceManager: () => pi,
  Deferred: () => Ue,
  Disposable: () => xr,
  DisposableCache: () => rn,
  DocumentCache: () => Bs,
  DocumentState: () => Y,
  DocumentValidator: () => wt,
  EMPTY_SCOPE: () => Cm,
  EMPTY_STREAM: () => cn,
  EmptyFileSystem: () => Ql,
  EmptyFileSystemProvider: () => qs,
  ErrorWithLocation: () => Jt,
  GrammarAST: () => pn,
  GrammarUtils: () => Vi,
  JSDocDocumentationProvider: () => Ti,
  LangiumCompletionParser: () => qn,
  LangiumParser: () => zn,
  LangiumParserErrorMessageProvider: () => Yr,
  LeafCstNodeImpl: () => dr,
  MapScope: () => ti,
  Module: () => Yl,
  MultiMap: () => dt,
  OperationCancelled: () => ft,
  ParserWorker: () => zl,
  Reduction: () => Ar,
  RegExpUtils: () => Wi,
  RootCstNodeImpl: () => Xr,
  SimpleCache: () => ri,
  StreamImpl: () => He,
  StreamScope: () => tn,
  TextDocument: () => Zr,
  TreeStreamImpl: () => at,
  URI: () => We,
  UriUtils: () => Ge,
  ValidationCategory: () => sn,
  ValidationRegistry: () => ai,
  ValueConverter: () => ut,
  WorkspaceCache: () => nn,
  assertUnreachable: () => bt,
  createCompletionParser: () => Il,
  createDefaultCoreModule: () => ql,
  createDefaultSharedCoreModule: () => Xl,
  createGrammarConfig: () => So,
  createLangiumParser: () => Nl,
  delayNextTick: () => Ml,
  diagnosticData: () => Ws,
  eagerLoad: () => _d,
  getDiagnosticRange: () => xd,
  inject: () => zs,
  interruptAndCheck: () => Te,
  isAstNode: () => ae,
  isAstNodeDescription: () => Qs,
  isAstNodeWithComment: () => Fl,
  isCompositeCstNode: () => Ke,
  isIMultiModeLexerDefinition: () => Gl,
  isJSDoc: () => Vl,
  isLeafCstNode: () => Pt,
  isLinkingError: () => qt,
  isNamed: () => yd,
  isOperationCancelled: () => Gt,
  isReference: () => Ae,
  isRootCstNode: () => ln,
  isTokenTypeArray: () => Rd,
  isTokenTypeDictionary: () => Ul,
  loadGrammarFromJson: () => Bt,
  parseJSDoc: () => jl,
  prepareLangiumParser: () => id,
  setInterruptionPeriod: () => dd,
  startCancelableOperation: () => fd,
  stream: () => K,
  toDiagnosticSeverity: () => js
});
var Si = {};
o(Si, {
  DefaultNameRegexp: () => Ni,
  RangeComparison: () => Rt,
  compareRange: () => cc,
  findCommentNode: () => ra,
  findDeclarationNodeAtOffset: () => Vd,
  findLeafNodeAtOffset: () => na,
  findLeafNodeBeforeOffset: () => uc,
  flattenCst: () => jd,
  getInteriorNodes: () => zd,
  getNextNode: () => Kd,
  getPreviousNode: () => dc,
  getStartlineNode: () => Hd,
  inRange: () => ta,
  isChildNode: () => ea,
  isCommentNode: () => Zs,
  streamCst: () => Xt,
  toDocumentSegment: () => Yt,
  tokenToRange: () => vr
});
function ae(r) {
  return typeof r == "object" && r !== null && typeof r.$type == "string";
}
m$1(ae, "isAstNode");
function Ae(r) {
  return typeof r == "object" && r !== null && typeof r.$refText == "string";
}
m$1(Ae, "isReference");
function Qs(r) {
  return typeof r == "object" && r !== null && typeof r.name == "string" && typeof r.type == "string" && typeof r.path == "string";
}
m$1(Qs, "isAstNodeDescription");
function qt(r) {
  return typeof r == "object" && r !== null && ae(r.container) && Ae(r.reference) && typeof r.message == "string";
}
m$1(qt, "isLinkingError");
var zt = (_a2 = class {
  constructor() {
    this.subtypes = {}, this.allSubtypes = {};
  }
  isInstance(e, t) {
    return ae(e) && this.isSubtype(e.$type, t);
  }
  isSubtype(e, t) {
    if (e === t) return true;
    let n2 = this.subtypes[e];
    n2 || (n2 = this.subtypes[e] = {});
    let i = n2[t];
    if (i !== void 0) return i;
    {
      let s = /* @__PURE__ */ this.computeIsSubtype(e, t);
      return n2[t] = s, s;
    }
  }
  getAllSubTypes(e) {
    let t = this.allSubtypes[e];
    if (t) return t;
    {
      let n2 = /* @__PURE__ */ this.getAllTypes(), i = [];
      for (let s of n2) this.isSubtype(s, e) && i.push(s);
      return this.allSubtypes[e] = i, i;
    }
  }
}, __ = new WeakMap(), __privateAdd(_a2, __, m$1(_a2, "AbstractAstReflection")), _a2);
function Ke(r) {
  return typeof r == "object" && r !== null && Array.isArray(r.content);
}
m$1(Ke, "isCompositeCstNode");
function Pt(r) {
  return typeof r == "object" && r !== null && typeof r.tokenType == "object";
}
m$1(Pt, "isLeafCstNode");
function ln(r) {
  return Ke(r) && typeof r.fullText == "string";
}
m$1(ln, "isRootCstNode");
var He = (_b = class {
  constructor(e, t) {
    this.startFn = e, this.nextFn = t;
  }
  iterator() {
    let e = {
      state: /* @__PURE__ */ this.startFn(),
      next: /* @__PURE__ */ m$1(() => this.nextFn(e.state), "next"),
      [Symbol.iterator]: () => e
    };
    return e;
  }
  [Symbol.iterator]() {
    return this.iterator();
  }
  isEmpty() {
    return !!this.iterator().next().done;
  }
  count() {
    let e = /* @__PURE__ */ this.iterator(), t = 0, n2 = /* @__PURE__ */ e.next();
    for (; !n2.done; ) t++, n2 = /* @__PURE__ */ e.next();
    return t;
  }
  toArray() {
    let e = [], t = /* @__PURE__ */ this.iterator(), n2;
    do
      n2 = /* @__PURE__ */ t.next(), n2.value !== void 0 && e.push(n2.value);
    while (!n2.done);
    return e;
  }
  toSet() {
    return new Set(this);
  }
  toMap(e, t) {
    let n2 = /* @__PURE__ */ this.map((i) => [
      e ? e(i) : i,
      t ? t(i) : i
    ]);
    return new Map(n2);
  }
  toString() {
    return this.join();
  }
  concat(e) {
    let t = /* @__PURE__ */ e[Symbol.iterator]();
    return new _b(() => ({
      first: /* @__PURE__ */ this.startFn(),
      firstDone: false
    }), (n2) => {
      let i;
      if (!n2.firstDone) {
        do
          if (i = /* @__PURE__ */ this.nextFn(n2.first), !i.done) return i;
        while (!i.done);
        n2.firstDone = true;
      }
      do
        if (i = /* @__PURE__ */ t.next(), !i.done) return i;
      while (!i.done);
      return be;
    });
  }
  join() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ",";
    let t = /* @__PURE__ */ this.iterator(), n2 = "", i, s = false;
    do
      i = /* @__PURE__ */ t.next(), i.done || (s && (n2 += e), n2 += /* @__PURE__ */ Wd(i.value)), s = true;
    while (!i.done);
    return n2;
  }
  indexOf(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    let n2 = /* @__PURE__ */ this.iterator(), i = 0, s = /* @__PURE__ */ n2.next();
    for (; !s.done; ) {
      if (i >= t && s.value === e) return i;
      s = /* @__PURE__ */ n2.next(), i++;
    }
    return -1;
  }
  every(e) {
    let t = /* @__PURE__ */ this.iterator(), n2 = /* @__PURE__ */ t.next();
    for (; !n2.done; ) {
      if (!e(n2.value)) return false;
      n2 = /* @__PURE__ */ t.next();
    }
    return true;
  }
  some(e) {
    let t = /* @__PURE__ */ this.iterator(), n2 = /* @__PURE__ */ t.next();
    for (; !n2.done; ) {
      if (e(n2.value)) return true;
      n2 = /* @__PURE__ */ t.next();
    }
    return false;
  }
  forEach(e) {
    let t = /* @__PURE__ */ this.iterator(), n2 = 0, i = /* @__PURE__ */ t.next();
    for (; !i.done; ) e(i.value, n2), i = /* @__PURE__ */ t.next(), n2++;
  }
  map(e) {
    return new _b(this.startFn, (t) => {
      let { done: n2, value: i } = this.nextFn(t);
      return n2 ? be : {
        done: false,
        value: /* @__PURE__ */ e(i)
      };
    });
  }
  filter(e) {
    return new _b(this.startFn, (t) => {
      let n2;
      do
        if (n2 = /* @__PURE__ */ this.nextFn(t), !n2.done && e(n2.value)) return n2;
      while (!n2.done);
      return be;
    });
  }
  nonNullable() {
    return this.filter((e) => e != null);
  }
  reduce(e, t) {
    let n2 = /* @__PURE__ */ this.iterator(), i = t, s = /* @__PURE__ */ n2.next();
    for (; !s.done; ) i === void 0 ? i = s.value : i = /* @__PURE__ */ e(i, s.value), s = /* @__PURE__ */ n2.next();
    return i;
  }
  reduceRight(e, t) {
    return this.recursiveReduce(/* @__PURE__ */ this.iterator(), e, t);
  }
  recursiveReduce(e, t, n2) {
    let i = /* @__PURE__ */ e.next();
    if (i.done) return n2;
    let s = /* @__PURE__ */ this.recursiveReduce(e, t, n2);
    return s === void 0 ? i.value : t(s, i.value);
  }
  find(e) {
    let t = /* @__PURE__ */ this.iterator(), n2 = /* @__PURE__ */ t.next();
    for (; !n2.done; ) {
      if (e(n2.value)) return n2.value;
      n2 = /* @__PURE__ */ t.next();
    }
  }
  findIndex(e) {
    let t = /* @__PURE__ */ this.iterator(), n2 = 0, i = /* @__PURE__ */ t.next();
    for (; !i.done; ) {
      if (e(i.value)) return n2;
      i = /* @__PURE__ */ t.next(), n2++;
    }
    return -1;
  }
  includes(e) {
    let t = /* @__PURE__ */ this.iterator(), n2 = /* @__PURE__ */ t.next();
    for (; !n2.done; ) {
      if (n2.value === e) return true;
      n2 = /* @__PURE__ */ t.next();
    }
    return false;
  }
  flatMap(e) {
    return new _b(() => ({
      this: /* @__PURE__ */ this.startFn()
    }), (t) => {
      do {
        if (t.iterator) {
          let s = /* @__PURE__ */ t.iterator.next();
          if (s.done) t.iterator = void 0;
          else return s;
        }
        let { done: n2, value: i } = this.nextFn(t.this);
        if (!n2) {
          let s = /* @__PURE__ */ e(i);
          if (Ii(s)) t.iterator = /* @__PURE__ */ s[Symbol.iterator]();
          else return {
            done: false,
            value: s
          };
        }
      } while (t.iterator);
      return be;
    });
  }
  flat(e) {
    if (e === void 0 && (e = 1), e <= 0) return this;
    let t = e > 1 ? this.flat(e - 1) : this;
    return new _b(() => ({
      this: /* @__PURE__ */ t.startFn()
    }), (n2) => {
      do {
        if (n2.iterator) {
          let o2 = /* @__PURE__ */ n2.iterator.next();
          if (o2.done) n2.iterator = void 0;
          else return o2;
        }
        let { done: i, value: s } = t.nextFn(n2.this);
        if (!i) if (Ii(s)) n2.iterator = /* @__PURE__ */ s[Symbol.iterator]();
        else return {
          done: false,
          value: s
        };
      } while (n2.iterator);
      return be;
    });
  }
  head() {
    let t = /* @__PURE__ */ this.iterator().next();
    if (!t.done) return t.value;
  }
  tail() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    return new _b(() => {
      let t = /* @__PURE__ */ this.startFn();
      for (let n2 = 0; n2 < e; n2++) if (this.nextFn(t).done) return t;
      return t;
    }, this.nextFn);
  }
  limit(e) {
    return new _b(() => ({
      size: 0,
      state: /* @__PURE__ */ this.startFn()
    }), (t) => (t.size++, t.size > e ? be : this.nextFn(t.state)));
  }
  distinct(e) {
    let t = /* @__PURE__ */ new Set();
    return this.filter((n2) => {
      let i = e ? e(n2) : n2;
      return t.has(i) ? false : (t.add(i), true);
    });
  }
  exclude(e, t) {
    let n2 = /* @__PURE__ */ new Set();
    for (let i of e) {
      let s = t ? t(i) : i;
      n2.add(s);
    }
    return this.filter((i) => {
      let s = t ? t(i) : i;
      return !n2.has(s);
    });
  }
}, __2 = new WeakMap(), __privateAdd(_b, __2, m$1(_b, "StreamImpl")), _b);
function Wd(r) {
  return typeof r == "string" ? r : typeof r > "u" ? "undefined" : typeof r.toString == "function" ? r.toString() : Object.prototype.toString.call(r);
}
m$1(Wd, "toString");
function Ii(r) {
  return !!r && typeof r[Symbol.iterator] == "function";
}
m$1(Ii, "isIterable");
var cn = new He(() => {
}, () => be), be = /* @__PURE__ */ Object.freeze({
  done: true,
  value: void 0
});
function K() {
  for (var _len = arguments.length, r = new Array(_len), _key = 0; _key < _len; _key++) {
    r[_key] = arguments[_key];
  }
  if (r.length === 1) {
    let e = r[0];
    if (e instanceof He) return e;
    if (Ii(e)) return new He(() => e[Symbol.iterator](), (t) => t.next());
    if (typeof e.length == "number") return new He(() => ({
      index: 0
    }), (t) => t.index < e.length ? {
      done: false,
      value: e[t.index++]
    } : be);
  }
  return r.length > 1 ? new He(() => ({
    collIndex: 0,
    arrIndex: 0
  }), (e) => {
    do {
      if (e.iterator) {
        let t = /* @__PURE__ */ e.iterator.next();
        if (!t.done) return t;
        e.iterator = void 0;
      }
      if (e.array) {
        if (e.arrIndex < e.array.length) return {
          done: false,
          value: e.array[e.arrIndex++]
        };
        e.array = void 0, e.arrIndex = 0;
      }
      if (e.collIndex < r.length) {
        let t = r[e.collIndex++];
        Ii(t) ? e.iterator = /* @__PURE__ */ t[Symbol.iterator]() : t && typeof t.length == "number" && (e.array = t);
      }
    } while (e.iterator || e.array || e.collIndex < r.length);
    return be;
  }) : cn;
}
m$1(K, "stream");
var at = (_c2 = class extends He {
  constructor(e, t, n2) {
    super(() => ({
      iterators: (n2 == null ? void 0 : n2.includeRoot) ? [
        /* @__PURE__ */ [
          e
        ][Symbol.iterator]()
      ] : [
        /* @__PURE__ */ t(e)[Symbol.iterator]()
      ],
      pruned: false
    }), (i) => {
      for (i.pruned && (i.iterators.pop(), i.pruned = false); i.iterators.length > 0; ) {
        let o2 = /* @__PURE__ */ i.iterators[i.iterators.length - 1].next();
        if (o2.done) i.iterators.pop();
        else return i.iterators.push(/* @__PURE__ */ t(o2.value)[Symbol.iterator]()), o2;
      }
      return be;
    });
  }
  iterator() {
    let e = {
      state: /* @__PURE__ */ this.startFn(),
      next: /* @__PURE__ */ m$1(() => this.nextFn(e.state), "next"),
      prune: /* @__PURE__ */ m$1(() => {
        e.state.pruned = true;
      }, "prune"),
      [Symbol.iterator]: () => e
    };
    return e;
  }
}, __3 = new WeakMap(), __privateAdd(_c2, __3, m$1(_c2, "TreeStreamImpl")), _c2), Ar;
(function(r) {
  function e(s) {
    return s.reduce((o2, l) => o2 + l, 0);
  }
  m$1(e, "sum"), r.sum = e;
  function t(s) {
    return s.reduce((o2, l) => o2 * l, 0);
  }
  m$1(t, "product"), r.product = t;
  function n2(s) {
    return s.reduce((o2, l) => Math.min(o2, l));
  }
  m$1(n2, "min"), r.min = n2;
  function i(s) {
    return s.reduce((o2, l) => Math.max(o2, l));
  }
  m$1(i, "max"), r.max = i;
})(Ar || (Ar = {}));
function Xt(r) {
  return new at(r, (e) => Ke(e) ? e.content : [], {
    includeRoot: true
  });
}
m$1(Xt, "streamCst");
function jd(r) {
  return Xt(r).filter(Pt);
}
m$1(jd, "flattenCst");
function ea(r, e) {
  for (; r.container; ) if (r = r.container, r === e) return true;
  return false;
}
m$1(ea, "isChildNode");
function vr(r) {
  return {
    start: {
      character: r.startColumn - 1,
      line: r.startLine - 1
    },
    end: {
      character: r.endColumn,
      line: r.endLine - 1
    }
  };
}
m$1(vr, "tokenToRange");
function Yt(r) {
  if (!r) return;
  let { offset: e, end: t, range: n2 } = r;
  return {
    range: n2,
    offset: e,
    end: t,
    length: t - e
  };
}
m$1(Yt, "toDocumentSegment");
var Rt;
(function(r) {
  r[r.Before = 0] = "Before", r[r.After = 1] = "After", r[r.OverlapFront = 2] = "OverlapFront", r[r.OverlapBack = 3] = "OverlapBack", r[r.Inside = 4] = "Inside";
})(Rt || (Rt = {}));
function cc(r, e) {
  if (r.end.line < e.start.line || r.end.line === e.start.line && r.end.character < r.start.character) return Rt.Before;
  if (r.start.line > e.end.line || r.start.line === e.end.line && r.start.character > e.end.character) return Rt.After;
  let t = r.start.line > e.start.line || r.start.line === e.start.line && r.start.character >= e.start.character, n2 = r.end.line < e.end.line || r.end.line === e.end.line && r.end.character <= e.end.character;
  return t && n2 ? Rt.Inside : t ? Rt.OverlapBack : Rt.OverlapFront;
}
m$1(cc, "compareRange");
function ta(r, e) {
  return cc(r, e) > Rt.After;
}
m$1(ta, "inRange");
var Ni = /^[\w\p{L}]$/u;
function Vd(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ni;
  if (r) {
    if (e > 0) {
      let n2 = e - r.offset, i = /* @__PURE__ */ r.text.charAt(n2);
      t.test(i) || e--;
    }
    return na(r, e);
  }
}
m$1(Vd, "findDeclarationNodeAtOffset");
function ra(r, e) {
  if (r) {
    let t = /* @__PURE__ */ dc(r, true);
    if (t && Zs(t, e)) return t;
    if (ln(r)) {
      let n2 = /* @__PURE__ */ r.content.findIndex((i) => !i.hidden);
      for (let i = n2 - 1; i >= 0; i--) {
        let s = r.content[i];
        if (Zs(s, e)) return s;
      }
    }
  }
}
m$1(ra, "findCommentNode");
function Zs(r, e) {
  return Pt(r) && e.includes(r.tokenType.name);
}
m$1(Zs, "isCommentNode");
function na(r, e) {
  if (Pt(r)) return r;
  if (Ke(r)) {
    let t = /* @__PURE__ */ fc(r, e, false);
    if (t) return na(t, e);
  }
}
m$1(na, "findLeafNodeAtOffset");
function uc(r, e) {
  if (Pt(r)) return r;
  if (Ke(r)) {
    let t = /* @__PURE__ */ fc(r, e, true);
    if (t) return uc(t, e);
  }
}
m$1(uc, "findLeafNodeBeforeOffset");
function fc(r, e, t) {
  let n2 = 0, i = r.content.length - 1, s;
  for (; n2 <= i; ) {
    let o2 = /* @__PURE__ */ Math.floor((n2 + i) / 2), l = r.content[o2];
    if (l.offset <= e && l.end > e) return l;
    l.end <= e ? (s = t ? l : void 0, n2 = o2 + 1) : i = o2 - 1;
  }
  return s;
}
m$1(fc, "binarySearch");
function dc(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  for (; r.container; ) {
    let t = r.container, n2 = /* @__PURE__ */ t.content.indexOf(r);
    for (; n2 > 0; ) {
      n2--;
      let i = t.content[n2];
      if (e || !i.hidden) return i;
    }
    r = t;
  }
}
m$1(dc, "getPreviousNode");
function Kd(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  for (; r.container; ) {
    let t = r.container, n2 = /* @__PURE__ */ t.content.indexOf(r), i = t.content.length - 1;
    for (; n2 < i; ) {
      n2++;
      let s = t.content[n2];
      if (e || !s.hidden) return s;
    }
    r = t;
  }
}
m$1(Kd, "getNextNode");
function Hd(r) {
  if (r.range.start.character === 0) return r;
  let e = r.range.start.line, t = r, n2;
  for (; r.container; ) {
    let i = r.container, s = n2 ?? i.content.indexOf(r);
    if (s === 0 ? (r = i, n2 = void 0) : (n2 = s - 1, r = i.content[n2]), r.range.start.line !== e) break;
    t = r;
  }
  return t;
}
m$1(Hd, "getStartlineNode");
function zd(r, e) {
  let t = /* @__PURE__ */ qd(r, e);
  return t ? t.parent.content.slice(t.a + 1, t.b) : [];
}
m$1(zd, "getInteriorNodes");
function qd(r, e) {
  let t = /* @__PURE__ */ lc(r), n2 = /* @__PURE__ */ lc(e), i;
  for (let s = 0; s < t.length && s < n2.length; s++) {
    let o2 = t[s], l = n2[s];
    if (o2.parent === l.parent) i = {
      parent: o2.parent,
      a: o2.index,
      b: l.index
    };
    else break;
  }
  return i;
}
m$1(qd, "getCommonParent");
function lc(r) {
  let e = [];
  for (; r.container; ) {
    let t = r.container, n2 = /* @__PURE__ */ t.content.indexOf(r);
    e.push({
      parent: t,
      index: n2
    }), r = t;
  }
  return e.reverse();
}
m$1(lc, "getParentChain");
var Vi = {};
o(Vi, {
  findAssignment: () => vo,
  findNameAssignment: () => ji,
  findNodeForKeyword: () => Eo,
  findNodeForProperty: () => Rn,
  findNodesForKeyword: () => mh,
  findNodesForKeywordInternal: () => Ao,
  findNodesForProperty: () => xo,
  getActionAtElement: () => Nc,
  getActionType: () => Cc,
  getAllReachableRules: () => xn,
  getCrossReferenceTerminal: () => yo,
  getEntryRule: () => Ac,
  getExplicitRuleType: () => ko,
  getHiddenRules: () => vc,
  getRuleType: () => Io,
  getTypeName: () => ir,
  isArrayCardinality: () => yh,
  isArrayOperator: () => Th,
  isCommentTerminal: () => To,
  isDataType: () => xh,
  isDataTypeRule: () => En,
  isOptionalCardinality: () => gh,
  terminalRegex: () => Sr
});
var Jt = (_d2 = class extends Error {
  constructor(e, t) {
    super(e ? `${t} at ${e.range.start.line}:${e.range.start.character}` : t);
  }
}, __4 = new WeakMap(), __privateAdd(_d2, __4, m$1(_d2, "ErrorWithLocation")), _d2);
function bt(r) {
  throw new Error("Error! The input value was not handled.");
}
m$1(bt, "assertUnreachable");
var pn = {};
o(pn, {
  AbstractElement: () => sa,
  AbstractRule: () => un,
  AbstractType: () => fn,
  Action: () => $a,
  Alternatives: () => Pa,
  ArrayLiteral: () => aa,
  ArrayType: () => oa,
  Assignment: () => ba,
  BooleanLiteral: () => ca,
  CharacterRange: () => Ma,
  Condition: () => Ci,
  Conjunction: () => fa,
  CrossReference: () => Fa,
  Disjunction: () => ha,
  EndOfFile: () => Ua,
  Grammar: () => ma,
  GrammarImport: () => pc,
  Group: () => Ba,
  InferredType: () => ga,
  Interface: () => ya,
  Keyword: () => Wa,
  LangiumGrammarAstReflection: () => kr,
  LangiumGrammarTerminals: () => Xd,
  NamedArgument: () => mc,
  NegatedToken: () => ja,
  Negation: () => Ta,
  NumberLiteral: () => Ra,
  Parameter: () => Ea,
  ParameterReference: () => Aa,
  ParserRule: () => ka,
  ReferenceType: () => Ia,
  RegexToken: () => Ka,
  ReturnType: () => gc,
  RuleCall: () => za,
  SimpleType: () => Ca,
  StringLiteral: () => _a,
  TerminalAlternatives: () => qa,
  TerminalGroup: () => Ya,
  TerminalRule: () => wi,
  TerminalRuleCall: () => Qa,
  Type: () => wa,
  TypeAttribute: () => yc,
  TypeDefinition: () => ia,
  UnionType: () => La,
  UnorderedGroup: () => Za,
  UntilToken: () => eo,
  ValueLiteral: () => _i,
  Wildcard: () => ro,
  isAbstractElement: () => dn,
  isAbstractRule: () => Yd,
  isAbstractType: () => Jd,
  isAction: () => Et,
  isAlternatives: () => Pi,
  isArrayLiteral: () => rh,
  isArrayType: () => la,
  isAssignment: () => tt,
  isBooleanLiteral: () => ua,
  isCharacterRange: () => Da,
  isCondition: () => Qd,
  isConjunction: () => da,
  isCrossReference: () => Qt,
  isDisjunction: () => pa,
  isEndOfFile: () => Ga,
  isFeatureName: () => Zd,
  isGrammar: () => nh,
  isGrammarImport: () => ih,
  isGroup: () => Mt,
  isInferredType: () => Li,
  isInterface: () => Oi,
  isKeyword: () => Je,
  isNamedArgument: () => sh,
  isNegatedToken: () => Va,
  isNegation: () => xa,
  isNumberLiteral: () => ah,
  isParameter: () => oh,
  isParameterReference: () => va,
  isParserRule: () => _e,
  isPrimitiveType: () => hc,
  isReferenceType: () => Na,
  isRegexToken: () => Ha,
  isReturnType: () => Sa,
  isRuleCall: () => rt,
  isSimpleType: () => $i,
  isStringLiteral: () => lh,
  isTerminalAlternatives: () => Xa,
  isTerminalGroup: () => Ja,
  isTerminalRule: () => Ye,
  isTerminalRuleCall: () => bi,
  isType: () => hn,
  isTypeAttribute: () => ch,
  isTypeDefinition: () => eh,
  isUnionType: () => Oa,
  isUnorderedGroup: () => Mi,
  isUntilToken: () => to,
  isValueLiteral: () => th,
  isWildcard: () => no,
  reflection: () => L
});
var Xd = {
  ID: /\^?[_a-zA-Z][\w_]*/,
  STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,
  NUMBER: /NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,
  RegexLiteral: /\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,
  WS: /\s+/,
  ML_COMMENT: /\/\*[\s\S]*?\*\//,
  SL_COMMENT: /\/\/[^\n\r]*/
}, un = "AbstractRule";
function Yd(r) {
  return L.isInstance(r, un);
}
m$1(Yd, "isAbstractRule");
var fn = "AbstractType";
function Jd(r) {
  return L.isInstance(r, fn);
}
m$1(Jd, "isAbstractType");
var Ci = "Condition";
function Qd(r) {
  return L.isInstance(r, Ci);
}
m$1(Qd, "isCondition");
function Zd(r) {
  return hc(r) || r === "current" || r === "entry" || r === "extends" || r === "false" || r === "fragment" || r === "grammar" || r === "hidden" || r === "import" || r === "interface" || r === "returns" || r === "terminal" || r === "true" || r === "type" || r === "infer" || r === "infers" || r === "with" || typeof r == "string" && /\^?[_a-zA-Z][\w_]*/.test(r);
}
m$1(Zd, "isFeatureName");
function hc(r) {
  return r === "string" || r === "number" || r === "boolean" || r === "Date" || r === "bigint";
}
m$1(hc, "isPrimitiveType");
var ia = "TypeDefinition";
function eh(r) {
  return L.isInstance(r, ia);
}
m$1(eh, "isTypeDefinition");
var _i = "ValueLiteral";
function th(r) {
  return L.isInstance(r, _i);
}
m$1(th, "isValueLiteral");
var sa = "AbstractElement";
function dn(r) {
  return L.isInstance(r, sa);
}
m$1(dn, "isAbstractElement");
var aa = "ArrayLiteral";
function rh(r) {
  return L.isInstance(r, aa);
}
m$1(rh, "isArrayLiteral");
var oa = "ArrayType";
function la(r) {
  return L.isInstance(r, oa);
}
m$1(la, "isArrayType");
var ca = "BooleanLiteral";
function ua(r) {
  return L.isInstance(r, ca);
}
m$1(ua, "isBooleanLiteral");
var fa = "Conjunction";
function da(r) {
  return L.isInstance(r, fa);
}
m$1(da, "isConjunction");
var ha = "Disjunction";
function pa(r) {
  return L.isInstance(r, ha);
}
m$1(pa, "isDisjunction");
var ma = "Grammar";
function nh(r) {
  return L.isInstance(r, ma);
}
m$1(nh, "isGrammar");
var pc = "GrammarImport";
function ih(r) {
  return L.isInstance(r, pc);
}
m$1(ih, "isGrammarImport");
var ga = "InferredType";
function Li(r) {
  return L.isInstance(r, ga);
}
m$1(Li, "isInferredType");
var ya = "Interface";
function Oi(r) {
  return L.isInstance(r, ya);
}
m$1(Oi, "isInterface");
var mc = "NamedArgument";
function sh(r) {
  return L.isInstance(r, mc);
}
m$1(sh, "isNamedArgument");
var Ta = "Negation";
function xa(r) {
  return L.isInstance(r, Ta);
}
m$1(xa, "isNegation");
var Ra = "NumberLiteral";
function ah(r) {
  return L.isInstance(r, Ra);
}
m$1(ah, "isNumberLiteral");
var Ea = "Parameter";
function oh(r) {
  return L.isInstance(r, Ea);
}
m$1(oh, "isParameter");
var Aa = "ParameterReference";
function va(r) {
  return L.isInstance(r, Aa);
}
m$1(va, "isParameterReference");
var ka = "ParserRule";
function _e(r) {
  return L.isInstance(r, ka);
}
m$1(_e, "isParserRule");
var Ia = "ReferenceType";
function Na(r) {
  return L.isInstance(r, Ia);
}
m$1(Na, "isReferenceType");
var gc = "ReturnType";
function Sa(r) {
  return L.isInstance(r, gc);
}
m$1(Sa, "isReturnType");
var Ca = "SimpleType";
function $i(r) {
  return L.isInstance(r, Ca);
}
m$1($i, "isSimpleType");
var _a = "StringLiteral";
function lh(r) {
  return L.isInstance(r, _a);
}
m$1(lh, "isStringLiteral");
var wi = "TerminalRule";
function Ye(r) {
  return L.isInstance(r, wi);
}
m$1(Ye, "isTerminalRule");
var wa = "Type";
function hn(r) {
  return L.isInstance(r, wa);
}
m$1(hn, "isType");
var yc = "TypeAttribute";
function ch(r) {
  return L.isInstance(r, yc);
}
m$1(ch, "isTypeAttribute");
var La = "UnionType";
function Oa(r) {
  return L.isInstance(r, La);
}
m$1(Oa, "isUnionType");
var $a = "Action";
function Et(r) {
  return L.isInstance(r, $a);
}
m$1(Et, "isAction");
var Pa = "Alternatives";
function Pi(r) {
  return L.isInstance(r, Pa);
}
m$1(Pi, "isAlternatives");
var ba = "Assignment";
function tt(r) {
  return L.isInstance(r, ba);
}
m$1(tt, "isAssignment");
var Ma = "CharacterRange";
function Da(r) {
  return L.isInstance(r, Ma);
}
m$1(Da, "isCharacterRange");
var Fa = "CrossReference";
function Qt(r) {
  return L.isInstance(r, Fa);
}
m$1(Qt, "isCrossReference");
var Ua = "EndOfFile";
function Ga(r) {
  return L.isInstance(r, Ua);
}
m$1(Ga, "isEndOfFile");
var Ba = "Group";
function Mt(r) {
  return L.isInstance(r, Ba);
}
m$1(Mt, "isGroup");
var Wa = "Keyword";
function Je(r) {
  return L.isInstance(r, Wa);
}
m$1(Je, "isKeyword");
var ja = "NegatedToken";
function Va(r) {
  return L.isInstance(r, ja);
}
m$1(Va, "isNegatedToken");
var Ka = "RegexToken";
function Ha(r) {
  return L.isInstance(r, Ka);
}
m$1(Ha, "isRegexToken");
var za = "RuleCall";
function rt(r) {
  return L.isInstance(r, za);
}
m$1(rt, "isRuleCall");
var qa = "TerminalAlternatives";
function Xa(r) {
  return L.isInstance(r, qa);
}
m$1(Xa, "isTerminalAlternatives");
var Ya = "TerminalGroup";
function Ja(r) {
  return L.isInstance(r, Ya);
}
m$1(Ja, "isTerminalGroup");
var Qa = "TerminalRuleCall";
function bi(r) {
  return L.isInstance(r, Qa);
}
m$1(bi, "isTerminalRuleCall");
var Za = "UnorderedGroup";
function Mi(r) {
  return L.isInstance(r, Za);
}
m$1(Mi, "isUnorderedGroup");
var eo = "UntilToken";
function to(r) {
  return L.isInstance(r, eo);
}
m$1(to, "isUntilToken");
var ro = "Wildcard";
function no(r) {
  return L.isInstance(r, ro);
}
m$1(no, "isWildcard");
var kr = (_e2 = class extends zt {
  getAllTypes() {
    return [
      "AbstractElement",
      "AbstractRule",
      "AbstractType",
      "Action",
      "Alternatives",
      "ArrayLiteral",
      "ArrayType",
      "Assignment",
      "BooleanLiteral",
      "CharacterRange",
      "Condition",
      "Conjunction",
      "CrossReference",
      "Disjunction",
      "EndOfFile",
      "Grammar",
      "GrammarImport",
      "Group",
      "InferredType",
      "Interface",
      "Keyword",
      "NamedArgument",
      "NegatedToken",
      "Negation",
      "NumberLiteral",
      "Parameter",
      "ParameterReference",
      "ParserRule",
      "ReferenceType",
      "RegexToken",
      "ReturnType",
      "RuleCall",
      "SimpleType",
      "StringLiteral",
      "TerminalAlternatives",
      "TerminalGroup",
      "TerminalRule",
      "TerminalRuleCall",
      "Type",
      "TypeAttribute",
      "TypeDefinition",
      "UnionType",
      "UnorderedGroup",
      "UntilToken",
      "ValueLiteral",
      "Wildcard"
    ];
  }
  computeIsSubtype(e, t) {
    switch (e) {
      case $a:
      case Pa:
      case ba:
      case Ma:
      case Fa:
      case Ua:
      case Ba:
      case Wa:
      case ja:
      case Ka:
      case za:
      case qa:
      case Ya:
      case Qa:
      case Za:
      case eo:
      case ro:
        return this.isSubtype(sa, t);
      case aa:
      case Ra:
      case _a:
        return this.isSubtype(_i, t);
      case oa:
      case Ia:
      case Ca:
      case La:
        return this.isSubtype(ia, t);
      case ca:
        return this.isSubtype(Ci, t) || this.isSubtype(_i, t);
      case fa:
      case ha:
      case Ta:
      case Aa:
        return this.isSubtype(Ci, t);
      case ga:
      case ya:
      case wa:
        return this.isSubtype(fn, t);
      case ka:
        return this.isSubtype(un, t) || this.isSubtype(fn, t);
      case wi:
        return this.isSubtype(un, t);
      default:
        return false;
    }
  }
  getReferenceType(e) {
    let t = `${e.container.$type}:${e.property}`;
    switch (t) {
      case "Action:type":
      case "CrossReference:type":
      case "Interface:superTypes":
      case "ParserRule:returnType":
      case "SimpleType:typeRef":
        return fn;
      case "Grammar:hiddenTokens":
      case "ParserRule:hiddenTokens":
      case "RuleCall:rule":
        return un;
      case "Grammar:usedGrammars":
        return ma;
      case "NamedArgument:parameter":
      case "ParameterReference:parameter":
        return Ea;
      case "TerminalRuleCall:rule":
        return wi;
      default:
        throw new Error(`${t} is not a valid reference id.`);
    }
  }
  getTypeMetaData(e) {
    switch (e) {
      case "AbstractElement":
        return {
          name: "AbstractElement",
          properties: [
            {
              name: "cardinality"
            },
            {
              name: "lookahead"
            }
          ]
        };
      case "ArrayLiteral":
        return {
          name: "ArrayLiteral",
          properties: [
            {
              name: "elements",
              defaultValue: []
            }
          ]
        };
      case "ArrayType":
        return {
          name: "ArrayType",
          properties: [
            {
              name: "elementType"
            }
          ]
        };
      case "BooleanLiteral":
        return {
          name: "BooleanLiteral",
          properties: [
            {
              name: "true",
              defaultValue: false
            }
          ]
        };
      case "Conjunction":
        return {
          name: "Conjunction",
          properties: [
            {
              name: "left"
            },
            {
              name: "right"
            }
          ]
        };
      case "Disjunction":
        return {
          name: "Disjunction",
          properties: [
            {
              name: "left"
            },
            {
              name: "right"
            }
          ]
        };
      case "Grammar":
        return {
          name: "Grammar",
          properties: [
            {
              name: "definesHiddenTokens",
              defaultValue: false
            },
            {
              name: "hiddenTokens",
              defaultValue: []
            },
            {
              name: "imports",
              defaultValue: []
            },
            {
              name: "interfaces",
              defaultValue: []
            },
            {
              name: "isDeclared",
              defaultValue: false
            },
            {
              name: "name"
            },
            {
              name: "rules",
              defaultValue: []
            },
            {
              name: "types",
              defaultValue: []
            },
            {
              name: "usedGrammars",
              defaultValue: []
            }
          ]
        };
      case "GrammarImport":
        return {
          name: "GrammarImport",
          properties: [
            {
              name: "path"
            }
          ]
        };
      case "InferredType":
        return {
          name: "InferredType",
          properties: [
            {
              name: "name"
            }
          ]
        };
      case "Interface":
        return {
          name: "Interface",
          properties: [
            {
              name: "attributes",
              defaultValue: []
            },
            {
              name: "name"
            },
            {
              name: "superTypes",
              defaultValue: []
            }
          ]
        };
      case "NamedArgument":
        return {
          name: "NamedArgument",
          properties: [
            {
              name: "calledByName",
              defaultValue: false
            },
            {
              name: "parameter"
            },
            {
              name: "value"
            }
          ]
        };
      case "Negation":
        return {
          name: "Negation",
          properties: [
            {
              name: "value"
            }
          ]
        };
      case "NumberLiteral":
        return {
          name: "NumberLiteral",
          properties: [
            {
              name: "value"
            }
          ]
        };
      case "Parameter":
        return {
          name: "Parameter",
          properties: [
            {
              name: "name"
            }
          ]
        };
      case "ParameterReference":
        return {
          name: "ParameterReference",
          properties: [
            {
              name: "parameter"
            }
          ]
        };
      case "ParserRule":
        return {
          name: "ParserRule",
          properties: [
            {
              name: "dataType"
            },
            {
              name: "definesHiddenTokens",
              defaultValue: false
            },
            {
              name: "definition"
            },
            {
              name: "entry",
              defaultValue: false
            },
            {
              name: "fragment",
              defaultValue: false
            },
            {
              name: "hiddenTokens",
              defaultValue: []
            },
            {
              name: "inferredType"
            },
            {
              name: "name"
            },
            {
              name: "parameters",
              defaultValue: []
            },
            {
              name: "returnType"
            },
            {
              name: "wildcard",
              defaultValue: false
            }
          ]
        };
      case "ReferenceType":
        return {
          name: "ReferenceType",
          properties: [
            {
              name: "referenceType"
            }
          ]
        };
      case "ReturnType":
        return {
          name: "ReturnType",
          properties: [
            {
              name: "name"
            }
          ]
        };
      case "SimpleType":
        return {
          name: "SimpleType",
          properties: [
            {
              name: "primitiveType"
            },
            {
              name: "stringType"
            },
            {
              name: "typeRef"
            }
          ]
        };
      case "StringLiteral":
        return {
          name: "StringLiteral",
          properties: [
            {
              name: "value"
            }
          ]
        };
      case "TerminalRule":
        return {
          name: "TerminalRule",
          properties: [
            {
              name: "definition"
            },
            {
              name: "fragment",
              defaultValue: false
            },
            {
              name: "hidden",
              defaultValue: false
            },
            {
              name: "name"
            },
            {
              name: "type"
            }
          ]
        };
      case "Type":
        return {
          name: "Type",
          properties: [
            {
              name: "name"
            },
            {
              name: "type"
            }
          ]
        };
      case "TypeAttribute":
        return {
          name: "TypeAttribute",
          properties: [
            {
              name: "defaultValue"
            },
            {
              name: "isOptional",
              defaultValue: false
            },
            {
              name: "name"
            },
            {
              name: "type"
            }
          ]
        };
      case "UnionType":
        return {
          name: "UnionType",
          properties: [
            {
              name: "types",
              defaultValue: []
            }
          ]
        };
      case "Action":
        return {
          name: "Action",
          properties: [
            {
              name: "cardinality"
            },
            {
              name: "feature"
            },
            {
              name: "inferredType"
            },
            {
              name: "lookahead"
            },
            {
              name: "operator"
            },
            {
              name: "type"
            }
          ]
        };
      case "Alternatives":
        return {
          name: "Alternatives",
          properties: [
            {
              name: "cardinality"
            },
            {
              name: "elements",
              defaultValue: []
            },
            {
              name: "lookahead"
            }
          ]
        };
      case "Assignment":
        return {
          name: "Assignment",
          properties: [
            {
              name: "cardinality"
            },
            {
              name: "feature"
            },
            {
              name: "lookahead"
            },
            {
              name: "operator"
            },
            {
              name: "terminal"
            }
          ]
        };
      case "CharacterRange":
        return {
          name: "CharacterRange",
          properties: [
            {
              name: "cardinality"
            },
            {
              name: "left"
            },
            {
              name: "lookahead"
            },
            {
              name: "right"
            }
          ]
        };
      case "CrossReference":
        return {
          name: "CrossReference",
          properties: [
            {
              name: "cardinality"
            },
            {
              name: "deprecatedSyntax",
              defaultValue: false
            },
            {
              name: "lookahead"
            },
            {
              name: "terminal"
            },
            {
              name: "type"
            }
          ]
        };
      case "EndOfFile":
        return {
          name: "EndOfFile",
          properties: [
            {
              name: "cardinality"
            },
            {
              name: "lookahead"
            }
          ]
        };
      case "Group":
        return {
          name: "Group",
          properties: [
            {
              name: "cardinality"
            },
            {
              name: "elements",
              defaultValue: []
            },
            {
              name: "guardCondition"
            },
            {
              name: "lookahead"
            }
          ]
        };
      case "Keyword":
        return {
          name: "Keyword",
          properties: [
            {
              name: "cardinality"
            },
            {
              name: "lookahead"
            },
            {
              name: "value"
            }
          ]
        };
      case "NegatedToken":
        return {
          name: "NegatedToken",
          properties: [
            {
              name: "cardinality"
            },
            {
              name: "lookahead"
            },
            {
              name: "terminal"
            }
          ]
        };
      case "RegexToken":
        return {
          name: "RegexToken",
          properties: [
            {
              name: "cardinality"
            },
            {
              name: "lookahead"
            },
            {
              name: "regex"
            }
          ]
        };
      case "RuleCall":
        return {
          name: "RuleCall",
          properties: [
            {
              name: "arguments",
              defaultValue: []
            },
            {
              name: "cardinality"
            },
            {
              name: "lookahead"
            },
            {
              name: "rule"
            }
          ]
        };
      case "TerminalAlternatives":
        return {
          name: "TerminalAlternatives",
          properties: [
            {
              name: "cardinality"
            },
            {
              name: "elements",
              defaultValue: []
            },
            {
              name: "lookahead"
            }
          ]
        };
      case "TerminalGroup":
        return {
          name: "TerminalGroup",
          properties: [
            {
              name: "cardinality"
            },
            {
              name: "elements",
              defaultValue: []
            },
            {
              name: "lookahead"
            }
          ]
        };
      case "TerminalRuleCall":
        return {
          name: "TerminalRuleCall",
          properties: [
            {
              name: "cardinality"
            },
            {
              name: "lookahead"
            },
            {
              name: "rule"
            }
          ]
        };
      case "UnorderedGroup":
        return {
          name: "UnorderedGroup",
          properties: [
            {
              name: "cardinality"
            },
            {
              name: "elements",
              defaultValue: []
            },
            {
              name: "lookahead"
            }
          ]
        };
      case "UntilToken":
        return {
          name: "UntilToken",
          properties: [
            {
              name: "cardinality"
            },
            {
              name: "lookahead"
            },
            {
              name: "terminal"
            }
          ]
        };
      case "Wildcard":
        return {
          name: "Wildcard",
          properties: [
            {
              name: "cardinality"
            },
            {
              name: "lookahead"
            }
          ]
        };
      default:
        return {
          name: e,
          properties: []
        };
    }
  }
}, __5 = new WeakMap(), __privateAdd(_e2, __5, m$1(_e2, "LangiumGrammarAstReflection")), _e2), L = new kr();
var Fi = {};
o(Fi, {
  assignMandatoryProperties: () => ao,
  copyAstNode: () => so,
  findLocalReferences: () => fh,
  findRootNode: () => Tc,
  getContainerOfType: () => Zt,
  getDocument: () => ge,
  hasContainerOfType: () => uh,
  linkContentToContainer: () => Di,
  streamAllContents: () => ot,
  streamAst: () => Qe,
  streamContents: () => mn,
  streamReferences: () => Ir
});
function Di(r) {
  for (let [e, t] of Object.entries(r)) e.startsWith("$") || (Array.isArray(t) ? t.forEach((n2, i) => {
    ae(n2) && (n2.$container = r, n2.$containerProperty = e, n2.$containerIndex = i);
  }) : ae(t) && (t.$container = r, t.$containerProperty = e));
}
m$1(Di, "linkContentToContainer");
function Zt(r, e) {
  let t = r;
  for (; t; ) {
    if (e(t)) return t;
    t = t.$container;
  }
}
m$1(Zt, "getContainerOfType");
function uh(r, e) {
  let t = r;
  for (; t; ) {
    if (e(t)) return true;
    t = t.$container;
  }
  return false;
}
m$1(uh, "hasContainerOfType");
function ge(r) {
  let t = Tc(r).$document;
  if (!t) throw new Error("AST node has no document.");
  return t;
}
m$1(ge, "getDocument");
function Tc(r) {
  for (; r.$container; ) r = r.$container;
  return r;
}
m$1(Tc, "findRootNode");
function mn(r, e) {
  if (!r) throw new Error("Node must be an AstNode.");
  let t = e == null ? void 0 : e.range;
  return new He(() => ({
    keys: /* @__PURE__ */ Object.keys(r),
    keyIndex: 0,
    arrayIndex: 0
  }), (n2) => {
    for (; n2.keyIndex < n2.keys.length; ) {
      let i = n2.keys[n2.keyIndex];
      if (!i.startsWith("$")) {
        let s = r[i];
        if (ae(s)) {
          if (n2.keyIndex++, io(s, t)) return {
            done: false,
            value: s
          };
        } else if (Array.isArray(s)) {
          for (; n2.arrayIndex < s.length; ) {
            let o2 = n2.arrayIndex++, l = s[o2];
            if (ae(l) && io(l, t)) return {
              done: false,
              value: l
            };
          }
          n2.arrayIndex = 0;
        }
      }
      n2.keyIndex++;
    }
    return be;
  });
}
m$1(mn, "streamContents");
function ot(r, e) {
  if (!r) throw new Error("Root node must be an AstNode.");
  return new at(r, (t) => mn(t, e));
}
m$1(ot, "streamAllContents");
function Qe(r, e) {
  if (r) {
    if ((e == null ? void 0 : e.range) && !io(r, e.range)) return new at(r, () => []);
  } else throw new Error("Root node must be an AstNode.");
  return new at(r, (t) => mn(t, e), {
    includeRoot: true
  });
}
m$1(Qe, "streamAst");
function io(r, e) {
  var t;
  if (!e) return true;
  let n2 = (t = r.$cstNode) === null || t === void 0 ? void 0 : t.range;
  return n2 ? ta(n2, e) : false;
}
m$1(io, "isAstNodeInRange");
function Ir(r) {
  return new He(() => ({
    keys: /* @__PURE__ */ Object.keys(r),
    keyIndex: 0,
    arrayIndex: 0
  }), (e) => {
    for (; e.keyIndex < e.keys.length; ) {
      let t = e.keys[e.keyIndex];
      if (!t.startsWith("$")) {
        let n2 = r[t];
        if (Ae(n2)) return e.keyIndex++, {
          done: false,
          value: {
            reference: n2,
            container: r,
            property: t
          }
        };
        if (Array.isArray(n2)) {
          for (; e.arrayIndex < n2.length; ) {
            let i = e.arrayIndex++, s = n2[i];
            if (Ae(s)) return {
              done: false,
              value: {
                reference: s,
                container: r,
                property: t,
                index: i
              }
            };
          }
          e.arrayIndex = 0;
        }
      }
      e.keyIndex++;
    }
    return be;
  });
}
m$1(Ir, "streamReferences");
function fh(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ge(r).parseResult.value;
  let t = [];
  return Qe(e).forEach((n2) => {
    Ir(n2).forEach((i) => {
      i.reference.ref === r && t.push(i.reference);
    });
  }), K(t);
}
m$1(fh, "findLocalReferences");
function ao(r, e) {
  let t = /* @__PURE__ */ r.getTypeMetaData(e.$type), n2 = e;
  for (let i of t.properties) i.defaultValue !== void 0 && n2[i.name] === void 0 && (n2[i.name] = /* @__PURE__ */ xc(i.defaultValue));
}
m$1(ao, "assignMandatoryProperties");
function xc(r) {
  return Array.isArray(r) ? [
    .../* @__PURE__ */ r.map(xc)
  ] : r;
}
m$1(xc, "copyDefaultValue");
function so(r, e) {
  let t = {
    $type: r.$type
  };
  for (let [n2, i] of Object.entries(r)) if (!n2.startsWith("$")) if (ae(i)) t[n2] = /* @__PURE__ */ so(i, e);
  else if (Ae(i)) t[n2] = /* @__PURE__ */ e(t, n2, i.$refNode, i.$refText);
  else if (Array.isArray(i)) {
    let s = [];
    for (let o2 of i) ae(o2) ? s.push(/* @__PURE__ */ so(o2, e)) : Ae(o2) ? s.push(/* @__PURE__ */ e(t, n2, o2.$refNode, o2.$refText)) : s.push(o2);
    t[n2] = s;
  } else t[n2] = i;
  return Di(t), t;
}
m$1(so, "copyAstNode");
var Wi = {};
o(Wi, {
  NEWLINE_REGEXP: () => uo,
  escapeRegExp: () => nr,
  getCaseInsensitivePattern: () => ho,
  getTerminalParts: () => ph,
  isMultilineComment: () => fo,
  isWhitespace: () => Bi,
  partialMatches: () => po,
  partialRegExp: () => Ec
});
function _(r) {
  return r.charCodeAt(0);
}
m$1(_, "cc");
function Ui(r, e) {
  Array.isArray(r) ? r.forEach(function(t) {
    e.push(t);
  }) : e.push(r);
}
m$1(Ui, "insertToSet");
function Nr(r, e) {
  if (r[e] === true) throw "duplicate flag " + e;
  r[e];
  r[e] = true;
}
m$1(Nr, "addFlag");
function er(r) {
  if (r === void 0) throw Error("Internal Error - Should never get here!");
  return true;
}
m$1(er, "ASSERT_EXISTS");
function gn() {
  throw Error("Internal Error - Should never get here!");
}
m$1(gn, "ASSERT_NEVER_REACH_HERE");
function oo(r) {
  return r.type === "Character";
}
m$1(oo, "isCharacter");
var yn = [];
for (let r = /* @__PURE__ */ _("0"); r <= _("9"); r++) yn.push(r);
var Tn = /* @__PURE__ */ [
  /* @__PURE__ */ _("_")
].concat(yn);
for (let r = /* @__PURE__ */ _("a"); r <= _("z"); r++) Tn.push(r);
for (let r = /* @__PURE__ */ _("A"); r <= _("Z"); r++) Tn.push(r);
var lo = [
  /* @__PURE__ */ _(" "),
  /* @__PURE__ */ _("\f"),
  /* @__PURE__ */ _(`
`),
  /* @__PURE__ */ _("\r"),
  /* @__PURE__ */ _("	"),
  /* @__PURE__ */ _("\v"),
  /* @__PURE__ */ _("	"),
  /* @__PURE__ */ _(" "),
  /* @__PURE__ */ _(" "),
  /* @__PURE__ */ _(" "),
  /* @__PURE__ */ _(" "),
  /* @__PURE__ */ _(" "),
  /* @__PURE__ */ _(" "),
  /* @__PURE__ */ _(" "),
  /* @__PURE__ */ _(" "),
  /* @__PURE__ */ _(" "),
  /* @__PURE__ */ _(" "),
  /* @__PURE__ */ _(" "),
  /* @__PURE__ */ _(" "),
  /* @__PURE__ */ _(" "),
  /* @__PURE__ */ _("\u2028"),
  /* @__PURE__ */ _("\u2029"),
  /* @__PURE__ */ _(" "),
  /* @__PURE__ */ _(" "),
  /* @__PURE__ */ _("　"),
  /* @__PURE__ */ _("\uFEFF")
];
var dh = /[0-9a-fA-F]/, Gi = /[0-9]/, hh = /[1-9]/, tr = (_f2 = class {
  constructor() {
    this.idx = 0, this.input = "", this.groupIdx = 0;
  }
  saveState() {
    return {
      idx: this.idx,
      input: this.input,
      groupIdx: this.groupIdx
    };
  }
  restoreState(e) {
    this.idx = e.idx, this.input = e.input, this.groupIdx = e.groupIdx;
  }
  pattern(e) {
    this.idx = 0, this.input = e, this.groupIdx = 0, this.consumeChar("/");
    let t = /* @__PURE__ */ this.disjunction();
    this.consumeChar("/");
    let n2 = {
      type: "Flags",
      loc: {
        begin: this.idx,
        end: e.length
      },
      global: false,
      ignoreCase: false,
      multiLine: false,
      unicode: false,
      sticky: false
    };
    for (; this.isRegExpFlag(); ) switch (this.popChar()) {
      case "g":
        Nr(n2, "global");
        break;
      case "i":
        Nr(n2, "ignoreCase");
        break;
      case "m":
        Nr(n2, "multiLine");
        break;
      case "u":
        Nr(n2, "unicode");
        break;
      case "y":
        Nr(n2, "sticky");
        break;
    }
    if (this.idx !== this.input.length) throw Error("Redundant input: " + this.input.substring(this.idx));
    return {
      type: "Pattern",
      flags: n2,
      value: t,
      loc: /* @__PURE__ */ this.loc(0)
    };
  }
  disjunction() {
    let e = [], t = this.idx;
    for (e.push(/* @__PURE__ */ this.alternative()); this.peekChar() === "|"; ) this.consumeChar("|"), e.push(/* @__PURE__ */ this.alternative());
    return {
      type: "Disjunction",
      value: e,
      loc: /* @__PURE__ */ this.loc(t)
    };
  }
  alternative() {
    let e = [], t = this.idx;
    for (; this.isTerm(); ) e.push(/* @__PURE__ */ this.term());
    return {
      type: "Alternative",
      value: e,
      loc: /* @__PURE__ */ this.loc(t)
    };
  }
  term() {
    return this.isAssertion() ? this.assertion() : this.atom();
  }
  assertion() {
    let e = this.idx;
    switch (this.popChar()) {
      case "^":
        return {
          type: "StartAnchor",
          loc: /* @__PURE__ */ this.loc(e)
        };
      case "$":
        return {
          type: "EndAnchor",
          loc: /* @__PURE__ */ this.loc(e)
        };
      case "\\":
        switch (this.popChar()) {
          case "b":
            return {
              type: "WordBoundary",
              loc: /* @__PURE__ */ this.loc(e)
            };
          case "B":
            return {
              type: "NonWordBoundary",
              loc: /* @__PURE__ */ this.loc(e)
            };
        }
        throw Error("Invalid Assertion Escape");
      case "(":
        this.consumeChar("?");
        let t;
        switch (this.popChar()) {
          case "=":
            t = "Lookahead";
            break;
          case "!":
            t = "NegativeLookahead";
            break;
        }
        er(t);
        let n2 = /* @__PURE__ */ this.disjunction();
        return this.consumeChar(")"), {
          type: t,
          value: n2,
          loc: /* @__PURE__ */ this.loc(e)
        };
    }
    return gn();
  }
  quantifier() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    let t, n2 = this.idx;
    switch (this.popChar()) {
      case "*":
        t = {
          atLeast: 0,
          atMost: 1 / 0
        };
        break;
      case "+":
        t = {
          atLeast: 1,
          atMost: 1 / 0
        };
        break;
      case "?":
        t = {
          atLeast: 0,
          atMost: 1
        };
        break;
      case "{":
        let i = /* @__PURE__ */ this.integerIncludingZero();
        switch (this.popChar()) {
          case "}":
            t = {
              atLeast: i,
              atMost: i
            };
            break;
          case ",":
            let s;
            this.isDigit() ? (s = /* @__PURE__ */ this.integerIncludingZero(), t = {
              atLeast: i,
              atMost: s
            }) : t = {
              atLeast: i,
              atMost: 1 / 0
            }, this.consumeChar("}");
            break;
        }
        if (e === true && t === void 0) return;
        er(t);
        break;
    }
    if (!(e === true && t === void 0) && er(t)) return this.peekChar(0) === "?" ? (this.consumeChar("?"), t.greedy = false) : t.greedy = true, t.type = "Quantifier", t.loc = /* @__PURE__ */ this.loc(n2), t;
  }
  atom() {
    let e, t = this.idx;
    switch (this.peekChar()) {
      case ".":
        e = /* @__PURE__ */ this.dotAll();
        break;
      case "\\":
        e = /* @__PURE__ */ this.atomEscape();
        break;
      case "[":
        e = /* @__PURE__ */ this.characterClass();
        break;
      case "(":
        e = /* @__PURE__ */ this.group();
        break;
    }
    return e === void 0 && this.isPatternCharacter() && (e = /* @__PURE__ */ this.patternCharacter()), er(e) ? (e.loc = /* @__PURE__ */ this.loc(t), this.isQuantifier() && (e.quantifier = /* @__PURE__ */ this.quantifier()), e) : gn();
  }
  dotAll() {
    return this.consumeChar("."), {
      type: "Set",
      complement: true,
      value: [
        /* @__PURE__ */ _(`
`),
        /* @__PURE__ */ _("\r"),
        /* @__PURE__ */ _("\u2028"),
        /* @__PURE__ */ _("\u2029")
      ]
    };
  }
  atomEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        return this.decimalEscapeAtom();
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  decimalEscapeAtom() {
    return {
      type: "GroupBackReference",
      value: /* @__PURE__ */ this.positiveInteger()
    };
  }
  characterClassEscape() {
    let e, t = false;
    switch (this.popChar()) {
      case "d":
        e = yn;
        break;
      case "D":
        e = yn, t = true;
        break;
      case "s":
        e = lo;
        break;
      case "S":
        e = lo, t = true;
        break;
      case "w":
        e = Tn;
        break;
      case "W":
        e = Tn, t = true;
        break;
    }
    return er(e) ? {
      type: "Set",
      value: e,
      complement: t
    } : gn();
  }
  controlEscapeAtom() {
    let e;
    switch (this.popChar()) {
      case "f":
        e = /* @__PURE__ */ _("\f");
        break;
      case "n":
        e = /* @__PURE__ */ _(`
`);
        break;
      case "r":
        e = /* @__PURE__ */ _("\r");
        break;
      case "t":
        e = /* @__PURE__ */ _("	");
        break;
      case "v":
        e = /* @__PURE__ */ _("\v");
        break;
    }
    return er(e) ? {
      type: "Character",
      value: e
    } : gn();
  }
  controlLetterEscapeAtom() {
    this.consumeChar("c");
    let e = /* @__PURE__ */ this.popChar();
    if (/[a-zA-Z]/.test(e) === false) throw Error("Invalid ");
    return {
      type: "Character",
      value: e.toUpperCase().charCodeAt(0) - 64
    };
  }
  nulCharacterAtom() {
    return this.consumeChar("0"), {
      type: "Character",
      value: /* @__PURE__ */ _("\0")
    };
  }
  hexEscapeSequenceAtom() {
    return this.consumeChar("x"), this.parseHexDigits(2);
  }
  regExpUnicodeEscapeSequenceAtom() {
    return this.consumeChar("u"), this.parseHexDigits(4);
  }
  identityEscapeAtom() {
    let e = /* @__PURE__ */ this.popChar();
    return {
      type: "Character",
      value: /* @__PURE__ */ _(e)
    };
  }
  classPatternCharacterAtom() {
    switch (this.peekChar()) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
      case "\\":
      case "]":
        throw Error("TBD");
      default:
        let e = /* @__PURE__ */ this.popChar();
        return {
          type: "Character",
          value: /* @__PURE__ */ _(e)
        };
    }
  }
  characterClass() {
    let e = [], t = false;
    for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), t = true); this.isClassAtom(); ) {
      let n2 = /* @__PURE__ */ this.classAtom();
      n2.type === "Character";
      if (oo(n2) && this.isRangeDash()) {
        this.consumeChar("-");
        let s = /* @__PURE__ */ this.classAtom();
        s.type === "Character";
        if (oo(s)) {
          if (s.value < n2.value) throw Error("Range out of order in character class");
          e.push({
            from: n2.value,
            to: s.value
          });
        } else Ui(n2.value, e), e.push(/* @__PURE__ */ _("-")), Ui(s.value, e);
      } else Ui(n2.value, e);
    }
    return this.consumeChar("]"), {
      type: "Set",
      complement: t,
      value: e
    };
  }
  classAtom() {
    switch (this.peekChar()) {
      case "]":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        throw Error("TBD");
      case "\\":
        return this.classEscape();
      default:
        return this.classPatternCharacterAtom();
    }
  }
  classEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      case "b":
        return this.consumeChar("b"), {
          type: "Character",
          value: /* @__PURE__ */ _("\b")
        };
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  group() {
    let e = true;
    switch (this.consumeChar("("), this.peekChar(0)) {
      case "?":
        this.consumeChar("?"), this.consumeChar(":"), e = false;
        break;
      default:
        this.groupIdx++;
        break;
    }
    let t = /* @__PURE__ */ this.disjunction();
    this.consumeChar(")");
    let n2 = {
      type: "Group",
      capturing: e,
      value: t
    };
    return e && (n2.idx = this.groupIdx), n2;
  }
  positiveInteger() {
    let e = /* @__PURE__ */ this.popChar();
    if (hh.test(e) === false) throw Error("Expecting a positive integer");
    for (; Gi.test(/* @__PURE__ */ this.peekChar(0)); ) e += /* @__PURE__ */ this.popChar();
    return parseInt(e, 10);
  }
  integerIncludingZero() {
    let e = /* @__PURE__ */ this.popChar();
    if (Gi.test(e) === false) throw Error("Expecting an integer");
    for (; Gi.test(/* @__PURE__ */ this.peekChar(0)); ) e += /* @__PURE__ */ this.popChar();
    return parseInt(e, 10);
  }
  patternCharacter() {
    let e = /* @__PURE__ */ this.popChar();
    switch (e) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
        throw Error("TBD");
      default:
        return {
          type: "Character",
          value: /* @__PURE__ */ _(e)
        };
    }
  }
  isRegExpFlag() {
    switch (this.peekChar(0)) {
      case "g":
      case "i":
      case "m":
      case "u":
      case "y":
        return true;
      default:
        return false;
    }
  }
  isRangeDash() {
    return this.peekChar() === "-" && this.isClassAtom(1);
  }
  isDigit() {
    return Gi.test(/* @__PURE__ */ this.peekChar(0));
  }
  isClassAtom() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    switch (this.peekChar(e)) {
      case "]":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return false;
      default:
        return true;
    }
  }
  isTerm() {
    return this.isAtom() || this.isAssertion();
  }
  isAtom() {
    if (this.isPatternCharacter()) return true;
    switch (this.peekChar(0)) {
      case ".":
      case "\\":
      case "[":
      case "(":
        return true;
      default:
        return false;
    }
  }
  isAssertion() {
    switch (this.peekChar(0)) {
      case "^":
      case "$":
        return true;
      case "\\":
        switch (this.peekChar(1)) {
          case "b":
          case "B":
            return true;
          default:
            return false;
        }
      case "(":
        return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
      default:
        return false;
    }
  }
  isQuantifier() {
    let e = /* @__PURE__ */ this.saveState();
    try {
      return this.quantifier(true) !== void 0;
    } catch {
      return false;
    } finally {
      this.restoreState(e);
    }
  }
  isPatternCharacter() {
    switch (this.peekChar()) {
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
      case "/":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return false;
      default:
        return true;
    }
  }
  parseHexDigits(e) {
    let t = "";
    for (let i = 0; i < e; i++) {
      let s = /* @__PURE__ */ this.popChar();
      if (dh.test(s) === false) throw Error("Expecting a HexDecimal digits");
      t += s;
    }
    return {
      type: "Character",
      value: /* @__PURE__ */ parseInt(t, 16)
    };
  }
  peekChar() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return this.input[this.idx + e];
  }
  popChar() {
    let e = /* @__PURE__ */ this.peekChar(0);
    return this.consumeChar(void 0), e;
  }
  consumeChar(e) {
    if (e !== void 0 && this.input[this.idx] !== e) throw Error("Expected: '" + e + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
    if (this.idx >= this.input.length) throw Error("Unexpected end of input");
    this.idx++;
  }
  loc(e) {
    return {
      begin: e,
      end: this.idx
    };
  }
}, __6 = new WeakMap(), __privateAdd(_f2, __6, m$1(_f2, "RegExpParser")), _f2);
var lt = (_g = class {
  visitChildren(e) {
    for (let t in e) {
      let n2 = e[t];
      e.hasOwnProperty(t) && (n2.type !== void 0 ? this.visit(n2) : Array.isArray(n2) && n2.forEach((i) => {
        this.visit(i);
      }, this));
    }
  }
  visit(e) {
    switch (e.type) {
      case "Pattern":
        this.visitPattern(e);
        break;
      case "Flags":
        this.visitFlags(e);
        break;
      case "Disjunction":
        this.visitDisjunction(e);
        break;
      case "Alternative":
        this.visitAlternative(e);
        break;
      case "StartAnchor":
        this.visitStartAnchor(e);
        break;
      case "EndAnchor":
        this.visitEndAnchor(e);
        break;
      case "WordBoundary":
        this.visitWordBoundary(e);
        break;
      case "NonWordBoundary":
        this.visitNonWordBoundary(e);
        break;
      case "Lookahead":
        this.visitLookahead(e);
        break;
      case "NegativeLookahead":
        this.visitNegativeLookahead(e);
        break;
      case "Character":
        this.visitCharacter(e);
        break;
      case "Set":
        this.visitSet(e);
        break;
      case "Group":
        this.visitGroup(e);
        break;
      case "GroupBackReference":
        this.visitGroupBackReference(e);
        break;
      case "Quantifier":
        this.visitQuantifier(e);
        break;
    }
    this.visitChildren(e);
  }
  visitPattern(e) {
  }
  visitFlags(e) {
  }
  visitDisjunction(e) {
  }
  visitAlternative(e) {
  }
  visitStartAnchor(e) {
  }
  visitEndAnchor(e) {
  }
  visitWordBoundary(e) {
  }
  visitNonWordBoundary(e) {
  }
  visitLookahead(e) {
  }
  visitNegativeLookahead(e) {
  }
  visitCharacter(e) {
  }
  visitSet(e) {
  }
  visitGroup(e) {
  }
  visitGroupBackReference(e) {
  }
  visitQuantifier(e) {
  }
}, __7 = new WeakMap(), __privateAdd(_g, __7, m$1(_g, "BaseRegExpVisitor")), _g);
var uo = /\r?\n/gm, Rc = new tr(), co = (_h2 = class extends lt {
  constructor() {
    super(...arguments), this.isStarting = true, this.endRegexpStack = [], this.multiline = false;
  }
  get endRegex() {
    return this.endRegexpStack.join("");
  }
  reset(e) {
    this.multiline = false, this.regex = e, this.startRegexp = "", this.isStarting = true, this.endRegexpStack = [];
  }
  visitGroup(e) {
    e.quantifier && (this.isStarting = false, this.endRegexpStack = []);
  }
  visitCharacter(e) {
    let t = /* @__PURE__ */ String.fromCharCode(e.value);
    if (!this.multiline && t === `
` && (this.multiline = true), e.quantifier) this.isStarting = false, this.endRegexpStack = [];
    else {
      let n2 = /* @__PURE__ */ nr(t);
      this.endRegexpStack.push(n2), this.isStarting && (this.startRegexp += n2);
    }
  }
  visitSet(e) {
    if (!this.multiline) {
      let t = /* @__PURE__ */ this.regex.substring(e.loc.begin, e.loc.end), n2 = new RegExp(t);
      this.multiline = !!`
`.match(n2);
    }
    if (e.quantifier) this.isStarting = false, this.endRegexpStack = [];
    else {
      let t = /* @__PURE__ */ this.regex.substring(e.loc.begin, e.loc.end);
      this.endRegexpStack.push(t), this.isStarting && (this.startRegexp += t);
    }
  }
  visitChildren(e) {
    e.type === "Group" && e.quantifier || super.visitChildren(e);
  }
}, __8 = new WeakMap(), __privateAdd(_h2, __8, m$1(_h2, "TerminalRegExpVisitor")), _h2), rr = new co();
function ph(r) {
  try {
    typeof r != "string" && (r = r.source), r = `/${r}/`;
    let e = /* @__PURE__ */ Rc.pattern(r), t = [];
    for (let n2 of e.value.value) rr.reset(r), rr.visit(n2), t.push({
      start: rr.startRegexp,
      end: rr.endRegex
    });
    return t;
  } catch {
    return [];
  }
}
m$1(ph, "getTerminalParts");
function fo(r) {
  try {
    return typeof r == "string" && (r = new RegExp(r)), r = /* @__PURE__ */ r.toString(), rr.reset(r), rr.visit(/* @__PURE__ */ Rc.pattern(r)), rr.multiline;
  } catch {
    return false;
  }
}
m$1(fo, "isMultilineComment");
function Bi(r) {
  return (typeof r == "string" ? new RegExp(r) : r).test(" ");
}
m$1(Bi, "isWhitespace");
function nr(r) {
  return r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
m$1(nr, "escapeRegExp");
function ho(r) {
  return Array.prototype.map.call(r, (e) => /\w/.test(e) ? `[${e.toLowerCase()}${e.toUpperCase()}]` : nr(e)).join("");
}
m$1(ho, "getCaseInsensitivePattern");
function po(r, e) {
  let t = /* @__PURE__ */ Ec(r), n2 = /* @__PURE__ */ e.match(t);
  return !!n2 && n2[0].length > 0;
}
m$1(po, "partialMatches");
function Ec(r) {
  typeof r == "string" && (r = new RegExp(r));
  let e = r, t = r.source, n2 = 0;
  function i() {
    let s = "", o2;
    function l(u) {
      s += /* @__PURE__ */ t.substr(n2, u), n2 += u;
    }
    m$1(l, "appendRaw");
    function c(u) {
      s += "(?:" + t.substr(n2, u) + "|$)", n2 += u;
    }
    for (m$1(c, "appendOptional"); n2 < t.length; ) switch (t[n2]) {
      case "\\":
        switch (t[n2 + 1]) {
          case "c":
            c(3);
            break;
          case "x":
            c(4);
            break;
          case "u":
            e.unicode ? t[n2 + 2] === "{" ? c(t.indexOf("}", n2) - n2 + 1) : c(6) : c(2);
            break;
          case "p":
          case "P":
            e.unicode ? c(t.indexOf("}", n2) - n2 + 1) : c(2);
            break;
          case "k":
            c(t.indexOf(">", n2) - n2 + 1);
            break;
          default:
            c(2);
            break;
        }
        break;
      case "[":
        o2 = /\[(?:\\.|.)*?\]/g, o2.lastIndex = n2, o2 = o2.exec(t) || [], c(o2[0].length);
        break;
      case "|":
      case "^":
      case "$":
      case "*":
      case "+":
      case "?":
        l(1);
        break;
      case "{":
        o2 = /\{\d+,?\d*\}/g, o2.lastIndex = n2, o2 = /* @__PURE__ */ o2.exec(t), o2 ? l(o2[0].length) : c(1);
        break;
      case "(":
        if (t[n2 + 1] === "?") switch (t[n2 + 2]) {
          case ":":
            s += "(?:", n2 += 3, s += i() + "|$)";
            break;
          case "=":
            s += "(?=", n2 += 3, s += i() + ")";
            break;
          case "!":
            o2 = n2, n2 += 3, i(), s += /* @__PURE__ */ t.substr(o2, n2 - o2);
            break;
          case "<":
            switch (t[n2 + 3]) {
              case "=":
              case "!":
                o2 = n2, n2 += 4, i(), s += /* @__PURE__ */ t.substr(o2, n2 - o2);
                break;
              default:
                l(t.indexOf(">", n2) - n2 + 1), s += i() + "|$)";
                break;
            }
            break;
        }
        else l(1), s += i() + "|$)";
        break;
      case ")":
        return ++n2, s;
      default:
        c(1);
        break;
    }
    return s;
  }
  return m$1(i, "process"), new RegExp(i(), r.flags);
}
m$1(Ec, "partialRegExp");
function Ac(r) {
  return r.rules.find((e) => _e(e) && e.entry);
}
m$1(Ac, "getEntryRule");
function vc(r) {
  return r.rules.filter((e) => Ye(e) && e.hidden);
}
m$1(vc, "getHiddenRules");
function xn(r, e) {
  let t = /* @__PURE__ */ new Set(), n2 = /* @__PURE__ */ Ac(r);
  if (!n2) return new Set(r.rules);
  let i = /* @__PURE__ */ [
    n2
  ].concat(/* @__PURE__ */ vc(r));
  for (let o2 of i) kc(o2, t, e);
  let s = /* @__PURE__ */ new Set();
  for (let o2 of r.rules) (t.has(o2.name) || Ye(o2) && o2.hidden) && s.add(o2);
  return s;
}
m$1(xn, "getAllReachableRules");
function kc(r, e, t) {
  e.add(r.name), ot(r).forEach((n2) => {
    if (rt(n2) || t && bi(n2)) {
      let i = n2.rule.ref;
      i && !e.has(i.name) && kc(i, e, t);
    }
  });
}
m$1(kc, "ruleDfs");
function yo(r) {
  if (r.terminal) return r.terminal;
  if (r.type.ref) {
    let e = /* @__PURE__ */ ji(r.type.ref);
    return e == null ? void 0 : e.terminal;
  }
}
m$1(yo, "getCrossReferenceTerminal");
function To(r) {
  return r.hidden && !Sr(r).test(" ");
}
m$1(To, "isCommentTerminal");
function xo(r, e) {
  return !r || !e ? [] : Ro(r, e, r.astNode, true);
}
m$1(xo, "findNodesForProperty");
function Rn(r, e, t) {
  if (!r || !e) return;
  let n2 = /* @__PURE__ */ Ro(r, e, r.astNode, true);
  if (n2.length !== 0) return t !== void 0 ? t = /* @__PURE__ */ Math.max(0, /* @__PURE__ */ Math.min(t, n2.length - 1)) : t = 0, n2[t];
}
m$1(Rn, "findNodeForProperty");
function Ro(r, e, t, n2) {
  if (!n2) {
    let i = /* @__PURE__ */ Zt(r.grammarSource, tt);
    if (i && i.feature === e) return [
      r
    ];
  }
  return Ke(r) && r.astNode === t ? r.content.flatMap((i) => Ro(i, e, t, false)) : [];
}
m$1(Ro, "findNodesForPropertyInternal");
function mh(r, e) {
  return r ? Ao(r, e, r == null ? void 0 : r.astNode) : [];
}
m$1(mh, "findNodesForKeyword");
function Eo(r, e, t) {
  if (!r) return;
  let n2 = /* @__PURE__ */ Ao(r, e, r == null ? void 0 : r.astNode);
  if (n2.length !== 0) return t !== void 0 ? t = /* @__PURE__ */ Math.max(0, /* @__PURE__ */ Math.min(t, n2.length - 1)) : t = 0, n2[t];
}
m$1(Eo, "findNodeForKeyword");
function Ao(r, e, t) {
  if (r.astNode !== t) return [];
  if (Je(r.grammarSource) && r.grammarSource.value === e) return [
    r
  ];
  let n2 = /* @__PURE__ */ Xt(r).iterator(), i, s = [];
  do
    if (i = /* @__PURE__ */ n2.next(), !i.done) {
      let o2 = i.value;
      o2.astNode === t ? Je(o2.grammarSource) && o2.grammarSource.value === e && s.push(o2) : n2.prune();
    }
  while (!i.done);
  return s;
}
m$1(Ao, "findNodesForKeywordInternal");
function vo(r) {
  var e;
  let t = r.astNode;
  for (; t === ((e = r.container) === null || e === void 0 ? void 0 : e.astNode); ) {
    let n2 = /* @__PURE__ */ Zt(r.grammarSource, tt);
    if (n2) return n2;
    r = r.container;
  }
}
m$1(vo, "findAssignment");
function ji(r) {
  let e = r;
  return Li(e) && (Et(e.$container) ? e = e.$container.$container : _e(e.$container) ? e = e.$container : bt(e.$container)), Ic(r, e, /* @__PURE__ */ new Map());
}
m$1(ji, "findNameAssignment");
function Ic(r, e, t) {
  var n2;
  function i(s, o2) {
    let l;
    return Zt(s, tt) || (l = /* @__PURE__ */ Ic(o2, o2, t)), t.set(r, l), l;
  }
  if (m$1(i, "go"), t.has(r)) return t.get(r);
  t.set(r, void 0);
  for (let s of ot(e)) {
    if (tt(s) && s.feature.toLowerCase() === "name") return t.set(r, s), s;
    if (rt(s) && _e(s.rule.ref)) return i(s, s.rule.ref);
    if ($i(s) && !((n2 = s.typeRef) === null || n2 === void 0) && n2.ref) return i(s, s.typeRef.ref);
  }
}
m$1(Ic, "findNameAssignmentInternal");
function Nc(r) {
  let e = r.$container;
  if (Mt(e)) {
    let t = e.elements, n2 = /* @__PURE__ */ t.indexOf(r);
    for (let i = n2 - 1; i >= 0; i--) {
      let s = t[i];
      if (Et(s)) return s;
      {
        let o2 = /* @__PURE__ */ ot(t[i]).find(Et);
        if (o2) return o2;
      }
    }
  }
  if (dn(e)) return Nc(e);
}
m$1(Nc, "getActionAtElement");
function gh(r, e) {
  return r === "?" || r === "*" || Mt(e) && !!e.guardCondition;
}
m$1(gh, "isOptionalCardinality");
function yh(r) {
  return r === "*" || r === "+";
}
m$1(yh, "isArrayCardinality");
function Th(r) {
  return r === "+=";
}
m$1(Th, "isArrayOperator");
function En(r) {
  return Sc(r, /* @__PURE__ */ new Set());
}
m$1(En, "isDataTypeRule");
function Sc(r, e) {
  if (e.has(r)) return true;
  e.add(r);
  for (let t of ot(r)) if (rt(t)) {
    if (!t.rule.ref || _e(t.rule.ref) && !Sc(t.rule.ref, e)) return false;
  } else {
    if (tt(t)) return false;
    if (Et(t)) return false;
  }
  return !!r.definition;
}
m$1(Sc, "isDataTypeRuleInternal");
function xh(r) {
  return go(r.type, /* @__PURE__ */ new Set());
}
m$1(xh, "isDataType");
function go(r, e) {
  if (e.has(r)) return true;
  if (e.add(r), la(r)) return false;
  if (Na(r)) return false;
  if (Oa(r)) return r.types.every((t) => go(t, e));
  if ($i(r)) {
    if (r.primitiveType !== void 0) return true;
    if (r.stringType !== void 0) return true;
    if (r.typeRef !== void 0) {
      let t = r.typeRef.ref;
      return hn(t) ? go(t.type, e) : false;
    } else return false;
  } else return false;
}
m$1(go, "isDataTypeInternal");
function ko(r) {
  if (r.inferredType) return r.inferredType.name;
  if (r.dataType) return r.dataType;
  if (r.returnType) {
    let e = r.returnType.ref;
    if (e) {
      if (_e(e)) return e.name;
      if (Oi(e) || hn(e)) return e.name;
    }
  }
}
m$1(ko, "getExplicitRuleType");
function ir(r) {
  var e;
  if (_e(r)) return En(r) ? r.name : (e = /* @__PURE__ */ ko(r)) !== null && e !== void 0 ? e : r.name;
  if (Oi(r) || hn(r) || Sa(r)) return r.name;
  if (Et(r)) {
    let t = /* @__PURE__ */ Cc(r);
    if (t) return t;
  } else if (Li(r)) return r.name;
  throw new Error("Cannot get name of Unknown Type");
}
m$1(ir, "getTypeName");
function Cc(r) {
  var e;
  if (r.inferredType) return r.inferredType.name;
  if (!((e = r.type) === null || e === void 0) && e.ref) return ir(r.type.ref);
}
m$1(Cc, "getActionType");
function Io(r) {
  var e, t, n2;
  return Ye(r) ? (t = (e = r.type) === null || e === void 0 ? void 0 : e.name) !== null && t !== void 0 ? t : "string" : En(r) ? r.name : (n2 = /* @__PURE__ */ ko(r)) !== null && n2 !== void 0 ? n2 : r.name;
}
m$1(Io, "getRuleType");
function Sr(r) {
  let e = {
    s: false,
    i: false,
    u: false
  }, t = /* @__PURE__ */ Cr(r.definition, e), n2 = /* @__PURE__ */ Object.entries(e).filter((param) => {
    let [, i] = param;
    return i;
  }).map((param) => {
    let [i] = param;
    return i;
  }).join("");
  return new RegExp(t, n2);
}
m$1(Sr, "terminalRegex");
var No = /[\s\S]/.source;
function Cr(r, e) {
  if (Xa(r)) return Rh(r);
  if (Ja(r)) return Eh(r);
  if (Da(r)) return kh(r);
  if (bi(r)) {
    let t = r.rule.ref;
    if (!t) throw new Error("Missing rule reference.");
    return At(/* @__PURE__ */ Cr(t.definition), {
      cardinality: r.cardinality,
      lookahead: r.lookahead
    });
  } else {
    if (Va(r)) return vh(r);
    if (to(r)) return Ah(r);
    if (Ha(r)) {
      let t = /* @__PURE__ */ r.regex.lastIndexOf("/"), n2 = /* @__PURE__ */ r.regex.substring(1, t), i = /* @__PURE__ */ r.regex.substring(t + 1);
      return e && (e.i = /* @__PURE__ */ i.includes("i"), e.s = /* @__PURE__ */ i.includes("s"), e.u = /* @__PURE__ */ i.includes("u")), At(n2, {
        cardinality: r.cardinality,
        lookahead: r.lookahead,
        wrap: false
      });
    } else {
      if (no(r)) return At(No, {
        cardinality: r.cardinality,
        lookahead: r.lookahead
      });
      throw new Error(`Invalid terminal element: ${r == null ? void 0 : r.$type}`);
    }
  }
}
m$1(Cr, "abstractElementToRegex");
function Rh(r) {
  return At(/* @__PURE__ */ r.elements.map((e) => Cr(e)).join("|"), {
    cardinality: r.cardinality,
    lookahead: r.lookahead
  });
}
m$1(Rh, "terminalAlternativesToRegex");
function Eh(r) {
  return At(/* @__PURE__ */ r.elements.map((e) => Cr(e)).join(""), {
    cardinality: r.cardinality,
    lookahead: r.lookahead
  });
}
m$1(Eh, "terminalGroupToRegex");
function Ah(r) {
  return At(`${No}*?${Cr(r.terminal)}`, {
    cardinality: r.cardinality,
    lookahead: r.lookahead
  });
}
m$1(Ah, "untilTokenToRegex");
function vh(r) {
  return At(`(?!${Cr(r.terminal)})${No}*?`, {
    cardinality: r.cardinality,
    lookahead: r.lookahead
  });
}
m$1(vh, "negateTokenToRegex");
function kh(r) {
  return r.right ? At(`[${mo(r.left)}-${mo(r.right)}]`, {
    cardinality: r.cardinality,
    lookahead: r.lookahead,
    wrap: false
  }) : At(/* @__PURE__ */ mo(r.left), {
    cardinality: r.cardinality,
    lookahead: r.lookahead,
    wrap: false
  });
}
m$1(kh, "characterRangeToRegex");
function mo(r) {
  return nr(r.value);
}
m$1(mo, "keywordToRegex");
function At(r, e) {
  var t;
  return (e.wrap !== false || e.lookahead) && (r = `(${(t = e.lookahead) !== null && t !== void 0 ? t : ""}${r})`), e.cardinality ? `${r}${e.cardinality}` : r;
}
m$1(At, "withCardinality");
function So(r) {
  let e = [], t = r.Grammar;
  for (let n2 of t.rules) Ye(n2) && To(n2) && fo(/* @__PURE__ */ Sr(n2)) && e.push(n2.name);
  return {
    multilineCommentRules: e,
    nameRegexp: Ni
  };
}
m$1(So, "createGrammarConfig");
function _r(r) {
  console && console.error && console.error(`Error: ${r}`);
}
m$1(_r, "PRINT_ERROR");
function An(r) {
  console && console.warn && console.warn(`Warning: ${r}`);
}
m$1(An, "PRINT_WARNING");
function vn(r) {
  let e = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime(), t = /* @__PURE__ */ r();
  return {
    time: (/* @__PURE__ */ new Date()).getTime() - e,
    value: t
  };
}
m$1(vn, "timer");
function kn(r) {
  function e() {
  }
  m$1(e, "FakeConstructor"), e.prototype = r;
  let t = new e();
  function n2() {
    return typeof t.bar;
  }
  return m$1(n2, "fakeAccess"), n2(), n2(), r;
}
m$1(kn, "toFastProperties");
function Ih(r) {
  return Nh(r) ? r.LABEL : r.name;
}
m$1(Ih, "tokenLabel");
function Nh(r) {
  return pr$1(r.LABEL) && r.LABEL !== "";
}
m$1(Nh, "hasTokenLabel");
var ze = (_i2 = class {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    this._definition = e;
  }
  accept(e) {
    e.visit(this), Zr$1(this.definition, (t) => {
      t.accept(e);
    });
  }
}, __9 = new WeakMap(), __privateAdd(_i2, __9, m$1(_i2, "AbstractProduction")), _i2), H = (_j = class extends ze {
  constructor(e) {
    super([]), this.idx = 1, fi$1(this, /* @__PURE__ */ Tm(e, (t) => t !== void 0));
  }
  set definition(e) {
  }
  get definition() {
    return this.referencedRule !== void 0 ? this.referencedRule.definition : [];
  }
  accept(e) {
    e.visit(this);
  }
}, __10 = new WeakMap(), __privateAdd(_j, __10, m$1(_j, "NonTerminal")), _j), Me = (_k = class extends ze {
  constructor(e) {
    super(e.definition), this.orgText = "", fi$1(this, /* @__PURE__ */ Tm(e, (t) => t !== void 0));
  }
}, __11 = new WeakMap(), __privateAdd(_k, __11, m$1(_k, "Rule")), _k), J = (_l = class extends ze {
  constructor(e) {
    super(e.definition), this.ignoreAmbiguities = false, fi$1(this, /* @__PURE__ */ Tm(e, (t) => t !== void 0));
  }
}, __12 = new WeakMap(), __privateAdd(_l, __12, m$1(_l, "Alternative")), _l), z = (_m2 = class extends ze {
  constructor(e) {
    super(e.definition), this.idx = 1, fi$1(this, /* @__PURE__ */ Tm(e, (t) => t !== void 0));
  }
}, __13 = new WeakMap(), __privateAdd(_m2, __13, m$1(_m2, "Option")), _m2), Q = (_n2 = class extends ze {
  constructor(e) {
    super(e.definition), this.idx = 1, fi$1(this, /* @__PURE__ */ Tm(e, (t) => t !== void 0));
  }
}, __14 = new WeakMap(), __privateAdd(_n2, __14, m$1(_n2, "RepetitionMandatory")), _n2), Z = (_o2 = class extends ze {
  constructor(e) {
    super(e.definition), this.idx = 1, fi$1(this, /* @__PURE__ */ Tm(e, (t) => t !== void 0));
  }
}, __15 = new WeakMap(), __privateAdd(_o2, __15, m$1(_o2, "RepetitionMandatoryWithSeparator")), _o2), F = (_p2 = class extends ze {
  constructor(e) {
    super(e.definition), this.idx = 1, fi$1(this, /* @__PURE__ */ Tm(e, (t) => t !== void 0));
  }
}, __16 = new WeakMap(), __privateAdd(_p2, __16, m$1(_p2, "Repetition")), _p2), q = (_q = class extends ze {
  constructor(e) {
    super(e.definition), this.idx = 1, fi$1(this, /* @__PURE__ */ Tm(e, (t) => t !== void 0));
  }
}, __17 = new WeakMap(), __privateAdd(_q, __17, m$1(_q, "RepetitionWithSeparator")), _q), X = (_r2 = class extends ze {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    super(e.definition), this.idx = 1, this.ignoreAmbiguities = false, this.hasPredicates = false, fi$1(this, /* @__PURE__ */ Tm(e, (t) => t !== void 0));
  }
}, __18 = new WeakMap(), __privateAdd(_r2, __18, m$1(_r2, "Alternation")), _r2), D = (_s2 = class {
  constructor(e) {
    this.idx = 1, fi$1(this, /* @__PURE__ */ Tm(e, (t) => t !== void 0));
  }
  accept(e) {
    e.visit(this);
  }
}, __19 = new WeakMap(), __privateAdd(_s2, __19, m$1(_s2, "Terminal")), _s2);
function Ki(r) {
  return Jr(r, wr);
}
m$1(Ki, "serializeGrammar");
function wr(r) {
  function e(t) {
    return Jr(t, wr);
  }
  if (m$1(e, "convertDefinition"), r instanceof H) {
    let t = {
      type: "NonTerminal",
      name: r.nonTerminalName,
      idx: r.idx
    };
    return pr$1(r.label) && (t.label = r.label), t;
  } else {
    if (r instanceof J) return {
      type: "Alternative",
      definition: /* @__PURE__ */ e(r.definition)
    };
    if (r instanceof z) return {
      type: "Option",
      idx: r.idx,
      definition: /* @__PURE__ */ e(r.definition)
    };
    if (r instanceof Q) return {
      type: "RepetitionMandatory",
      idx: r.idx,
      definition: /* @__PURE__ */ e(r.definition)
    };
    if (r instanceof Z) return {
      type: "RepetitionMandatoryWithSeparator",
      idx: r.idx,
      separator: /* @__PURE__ */ wr(new D({
        terminalType: r.separator
      })),
      definition: /* @__PURE__ */ e(r.definition)
    };
    if (r instanceof q) return {
      type: "RepetitionWithSeparator",
      idx: r.idx,
      separator: /* @__PURE__ */ wr(new D({
        terminalType: r.separator
      })),
      definition: /* @__PURE__ */ e(r.definition)
    };
    if (r instanceof F) return {
      type: "Repetition",
      idx: r.idx,
      definition: /* @__PURE__ */ e(r.definition)
    };
    if (r instanceof X) return {
      type: "Alternation",
      idx: r.idx,
      definition: /* @__PURE__ */ e(r.definition)
    };
    if (r instanceof D) {
      let t = {
        type: "Terminal",
        name: r.terminalType.name,
        label: /* @__PURE__ */ Ih(r.terminalType),
        idx: r.idx
      };
      pr$1(r.label) && (t.terminalLabel = r.label);
      let n2 = r.terminalType.PATTERN;
      return r.terminalType.PATTERN && (t.pattern = cm$1(n2) ? n2.source : n2), t;
    } else {
      if (r instanceof Me) return {
        type: "Rule",
        name: r.name,
        orgText: r.orgText,
        definition: /* @__PURE__ */ e(r.definition)
      };
      throw Error("non exhaustive match");
    }
  }
}
m$1(wr, "serializeProduction");
var De = (_t2 = class {
  visit(e) {
    let t = e;
    switch (t.constructor) {
      case H:
        return this.visitNonTerminal(t);
      case J:
        return this.visitAlternative(t);
      case z:
        return this.visitOption(t);
      case Q:
        return this.visitRepetitionMandatory(t);
      case Z:
        return this.visitRepetitionMandatoryWithSeparator(t);
      case q:
        return this.visitRepetitionWithSeparator(t);
      case F:
        return this.visitRepetition(t);
      case X:
        return this.visitAlternation(t);
      case D:
        return this.visitTerminal(t);
      case Me:
        return this.visitRule(t);
      default:
        throw Error("non exhaustive match");
    }
  }
  visitNonTerminal(e) {
  }
  visitAlternative(e) {
  }
  visitOption(e) {
  }
  visitRepetition(e) {
  }
  visitRepetitionMandatory(e) {
  }
  visitRepetitionMandatoryWithSeparator(e) {
  }
  visitRepetitionWithSeparator(e) {
  }
  visitAlternation(e) {
  }
  visitTerminal(e) {
  }
  visitRule(e) {
  }
}, __20 = new WeakMap(), __privateAdd(_t2, __20, m$1(_t2, "GAstVisitor")), _t2);
function Co(r) {
  return r instanceof J || r instanceof z || r instanceof F || r instanceof Q || r instanceof Z || r instanceof q || r instanceof D || r instanceof Me;
}
m$1(Co, "isSequenceProd");
function sr(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return r instanceof z || r instanceof F || r instanceof q ? true : r instanceof X ? fp$1(r.definition, (n2) => sr(n2, e)) : r instanceof H && pm$1(e, r) ? false : r instanceof ze ? (r instanceof H && e.push(r), Ui$1(r.definition, (n2) => sr(n2, e))) : false;
}
m$1(sr, "isOptionalProd");
function _o(r) {
  return r instanceof X;
}
m$1(_o, "isBranchingProd");
function Be(r) {
  if (r instanceof H) return "SUBRULE";
  if (r instanceof z) return "OPTION";
  if (r instanceof X) return "OR";
  if (r instanceof Q) return "AT_LEAST_ONE";
  if (r instanceof Z) return "AT_LEAST_ONE_SEP";
  if (r instanceof q) return "MANY_SEP";
  if (r instanceof F) return "MANY";
  if (r instanceof D) return "CONSUME";
  throw Error("non exhaustive match");
}
m$1(Be, "getProductionDslName");
var vt = (_u2 = class {
  walk(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    Zr$1(e.definition, (n2, i) => {
      let s = /* @__PURE__ */ Mi$1(e.definition, i + 1);
      if (n2 instanceof H) this.walkProdRef(n2, s, t);
      else if (n2 instanceof D) this.walkTerminal(n2, s, t);
      else if (n2 instanceof J) this.walkFlat(n2, s, t);
      else if (n2 instanceof z) this.walkOption(n2, s, t);
      else if (n2 instanceof Q) this.walkAtLeastOne(n2, s, t);
      else if (n2 instanceof Z) this.walkAtLeastOneSep(n2, s, t);
      else if (n2 instanceof q) this.walkManySep(n2, s, t);
      else if (n2 instanceof F) this.walkMany(n2, s, t);
      else if (n2 instanceof X) this.walkOr(n2, s, t);
      else throw Error("non exhaustive match");
    });
  }
  walkTerminal(e, t, n2) {
  }
  walkProdRef(e, t, n2) {
  }
  walkFlat(e, t, n2) {
    let i = /* @__PURE__ */ t.concat(n2);
    this.walk(e, i);
  }
  walkOption(e, t, n2) {
    let i = /* @__PURE__ */ t.concat(n2);
    this.walk(e, i);
  }
  walkAtLeastOne(e, t, n2) {
    let i = /* @__PURE__ */ [
      new z({
        definition: e.definition
      })
    ].concat(t, n2);
    this.walk(e, i);
  }
  walkAtLeastOneSep(e, t, n2) {
    let i = /* @__PURE__ */ _c(e, t, n2);
    this.walk(e, i);
  }
  walkMany(e, t, n2) {
    let i = /* @__PURE__ */ [
      new z({
        definition: e.definition
      })
    ].concat(t, n2);
    this.walk(e, i);
  }
  walkManySep(e, t, n2) {
    let i = /* @__PURE__ */ _c(e, t, n2);
    this.walk(e, i);
  }
  walkOr(e, t, n2) {
    let i = /* @__PURE__ */ t.concat(n2);
    Zr$1(e.definition, (s) => {
      let o2 = new J({
        definition: [
          s
        ]
      });
      this.walk(o2, i);
    });
  }
}, __21 = new WeakMap(), __privateAdd(_u2, __21, m$1(_u2, "RestWalker")), _u2);
function _c(r, e, t) {
  return [
    new z({
      definition: /* @__PURE__ */ [
        new D({
          terminalType: r.separator
        })
      ].concat(r.definition)
    })
  ].concat(e, t);
}
m$1(_c, "restForRepetitionWithSeparator");
function ar(r) {
  if (r instanceof H) return ar(r.referencedRule);
  if (r instanceof D) return _h(r);
  if (Co(r)) return Sh(r);
  if (_o(r)) return Ch(r);
  throw Error("non exhaustive match");
}
m$1(ar, "first");
function Sh(r) {
  let e = [], t = r.definition, n2 = 0, i = t.length > n2, s, o2 = true;
  for (; i && o2; ) s = t[n2], o2 = /* @__PURE__ */ sr(s), e = /* @__PURE__ */ e.concat(/* @__PURE__ */ ar(s)), n2 = n2 + 1, i = t.length > n2;
  return mp$1(e);
}
m$1(Sh, "firstForSequence");
function Ch(r) {
  let e = /* @__PURE__ */ Jr(r.definition, (t) => ar(t));
  return mp$1(/* @__PURE__ */ Qr(e));
}
m$1(Ch, "firstForBranching");
function _h(r) {
  return [
    r.terminalType
  ];
}
m$1(_h, "firstForTerminal");
var Hi = "_~IN~_";
var wo = (_v = class extends vt {
  constructor(e) {
    super(), this.topProd = e, this.follows = {};
  }
  startWalking() {
    return this.walk(this.topProd), this.follows;
  }
  walkTerminal(e, t, n2) {
  }
  walkProdRef(e, t, n2) {
    let i = wh(e.referencedRule, e.idx) + this.topProd.name, s = /* @__PURE__ */ t.concat(n2), o2 = new J({
      definition: s
    }), l = /* @__PURE__ */ ar(o2);
    this.follows[i] = l;
  }
}, __22 = new WeakMap(), __privateAdd(_v, __22, m$1(_v, "ResyncFollowsWalker")), _v);
function wc(r) {
  let e = {};
  return Zr$1(r, (t) => {
    let n2 = /* @__PURE__ */ new wo(t).startWalking();
    fi$1(e, n2);
  }), e;
}
m$1(wc, "computeAllProdsFollows");
function wh(r, e) {
  return r.name + e + Hi;
}
m$1(wh, "buildBetweenProdsFollowPrefix");
var zi = {}, Lh = new tr();
function Lr(r) {
  let e = /* @__PURE__ */ r.toString();
  if (zi.hasOwnProperty(e)) return zi[e];
  {
    let t = /* @__PURE__ */ Lh.pattern(e);
    return zi[e] = t, t;
  }
}
m$1(Lr, "getRegExpAst");
function Lc() {
  zi = {};
}
m$1(Lc, "clearRegExpParserCache");
var $c = "Complement Sets are not supported for first char optimization", In = `Unable to use "first char" lexer optimizations:
`;
function Pc(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  try {
    let t = /* @__PURE__ */ Lr(r);
    return Lo(t.value, {}, t.flags.ignoreCase);
  } catch (t) {
    if (t.message === $c) e && An(`${In}	Unable to optimize: < ${r.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
    else {
      let n2 = "";
      e && (n2 = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), _r(`${In}
	Failed parsing: < ${r.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + n2);
    }
  }
  return [];
}
m$1(Pc, "getOptimizedStartCodesIndices");
function Lo(r, e, t) {
  switch (r.type) {
    case "Disjunction":
      for (let i = 0; i < r.value.length; i++) Lo(r.value[i], e, t);
      break;
    case "Alternative":
      let n2 = r.value;
      for (let i = 0; i < n2.length; i++) {
        let s = n2[i];
        switch (s.type) {
          case "EndAnchor":
          case "GroupBackReference":
          case "Lookahead":
          case "NegativeLookahead":
          case "StartAnchor":
          case "WordBoundary":
          case "NonWordBoundary":
            continue;
        }
        let o2 = s;
        switch (o2.type) {
          case "Character":
            qi(o2.value, e, t);
            break;
          case "Set":
            if (o2.complement === true) throw Error($c);
            Zr$1(o2.value, (c) => {
              if (typeof c == "number") qi(c, e, t);
              else {
                let u = c;
                if (t === true) for (let f = u.from; f <= u.to; f++) qi(f, e, t);
                else {
                  for (let f = u.from; f <= u.to && f < Or; f++) qi(f, e, t);
                  if (u.to >= Or) {
                    let f = u.from >= Or ? u.from : Or, d = u.to, p2 = /* @__PURE__ */ ct(f), h2 = /* @__PURE__ */ ct(d);
                    for (let g = p2; g <= h2; g++) e[g] = g;
                  }
                }
              }
            });
            break;
          case "Group":
            Lo(o2.value, e, t);
            break;
          default:
            throw Error("Non Exhaustive Match");
        }
        let l = o2.quantifier !== void 0 && o2.quantifier.atLeast === 0;
        if (o2.type === "Group" && Oo(o2) === false || o2.type !== "Group" && l === false) break;
      }
      break;
    default:
      throw Error("non exhaustive match!");
  }
  return Xr$1(e);
}
m$1(Lo, "firstCharOptimizedIndices");
function qi(r, e, t) {
  let n2 = /* @__PURE__ */ ct(r);
  e[n2] = n2, t === true && Oh(r, e);
}
m$1(qi, "addOptimizedIdxToResult");
function Oh(r, e) {
  let t = /* @__PURE__ */ String.fromCharCode(r), n2 = /* @__PURE__ */ t.toUpperCase();
  if (n2 !== t) {
    let i = /* @__PURE__ */ ct(/* @__PURE__ */ n2.charCodeAt(0));
    e[i] = i;
  } else {
    let i = /* @__PURE__ */ t.toLowerCase();
    if (i !== t) {
      let s = /* @__PURE__ */ ct(/* @__PURE__ */ i.charCodeAt(0));
      e[s] = s;
    }
  }
}
m$1(Oh, "handleIgnoreCase");
function Oc(r, e) {
  return Ki$1(r.value, (t) => {
    if (typeof t == "number") return pm$1(e, t);
    {
      let n2 = t;
      return Ki$1(e, (i) => n2.from <= i && i <= n2.to) !== void 0;
    }
  });
}
m$1(Oc, "findCode");
function Oo(r) {
  let e = r.quantifier;
  return e && e.atLeast === 0 ? true : r.value ? N(r.value) ? Ui$1(r.value, Oo) : Oo(r.value) : false;
}
m$1(Oo, "isWholeOptional");
var $o = (_w = class extends lt {
  constructor(e) {
    super(), this.targetCharCodes = e, this.found = false;
  }
  visitChildren(e) {
    if (this.found !== true) {
      switch (e.type) {
        case "Lookahead":
          this.visitLookahead(e);
          return;
        case "NegativeLookahead":
          this.visitNegativeLookahead(e);
          return;
      }
      super.visitChildren(e);
    }
  }
  visitCharacter(e) {
    pm$1(this.targetCharCodes, e.value) && (this.found = true);
  }
  visitSet(e) {
    e.complement ? Oc(e, this.targetCharCodes) === void 0 && (this.found = true) : Oc(e, this.targetCharCodes) !== void 0 && (this.found = true);
  }
}, __23 = new WeakMap(), __privateAdd(_w, __23, m$1(_w, "CharCodeFinder")), _w);
function Xi(r, e) {
  if (e instanceof RegExp) {
    let t = /* @__PURE__ */ Lr(e), n2 = new $o(r);
    return n2.visit(t), n2.found;
  } else return Ki$1(e, (t) => pm$1(r, /* @__PURE__ */ t.charCodeAt(0))) !== void 0;
}
m$1(Xi, "canMatchCharCode");
var or = "PATTERN", $r = "defaultMode", Yi = "modes", bo = typeof new RegExp("(?:)").sticky == "boolean";
function Dc(r, e) {
  e = /* @__PURE__ */ Nf$1(e, {
    useSticky: bo,
    debug: false,
    safeMode: false,
    positionTracking: "full",
    lineTerminatorCharacters: [
      "\r",
      `
`
    ],
    tracer: /* @__PURE__ */ m$1((A, x) => x(), "tracer")
  });
  let t = e.tracer;
  t("initCharCodeToOptimizedIndexMap", () => {
    Yh();
  });
  let n2;
  t("Reject Lexer.NA", () => {
    n2 = /* @__PURE__ */ Qm$1(r, (A) => A[or] === le.NA);
  });
  let i = false, s;
  t("Transform Patterns", () => {
    i = false, s = /* @__PURE__ */ Jr(n2, (A) => {
      let x = A[or];
      if (cm$1(x)) {
        let P = x.source;
        return P.length === 1 && P !== "^" && P !== "$" && P !== "." && !x.ignoreCase ? P : P.length === 2 && P[0] === "\\" && !pm$1([
          "d",
          "D",
          "s",
          "S",
          "t",
          "r",
          "n",
          "t",
          "0",
          "c",
          "b",
          "B",
          "f",
          "v",
          "w",
          "W"
        ], P[1]) ? P[1] : e.useSticky ? Mc(x) : bc(x);
      } else {
        if (T(x)) return i = true, {
          exec: x
        };
        if (typeof x == "object") return i = true, x;
        if (typeof x == "string") {
          if (x.length === 1) return x;
          {
            let P = /* @__PURE__ */ x.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), b = new RegExp(P);
            return e.useSticky ? Mc(b) : bc(b);
          }
        } else throw Error("non exhaustive match");
      }
    });
  });
  let o2, l, c, u, f;
  t("misc mapping", () => {
    o2 = /* @__PURE__ */ Jr(n2, (A) => A.tokenTypeIdx), l = /* @__PURE__ */ Jr(n2, (A) => {
      let x = A.GROUP;
      if (x !== le.SKIPPED) {
        if (pr$1(x)) return x;
        if (sn$1(x)) return false;
        throw Error("non exhaustive match");
      }
    }), c = /* @__PURE__ */ Jr(n2, (A) => {
      let x = A.LONGER_ALT;
      if (x) return N(x) ? Jr(x, (b) => lm$1(n2, b)) : [
        /* @__PURE__ */ lm$1(n2, x)
      ];
    }), u = /* @__PURE__ */ Jr(n2, (A) => A.PUSH_MODE), f = /* @__PURE__ */ Jr(n2, (A) => fm$1(A, "POP_MODE"));
  });
  let d;
  t("Line Terminator Handling", () => {
    let A = /* @__PURE__ */ Kc(e.lineTerminatorCharacters);
    d = /* @__PURE__ */ Jr(n2, (x) => false), e.positionTracking !== "onlyOffset" && (d = /* @__PURE__ */ Jr(n2, (x) => fm$1(x, "LINE_BREAKS") ? !!x.LINE_BREAKS : Vc(x, A) === false && Xi(A, x.PATTERN)));
  });
  let p2, h2, g, T$1;
  t("Misc Mapping #2", () => {
    p2 = /* @__PURE__ */ Jr(n2, Wc), h2 = /* @__PURE__ */ Jr(s, qh), g = /* @__PURE__ */ Rn$1(n2, (A, x) => {
      let P = x.GROUP;
      return pr$1(P) && P !== le.SKIPPED && (A[P] = []), A;
    }, {}), T$1 = /* @__PURE__ */ Jr(s, (A, x) => ({
      pattern: s[x],
      longerAlt: c[x],
      canLineTerminator: d[x],
      isCustom: p2[x],
      short: h2[x],
      group: l[x],
      push: u[x],
      pop: f[x],
      tokenTypeIdx: o2[x],
      tokenType: n2[x]
    }));
  });
  let k = true, R = [];
  return e.safeMode || t("First Char Optimization", () => {
    R = /* @__PURE__ */ Rn$1(n2, (A, x, P) => {
      if (typeof x.PATTERN == "string") {
        let b = /* @__PURE__ */ x.PATTERN.charCodeAt(0), xe = /* @__PURE__ */ ct(b);
        Po(A, xe, T$1[P]);
      } else if (N(x.START_CHARS_HINT)) {
        let b;
        Zr$1(x.START_CHARS_HINT, (xe) => {
          let Rr = typeof xe == "string" ? xe.charCodeAt(0) : xe, ve = /* @__PURE__ */ ct(Rr);
          b !== ve && (b = ve, Po(A, ve, T$1[P]));
        });
      } else if (cm$1(x.PATTERN)) if (x.PATTERN.unicode) k = false, e.ensureOptimizations && _r(`${In}	Unable to analyze < ${x.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
      else {
        let b = /* @__PURE__ */ Pc(x.PATTERN, e.ensureOptimizations);
        Cr$1(b) && (k = false), Zr$1(b, (xe) => {
          Po(A, xe, T$1[P]);
        });
      }
      else e.ensureOptimizations && _r(`${In}	TokenType: <${x.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), k = false;
      return A;
    }, []);
  }), {
    emptyGroups: g,
    patternIdxToConfig: T$1,
    charCodeToPatternIdxToConfig: R,
    hasCustom: i,
    canBeOptimized: k
  };
}
m$1(Dc, "analyzeTokenTypes");
function Fc(r, e) {
  let t = [], n2 = /* @__PURE__ */ Ph(r);
  t = /* @__PURE__ */ t.concat(n2.errors);
  let i = /* @__PURE__ */ bh(n2.valid), s = i.valid;
  return t = /* @__PURE__ */ t.concat(i.errors), t = /* @__PURE__ */ t.concat(/* @__PURE__ */ $h(s)), t = /* @__PURE__ */ t.concat(/* @__PURE__ */ jh(s)), t = /* @__PURE__ */ t.concat(/* @__PURE__ */ Vh(s, e)), t = /* @__PURE__ */ t.concat(/* @__PURE__ */ Kh(s)), t;
}
m$1(Fc, "validatePatterns");
function $h(r) {
  let e = [], t = /* @__PURE__ */ fn$1(r, (n2) => cm$1(n2[or]));
  return e = /* @__PURE__ */ e.concat(/* @__PURE__ */ Dh(t)), e = /* @__PURE__ */ e.concat(/* @__PURE__ */ Gh(t)), e = /* @__PURE__ */ e.concat(/* @__PURE__ */ Bh(t)), e = /* @__PURE__ */ e.concat(/* @__PURE__ */ Wh(t)), e = /* @__PURE__ */ e.concat(/* @__PURE__ */ Fh(t)), e;
}
m$1($h, "validateRegExpPattern");
function Ph(r) {
  let e = /* @__PURE__ */ fn$1(r, (i) => !fm$1(i, or)), t = /* @__PURE__ */ Jr(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- missing static 'PATTERN' property",
    type: ne.MISSING_PATTERN,
    tokenTypes: [
      i
    ]
  })), n2 = /* @__PURE__ */ Ri$1(r, e);
  return {
    errors: t,
    valid: n2
  };
}
m$1(Ph, "findMissingPatterns");
function bh(r) {
  let e = /* @__PURE__ */ fn$1(r, (i) => {
    let s = i[or];
    return !cm$1(s) && !T(s) && !fm$1(s, "exec") && !pr$1(s);
  }), t = /* @__PURE__ */ Jr(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
    type: ne.INVALID_PATTERN,
    tokenTypes: [
      i
    ]
  })), n2 = /* @__PURE__ */ Ri$1(r, e);
  return {
    errors: t,
    valid: n2
  };
}
m$1(bh, "findInvalidPatterns");
var Mh = /[^\\][$]/;
function Dh(r) {
  var __128;
  const _e3 = class _e3 extends lt {
    constructor() {
      super(...arguments), this.found = false;
    }
    visitEndAnchor(s) {
      this.found = true;
    }
  };
  __128 = new WeakMap();
  __privateAdd(_e3, __128, m$1(_e3, "EndAnchorFinder"));
  let e = _e3;
  let t = /* @__PURE__ */ fn$1(r, (i) => {
    let s = i.PATTERN;
    try {
      let o2 = /* @__PURE__ */ Lr(s), l = new e();
      return l.visit(o2), l.found;
    } catch {
      return Mh.test(s.source);
    }
  });
  return Jr(t, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: ne.EOI_ANCHOR_FOUND,
    tokenTypes: [
      i
    ]
  }));
}
m$1(Dh, "findEndOfInputAnchor");
function Fh(r) {
  let e = /* @__PURE__ */ fn$1(r, (n2) => n2.PATTERN.test(""));
  return Jr(e, (n2) => ({
    message: "Token Type: ->" + n2.name + "<- static 'PATTERN' must not match an empty string",
    type: ne.EMPTY_MATCH_PATTERN,
    tokenTypes: [
      n2
    ]
  }));
}
m$1(Fh, "findEmptyMatchRegExps");
var Uh = /[^\\[][\^]|^\^/;
function Gh(r) {
  var __128;
  const _e3 = class _e3 extends lt {
    constructor() {
      super(...arguments), this.found = false;
    }
    visitStartAnchor(s) {
      this.found = true;
    }
  };
  __128 = new WeakMap();
  __privateAdd(_e3, __128, m$1(_e3, "StartAnchorFinder"));
  let e = _e3;
  let t = /* @__PURE__ */ fn$1(r, (i) => {
    let s = i.PATTERN;
    try {
      let o2 = /* @__PURE__ */ Lr(s), l = new e();
      return l.visit(o2), l.found;
    } catch {
      return Uh.test(s.source);
    }
  });
  return Jr(t, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: ne.SOI_ANCHOR_FOUND,
    tokenTypes: [
      i
    ]
  }));
}
m$1(Gh, "findStartOfInputAnchor");
function Bh(r) {
  let e = /* @__PURE__ */ fn$1(r, (n2) => {
    let i = n2[or];
    return i instanceof RegExp && (i.multiline || i.global);
  });
  return Jr(e, (n2) => ({
    message: "Token Type: ->" + n2.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
    type: ne.UNSUPPORTED_FLAGS_FOUND,
    tokenTypes: [
      n2
    ]
  }));
}
m$1(Bh, "findUnsupportedFlags");
function Wh(r) {
  let e = [], t = /* @__PURE__ */ Jr(r, (s) => Rn$1(r, (o2, l) => (s.PATTERN.source === l.PATTERN.source && !pm$1(e, l) && l.PATTERN !== le.NA && (e.push(l), o2.push(l)), o2), []));
  t = /* @__PURE__ */ Ai$1(t);
  let n2 = /* @__PURE__ */ fn$1(t, (s) => s.length > 1);
  return Jr(n2, (s) => {
    let o2 = /* @__PURE__ */ Jr(s, (c) => c.name);
    return {
      message: `The same RegExp pattern ->${De$1(s).PATTERN}<-has been used in all of the following Token Types: ${o2.join(", ")} <-`,
      type: ne.DUPLICATE_PATTERNS_FOUND,
      tokenTypes: s
    };
  });
}
m$1(Wh, "findDuplicatePatterns");
function jh(r) {
  let e = /* @__PURE__ */ fn$1(r, (n2) => {
    if (!fm$1(n2, "GROUP")) return false;
    let i = n2.GROUP;
    return i !== le.SKIPPED && i !== le.NA && !pr$1(i);
  });
  return Jr(e, (n2) => ({
    message: "Token Type: ->" + n2.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
    type: ne.INVALID_GROUP_TYPE_FOUND,
    tokenTypes: [
      n2
    ]
  }));
}
m$1(jh, "findInvalidGroupType");
function Vh(r, e) {
  let t = /* @__PURE__ */ fn$1(r, (i) => i.PUSH_MODE !== void 0 && !pm$1(e, i.PUSH_MODE));
  return Jr(t, (i) => ({
    message: `Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,
    type: ne.PUSH_MODE_DOES_NOT_EXIST,
    tokenTypes: [
      i
    ]
  }));
}
m$1(Vh, "findModesThatDoNotExist");
function Kh(r) {
  let e = [], t = /* @__PURE__ */ Rn$1(r, (n2, i, s) => {
    let o2 = i.PATTERN;
    return o2 === le.NA || (pr$1(o2) ? n2.push({
      str: o2,
      idx: s,
      tokenType: i
    }) : cm$1(o2) && zh(o2) && n2.push({
      str: o2.source,
      idx: s,
      tokenType: i
    })), n2;
  }, []);
  return Zr$1(r, (n2, i) => {
    Zr$1(t, (param) => {
      let { str: s, idx: o2, tokenType: l } = param;
      if (i < o2 && Hh(s, n2.PATTERN)) {
        let c = `Token: ->${l.name}<- can never be matched.
Because it appears AFTER the Token Type ->${n2.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
        e.push({
          message: c,
          type: ne.UNREACHABLE_PATTERN,
          tokenTypes: [
            n2,
            l
          ]
        });
      }
    });
  }), e;
}
m$1(Kh, "findUnreachablePatterns");
function Hh(r, e) {
  if (cm$1(e)) {
    let t = /* @__PURE__ */ e.exec(r);
    return t !== null && t.index === 0;
  } else {
    if (T(e)) return e(r, 0, [], {});
    if (fm$1(e, "exec")) return e.exec(r, 0, [], {});
    if (typeof e == "string") return e === r;
    throw Error("non exhaustive match");
  }
}
m$1(Hh, "testTokenType");
function zh(r) {
  return Ki$1([
    ".",
    "\\",
    "[",
    "]",
    "|",
    "^",
    "$",
    "(",
    ")",
    "?",
    "*",
    "+",
    "{"
  ], (t) => r.source.indexOf(t) !== -1) === void 0;
}
m$1(zh, "noMetaChar");
function bc(r) {
  let e = r.ignoreCase ? "i" : "";
  return new RegExp(`^(?:${r.source})`, e);
}
m$1(bc, "addStartOfInput");
function Mc(r) {
  let e = r.ignoreCase ? "iy" : "y";
  return new RegExp(`${r.source}`, e);
}
m$1(Mc, "addStickyFlag");
function Uc(r, e, t) {
  let n2 = [];
  return fm$1(r, $r) || n2.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + $r + `> property in its definition
`,
    type: ne.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
  }), fm$1(r, Yi) || n2.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + Yi + `> property in its definition
`,
    type: ne.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
  }), fm$1(r, Yi) && fm$1(r, $r) && !fm$1(r.modes, r.defaultMode) && n2.push({
    message: `A MultiMode Lexer cannot be initialized with a ${$r}: <${r.defaultMode}>which does not exist
`,
    type: ne.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
  }), fm$1(r, Yi) && Zr$1(r.modes, (i, s) => {
    Zr$1(i, (o2, l) => {
      if (sn$1(o2)) n2.push({
        message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${s}> at index: <${l}>
`,
        type: ne.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
      });
      else if (fm$1(o2, "LONGER_ALT")) {
        let c = N(o2.LONGER_ALT) ? o2.LONGER_ALT : [
          o2.LONGER_ALT
        ];
        Zr$1(c, (u) => {
          !sn$1(u) && !pm$1(i, u) && n2.push({
            message: `A MultiMode Lexer cannot be initialized with a longer_alt <${u.name}> on token <${o2.name}> outside of mode <${s}>
`,
            type: ne.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
          });
        });
      }
    });
  }), n2;
}
m$1(Uc, "performRuntimeChecks");
function Gc(r, e, t) {
  let n2 = [], i = false, s = /* @__PURE__ */ Ai$1(/* @__PURE__ */ Qr(/* @__PURE__ */ Xr$1(r.modes))), o2 = /* @__PURE__ */ Qm$1(s, (c) => c[or] === le.NA), l = /* @__PURE__ */ Kc(t);
  return e && Zr$1(o2, (c) => {
    let u = /* @__PURE__ */ Vc(c, l);
    if (u !== false) {
      let d = {
        message: /* @__PURE__ */ Xh(c, u),
        type: u.issue,
        tokenType: c
      };
      n2.push(d);
    } else fm$1(c, "LINE_BREAKS") ? c.LINE_BREAKS === true && (i = true) : Xi(l, c.PATTERN) && (i = true);
  }), e && !i && n2.push({
    message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,
    type: ne.NO_LINE_BREAKS_FLAGS
  }), n2;
}
m$1(Gc, "performWarningRuntimeChecks");
function Bc(r) {
  let e = {}, t = /* @__PURE__ */ h(r);
  return Zr$1(t, (n2) => {
    let i = r[n2];
    if (N(i)) e[n2] = [];
    else throw Error("non exhaustive match");
  }), e;
}
m$1(Bc, "cloneEmptyGroups");
function Wc(r) {
  let e = r.PATTERN;
  if (cm$1(e)) return false;
  if (T(e)) return true;
  if (fm$1(e, "exec")) return true;
  if (pr$1(e)) return false;
  throw Error("non exhaustive match");
}
m$1(Wc, "isCustomPattern");
function qh(r) {
  return pr$1(r) && r.length === 1 ? r.charCodeAt(0) : false;
}
m$1(qh, "isShortPattern");
var jc = {
  test: /* @__PURE__ */ m$1(function(r) {
    let e = r.length;
    for (let t = this.lastIndex; t < e; t++) {
      let n2 = /* @__PURE__ */ r.charCodeAt(t);
      if (n2 === 10) return this.lastIndex = t + 1, true;
      if (n2 === 13) return r.charCodeAt(t + 1) === 10 ? this.lastIndex = t + 2 : this.lastIndex = t + 1, true;
    }
    return false;
  }, "test"),
  lastIndex: 0
};
function Vc(r, e) {
  if (fm$1(r, "LINE_BREAKS")) return false;
  if (cm$1(r.PATTERN)) {
    try {
      Xi(e, r.PATTERN);
    } catch (t) {
      return {
        issue: ne.IDENTIFY_TERMINATOR,
        errMsg: t.message
      };
    }
    return false;
  } else {
    if (pr$1(r.PATTERN)) return false;
    if (Wc(r)) return {
      issue: ne.CUSTOM_LINE_BREAK
    };
    throw Error("non exhaustive match");
  }
}
m$1(Vc, "checkLineBreaksIssues");
function Xh(r, e) {
  if (e.issue === ne.IDENTIFY_TERMINATOR) return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${r.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  if (e.issue === ne.CUSTOM_LINE_BREAK) return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${r.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  throw Error("non exhaustive match");
}
m$1(Xh, "buildLineBreakIssueMessage");
function Kc(r) {
  return Jr(r, (t) => pr$1(t) ? t.charCodeAt(0) : t);
}
m$1(Kc, "getCharCodes");
function Po(r, e, t) {
  r[e] === void 0 ? r[e] = [
    t
  ] : r[e].push(t);
}
m$1(Po, "addToMapOfArrays");
var Or = 256, Ji = [];
function ct(r) {
  return r < Or ? r : Ji[r];
}
m$1(ct, "charCodeToOptimizedIndex");
function Yh() {
  if (Cr$1(Ji)) {
    Ji = new Array(65536);
    for (let r = 0; r < 65536; r++) Ji[r] = r > 255 ? 255 + ~~(r / 255) : r;
  }
}
m$1(Yh, "initCharCodeToOptimizedIndexMap");
function kt(r, e) {
  let t = r.tokenTypeIdx;
  return t === e.tokenTypeIdx ? true : e.isParent === true && e.categoryMatchesMap[t] === true;
}
m$1(kt, "tokenStructuredMatcher");
function Pr(r, e) {
  return r.tokenTypeIdx === e.tokenTypeIdx;
}
m$1(Pr, "tokenStructuredMatcherNoCategories");
var Hc = 1, qc = {};
function It(r) {
  let e = /* @__PURE__ */ Jh(r);
  Qh(e), ep(e), Zh(e), Zr$1(e, (t) => {
    t.isParent = t.categoryMatches.length > 0;
  });
}
m$1(It, "augmentTokenTypes");
function Jh(r) {
  let e = /* @__PURE__ */ _f$1(r), t = r, n2 = true;
  for (; n2; ) {
    t = /* @__PURE__ */ Ai$1(/* @__PURE__ */ Qr(/* @__PURE__ */ Jr(t, (s) => s.CATEGORIES)));
    let i = /* @__PURE__ */ Ri$1(t, e);
    e = /* @__PURE__ */ e.concat(i), Cr$1(i) ? n2 = false : t = i;
  }
  return e;
}
m$1(Jh, "expandCategories");
function Qh(r) {
  Zr$1(r, (e) => {
    Mo(e) || (qc[Hc] = e, e.tokenTypeIdx = Hc++), zc(e) && !N(e.CATEGORIES) && (e.CATEGORIES = [
      e.CATEGORIES
    ]), zc(e) || (e.CATEGORIES = []), tp(e) || (e.categoryMatches = []), rp(e) || (e.categoryMatchesMap = {});
  });
}
m$1(Qh, "assignTokenDefaultProps");
function Zh(r) {
  Zr$1(r, (e) => {
    e.categoryMatches = [], Zr$1(e.categoryMatchesMap, (t, n2) => {
      e.categoryMatches.push(qc[n2].tokenTypeIdx);
    });
  });
}
m$1(Zh, "assignCategoriesTokensProp");
function ep(r) {
  Zr$1(r, (e) => {
    Xc([], e);
  });
}
m$1(ep, "assignCategoriesMapProp");
function Xc(r, e) {
  Zr$1(r, (t) => {
    e.categoryMatchesMap[t.tokenTypeIdx] = true;
  }), Zr$1(e.CATEGORIES, (t) => {
    let n2 = /* @__PURE__ */ r.concat(e);
    pm$1(n2, t) || Xc(n2, t);
  });
}
m$1(Xc, "singleAssignCategoriesToksMap");
function Mo(r) {
  return fm$1(r, "tokenTypeIdx");
}
m$1(Mo, "hasShortKeyProperty");
function zc(r) {
  return fm$1(r, "CATEGORIES");
}
m$1(zc, "hasCategoriesProperty");
function tp(r) {
  return fm$1(r, "categoryMatches");
}
m$1(tp, "hasExtendingTokensTypesProperty");
function rp(r) {
  return fm$1(r, "categoryMatchesMap");
}
m$1(rp, "hasExtendingTokensTypesMapProperty");
function Yc(r) {
  return fm$1(r, "tokenTypeIdx");
}
m$1(Yc, "isTokenType");
var Do = {
  buildUnableToPopLexerModeMessage(r) {
    return `Unable to pop Lexer Mode after encountering Token ->${r.image}<- The Mode Stack is empty`;
  },
  buildUnexpectedCharactersMessage(r, e, t, n2, i) {
    return `unexpected character: ->${r.charAt(e)}<- at offset: ${e}, skipped ${t} characters.`;
  }
};
var ne;
(function(r) {
  r[r.MISSING_PATTERN = 0] = "MISSING_PATTERN", r[r.INVALID_PATTERN = 1] = "INVALID_PATTERN", r[r.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", r[r.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", r[r.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", r[r.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", r[r.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", r[r.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", r[r.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", r[r.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", r[r.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", r[r.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", r[r.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", r[r.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", r[r.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", r[r.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", r[r.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", r[r.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(ne || (ne = {}));
var Nn = {
  deferDefinitionErrorsHandling: false,
  positionTracking: "full",
  lineTerminatorsPattern: /\n|\r\n?/g,
  lineTerminatorCharacters: [
    `
`,
    "\r"
  ],
  ensureOptimizations: false,
  safeMode: false,
  errorMessageProvider: Do,
  traceInitPerf: false,
  skipValidations: false,
  recoveryEnabled: true
};
Object.freeze(Nn);
var le = (_x = class {
  constructor(e, t = Nn) {
    if (this.lexerDefinition = e, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = true, this.trackEndLines = true, this.hasCustom = false, this.canModeBeOptimized = {}, this.TRACE_INIT = (i, s) => {
      if (this.traceInitPerf === true) {
        this.traceInitIndent++;
        let o2 = /* @__PURE__ */ new Array(this.traceInitIndent + 1).join("	");
        this.traceInitIndent < this.traceInitMaxIdent && console.log(`${o2}--> <${i}>`);
        let { time: l, value: c } = vn(s), u = l > 10 ? console.warn : console.log;
        return this.traceInitIndent < this.traceInitMaxIdent && u(`${o2}<-- <${i}> time: ${l}ms`), this.traceInitIndent--, c;
      } else return s();
    }, typeof t == "boolean") throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
    this.config = /* @__PURE__ */ fi$1({}, Nn, t);
    let n2 = this.config.traceInitPerf;
    n2 === true ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = true) : typeof n2 == "number" && (this.traceInitMaxIdent = n2, this.traceInitPerf = true), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", () => {
      let i, s = true;
      this.TRACE_INIT("Lexer Config handling", () => {
        if (this.config.lineTerminatorsPattern === Nn.lineTerminatorsPattern) this.config.lineTerminatorsPattern = jc;
        else if (this.config.lineTerminatorCharacters === Nn.lineTerminatorCharacters) throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
        if (t.safeMode && t.ensureOptimizations) throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
        this.trackStartLines = /* @__PURE__ */ /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /* @__PURE__ */ /full/i.test(this.config.positionTracking), N(e) ? i = {
          modes: {
            defaultMode: /* @__PURE__ */ _f$1(e)
          },
          defaultMode: $r
        } : (s = false, i = /* @__PURE__ */ _f$1(e));
      }), this.config.skipValidations === false && (this.TRACE_INIT("performRuntimeChecks", () => {
        this.lexerDefinitionErrors = /* @__PURE__ */ this.lexerDefinitionErrors.concat(/* @__PURE__ */ Uc(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      }), this.TRACE_INIT("performWarningRuntimeChecks", () => {
        this.lexerDefinitionWarning = /* @__PURE__ */ this.lexerDefinitionWarning.concat(/* @__PURE__ */ Gc(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      })), i.modes = i.modes ? i.modes : {}, Zr$1(i.modes, (l, c) => {
        i.modes[c] = /* @__PURE__ */ Qm$1(l, (u) => sn$1(u));
      });
      let o2 = /* @__PURE__ */ h(i.modes);
      if (Zr$1(i.modes, (l, c) => {
        this.TRACE_INIT(`Mode: <${c}> processing`, () => {
          if (this.modes.push(c), this.config.skipValidations === false && this.TRACE_INIT("validatePatterns", () => {
            this.lexerDefinitionErrors = /* @__PURE__ */ this.lexerDefinitionErrors.concat(/* @__PURE__ */ Fc(l, o2));
          }), Cr$1(this.lexerDefinitionErrors)) {
            It(l);
            let u;
            this.TRACE_INIT("analyzeTokenTypes", () => {
              u = /* @__PURE__ */ Dc(l, {
                lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                positionTracking: t.positionTracking,
                ensureOptimizations: t.ensureOptimizations,
                safeMode: t.safeMode,
                tracer: this.TRACE_INIT
              });
            }), this.patternIdxToConfig[c] = u.patternIdxToConfig, this.charCodeToPatternIdxToConfig[c] = u.charCodeToPatternIdxToConfig, this.emptyGroups = /* @__PURE__ */ fi$1({}, this.emptyGroups, u.emptyGroups), this.hasCustom = u.hasCustom || this.hasCustom, this.canModeBeOptimized[c] = u.canBeOptimized;
          }
        });
      }), this.defaultMode = i.defaultMode, !Cr$1(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
        let c = /* @__PURE__ */ Jr(this.lexerDefinitionErrors, (u) => u.message).join(`-----------------------
`);
        throw new Error(`Errors detected in definition of Lexer:
` + c);
      }
      Zr$1(this.lexerDefinitionWarning, (l) => {
        An(l.message);
      }), this.TRACE_INIT("Choosing sub-methods implementations", () => {
        if (bo ? (this.chopInput = Y$1, this.match = this.matchWithTest) : (this.updateLastIndex = kr$1, this.match = this.matchWithExec), s && (this.handleModes = kr$1), this.trackStartLines === false && (this.computeNewColumn = Y$1), this.trackEndLines === false && (this.updateTokenEndLineColumnLocation = kr$1), /full/i.test(this.config.positionTracking)) this.createTokenInstance = this.createFullToken;
        else if (/onlyStart/i.test(this.config.positionTracking)) this.createTokenInstance = this.createStartOnlyToken;
        else if (/onlyOffset/i.test(this.config.positionTracking)) this.createTokenInstance = this.createOffsetOnlyToken;
        else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
        this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
      }), this.TRACE_INIT("Failed Optimization Warnings", () => {
        let l = /* @__PURE__ */ Rn$1(this.canModeBeOptimized, (c, u, f) => (u === false && c.push(f), c), []);
        if (t.ensureOptimizations && !Cr$1(l)) throw Error(`Lexer Modes: < ${l.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
      }), this.TRACE_INIT("clearRegExpParserCache", () => {
        Lc();
      }), this.TRACE_INIT("toFastProperties", () => {
        kn(this);
      });
    });
  }
  tokenize(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.defaultMode;
    if (!Cr$1(this.lexerDefinitionErrors)) {
      let i = /* @__PURE__ */ Jr(this.lexerDefinitionErrors, (s) => s.message).join(`-----------------------
`);
      throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
` + i);
    }
    return this.tokenizeInternal(e, t);
  }
  tokenizeInternal(e, t) {
    let n2, i, s, o2, l, c, u, f, d, p2, h2, g, T2, R, A, x = e, P = x.length, b = 0, xe = 0, Rr = this.hasCustom ? 0 : Math.floor(e.length / 10), ve = new Array(Rr), Lt = [], ht = this.trackStartLines ? 1 : void 0, v = this.trackStartLines ? 1 : void 0, y = /* @__PURE__ */ Bc(this.emptyGroups), C = this.trackStartLines, S = this.config.lineTerminatorsPattern, V = 0, $ = [], O = [], Le = [], Oe = [];
    Object.freeze(Oe);
    let ee;
    function Wt() {
      return $;
    }
    m$1(Wt, "getPossiblePatternsSlow");
    function Zl(ke) {
      let Xe = /* @__PURE__ */ ct(ke), Er = O[Xe];
      return Er === void 0 ? Oe : Er;
    }
    m$1(Zl, "getPossiblePatternsOptimized");
    let Bd = /* @__PURE__ */ m$1((ke) => {
      if (Le.length === 1 && ke.tokenType.PUSH_MODE === void 0) {
        let Xe = /* @__PURE__ */ this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(ke);
        Lt.push({
          offset: ke.startOffset,
          line: ke.startLine,
          column: ke.startColumn,
          length: ke.image.length,
          message: Xe
        });
      } else {
        Le.pop();
        let Xe = /* @__PURE__ */ Df$1(Le);
        $ = this.patternIdxToConfig[Xe], O = this.charCodeToPatternIdxToConfig[Xe], V = $.length;
        let Er = this.canModeBeOptimized[Xe] && this.config.safeMode === false;
        O && Er ? ee = Zl : ee = Wt;
      }
    }, "pop_mode");
    function ec(ke) {
      Le.push(ke), O = this.charCodeToPatternIdxToConfig[ke], $ = this.patternIdxToConfig[ke], V = $.length, V = $.length;
      let Xe = this.canModeBeOptimized[ke] && this.config.safeMode === false;
      O && Xe ? ee = Zl : ee = Wt;
    }
    m$1(ec, "push_mode"), ec.call(this, t);
    let Ze, tc = this.config.recoveryEnabled;
    for (; b < P; ) {
      c = null;
      let ke = /* @__PURE__ */ x.charCodeAt(b), Xe = /* @__PURE__ */ ee(ke), Er = Xe.length;
      for (n2 = 0; n2 < Er; n2++) {
        Ze = Xe[n2];
        let je = Ze.pattern;
        u = null;
        let pt = Ze.short;
        if (pt !== false ? ke === pt && (c = je) : Ze.isCustom === true ? (A = /* @__PURE__ */ je.exec(x, b, ve, y), A !== null ? (c = A[0], A.payload !== void 0 && (u = A.payload)) : c = null) : (this.updateLastIndex(je, b), c = /* @__PURE__ */ this.match(je, e, b)), c !== null) {
          if (l = Ze.longerAlt, l !== void 0) {
            let Ot = l.length;
            for (s = 0; s < Ot; s++) {
              let mt = $[l[s]], jt = mt.pattern;
              if (f = null, mt.isCustom === true ? (A = /* @__PURE__ */ jt.exec(x, b, ve, y), A !== null ? (o2 = A[0], A.payload !== void 0 && (f = A.payload)) : o2 = null) : (this.updateLastIndex(jt, b), o2 = /* @__PURE__ */ this.match(jt, e, b)), o2 && o2.length > c.length) {
                c = o2, u = f, Ze = mt;
                break;
              }
            }
          }
          break;
        }
      }
      if (c !== null) {
        if (d = c.length, p2 = Ze.group, p2 !== void 0 && (h2 = Ze.tokenTypeIdx, g = /* @__PURE__ */ this.createTokenInstance(c, b, h2, Ze.tokenType, ht, v, d), this.handlePayload(g, u), p2 === false ? xe = /* @__PURE__ */ this.addToken(ve, xe, g) : y[p2].push(g)), e = /* @__PURE__ */ this.chopInput(e, d), b = b + d, v = /* @__PURE__ */ this.computeNewColumn(v, d), C === true && Ze.canLineTerminator === true) {
          let je = 0, pt, Ot;
          S.lastIndex = 0;
          do
            pt = /* @__PURE__ */ S.test(c), pt === true && (Ot = S.lastIndex - 1, je++);
          while (pt === true);
          je !== 0 && (ht = ht + je, v = d - Ot, this.updateTokenEndLineColumnLocation(g, p2, Ot, je, ht, v, d));
        }
        this.handleModes(Ze, Bd, ec, g);
      } else {
        let je = b, pt = ht, Ot = v, mt = tc === false;
        for (; mt === false && b < P; ) for (e = /* @__PURE__ */ this.chopInput(e, 1), b++, i = 0; i < V; i++) {
          let jt = $[i], Xs = jt.pattern, rc = jt.short;
          if (rc !== false ? x.charCodeAt(b) === rc && (mt = true) : jt.isCustom === true ? mt = Xs.exec(x, b, ve, y) !== null : (this.updateLastIndex(Xs, b), mt = Xs.exec(e) !== null), mt === true) break;
        }
        if (T2 = b - je, v = /* @__PURE__ */ this.computeNewColumn(v, T2), R = /* @__PURE__ */ this.config.errorMessageProvider.buildUnexpectedCharactersMessage(x, je, T2, pt, Ot), Lt.push({
          offset: je,
          line: pt,
          column: Ot,
          length: T2,
          message: R
        }), tc === false) break;
      }
    }
    return this.hasCustom || (ve.length = xe), {
      tokens: ve,
      groups: y,
      errors: Lt
    };
  }
  handleModes(e, t, n2, i) {
    if (e.pop === true) {
      let s = e.push;
      t(i), s !== void 0 && n2.call(this, s);
    } else e.push !== void 0 && n2.call(this, e.push);
  }
  chopInput(e, t) {
    return e.substring(t);
  }
  updateLastIndex(e, t) {
    e.lastIndex = t;
  }
  updateTokenEndLineColumnLocation(e, t, n2, i, s, o2, l) {
    let c, u;
    t !== void 0 && (c = n2 === l - 1, u = c ? -1 : 0, i === 1 && c === true || (e.endLine = s + u, e.endColumn = o2 - 1 + -u));
  }
  computeNewColumn(e, t) {
    return e + t;
  }
  createOffsetOnlyToken(e, t, n2, i) {
    return {
      image: e,
      startOffset: t,
      tokenTypeIdx: n2,
      tokenType: i
    };
  }
  createStartOnlyToken(e, t, n2, i, s, o2) {
    return {
      image: e,
      startOffset: t,
      startLine: s,
      startColumn: o2,
      tokenTypeIdx: n2,
      tokenType: i
    };
  }
  createFullToken(e, t, n2, i, s, o2, l) {
    return {
      image: e,
      startOffset: t,
      endOffset: t + l - 1,
      startLine: s,
      endLine: s,
      startColumn: o2,
      endColumn: o2 + l - 1,
      tokenTypeIdx: n2,
      tokenType: i
    };
  }
  addTokenUsingPush(e, t, n2) {
    return e.push(n2), t;
  }
  addTokenUsingMemberAccess(e, t, n2) {
    return e[t] = n2, t++, t;
  }
  handlePayloadNoCustom(e, t) {
  }
  handlePayloadWithCustom(e, t) {
    t !== null && (e.payload = t);
  }
  matchWithTest(e, t, n2) {
    return e.test(t) === true ? t.substring(n2, e.lastIndex) : null;
  }
  matchWithExec(e, t) {
    let n2 = /* @__PURE__ */ e.exec(t);
    return n2 !== null ? n2[0] : null;
  }
}, __24 = new WeakMap(), __privateAdd(_x, __24, m$1(_x, "Lexer")), _x);
le.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
le.NA = /NOT_APPLICABLE/;
function Nt(r) {
  return Fo(r) ? r.LABEL : r.name;
}
m$1(Nt, "tokenLabel");
function Fo(r) {
  return pr$1(r.LABEL) && r.LABEL !== "";
}
m$1(Fo, "hasTokenLabel");
var np = "parent", Jc = "categories", Qc = "label", Zc = "group", eu = "push_mode", tu = "pop_mode", ru = "longer_alt", nu = "line_breaks", iu = "start_chars_hint";
function Qi(r) {
  return ip(r);
}
m$1(Qi, "createToken");
function ip(r) {
  let e = r.pattern, t = {};
  if (t.name = r.name, sn$1(e) || (t.PATTERN = e), fm$1(r, np)) throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
  return fm$1(r, Jc) && (t.CATEGORIES = r[Jc]), It([
    t
  ]), fm$1(r, Qc) && (t.LABEL = r[Qc]), fm$1(r, Zc) && (t.GROUP = r[Zc]), fm$1(r, tu) && (t.POP_MODE = r[tu]), fm$1(r, eu) && (t.PUSH_MODE = r[eu]), fm$1(r, ru) && (t.LONGER_ALT = r[ru]), fm$1(r, nu) && (t.LINE_BREAKS = r[nu]), fm$1(r, iu) && (t.START_CHARS_HINT = r[iu]), t;
}
m$1(ip, "createTokenInternal");
var qe = /* @__PURE__ */ Qi({
  name: "EOF",
  pattern: le.NA
});
It([
  qe
]);
function lr(r, e, t, n2, i, s, o2, l) {
  return {
    image: e,
    startOffset: t,
    endOffset: n2,
    startLine: i,
    endLine: s,
    startColumn: o2,
    endColumn: l,
    tokenTypeIdx: r.tokenTypeIdx,
    tokenType: r
  };
}
m$1(lr, "createTokenInstance");
function Sn(r, e) {
  return kt(r, e);
}
m$1(Sn, "tokenMatcher");
var St = {
  buildMismatchTokenMessage(param) {
    let { expected: r, actual: e, previous: t, ruleName: n2 } = param;
    return `Expecting ${Fo(r) ? `--> ${Nt(r)} <--` : `token of type --> ${r.name} <--`} but found --> '${e.image}' <--`;
  },
  buildNotAllInputParsedMessage(param) {
    let { firstRedundant: r, ruleName: e } = param;
    return "Redundant input, expecting EOF but found: " + r.image;
  },
  buildNoViableAltMessage(param) {
    let { expectedPathsPerAlt: r, actual: e, previous: t, customUserDescription: n2, ruleName: i } = param;
    let s = "Expecting: ", l = `
but found: '` + De$1(e).image + "'";
    if (n2) return s + n2 + l;
    {
      let c = /* @__PURE__ */ Rn$1(r, (p2, h2) => p2.concat(h2), []), u = /* @__PURE__ */ Jr(c, (p2) => `[${Jr(p2, (h2) => Nt(h2)).join(", ")}]`), d = `one of these possible Token sequences:
${Jr(u, (p2, h2) => `  ${h2 + 1}. ${p2}`).join(`
`)}`;
      return s + d + l;
    }
  },
  buildEarlyExitMessage(param) {
    let { expectedIterationPaths: r, actual: e, customUserDescription: t, ruleName: n2 } = param;
    let i = "Expecting: ", o2 = `
but found: '` + De$1(e).image + "'";
    if (t) return i + t + o2;
    {
      let c = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${Jr(r, (u) => `[${Jr(u, (f) => Nt(f)).join(",")}]`).join(" ,")}>`;
      return i + c + o2;
    }
  }
};
Object.freeze(St);
var su = {
  buildRuleNotFoundError(r, e) {
    return "Invalid grammar, reference to a rule which is not defined: ->" + e.nonTerminalName + `<-
inside top level rule: ->` + r.name + "<-";
  }
}, nt = {
  buildDuplicateFoundError(r, e) {
    function t(f) {
      return f instanceof D ? f.terminalType.name : f instanceof H ? f.nonTerminalName : "";
    }
    m$1(t, "getExtraProductionArgument");
    let n2 = r.name, i = /* @__PURE__ */ De$1(e), s = i.idx, o2 = /* @__PURE__ */ Be(i), l = /* @__PURE__ */ t(i), c = s > 0, u = `->${o2}${c ? s : ""}<- ${l ? `with argument: ->${l}<-` : ""}
                  appears more than once (${e.length} times) in the top level rule: ->${n2}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
    return u = /* @__PURE__ */ u.replace(/[ \t]+/g, " "), u = /* @__PURE__ */ u.replace(/\s\s+/g, `
`), u;
  },
  buildNamespaceConflictError(r) {
    return `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${r.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
  },
  buildAlternationPrefixAmbiguityError(r) {
    let e = /* @__PURE__ */ Jr(r.prefixPath, (i) => Nt(i)).join(", "), t = r.alternation.idx === 0 ? "" : r.alternation.idx;
    return `Ambiguous alternatives: <${r.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${t}> inside <${r.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
  },
  buildAlternationAmbiguityError(r) {
    let e = /* @__PURE__ */ Jr(r.prefixPath, (i) => Nt(i)).join(", "), t = r.alternation.idx === 0 ? "" : r.alternation.idx, n2 = `Ambiguous Alternatives Detected: <${r.ambiguityIndices.join(" ,")}> in <OR${t}> inside <${r.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
    return n2 = n2 + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, n2;
  },
  buildEmptyRepetitionError(r) {
    let e = /* @__PURE__ */ Be(r.repetition);
    return r.repetition.idx !== 0 && (e += r.repetition.idx), `The repetition <${e}> within Rule <${r.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
  },
  buildTokenNameError(r) {
    return "deprecated";
  },
  buildEmptyAlternationError(r) {
    return `Ambiguous empty alternative: <${r.emptyChoiceIdx + 1}> in <OR${r.alternation.idx}> inside <${r.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
  },
  buildTooManyAlternativesError(r) {
    return `An Alternation cannot have more than 256 alternatives:
<OR${r.alternation.idx}> inside <${r.topLevelRule.name}> Rule.
 has ${r.alternation.definition.length + 1} alternatives.`;
  },
  buildLeftRecursionError(r) {
    let e = r.topLevelRule.name, t = /* @__PURE__ */ Jr(r.leftRecursionPath, (s) => s.name), n2 = `${e} --> ${t.concat([
      e
    ]).join(" --> ")}`;
    return `Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${n2}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
  },
  buildInvalidRuleNameError(r) {
    return "deprecated";
  },
  buildDuplicateRuleNameError(r) {
    let e;
    return r.topLevelRule instanceof Me ? e = r.topLevelRule.name : e = r.topLevelRule, `Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${r.grammarName}<-`;
  }
};
function au(r, e) {
  let t = new Uo(r, e);
  return t.resolveRefs(), t.errors;
}
m$1(au, "resolveGrammar");
var Uo = (_y = class extends De {
  constructor(e, t) {
    super(), this.nameToTopRule = e, this.errMsgProvider = t, this.errors = [];
  }
  resolveRefs() {
    Zr$1(/* @__PURE__ */ Xr$1(this.nameToTopRule), (e) => {
      this.currTopLevel = e, e.accept(this);
    });
  }
  visitNonTerminal(e) {
    let t = this.nameToTopRule[e.nonTerminalName];
    if (t) e.referencedRule = t;
    else {
      let n2 = /* @__PURE__ */ this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e);
      this.errors.push({
        message: n2,
        type: ye.UNRESOLVED_SUBRULE_REF,
        ruleName: this.currTopLevel.name,
        unresolvedRefName: e.nonTerminalName
      });
    }
  }
}, __25 = new WeakMap(), __privateAdd(_y, __25, m$1(_y, "GastRefResolverVisitor")), _y);
var Go = (_z = class extends vt {
  constructor(e, t) {
    super(), this.topProd = e, this.path = t, this.possibleTokTypes = [], this.nextProductionName = "", this.nextProductionOccurrence = 0, this.found = false, this.isAtEndOfPath = false;
  }
  startWalking() {
    if (this.found = false, this.path.ruleStack[0] !== this.topProd.name) throw Error("The path does not start with the walker's top Rule!");
    return this.ruleStack = /* @__PURE__ */ _f$1(this.path.ruleStack).reverse(), this.occurrenceStack = /* @__PURE__ */ _f$1(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
  }
  walk(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    this.found || super.walk(e, t);
  }
  walkProdRef(e, t, n2) {
    if (e.referencedRule.name === this.nextProductionName && e.idx === this.nextProductionOccurrence) {
      let i = /* @__PURE__ */ t.concat(n2);
      this.updateExpectedNext(), this.walk(e.referencedRule, i);
    }
  }
  updateExpectedNext() {
    Cr$1(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = true) : (this.nextProductionName = /* @__PURE__ */ this.ruleStack.pop(), this.nextProductionOccurrence = /* @__PURE__ */ this.occurrenceStack.pop());
  }
}, __26 = new WeakMap(), __privateAdd(_z, __26, m$1(_z, "AbstractNextPossibleTokensWalker")), _z), Zi = (_A = class extends Go {
  constructor(e, t) {
    super(e, t), this.path = t, this.nextTerminalName = "", this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
  }
  walkTerminal(e, t, n2) {
    if (this.isAtEndOfPath && e.terminalType.name === this.nextTerminalName && e.idx === this.nextTerminalOccurrence && !this.found) {
      let i = /* @__PURE__ */ t.concat(n2), s = new J({
        definition: i
      });
      this.possibleTokTypes = /* @__PURE__ */ ar(s), this.found = true;
    }
  }
}, __27 = new WeakMap(), __privateAdd(_A, __27, m$1(_A, "NextAfterTokenWalker")), _A), br = (_B = class extends vt {
  constructor(e, t) {
    super(), this.topRule = e, this.occurrence = t, this.result = {
      token: void 0,
      occurrence: void 0,
      isEndOfRule: void 0
    };
  }
  startWalking() {
    return this.walk(this.topRule), this.result;
  }
}, __28 = new WeakMap(), __privateAdd(_B, __28, m$1(_B, "AbstractNextTerminalAfterProductionWalker")), _B), es = (_C = class extends br {
  walkMany(e, t, n2) {
    if (e.idx === this.occurrence) {
      let i = /* @__PURE__ */ De$1(/* @__PURE__ */ t.concat(n2));
      this.result.isEndOfRule = i === void 0, i instanceof D && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else super.walkMany(e, t, n2);
  }
}, __29 = new WeakMap(), __privateAdd(_C, __29, m$1(_C, "NextTerminalAfterManyWalker")), _C), Cn = (_D = class extends br {
  walkManySep(e, t, n2) {
    if (e.idx === this.occurrence) {
      let i = /* @__PURE__ */ De$1(/* @__PURE__ */ t.concat(n2));
      this.result.isEndOfRule = i === void 0, i instanceof D && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else super.walkManySep(e, t, n2);
  }
}, __30 = new WeakMap(), __privateAdd(_D, __30, m$1(_D, "NextTerminalAfterManySepWalker")), _D), ts = (_E = class extends br {
  walkAtLeastOne(e, t, n2) {
    if (e.idx === this.occurrence) {
      let i = /* @__PURE__ */ De$1(/* @__PURE__ */ t.concat(n2));
      this.result.isEndOfRule = i === void 0, i instanceof D && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else super.walkAtLeastOne(e, t, n2);
  }
}, __31 = new WeakMap(), __privateAdd(_E, __31, m$1(_E, "NextTerminalAfterAtLeastOneWalker")), _E), _n = (_F = class extends br {
  walkAtLeastOneSep(e, t, n2) {
    if (e.idx === this.occurrence) {
      let i = /* @__PURE__ */ De$1(/* @__PURE__ */ t.concat(n2));
      this.result.isEndOfRule = i === void 0, i instanceof D && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else super.walkAtLeastOneSep(e, t, n2);
  }
}, __32 = new WeakMap(), __privateAdd(_F, __32, m$1(_F, "NextTerminalAfterAtLeastOneSepWalker")), _F);
function rs(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  t = /* @__PURE__ */ _f$1(t);
  let n2 = [], i = 0;
  function s(l) {
    return l.concat(/* @__PURE__ */ Mi$1(r, i + 1));
  }
  m$1(s, "remainingPathWith");
  function o2(l) {
    let c = /* @__PURE__ */ rs(/* @__PURE__ */ s(l), e, t);
    return n2.concat(c);
  }
  for (m$1(o2, "getAlternativesForProd"); t.length < e && i < r.length; ) {
    let l = r[i];
    if (l instanceof J) return o2(l.definition);
    if (l instanceof H) return o2(l.definition);
    if (l instanceof z) n2 = /* @__PURE__ */ o2(l.definition);
    else if (l instanceof Q) {
      let c = /* @__PURE__ */ l.definition.concat([
        new F({
          definition: l.definition
        })
      ]);
      return o2(c);
    } else if (l instanceof Z) {
      let c = [
        new J({
          definition: l.definition
        }),
        new F({
          definition: /* @__PURE__ */ [
            new D({
              terminalType: l.separator
            })
          ].concat(l.definition)
        })
      ];
      return o2(c);
    } else if (l instanceof q) {
      let c = /* @__PURE__ */ l.definition.concat([
        new F({
          definition: /* @__PURE__ */ [
            new D({
              terminalType: l.separator
            })
          ].concat(l.definition)
        })
      ]);
      n2 = /* @__PURE__ */ o2(c);
    } else if (l instanceof F) {
      let c = /* @__PURE__ */ l.definition.concat([
        new F({
          definition: l.definition
        })
      ]);
      n2 = /* @__PURE__ */ o2(c);
    } else {
      if (l instanceof X) return Zr$1(l.definition, (c) => {
        Cr$1(c.definition) === false && (n2 = /* @__PURE__ */ o2(c.definition));
      }), n2;
      if (l instanceof D) t.push(l.terminalType);
      else throw Error("non exhaustive match");
    }
    i++;
  }
  return n2.push({
    partialPath: t,
    suffixDef: /* @__PURE__ */ Mi$1(r, i)
  }), n2;
}
m$1(rs, "possiblePathsFrom");
function ns(r, e, t, n2) {
  let i = "EXIT_NONE_TERMINAL", s = [
    i
  ], o2 = "EXIT_ALTERNATIVE", l = false, c = e.length, u = c - n2 - 1, f = [], d = [];
  for (d.push({
    idx: -1,
    def: r,
    ruleStack: [],
    occurrenceStack: []
  }); !Cr$1(d); ) {
    let p2 = /* @__PURE__ */ d.pop();
    if (p2 === o2) {
      l && Df$1(d).idx <= u && d.pop();
      continue;
    }
    let h2 = p2.def, g = p2.idx, T2 = p2.ruleStack, k = p2.occurrenceStack;
    if (Cr$1(h2)) continue;
    let R = h2[0];
    if (R === i) {
      let A = {
        idx: g,
        def: /* @__PURE__ */ Mi$1(h2),
        ruleStack: /* @__PURE__ */ _i$1(T2),
        occurrenceStack: /* @__PURE__ */ _i$1(k)
      };
      d.push(A);
    } else if (R instanceof D) if (g < c - 1) {
      let A = g + 1, x = e[A];
      if (t(x, R.terminalType)) {
        let P = {
          idx: A,
          def: /* @__PURE__ */ Mi$1(h2),
          ruleStack: T2,
          occurrenceStack: k
        };
        d.push(P);
      }
    } else if (g === c - 1) f.push({
      nextTokenType: R.terminalType,
      nextTokenOccurrence: R.idx,
      ruleStack: T2,
      occurrenceStack: k
    }), l = true;
    else throw Error("non exhaustive match");
    else if (R instanceof H) {
      let A = /* @__PURE__ */ _f$1(T2);
      A.push(R.nonTerminalName);
      let x = /* @__PURE__ */ _f$1(k);
      x.push(R.idx);
      let P = {
        idx: g,
        def: /* @__PURE__ */ R.definition.concat(s, /* @__PURE__ */ Mi$1(h2)),
        ruleStack: A,
        occurrenceStack: x
      };
      d.push(P);
    } else if (R instanceof z) {
      let A = {
        idx: g,
        def: /* @__PURE__ */ Mi$1(h2),
        ruleStack: T2,
        occurrenceStack: k
      };
      d.push(A), d.push(o2);
      let x = {
        idx: g,
        def: /* @__PURE__ */ R.definition.concat(/* @__PURE__ */ Mi$1(h2)),
        ruleStack: T2,
        occurrenceStack: k
      };
      d.push(x);
    } else if (R instanceof Q) {
      let A = new F({
        definition: R.definition,
        idx: R.idx
      }), x = /* @__PURE__ */ R.definition.concat([
        A
      ], /* @__PURE__ */ Mi$1(h2)), P = {
        idx: g,
        def: x,
        ruleStack: T2,
        occurrenceStack: k
      };
      d.push(P);
    } else if (R instanceof Z) {
      let A = new D({
        terminalType: R.separator
      }), x = new F({
        definition: /* @__PURE__ */ [
          A
        ].concat(R.definition),
        idx: R.idx
      }), P = /* @__PURE__ */ R.definition.concat([
        x
      ], /* @__PURE__ */ Mi$1(h2)), b = {
        idx: g,
        def: P,
        ruleStack: T2,
        occurrenceStack: k
      };
      d.push(b);
    } else if (R instanceof q) {
      let A = {
        idx: g,
        def: /* @__PURE__ */ Mi$1(h2),
        ruleStack: T2,
        occurrenceStack: k
      };
      d.push(A), d.push(o2);
      let x = new D({
        terminalType: R.separator
      }), P = new F({
        definition: /* @__PURE__ */ [
          x
        ].concat(R.definition),
        idx: R.idx
      }), b = /* @__PURE__ */ R.definition.concat([
        P
      ], /* @__PURE__ */ Mi$1(h2)), xe = {
        idx: g,
        def: b,
        ruleStack: T2,
        occurrenceStack: k
      };
      d.push(xe);
    } else if (R instanceof F) {
      let A = {
        idx: g,
        def: /* @__PURE__ */ Mi$1(h2),
        ruleStack: T2,
        occurrenceStack: k
      };
      d.push(A), d.push(o2);
      let x = new F({
        definition: R.definition,
        idx: R.idx
      }), P = /* @__PURE__ */ R.definition.concat([
        x
      ], /* @__PURE__ */ Mi$1(h2)), b = {
        idx: g,
        def: P,
        ruleStack: T2,
        occurrenceStack: k
      };
      d.push(b);
    } else if (R instanceof X) for (let A = R.definition.length - 1; A >= 0; A--) {
      let x = R.definition[A], P = {
        idx: g,
        def: /* @__PURE__ */ x.definition.concat(/* @__PURE__ */ Mi$1(h2)),
        ruleStack: T2,
        occurrenceStack: k
      };
      d.push(P), d.push(o2);
    }
    else if (R instanceof J) d.push({
      idx: g,
      def: /* @__PURE__ */ R.definition.concat(/* @__PURE__ */ Mi$1(h2)),
      ruleStack: T2,
      occurrenceStack: k
    });
    else if (R instanceof Me) d.push(/* @__PURE__ */ sp(R, g, T2, k));
    else throw Error("non exhaustive match");
  }
  return f;
}
m$1(ns, "nextPossibleTokensAfter");
function sp(r, e, t, n2) {
  let i = /* @__PURE__ */ _f$1(t);
  i.push(r.name);
  let s = /* @__PURE__ */ _f$1(n2);
  return s.push(1), {
    idx: e,
    def: r.definition,
    ruleStack: i,
    occurrenceStack: s
  };
}
m$1(sp, "expandTopLevelRule");
var ie;
(function(r) {
  r[r.OPTION = 0] = "OPTION", r[r.REPETITION = 1] = "REPETITION", r[r.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", r[r.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", r[r.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", r[r.ALTERNATION = 5] = "ALTERNATION";
})(ie || (ie = {}));
function wn(r) {
  if (r instanceof z || r === "Option") return ie.OPTION;
  if (r instanceof F || r === "Repetition") return ie.REPETITION;
  if (r instanceof Q || r === "RepetitionMandatory") return ie.REPETITION_MANDATORY;
  if (r instanceof Z || r === "RepetitionMandatoryWithSeparator") return ie.REPETITION_MANDATORY_WITH_SEPARATOR;
  if (r instanceof q || r === "RepetitionWithSeparator") return ie.REPETITION_WITH_SEPARATOR;
  if (r instanceof X || r === "Alternation") return ie.ALTERNATION;
  throw Error("non exhaustive match");
}
m$1(wn, "getProdType");
function ss(r) {
  let { occurrence: e, rule: t, prodType: n2, maxLookahead: i } = r, s = /* @__PURE__ */ wn(n2);
  return s === ie.ALTERNATION ? Mr(e, t, i) : Dr(e, t, s, i);
}
m$1(ss, "getLookaheadPaths");
function lu(r, e, t, n2, i, s) {
  let o2 = /* @__PURE__ */ Mr(r, e, t), l = pu(o2) ? Pr : kt;
  return s(o2, n2, l, i);
}
m$1(lu, "buildLookaheadFuncForOr");
function cu(r, e, t, n2, i, s) {
  let o2 = /* @__PURE__ */ Dr(r, e, i, t), l = pu(o2) ? Pr : kt;
  return s(o2[0], l, n2);
}
m$1(cu, "buildLookaheadFuncForOptionalProd");
function uu(r, e, t, n2) {
  let i = r.length, s = /* @__PURE__ */ Ui$1(r, (o2) => Ui$1(o2, (l) => l.length === 1));
  if (e) return function(o2) {
    let l = /* @__PURE__ */ Jr(o2, (c) => c.GATE);
    for (let c = 0; c < i; c++) {
      let u = r[c], f = u.length, d = l[c];
      if (!(d !== void 0 && d.call(this) === false)) e: for (let p2 = 0; p2 < f; p2++) {
        let h2 = u[p2], g = h2.length;
        for (let T2 = 0; T2 < g; T2++) {
          let k = /* @__PURE__ */ this.LA(T2 + 1);
          if (t(k, h2[T2]) === false) continue e;
        }
        return c;
      }
    }
  };
  if (s && !n2) {
    let o2 = /* @__PURE__ */ Jr(r, (c) => Qr(c)), l = /* @__PURE__ */ Rn$1(o2, (c, u, f) => (Zr$1(u, (d) => {
      fm$1(c, d.tokenTypeIdx) || (c[d.tokenTypeIdx] = f), Zr$1(d.categoryMatches, (p2) => {
        fm$1(c, p2) || (c[p2] = f);
      });
    }), c), {});
    return function() {
      let c = /* @__PURE__ */ this.LA(1);
      return l[c.tokenTypeIdx];
    };
  } else return function() {
    for (let o2 = 0; o2 < i; o2++) {
      let l = r[o2], c = l.length;
      e: for (let u = 0; u < c; u++) {
        let f = l[u], d = f.length;
        for (let p2 = 0; p2 < d; p2++) {
          let h2 = /* @__PURE__ */ this.LA(p2 + 1);
          if (t(h2, f[p2]) === false) continue e;
        }
        return o2;
      }
    }
  };
}
m$1(uu, "buildAlternativesLookAheadFunc");
function fu(r, e, t) {
  let n2 = /* @__PURE__ */ Ui$1(r, (s) => s.length === 1), i = r.length;
  if (n2 && !t) {
    let s = /* @__PURE__ */ Qr(r);
    if (s.length === 1 && Cr$1(s[0].categoryMatches)) {
      let l = s[0].tokenTypeIdx;
      return function() {
        return this.LA(1).tokenTypeIdx === l;
      };
    } else {
      let o2 = /* @__PURE__ */ Rn$1(s, (l, c, u) => (l[c.tokenTypeIdx] = true, Zr$1(c.categoryMatches, (f) => {
        l[f] = true;
      }), l), []);
      return function() {
        let l = /* @__PURE__ */ this.LA(1);
        return o2[l.tokenTypeIdx] === true;
      };
    }
  } else return function() {
    e: for (let s = 0; s < i; s++) {
      let o2 = r[s], l = o2.length;
      for (let c = 0; c < l; c++) {
        let u = /* @__PURE__ */ this.LA(c + 1);
        if (e(u, o2[c]) === false) continue e;
      }
      return true;
    }
    return false;
  };
}
m$1(fu, "buildSingleAlternativeLookaheadFunction");
var Wo = (_G = class extends vt {
  constructor(e, t, n2) {
    super(), this.topProd = e, this.targetOccurrence = t, this.targetProdType = n2;
  }
  startWalking() {
    return this.walk(this.topProd), this.restDef;
  }
  checkIsTarget(e, t, n2, i) {
    return e.idx === this.targetOccurrence && this.targetProdType === t ? (this.restDef = /* @__PURE__ */ n2.concat(i), true) : false;
  }
  walkOption(e, t, n2) {
    this.checkIsTarget(e, ie.OPTION, t, n2) || super.walkOption(e, t, n2);
  }
  walkAtLeastOne(e, t, n2) {
    this.checkIsTarget(e, ie.REPETITION_MANDATORY, t, n2) || super.walkOption(e, t, n2);
  }
  walkAtLeastOneSep(e, t, n2) {
    this.checkIsTarget(e, ie.REPETITION_MANDATORY_WITH_SEPARATOR, t, n2) || super.walkOption(e, t, n2);
  }
  walkMany(e, t, n2) {
    this.checkIsTarget(e, ie.REPETITION, t, n2) || super.walkOption(e, t, n2);
  }
  walkManySep(e, t, n2) {
    this.checkIsTarget(e, ie.REPETITION_WITH_SEPARATOR, t, n2) || super.walkOption(e, t, n2);
  }
}, __33 = new WeakMap(), __privateAdd(_G, __33, m$1(_G, "RestDefinitionFinderWalker")), _G), is = (_H = class extends De {
  constructor(e, t, n2) {
    super(), this.targetOccurrence = e, this.targetProdType = t, this.targetRef = n2, this.result = [];
  }
  checkIsTarget(e, t) {
    e.idx === this.targetOccurrence && this.targetProdType === t && (this.targetRef === void 0 || e === this.targetRef) && (this.result = e.definition);
  }
  visitOption(e) {
    this.checkIsTarget(e, ie.OPTION);
  }
  visitRepetition(e) {
    this.checkIsTarget(e, ie.REPETITION);
  }
  visitRepetitionMandatory(e) {
    this.checkIsTarget(e, ie.REPETITION_MANDATORY);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.checkIsTarget(e, ie.REPETITION_MANDATORY_WITH_SEPARATOR);
  }
  visitRepetitionWithSeparator(e) {
    this.checkIsTarget(e, ie.REPETITION_WITH_SEPARATOR);
  }
  visitAlternation(e) {
    this.checkIsTarget(e, ie.ALTERNATION);
  }
}, __34 = new WeakMap(), __privateAdd(_H, __34, m$1(_H, "InsideDefinitionFinderVisitor")), _H);
function ou(r) {
  let e = new Array(r);
  for (let t = 0; t < r; t++) e[t] = [];
  return e;
}
m$1(ou, "initializeArrayOfArrays");
function Bo(r) {
  let e = [
    ""
  ];
  for (let t = 0; t < r.length; t++) {
    let n2 = r[t], i = [];
    for (let s = 0; s < e.length; s++) {
      let o2 = e[s];
      i.push(o2 + "_" + n2.tokenTypeIdx);
      for (let l = 0; l < n2.categoryMatches.length; l++) {
        let c = "_" + n2.categoryMatches[l];
        i.push(o2 + c);
      }
    }
    e = i;
  }
  return e;
}
m$1(Bo, "pathToHashKeys");
function ap(r, e, t) {
  for (let n2 = 0; n2 < r.length; n2++) {
    if (n2 === t) continue;
    let i = r[n2];
    for (let s = 0; s < e.length; s++) {
      let o2 = e[s];
      if (i[o2] === true) return false;
    }
  }
  return true;
}
m$1(ap, "isUniquePrefixHash");
function du(r, e) {
  let t = /* @__PURE__ */ Jr(r, (o2) => rs([
    o2
  ], 1)), n2 = /* @__PURE__ */ ou(t.length), i = /* @__PURE__ */ Jr(t, (o2) => {
    let l = {};
    return Zr$1(o2, (c) => {
      let u = /* @__PURE__ */ Bo(c.partialPath);
      Zr$1(u, (f) => {
        l[f] = true;
      });
    }), l;
  }), s = t;
  for (let o2 = 1; o2 <= e; o2++) {
    let l = s;
    s = /* @__PURE__ */ ou(l.length);
    for (let c = 0; c < l.length; c++) {
      let u = l[c];
      for (let f = 0; f < u.length; f++) {
        let d = u[f].partialPath, p2 = u[f].suffixDef, h2 = /* @__PURE__ */ Bo(d);
        if (ap(i, h2, c) || Cr$1(p2) || d.length === e) {
          let T2 = n2[c];
          if (as(T2, d) === false) {
            T2.push(d);
            for (let k = 0; k < h2.length; k++) {
              let R = h2[k];
              i[c][R] = true;
            }
          }
        } else {
          let T2 = /* @__PURE__ */ rs(p2, o2 + 1, d);
          s[c] = /* @__PURE__ */ s[c].concat(T2), Zr$1(T2, (k) => {
            let R = /* @__PURE__ */ Bo(k.partialPath);
            Zr$1(R, (A) => {
              i[c][A] = true;
            });
          });
        }
      }
    }
  }
  return n2;
}
m$1(du, "lookAheadSequenceFromAlternatives");
function Mr(r, e, t, n2) {
  let i = new is(r, ie.ALTERNATION, n2);
  return e.accept(i), du(i.result, t);
}
m$1(Mr, "getLookaheadPathsForOr");
function Dr(r, e, t, n2) {
  let i = new is(r, t);
  e.accept(i);
  let s = i.result, l = /* @__PURE__ */ new Wo(e, r, t).startWalking(), c = new J({
    definition: s
  }), u = new J({
    definition: l
  });
  return du([
    c,
    u
  ], n2);
}
m$1(Dr, "getLookaheadPathsForOptionalProd");
function as(r, e) {
  e: for (let t = 0; t < r.length; t++) {
    let n2 = r[t];
    if (n2.length === e.length) {
      for (let i = 0; i < n2.length; i++) {
        let s = e[i], o2 = n2[i];
        if ((s === o2 || o2.categoryMatchesMap[s.tokenTypeIdx] !== void 0) === false) continue e;
      }
      return true;
    }
  }
  return false;
}
m$1(as, "containsPath");
function hu(r, e) {
  return r.length < e.length && Ui$1(r, (t, n2) => {
    let i = e[n2];
    return t === i || i.categoryMatchesMap[t.tokenTypeIdx];
  });
}
m$1(hu, "isStrictPrefixOfPath");
function pu(r) {
  return Ui$1(r, (e) => Ui$1(e, (t) => Ui$1(t, (n2) => Cr$1(n2.categoryMatches))));
}
m$1(pu, "areTokenCategoriesNotUsed");
function mu(r) {
  let e = /* @__PURE__ */ r.lookaheadStrategy.validate({
    rules: r.rules,
    tokenTypes: r.tokenTypes,
    grammarName: r.grammarName
  });
  return Jr(e, (t) => Object.assign({
    type: ye.CUSTOM_LOOKAHEAD_VALIDATION
  }, t));
}
m$1(mu, "validateLookahead");
function gu(r, e, t, n2) {
  let i = /* @__PURE__ */ zi$1(r, (c) => op(c, t)), s = /* @__PURE__ */ hp(r, e, t), o2 = /* @__PURE__ */ zi$1(r, (c) => up(c, t)), l = /* @__PURE__ */ zi$1(r, (c) => cp(c, r, n2, t));
  return i.concat(s, o2, l);
}
m$1(gu, "validateGrammar");
function op(r, e) {
  let t = new jo();
  r.accept(t);
  let n2 = t.allProductions, i = /* @__PURE__ */ Vi$1(n2, lp), s = /* @__PURE__ */ Tm(i, (l) => l.length > 1);
  return Jr(/* @__PURE__ */ Xr$1(s), (l) => {
    let c = /* @__PURE__ */ De$1(l), u = /* @__PURE__ */ e.buildDuplicateFoundError(r, l), f = /* @__PURE__ */ Be(c), d = {
      message: u,
      type: ye.DUPLICATE_PRODUCTIONS,
      ruleName: r.name,
      dslName: f,
      occurrence: c.idx
    }, p2 = /* @__PURE__ */ yu(c);
    return p2 && (d.parameter = p2), d;
  });
}
m$1(op, "validateDuplicateProductions");
function lp(r) {
  return `${Be(r)}_#_${r.idx}_#_${yu(r)}`;
}
m$1(lp, "identifyProductionForDuplicates");
function yu(r) {
  return r instanceof D ? r.terminalType.name : r instanceof H ? r.nonTerminalName : "";
}
m$1(yu, "getExtraProductionArgument");
var jo = (_I = class extends De {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitNonTerminal(e) {
    this.allProductions.push(e);
  }
  visitOption(e) {
    this.allProductions.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
  visitAlternation(e) {
    this.allProductions.push(e);
  }
  visitTerminal(e) {
    this.allProductions.push(e);
  }
}, __35 = new WeakMap(), __privateAdd(_I, __35, m$1(_I, "OccurrenceValidationCollector")), _I);
function cp(r, e, t, n2) {
  let i = [];
  if (Rn$1(e, (o2, l) => l.name === r.name ? o2 + 1 : o2, 0) > 1) {
    let o2 = /* @__PURE__ */ n2.buildDuplicateRuleNameError({
      topLevelRule: r,
      grammarName: t
    });
    i.push({
      message: o2,
      type: ye.DUPLICATE_RULE_NAME,
      ruleName: r.name
    });
  }
  return i;
}
m$1(cp, "validateRuleDoesNotAlreadyExist");
function Tu(r, e, t) {
  let n2 = [], i;
  return pm$1(e, r) || (i = `Invalid rule override, rule: ->${r}<- cannot be overridden in the grammar: ->${t}<-as it is not defined in any of the super grammars `, n2.push({
    message: i,
    type: ye.INVALID_RULE_OVERRIDE,
    ruleName: r
  })), n2;
}
m$1(Tu, "validateRuleIsOverridden");
function Ko(r, e, t) {
  let n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
  let i = [], s = /* @__PURE__ */ os(e.definition);
  if (Cr$1(s)) return [];
  {
    let o2 = r.name;
    pm$1(s, r) && i.push({
      message: /* @__PURE__ */ t.buildLeftRecursionError({
        topLevelRule: r,
        leftRecursionPath: n2
      }),
      type: ye.LEFT_RECURSION,
      ruleName: o2
    });
    let c = /* @__PURE__ */ Ri$1(s, /* @__PURE__ */ n2.concat([
      r
    ])), u = /* @__PURE__ */ zi$1(c, (f) => {
      let d = /* @__PURE__ */ _f$1(n2);
      return d.push(f), Ko(r, f, t, d);
    });
    return i.concat(u);
  }
}
m$1(Ko, "validateNoLeftRecursion");
function os(r) {
  let e = [];
  if (Cr$1(r)) return e;
  let t = /* @__PURE__ */ De$1(r);
  if (t instanceof H) e.push(t.referencedRule);
  else if (t instanceof J || t instanceof z || t instanceof Q || t instanceof Z || t instanceof q || t instanceof F) e = /* @__PURE__ */ e.concat(/* @__PURE__ */ os(t.definition));
  else if (t instanceof X) e = /* @__PURE__ */ Qr(/* @__PURE__ */ Jr(t.definition, (s) => os(s.definition)));
  else if (!(t instanceof D)) throw Error("non exhaustive match");
  let n2 = /* @__PURE__ */ sr(t), i = r.length > 1;
  if (n2 && i) {
    let s = /* @__PURE__ */ Mi$1(r);
    return e.concat(/* @__PURE__ */ os(s));
  } else return e;
}
m$1(os, "getFirstNoneTerminal");
var Ln = (_J = class extends De {
  constructor() {
    super(...arguments), this.alternations = [];
  }
  visitAlternation(e) {
    this.alternations.push(e);
  }
}, __36 = new WeakMap(), __privateAdd(_J, __36, m$1(_J, "OrCollector")), _J);
function xu(r, e) {
  let t = new Ln();
  r.accept(t);
  let n2 = t.alternations;
  return zi$1(n2, (s) => {
    let o2 = /* @__PURE__ */ _i$1(s.definition);
    return zi$1(o2, (l, c) => {
      let u = /* @__PURE__ */ ns([
        l
      ], [], kt, 1);
      return Cr$1(u) ? [
        {
          message: /* @__PURE__ */ e.buildEmptyAlternationError({
            topLevelRule: r,
            alternation: s,
            emptyChoiceIdx: c
          }),
          type: ye.NONE_LAST_EMPTY_ALT,
          ruleName: r.name,
          occurrence: s.idx,
          alternative: c + 1
        }
      ] : [];
    });
  });
}
m$1(xu, "validateEmptyOrAlternative");
function Ru(r, e, t) {
  let n2 = new Ln();
  r.accept(n2);
  let i = n2.alternations;
  return i = /* @__PURE__ */ Qm$1(i, (o2) => o2.ignoreAmbiguities === true), zi$1(i, (o2) => {
    let l = o2.idx, c = o2.maxLookahead || e, u = /* @__PURE__ */ Mr(l, r, c, o2), f = /* @__PURE__ */ fp(u, o2, r, t), d = /* @__PURE__ */ dp(u, o2, r, t);
    return f.concat(d);
  });
}
m$1(Ru, "validateAmbiguousAlternationAlternatives");
var Vo = (_K = class extends De {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
}, __37 = new WeakMap(), __privateAdd(_K, __37, m$1(_K, "RepetitionCollector")), _K);
function up(r, e) {
  let t = new Ln();
  r.accept(t);
  let n2 = t.alternations;
  return zi$1(n2, (s) => s.definition.length > 255 ? [
    {
      message: /* @__PURE__ */ e.buildTooManyAlternativesError({
        topLevelRule: r,
        alternation: s
      }),
      type: ye.TOO_MANY_ALTS,
      ruleName: r.name,
      occurrence: s.idx
    }
  ] : []);
}
m$1(up, "validateTooManyAlts");
function Eu(r, e, t) {
  let n2 = [];
  return Zr$1(r, (i) => {
    let s = new Vo();
    i.accept(s);
    let o2 = s.allProductions;
    Zr$1(o2, (l) => {
      let c = /* @__PURE__ */ wn(l), u = l.maxLookahead || e, f = l.idx, p2 = Dr(f, i, c, u)[0];
      if (Cr$1(/* @__PURE__ */ Qr(p2))) {
        let h2 = /* @__PURE__ */ t.buildEmptyRepetitionError({
          topLevelRule: i,
          repetition: l
        });
        n2.push({
          message: h2,
          type: ye.NO_NON_EMPTY_LOOKAHEAD,
          ruleName: i.name
        });
      }
    });
  }), n2;
}
m$1(Eu, "validateSomeNonEmptyLookaheadPath");
function fp(r, e, t, n2) {
  let i = [], s = /* @__PURE__ */ Rn$1(r, (l, c, u) => (e.definition[u].ignoreAmbiguities === true || Zr$1(c, (f) => {
    let d = [
      u
    ];
    Zr$1(r, (p2, h2) => {
      u !== h2 && as(p2, f) && e.definition[h2].ignoreAmbiguities !== true && d.push(h2);
    }), d.length > 1 && !as(i, f) && (i.push(f), l.push({
      alts: d,
      path: f
    }));
  }), l), []);
  return Jr(s, (l) => {
    let c = /* @__PURE__ */ Jr(l.alts, (f) => f + 1);
    return {
      message: /* @__PURE__ */ n2.buildAlternationAmbiguityError({
        topLevelRule: t,
        alternation: e,
        ambiguityIndices: c,
        prefixPath: l.path
      }),
      type: ye.AMBIGUOUS_ALTS,
      ruleName: t.name,
      occurrence: e.idx,
      alternatives: l.alts
    };
  });
}
m$1(fp, "checkAlternativesAmbiguities");
function dp(r, e, t, n2) {
  let i = /* @__PURE__ */ Rn$1(r, (o2, l, c) => {
    let u = /* @__PURE__ */ Jr(l, (f) => ({
      idx: c,
      path: f
    }));
    return o2.concat(u);
  }, []);
  return Ai$1(/* @__PURE__ */ zi$1(i, (o2) => {
    if (e.definition[o2.idx].ignoreAmbiguities === true) return [];
    let c = o2.idx, u = o2.path, f = /* @__PURE__ */ fn$1(i, (p2) => e.definition[p2.idx].ignoreAmbiguities !== true && p2.idx < c && hu(p2.path, u));
    return Jr(f, (p2) => {
      let h2 = [
        p2.idx + 1,
        c + 1
      ], g = e.idx === 0 ? "" : e.idx;
      return {
        message: /* @__PURE__ */ n2.buildAlternationPrefixAmbiguityError({
          topLevelRule: t,
          alternation: e,
          ambiguityIndices: h2,
          prefixPath: p2.path
        }),
        type: ye.AMBIGUOUS_PREFIX_ALTS,
        ruleName: t.name,
        occurrence: g,
        alternatives: h2
      };
    });
  }));
}
m$1(dp, "checkPrefixAlternativesAmbiguities");
function hp(r, e, t) {
  let n2 = [], i = /* @__PURE__ */ Jr(e, (s) => s.name);
  return Zr$1(r, (s) => {
    let o2 = s.name;
    if (pm$1(i, o2)) {
      let l = /* @__PURE__ */ t.buildNamespaceConflictError(s);
      n2.push({
        message: l,
        type: ye.CONFLICT_TOKENS_RULES_NAMESPACE,
        ruleName: o2
      });
    }
  }), n2;
}
m$1(hp, "checkTerminalAndNoneTerminalsNameSpace");
function Au(r) {
  let e = /* @__PURE__ */ Nf$1(r, {
    errMsgProvider: su
  }), t = {};
  return Zr$1(r.rules, (n2) => {
    t[n2.name] = n2;
  }), au(t, e.errMsgProvider);
}
m$1(Au, "resolveGrammar");
function vu(r) {
  return r = /* @__PURE__ */ Nf$1(r, {
    errMsgProvider: nt
  }), gu(r.rules, r.tokenTypes, r.errMsgProvider, r.grammarName);
}
m$1(vu, "validateGrammar");
var ku = "MismatchedTokenException", Iu = "NoViableAltException", Nu = "EarlyExitException", Su = "NotAllInputParsedException", Cu = [
  ku,
  Iu,
  Nu,
  Su
];
Object.freeze(Cu);
function Dt(r) {
  return pm$1(Cu, r.name);
}
m$1(Dt, "isRecognitionException");
var Fr = (_L = class extends Error {
  constructor(e, t) {
    super(e), this.token = t, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}, __38 = new WeakMap(), __privateAdd(_L, __38, m$1(_L, "RecognitionException")), _L), cr = (_M = class extends Fr {
  constructor(e, t, n2) {
    super(e, t), this.previousToken = n2, this.name = ku;
  }
}, __39 = new WeakMap(), __privateAdd(_M, __39, m$1(_M, "MismatchedTokenException")), _M), On = (_N = class extends Fr {
  constructor(e, t, n2) {
    super(e, t), this.previousToken = n2, this.name = Iu;
  }
}, __40 = new WeakMap(), __privateAdd(_N, __40, m$1(_N, "NoViableAltException")), _N), $n = (_O = class extends Fr {
  constructor(e, t) {
    super(e, t), this.name = Su;
  }
}, __41 = new WeakMap(), __privateAdd(_O, __41, m$1(_O, "NotAllInputParsedException")), _O), Pn = (_P = class extends Fr {
  constructor(e, t, n2) {
    super(e, t), this.previousToken = n2, this.name = Nu;
  }
}, __42 = new WeakMap(), __privateAdd(_P, __42, m$1(_P, "EarlyExitException")), _P);
var Ho = {}, qo = "InRuleRecoveryException", zo = (_Q = class extends Error {
  constructor(e) {
    super(e), this.name = qo;
  }
}, __43 = new WeakMap(), __privateAdd(_Q, __43, m$1(_Q, "InRuleRecoveryException")), _Q), ls = (_R = class {
  initRecoverable(e) {
    this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = fm$1(e, "recoveryEnabled") ? e.recoveryEnabled : Fe.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = pp);
  }
  getTokenToInsert(e) {
    let t = /* @__PURE__ */ lr(e, "", NaN, NaN, NaN, NaN, NaN, NaN);
    return t.isInsertedInRecovery = true, t;
  }
  canTokenTypeBeInsertedInRecovery(e) {
    return true;
  }
  canTokenTypeBeDeletedInRecovery(e) {
    return true;
  }
  tryInRepetitionRecovery(e, t, n2, i) {
    let s = /* @__PURE__ */ this.findReSyncTokenType(), o2 = /* @__PURE__ */ this.exportLexerState(), l = [], c = false, u = /* @__PURE__ */ this.LA(1), f = /* @__PURE__ */ this.LA(1), d = /* @__PURE__ */ m$1(() => {
      let p2 = /* @__PURE__ */ this.LA(0), h2 = /* @__PURE__ */ this.errorMessageProvider.buildMismatchTokenMessage({
        expected: i,
        actual: u,
        previous: p2,
        ruleName: /* @__PURE__ */ this.getCurrRuleFullName()
      }), g = new cr(h2, u, this.LA(0));
      g.resyncedTokens = /* @__PURE__ */ _i$1(l), this.SAVE_ERROR(g);
    }, "generateErrorMessage");
    for (; !c; ) if (this.tokenMatcher(f, i)) {
      d();
      return;
    } else if (n2.call(this)) {
      d(), e.apply(this, t);
      return;
    } else this.tokenMatcher(f, s) ? c = true : (f = /* @__PURE__ */ this.SKIP_TOKEN(), this.addToResyncTokens(f, l));
    this.importLexerState(o2);
  }
  shouldInRepetitionRecoveryBeTried(e, t, n2) {
    return !(n2 === false || this.tokenMatcher(/* @__PURE__ */ this.LA(1), e) || this.isBackTracking() || this.canPerformInRuleRecovery(e, /* @__PURE__ */ this.getFollowsForInRuleRecovery(e, t)));
  }
  getFollowsForInRuleRecovery(e, t) {
    let n2 = /* @__PURE__ */ this.getCurrentGrammarPath(e, t);
    return this.getNextPossibleTokenTypes(n2);
  }
  tryInRuleRecovery(e, t) {
    if (this.canRecoverWithSingleTokenInsertion(e, t)) return this.getTokenToInsert(e);
    if (this.canRecoverWithSingleTokenDeletion(e)) {
      let n2 = /* @__PURE__ */ this.SKIP_TOKEN();
      return this.consumeToken(), n2;
    }
    throw new zo("sad sad panda");
  }
  canPerformInRuleRecovery(e, t) {
    return this.canRecoverWithSingleTokenInsertion(e, t) || this.canRecoverWithSingleTokenDeletion(e);
  }
  canRecoverWithSingleTokenInsertion(e, t) {
    if (!this.canTokenTypeBeInsertedInRecovery(e) || Cr$1(t)) return false;
    let n2 = /* @__PURE__ */ this.LA(1);
    return Ki$1(t, (s) => this.tokenMatcher(n2, s)) !== void 0;
  }
  canRecoverWithSingleTokenDeletion(e) {
    return this.canTokenTypeBeDeletedInRecovery(e) ? this.tokenMatcher(/* @__PURE__ */ this.LA(2), e) : false;
  }
  isInCurrentRuleReSyncSet(e) {
    let t = /* @__PURE__ */ this.getCurrFollowKey(), n2 = /* @__PURE__ */ this.getFollowSetFromFollowKey(t);
    return pm$1(n2, e);
  }
  findReSyncTokenType() {
    let e = /* @__PURE__ */ this.flattenFollowSet(), t = /* @__PURE__ */ this.LA(1), n2 = 2;
    for (; ; ) {
      let i = /* @__PURE__ */ Ki$1(e, (s) => Sn(t, s));
      if (i !== void 0) return i;
      t = /* @__PURE__ */ this.LA(n2), n2++;
    }
  }
  getCurrFollowKey() {
    if (this.RULE_STACK.length === 1) return Ho;
    let e = /* @__PURE__ */ this.getLastExplicitRuleShortName(), t = /* @__PURE__ */ this.getLastExplicitRuleOccurrenceIndex(), n2 = /* @__PURE__ */ this.getPreviousExplicitRuleShortName();
    return {
      ruleName: /* @__PURE__ */ this.shortRuleNameToFullName(e),
      idxInCallingRule: t,
      inRule: /* @__PURE__ */ this.shortRuleNameToFullName(n2)
    };
  }
  buildFullFollowKeyStack() {
    let e = this.RULE_STACK, t = this.RULE_OCCURRENCE_STACK;
    return Jr(e, (n2, i) => i === 0 ? Ho : {
      ruleName: /* @__PURE__ */ this.shortRuleNameToFullName(n2),
      idxInCallingRule: t[i],
      inRule: /* @__PURE__ */ this.shortRuleNameToFullName(e[i - 1])
    });
  }
  flattenFollowSet() {
    let e = /* @__PURE__ */ Jr(/* @__PURE__ */ this.buildFullFollowKeyStack(), (t) => this.getFollowSetFromFollowKey(t));
    return Qr(e);
  }
  getFollowSetFromFollowKey(e) {
    if (e === Ho) return [
      qe
    ];
    let t = e.ruleName + e.idxInCallingRule + Hi + e.inRule;
    return this.resyncFollows[t];
  }
  addToResyncTokens(e, t) {
    return this.tokenMatcher(e, qe) || t.push(e), t;
  }
  reSyncTo(e) {
    let t = [], n2 = /* @__PURE__ */ this.LA(1);
    for (; this.tokenMatcher(n2, e) === false; ) n2 = /* @__PURE__ */ this.SKIP_TOKEN(), this.addToResyncTokens(n2, t);
    return _i$1(t);
  }
  attemptInRepetitionRecovery(e, t, n2, i, s, o2, l) {
  }
  getCurrentGrammarPath(e, t) {
    let n2 = /* @__PURE__ */ this.getHumanReadableRuleStack(), i = /* @__PURE__ */ _f$1(this.RULE_OCCURRENCE_STACK);
    return {
      ruleStack: n2,
      occurrenceStack: i,
      lastTok: e,
      lastTokOccurrence: t
    };
  }
  getHumanReadableRuleStack() {
    return Jr(this.RULE_STACK, (e) => this.shortRuleNameToFullName(e));
  }
}, __44 = new WeakMap(), __privateAdd(_R, __44, m$1(_R, "Recoverable")), _R);
function pp(r, e, t, n2, i, s, o2) {
  let l = /* @__PURE__ */ this.getKeyForAutomaticLookahead(n2, i), c = this.firstAfterRepMap[l];
  if (c === void 0) {
    let p2 = /* @__PURE__ */ this.getCurrRuleFullName(), h2 = this.getGAstProductions()[p2];
    c = /* @__PURE__ */ new s(h2, i).startWalking(), this.firstAfterRepMap[l] = c;
  }
  let u = c.token, f = c.occurrence, d = c.isEndOfRule;
  this.RULE_STACK.length === 1 && d && u === void 0 && (u = qe, f = 1), !(u === void 0 || f === void 0) && this.shouldInRepetitionRecoveryBeTried(u, f, o2) && this.tryInRepetitionRecovery(r, e, t, u);
}
m$1(pp, "attemptInRepetitionRecovery");
function cs(r, e, t) {
  return t | e | r;
}
m$1(cs, "getKeyForAutomaticLookahead");
var Ct = (_S = class {
  constructor(e) {
    var t;
    this.maxLookahead = (t = e == null ? void 0 : e.maxLookahead) !== null && t !== void 0 ? t : Fe.maxLookahead;
  }
  validate(e) {
    let t = /* @__PURE__ */ this.validateNoLeftRecursion(e.rules);
    if (Cr$1(t)) {
      let n2 = /* @__PURE__ */ this.validateEmptyOrAlternatives(e.rules), i = /* @__PURE__ */ this.validateAmbiguousAlternationAlternatives(e.rules, this.maxLookahead), s = /* @__PURE__ */ this.validateSomeNonEmptyLookaheadPath(e.rules, this.maxLookahead);
      return [
        ...t,
        ...n2,
        ...i,
        ...s
      ];
    }
    return t;
  }
  validateNoLeftRecursion(e) {
    return zi$1(e, (t) => Ko(t, t, nt));
  }
  validateEmptyOrAlternatives(e) {
    return zi$1(e, (t) => xu(t, nt));
  }
  validateAmbiguousAlternationAlternatives(e, t) {
    return zi$1(e, (n2) => Ru(n2, t, nt));
  }
  validateSomeNonEmptyLookaheadPath(e, t) {
    return Eu(e, t, nt);
  }
  buildLookaheadForAlternation(e) {
    return lu(e.prodOccurrence, e.rule, e.maxLookahead, e.hasPredicates, e.dynamicTokensEnabled, uu);
  }
  buildLookaheadForOptional(e) {
    return cu(e.prodOccurrence, e.rule, e.maxLookahead, e.dynamicTokensEnabled, /* @__PURE__ */ wn(e.prodType), fu);
  }
}, __45 = new WeakMap(), __privateAdd(_S, __45, m$1(_S, "LLkLookaheadStrategy")), _S);
var fs = (_T = class {
  initLooksAhead(e) {
    this.dynamicTokensEnabled = fm$1(e, "dynamicTokensEnabled") ? e.dynamicTokensEnabled : Fe.dynamicTokensEnabled, this.maxLookahead = fm$1(e, "maxLookahead") ? e.maxLookahead : Fe.maxLookahead, this.lookaheadStrategy = fm$1(e, "lookaheadStrategy") ? e.lookaheadStrategy : new Ct({
      maxLookahead: this.maxLookahead
    }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
  }
  preComputeLookaheadFunctions(e) {
    Zr$1(e, (t) => {
      this.TRACE_INIT(`${t.name} Rule Lookahead`, () => {
        let { alternation: n2, repetition: i, option: s, repetitionMandatory: o2, repetitionMandatoryWithSeparator: l, repetitionWithSeparator: c } = mp(t);
        Zr$1(n2, (u) => {
          let f = u.idx === 0 ? "" : u.idx;
          this.TRACE_INIT(`${Be(u)}${f}`, () => {
            let d = /* @__PURE__ */ this.lookaheadStrategy.buildLookaheadForAlternation({
              prodOccurrence: u.idx,
              rule: t,
              maxLookahead: u.maxLookahead || this.maxLookahead,
              hasPredicates: u.hasPredicates,
              dynamicTokensEnabled: this.dynamicTokensEnabled
            }), p2 = /* @__PURE__ */ cs(this.fullRuleNameToShort[t.name], 256, u.idx);
            this.setLaFuncCache(p2, d);
          });
        }), Zr$1(i, (u) => {
          this.computeLookaheadFunc(t, u.idx, 768, "Repetition", u.maxLookahead, /* @__PURE__ */ Be(u));
        }), Zr$1(s, (u) => {
          this.computeLookaheadFunc(t, u.idx, 512, "Option", u.maxLookahead, /* @__PURE__ */ Be(u));
        }), Zr$1(o2, (u) => {
          this.computeLookaheadFunc(t, u.idx, 1024, "RepetitionMandatory", u.maxLookahead, /* @__PURE__ */ Be(u));
        }), Zr$1(l, (u) => {
          this.computeLookaheadFunc(t, u.idx, 1536, "RepetitionMandatoryWithSeparator", u.maxLookahead, /* @__PURE__ */ Be(u));
        }), Zr$1(c, (u) => {
          this.computeLookaheadFunc(t, u.idx, 1280, "RepetitionWithSeparator", u.maxLookahead, /* @__PURE__ */ Be(u));
        });
      });
    });
  }
  computeLookaheadFunc(e, t, n2, i, s, o2) {
    this.TRACE_INIT(`${o2}${t === 0 ? "" : t}`, () => {
      let l = /* @__PURE__ */ this.lookaheadStrategy.buildLookaheadForOptional({
        prodOccurrence: t,
        rule: e,
        maxLookahead: s || this.maxLookahead,
        dynamicTokensEnabled: this.dynamicTokensEnabled,
        prodType: i
      }), c = /* @__PURE__ */ cs(this.fullRuleNameToShort[e.name], n2, t);
      this.setLaFuncCache(c, l);
    });
  }
  getKeyForAutomaticLookahead(e, t) {
    let n2 = /* @__PURE__ */ this.getLastExplicitRuleShortName();
    return cs(n2, e, t);
  }
  getLaFuncFromCache(e) {
    return this.lookAheadFuncsCache.get(e);
  }
  setLaFuncCache(e, t) {
    this.lookAheadFuncsCache.set(e, t);
  }
}, __46 = new WeakMap(), __privateAdd(_T, __46, m$1(_T, "LooksAhead")), _T), Xo = (_U = class extends De {
  constructor() {
    super(...arguments), this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  reset() {
    this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  visitOption(e) {
    this.dslMethods.option.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.dslMethods.repetitionWithSeparator.push(e);
  }
  visitRepetitionMandatory(e) {
    this.dslMethods.repetitionMandatory.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.dslMethods.repetitionMandatoryWithSeparator.push(e);
  }
  visitRepetition(e) {
    this.dslMethods.repetition.push(e);
  }
  visitAlternation(e) {
    this.dslMethods.alternation.push(e);
  }
}, __47 = new WeakMap(), __privateAdd(_U, __47, m$1(_U, "DslMethodsCollectorVisitor")), _U), us = new Xo();
function mp(r) {
  us.reset(), r.accept(us);
  let e = us.dslMethods;
  return us.reset(), e;
}
m$1(mp, "collectMethods");
function Qo(r, e) {
  isNaN(r.startOffset) === true ? (r.startOffset = e.startOffset, r.endOffset = e.endOffset) : r.endOffset < e.endOffset && (r.endOffset = e.endOffset);
}
m$1(Qo, "setNodeLocationOnlyOffset");
function Zo(r, e) {
  isNaN(r.startOffset) === true ? (r.startOffset = e.startOffset, r.startColumn = e.startColumn, r.startLine = e.startLine, r.endOffset = e.endOffset, r.endColumn = e.endColumn, r.endLine = e.endLine) : r.endOffset < e.endOffset && (r.endOffset = e.endOffset, r.endColumn = e.endColumn, r.endLine = e.endLine);
}
m$1(Zo, "setNodeLocationFull");
function _u(r, e, t) {
  r.children[t] === void 0 ? r.children[t] = [
    e
  ] : r.children[t].push(e);
}
m$1(_u, "addTerminalToCst");
function wu(r, e, t) {
  r.children[e] === void 0 ? r.children[e] = [
    t
  ] : r.children[e].push(t);
}
m$1(wu, "addNoneTerminalToCst");
var gp = "name";
function el(r, e) {
  Object.defineProperty(r, gp, {
    enumerable: false,
    configurable: true,
    writable: false,
    value: e
  });
}
m$1(el, "defineNameProp");
function yp(r, e) {
  let t = /* @__PURE__ */ h(r), n2 = t.length;
  for (let i = 0; i < n2; i++) {
    let s = t[i], o2 = r[s], l = o2.length;
    for (let c = 0; c < l; c++) {
      let u = o2[c];
      u.tokenTypeIdx === void 0 && this[u.name](u.children, e);
    }
  }
}
m$1(yp, "defaultVisit");
function Lu(r, e) {
  let t = /* @__PURE__ */ m$1(function() {
  }, "derivedConstructor");
  el(t, r + "BaseSemantics");
  let n2 = {
    visit: /* @__PURE__ */ m$1(function(i, s) {
      if (N(i) && (i = i[0]), !sn$1(i)) return this[i.name](i.children, s);
    }, "visit"),
    validateVisitor: /* @__PURE__ */ m$1(function() {
      let i = /* @__PURE__ */ Tp(this, e);
      if (!Cr$1(i)) {
        let s = /* @__PURE__ */ Jr(i, (o2) => o2.msg);
        throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${s.join(`

`).replace(/\n/g, `
	`)}`);
      }
    }, "validateVisitor")
  };
  return t.prototype = n2, t.prototype.constructor = t, t._RULE_NAMES = e, t;
}
m$1(Lu, "createBaseSemanticVisitorConstructor");
function Ou(r, e, t) {
  let n2 = /* @__PURE__ */ m$1(function() {
  }, "derivedConstructor");
  el(n2, r + "BaseSemanticsWithDefaults");
  let i = /* @__PURE__ */ Object.create(t.prototype);
  return Zr$1(e, (s) => {
    i[s] = yp;
  }), n2.prototype = i, n2.prototype.constructor = n2, n2;
}
m$1(Ou, "createBaseVisitorConstructorWithDefaults");
var tl;
(function(r) {
  r[r.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", r[r.MISSING_METHOD = 1] = "MISSING_METHOD";
})(tl || (tl = {}));
function Tp(r, e) {
  return xp(r, e);
}
m$1(Tp, "validateVisitor");
function xp(r, e) {
  let t = /* @__PURE__ */ fn$1(e, (i) => T(r[i]) === false), n2 = /* @__PURE__ */ Jr(t, (i) => ({
    msg: `Missing visitor method: <${i}> on ${r.constructor.name} CST Visitor.`,
    type: tl.MISSING_METHOD,
    methodName: i
  }));
  return Ai$1(n2);
}
m$1(xp, "validateMissingCstMethods");
var ms = (_V = class {
  initTreeBuilder(e) {
    if (this.CST_STACK = [], this.outputCst = e.outputCst, this.nodeLocationTracking = fm$1(e, "nodeLocationTracking") ? e.nodeLocationTracking : Fe.nodeLocationTracking, !this.outputCst) this.cstInvocationStateUpdate = kr$1, this.cstFinallyStateUpdate = kr$1, this.cstPostTerminal = kr$1, this.cstPostNonTerminal = kr$1, this.cstPostRule = kr$1;
    else if (/full/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = Zo, this.setNodeLocationFromNode = Zo, this.cstPostRule = kr$1, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = kr$1, this.setNodeLocationFromNode = kr$1, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
    else if (/onlyOffset/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = Qo, this.setNodeLocationFromNode = Qo, this.cstPostRule = kr$1, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = kr$1, this.setNodeLocationFromNode = kr$1, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
    else if (/none/i.test(this.nodeLocationTracking)) this.setNodeLocationFromToken = kr$1, this.setNodeLocationFromNode = kr$1, this.cstPostRule = kr$1, this.setInitialNodeLocation = kr$1;
    else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`);
  }
  setInitialNodeLocationOnlyOffsetRecovery(e) {
    e.location = {
      startOffset: NaN,
      endOffset: NaN
    };
  }
  setInitialNodeLocationOnlyOffsetRegular(e) {
    e.location = {
      startOffset: this.LA(1).startOffset,
      endOffset: NaN
    };
  }
  setInitialNodeLocationFullRecovery(e) {
    e.location = {
      startOffset: NaN,
      startLine: NaN,
      startColumn: NaN,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  setInitialNodeLocationFullRegular(e) {
    let t = /* @__PURE__ */ this.LA(1);
    e.location = {
      startOffset: t.startOffset,
      startLine: t.startLine,
      startColumn: t.startColumn,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  cstInvocationStateUpdate(e) {
    let t = {
      name: e,
      children: /* @__PURE__ */ Object.create(null)
    };
    this.setInitialNodeLocation(t), this.CST_STACK.push(t);
  }
  cstFinallyStateUpdate() {
    this.CST_STACK.pop();
  }
  cstPostRuleFull(e) {
    let t = /* @__PURE__ */ this.LA(0), n2 = e.location;
    n2.startOffset <= t.startOffset ? (n2.endOffset = t.endOffset, n2.endLine = t.endLine, n2.endColumn = t.endColumn) : (n2.startOffset = NaN, n2.startLine = NaN, n2.startColumn = NaN);
  }
  cstPostRuleOnlyOffset(e) {
    let t = /* @__PURE__ */ this.LA(0), n2 = e.location;
    n2.startOffset <= t.startOffset ? n2.endOffset = t.endOffset : n2.startOffset = NaN;
  }
  cstPostTerminal(e, t) {
    let n2 = this.CST_STACK[this.CST_STACK.length - 1];
    _u(n2, t, e), this.setNodeLocationFromToken(n2.location, t);
  }
  cstPostNonTerminal(e, t) {
    let n2 = this.CST_STACK[this.CST_STACK.length - 1];
    wu(n2, t, e), this.setNodeLocationFromNode(n2.location, e.location);
  }
  getBaseCstVisitorConstructor() {
    if (sn$1(this.baseCstVisitorConstructor)) {
      let e = /* @__PURE__ */ Lu(this.className, /* @__PURE__ */ h(this.gastProductionsCache));
      return this.baseCstVisitorConstructor = e, e;
    }
    return this.baseCstVisitorConstructor;
  }
  getBaseCstVisitorConstructorWithDefaults() {
    if (sn$1(this.baseCstVisitorWithDefaultsConstructor)) {
      let e = /* @__PURE__ */ Ou(this.className, /* @__PURE__ */ h(this.gastProductionsCache), /* @__PURE__ */ this.getBaseCstVisitorConstructor());
      return this.baseCstVisitorWithDefaultsConstructor = e, e;
    }
    return this.baseCstVisitorWithDefaultsConstructor;
  }
  getLastExplicitRuleShortName() {
    let e = this.RULE_STACK;
    return e[e.length - 1];
  }
  getPreviousExplicitRuleShortName() {
    let e = this.RULE_STACK;
    return e[e.length - 2];
  }
  getLastExplicitRuleOccurrenceIndex() {
    let e = this.RULE_OCCURRENCE_STACK;
    return e[e.length - 1];
  }
}, __48 = new WeakMap(), __privateAdd(_V, __48, m$1(_V, "TreeBuilder")), _V);
var gs = (_W = class {
  initLexerAdapter() {
    this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
  }
  set input(e) {
    if (this.selfAnalysisDone !== true) throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
    this.reset(), this.tokVector = e, this.tokVectorLength = e.length;
  }
  get input() {
    return this.tokVector;
  }
  SKIP_TOKEN() {
    return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : Ur;
  }
  LA(e) {
    let t = this.currIdx + e;
    return t < 0 || this.tokVectorLength <= t ? Ur : this.tokVector[t];
  }
  consumeToken() {
    this.currIdx++;
  }
  exportLexerState() {
    return this.currIdx;
  }
  importLexerState(e) {
    this.currIdx = e;
  }
  resetLexerState() {
    this.currIdx = -1;
  }
  moveToTerminatedState() {
    this.currIdx = this.tokVector.length - 1;
  }
  getLexerPosition() {
    return this.exportLexerState();
  }
}, __49 = new WeakMap(), __privateAdd(_W, __49, m$1(_W, "LexerAdapter")), _W);
var ys = (_X = class {
  ACTION(e) {
    return e.call(this);
  }
  consume(e, t, n2) {
    return this.consumeInternal(t, e, n2);
  }
  subrule(e, t, n2) {
    return this.subruleInternal(t, e, n2);
  }
  option(e, t) {
    return this.optionInternal(t, e);
  }
  or(e, t) {
    return this.orInternal(t, e);
  }
  many(e, t) {
    return this.manyInternal(e, t);
  }
  atLeastOne(e, t) {
    return this.atLeastOneInternal(e, t);
  }
  CONSUME(e, t) {
    return this.consumeInternal(e, 0, t);
  }
  CONSUME1(e, t) {
    return this.consumeInternal(e, 1, t);
  }
  CONSUME2(e, t) {
    return this.consumeInternal(e, 2, t);
  }
  CONSUME3(e, t) {
    return this.consumeInternal(e, 3, t);
  }
  CONSUME4(e, t) {
    return this.consumeInternal(e, 4, t);
  }
  CONSUME5(e, t) {
    return this.consumeInternal(e, 5, t);
  }
  CONSUME6(e, t) {
    return this.consumeInternal(e, 6, t);
  }
  CONSUME7(e, t) {
    return this.consumeInternal(e, 7, t);
  }
  CONSUME8(e, t) {
    return this.consumeInternal(e, 8, t);
  }
  CONSUME9(e, t) {
    return this.consumeInternal(e, 9, t);
  }
  SUBRULE(e, t) {
    return this.subruleInternal(e, 0, t);
  }
  SUBRULE1(e, t) {
    return this.subruleInternal(e, 1, t);
  }
  SUBRULE2(e, t) {
    return this.subruleInternal(e, 2, t);
  }
  SUBRULE3(e, t) {
    return this.subruleInternal(e, 3, t);
  }
  SUBRULE4(e, t) {
    return this.subruleInternal(e, 4, t);
  }
  SUBRULE5(e, t) {
    return this.subruleInternal(e, 5, t);
  }
  SUBRULE6(e, t) {
    return this.subruleInternal(e, 6, t);
  }
  SUBRULE7(e, t) {
    return this.subruleInternal(e, 7, t);
  }
  SUBRULE8(e, t) {
    return this.subruleInternal(e, 8, t);
  }
  SUBRULE9(e, t) {
    return this.subruleInternal(e, 9, t);
  }
  OPTION(e) {
    return this.optionInternal(e, 0);
  }
  OPTION1(e) {
    return this.optionInternal(e, 1);
  }
  OPTION2(e) {
    return this.optionInternal(e, 2);
  }
  OPTION3(e) {
    return this.optionInternal(e, 3);
  }
  OPTION4(e) {
    return this.optionInternal(e, 4);
  }
  OPTION5(e) {
    return this.optionInternal(e, 5);
  }
  OPTION6(e) {
    return this.optionInternal(e, 6);
  }
  OPTION7(e) {
    return this.optionInternal(e, 7);
  }
  OPTION8(e) {
    return this.optionInternal(e, 8);
  }
  OPTION9(e) {
    return this.optionInternal(e, 9);
  }
  OR(e) {
    return this.orInternal(e, 0);
  }
  OR1(e) {
    return this.orInternal(e, 1);
  }
  OR2(e) {
    return this.orInternal(e, 2);
  }
  OR3(e) {
    return this.orInternal(e, 3);
  }
  OR4(e) {
    return this.orInternal(e, 4);
  }
  OR5(e) {
    return this.orInternal(e, 5);
  }
  OR6(e) {
    return this.orInternal(e, 6);
  }
  OR7(e) {
    return this.orInternal(e, 7);
  }
  OR8(e) {
    return this.orInternal(e, 8);
  }
  OR9(e) {
    return this.orInternal(e, 9);
  }
  MANY(e) {
    this.manyInternal(0, e);
  }
  MANY1(e) {
    this.manyInternal(1, e);
  }
  MANY2(e) {
    this.manyInternal(2, e);
  }
  MANY3(e) {
    this.manyInternal(3, e);
  }
  MANY4(e) {
    this.manyInternal(4, e);
  }
  MANY5(e) {
    this.manyInternal(5, e);
  }
  MANY6(e) {
    this.manyInternal(6, e);
  }
  MANY7(e) {
    this.manyInternal(7, e);
  }
  MANY8(e) {
    this.manyInternal(8, e);
  }
  MANY9(e) {
    this.manyInternal(9, e);
  }
  MANY_SEP(e) {
    this.manySepFirstInternal(0, e);
  }
  MANY_SEP1(e) {
    this.manySepFirstInternal(1, e);
  }
  MANY_SEP2(e) {
    this.manySepFirstInternal(2, e);
  }
  MANY_SEP3(e) {
    this.manySepFirstInternal(3, e);
  }
  MANY_SEP4(e) {
    this.manySepFirstInternal(4, e);
  }
  MANY_SEP5(e) {
    this.manySepFirstInternal(5, e);
  }
  MANY_SEP6(e) {
    this.manySepFirstInternal(6, e);
  }
  MANY_SEP7(e) {
    this.manySepFirstInternal(7, e);
  }
  MANY_SEP8(e) {
    this.manySepFirstInternal(8, e);
  }
  MANY_SEP9(e) {
    this.manySepFirstInternal(9, e);
  }
  AT_LEAST_ONE(e) {
    this.atLeastOneInternal(0, e);
  }
  AT_LEAST_ONE1(e) {
    return this.atLeastOneInternal(1, e);
  }
  AT_LEAST_ONE2(e) {
    this.atLeastOneInternal(2, e);
  }
  AT_LEAST_ONE3(e) {
    this.atLeastOneInternal(3, e);
  }
  AT_LEAST_ONE4(e) {
    this.atLeastOneInternal(4, e);
  }
  AT_LEAST_ONE5(e) {
    this.atLeastOneInternal(5, e);
  }
  AT_LEAST_ONE6(e) {
    this.atLeastOneInternal(6, e);
  }
  AT_LEAST_ONE7(e) {
    this.atLeastOneInternal(7, e);
  }
  AT_LEAST_ONE8(e) {
    this.atLeastOneInternal(8, e);
  }
  AT_LEAST_ONE9(e) {
    this.atLeastOneInternal(9, e);
  }
  AT_LEAST_ONE_SEP(e) {
    this.atLeastOneSepFirstInternal(0, e);
  }
  AT_LEAST_ONE_SEP1(e) {
    this.atLeastOneSepFirstInternal(1, e);
  }
  AT_LEAST_ONE_SEP2(e) {
    this.atLeastOneSepFirstInternal(2, e);
  }
  AT_LEAST_ONE_SEP3(e) {
    this.atLeastOneSepFirstInternal(3, e);
  }
  AT_LEAST_ONE_SEP4(e) {
    this.atLeastOneSepFirstInternal(4, e);
  }
  AT_LEAST_ONE_SEP5(e) {
    this.atLeastOneSepFirstInternal(5, e);
  }
  AT_LEAST_ONE_SEP6(e) {
    this.atLeastOneSepFirstInternal(6, e);
  }
  AT_LEAST_ONE_SEP7(e) {
    this.atLeastOneSepFirstInternal(7, e);
  }
  AT_LEAST_ONE_SEP8(e) {
    this.atLeastOneSepFirstInternal(8, e);
  }
  AT_LEAST_ONE_SEP9(e) {
    this.atLeastOneSepFirstInternal(9, e);
  }
  RULE(e, t) {
    let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gr;
    if (pm$1(this.definedRulesNames, e)) {
      let o2 = {
        message: /* @__PURE__ */ nt.buildDuplicateRuleNameError({
          topLevelRule: e,
          grammarName: this.className
        }),
        type: ye.DUPLICATE_RULE_NAME,
        ruleName: e
      };
      this.definitionErrors.push(o2);
    }
    this.definedRulesNames.push(e);
    let i = /* @__PURE__ */ this.defineRule(e, t, n2);
    return this[e] = i, i;
  }
  OVERRIDE_RULE(e, t) {
    let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gr;
    let i = /* @__PURE__ */ Tu(e, this.definedRulesNames, this.className);
    this.definitionErrors = /* @__PURE__ */ this.definitionErrors.concat(i);
    let s = /* @__PURE__ */ this.defineRule(e, t, n2);
    return this[e] = s, s;
  }
  BACKTRACK(e, t) {
    return function() {
      this.isBackTrackingStack.push(1);
      let n2 = /* @__PURE__ */ this.saveRecogState();
      try {
        return e.apply(this, t), true;
      } catch (i) {
        if (Dt(i)) return false;
        throw i;
      } finally {
        this.reloadRecogState(n2), this.isBackTrackingStack.pop();
      }
    };
  }
  getGAstProductions() {
    return this.gastProductionsCache;
  }
  getSerializedGastProductions() {
    return Ki(/* @__PURE__ */ Xr$1(this.gastProductionsCache));
  }
}, __50 = new WeakMap(), __privateAdd(_X, __50, m$1(_X, "RecognizerApi")), _X);
var Ts = (_Y = class {
  initRecognizerEngine(e, t) {
    if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = Pr, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, fm$1(t, "serializedGrammar")) throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);
    if (N(e)) {
      if (Cr$1(e)) throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);
      if (typeof e[0].startOffset == "number") throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`);
    }
    if (N(e)) this.tokensMap = /* @__PURE__ */ Rn$1(e, (s, o2) => (s[o2.name] = o2, s), {});
    else if (fm$1(e, "modes") && Ui$1(/* @__PURE__ */ Qr(/* @__PURE__ */ Xr$1(e.modes)), Yc)) {
      let s = /* @__PURE__ */ Qr(/* @__PURE__ */ Xr$1(e.modes)), o2 = /* @__PURE__ */ mp$1(s);
      this.tokensMap = /* @__PURE__ */ Rn$1(o2, (l, c) => (l[c.name] = c, l), {});
    } else if (m$2(e)) this.tokensMap = /* @__PURE__ */ _f$1(e);
    else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
    this.tokensMap.EOF = qe;
    let n2 = fm$1(e, "modes") ? Qr(/* @__PURE__ */ Xr$1(e.modes)) : Xr$1(e), i = /* @__PURE__ */ Ui$1(n2, (s) => Cr$1(s.categoryMatches));
    this.tokenMatcher = i ? Pr : kt, It(/* @__PURE__ */ Xr$1(this.tokensMap));
  }
  defineRule(e, t, n2) {
    if (this.selfAnalysisDone) throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    let i = fm$1(n2, "resyncEnabled") ? n2.resyncEnabled : Gr.resyncEnabled, s = fm$1(n2, "recoveryValueFunc") ? n2.recoveryValueFunc : Gr.recoveryValueFunc, o2 = this.ruleShortNameIdx << 12;
    this.ruleShortNameIdx++, this.shortRuleNameToFull[o2] = e, this.fullRuleNameToShort[e] = o2;
    let l;
    return this.outputCst === true ? l = /* @__PURE__ */ m$1(function() {
      for (var _len = arguments.length, f = new Array(_len), _key = 0; _key < _len; _key++) {
        f[_key] = arguments[_key];
      }
      try {
        this.ruleInvocationStateUpdate(o2, e, this.subruleIdx), t.apply(this, f);
        let d = this.CST_STACK[this.CST_STACK.length - 1];
        return this.cstPostRule(d), d;
      } catch (d) {
        return this.invokeRuleCatch(d, i, s);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    }, "invokeRuleWithTry") : l = /* @__PURE__ */ m$1(function() {
      for (var _len = arguments.length, f = new Array(_len), _key = 0; _key < _len; _key++) {
        f[_key] = arguments[_key];
      }
      try {
        return this.ruleInvocationStateUpdate(o2, e, this.subruleIdx), t.apply(this, f);
      } catch (d) {
        return this.invokeRuleCatch(d, i, s);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    }, "invokeRuleWithTryCst"), Object.assign(l, {
      ruleName: e,
      originalGrammarAction: t
    });
  }
  invokeRuleCatch(e, t, n2) {
    let i = this.RULE_STACK.length === 1, s = t && !this.isBackTracking() && this.recoveryEnabled;
    if (Dt(e)) {
      let o2 = e;
      if (s) {
        let l = /* @__PURE__ */ this.findReSyncTokenType();
        if (this.isInCurrentRuleReSyncSet(l)) if (o2.resyncedTokens = /* @__PURE__ */ this.reSyncTo(l), this.outputCst) {
          let c = this.CST_STACK[this.CST_STACK.length - 1];
          return c.recoveredNode = true, c;
        } else return n2(e);
        else {
          if (this.outputCst) {
            let c = this.CST_STACK[this.CST_STACK.length - 1];
            c.recoveredNode = true, o2.partialCstResult = c;
          }
          throw o2;
        }
      } else {
        if (i) return this.moveToTerminatedState(), n2(e);
        throw o2;
      }
    } else throw e;
  }
  optionInternal(e, t) {
    let n2 = /* @__PURE__ */ this.getKeyForAutomaticLookahead(512, t);
    return this.optionInternalLogic(e, t, n2);
  }
  optionInternalLogic(e, t, n2) {
    let i = /* @__PURE__ */ this.getLaFuncFromCache(n2), s;
    if (typeof e != "function") {
      s = e.DEF;
      let o2 = e.GATE;
      if (o2 !== void 0) {
        let l = i;
        i = /* @__PURE__ */ m$1(() => o2.call(this) && l.call(this), "lookAheadFunc");
      }
    } else s = e;
    if (i.call(this) === true) return s.call(this);
  }
  atLeastOneInternal(e, t) {
    let n2 = /* @__PURE__ */ this.getKeyForAutomaticLookahead(1024, e);
    return this.atLeastOneInternalLogic(e, t, n2);
  }
  atLeastOneInternalLogic(e, t, n2) {
    let i = /* @__PURE__ */ this.getLaFuncFromCache(n2), s;
    if (typeof t != "function") {
      s = t.DEF;
      let o2 = t.GATE;
      if (o2 !== void 0) {
        let l = i;
        i = /* @__PURE__ */ m$1(() => o2.call(this) && l.call(this), "lookAheadFunc");
      }
    } else s = t;
    if (i.call(this) === true) {
      let o2 = /* @__PURE__ */ this.doSingleRepetition(s);
      for (; i.call(this) === true && o2 === true; ) o2 = /* @__PURE__ */ this.doSingleRepetition(s);
    } else throw this.raiseEarlyExitException(e, ie.REPETITION_MANDATORY, t.ERR_MSG);
    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [
      e,
      t
    ], i, 1024, e, ts);
  }
  atLeastOneSepFirstInternal(e, t) {
    let n2 = /* @__PURE__ */ this.getKeyForAutomaticLookahead(1536, e);
    this.atLeastOneSepFirstInternalLogic(e, t, n2);
  }
  atLeastOneSepFirstInternalLogic(e, t, n2) {
    let i = t.DEF, s = t.SEP;
    if (this.getLaFuncFromCache(n2).call(this) === true) {
      i.call(this);
      let l = /* @__PURE__ */ m$1(() => this.tokenMatcher(/* @__PURE__ */ this.LA(1), s), "separatorLookAheadFunc");
      for (; this.tokenMatcher(/* @__PURE__ */ this.LA(1), s) === true; ) this.CONSUME(s), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        s,
        l,
        i,
        _n
      ], l, 1536, e, _n);
    } else throw this.raiseEarlyExitException(e, ie.REPETITION_MANDATORY_WITH_SEPARATOR, t.ERR_MSG);
  }
  manyInternal(e, t) {
    let n2 = /* @__PURE__ */ this.getKeyForAutomaticLookahead(768, e);
    return this.manyInternalLogic(e, t, n2);
  }
  manyInternalLogic(e, t, n2) {
    let i = /* @__PURE__ */ this.getLaFuncFromCache(n2), s;
    if (typeof t != "function") {
      s = t.DEF;
      let l = t.GATE;
      if (l !== void 0) {
        let c = i;
        i = /* @__PURE__ */ m$1(() => l.call(this) && c.call(this), "lookaheadFunction");
      }
    } else s = t;
    let o2 = true;
    for (; i.call(this) === true && o2 === true; ) o2 = /* @__PURE__ */ this.doSingleRepetition(s);
    this.attemptInRepetitionRecovery(this.manyInternal, [
      e,
      t
    ], i, 768, e, es, o2);
  }
  manySepFirstInternal(e, t) {
    let n2 = /* @__PURE__ */ this.getKeyForAutomaticLookahead(1280, e);
    this.manySepFirstInternalLogic(e, t, n2);
  }
  manySepFirstInternalLogic(e, t, n2) {
    let i = t.DEF, s = t.SEP;
    if (this.getLaFuncFromCache(n2).call(this) === true) {
      i.call(this);
      let l = /* @__PURE__ */ m$1(() => this.tokenMatcher(/* @__PURE__ */ this.LA(1), s), "separatorLookAheadFunc");
      for (; this.tokenMatcher(/* @__PURE__ */ this.LA(1), s) === true; ) this.CONSUME(s), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        s,
        l,
        i,
        Cn
      ], l, 1280, e, Cn);
    }
  }
  repetitionSepSecondInternal(e, t, n2, i, s) {
    for (; n2(); ) this.CONSUME(t), i.call(this);
    this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
      e,
      t,
      n2,
      i,
      s
    ], n2, 1536, e, s);
  }
  doSingleRepetition(e) {
    let t = /* @__PURE__ */ this.getLexerPosition();
    return e.call(this), this.getLexerPosition() > t;
  }
  orInternal(e, t) {
    let n2 = /* @__PURE__ */ this.getKeyForAutomaticLookahead(256, t), i = N(e) ? e : e.DEF, o2 = /* @__PURE__ */ this.getLaFuncFromCache(n2).call(this, i);
    if (o2 !== void 0) return i[o2].ALT.call(this);
    this.raiseNoAltException(t, e.ERR_MSG);
  }
  ruleFinallyStateUpdate() {
    if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === false) {
      let e = /* @__PURE__ */ this.LA(1), t = /* @__PURE__ */ this.errorMessageProvider.buildNotAllInputParsedMessage({
        firstRedundant: e,
        ruleName: /* @__PURE__ */ this.getCurrRuleFullName()
      });
      this.SAVE_ERROR(new $n(t, e));
    }
  }
  subruleInternal(e, t, n2) {
    let i;
    try {
      let s = n2 !== void 0 ? n2.ARGS : void 0;
      return this.subruleIdx = t, i = /* @__PURE__ */ e.apply(this, s), this.cstPostNonTerminal(i, n2 !== void 0 && n2.LABEL !== void 0 ? n2.LABEL : e.ruleName), i;
    } catch (s) {
      throw this.subruleInternalError(s, n2, e.ruleName);
    }
  }
  subruleInternalError(e, t, n2) {
    throw Dt(e) && e.partialCstResult !== void 0 && (this.cstPostNonTerminal(e.partialCstResult, t !== void 0 && t.LABEL !== void 0 ? t.LABEL : n2), delete e.partialCstResult), e;
  }
  consumeInternal(e, t, n2) {
    let i;
    try {
      let s = /* @__PURE__ */ this.LA(1);
      this.tokenMatcher(s, e) === true ? (this.consumeToken(), i = s) : this.consumeInternalError(e, s, n2);
    } catch (s) {
      i = /* @__PURE__ */ this.consumeInternalRecovery(e, t, s);
    }
    return this.cstPostTerminal(n2 !== void 0 && n2.LABEL !== void 0 ? n2.LABEL : e.name, i), i;
  }
  consumeInternalError(e, t, n2) {
    let i, s = /* @__PURE__ */ this.LA(0);
    throw n2 !== void 0 && n2.ERR_MSG ? i = n2.ERR_MSG : i = /* @__PURE__ */ this.errorMessageProvider.buildMismatchTokenMessage({
      expected: e,
      actual: t,
      previous: s,
      ruleName: /* @__PURE__ */ this.getCurrRuleFullName()
    }), this.SAVE_ERROR(new cr(i, t, s));
  }
  consumeInternalRecovery(e, t, n2) {
    if (this.recoveryEnabled && n2.name === "MismatchedTokenException" && !this.isBackTracking()) {
      let i = /* @__PURE__ */ this.getFollowsForInRuleRecovery(e, t);
      try {
        return this.tryInRuleRecovery(e, i);
      } catch (s) {
        throw s.name === qo ? n2 : s;
      }
    } else throw n2;
  }
  saveRecogState() {
    let e = this.errors, t = /* @__PURE__ */ _f$1(this.RULE_STACK);
    return {
      errors: e,
      lexerState: /* @__PURE__ */ this.exportLexerState(),
      RULE_STACK: t,
      CST_STACK: this.CST_STACK
    };
  }
  reloadRecogState(e) {
    this.errors = e.errors, this.importLexerState(e.lexerState), this.RULE_STACK = e.RULE_STACK;
  }
  ruleInvocationStateUpdate(e, t, n2) {
    this.RULE_OCCURRENCE_STACK.push(n2), this.RULE_STACK.push(e), this.cstInvocationStateUpdate(t);
  }
  isBackTracking() {
    return this.isBackTrackingStack.length !== 0;
  }
  getCurrRuleFullName() {
    let e = /* @__PURE__ */ this.getLastExplicitRuleShortName();
    return this.shortRuleNameToFull[e];
  }
  shortRuleNameToFullName(e) {
    return this.shortRuleNameToFull[e];
  }
  isAtEndOfInput() {
    return this.tokenMatcher(/* @__PURE__ */ this.LA(1), qe);
  }
  reset() {
    this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
  }
}, __51 = new WeakMap(), __privateAdd(_Y, __51, m$1(_Y, "RecognizerEngine")), _Y);
var xs = (_Z = class {
  initErrorHandler(e) {
    this._errors = [], this.errorMessageProvider = fm$1(e, "errorMessageProvider") ? e.errorMessageProvider : Fe.errorMessageProvider;
  }
  SAVE_ERROR(e) {
    if (Dt(e)) return e.context = {
      ruleStack: /* @__PURE__ */ this.getHumanReadableRuleStack(),
      ruleOccurrenceStack: /* @__PURE__ */ _f$1(this.RULE_OCCURRENCE_STACK)
    }, this._errors.push(e), e;
    throw Error("Trying to save an Error which is not a RecognitionException");
  }
  get errors() {
    return _f$1(this._errors);
  }
  set errors(e) {
    this._errors = e;
  }
  raiseEarlyExitException(e, t, n2) {
    let i = /* @__PURE__ */ this.getCurrRuleFullName(), s = this.getGAstProductions()[i], l = Dr(e, s, t, this.maxLookahead)[0], c = [];
    for (let f = 1; f <= this.maxLookahead; f++) c.push(/* @__PURE__ */ this.LA(f));
    let u = /* @__PURE__ */ this.errorMessageProvider.buildEarlyExitMessage({
      expectedIterationPaths: l,
      actual: c,
      previous: /* @__PURE__ */ this.LA(0),
      customUserDescription: n2,
      ruleName: i
    });
    throw this.SAVE_ERROR(new Pn(u, this.LA(1), this.LA(0)));
  }
  raiseNoAltException(e, t) {
    let n2 = /* @__PURE__ */ this.getCurrRuleFullName(), i = this.getGAstProductions()[n2], s = /* @__PURE__ */ Mr(e, i, this.maxLookahead), o2 = [];
    for (let u = 1; u <= this.maxLookahead; u++) o2.push(/* @__PURE__ */ this.LA(u));
    let l = /* @__PURE__ */ this.LA(0), c = /* @__PURE__ */ this.errorMessageProvider.buildNoViableAltMessage({
      expectedPathsPerAlt: s,
      actual: o2,
      previous: l,
      customUserDescription: t,
      ruleName: /* @__PURE__ */ this.getCurrRuleFullName()
    });
    throw this.SAVE_ERROR(new On(c, this.LA(1), l));
  }
}, __52 = new WeakMap(), __privateAdd(_Z, __52, m$1(_Z, "ErrorHandler")), _Z);
var Rs = (__53 = class {
  initContentAssist() {
  }
  computeContentAssist(e, t) {
    let n2 = this.gastProductionsCache[e];
    if (sn$1(n2)) throw Error(`Rule ->${e}<- does not exist in this grammar.`);
    return ns([
      n2
    ], t, this.tokenMatcher, this.maxLookahead);
  }
  getNextPossibleTokenTypes(e) {
    let t = /* @__PURE__ */ De$1(e.ruleStack), i = this.getGAstProductions()[t];
    return new Zi(i, e).startWalking();
  }
}, __54 = new WeakMap(), __privateAdd(__53, __54, m$1(__53, "ContentAssist")), __53);
var vs = {
  description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(vs);
var $u = true, Pu = Math.pow(2, 8) - 1, Mu = /* @__PURE__ */ Qi({
  name: "RECORDING_PHASE_TOKEN",
  pattern: le.NA
});
It([
  Mu
]);
var Du = /* @__PURE__ */ lr(Mu, `This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`, -1, -1, -1, -1, -1, -1);
Object.freeze(Du);
var Ep = {
  name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  children: {}
}, Es = (_$ = class {
  initGastRecorder(e) {
    this.recordingProdStack = [], this.RECORDING_PHASE = false;
  }
  enableRecording() {
    this.RECORDING_PHASE = true, this.TRACE_INIT("Enable Recording", () => {
      for (let e = 0; e < 10; e++) {
        let t = e > 0 ? e : "";
        this[`CONSUME${t}`] = function(n2, i) {
          return this.consumeInternalRecord(n2, e, i);
        }, this[`SUBRULE${t}`] = function(n2, i) {
          return this.subruleInternalRecord(n2, e, i);
        }, this[`OPTION${t}`] = function(n2) {
          return this.optionInternalRecord(n2, e);
        }, this[`OR${t}`] = function(n2) {
          return this.orInternalRecord(n2, e);
        }, this[`MANY${t}`] = function(n2) {
          this.manyInternalRecord(e, n2);
        }, this[`MANY_SEP${t}`] = function(n2) {
          this.manySepFirstInternalRecord(e, n2);
        }, this[`AT_LEAST_ONE${t}`] = function(n2) {
          this.atLeastOneInternalRecord(e, n2);
        }, this[`AT_LEAST_ONE_SEP${t}`] = function(n2) {
          this.atLeastOneSepFirstInternalRecord(e, n2);
        };
      }
      this.consume = function(e, t, n2) {
        return this.consumeInternalRecord(t, e, n2);
      }, this.subrule = function(e, t, n2) {
        return this.subruleInternalRecord(t, e, n2);
      }, this.option = function(e, t) {
        return this.optionInternalRecord(t, e);
      }, this.or = function(e, t) {
        return this.orInternalRecord(t, e);
      }, this.many = function(e, t) {
        this.manyInternalRecord(e, t);
      }, this.atLeastOne = function(e, t) {
        this.atLeastOneInternalRecord(e, t);
      }, this.ACTION = this.ACTION_RECORD, this.BACKTRACK = this.BACKTRACK_RECORD, this.LA = this.LA_RECORD;
    });
  }
  disableRecording() {
    this.RECORDING_PHASE = false, this.TRACE_INIT("Deleting Recording methods", () => {
      let e = this;
      for (let t = 0; t < 10; t++) {
        let n2 = t > 0 ? t : "";
        delete e[`CONSUME${n2}`], delete e[`SUBRULE${n2}`], delete e[`OPTION${n2}`], delete e[`OR${n2}`], delete e[`MANY${n2}`], delete e[`MANY_SEP${n2}`], delete e[`AT_LEAST_ONE${n2}`], delete e[`AT_LEAST_ONE_SEP${n2}`];
      }
      delete e.consume, delete e.subrule, delete e.option, delete e.or, delete e.many, delete e.atLeastOne, delete e.ACTION, delete e.BACKTRACK, delete e.LA;
    });
  }
  ACTION_RECORD(e) {
  }
  BACKTRACK_RECORD(e, t) {
    return () => true;
  }
  LA_RECORD(e) {
    return Ur;
  }
  topLevelRuleRecord(e, t) {
    try {
      let n2 = new Me({
        definition: [],
        name: e
      });
      return n2.name = e, this.recordingProdStack.push(n2), t.call(this), this.recordingProdStack.pop(), n2;
    } catch (n2) {
      if (n2.KNOWN_RECORDER_ERROR !== true) try {
        n2.message = n2.message + `
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`;
      } catch {
        throw n2;
      }
      throw n2;
    }
  }
  optionInternalRecord(e, t) {
    return Mn.call(this, z, e, t);
  }
  atLeastOneInternalRecord(e, t) {
    Mn.call(this, Q, t, e);
  }
  atLeastOneSepFirstInternalRecord(e, t) {
    Mn.call(this, Z, t, e, $u);
  }
  manyInternalRecord(e, t) {
    Mn.call(this, F, t, e);
  }
  manySepFirstInternalRecord(e, t) {
    Mn.call(this, q, t, e, $u);
  }
  orInternalRecord(e, t) {
    return Ap.call(this, e, t);
  }
  subruleInternalRecord(e, t, n2) {
    if (As(t), !e || fm$1(e, "ruleName") === false) {
      let l = new Error(`<SUBRULE${bu(t)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw l.KNOWN_RECORDER_ERROR = true, l;
    }
    let i = /* @__PURE__ */ Df$1(this.recordingProdStack), s = e.ruleName, o2 = new H({
      idx: t,
      nonTerminalName: s,
      label: n2 == null ? void 0 : n2.LABEL,
      referencedRule: void 0
    });
    return i.definition.push(o2), this.outputCst ? Ep : vs;
  }
  consumeInternalRecord(e, t, n2) {
    if (As(t), !Mo(e)) {
      let o2 = new Error(`<CONSUME${bu(t)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw o2.KNOWN_RECORDER_ERROR = true, o2;
    }
    let i = /* @__PURE__ */ Df$1(this.recordingProdStack), s = new D({
      idx: t,
      terminalType: e,
      label: n2 == null ? void 0 : n2.LABEL
    });
    return i.definition.push(s), Du;
  }
}, __55 = new WeakMap(), __privateAdd(_$, __55, m$1(_$, "GastRecorder")), _$);
function Mn(r, e, t) {
  let n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  As(t);
  let i = /* @__PURE__ */ Df$1(this.recordingProdStack), s = T(e) ? e : e.DEF, o2 = new r({
    definition: [],
    idx: t
  });
  return n2 && (o2.separator = e.SEP), fm$1(e, "MAX_LOOKAHEAD") && (o2.maxLookahead = e.MAX_LOOKAHEAD), this.recordingProdStack.push(o2), s.call(this), i.definition.push(o2), this.recordingProdStack.pop(), vs;
}
m$1(Mn, "recordProd");
function Ap(r, e) {
  As(e);
  let t = /* @__PURE__ */ Df$1(this.recordingProdStack), n2 = N(r) === false, i = n2 === false ? r : r.DEF, s = new X({
    definition: [],
    idx: e,
    ignoreAmbiguities: n2 && r.IGNORE_AMBIGUITIES === true
  });
  fm$1(r, "MAX_LOOKAHEAD") && (s.maxLookahead = r.MAX_LOOKAHEAD);
  let o2 = /* @__PURE__ */ fp$1(i, (l) => T(l.GATE));
  return s.hasPredicates = o2, t.definition.push(s), Zr$1(i, (l) => {
    let c = new J({
      definition: []
    });
    s.definition.push(c), fm$1(l, "IGNORE_AMBIGUITIES") ? c.ignoreAmbiguities = l.IGNORE_AMBIGUITIES : fm$1(l, "GATE") && (c.ignoreAmbiguities = true), this.recordingProdStack.push(c), l.ALT.call(this), this.recordingProdStack.pop();
  }), vs;
}
m$1(Ap, "recordOrProd");
function bu(r) {
  return r === 0 ? "" : `${r}`;
}
m$1(bu, "getIdxSuffix");
function As(r) {
  if (r < 0 || r > Pu) {
    let e = new Error(`Invalid DSL Method idx value: <${r}>
	Idx value must be a none negative value smaller than ${Pu + 1}`);
    throw e.KNOWN_RECORDER_ERROR = true, e;
  }
}
m$1(As, "assertMethodIdxIsValid");
var ks = (_aa = class {
  initPerformanceTracer(e) {
    if (fm$1(e, "traceInitPerf")) {
      let t = e.traceInitPerf, n2 = typeof t == "number";
      this.traceInitMaxIdent = n2 ? t : 1 / 0, this.traceInitPerf = n2 ? t > 0 : t;
    } else this.traceInitMaxIdent = 0, this.traceInitPerf = Fe.traceInitPerf;
    this.traceInitIndent = -1;
  }
  TRACE_INIT(e, t) {
    if (this.traceInitPerf === true) {
      this.traceInitIndent++;
      let n2 = /* @__PURE__ */ new Array(this.traceInitIndent + 1).join("	");
      this.traceInitIndent < this.traceInitMaxIdent && console.log(`${n2}--> <${e}>`);
      let { time: i, value: s } = vn(t), o2 = i > 10 ? console.warn : console.log;
      return this.traceInitIndent < this.traceInitMaxIdent && o2(`${n2}<-- <${e}> time: ${i}ms`), this.traceInitIndent--, s;
    } else return t();
  }
}, __56 = new WeakMap(), __privateAdd(_aa, __56, m$1(_aa, "PerformanceTracer")), _aa);
function Fu(r, e) {
  e.forEach((t) => {
    let n2 = t.prototype;
    Object.getOwnPropertyNames(n2).forEach((i) => {
      if (i === "constructor") return;
      let s = /* @__PURE__ */ Object.getOwnPropertyDescriptor(n2, i);
      s && (s.get || s.set) ? Object.defineProperty(r.prototype, i, s) : r.prototype[i] = t.prototype[i];
    });
  });
}
m$1(Fu, "applyMixins");
var Ur = /* @__PURE__ */ lr(qe, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(Ur);
var Fe = /* @__PURE__ */ Object.freeze({
  recoveryEnabled: false,
  maxLookahead: 3,
  dynamicTokensEnabled: false,
  outputCst: true,
  errorMessageProvider: St,
  nodeLocationTracking: "none",
  traceInitPerf: false,
  skipValidations: false
}), Gr = /* @__PURE__ */ Object.freeze({
  recoveryValueFunc: /* @__PURE__ */ m$1(() => {
  }, "recoveryValueFunc"),
  resyncEnabled: true
}), ye;
(function(r) {
  r[r.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", r[r.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", r[r.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", r[r.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", r[r.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", r[r.LEFT_RECURSION = 5] = "LEFT_RECURSION", r[r.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", r[r.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", r[r.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", r[r.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", r[r.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", r[r.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", r[r.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", r[r.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(ye || (ye = {}));
function Is() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
  return function() {
    return r;
  };
}
m$1(Is, "EMPTY_ALT");
var Dn = (_ba = class {
  static performSelfAnalysis(e) {
    throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
  }
  performSelfAnalysis() {
    this.TRACE_INIT("performSelfAnalysis", () => {
      let e;
      this.selfAnalysisDone = true;
      let t = this.className;
      this.TRACE_INIT("toFastProps", () => {
        kn(this);
      }), this.TRACE_INIT("Grammar Recording", () => {
        try {
          this.enableRecording(), Zr$1(this.definedRulesNames, (i) => {
            let o2 = this[i].originalGrammarAction, l;
            this.TRACE_INIT(`${i} Rule`, () => {
              l = /* @__PURE__ */ this.topLevelRuleRecord(i, o2);
            }), this.gastProductionsCache[i] = l;
          });
        } finally {
          this.disableRecording();
        }
      });
      let n2 = [];
      if (this.TRACE_INIT("Grammar Resolving", () => {
        n2 = /* @__PURE__ */ Au({
          rules: /* @__PURE__ */ Xr$1(this.gastProductionsCache)
        }), this.definitionErrors = /* @__PURE__ */ this.definitionErrors.concat(n2);
      }), this.TRACE_INIT("Grammar Validations", () => {
        if (Cr$1(n2) && this.skipValidations === false) {
          let i = /* @__PURE__ */ vu({
            rules: /* @__PURE__ */ Xr$1(this.gastProductionsCache),
            tokenTypes: /* @__PURE__ */ Xr$1(this.tokensMap),
            errMsgProvider: nt,
            grammarName: t
          }), s = /* @__PURE__ */ mu({
            lookaheadStrategy: this.lookaheadStrategy,
            rules: /* @__PURE__ */ Xr$1(this.gastProductionsCache),
            tokenTypes: /* @__PURE__ */ Xr$1(this.tokensMap),
            grammarName: t
          });
          this.definitionErrors = /* @__PURE__ */ this.definitionErrors.concat(i, s);
        }
      }), Cr$1(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT("computeAllProdsFollows", () => {
        let i = /* @__PURE__ */ wc(/* @__PURE__ */ Xr$1(this.gastProductionsCache));
        this.resyncFollows = i;
      }), this.TRACE_INIT("ComputeLookaheadFunctions", () => {
        var i, s;
        (s = (i = this.lookaheadStrategy).initialize) === null || s === void 0 || s.call(i, {
          rules: /* @__PURE__ */ Xr$1(this.gastProductionsCache)
        }), this.preComputeLookaheadFunctions(/* @__PURE__ */ Xr$1(this.gastProductionsCache));
      })), !_ba.DEFER_DEFINITION_ERRORS_HANDLING && !Cr$1(this.definitionErrors)) throw e = /* @__PURE__ */ Jr(this.definitionErrors, (i) => i.message), new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`);
    });
  }
  constructor(e, t) {
    this.definitionErrors = [], this.selfAnalysisDone = false;
    let n2 = this;
    if (n2.initErrorHandler(t), n2.initLexerAdapter(), n2.initLooksAhead(t), n2.initRecognizerEngine(e, t), n2.initRecoverable(t), n2.initTreeBuilder(t), n2.initContentAssist(), n2.initGastRecorder(t), n2.initPerformanceTracer(t), fm$1(t, "ignoredIssues")) throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);
    this.skipValidations = fm$1(t, "skipValidations") ? t.skipValidations : Fe.skipValidations;
  }
}, __57 = new WeakMap(), __privateAdd(_ba, __57, m$1(_ba, "Parser")), _ba);
Dn.DEFER_DEFINITION_ERRORS_HANDLING = false;
Fu(Dn, [
  ls,
  fs,
  ms,
  gs,
  Ts,
  ys,
  xs,
  Rs,
  Es,
  ks
]);
var Fn = (_ca = class extends Dn {
  constructor(e, t = Fe) {
    let n2 = /* @__PURE__ */ _f$1(t);
    n2.outputCst = false, super(e, n2);
  }
}, __58 = new WeakMap(), __privateAdd(_ca, __58, m$1(_ca, "EmbeddedActionsParser")), _ca);
function ur(r, e, t) {
  return `${r.name}_${e}_${t}`;
}
m$1(ur, "buildATNKey");
var Ft = 1, kp = 2, Uu = 4, Gu = 5;
var jr = 7, Ip = 8, Np = 9, Sp = 10, Cp = 11, Bu = 12, Un = (_da = class {
  constructor(e) {
    this.target = e;
  }
  isEpsilon() {
    return false;
  }
}, __59 = new WeakMap(), __privateAdd(_da, __59, m$1(_da, "AbstractTransition")), _da), Br = (_ea = class extends Un {
  constructor(e, t) {
    super(e), this.tokenType = t;
  }
}, __60 = new WeakMap(), __privateAdd(_ea, __60, m$1(_ea, "AtomTransition")), _ea), Gn = (_fa = class extends Un {
  constructor(e) {
    super(e);
  }
  isEpsilon() {
    return true;
  }
}, __61 = new WeakMap(), __privateAdd(_fa, __61, m$1(_fa, "EpsilonTransition")), _fa), Wr = (_ga = class extends Un {
  constructor(e, t, n2) {
    super(e), this.rule = t, this.followState = n2;
  }
  isEpsilon() {
    return true;
  }
}, __62 = new WeakMap(), __privateAdd(_ga, __62, m$1(_ga, "RuleTransition")), _ga);
function Wu(r) {
  let e = {
    decisionMap: {},
    decisionStates: [],
    ruleToStartState: /* @__PURE__ */ new Map(),
    ruleToStopState: /* @__PURE__ */ new Map(),
    states: []
  };
  _p(e, r);
  let t = r.length;
  for (let n2 = 0; n2 < t; n2++) {
    let i = r[n2], s = /* @__PURE__ */ fr(e, i, i);
    s !== void 0 && Gp(e, i, s);
  }
  return e;
}
m$1(Wu, "createATN");
function _p(r, e) {
  let t = e.length;
  for (let n2 = 0; n2 < t; n2++) {
    let i = e[n2], s = /* @__PURE__ */ Re(r, i, void 0, {
      type: kp
    }), o2 = /* @__PURE__ */ Re(r, i, void 0, {
      type: jr
    });
    s.stop = o2, r.ruleToStartState.set(i, s), r.ruleToStopState.set(i, o2);
  }
}
m$1(_p, "createRuleStartAndStopATNStates");
function ju(r, e, t) {
  return t instanceof D ? nl(r, e, t.terminalType, t) : t instanceof H ? Up(r, e, t) : t instanceof X ? Pp(r, e, t) : t instanceof z ? bp(r, e, t) : t instanceof F ? wp(r, e, t) : t instanceof q ? Lp(r, e, t) : t instanceof Q ? Op(r, e, t) : t instanceof Z ? $p(r, e, t) : fr(r, e, t);
}
m$1(ju, "atom");
function wp(r, e, t) {
  let n2 = /* @__PURE__ */ Re(r, e, t, {
    type: Gu
  });
  Ut(r, n2);
  let i = /* @__PURE__ */ Vr(r, e, n2, t, /* @__PURE__ */ fr(r, e, t));
  return Ku(r, e, t, i);
}
m$1(wp, "repetition");
function Lp(r, e, t) {
  let n2 = /* @__PURE__ */ Re(r, e, t, {
    type: Gu
  });
  Ut(r, n2);
  let i = /* @__PURE__ */ Vr(r, e, n2, t, /* @__PURE__ */ fr(r, e, t)), s = /* @__PURE__ */ nl(r, e, t.separator, t);
  return Ku(r, e, t, i, s);
}
m$1(Lp, "repetitionSep");
function Op(r, e, t) {
  let n2 = /* @__PURE__ */ Re(r, e, t, {
    type: Uu
  });
  Ut(r, n2);
  let i = /* @__PURE__ */ Vr(r, e, n2, t, /* @__PURE__ */ fr(r, e, t));
  return Vu(r, e, t, i);
}
m$1(Op, "repetitionMandatory");
function $p(r, e, t) {
  let n2 = /* @__PURE__ */ Re(r, e, t, {
    type: Uu
  });
  Ut(r, n2);
  let i = /* @__PURE__ */ Vr(r, e, n2, t, /* @__PURE__ */ fr(r, e, t)), s = /* @__PURE__ */ nl(r, e, t.separator, t);
  return Vu(r, e, t, i, s);
}
m$1($p, "repetitionMandatorySep");
function Pp(r, e, t) {
  let n2 = /* @__PURE__ */ Re(r, e, t, {
    type: Ft
  });
  Ut(r, n2);
  let i = /* @__PURE__ */ Jr(t.definition, (o2) => ju(r, e, o2));
  return Vr(r, e, n2, t, ...i);
}
m$1(Pp, "alternation");
function bp(r, e, t) {
  let n2 = /* @__PURE__ */ Re(r, e, t, {
    type: Ft
  });
  Ut(r, n2);
  let i = /* @__PURE__ */ Vr(r, e, n2, t, /* @__PURE__ */ fr(r, e, t));
  return Mp(r, e, t, i);
}
m$1(bp, "option");
function fr(r, e, t) {
  let n2 = /* @__PURE__ */ fn$1(/* @__PURE__ */ Jr(t.definition, (i) => ju(r, e, i)), (i) => i !== void 0);
  return n2.length === 1 ? n2[0] : n2.length === 0 ? void 0 : Fp(r, n2);
}
m$1(fr, "block");
function Vu(r, e, t, n2, i) {
  let s = n2.left, o2 = n2.right, l = /* @__PURE__ */ Re(r, e, t, {
    type: Cp
  });
  Ut(r, l);
  let c = /* @__PURE__ */ Re(r, e, t, {
    type: Bu
  });
  return s.loopback = l, c.loopback = l, r.decisionMap[ur(e, i ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", t.idx)] = l, he(o2, l), i === void 0 ? (he(l, s), he(l, c)) : (he(l, c), he(l, i.left), he(i.right, s)), {
    left: s,
    right: c
  };
}
m$1(Vu, "plus");
function Ku(r, e, t, n2, i) {
  let s = n2.left, o2 = n2.right, l = /* @__PURE__ */ Re(r, e, t, {
    type: Sp
  });
  Ut(r, l);
  let c = /* @__PURE__ */ Re(r, e, t, {
    type: Bu
  }), u = /* @__PURE__ */ Re(r, e, t, {
    type: Np
  });
  return l.loopback = u, c.loopback = u, he(l, s), he(l, c), he(o2, u), i !== void 0 ? (he(u, c), he(u, i.left), he(i.right, s)) : he(u, l), r.decisionMap[ur(e, i ? "RepetitionWithSeparator" : "Repetition", t.idx)] = l, {
    left: l,
    right: c
  };
}
m$1(Ku, "star");
function Mp(r, e, t, n2) {
  let i = n2.left, s = n2.right;
  return he(i, s), r.decisionMap[ur(e, "Option", t.idx)] = i, n2;
}
m$1(Mp, "optional");
function Ut(r, e) {
  return r.decisionStates.push(e), e.decision = r.decisionStates.length - 1, e.decision;
}
m$1(Ut, "defineDecisionState");
function Vr(r, e, t, n2) {
  for (var _len = arguments.length, i = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    i[_key - 4] = arguments[_key];
  }
  let s = /* @__PURE__ */ Re(r, e, n2, {
    type: Ip,
    start: t
  });
  t.end = s;
  for (let l of i) l !== void 0 ? (he(t, l.left), he(l.right, s)) : he(t, s);
  let o2 = {
    left: t,
    right: s
  };
  return r.decisionMap[ur(e, /* @__PURE__ */ Dp(n2), n2.idx)] = t, o2;
}
m$1(Vr, "makeAlts");
function Dp(r) {
  if (r instanceof X) return "Alternation";
  if (r instanceof z) return "Option";
  if (r instanceof F) return "Repetition";
  if (r instanceof q) return "RepetitionWithSeparator";
  if (r instanceof Q) return "RepetitionMandatory";
  if (r instanceof Z) return "RepetitionMandatoryWithSeparator";
  throw new Error("Invalid production type encountered");
}
m$1(Dp, "getProdType");
function Fp(r, e) {
  let t = e.length;
  for (let s = 0; s < t - 1; s++) {
    let o2 = e[s], l;
    o2.left.transitions.length === 1 && (l = o2.left.transitions[0]);
    let c = l instanceof Wr, u = l, f = e[s + 1].left;
    o2.left.type === Ft && o2.right.type === Ft && l !== void 0 && (c && u.followState === o2.right || l.target === o2.right) ? (c ? u.followState = f : l.target = f, Bp(r, o2.right)) : he(o2.right, f);
  }
  let n2 = e[0], i = e[t - 1];
  return {
    left: n2.left,
    right: i.right
  };
}
m$1(Fp, "makeBlock");
function nl(r, e, t, n2) {
  let i = /* @__PURE__ */ Re(r, e, n2, {
    type: Ft
  }), s = /* @__PURE__ */ Re(r, e, n2, {
    type: Ft
  });
  return il(i, new Br(s, t)), {
    left: i,
    right: s
  };
}
m$1(nl, "tokenRef");
function Up(r, e, t) {
  let n2 = t.referencedRule, i = /* @__PURE__ */ r.ruleToStartState.get(n2), s = /* @__PURE__ */ Re(r, e, t, {
    type: Ft
  }), o2 = /* @__PURE__ */ Re(r, e, t, {
    type: Ft
  }), l = new Wr(i, n2, o2);
  return il(s, l), {
    left: s,
    right: o2
  };
}
m$1(Up, "ruleRef");
function Gp(r, e, t) {
  let n2 = /* @__PURE__ */ r.ruleToStartState.get(e);
  he(n2, t.left);
  let i = /* @__PURE__ */ r.ruleToStopState.get(e);
  return he(t.right, i), {
    left: n2,
    right: i
  };
}
m$1(Gp, "buildRuleHandle");
function he(r, e) {
  let t = new Gn(e);
  il(r, t);
}
m$1(he, "epsilon");
function Re(r, e, t, n2) {
  let i = /* @__PURE__ */ Object.assign({
    atn: r,
    production: t,
    epsilonOnlyTransitions: false,
    rule: e,
    transitions: [],
    nextTokenWithinRule: [],
    stateNumber: r.states.length
  }, n2);
  return r.states.push(i), i;
}
m$1(Re, "newState");
function il(r, e) {
  r.transitions.length === 0 && (r.epsilonOnlyTransitions = /* @__PURE__ */ e.isEpsilon()), r.transitions.push(e);
}
m$1(il, "addTransition");
function Bp(r, e) {
  r.states.splice(/* @__PURE__ */ r.states.indexOf(e), 1);
}
m$1(Bp, "removeState");
var Bn = {}, Kr = (_ha = class {
  constructor() {
    this.map = {}, this.configs = [];
  }
  get size() {
    return this.configs.length;
  }
  finalize() {
    this.map = {};
  }
  add(e) {
    let t = /* @__PURE__ */ sl(e);
    t in this.map || (this.map[t] = this.configs.length, this.configs.push(e));
  }
  get elements() {
    return this.configs;
  }
  get alts() {
    return Jr(this.configs, (e) => e.alt);
  }
  get key() {
    let e = "";
    for (let t in this.map) e += t + ":";
    return e;
  }
}, __63 = new WeakMap(), __privateAdd(_ha, __63, m$1(_ha, "ATNConfigSet")), _ha);
function sl(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return `${e ? `a${r.alt}` : ""}s${r.state.stateNumber}:${r.stack.map((t) => t.stateNumber.toString()).join("_")}`;
}
m$1(sl, "getATNConfigKey");
function Wp(r, e) {
  let t = {};
  return (n2) => {
    let i = /* @__PURE__ */ n2.toString(), s = t[i];
    return s !== void 0 || (s = {
      atnStartState: r,
      decision: e,
      states: {}
    }, t[i] = s), s;
  };
}
m$1(Wp, "createDFACache");
var Ns = (_ia = class {
  constructor() {
    this.predicates = [];
  }
  is(e) {
    return e >= this.predicates.length || this.predicates[e];
  }
  set(e, t) {
    this.predicates[e] = t;
  }
  toString() {
    let e = "", t = this.predicates.length;
    for (let n2 = 0; n2 < t; n2++) e += this.predicates[n2] === true ? "1" : "0";
    return e;
  }
}, __64 = new WeakMap(), __privateAdd(_ia, __64, m$1(_ia, "PredicateSet")), _ia), Hu = new Ns(), Wn = (_ja = class extends Ct {
  constructor(e) {
    var t;
    super(), this.logging = (t = e == null ? void 0 : e.logging) !== null && t !== void 0 ? t : (n2) => console.log(n2);
  }
  initialize(e) {
    this.atn = /* @__PURE__ */ Wu(e.rules), this.dfas = /* @__PURE__ */ jp(this.atn);
  }
  validateAmbiguousAlternationAlternatives() {
    return [];
  }
  validateEmptyOrAlternatives() {
    return [];
  }
  buildLookaheadForAlternation(e) {
    let { prodOccurrence: t, rule: n2, hasPredicates: i, dynamicTokensEnabled: s } = e, o2 = this.dfas, l = this.logging, c = /* @__PURE__ */ ur(n2, "Alternation", t), f = this.atn.decisionMap[c].decision, d = /* @__PURE__ */ Jr(/* @__PURE__ */ ss({
      maxLookahead: 1,
      occurrence: t,
      prodType: "Alternation",
      rule: n2
    }), (p2) => Jr(p2, (h2) => h2[0]));
    if (zu(d, false) && !s) {
      let p2 = /* @__PURE__ */ Rn$1(d, (h2, g, T2) => (Zr$1(g, (k) => {
        k && (h2[k.tokenTypeIdx] = T2, Zr$1(k.categoryMatches, (R) => {
          h2[R] = T2;
        }));
      }), h2), {});
      return i ? function(h2) {
        var g;
        let T2 = /* @__PURE__ */ this.LA(1), k = p2[T2.tokenTypeIdx];
        if (h2 !== void 0 && k !== void 0) {
          let R = (g = h2[k]) === null || g === void 0 ? void 0 : g.GATE;
          if (R !== void 0 && R.call(this) === false) return;
        }
        return k;
      } : function() {
        let h2 = /* @__PURE__ */ this.LA(1);
        return p2[h2.tokenTypeIdx];
      };
    } else return i ? function(p2) {
      let h2 = new Ns(), g = p2 === void 0 ? 0 : p2.length;
      for (let k = 0; k < g; k++) {
        let R = p2 == null ? void 0 : p2[k].GATE;
        h2.set(k, R === void 0 || R.call(this));
      }
      let T2 = /* @__PURE__ */ al.call(this, o2, f, h2, l);
      return typeof T2 == "number" ? T2 : void 0;
    } : function() {
      let p2 = /* @__PURE__ */ al.call(this, o2, f, Hu, l);
      return typeof p2 == "number" ? p2 : void 0;
    };
  }
  buildLookaheadForOptional(e) {
    let { prodOccurrence: t, rule: n2, prodType: i, dynamicTokensEnabled: s } = e, o2 = this.dfas, l = this.logging, c = /* @__PURE__ */ ur(n2, i, t), f = this.atn.decisionMap[c].decision, d = /* @__PURE__ */ Jr(/* @__PURE__ */ ss({
      maxLookahead: 1,
      occurrence: t,
      prodType: i,
      rule: n2
    }), (p2) => Jr(p2, (h2) => h2[0]));
    if (zu(d) && d[0][0] && !s) {
      let p2 = d[0], h2 = /* @__PURE__ */ Qr(p2);
      if (h2.length === 1 && Cr$1(h2[0].categoryMatches)) {
        let T2 = h2[0].tokenTypeIdx;
        return function() {
          return this.LA(1).tokenTypeIdx === T2;
        };
      } else {
        let g = /* @__PURE__ */ Rn$1(h2, (T2, k) => (k !== void 0 && (T2[k.tokenTypeIdx] = true, Zr$1(k.categoryMatches, (R) => {
          T2[R] = true;
        })), T2), {});
        return function() {
          let T2 = /* @__PURE__ */ this.LA(1);
          return g[T2.tokenTypeIdx] === true;
        };
      }
    }
    return function() {
      let p2 = /* @__PURE__ */ al.call(this, o2, f, Hu, l);
      return typeof p2 == "object" ? false : p2 === 0;
    };
  }
}, __65 = new WeakMap(), __privateAdd(_ja, __65, m$1(_ja, "LLStarLookaheadStrategy")), _ja);
function zu(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  let t = /* @__PURE__ */ new Set();
  for (let n2 of r) {
    let i = /* @__PURE__ */ new Set();
    for (let s of n2) {
      if (s === void 0) {
        if (e) break;
        return false;
      }
      let o2 = /* @__PURE__ */ [
        s.tokenTypeIdx
      ].concat(s.categoryMatches);
      for (let l of o2) if (t.has(l)) {
        if (!i.has(l)) return false;
      } else t.add(l), i.add(l);
    }
  }
  return true;
}
m$1(zu, "isLL1Sequence");
function jp(r) {
  let e = r.decisionStates.length, t = /* @__PURE__ */ Array(e);
  for (let n2 = 0; n2 < e; n2++) t[n2] = /* @__PURE__ */ Wp(r.decisionStates[n2], n2);
  return t;
}
m$1(jp, "initATNSimulator");
function al(r, e, t, n2) {
  let i = /* @__PURE__ */ r[e](t), s = i.start;
  if (s === void 0) {
    let l = /* @__PURE__ */ em(i.atnStartState);
    s = /* @__PURE__ */ Yu(i, /* @__PURE__ */ Xu(l)), i.start = s;
  }
  return Vp.apply(this, [
    i,
    s,
    t,
    n2
  ]);
}
m$1(al, "adaptivePredict");
function Vp(r, e, t, n2) {
  let i = e, s = 1, o2 = [], l = /* @__PURE__ */ this.LA(s++);
  for (; ; ) {
    let c = /* @__PURE__ */ Yp(i, l);
    if (c === void 0 && (c = /* @__PURE__ */ Kp.apply(this, [
      r,
      i,
      l,
      s,
      t,
      n2
    ])), c === Bn) return Xp(o2, i, l);
    if (c.isAcceptState === true) return c.prediction;
    i = c, o2.push(l), l = /* @__PURE__ */ this.LA(s++);
  }
}
m$1(Vp, "performLookahead");
function Kp(r, e, t, n2, i, s) {
  let o2 = /* @__PURE__ */ Jp(e.configs, t, i);
  if (o2.size === 0) return qu(r, e, t, Bn), Bn;
  let l = /* @__PURE__ */ Xu(o2), c = /* @__PURE__ */ Zp(o2, i);
  if (c !== void 0) l.isAcceptState = true, l.prediction = c, l.configs.uniqueAlt = c;
  else if (im(o2)) {
    let u = /* @__PURE__ */ ym$1(o2.alts);
    l.isAcceptState = true, l.prediction = u, l.configs.uniqueAlt = u, Hp.apply(this, [
      r,
      n2,
      o2.alts,
      s
    ]);
  }
  return l = /* @__PURE__ */ qu(r, e, t, l), l;
}
m$1(Kp, "computeLookaheadTarget");
function Hp(r, e, t, n2) {
  let i = [];
  for (let u = 1; u <= e; u++) i.push(this.LA(u).tokenType);
  let s = r.atnStartState, o2 = s.rule, l = s.production, c = /* @__PURE__ */ zp({
    topLevelRule: o2,
    ambiguityIndices: t,
    production: l,
    prefixPath: i
  });
  n2(c);
}
m$1(Hp, "reportLookaheadAmbiguity");
function zp(r) {
  let e = /* @__PURE__ */ Jr(r.prefixPath, (i) => Nt(i)).join(", "), t = r.production.idx === 0 ? "" : r.production.idx, n2 = `Ambiguous Alternatives Detected: <${r.ambiguityIndices.join(", ")}> in <${qp(r.production)}${t}> inside <${r.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
  return n2 = n2 + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, n2;
}
m$1(zp, "buildAmbiguityError");
function qp(r) {
  if (r instanceof H) return "SUBRULE";
  if (r instanceof z) return "OPTION";
  if (r instanceof X) return "OR";
  if (r instanceof Q) return "AT_LEAST_ONE";
  if (r instanceof Z) return "AT_LEAST_ONE_SEP";
  if (r instanceof q) return "MANY_SEP";
  if (r instanceof F) return "MANY";
  if (r instanceof D) return "CONSUME";
  throw Error("non exhaustive match");
}
m$1(qp, "getProductionDslName");
function Xp(r, e, t) {
  let n2 = /* @__PURE__ */ zi$1(e.configs.elements, (s) => s.state.transitions), i = /* @__PURE__ */ s0(/* @__PURE__ */ n2.filter((s) => s instanceof Br).map((s) => s.tokenType), (s) => s.tokenTypeIdx);
  return {
    actualToken: t,
    possibleTokenTypes: i,
    tokenPath: r
  };
}
m$1(Xp, "buildAdaptivePredictError");
function Yp(r, e) {
  return r.edges[e.tokenTypeIdx];
}
m$1(Yp, "getExistingTargetState");
function Jp(r, e, t) {
  let n2 = new Kr(), i = [];
  for (let o2 of r.elements) {
    if (t.is(o2.alt) === false) continue;
    if (o2.state.type === jr) {
      i.push(o2);
      continue;
    }
    let l = o2.state.transitions.length;
    for (let c = 0; c < l; c++) {
      let u = o2.state.transitions[c], f = /* @__PURE__ */ Qp(u, e);
      f !== void 0 && n2.add({
        state: f,
        alt: o2.alt,
        stack: o2.stack
      });
    }
  }
  let s;
  if (i.length === 0 && n2.size === 1 && (s = n2), s === void 0) {
    s = new Kr();
    for (let o2 of n2.elements) Ss(o2, s);
  }
  if (i.length > 0 && !rm(s)) for (let o2 of i) s.add(o2);
  return s;
}
m$1(Jp, "computeReachSet");
function Qp(r, e) {
  if (r instanceof Br && Sn(e, r.tokenType)) return r.target;
}
m$1(Qp, "getReachableTarget");
function Zp(r, e) {
  let t;
  for (let n2 of r.elements) if (e.is(n2.alt) === true) {
    if (t === void 0) t = n2.alt;
    else if (t !== n2.alt) return;
  }
  return t;
}
m$1(Zp, "getUniqueAlt");
function Xu(r) {
  return {
    configs: r,
    edges: {},
    isAcceptState: false,
    prediction: -1
  };
}
m$1(Xu, "newDFAState");
function qu(r, e, t, n2) {
  return n2 = /* @__PURE__ */ Yu(r, n2), e.edges[t.tokenTypeIdx] = n2, n2;
}
m$1(qu, "addDFAEdge");
function Yu(r, e) {
  if (e === Bn) return e;
  let t = e.configs.key, n2 = r.states[t];
  return n2 !== void 0 ? n2 : (e.configs.finalize(), r.states[t] = e, e);
}
m$1(Yu, "addDFAState");
function em(r) {
  let e = new Kr(), t = r.transitions.length;
  for (let n2 = 0; n2 < t; n2++) {
    let s = {
      state: r.transitions[n2].target,
      alt: n2,
      stack: []
    };
    Ss(s, e);
  }
  return e;
}
m$1(em, "computeStartState");
function Ss(r, e) {
  let t = r.state;
  if (t.type === jr) {
    if (r.stack.length > 0) {
      let i = [
        ...r.stack
      ], o2 = {
        state: /* @__PURE__ */ i.pop(),
        alt: r.alt,
        stack: i
      };
      Ss(o2, e);
    } else e.add(r);
    return;
  }
  t.epsilonOnlyTransitions || e.add(r);
  let n2 = t.transitions.length;
  for (let i = 0; i < n2; i++) {
    let s = t.transitions[i], o2 = /* @__PURE__ */ tm(r, s);
    o2 !== void 0 && Ss(o2, e);
  }
}
m$1(Ss, "closure");
function tm(r, e) {
  if (e instanceof Gn) return {
    state: e.target,
    alt: r.alt,
    stack: r.stack
  };
  if (e instanceof Wr) {
    let t = [
      ...r.stack,
      e.followState
    ];
    return {
      state: e.target,
      alt: r.alt,
      stack: t
    };
  }
}
m$1(tm, "getEpsilonTarget");
function rm(r) {
  for (let e of r.elements) if (e.state.type === jr) return true;
  return false;
}
m$1(rm, "hasConfigInRuleStopState");
function nm(r) {
  for (let e of r.elements) if (e.state.type !== jr) return false;
  return true;
}
m$1(nm, "allConfigsInRuleStopStates");
function im(r) {
  if (nm(r)) return true;
  let e = /* @__PURE__ */ sm(r.elements);
  return am(e) && !om(e);
}
m$1(im, "hasConflictTerminatingPrediction");
function sm(r) {
  let e = /* @__PURE__ */ new Map();
  for (let t of r) {
    let n2 = /* @__PURE__ */ sl(t, false), i = /* @__PURE__ */ e.get(n2);
    i === void 0 && (i = {}, e.set(n2, i)), i[t.alt] = true;
  }
  return e;
}
m$1(sm, "getConflictingAltSets");
function am(r) {
  for (let e of Array.from(/* @__PURE__ */ r.values())) if (Object.keys(e).length > 1) return true;
  return false;
}
m$1(am, "hasConflictingAltSet");
function om(r) {
  for (let e of Array.from(/* @__PURE__ */ r.values())) if (Object.keys(e).length === 1) return true;
  return false;
}
m$1(om, "hasStateAssociatedWithOneAlt");
var Ju;
(function(r) {
  function e(t) {
    return typeof t == "string";
  }
  m$1(e, "is"), r.is = e;
})(Ju || (Ju = {}));
var ol;
(function(r) {
  function e(t) {
    return typeof t == "string";
  }
  m$1(e, "is"), r.is = e;
})(ol || (ol = {}));
var Qu;
(function(r) {
  r.MIN_VALUE = -2147483648, r.MAX_VALUE = 2147483647;
  function e(t) {
    return typeof t == "number" && r.MIN_VALUE <= t && t <= r.MAX_VALUE;
  }
  m$1(e, "is"), r.is = e;
})(Qu || (Qu = {}));
var Cs;
(function(r) {
  r.MIN_VALUE = 0, r.MAX_VALUE = 2147483647;
  function e(t) {
    return typeof t == "number" && r.MIN_VALUE <= t && t <= r.MAX_VALUE;
  }
  m$1(e, "is"), r.is = e;
})(Cs || (Cs = {}));
var B;
(function(r) {
  function e(n2, i) {
    return n2 === Number.MAX_VALUE && (n2 = Cs.MAX_VALUE), i === Number.MAX_VALUE && (i = Cs.MAX_VALUE), {
      line: n2,
      character: i
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.objectLiteral(i) && m.uinteger(i.line) && m.uinteger(i.character);
  }
  m$1(t, "is"), r.is = t;
})(B || (B = {}));
var U;
(function(r) {
  function e(n2, i, s, o2) {
    if (m.uinteger(n2) && m.uinteger(i) && m.uinteger(s) && m.uinteger(o2)) return {
      start: /* @__PURE__ */ B.create(n2, i),
      end: /* @__PURE__ */ B.create(s, o2)
    };
    if (B.is(n2) && B.is(i)) return {
      start: n2,
      end: i
    };
    throw new Error(`Range#create called with invalid arguments[${n2}, ${i}, ${s}, ${o2}]`);
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.objectLiteral(i) && B.is(i.start) && B.is(i.end);
  }
  m$1(t, "is"), r.is = t;
})(U || (U = {}));
var _s;
(function(r) {
  function e(n2, i) {
    return {
      uri: n2,
      range: i
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.objectLiteral(i) && U.is(i.range) && (m.string(i.uri) || m.undefined(i.uri));
  }
  m$1(t, "is"), r.is = t;
})(_s || (_s = {}));
var Zu;
(function(r) {
  function e(n2, i, s, o2) {
    return {
      targetUri: n2,
      targetRange: i,
      targetSelectionRange: s,
      originSelectionRange: o2
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.objectLiteral(i) && U.is(i.targetRange) && m.string(i.targetUri) && U.is(i.targetSelectionRange) && (U.is(i.originSelectionRange) || m.undefined(i.originSelectionRange));
  }
  m$1(t, "is"), r.is = t;
})(Zu || (Zu = {}));
var ll;
(function(r) {
  function e(n2, i, s, o2) {
    return {
      red: n2,
      green: i,
      blue: s,
      alpha: o2
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.objectLiteral(i) && m.numberRange(i.red, 0, 1) && m.numberRange(i.green, 0, 1) && m.numberRange(i.blue, 0, 1) && m.numberRange(i.alpha, 0, 1);
  }
  m$1(t, "is"), r.is = t;
})(ll || (ll = {}));
var ef;
(function(r) {
  function e(n2, i) {
    return {
      range: n2,
      color: i
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.objectLiteral(i) && U.is(i.range) && ll.is(i.color);
  }
  m$1(t, "is"), r.is = t;
})(ef || (ef = {}));
var tf;
(function(r) {
  function e(n2, i, s) {
    return {
      label: n2,
      textEdit: i,
      additionalTextEdits: s
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.objectLiteral(i) && m.string(i.label) && (m.undefined(i.textEdit) || zr.is(i)) && (m.undefined(i.additionalTextEdits) || m.typedArray(i.additionalTextEdits, zr.is));
  }
  m$1(t, "is"), r.is = t;
})(tf || (tf = {}));
var rf;
(function(r) {
  r.Comment = "comment", r.Imports = "imports", r.Region = "region";
})(rf || (rf = {}));
var nf;
(function(r) {
  function e(n2, i, s, o2, l, c) {
    let u = {
      startLine: n2,
      endLine: i
    };
    return m.defined(s) && (u.startCharacter = s), m.defined(o2) && (u.endCharacter = o2), m.defined(l) && (u.kind = l), m.defined(c) && (u.collapsedText = c), u;
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.objectLiteral(i) && m.uinteger(i.startLine) && m.uinteger(i.startLine) && (m.undefined(i.startCharacter) || m.uinteger(i.startCharacter)) && (m.undefined(i.endCharacter) || m.uinteger(i.endCharacter)) && (m.undefined(i.kind) || m.string(i.kind));
  }
  m$1(t, "is"), r.is = t;
})(nf || (nf = {}));
var cl;
(function(r) {
  function e(n2, i) {
    return {
      location: n2,
      message: i
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.defined(i) && _s.is(i.location) && m.string(i.message);
  }
  m$1(t, "is"), r.is = t;
})(cl || (cl = {}));
var sf;
(function(r) {
  r.Error = 1, r.Warning = 2, r.Information = 3, r.Hint = 4;
})(sf || (sf = {}));
var af;
(function(r) {
  r.Unnecessary = 1, r.Deprecated = 2;
})(af || (af = {}));
var of;
(function(r) {
  function e(t) {
    let n2 = t;
    return m.objectLiteral(n2) && m.string(n2.href);
  }
  m$1(e, "is"), r.is = e;
})(of || (of = {}));
var ws;
(function(r) {
  function e(n2, i, s, o2, l, c) {
    let u = {
      range: n2,
      message: i
    };
    return m.defined(s) && (u.severity = s), m.defined(o2) && (u.code = o2), m.defined(l) && (u.source = l), m.defined(c) && (u.relatedInformation = c), u;
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    var i;
    let s = n2;
    return m.defined(s) && U.is(s.range) && m.string(s.message) && (m.number(s.severity) || m.undefined(s.severity)) && (m.integer(s.code) || m.string(s.code) || m.undefined(s.code)) && (m.undefined(s.codeDescription) || m.string((i = s.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (m.string(s.source) || m.undefined(s.source)) && (m.undefined(s.relatedInformation) || m.typedArray(s.relatedInformation, cl.is));
  }
  m$1(t, "is"), r.is = t;
})(ws || (ws = {}));
var Hr;
(function(r) {
  function e(n2, i) {
    for (var _len = arguments.length, s = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      s[_key - 2] = arguments[_key];
    }
    let o2 = {
      title: n2,
      command: i
    };
    return m.defined(s) && s.length > 0 && (o2.arguments = s), o2;
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.defined(i) && m.string(i.title) && m.string(i.command);
  }
  m$1(t, "is"), r.is = t;
})(Hr || (Hr = {}));
var zr;
(function(r) {
  function e(s, o2) {
    return {
      range: s,
      newText: o2
    };
  }
  m$1(e, "replace"), r.replace = e;
  function t(s, o2) {
    return {
      range: {
        start: s,
        end: s
      },
      newText: o2
    };
  }
  m$1(t, "insert"), r.insert = t;
  function n2(s) {
    return {
      range: s,
      newText: ""
    };
  }
  m$1(n2, "del"), r.del = n2;
  function i(s) {
    let o2 = s;
    return m.objectLiteral(o2) && m.string(o2.newText) && U.is(o2.range);
  }
  m$1(i, "is"), r.is = i;
})(zr || (zr = {}));
var ul;
(function(r) {
  function e(n2, i, s) {
    let o2 = {
      label: n2
    };
    return i !== void 0 && (o2.needsConfirmation = i), s !== void 0 && (o2.description = s), o2;
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.objectLiteral(i) && m.string(i.label) && (m.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (m.string(i.description) || i.description === void 0);
  }
  m$1(t, "is"), r.is = t;
})(ul || (ul = {}));
var qr;
(function(r) {
  function e(t) {
    let n2 = t;
    return m.string(n2);
  }
  m$1(e, "is"), r.is = e;
})(qr || (qr = {}));
var lf;
(function(r) {
  function e(s, o2, l) {
    return {
      range: s,
      newText: o2,
      annotationId: l
    };
  }
  m$1(e, "replace"), r.replace = e;
  function t(s, o2, l) {
    return {
      range: {
        start: s,
        end: s
      },
      newText: o2,
      annotationId: l
    };
  }
  m$1(t, "insert"), r.insert = t;
  function n2(s, o2) {
    return {
      range: s,
      newText: "",
      annotationId: o2
    };
  }
  m$1(n2, "del"), r.del = n2;
  function i(s) {
    let o2 = s;
    return zr.is(o2) && (ul.is(o2.annotationId) || qr.is(o2.annotationId));
  }
  m$1(i, "is"), r.is = i;
})(lf || (lf = {}));
var fl;
(function(r) {
  function e(n2, i) {
    return {
      textDocument: n2,
      edits: i
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.defined(i) && gl.is(i.textDocument) && Array.isArray(i.edits);
  }
  m$1(t, "is"), r.is = t;
})(fl || (fl = {}));
var dl;
(function(r) {
  function e(n2, i, s) {
    let o2 = {
      kind: "create",
      uri: n2
    };
    return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (o2.options = i), s !== void 0 && (o2.annotationId = s), o2;
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return i && i.kind === "create" && m.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || m.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || m.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || qr.is(i.annotationId));
  }
  m$1(t, "is"), r.is = t;
})(dl || (dl = {}));
var hl;
(function(r) {
  function e(n2, i, s, o2) {
    let l = {
      kind: "rename",
      oldUri: n2,
      newUri: i
    };
    return s !== void 0 && (s.overwrite !== void 0 || s.ignoreIfExists !== void 0) && (l.options = s), o2 !== void 0 && (l.annotationId = o2), l;
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return i && i.kind === "rename" && m.string(i.oldUri) && m.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || m.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || m.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || qr.is(i.annotationId));
  }
  m$1(t, "is"), r.is = t;
})(hl || (hl = {}));
var pl;
(function(r) {
  function e(n2, i, s) {
    let o2 = {
      kind: "delete",
      uri: n2
    };
    return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (o2.options = i), s !== void 0 && (o2.annotationId = s), o2;
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return i && i.kind === "delete" && m.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || m.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || m.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || qr.is(i.annotationId));
  }
  m$1(t, "is"), r.is = t;
})(pl || (pl = {}));
var ml;
(function(r) {
  function e(t) {
    let n2 = t;
    return n2 && (n2.changes !== void 0 || n2.documentChanges !== void 0) && (n2.documentChanges === void 0 || n2.documentChanges.every((i) => m.string(i.kind) ? dl.is(i) || hl.is(i) || pl.is(i) : fl.is(i)));
  }
  m$1(e, "is"), r.is = e;
})(ml || (ml = {}));
var cf;
(function(r) {
  function e(n2) {
    return {
      uri: n2
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.defined(i) && m.string(i.uri);
  }
  m$1(t, "is"), r.is = t;
})(cf || (cf = {}));
var uf;
(function(r) {
  function e(n2, i) {
    return {
      uri: n2,
      version: i
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.defined(i) && m.string(i.uri) && m.integer(i.version);
  }
  m$1(t, "is"), r.is = t;
})(uf || (uf = {}));
var gl;
(function(r) {
  function e(n2, i) {
    return {
      uri: n2,
      version: i
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.defined(i) && m.string(i.uri) && (i.version === null || m.integer(i.version));
  }
  m$1(t, "is"), r.is = t;
})(gl || (gl = {}));
var ff;
(function(r) {
  function e(n2, i, s, o2) {
    return {
      uri: n2,
      languageId: i,
      version: s,
      text: o2
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.defined(i) && m.string(i.uri) && m.string(i.languageId) && m.integer(i.version) && m.string(i.text);
  }
  m$1(t, "is"), r.is = t;
})(ff || (ff = {}));
var yl;
(function(r) {
  r.PlainText = "plaintext", r.Markdown = "markdown";
  function e(t) {
    let n2 = t;
    return n2 === r.PlainText || n2 === r.Markdown;
  }
  m$1(e, "is"), r.is = e;
})(yl || (yl = {}));
var jn;
(function(r) {
  function e(t) {
    let n2 = t;
    return m.objectLiteral(t) && yl.is(n2.kind) && m.string(n2.value);
  }
  m$1(e, "is"), r.is = e;
})(jn || (jn = {}));
var df;
(function(r) {
  r.Text = 1, r.Method = 2, r.Function = 3, r.Constructor = 4, r.Field = 5, r.Variable = 6, r.Class = 7, r.Interface = 8, r.Module = 9, r.Property = 10, r.Unit = 11, r.Value = 12, r.Enum = 13, r.Keyword = 14, r.Snippet = 15, r.Color = 16, r.File = 17, r.Reference = 18, r.Folder = 19, r.EnumMember = 20, r.Constant = 21, r.Struct = 22, r.Event = 23, r.Operator = 24, r.TypeParameter = 25;
})(df || (df = {}));
var hf;
(function(r) {
  r.PlainText = 1, r.Snippet = 2;
})(hf || (hf = {}));
var pf;
(function(r) {
  r.Deprecated = 1;
})(pf || (pf = {}));
var mf;
(function(r) {
  function e(n2, i, s) {
    return {
      newText: n2,
      insert: i,
      replace: s
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return i && m.string(i.newText) && U.is(i.insert) && U.is(i.replace);
  }
  m$1(t, "is"), r.is = t;
})(mf || (mf = {}));
var gf;
(function(r) {
  r.asIs = 1, r.adjustIndentation = 2;
})(gf || (gf = {}));
var yf;
(function(r) {
  function e(t) {
    let n2 = t;
    return n2 && (m.string(n2.detail) || n2.detail === void 0) && (m.string(n2.description) || n2.description === void 0);
  }
  m$1(e, "is"), r.is = e;
})(yf || (yf = {}));
var Tf;
(function(r) {
  function e(t) {
    return {
      label: t
    };
  }
  m$1(e, "create"), r.create = e;
})(Tf || (Tf = {}));
var xf;
(function(r) {
  function e(t, n2) {
    return {
      items: t || [],
      isIncomplete: !!n2
    };
  }
  m$1(e, "create"), r.create = e;
})(xf || (xf = {}));
var Ls;
(function(r) {
  function e(n2) {
    return n2.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  }
  m$1(e, "fromPlainText"), r.fromPlainText = e;
  function t(n2) {
    let i = n2;
    return m.string(i) || m.objectLiteral(i) && m.string(i.language) && m.string(i.value);
  }
  m$1(t, "is"), r.is = t;
})(Ls || (Ls = {}));
var Rf;
(function(r) {
  function e(t) {
    let n2 = t;
    return !!n2 && m.objectLiteral(n2) && (jn.is(n2.contents) || Ls.is(n2.contents) || m.typedArray(n2.contents, Ls.is)) && (t.range === void 0 || U.is(t.range));
  }
  m$1(e, "is"), r.is = e;
})(Rf || (Rf = {}));
var Ef;
(function(r) {
  function e(t, n2) {
    return n2 ? {
      label: t,
      documentation: n2
    } : {
      label: t
    };
  }
  m$1(e, "create"), r.create = e;
})(Ef || (Ef = {}));
var Af;
(function(r) {
  function e(t, n2) {
    for (var _len = arguments.length, i = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      i[_key - 2] = arguments[_key];
    }
    let s = {
      label: t
    };
    return m.defined(n2) && (s.documentation = n2), m.defined(i) ? s.parameters = i : s.parameters = [], s;
  }
  m$1(e, "create"), r.create = e;
})(Af || (Af = {}));
var vf;
(function(r) {
  r.Text = 1, r.Read = 2, r.Write = 3;
})(vf || (vf = {}));
var kf;
(function(r) {
  function e(t, n2) {
    let i = {
      range: t
    };
    return m.number(n2) && (i.kind = n2), i;
  }
  m$1(e, "create"), r.create = e;
})(kf || (kf = {}));
var If;
(function(r) {
  r.File = 1, r.Module = 2, r.Namespace = 3, r.Package = 4, r.Class = 5, r.Method = 6, r.Property = 7, r.Field = 8, r.Constructor = 9, r.Enum = 10, r.Interface = 11, r.Function = 12, r.Variable = 13, r.Constant = 14, r.String = 15, r.Number = 16, r.Boolean = 17, r.Array = 18, r.Object = 19, r.Key = 20, r.Null = 21, r.EnumMember = 22, r.Struct = 23, r.Event = 24, r.Operator = 25, r.TypeParameter = 26;
})(If || (If = {}));
var Nf;
(function(r) {
  r.Deprecated = 1;
})(Nf || (Nf = {}));
var Sf;
(function(r) {
  function e(t, n2, i, s, o2) {
    let l = {
      name: t,
      kind: n2,
      location: {
        uri: s,
        range: i
      }
    };
    return o2 && (l.containerName = o2), l;
  }
  m$1(e, "create"), r.create = e;
})(Sf || (Sf = {}));
var Cf;
(function(r) {
  function e(t, n2, i, s) {
    return s !== void 0 ? {
      name: t,
      kind: n2,
      location: {
        uri: i,
        range: s
      }
    } : {
      name: t,
      kind: n2,
      location: {
        uri: i
      }
    };
  }
  m$1(e, "create"), r.create = e;
})(Cf || (Cf = {}));
var _f;
(function(r) {
  function e(n2, i, s, o2, l, c) {
    let u = {
      name: n2,
      detail: i,
      kind: s,
      range: o2,
      selectionRange: l
    };
    return c !== void 0 && (u.children = c), u;
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return i && m.string(i.name) && m.number(i.kind) && U.is(i.range) && U.is(i.selectionRange) && (i.detail === void 0 || m.string(i.detail)) && (i.deprecated === void 0 || m.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags));
  }
  m$1(t, "is"), r.is = t;
})(_f || (_f = {}));
var wf;
(function(r) {
  r.Empty = "", r.QuickFix = "quickfix", r.Refactor = "refactor", r.RefactorExtract = "refactor.extract", r.RefactorInline = "refactor.inline", r.RefactorRewrite = "refactor.rewrite", r.Source = "source", r.SourceOrganizeImports = "source.organizeImports", r.SourceFixAll = "source.fixAll";
})(wf || (wf = {}));
var Os;
(function(r) {
  r.Invoked = 1, r.Automatic = 2;
})(Os || (Os = {}));
var Lf;
(function(r) {
  function e(n2, i, s) {
    let o2 = {
      diagnostics: n2
    };
    return i != null && (o2.only = i), s != null && (o2.triggerKind = s), o2;
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.defined(i) && m.typedArray(i.diagnostics, ws.is) && (i.only === void 0 || m.typedArray(i.only, m.string)) && (i.triggerKind === void 0 || i.triggerKind === Os.Invoked || i.triggerKind === Os.Automatic);
  }
  m$1(t, "is"), r.is = t;
})(Lf || (Lf = {}));
var Of;
(function(r) {
  function e(n2, i, s) {
    let o2 = {
      title: n2
    }, l = true;
    return typeof i == "string" ? (l = false, o2.kind = i) : Hr.is(i) ? o2.command = i : o2.edit = i, l && s !== void 0 && (o2.kind = s), o2;
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return i && m.string(i.title) && (i.diagnostics === void 0 || m.typedArray(i.diagnostics, ws.is)) && (i.kind === void 0 || m.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || Hr.is(i.command)) && (i.isPreferred === void 0 || m.boolean(i.isPreferred)) && (i.edit === void 0 || ml.is(i.edit));
  }
  m$1(t, "is"), r.is = t;
})(Of || (Of = {}));
var $f;
(function(r) {
  function e(n2, i) {
    let s = {
      range: n2
    };
    return m.defined(i) && (s.data = i), s;
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.defined(i) && U.is(i.range) && (m.undefined(i.command) || Hr.is(i.command));
  }
  m$1(t, "is"), r.is = t;
})($f || ($f = {}));
var Pf;
(function(r) {
  function e(n2, i) {
    return {
      tabSize: n2,
      insertSpaces: i
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.defined(i) && m.uinteger(i.tabSize) && m.boolean(i.insertSpaces);
  }
  m$1(t, "is"), r.is = t;
})(Pf || (Pf = {}));
var bf;
(function(r) {
  function e(n2, i, s) {
    return {
      range: n2,
      target: i,
      data: s
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.defined(i) && U.is(i.range) && (m.undefined(i.target) || m.string(i.target));
  }
  m$1(t, "is"), r.is = t;
})(bf || (bf = {}));
var Mf;
(function(r) {
  function e(n2, i) {
    return {
      range: n2,
      parent: i
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.objectLiteral(i) && U.is(i.range) && (i.parent === void 0 || r.is(i.parent));
  }
  m$1(t, "is"), r.is = t;
})(Mf || (Mf = {}));
var Df;
(function(r) {
  r.namespace = "namespace", r.type = "type", r.class = "class", r.enum = "enum", r.interface = "interface", r.struct = "struct", r.typeParameter = "typeParameter", r.parameter = "parameter", r.variable = "variable", r.property = "property", r.enumMember = "enumMember", r.event = "event", r.function = "function", r.method = "method", r.macro = "macro", r.keyword = "keyword", r.modifier = "modifier", r.comment = "comment", r.string = "string", r.number = "number", r.regexp = "regexp", r.operator = "operator", r.decorator = "decorator";
})(Df || (Df = {}));
var Ff;
(function(r) {
  r.declaration = "declaration", r.definition = "definition", r.readonly = "readonly", r.static = "static", r.deprecated = "deprecated", r.abstract = "abstract", r.async = "async", r.modification = "modification", r.documentation = "documentation", r.defaultLibrary = "defaultLibrary";
})(Ff || (Ff = {}));
var Uf;
(function(r) {
  function e(t) {
    let n2 = t;
    return m.objectLiteral(n2) && (n2.resultId === void 0 || typeof n2.resultId == "string") && Array.isArray(n2.data) && (n2.data.length === 0 || typeof n2.data[0] == "number");
  }
  m$1(e, "is"), r.is = e;
})(Uf || (Uf = {}));
var Gf;
(function(r) {
  function e(n2, i) {
    return {
      range: n2,
      text: i
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return i != null && U.is(i.range) && m.string(i.text);
  }
  m$1(t, "is"), r.is = t;
})(Gf || (Gf = {}));
var Bf;
(function(r) {
  function e(n2, i, s) {
    return {
      range: n2,
      variableName: i,
      caseSensitiveLookup: s
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return i != null && U.is(i.range) && m.boolean(i.caseSensitiveLookup) && (m.string(i.variableName) || i.variableName === void 0);
  }
  m$1(t, "is"), r.is = t;
})(Bf || (Bf = {}));
var Wf;
(function(r) {
  function e(n2, i) {
    return {
      range: n2,
      expression: i
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return i != null && U.is(i.range) && (m.string(i.expression) || i.expression === void 0);
  }
  m$1(t, "is"), r.is = t;
})(Wf || (Wf = {}));
var jf;
(function(r) {
  function e(n2, i) {
    return {
      frameId: n2,
      stoppedLocation: i
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.defined(i) && U.is(n2.stoppedLocation);
  }
  m$1(t, "is"), r.is = t;
})(jf || (jf = {}));
var Tl;
(function(r) {
  r.Type = 1, r.Parameter = 2;
  function e(t) {
    return t === 1 || t === 2;
  }
  m$1(e, "is"), r.is = e;
})(Tl || (Tl = {}));
var xl;
(function(r) {
  function e(n2) {
    return {
      value: n2
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.objectLiteral(i) && (i.tooltip === void 0 || m.string(i.tooltip) || jn.is(i.tooltip)) && (i.location === void 0 || _s.is(i.location)) && (i.command === void 0 || Hr.is(i.command));
  }
  m$1(t, "is"), r.is = t;
})(xl || (xl = {}));
var Vf;
(function(r) {
  function e(n2, i, s) {
    let o2 = {
      position: n2,
      label: i
    };
    return s !== void 0 && (o2.kind = s), o2;
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.objectLiteral(i) && B.is(i.position) && (m.string(i.label) || m.typedArray(i.label, xl.is)) && (i.kind === void 0 || Tl.is(i.kind)) && i.textEdits === void 0 || m.typedArray(i.textEdits, zr.is) && (i.tooltip === void 0 || m.string(i.tooltip) || jn.is(i.tooltip)) && (i.paddingLeft === void 0 || m.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || m.boolean(i.paddingRight));
  }
  m$1(t, "is"), r.is = t;
})(Vf || (Vf = {}));
var Kf;
(function(r) {
  function e(t) {
    return {
      kind: "snippet",
      value: t
    };
  }
  m$1(e, "createSnippet"), r.createSnippet = e;
})(Kf || (Kf = {}));
var Hf;
(function(r) {
  function e(t, n2, i, s) {
    return {
      insertText: t,
      filterText: n2,
      range: i,
      command: s
    };
  }
  m$1(e, "create"), r.create = e;
})(Hf || (Hf = {}));
var zf;
(function(r) {
  function e(t) {
    return {
      items: t
    };
  }
  m$1(e, "create"), r.create = e;
})(zf || (zf = {}));
var qf;
(function(r) {
  r.Invoked = 0, r.Automatic = 1;
})(qf || (qf = {}));
var Xf;
(function(r) {
  function e(t, n2) {
    return {
      range: t,
      text: n2
    };
  }
  m$1(e, "create"), r.create = e;
})(Xf || (Xf = {}));
var Yf;
(function(r) {
  function e(t, n2) {
    return {
      triggerKind: t,
      selectedCompletionInfo: n2
    };
  }
  m$1(e, "create"), r.create = e;
})(Yf || (Yf = {}));
var Jf;
(function(r) {
  function e(t) {
    let n2 = t;
    return m.objectLiteral(n2) && ol.is(n2.uri) && m.string(n2.name);
  }
  m$1(e, "is"), r.is = e;
})(Jf || (Jf = {}));
var Qf;
(function(r) {
  function e(s, o2, l, c) {
    return new Rl(s, o2, l, c);
  }
  m$1(e, "create"), r.create = e;
  function t(s) {
    let o2 = s;
    return !!(m.defined(o2) && m.string(o2.uri) && (m.undefined(o2.languageId) || m.string(o2.languageId)) && m.uinteger(o2.lineCount) && m.func(o2.getText) && m.func(o2.positionAt) && m.func(o2.offsetAt));
  }
  m$1(t, "is"), r.is = t;
  function n2(s, o2) {
    let l = /* @__PURE__ */ s.getText(), c = /* @__PURE__ */ i(o2, (f, d) => {
      let p2 = f.range.start.line - d.range.start.line;
      return p2 === 0 ? f.range.start.character - d.range.start.character : p2;
    }), u = l.length;
    for (let f = c.length - 1; f >= 0; f--) {
      let d = c[f], p2 = /* @__PURE__ */ s.offsetAt(d.range.start), h2 = /* @__PURE__ */ s.offsetAt(d.range.end);
      if (h2 <= u) l = l.substring(0, p2) + d.newText + l.substring(h2, l.length);
      else throw new Error("Overlapping edit");
      u = p2;
    }
    return l;
  }
  m$1(n2, "applyEdits"), r.applyEdits = n2;
  function i(s, o2) {
    if (s.length <= 1) return s;
    let l = s.length / 2 | 0, c = /* @__PURE__ */ s.slice(0, l), u = /* @__PURE__ */ s.slice(l);
    i(c, o2), i(u, o2);
    let f = 0, d = 0, p2 = 0;
    for (; f < c.length && d < u.length; ) o2(c[f], u[d]) <= 0 ? s[p2++] = c[f++] : s[p2++] = u[d++];
    for (; f < c.length; ) s[p2++] = c[f++];
    for (; d < u.length; ) s[p2++] = u[d++];
    return s;
  }
  m$1(i, "mergeSort");
})(Qf || (Qf = {}));
var Rl = (_ka = class {
  constructor(e, t, n2, i) {
    this._uri = e, this._languageId = t, this._version = n2, this._content = i, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e) {
    if (e) {
      let t = /* @__PURE__ */ this.offsetAt(e.start), n2 = /* @__PURE__ */ this.offsetAt(e.end);
      return this._content.substring(t, n2);
    }
    return this._content;
  }
  update(e, t) {
    this._content = e.text, this._version = t, this._lineOffsets = void 0;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      let e = [], t = this._content, n2 = true;
      for (let i = 0; i < t.length; i++) {
        n2 && (e.push(i), n2 = false);
        let s = /* @__PURE__ */ t.charAt(i);
        n2 = s === "\r" || s === `
`, s === "\r" && i + 1 < t.length && t.charAt(i + 1) === `
` && i++;
      }
      n2 && t.length > 0 && e.push(t.length), this._lineOffsets = e;
    }
    return this._lineOffsets;
  }
  positionAt(e) {
    e = /* @__PURE__ */ Math.max(/* @__PURE__ */ Math.min(e, this._content.length), 0);
    let t = /* @__PURE__ */ this.getLineOffsets(), n2 = 0, i = t.length;
    if (i === 0) return B.create(0, e);
    for (; n2 < i; ) {
      let o2 = /* @__PURE__ */ Math.floor((n2 + i) / 2);
      t[o2] > e ? i = o2 : n2 = o2 + 1;
    }
    let s = n2 - 1;
    return B.create(s, e - t[s]);
  }
  offsetAt(e) {
    let t = /* @__PURE__ */ this.getLineOffsets();
    if (e.line >= t.length) return this._content.length;
    if (e.line < 0) return 0;
    let n2 = t[e.line], i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
    return Math.max(/* @__PURE__ */ Math.min(n2 + e.character, i), n2);
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
}, __66 = new WeakMap(), __privateAdd(_ka, __66, m$1(_ka, "FullTextDocument")), _ka), m;
(function(r) {
  let e = Object.prototype.toString;
  function t(h2) {
    return typeof h2 < "u";
  }
  m$1(t, "defined"), r.defined = t;
  function n2(h2) {
    return typeof h2 > "u";
  }
  m$1(n2, "undefined"), r.undefined = n2;
  function i(h2) {
    return h2 === true || h2 === false;
  }
  m$1(i, "boolean"), r.boolean = i;
  function s(h2) {
    return e.call(h2) === "[object String]";
  }
  m$1(s, "string"), r.string = s;
  function o2(h2) {
    return e.call(h2) === "[object Number]";
  }
  m$1(o2, "number"), r.number = o2;
  function l(h2, g, T2) {
    return e.call(h2) === "[object Number]" && g <= h2 && h2 <= T2;
  }
  m$1(l, "numberRange"), r.numberRange = l;
  function c(h2) {
    return e.call(h2) === "[object Number]" && -2147483648 <= h2 && h2 <= 2147483647;
  }
  m$1(c, "integer"), r.integer = c;
  function u(h2) {
    return e.call(h2) === "[object Number]" && 0 <= h2 && h2 <= 2147483647;
  }
  m$1(u, "uinteger"), r.uinteger = u;
  function f(h2) {
    return e.call(h2) === "[object Function]";
  }
  m$1(f, "func"), r.func = f;
  function d(h2) {
    return h2 !== null && typeof h2 == "object";
  }
  m$1(d, "objectLiteral"), r.objectLiteral = d;
  function p2(h2, g) {
    return Array.isArray(h2) && h2.every(g);
  }
  m$1(p2, "typedArray"), r.typedArray = p2;
})(m || (m = {}));
var Vn = (_la = class {
  constructor() {
    this.nodeStack = [];
  }
  get current() {
    return this.nodeStack[this.nodeStack.length - 1];
  }
  buildRootNode(e) {
    return this.rootNode = new Xr(e), this.rootNode.root = this.rootNode, this.nodeStack = [
      this.rootNode
    ], this.rootNode;
  }
  buildCompositeNode(e) {
    let t = new hr();
    return t.grammarSource = e, t.root = this.rootNode, this.current.content.push(t), this.nodeStack.push(t), t;
  }
  buildLeafNode(e, t) {
    let n2 = new dr(e.startOffset, e.image.length, vr(e), e.tokenType, false);
    return n2.grammarSource = t, n2.root = this.rootNode, this.current.content.push(n2), n2;
  }
  removeNode(e) {
    let t = e.container;
    if (t) {
      let n2 = /* @__PURE__ */ t.content.indexOf(e);
      n2 >= 0 && t.content.splice(n2, 1);
    }
  }
  construct(e) {
    let t = this.current;
    typeof e.$type == "string" && (this.current.astNode = e), e.$cstNode = t;
    let n2 = /* @__PURE__ */ this.nodeStack.pop();
    (n2 == null ? void 0 : n2.content.length) === 0 && this.removeNode(n2);
  }
  addHiddenTokens(e) {
    for (let t of e) {
      let n2 = new dr(t.startOffset, t.image.length, vr(t), t.tokenType, true);
      n2.root = this.rootNode, this.addHiddenToken(this.rootNode, n2);
    }
  }
  addHiddenToken(e, t) {
    let { offset: n2, end: i } = t;
    for (let s = 0; s < e.content.length; s++) {
      let o2 = e.content[s], { offset: l, end: c } = o2;
      if (Ke(o2) && n2 > l && i < c) {
        this.addHiddenToken(o2, t);
        return;
      } else if (i <= l) {
        e.content.splice(s, 0, t);
        return;
      }
    }
    e.content.push(t);
  }
}, __67 = new WeakMap(), __privateAdd(_la, __67, m$1(_la, "CstNodeBuilder")), _la), Kn = (_ma = class {
  get parent() {
    return this.container;
  }
  get feature() {
    return this.grammarSource;
  }
  get hidden() {
    return false;
  }
  get astNode() {
    var e, t;
    let n2 = typeof ((e = this._astNode) === null || e === void 0 ? void 0 : e.$type) == "string" ? this._astNode : (t = this.container) === null || t === void 0 ? void 0 : t.astNode;
    if (!n2) throw new Error("This node has no associated AST element");
    return n2;
  }
  set astNode(e) {
    this._astNode = e;
  }
  get element() {
    return this.astNode;
  }
  get text() {
    return this.root.fullText.substring(this.offset, this.end);
  }
}, __68 = new WeakMap(), __privateAdd(_ma, __68, m$1(_ma, "AbstractCstNode")), _ma), dr = (_na = class extends Kn {
  get offset() {
    return this._offset;
  }
  get length() {
    return this._length;
  }
  get end() {
    return this._offset + this._length;
  }
  get hidden() {
    return this._hidden;
  }
  get tokenType() {
    return this._tokenType;
  }
  get range() {
    return this._range;
  }
  constructor(e, t, n2, i, s = false) {
    super(), this._hidden = s, this._offset = e, this._tokenType = i, this._length = t, this._range = n2;
  }
}, __69 = new WeakMap(), __privateAdd(_na, __69, m$1(_na, "LeafCstNodeImpl")), _na), hr = (_oa = class extends Kn {
  constructor() {
    super(...arguments), this.content = new El(this);
  }
  get children() {
    return this.content;
  }
  get offset() {
    var e, t;
    return (t = (e = this.firstNonHiddenNode) === null || e === void 0 ? void 0 : e.offset) !== null && t !== void 0 ? t : 0;
  }
  get length() {
    return this.end - this.offset;
  }
  get end() {
    var e, t;
    return (t = (e = this.lastNonHiddenNode) === null || e === void 0 ? void 0 : e.end) !== null && t !== void 0 ? t : 0;
  }
  get range() {
    let e = this.firstNonHiddenNode, t = this.lastNonHiddenNode;
    if (e && t) {
      if (this._rangeCache === void 0) {
        let { range: n2 } = e, { range: i } = t;
        this._rangeCache = {
          start: n2.start,
          end: i.end.line < n2.start.line ? n2.start : i.end
        };
      }
      return this._rangeCache;
    } else return {
      start: /* @__PURE__ */ B.create(0, 0),
      end: /* @__PURE__ */ B.create(0, 0)
    };
  }
  get firstNonHiddenNode() {
    for (let e of this.content) if (!e.hidden) return e;
    return this.content[0];
  }
  get lastNonHiddenNode() {
    for (let e = this.content.length - 1; e >= 0; e--) {
      let t = this.content[e];
      if (!t.hidden) return t;
    }
    return this.content[this.content.length - 1];
  }
}, __70 = new WeakMap(), __privateAdd(_oa, __70, m$1(_oa, "CompositeCstNodeImpl")), _oa), El = (_pa = class extends Array {
  constructor(e) {
    super(), this.parent = e, Object.setPrototypeOf(this, _pa.prototype);
  }
  push() {
    for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
      e[_key] = arguments[_key];
    }
    return this.addParents(e), super.push(...e);
  }
  unshift() {
    for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
      e[_key] = arguments[_key];
    }
    return this.addParents(e), super.unshift(...e);
  }
  splice(e, t) {
    for (var _len = arguments.length, n2 = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      n2[_key - 2] = arguments[_key];
    }
    return this.addParents(n2), super.splice(e, t, ...n2);
  }
  addParents(e) {
    for (let t of e) t.container = this.parent;
  }
}, __71 = new WeakMap(), __privateAdd(_pa, __71, m$1(_pa, "CstNodeContainer")), _pa), Xr = (_qa = class extends hr {
  get text() {
    return this._text.substring(this.offset, this.end);
  }
  get fullText() {
    return this._text;
  }
  constructor(e) {
    super(), this._text = "", this._text = e ?? "";
  }
}, __72 = new WeakMap(), __privateAdd(_qa, __72, m$1(_qa, "RootCstNodeImpl")), _qa);
var $s = /* @__PURE__ */ Symbol("Datatype");
function Al(r) {
  return r.$type === $s;
}
m$1(Al, "isDataTypeNode");
var Zf = "​", ed = /* @__PURE__ */ m$1((r) => r.endsWith(Zf) ? r : r + Zf, "withRuleSuffix"), Hn = (_ra = class {
  constructor(e) {
    this._unorderedGroups = /* @__PURE__ */ new Map(), this.lexer = e.parser.Lexer;
    let t = this.lexer.definition;
    this.wrapper = new vl(t, Object.assign(/* @__PURE__ */ Object.assign({}, e.parser.ParserConfig), {
      errorMessageProvider: e.parser.ParserErrorMessageProvider
    }));
  }
  alternatives(e, t) {
    this.wrapper.wrapOr(e, t);
  }
  optional(e, t) {
    this.wrapper.wrapOption(e, t);
  }
  many(e, t) {
    this.wrapper.wrapMany(e, t);
  }
  atLeastOne(e, t) {
    this.wrapper.wrapAtLeastOne(e, t);
  }
  isRecording() {
    return this.wrapper.IS_RECORDING;
  }
  get unorderedGroups() {
    return this._unorderedGroups;
  }
  getRuleStack() {
    return this.wrapper.RULE_STACK;
  }
  finalize() {
    this.wrapper.wrapSelfAnalysis();
  }
}, __73 = new WeakMap(), __privateAdd(_ra, __73, m$1(_ra, "AbstractLangiumParser")), _ra), zn = (_sa = class extends Hn {
  get current() {
    return this.stack[this.stack.length - 1];
  }
  constructor(e) {
    super(e), this.nodeBuilder = new Vn(), this.stack = [], this.assignmentMap = /* @__PURE__ */ new Map(), this.linker = e.references.Linker, this.converter = e.parser.ValueConverter, this.astReflection = e.shared.AstReflection;
  }
  rule(e, t) {
    let n2 = e.fragment ? void 0 : En(e) ? $s : ir(e), i = /* @__PURE__ */ this.wrapper.DEFINE_RULE(/* @__PURE__ */ ed(e.name), /* @__PURE__ */ this.startImplementation(n2, t).bind(this));
    return e.entry && (this.mainRule = i), i;
  }
  parse(e) {
    this.nodeBuilder.buildRootNode(e);
    let t = /* @__PURE__ */ this.lexer.tokenize(e);
    this.wrapper.input = t.tokens;
    let n2 = /* @__PURE__ */ this.mainRule.call(this.wrapper, {});
    return this.nodeBuilder.addHiddenTokens(t.hidden), this.unorderedGroups.clear(), {
      value: n2,
      lexerErrors: t.errors,
      parserErrors: this.wrapper.errors
    };
  }
  startImplementation(e, t) {
    return (n2) => {
      if (!this.isRecording()) {
        let s = {
          $type: e
        };
        this.stack.push(s), e === $s && (s.value = "");
      }
      let i;
      try {
        i = /* @__PURE__ */ t(n2);
      } catch {
        i = void 0;
      }
      return !this.isRecording() && i === void 0 && (i = /* @__PURE__ */ this.construct()), i;
    };
  }
  consume(e, t, n2) {
    let i = /* @__PURE__ */ this.wrapper.wrapConsume(e, t);
    if (!this.isRecording() && this.isValidToken(i)) {
      let s = /* @__PURE__ */ this.nodeBuilder.buildLeafNode(i, n2), { assignment: o2, isCrossRef: l } = this.getAssignment(n2), c = this.current;
      if (o2) {
        let u = Je(n2) ? i.image : this.converter.convert(i.image, s);
        this.assign(o2.operator, o2.feature, u, s, l);
      } else if (Al(c)) {
        let u = i.image;
        Je(n2) || (u = /* @__PURE__ */ this.converter.convert(u, s).toString()), c.value += u;
      }
    }
  }
  isValidToken(e) {
    return !e.isInsertedInRecovery && !isNaN(e.startOffset) && typeof e.endOffset == "number" && !isNaN(e.endOffset);
  }
  subrule(e, t, n2, i) {
    let s;
    this.isRecording() || (s = /* @__PURE__ */ this.nodeBuilder.buildCompositeNode(n2));
    let o2 = /* @__PURE__ */ this.wrapper.wrapSubrule(e, t, i);
    !this.isRecording() && s && s.length > 0 && this.performSubruleAssignment(o2, n2, s);
  }
  performSubruleAssignment(e, t, n2) {
    let { assignment: i, isCrossRef: s } = this.getAssignment(t);
    if (i) this.assign(i.operator, i.feature, e, n2, s);
    else if (!i) {
      let o2 = this.current;
      if (Al(o2)) o2.value += /* @__PURE__ */ e.toString();
      else if (typeof e == "object" && e) {
        let l = e.$type, c = /* @__PURE__ */ this.assignWithoutOverride(e, o2);
        l && (c.$type = l);
        let u = c;
        this.stack.pop(), this.stack.push(u);
      }
    }
  }
  action(e, t) {
    if (!this.isRecording()) {
      let n2 = this.current;
      if (!n2.$cstNode && t.feature && t.operator) {
        n2 = /* @__PURE__ */ this.construct(false);
        let s = n2.$cstNode.feature;
        this.nodeBuilder.buildCompositeNode(s);
      }
      let i = {
        $type: e
      };
      this.stack.pop(), this.stack.push(i), t.feature && t.operator && this.assign(t.operator, t.feature, n2, n2.$cstNode, false);
    }
  }
  construct() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    if (this.isRecording()) return;
    let t = this.current;
    return Di(t), this.nodeBuilder.construct(t), e && this.stack.pop(), Al(t) ? this.converter.convert(t.value, t.$cstNode) : (ao(this.astReflection, t), t);
  }
  getAssignment(e) {
    if (!this.assignmentMap.has(e)) {
      let t = /* @__PURE__ */ Zt(e, tt);
      this.assignmentMap.set(e, {
        assignment: t,
        isCrossRef: t ? Qt(t.terminal) : false
      });
    }
    return this.assignmentMap.get(e);
  }
  assign(e, t, n2, i, s) {
    let o2 = this.current, l;
    switch (s && typeof n2 == "string" ? l = /* @__PURE__ */ this.linker.buildReference(o2, t, i, n2) : l = n2, e) {
      case "=": {
        o2[t] = l;
        break;
      }
      case "?=": {
        o2[t] = true;
        break;
      }
      case "+=":
        Array.isArray(o2[t]) || (o2[t] = []), o2[t].push(l);
    }
  }
  assignWithoutOverride(e, t) {
    for (let [n2, i] of Object.entries(t)) {
      let s = e[n2];
      s === void 0 ? e[n2] = i : Array.isArray(s) && Array.isArray(i) && (i.push(...s), e[n2] = i);
    }
    return e;
  }
  get definitionErrors() {
    return this.wrapper.definitionErrors;
  }
}, __74 = new WeakMap(), __privateAdd(_sa, __74, m$1(_sa, "LangiumParser")), _sa), Ps = (_ta = class {
  buildMismatchTokenMessage(e) {
    return St.buildMismatchTokenMessage(e);
  }
  buildNotAllInputParsedMessage(e) {
    return St.buildNotAllInputParsedMessage(e);
  }
  buildNoViableAltMessage(e) {
    return St.buildNoViableAltMessage(e);
  }
  buildEarlyExitMessage(e) {
    return St.buildEarlyExitMessage(e);
  }
}, __75 = new WeakMap(), __privateAdd(_ta, __75, m$1(_ta, "AbstractParserErrorMessageProvider")), _ta), Yr = (_ua = class extends Ps {
  buildMismatchTokenMessage(param) {
    let { expected: e, actual: t } = param;
    return `Expecting ${e.LABEL ? "`" + e.LABEL + "`" : e.name.endsWith(":KW") ? `keyword '${e.name.substring(0, e.name.length - 3)}'` : `token of type '${e.name}'`} but found \`${t.image}\`.`;
  }
  buildNotAllInputParsedMessage(param) {
    let { firstRedundant: e } = param;
    return `Expecting end of file but found \`${e.image}\`.`;
  }
}, __76 = new WeakMap(), __privateAdd(_ua, __76, m$1(_ua, "LangiumParserErrorMessageProvider")), _ua), qn = (_va = class extends Hn {
  constructor() {
    super(...arguments), this.tokens = [], this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  action() {
  }
  construct() {
  }
  parse(e) {
    this.resetState();
    let t = /* @__PURE__ */ this.lexer.tokenize(e);
    return this.tokens = t.tokens, this.wrapper.input = [
      ...this.tokens
    ], this.mainRule.call(this.wrapper, {}), this.unorderedGroups.clear(), {
      tokens: this.tokens,
      elementStack: [
        ...this.lastElementStack
      ],
      tokenIndex: this.nextTokenIndex
    };
  }
  rule(e, t) {
    let n2 = /* @__PURE__ */ this.wrapper.DEFINE_RULE(/* @__PURE__ */ ed(e.name), /* @__PURE__ */ this.startImplementation(t).bind(this));
    return e.entry && (this.mainRule = n2), n2;
  }
  resetState() {
    this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  startImplementation(e) {
    return (t) => {
      let n2 = /* @__PURE__ */ this.keepStackSize();
      try {
        e(t);
      } finally {
        this.resetStackSize(n2);
      }
    };
  }
  removeUnexpectedElements() {
    this.elementStack.splice(this.stackSize);
  }
  keepStackSize() {
    let e = this.elementStack.length;
    return this.stackSize = e, e;
  }
  resetStackSize(e) {
    this.removeUnexpectedElements(), this.stackSize = e;
  }
  consume(e, t, n2) {
    this.wrapper.wrapConsume(e, t), this.isRecording() || (this.lastElementStack = [
      ...this.elementStack,
      n2
    ], this.nextTokenIndex = this.currIdx + 1);
  }
  subrule(e, t, n2, i) {
    this.before(n2), this.wrapper.wrapSubrule(e, t, i), this.after(n2);
  }
  before(e) {
    this.isRecording() || this.elementStack.push(e);
  }
  after(e) {
    if (!this.isRecording()) {
      let t = /* @__PURE__ */ this.elementStack.lastIndexOf(e);
      t >= 0 && this.elementStack.splice(t);
    }
  }
  get currIdx() {
    return this.wrapper.currIdx;
  }
}, __77 = new WeakMap(), __privateAdd(_va, __77, m$1(_va, "LangiumCompletionParser")), _va), lm = {
  recoveryEnabled: true,
  nodeLocationTracking: "full",
  skipValidations: true,
  errorMessageProvider: new Yr()
}, vl = (_wa = class extends Fn {
  constructor(e, t) {
    let n2 = t && "maxLookahead" in t;
    super(e, /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, lm), {
      lookaheadStrategy: n2 ? new Ct({
        maxLookahead: t.maxLookahead
      }) : new Wn()
    }), t));
  }
  get IS_RECORDING() {
    return this.RECORDING_PHASE;
  }
  DEFINE_RULE(e, t) {
    return this.RULE(e, t);
  }
  wrapSelfAnalysis() {
    this.performSelfAnalysis();
  }
  wrapConsume(e, t) {
    return this.consume(e, t);
  }
  wrapSubrule(e, t, n2) {
    return this.subrule(e, t, {
      ARGS: [
        n2
      ]
    });
  }
  wrapOr(e, t) {
    this.or(e, t);
  }
  wrapOption(e, t) {
    this.option(e, t);
  }
  wrapMany(e, t) {
    this.many(e, t);
  }
  wrapAtLeastOne(e, t) {
    this.atLeastOne(e, t);
  }
}, __78 = new WeakMap(), __privateAdd(_wa, __78, m$1(_wa, "ChevrotainWrapper")), _wa);
function Ms(r, e, t) {
  return cm({
    parser: e,
    tokens: t,
    rules: /* @__PURE__ */ new Map(),
    ruleNames: /* @__PURE__ */ new Map()
  }, r), e;
}
m$1(Ms, "createParser");
function cm(r, e) {
  let t = /* @__PURE__ */ xn(e, false), n2 = /* @__PURE__ */ K(e.rules).filter(_e).filter((i) => t.has(i));
  for (let i of n2) {
    let s = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, r), {
      consume: 1,
      optional: 1,
      subrule: 1,
      many: 1,
      or: 1
    });
    s.rules.set(i.name, /* @__PURE__ */ r.parser.rule(i, /* @__PURE__ */ pr(s, i.definition)));
  }
}
m$1(cm, "buildRules");
function pr(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  let n2;
  if (Je(e)) n2 = /* @__PURE__ */ gm(r, e);
  else if (Et(e)) n2 = /* @__PURE__ */ um(r, e);
  else if (tt(e)) n2 = /* @__PURE__ */ pr(r, e.terminal);
  else if (Qt(e)) n2 = /* @__PURE__ */ td(r, e);
  else if (rt(e)) n2 = /* @__PURE__ */ fm(r, e);
  else if (Pi(e)) n2 = /* @__PURE__ */ hm(r, e);
  else if (Mi(e)) n2 = /* @__PURE__ */ pm(r, e);
  else if (Mt(e)) n2 = /* @__PURE__ */ mm(r, e);
  else if (Ga(e)) {
    let i = r.consume++;
    n2 = /* @__PURE__ */ m$1(() => r.parser.consume(i, qe, e), "method");
  } else throw new Jt(e.$cstNode, `Unexpected element type: ${e.$type}`);
  return rd(r, t ? void 0 : bs(e), n2, e.cardinality);
}
m$1(pr, "buildElement");
function um(r, e) {
  let t = /* @__PURE__ */ ir(e);
  return () => r.parser.action(t, e);
}
m$1(um, "buildAction");
function fm(r, e) {
  let t = e.rule.ref;
  if (_e(t)) {
    let n2 = r.subrule++, i = e.arguments.length > 0 ? dm(t, e.arguments) : () => ({});
    return (s) => r.parser.subrule(n2, /* @__PURE__ */ nd(r, t), e, /* @__PURE__ */ i(s));
  } else if (Ye(t)) {
    let n2 = r.consume++, i = /* @__PURE__ */ kl(r, t.name);
    return () => r.parser.consume(n2, i, e);
  } else if (t) bt();
  else throw new Jt(e.$cstNode, `Undefined rule type: ${e.$type}`);
}
m$1(fm, "buildRuleCall");
function dm(r, e) {
  let t = /* @__PURE__ */ e.map((n2) => _t(n2.value));
  return (n2) => {
    let i = {};
    for (let s = 0; s < t.length; s++) {
      let o2 = r.parameters[s], l = t[s];
      i[o2.name] = /* @__PURE__ */ l(n2);
    }
    return i;
  };
}
m$1(dm, "buildRuleCallPredicate");
function _t(r) {
  if (pa(r)) {
    let e = /* @__PURE__ */ _t(r.left), t = /* @__PURE__ */ _t(r.right);
    return (n2) => e(n2) || t(n2);
  } else if (da(r)) {
    let e = /* @__PURE__ */ _t(r.left), t = /* @__PURE__ */ _t(r.right);
    return (n2) => e(n2) && t(n2);
  } else if (xa(r)) {
    let e = /* @__PURE__ */ _t(r.value);
    return (t) => !e(t);
  } else if (va(r)) {
    let e = r.parameter.ref.name;
    return (t) => t !== void 0 && t[e] === true;
  } else if (ua(r)) {
    let e = !!r.true;
    return () => e;
  }
  bt();
}
m$1(_t, "buildPredicate");
function hm(r, e) {
  if (e.elements.length === 1) return pr(r, e.elements[0]);
  {
    let t = [];
    for (let i of e.elements) {
      let s = {
        ALT: /* @__PURE__ */ pr(r, i, true)
      }, o2 = /* @__PURE__ */ bs(i);
      o2 && (s.GATE = /* @__PURE__ */ _t(o2)), t.push(s);
    }
    let n2 = r.or++;
    return (i) => r.parser.alternatives(n2, /* @__PURE__ */ t.map((s) => {
      let o2 = {
        ALT: /* @__PURE__ */ m$1(() => s.ALT(i), "ALT")
      }, l = s.GATE;
      return l && (o2.GATE = () => l(i)), o2;
    }));
  }
}
m$1(hm, "buildAlternatives");
function pm(r, e) {
  if (e.elements.length === 1) return pr(r, e.elements[0]);
  let t = [];
  for (let l of e.elements) {
    let c = {
      ALT: /* @__PURE__ */ pr(r, l, true)
    }, u = /* @__PURE__ */ bs(l);
    u && (c.GATE = /* @__PURE__ */ _t(u)), t.push(c);
  }
  let n2 = r.or++, i = /* @__PURE__ */ m$1((l, c) => {
    let u = /* @__PURE__ */ c.getRuleStack().join("-");
    return `uGroup_${l}_${u}`;
  }, "idFunc"), s = /* @__PURE__ */ m$1((l) => r.parser.alternatives(n2, /* @__PURE__ */ t.map((c, u) => {
    let f = {
      ALT: /* @__PURE__ */ m$1(() => true, "ALT")
    }, d = r.parser;
    f.ALT = () => {
      if (c.ALT(l), !d.isRecording()) {
        let h2 = /* @__PURE__ */ i(n2, d);
        d.unorderedGroups.get(h2) || d.unorderedGroups.set(h2, []);
        let g = /* @__PURE__ */ d.unorderedGroups.get(h2);
        typeof (g == null ? void 0 : g[u]) > "u" && (g[u] = true);
      }
    };
    let p2 = c.GATE;
    return p2 ? f.GATE = () => p2(l) : f.GATE = () => {
      let h2 = /* @__PURE__ */ d.unorderedGroups.get(/* @__PURE__ */ i(n2, d));
      return !(h2 == null ? void 0 : h2[u]);
    }, f;
  })), "alternatives"), o2 = /* @__PURE__ */ rd(r, /* @__PURE__ */ bs(e), s, "*");
  return (l) => {
    o2(l), r.parser.isRecording() || r.parser.unorderedGroups.delete(/* @__PURE__ */ i(n2, r.parser));
  };
}
m$1(pm, "buildUnorderedGroup");
function mm(r, e) {
  let t = /* @__PURE__ */ e.elements.map((n2) => pr(r, n2));
  return (n2) => t.forEach((i) => i(n2));
}
m$1(mm, "buildGroup");
function bs(r) {
  if (Mt(r)) return r.guardCondition;
}
m$1(bs, "getGuardCondition");
function td(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.terminal;
  if (t) if (rt(t) && _e(t.rule.ref)) {
    let n2 = r.subrule++;
    return (i) => r.parser.subrule(n2, /* @__PURE__ */ nd(r, t.rule.ref), e, i);
  } else if (rt(t) && Ye(t.rule.ref)) {
    let n2 = r.consume++, i = /* @__PURE__ */ kl(r, t.rule.ref.name);
    return () => r.parser.consume(n2, i, e);
  } else if (Je(t)) {
    let n2 = r.consume++, i = /* @__PURE__ */ kl(r, t.value);
    return () => r.parser.consume(n2, i, e);
  } else throw new Error("Could not build cross reference parser");
  else {
    if (!e.type.ref) throw new Error("Could not resolve reference to type: " + e.type.$refText);
    let n2 = /* @__PURE__ */ ji(e.type.ref), i = n2 == null ? void 0 : n2.terminal;
    if (!i) throw new Error("Could not find name assignment for type: " + ir(e.type.ref));
    return td(r, e, i);
  }
}
m$1(td, "buildCrossReference");
function gm(r, e) {
  let t = r.consume++, n2 = r.tokens[e.value];
  if (!n2) throw new Error("Could not find token for keyword: " + e.value);
  return () => r.parser.consume(t, n2, e);
}
m$1(gm, "buildKeyword");
function rd(r, e, t, n2) {
  let i = e && _t(e);
  if (!n2) if (i) {
    let s = r.or++;
    return (o2) => r.parser.alternatives(s, [
      {
        ALT: /* @__PURE__ */ m$1(() => t(o2), "ALT"),
        GATE: /* @__PURE__ */ m$1(() => i(o2), "GATE")
      },
      {
        ALT: /* @__PURE__ */ Is(),
        GATE: /* @__PURE__ */ m$1(() => !i(o2), "GATE")
      }
    ]);
  } else return t;
  if (n2 === "*") {
    let s = r.many++;
    return (o2) => r.parser.many(s, {
      DEF: /* @__PURE__ */ m$1(() => t(o2), "DEF"),
      GATE: i ? () => i(o2) : void 0
    });
  } else if (n2 === "+") {
    let s = r.many++;
    if (i) {
      let o2 = r.or++;
      return (l) => r.parser.alternatives(o2, [
        {
          ALT: /* @__PURE__ */ m$1(() => r.parser.atLeastOne(s, {
            DEF: /* @__PURE__ */ m$1(() => t(l), "DEF")
          }), "ALT"),
          GATE: /* @__PURE__ */ m$1(() => i(l), "GATE")
        },
        {
          ALT: /* @__PURE__ */ Is(),
          GATE: /* @__PURE__ */ m$1(() => !i(l), "GATE")
        }
      ]);
    } else return (o2) => r.parser.atLeastOne(s, {
      DEF: /* @__PURE__ */ m$1(() => t(o2), "DEF")
    });
  } else if (n2 === "?") {
    let s = r.optional++;
    return (o2) => r.parser.optional(s, {
      DEF: /* @__PURE__ */ m$1(() => t(o2), "DEF"),
      GATE: i ? () => i(o2) : void 0
    });
  } else bt();
}
m$1(rd, "wrap");
function nd(r, e) {
  let t = /* @__PURE__ */ ym(r, e), n2 = /* @__PURE__ */ r.rules.get(t);
  if (!n2) throw new Error(`Rule "${t}" not found."`);
  return n2;
}
m$1(nd, "getRule");
function ym(r, e) {
  if (_e(e)) return e.name;
  if (r.ruleNames.has(e)) return r.ruleNames.get(e);
  {
    let t = e, n2 = t.$container, i = e.$type;
    for (; !_e(n2); ) (Mt(n2) || Pi(n2) || Mi(n2)) && (i = n2.elements.indexOf(t).toString() + ":" + i), t = n2, n2 = n2.$container;
    return i = n2.name + ":" + i, r.ruleNames.set(e, i), i;
  }
}
m$1(ym, "getRuleName");
function kl(r, e) {
  let t = r.tokens[e];
  if (!t) throw new Error(`Token "${e}" not found."`);
  return t;
}
m$1(kl, "getToken");
function Il(r) {
  let e = r.Grammar, t = r.parser.Lexer, n2 = new qn(r);
  return Ms(e, n2, t.definition), n2.finalize(), n2;
}
m$1(Il, "createCompletionParser");
function Nl(r) {
  let e = /* @__PURE__ */ id(r);
  return e.finalize(), e;
}
m$1(Nl, "createLangiumParser");
function id(r) {
  let e = r.Grammar, t = r.parser.Lexer, n2 = new zn(r);
  return Ms(e, n2, t.definition);
}
m$1(id, "prepareLangiumParser");
var mr = (_xa = class {
  buildTokens(e, t) {
    let n2 = /* @__PURE__ */ K(/* @__PURE__ */ xn(e, false)), i = /* @__PURE__ */ this.buildTerminalTokens(n2), s = /* @__PURE__ */ this.buildKeywordTokens(n2, i, t);
    return i.forEach((o2) => {
      let l = o2.PATTERN;
      typeof l == "object" && l && "test" in l && Bi(l) ? s.unshift(o2) : s.push(o2);
    }), s;
  }
  buildTerminalTokens(e) {
    return e.filter(Ye).filter((t) => !t.fragment).map((t) => this.buildTerminalToken(t)).toArray();
  }
  buildTerminalToken(e) {
    let t = /* @__PURE__ */ Sr(e), n2 = this.requiresCustomPattern(t) ? this.regexPatternFunction(t) : t, i = {
      name: e.name,
      PATTERN: n2,
      LINE_BREAKS: true
    };
    return e.hidden && (i.GROUP = Bi(t) ? le.SKIPPED : "hidden"), i;
  }
  requiresCustomPattern(e) {
    return e.flags.includes("u") ? true : !!(e.source.includes("?<=") || e.source.includes("?<!"));
  }
  regexPatternFunction(e) {
    let t = new RegExp(e, e.flags + "y");
    return (n2, i) => (t.lastIndex = i, t.exec(n2));
  }
  buildKeywordTokens(e, t, n2) {
    return e.filter(_e).flatMap((i) => ot(i).filter(Je)).distinct((i) => i.value).toArray().sort((i, s) => s.value.length - i.value.length).map((i) => this.buildKeywordToken(i, t, !!(n2 == null ? void 0 : n2.caseInsensitive)));
  }
  buildKeywordToken(e, t, n2) {
    return {
      name: e.value,
      PATTERN: /* @__PURE__ */ this.buildKeywordPattern(e, n2),
      LONGER_ALT: /* @__PURE__ */ this.findLongerAlt(e, t)
    };
  }
  buildKeywordPattern(e, t) {
    return t ? new RegExp(ho(e.value)) : e.value;
  }
  findLongerAlt(e, t) {
    return t.reduce((n2, i) => {
      let s = i == null ? void 0 : i.PATTERN;
      return (s == null ? void 0 : s.source) && po("^" + s.source + "$", e.value) && n2.push(i), n2;
    }, []);
  }
}, __79 = new WeakMap(), __privateAdd(_xa, __79, m$1(_xa, "DefaultTokenBuilder")), _xa);
var gr = (_ya = class {
  convert(e, t) {
    let n2 = t.grammarSource;
    if (Qt(n2) && (n2 = /* @__PURE__ */ yo(n2)), rt(n2)) {
      let i = n2.rule.ref;
      if (!i) throw new Error("This cst node was not parsed by a rule.");
      return this.runConverter(i, e, t);
    }
    return e;
  }
  runConverter(e, t, n2) {
    var i;
    switch (e.name.toUpperCase()) {
      case "INT":
        return ut.convertInt(t);
      case "STRING":
        return ut.convertString(t);
      case "ID":
        return ut.convertID(t);
    }
    switch ((i = /* @__PURE__ */ Io(e)) === null || i === void 0 ? void 0 : i.toLowerCase()) {
      case "number":
        return ut.convertNumber(t);
      case "boolean":
        return ut.convertBoolean(t);
      case "bigint":
        return ut.convertBigint(t);
      case "date":
        return ut.convertDate(t);
      default:
        return t;
    }
  }
}, __80 = new WeakMap(), __privateAdd(_ya, __80, m$1(_ya, "DefaultValueConverter")), _ya), ut;
(function(r) {
  function e(u) {
    let f = "";
    for (let d = 1; d < u.length - 1; d++) {
      let p2 = /* @__PURE__ */ u.charAt(d);
      if (p2 === "\\") {
        let h2 = /* @__PURE__ */ u.charAt(++d);
        f += /* @__PURE__ */ t(h2);
      } else f += p2;
    }
    return f;
  }
  m$1(e, "convertString"), r.convertString = e;
  function t(u) {
    switch (u) {
      case "b":
        return "\b";
      case "f":
        return "\f";
      case "n":
        return `
`;
      case "r":
        return "\r";
      case "t":
        return "	";
      case "v":
        return "\v";
      case "0":
        return "\0";
      default:
        return u;
    }
  }
  m$1(t, "convertEscapeCharacter");
  function n2(u) {
    return u.charAt(0) === "^" ? u.substring(1) : u;
  }
  m$1(n2, "convertID"), r.convertID = n2;
  function i(u) {
    return parseInt(u);
  }
  m$1(i, "convertInt"), r.convertInt = i;
  function s(u) {
    return BigInt(u);
  }
  m$1(s, "convertBigint"), r.convertBigint = s;
  function o2(u) {
    return new Date(u);
  }
  m$1(o2, "convertDate"), r.convertDate = o2;
  function l(u) {
    return Number(u);
  }
  m$1(l, "convertNumber"), r.convertNumber = l;
  function c(u) {
    return u.toLowerCase() === "true";
  }
  m$1(c, "convertBoolean"), r.convertBoolean = c;
})(ut || (ut = {}));
var w = {};
p(w, /* @__PURE__ */ q$1(/* @__PURE__ */ cd()));
function Ml() {
  return new Promise((r) => {
    typeof setImmediate > "u" ? setTimeout(r, 0) : setImmediate(r);
  });
}
m$1(Ml, "delayNextTick");
var bl = 0, ud = 10;
function fd() {
  return bl = /* @__PURE__ */ Date.now(), new w.CancellationTokenSource();
}
m$1(fd, "startCancelableOperation");
function dd(r) {
  ud = r;
}
m$1(dd, "setInterruptionPeriod");
var ft = /* @__PURE__ */ Symbol("OperationCancelled");
function Gt(r) {
  return r === ft;
}
m$1(Gt, "isOperationCancelled");
async function Te(r) {
  if (r === w.CancellationToken.None) return;
  let e = /* @__PURE__ */ Date.now();
  if (e - bl >= ud && (bl = e, await Ml()), r.isCancellationRequested) throw ft;
}
m$1(Te, "interruptAndCheck");
var Ue = (_za = class {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = (n2) => (e(n2), this), this.reject = (n2) => (t(n2), this);
    });
  }
}, __81 = new WeakMap(), __privateAdd(_za, __81, m$1(_za, "Deferred")), _za);
var Gs = (_Aa = class {
  constructor(e, t, n2, i) {
    this._uri = e, this._languageId = t, this._version = n2, this._content = i, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e) {
    if (e) {
      let t = /* @__PURE__ */ this.offsetAt(e.start), n2 = /* @__PURE__ */ this.offsetAt(e.end);
      return this._content.substring(t, n2);
    }
    return this._content;
  }
  update(e, t) {
    for (let n2 of e) if (_Aa.isIncremental(n2)) {
      let i = /* @__PURE__ */ md(n2.range), s = /* @__PURE__ */ this.offsetAt(i.start), o2 = /* @__PURE__ */ this.offsetAt(i.end);
      this._content = this._content.substring(0, s) + n2.text + this._content.substring(o2, this._content.length);
      let l = /* @__PURE__ */ Math.max(i.start.line, 0), c = /* @__PURE__ */ Math.max(i.end.line, 0), u = this._lineOffsets, f = /* @__PURE__ */ hd(n2.text, false, s);
      if (c - l === f.length) for (let p2 = 0, h2 = f.length; p2 < h2; p2++) u[p2 + l + 1] = f[p2];
      else f.length < 1e4 ? u.splice(l + 1, c - l, ...f) : this._lineOffsets = u = /* @__PURE__ */ u.slice(0, l + 1).concat(f, /* @__PURE__ */ u.slice(c + 1));
      let d = n2.text.length - (o2 - s);
      if (d !== 0) for (let p2 = l + 1 + f.length, h2 = u.length; p2 < h2; p2++) u[p2] = u[p2] + d;
    } else if (_Aa.isFull(n2)) this._content = n2.text, this._lineOffsets = void 0;
    else throw new Error("Unknown change event received");
    this._version = t;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = /* @__PURE__ */ hd(this._content, true)), this._lineOffsets;
  }
  positionAt(e) {
    e = /* @__PURE__ */ Math.max(/* @__PURE__ */ Math.min(e, this._content.length), 0);
    let t = /* @__PURE__ */ this.getLineOffsets(), n2 = 0, i = t.length;
    if (i === 0) return {
      line: 0,
      character: e
    };
    for (; n2 < i; ) {
      let o2 = /* @__PURE__ */ Math.floor((n2 + i) / 2);
      t[o2] > e ? i = o2 : n2 = o2 + 1;
    }
    let s = n2 - 1;
    return e = /* @__PURE__ */ this.ensureBeforeEOL(e, t[s]), {
      line: s,
      character: e - t[s]
    };
  }
  offsetAt(e) {
    let t = /* @__PURE__ */ this.getLineOffsets();
    if (e.line >= t.length) return this._content.length;
    if (e.line < 0) return 0;
    let n2 = t[e.line];
    if (e.character <= 0) return n2;
    let i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length, s = /* @__PURE__ */ Math.min(n2 + e.character, i);
    return this.ensureBeforeEOL(s, n2);
  }
  ensureBeforeEOL(e, t) {
    for (; e > t && pd(/* @__PURE__ */ this._content.charCodeAt(e - 1)); ) e--;
    return e;
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(e) {
    let t = e;
    return t != null && typeof t.text == "string" && t.range !== void 0 && (t.rangeLength === void 0 || typeof t.rangeLength == "number");
  }
  static isFull(e) {
    let t = e;
    return t != null && typeof t.text == "string" && t.range === void 0 && t.rangeLength === void 0;
  }
}, __82 = new WeakMap(), __privateAdd(_Aa, __82, m$1(_Aa, "FullTextDocument")), _Aa), Zr;
(function(r) {
  function e(i, s, o2, l) {
    return new Gs(i, s, o2, l);
  }
  m$1(e, "create"), r.create = e;
  function t(i, s, o2) {
    if (i instanceof Gs) return i.update(s, o2), i;
    throw new Error("TextDocument.update: document must be created by TextDocument.create");
  }
  m$1(t, "update"), r.update = t;
  function n2(i, s) {
    let o2 = /* @__PURE__ */ i.getText(), l = /* @__PURE__ */ Dl(/* @__PURE__ */ s.map(Sm), (f, d) => {
      let p2 = f.range.start.line - d.range.start.line;
      return p2 === 0 ? f.range.start.character - d.range.start.character : p2;
    }), c = 0, u = [];
    for (let f of l) {
      let d = /* @__PURE__ */ i.offsetAt(f.range.start);
      if (d < c) throw new Error("Overlapping edit");
      d > c && u.push(/* @__PURE__ */ o2.substring(c, d)), f.newText.length && u.push(f.newText), c = /* @__PURE__ */ i.offsetAt(f.range.end);
    }
    return u.push(/* @__PURE__ */ o2.substr(c)), u.join("");
  }
  m$1(n2, "applyEdits"), r.applyEdits = n2;
})(Zr || (Zr = {}));
function Dl(r, e) {
  if (r.length <= 1) return r;
  let t = r.length / 2 | 0, n2 = /* @__PURE__ */ r.slice(0, t), i = /* @__PURE__ */ r.slice(t);
  Dl(n2, e), Dl(i, e);
  let s = 0, o2 = 0, l = 0;
  for (; s < n2.length && o2 < i.length; ) e(n2[s], i[o2]) <= 0 ? r[l++] = n2[s++] : r[l++] = i[o2++];
  for (; s < n2.length; ) r[l++] = n2[s++];
  for (; o2 < i.length; ) r[l++] = i[o2++];
  return r;
}
m$1(Dl, "mergeSort");
function hd(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  let n2 = e ? [
    t
  ] : [];
  for (let i = 0; i < r.length; i++) {
    let s = /* @__PURE__ */ r.charCodeAt(i);
    pd(s) && (s === 13 && i + 1 < r.length && r.charCodeAt(i + 1) === 10 && i++, n2.push(t + i + 1));
  }
  return n2;
}
m$1(hd, "computeLineOffsets");
function pd(r) {
  return r === 13 || r === 10;
}
m$1(pd, "isEOL");
function md(r) {
  let e = r.start, t = r.end;
  return e.line > t.line || e.line === t.line && e.character > t.character ? {
    start: t,
    end: e
  } : r;
}
m$1(md, "getWellformedRange");
function Sm(r) {
  let e = /* @__PURE__ */ md(r.range);
  return e !== r.range ? {
    newText: r.newText,
    range: e
  } : r;
}
m$1(Sm, "getWellformedEdit");
var gd;
(() => {
  var r = {
    470: (i) => {
      function s(c) {
        if (typeof c != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(c));
      }
      m$1(s, "e");
      function o2(c, u) {
        for (var f, d = "", p2 = 0, h2 = -1, g = 0, T2 = 0; T2 <= c.length; ++T2) {
          if (T2 < c.length) f = /* @__PURE__ */ c.charCodeAt(T2);
          else {
            if (f === 47) break;
            f = 47;
          }
          if (f === 47) {
            if (!(h2 === T2 - 1 || g === 1)) if (h2 !== T2 - 1 && g === 2) {
              if (d.length < 2 || p2 !== 2 || d.charCodeAt(d.length - 1) !== 46 || d.charCodeAt(d.length - 2) !== 46) {
                if (d.length > 2) {
                  var k = /* @__PURE__ */ d.lastIndexOf("/");
                  if (k !== d.length - 1) {
                    k === -1 ? (d = "", p2 = 0) : p2 = (d = /* @__PURE__ */ d.slice(0, k)).length - 1 - d.lastIndexOf("/"), h2 = T2, g = 0;
                    continue;
                  }
                } else if (d.length === 2 || d.length === 1) {
                  d = "", p2 = 0, h2 = T2, g = 0;
                  continue;
                }
              }
              u && (d.length > 0 ? d += "/.." : d = "..", p2 = 2);
            } else d.length > 0 ? d += "/" + c.slice(h2 + 1, T2) : d = /* @__PURE__ */ c.slice(h2 + 1, T2), p2 = T2 - h2 - 1;
            h2 = T2, g = 0;
          } else f === 46 && g !== -1 ? ++g : g = -1;
        }
        return d;
      }
      m$1(o2, "r");
      var l = {
        resolve: /* @__PURE__ */ m$1(function() {
          for (var c, u = "", f = false, d = arguments.length - 1; d >= -1 && !f; d--) {
            var p2;
            d >= 0 ? p2 = arguments[d] : (c === void 0 && (c = /* @__PURE__ */ process.cwd()), p2 = c), s(p2), p2.length !== 0 && (u = p2 + "/" + u, f = p2.charCodeAt(0) === 47);
          }
          return u = /* @__PURE__ */ o2(u, !f), f ? u.length > 0 ? "/" + u : "/" : u.length > 0 ? u : ".";
        }, "resolve"),
        normalize: /* @__PURE__ */ m$1(function(c) {
          if (s(c), c.length === 0) return ".";
          var u = c.charCodeAt(0) === 47, f = c.charCodeAt(c.length - 1) === 47;
          return (c = /* @__PURE__ */ o2(c, !u)).length !== 0 || u || (c = "."), c.length > 0 && f && (c += "/"), u ? "/" + c : c;
        }, "normalize"),
        isAbsolute: /* @__PURE__ */ m$1(function(c) {
          return s(c), c.length > 0 && c.charCodeAt(0) === 47;
        }, "isAbsolute"),
        join: /* @__PURE__ */ m$1(function() {
          if (arguments.length === 0) return ".";
          for (var c, u = 0; u < arguments.length; ++u) {
            var f = arguments[u];
            s(f), f.length > 0 && (c === void 0 ? c = f : c += "/" + f);
          }
          return c === void 0 ? "." : l.normalize(c);
        }, "join"),
        relative: /* @__PURE__ */ m$1(function(c, u) {
          if (s(c), s(u), c === u || (c = /* @__PURE__ */ l.resolve(c)) === (u = /* @__PURE__ */ l.resolve(u))) return "";
          for (var f = 1; f < c.length && c.charCodeAt(f) === 47; ++f) ;
          for (var d = c.length, p2 = d - f, h2 = 1; h2 < u.length && u.charCodeAt(h2) === 47; ++h2) ;
          for (var g = u.length - h2, T2 = p2 < g ? p2 : g, k = -1, R = 0; R <= T2; ++R) {
            if (R === T2) {
              if (g > T2) {
                if (u.charCodeAt(h2 + R) === 47) return u.slice(h2 + R + 1);
                if (R === 0) return u.slice(h2 + R);
              } else p2 > T2 && (c.charCodeAt(f + R) === 47 ? k = R : R === 0 && (k = 0));
              break;
            }
            var A = /* @__PURE__ */ c.charCodeAt(f + R);
            if (A !== u.charCodeAt(h2 + R)) break;
            A === 47 && (k = R);
          }
          var x = "";
          for (R = f + k + 1; R <= d; ++R) R !== d && c.charCodeAt(R) !== 47 || (x.length === 0 ? x += ".." : x += "/..");
          return x.length > 0 ? x + u.slice(h2 + k) : (h2 += k, u.charCodeAt(h2) === 47 && ++h2, u.slice(h2));
        }, "relative"),
        _makeLong: /* @__PURE__ */ m$1(function(c) {
          return c;
        }, "_makeLong"),
        dirname: /* @__PURE__ */ m$1(function(c) {
          if (s(c), c.length === 0) return ".";
          for (var u = /* @__PURE__ */ c.charCodeAt(0), f = u === 47, d = -1, p2 = true, h2 = c.length - 1; h2 >= 1; --h2) if ((u = /* @__PURE__ */ c.charCodeAt(h2)) === 47) {
            if (!p2) {
              d = h2;
              break;
            }
          } else p2 = false;
          return d === -1 ? f ? "/" : "." : f && d === 1 ? "//" : c.slice(0, d);
        }, "dirname"),
        basename: /* @__PURE__ */ m$1(function(c, u) {
          if (u !== void 0 && typeof u != "string") throw new TypeError('"ext" argument must be a string');
          s(c);
          var f, d = 0, p2 = -1, h2 = true;
          if (u !== void 0 && u.length > 0 && u.length <= c.length) {
            if (u.length === c.length && u === c) return "";
            var g = u.length - 1, T2 = -1;
            for (f = c.length - 1; f >= 0; --f) {
              var k = /* @__PURE__ */ c.charCodeAt(f);
              if (k === 47) {
                if (!h2) {
                  d = f + 1;
                  break;
                }
              } else T2 === -1 && (h2 = false, T2 = f + 1), g >= 0 && (k === u.charCodeAt(g) ? --g == -1 && (p2 = f) : (g = -1, p2 = T2));
            }
            return d === p2 ? p2 = T2 : p2 === -1 && (p2 = c.length), c.slice(d, p2);
          }
          for (f = c.length - 1; f >= 0; --f) if (c.charCodeAt(f) === 47) {
            if (!h2) {
              d = f + 1;
              break;
            }
          } else p2 === -1 && (h2 = false, p2 = f + 1);
          return p2 === -1 ? "" : c.slice(d, p2);
        }, "basename"),
        extname: /* @__PURE__ */ m$1(function(c) {
          s(c);
          for (var u = -1, f = 0, d = -1, p2 = true, h2 = 0, g = c.length - 1; g >= 0; --g) {
            var T2 = /* @__PURE__ */ c.charCodeAt(g);
            if (T2 !== 47) d === -1 && (p2 = false, d = g + 1), T2 === 46 ? u === -1 ? u = g : h2 !== 1 && (h2 = 1) : u !== -1 && (h2 = -1);
            else if (!p2) {
              f = g + 1;
              break;
            }
          }
          return u === -1 || d === -1 || h2 === 0 || h2 === 1 && u === d - 1 && u === f + 1 ? "" : c.slice(u, d);
        }, "extname"),
        format: /* @__PURE__ */ m$1(function(c) {
          if (c === null || typeof c != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof c);
          return function(u, f) {
            var d = f.dir || f.root, p2 = f.base || (f.name || "") + (f.ext || "");
            return d ? d === f.root ? d + p2 : d + "/" + p2 : p2;
          }(0, c);
        }, "format"),
        parse: /* @__PURE__ */ m$1(function(c) {
          s(c);
          var u = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
          };
          if (c.length === 0) return u;
          var f, d = /* @__PURE__ */ c.charCodeAt(0), p2 = d === 47;
          p2 ? (u.root = "/", f = 1) : f = 0;
          for (var h2 = -1, g = 0, T2 = -1, k = true, R = c.length - 1, A = 0; R >= f; --R) if ((d = /* @__PURE__ */ c.charCodeAt(R)) !== 47) T2 === -1 && (k = false, T2 = R + 1), d === 46 ? h2 === -1 ? h2 = R : A !== 1 && (A = 1) : h2 !== -1 && (A = -1);
          else if (!k) {
            g = R + 1;
            break;
          }
          return h2 === -1 || T2 === -1 || A === 0 || A === 1 && h2 === T2 - 1 && h2 === g + 1 ? T2 !== -1 && (u.base = u.name = g === 0 && p2 ? c.slice(1, T2) : c.slice(g, T2)) : (g === 0 && p2 ? (u.name = /* @__PURE__ */ c.slice(1, h2), u.base = /* @__PURE__ */ c.slice(1, T2)) : (u.name = /* @__PURE__ */ c.slice(g, h2), u.base = /* @__PURE__ */ c.slice(g, T2)), u.ext = /* @__PURE__ */ c.slice(h2, T2)), g > 0 ? u.dir = /* @__PURE__ */ c.slice(0, g - 1) : p2 && (u.dir = "/"), u;
        }, "parse"),
        sep: "/",
        delimiter: ":",
        win32: null,
        posix: null
      };
      l.posix = l, i.exports = l;
    }
  }, e = {};
  function t(i) {
    var s = e[i];
    if (s !== void 0) return s.exports;
    var o2 = e[i] = {
      exports: {}
    };
    return r[i](o2, o2.exports, t), o2.exports;
  }
  m$1(t, "r"), t.d = (i, s) => {
    for (var o2 in s) t.o(s, o2) && !t.o(i, o2) && Object.defineProperty(i, o2, {
      enumerable: true,
      get: s[o2]
    });
  }, t.o = (i, s) => Object.prototype.hasOwnProperty.call(i, s), t.r = (i) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(i, "__esModule", {
      value: true
    });
  };
  var n2 = {};
  (() => {
    var __128, __129;
    let i;
    t.r(n2), t.d(n2, {
      URI: /* @__PURE__ */ m$1(() => p2, "URI"),
      Utils: /* @__PURE__ */ m$1(() => ht, "Utils")
    }), typeof process == "object" ? i = process.platform === "win32" : typeof navigator == "object" && (i = navigator.userAgent.indexOf("Windows") >= 0);
    let s = /^\w[\w\d+.-]*$/, o2 = /^\//, l = /^\/\//;
    function c(v, y) {
      if (!v.scheme && y) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${v.authority}", path: "${v.path}", query: "${v.query}", fragment: "${v.fragment}"}`);
      if (v.scheme && !s.test(v.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
      if (v.path) {
        if (v.authority) {
          if (!o2.test(v.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (l.test(v.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
    m$1(c, "s");
    let u = "", f = "/", d = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    const _p3 = class _p3 {
      constructor(y, C, S, V, $, O = false) {
        __publicField(this, "scheme");
        __publicField(this, "authority");
        __publicField(this, "path");
        __publicField(this, "query");
        __publicField(this, "fragment");
        typeof y == "object" ? (this.scheme = y.scheme || u, this.authority = y.authority || u, this.path = y.path || u, this.query = y.query || u, this.fragment = y.fragment || u) : (this.scheme = /* @__PURE__ */ function(Le, Oe) {
          return Le || Oe ? Le : "file";
        }(y, O), this.authority = C || u, this.path = /* @__PURE__ */ function(Le, Oe) {
          switch (Le) {
            case "https":
            case "http":
            case "file":
              Oe ? Oe[0] !== f && (Oe = f + Oe) : Oe = f;
          }
          return Oe;
        }(this.scheme, S || u), this.query = V || u, this.fragment = $ || u, c(this, O));
      }
      static isUri(y) {
        return y instanceof _p3 || !!y && typeof y.authority == "string" && typeof y.fragment == "string" && typeof y.path == "string" && typeof y.query == "string" && typeof y.scheme == "string" && typeof y.fsPath == "string" && typeof y.with == "function" && typeof y.toString == "function";
      }
      get fsPath() {
        return A(this, false);
      }
      with(y) {
        if (!y) return this;
        let { scheme: C, authority: S, path: V, query: $, fragment: O } = y;
        return C === void 0 ? C = this.scheme : C === null && (C = u), S === void 0 ? S = this.authority : S === null && (S = u), V === void 0 ? V = this.path : V === null && (V = u), $ === void 0 ? $ = this.query : $ === null && ($ = u), O === void 0 ? O = this.fragment : O === null && (O = u), C === this.scheme && S === this.authority && V === this.path && $ === this.query && O === this.fragment ? this : new g(C, S, V, $, O);
      }
      static parse(y) {
        let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        let S = /* @__PURE__ */ d.exec(y);
        return S ? new g(S[2] || u, xe(S[4] || u), xe(S[5] || u), xe(S[7] || u), xe(S[9] || u), C) : new g(u, u, u, u, u);
      }
      static file(y) {
        let C = u;
        if (i && (y = /* @__PURE__ */ y.replace(/\\/g, f)), y[0] === f && y[1] === f) {
          let S = /* @__PURE__ */ y.indexOf(f, 2);
          S === -1 ? (C = /* @__PURE__ */ y.substring(2), y = f) : (C = /* @__PURE__ */ y.substring(2, S), y = y.substring(S) || f);
        }
        return new g("file", C, y, u, u);
      }
      static from(y) {
        let C = new g(y.scheme, y.authority, y.path, y.query, y.fragment);
        return c(C, true), C;
      }
      toString() {
        let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        return x(this, y);
      }
      toJSON() {
        return this;
      }
      static revive(y) {
        if (y) {
          if (y instanceof _p3) return y;
          {
            let C = new g(y);
            return C._formatted = y.external, C._fsPath = y._sep === h2 ? y.fsPath : null, C;
          }
        }
        return y;
      }
    };
    __128 = new WeakMap();
    __privateAdd(_p3, __128, m$1(_p3, "f"));
    let p2 = _p3;
    let h2 = i ? 1 : void 0;
    const _g2 = class _g2 extends p2 {
      constructor() {
        super(...arguments);
        __publicField(this, "_formatted", null);
        __publicField(this, "_fsPath", null);
      }
      get fsPath() {
        return this._fsPath || (this._fsPath = /* @__PURE__ */ A(this, false)), this._fsPath;
      }
      toString() {
        let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        return y ? x(this, true) : (this._formatted || (this._formatted = /* @__PURE__ */ x(this, false)), this._formatted);
      }
      toJSON() {
        let y = {
          $mid: 1
        };
        return this._fsPath && (y.fsPath = this._fsPath, y._sep = h2), this._formatted && (y.external = this._formatted), this.path && (y.path = this.path), this.scheme && (y.scheme = this.scheme), this.authority && (y.authority = this.authority), this.query && (y.query = this.query), this.fragment && (y.fragment = this.fragment), y;
      }
    };
    __129 = new WeakMap();
    __privateAdd(_g2, __129, m$1(_g2, "l"));
    let g = _g2;
    let T2 = {
      58: "%3A",
      47: "%2F",
      63: "%3F",
      35: "%23",
      91: "%5B",
      93: "%5D",
      64: "%40",
      33: "%21",
      36: "%24",
      38: "%26",
      39: "%27",
      40: "%28",
      41: "%29",
      42: "%2A",
      43: "%2B",
      44: "%2C",
      59: "%3B",
      61: "%3D",
      32: "%20"
    };
    function k(v, y, C) {
      let S, V = -1;
      for (let $ = 0; $ < v.length; $++) {
        let O = /* @__PURE__ */ v.charCodeAt($);
        if (O >= 97 && O <= 122 || O >= 65 && O <= 90 || O >= 48 && O <= 57 || O === 45 || O === 46 || O === 95 || O === 126 || y && O === 47 || C && O === 91 || C && O === 93 || C && O === 58) V !== -1 && (S += /* @__PURE__ */ encodeURIComponent(/* @__PURE__ */ v.substring(V, $)), V = -1), S !== void 0 && (S += /* @__PURE__ */ v.charAt($));
        else {
          S === void 0 && (S = /* @__PURE__ */ v.substr(0, $));
          let Le = T2[O];
          Le !== void 0 ? (V !== -1 && (S += /* @__PURE__ */ encodeURIComponent(/* @__PURE__ */ v.substring(V, $)), V = -1), S += Le) : V === -1 && (V = $);
        }
      }
      return V !== -1 && (S += /* @__PURE__ */ encodeURIComponent(/* @__PURE__ */ v.substring(V))), S !== void 0 ? S : v;
    }
    m$1(k, "d");
    function R(v) {
      let y;
      for (let C = 0; C < v.length; C++) {
        let S = /* @__PURE__ */ v.charCodeAt(C);
        S === 35 || S === 63 ? (y === void 0 && (y = /* @__PURE__ */ v.substr(0, C)), y += T2[S]) : y !== void 0 && (y += v[C]);
      }
      return y !== void 0 ? y : v;
    }
    m$1(R, "p");
    function A(v, y) {
      let C;
      return C = v.authority && v.path.length > 1 && v.scheme === "file" ? `//${v.authority}${v.path}` : v.path.charCodeAt(0) === 47 && (v.path.charCodeAt(1) >= 65 && v.path.charCodeAt(1) <= 90 || v.path.charCodeAt(1) >= 97 && v.path.charCodeAt(1) <= 122) && v.path.charCodeAt(2) === 58 ? y ? v.path.substr(1) : v.path[1].toLowerCase() + v.path.substr(2) : v.path, i && (C = /* @__PURE__ */ C.replace(/\//g, "\\")), C;
    }
    m$1(A, "m");
    function x(v, y) {
      let C = y ? R : k, S = "", { scheme: V, authority: $, path: O, query: Le, fragment: Oe } = v;
      if (V && (S += V, S += ":"), ($ || V === "file") && (S += f, S += f), $) {
        let ee = /* @__PURE__ */ $.indexOf("@");
        if (ee !== -1) {
          let Wt = /* @__PURE__ */ $.substr(0, ee);
          $ = /* @__PURE__ */ $.substr(ee + 1), ee = /* @__PURE__ */ Wt.lastIndexOf(":"), ee === -1 ? S += /* @__PURE__ */ C(Wt, false, false) : (S += /* @__PURE__ */ C(/* @__PURE__ */ Wt.substr(0, ee), false, false), S += ":", S += /* @__PURE__ */ C(/* @__PURE__ */ Wt.substr(ee + 1), false, true)), S += "@";
        }
        $ = /* @__PURE__ */ $.toLowerCase(), ee = /* @__PURE__ */ $.lastIndexOf(":"), ee === -1 ? S += /* @__PURE__ */ C($, false, true) : (S += /* @__PURE__ */ C(/* @__PURE__ */ $.substr(0, ee), false, true), S += /* @__PURE__ */ $.substr(ee));
      }
      if (O) {
        if (O.length >= 3 && O.charCodeAt(0) === 47 && O.charCodeAt(2) === 58) {
          let ee = /* @__PURE__ */ O.charCodeAt(1);
          ee >= 65 && ee <= 90 && (O = `/${String.fromCharCode(ee + 32)}:${O.substr(3)}`);
        } else if (O.length >= 2 && O.charCodeAt(1) === 58) {
          let ee = /* @__PURE__ */ O.charCodeAt(0);
          ee >= 65 && ee <= 90 && (O = `${String.fromCharCode(ee + 32)}:${O.substr(2)}`);
        }
        S += /* @__PURE__ */ C(O, true, false);
      }
      return Le && (S += "?", S += /* @__PURE__ */ C(Le, false, false)), Oe && (S += "#", S += y ? Oe : k(Oe, false, false)), S;
    }
    m$1(x, "y");
    function P(v) {
      try {
        return decodeURIComponent(v);
      } catch {
        return v.length > 3 ? v.substr(0, 3) + P(/* @__PURE__ */ v.substr(3)) : v;
      }
    }
    m$1(P, "v");
    let b = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function xe(v) {
      return v.match(b) ? v.replace(b, (y) => P(y)) : v;
    }
    m$1(xe, "C");
    var Rr = /* @__PURE__ */ t(470);
    let ve = Rr.posix || Rr, Lt = "/";
    var ht;
    (function(v) {
      v.joinPath = function(y) {
        for (var _len = arguments.length, C = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          C[_key - 1] = arguments[_key];
        }
        return y.with({
          path: /* @__PURE__ */ ve.join(y.path, ...C)
        });
      }, v.resolvePath = function(y) {
        for (var _len = arguments.length, C = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          C[_key - 1] = arguments[_key];
        }
        let S = y.path, V = false;
        S[0] !== Lt && (S = Lt + S, V = true);
        let $ = /* @__PURE__ */ ve.resolve(S, ...C);
        return V && $[0] === Lt && !y.authority && ($ = /* @__PURE__ */ $.substring(1)), y.with({
          path: $
        });
      }, v.dirname = function(y) {
        if (y.path.length === 0 || y.path === Lt) return y;
        let C = /* @__PURE__ */ ve.dirname(y.path);
        return C.length === 1 && C.charCodeAt(0) === 46 && (C = ""), y.with({
          path: C
        });
      }, v.basename = function(y) {
        return ve.basename(y.path);
      }, v.extname = function(y) {
        return ve.extname(y.path);
      };
    })(ht || (ht = {}));
  })(), gd = n2;
})();
var { URI: We, Utils: en } = gd;
var Ge;
(function(r) {
  r.basename = en.basename, r.dirname = en.dirname, r.extname = en.extname, r.joinPath = en.joinPath, r.resolvePath = en.resolvePath;
  function e(n2, i) {
    return (n2 == null ? void 0 : n2.toString()) === (i == null ? void 0 : i.toString());
  }
  m$1(e, "equals"), r.equals = e;
  function t(n2, i) {
    let s = typeof n2 == "string" ? n2 : n2.path, o2 = typeof i == "string" ? i : i.path, l = /* @__PURE__ */ s.split("/").filter((p2) => p2.length > 0), c = /* @__PURE__ */ o2.split("/").filter((p2) => p2.length > 0), u = 0;
    for (; u < l.length && l[u] === c[u]; u++) ;
    let f = /* @__PURE__ */ "../".repeat(l.length - u), d = /* @__PURE__ */ c.slice(u).join("/");
    return f + d;
  }
  m$1(t, "relative"), r.relative = t;
})(Ge || (Ge = {}));
var Y;
(function(r) {
  r[r.Changed = 0] = "Changed", r[r.Parsed = 1] = "Parsed", r[r.IndexedContent = 2] = "IndexedContent", r[r.ComputedScopes = 3] = "ComputedScopes", r[r.Linked = 4] = "Linked", r[r.IndexedReferences = 5] = "IndexedReferences", r[r.Validated = 6] = "Validated";
})(Y || (Y = {}));
var Xn = (_Ba = class {
  constructor(e) {
    this.serviceRegistry = e.ServiceRegistry, this.textDocuments = e.workspace.TextDocuments, this.fileSystemProvider = e.workspace.FileSystemProvider;
  }
  async fromUri(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w.CancellationToken.None;
    let n2 = await this.fileSystemProvider.readFile(e);
    return this.createAsync(e, n2, t);
  }
  fromTextDocument(e, t, n2) {
    return t = t ?? We.parse(e.uri), n2 ? this.createAsync(t, e, n2) : this.create(t, e);
  }
  fromString(e, t, n2) {
    return n2 ? this.createAsync(t, e, n2) : this.create(t, e);
  }
  fromModel(e, t) {
    return this.create(t, {
      $model: e
    });
  }
  create(e, t) {
    if (typeof t == "string") {
      let n2 = /* @__PURE__ */ this.parse(e, t);
      return this.createLangiumDocument(n2, e, void 0, t);
    } else if ("$model" in t) {
      let n2 = {
        value: t.$model,
        parserErrors: [],
        lexerErrors: []
      };
      return this.createLangiumDocument(n2, e);
    } else {
      let n2 = /* @__PURE__ */ this.parse(e, /* @__PURE__ */ t.getText());
      return this.createLangiumDocument(n2, e, t);
    }
  }
  async createAsync(e, t, n2) {
    if (typeof t == "string") {
      let i = await this.parseAsync(e, t, n2);
      return this.createLangiumDocument(i, e, void 0, t);
    } else {
      let i = await this.parseAsync(e, /* @__PURE__ */ t.getText(), n2);
      return this.createLangiumDocument(i, e, t);
    }
  }
  createLangiumDocument(e, t, n2, i) {
    let s;
    if (n2) s = {
      parseResult: e,
      uri: t,
      state: Y.Parsed,
      references: [],
      textDocument: n2
    };
    else {
      let o2 = /* @__PURE__ */ this.createTextDocumentGetter(t, i);
      s = {
        parseResult: e,
        uri: t,
        state: Y.Parsed,
        references: [],
        get textDocument() {
          return o2();
        }
      };
    }
    return e.value.$document = s, s;
  }
  async update(e, t) {
    var n2, i;
    let s = (n2 = e.parseResult.value.$cstNode) === null || n2 === void 0 ? void 0 : n2.root.fullText, o2 = (i = this.textDocuments) === null || i === void 0 ? void 0 : i.get(/* @__PURE__ */ e.uri.toString()), l = o2 ? o2.getText() : await this.fileSystemProvider.readFile(e.uri);
    if (o2) Object.defineProperty(e, "textDocument", {
      value: o2
    });
    else {
      let c = /* @__PURE__ */ this.createTextDocumentGetter(e.uri, l);
      Object.defineProperty(e, "textDocument", {
        get: c
      });
    }
    return s !== l && (e.parseResult = await this.parseAsync(e.uri, l, t), e.parseResult.value.$document = e), e.state = Y.Parsed, e;
  }
  parse(e, t) {
    return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(t);
  }
  parseAsync(e, t, n2) {
    return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(t, n2);
  }
  createTextDocumentGetter(e, t) {
    let n2 = this.serviceRegistry, i;
    return () => i ?? (i = /* @__PURE__ */ Zr.create(/* @__PURE__ */ e.toString(), n2.getServices(e).LanguageMetaData.languageId, 0, t ?? ""));
  }
}, __83 = new WeakMap(), __privateAdd(_Ba, __83, m$1(_Ba, "DefaultLangiumDocumentFactory")), _Ba), Yn = (_Ca = class {
  constructor(e) {
    this.documentMap = /* @__PURE__ */ new Map(), this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory;
  }
  get all() {
    return K(/* @__PURE__ */ this.documentMap.values());
  }
  addDocument(e) {
    let t = /* @__PURE__ */ e.uri.toString();
    if (this.documentMap.has(t)) throw new Error(`A document with the URI '${t}' is already present.`);
    this.documentMap.set(t, e);
  }
  getDocument(e) {
    let t = /* @__PURE__ */ e.toString();
    return this.documentMap.get(t);
  }
  async getOrCreateDocument(e, t) {
    let n2 = /* @__PURE__ */ this.getDocument(e);
    return n2 || (n2 = await this.langiumDocumentFactory.fromUri(e, t), this.addDocument(n2), n2);
  }
  createDocument(e, t, n2) {
    if (n2) return this.langiumDocumentFactory.fromString(t, e, n2).then((i) => (this.addDocument(i), i));
    {
      let i = /* @__PURE__ */ this.langiumDocumentFactory.fromString(t, e);
      return this.addDocument(i), i;
    }
  }
  hasDocument(e) {
    return this.documentMap.has(/* @__PURE__ */ e.toString());
  }
  invalidateDocument(e) {
    let t = /* @__PURE__ */ e.toString(), n2 = /* @__PURE__ */ this.documentMap.get(t);
    return n2 && (n2.state = Y.Changed, n2.precomputedScopes = void 0, n2.references = [], n2.diagnostics = void 0), n2;
  }
  deleteDocument(e) {
    let t = /* @__PURE__ */ e.toString(), n2 = /* @__PURE__ */ this.documentMap.get(t);
    return n2 && (n2.state = Y.Changed, this.documentMap.delete(t)), n2;
  }
}, __84 = new WeakMap(), __privateAdd(_Ca, __84, m$1(_Ca, "DefaultLangiumDocuments")), _Ca);
var Jn = (_Da = class {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.langiumDocuments = () => e.shared.workspace.LangiumDocuments, this.scopeProvider = e.references.ScopeProvider, this.astNodeLocator = e.workspace.AstNodeLocator;
  }
  async link(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w.CancellationToken.None;
    for (let n2 of Qe(e.parseResult.value)) await Te(t), Ir(n2).forEach((i) => this.doLink(i, e));
  }
  doLink(e, t) {
    let n2 = e.reference;
    if (n2._ref === void 0) try {
      let i = /* @__PURE__ */ this.getCandidate(e);
      if (qt(i)) n2._ref = i;
      else if (n2._nodeDescription = i, this.langiumDocuments().hasDocument(i.documentUri)) {
        let s = /* @__PURE__ */ this.loadAstNode(i);
        n2._ref = s ?? this.createLinkingError(e, i);
      }
    } catch (i) {
      n2._ref = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, e), {
        message: `An error occurred while resolving reference to '${n2.$refText}': ${i}`
      });
    }
    t.references.push(n2);
  }
  unlink(e) {
    for (let t of e.references) delete t._ref, delete t._nodeDescription;
    e.references = [];
  }
  getCandidate(e) {
    let n2 = /* @__PURE__ */ this.scopeProvider.getScope(e).getElement(e.reference.$refText);
    return n2 ?? this.createLinkingError(e);
  }
  buildReference(e, t, n2, i) {
    let s = this, o2 = {
      $refNode: n2,
      $refText: i,
      get ref() {
        var l;
        if (ae(this._ref)) return this._ref;
        if (Qs(this._nodeDescription)) {
          let c = /* @__PURE__ */ s.loadAstNode(this._nodeDescription);
          this._ref = c ?? s.createLinkingError({
            reference: o2,
            container: e,
            property: t
          }, this._nodeDescription);
        } else if (this._ref === void 0) {
          let c = /* @__PURE__ */ s.getLinkedNode({
            reference: o2,
            container: e,
            property: t
          });
          if (c.error && ge(e).state < Y.ComputedScopes) return;
          this._ref = (l = c.node) !== null && l !== void 0 ? l : c.error, this._nodeDescription = c.descr;
        }
        return ae(this._ref) ? this._ref : void 0;
      },
      get $nodeDescription() {
        return this._nodeDescription;
      },
      get error() {
        return qt(this._ref) ? this._ref : void 0;
      }
    };
    return o2;
  }
  getLinkedNode(e) {
    try {
      let t = /* @__PURE__ */ this.getCandidate(e);
      if (qt(t)) return {
        error: t
      };
      let n2 = /* @__PURE__ */ this.loadAstNode(t);
      return n2 ? {
        node: n2,
        descr: t
      } : {
        descr: t,
        error: /* @__PURE__ */ this.createLinkingError(e, t)
      };
    } catch (t) {
      return {
        error: /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, e), {
          message: `An error occurred while resolving reference to '${e.reference.$refText}': ${t}`
        })
      };
    }
  }
  loadAstNode(e) {
    if (e.node) return e.node;
    let t = /* @__PURE__ */ this.langiumDocuments().getDocument(e.documentUri);
    if (t) return this.astNodeLocator.getAstNode(t.parseResult.value, e.path);
  }
  createLinkingError(e, t) {
    let n2 = /* @__PURE__ */ ge(e.container);
    n2.state < Y.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n2.uri}).`);
    let i = /* @__PURE__ */ this.reflection.getReferenceType(e);
    return Object.assign(/* @__PURE__ */ Object.assign({}, e), {
      message: `Could not resolve reference to ${i} named '${e.reference.$refText}'.`,
      targetDescription: t
    });
  }
}, __85 = new WeakMap(), __privateAdd(_Da, __85, m$1(_Da, "DefaultLinker")), _Da);
function yd(r) {
  return typeof r.name == "string";
}
m$1(yd, "isNamed");
var Qn = (_Ea = class {
  getName(e) {
    if (yd(e)) return e.name;
  }
  getNameNode(e) {
    return Rn(e.$cstNode, "name");
  }
}, __86 = new WeakMap(), __privateAdd(_Ea, __86, m$1(_Ea, "DefaultNameProvider")), _Ea);
var Zn = (_Fa = class {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.index = e.shared.workspace.IndexManager, this.nodeLocator = e.workspace.AstNodeLocator;
  }
  findDeclaration(e) {
    if (e) {
      let t = /* @__PURE__ */ vo(e), n2 = e.astNode;
      if (t && n2) {
        let i = n2[t.feature];
        if (Ae(i)) return i.ref;
        if (Array.isArray(i)) {
          for (let s of i) if (Ae(s) && s.$refNode && s.$refNode.offset <= e.offset && s.$refNode.end >= e.end) return s.ref;
        }
      }
      if (n2) {
        let i = /* @__PURE__ */ this.nameProvider.getNameNode(n2);
        if (i && (i === e || ea(e, i))) return n2;
      }
    }
  }
  findDeclarationNode(e) {
    let t = /* @__PURE__ */ this.findDeclaration(e);
    if (t == null ? void 0 : t.$cstNode) {
      let n2 = /* @__PURE__ */ this.nameProvider.getNameNode(t);
      return n2 ?? t.$cstNode;
    }
  }
  findReferences(e, t) {
    let n2 = [];
    if (t.includeDeclaration) {
      let s = /* @__PURE__ */ this.getReferenceToSelf(e);
      s && n2.push(s);
    }
    let i = /* @__PURE__ */ this.index.findAllReferences(e, /* @__PURE__ */ this.nodeLocator.getAstNodePath(e));
    return t.documentUri && (i = /* @__PURE__ */ i.filter((s) => Ge.equals(s.sourceUri, t.documentUri))), n2.push(...i), K(n2);
  }
  getReferenceToSelf(e) {
    let t = /* @__PURE__ */ this.nameProvider.getNameNode(e);
    if (t) {
      let n2 = /* @__PURE__ */ ge(e), i = /* @__PURE__ */ this.nodeLocator.getAstNodePath(e);
      return {
        sourceUri: n2.uri,
        sourcePath: i,
        targetUri: n2.uri,
        targetPath: i,
        segment: /* @__PURE__ */ Yt(t),
        local: true
      };
    }
  }
}, __87 = new WeakMap(), __privateAdd(_Fa, __87, m$1(_Fa, "DefaultReferences")), _Fa);
var dt = (_Ga = class {
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), e) for (let [t, n2] of e) this.add(t, n2);
  }
  get size() {
    return Ar.sum(/* @__PURE__ */ K(/* @__PURE__ */ this.map.values()).map((e) => e.length));
  }
  clear() {
    this.map.clear();
  }
  delete(e, t) {
    if (t === void 0) return this.map.delete(e);
    {
      let n2 = /* @__PURE__ */ this.map.get(e);
      if (n2) {
        let i = /* @__PURE__ */ n2.indexOf(t);
        if (i >= 0) return n2.length === 1 ? this.map.delete(e) : n2.splice(i, 1), true;
      }
      return false;
    }
  }
  get(e) {
    var t;
    return (t = /* @__PURE__ */ this.map.get(e)) !== null && t !== void 0 ? t : [];
  }
  has(e, t) {
    if (t === void 0) return this.map.has(e);
    {
      let n2 = /* @__PURE__ */ this.map.get(e);
      return n2 ? n2.indexOf(t) >= 0 : false;
    }
  }
  add(e, t) {
    return this.map.has(e) ? this.map.get(e).push(t) : this.map.set(e, [
      t
    ]), this;
  }
  addAll(e, t) {
    return this.map.has(e) ? this.map.get(e).push(...t) : this.map.set(e, /* @__PURE__ */ Array.from(t)), this;
  }
  forEach(e) {
    this.map.forEach((t, n2) => t.forEach((i) => e(i, n2, this)));
  }
  [Symbol.iterator]() {
    return this.entries().iterator();
  }
  entries() {
    return K(/* @__PURE__ */ this.map.entries()).flatMap((param) => {
      let [e, t] = param;
      return t.map((n2) => [
        e,
        n2
      ]);
    });
  }
  keys() {
    return K(/* @__PURE__ */ this.map.keys());
  }
  values() {
    return K(/* @__PURE__ */ this.map.values()).flat();
  }
  entriesGroupedByKey() {
    return K(/* @__PURE__ */ this.map.entries());
  }
}, __88 = new WeakMap(), __privateAdd(_Ga, __88, m$1(_Ga, "MultiMap")), _Ga), yr = (_Ha = class {
  get size() {
    return this.map.size;
  }
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), this.inverse = /* @__PURE__ */ new Map(), e) for (let [t, n2] of e) this.set(t, n2);
  }
  clear() {
    this.map.clear(), this.inverse.clear();
  }
  set(e, t) {
    return this.map.set(e, t), this.inverse.set(t, e), this;
  }
  get(e) {
    return this.map.get(e);
  }
  getKey(e) {
    return this.inverse.get(e);
  }
  delete(e) {
    let t = /* @__PURE__ */ this.map.get(e);
    return t !== void 0 ? (this.map.delete(e), this.inverse.delete(t), true) : false;
  }
}, __89 = new WeakMap(), __privateAdd(_Ha, __89, m$1(_Ha, "BiMap")), _Ha);
var ei = (_Ia = class {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider;
  }
  async computeExports(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w.CancellationToken.None;
    return this.computeExportsForNode(e.parseResult.value, e, void 0, t);
  }
  async computeExportsForNode(e, t) {
    let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : mn, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : w.CancellationToken.None;
    let s = [];
    this.exportNode(e, s, t);
    for (let o2 of n2(e)) await Te(i), this.exportNode(o2, s, t);
    return s;
  }
  exportNode(e, t, n2) {
    let i = /* @__PURE__ */ this.nameProvider.getName(e);
    i && t.push(/* @__PURE__ */ this.descriptions.createDescription(e, i, n2));
  }
  async computeLocalScopes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w.CancellationToken.None;
    let n2 = e.parseResult.value, i = new dt();
    for (let s of ot(n2)) await Te(t), this.processNode(s, e, i);
    return i;
  }
  processNode(e, t, n2) {
    let i = e.$container;
    if (i) {
      let s = /* @__PURE__ */ this.nameProvider.getName(e);
      s && n2.add(i, /* @__PURE__ */ this.descriptions.createDescription(e, s, t));
    }
  }
}, __90 = new WeakMap(), __privateAdd(_Ia, __90, m$1(_Ia, "DefaultScopeComputation")), _Ia);
var tn = (_Ja = class {
  constructor(e, t, n2) {
    var i;
    this.elements = e, this.outerScope = t, this.caseInsensitive = (i = n2 == null ? void 0 : n2.caseInsensitive) !== null && i !== void 0 ? i : false;
  }
  getAllElements() {
    return this.outerScope ? this.elements.concat(/* @__PURE__ */ this.outerScope.getAllElements()) : this.elements;
  }
  getElement(e) {
    let t = this.caseInsensitive ? this.elements.find((n2) => n2.name.toLowerCase() === e.toLowerCase()) : this.elements.find((n2) => n2.name === e);
    if (t) return t;
    if (this.outerScope) return this.outerScope.getElement(e);
  }
}, __91 = new WeakMap(), __privateAdd(_Ja, __91, m$1(_Ja, "StreamScope")), _Ja), ti = (_Ka = class {
  constructor(e, t, n2) {
    var i;
    this.elements = /* @__PURE__ */ new Map(), this.caseInsensitive = (i = n2 == null ? void 0 : n2.caseInsensitive) !== null && i !== void 0 ? i : false;
    for (let s of e) {
      let o2 = this.caseInsensitive ? s.name.toLowerCase() : s.name;
      this.elements.set(o2, s);
    }
    this.outerScope = t;
  }
  getElement(e) {
    let t = this.caseInsensitive ? e.toLowerCase() : e, n2 = /* @__PURE__ */ this.elements.get(t);
    if (n2) return n2;
    if (this.outerScope) return this.outerScope.getElement(e);
  }
  getAllElements() {
    let e = /* @__PURE__ */ K(/* @__PURE__ */ this.elements.values());
    return this.outerScope && (e = /* @__PURE__ */ e.concat(/* @__PURE__ */ this.outerScope.getAllElements())), e;
  }
}, __92 = new WeakMap(), __privateAdd(_Ka, __92, m$1(_Ka, "MapScope")), _Ka), Cm = {
  getElement() {
  },
  getAllElements() {
    return cn;
  }
};
var rn = (_La = class {
  constructor() {
    this.toDispose = [], this.isDisposed = false;
  }
  onDispose(e) {
    this.toDispose.push(e);
  }
  dispose() {
    this.throwIfDisposed(), this.clear(), this.isDisposed = true, this.toDispose.forEach((e) => e.dispose());
  }
  throwIfDisposed() {
    if (this.isDisposed) throw new Error("This cache has already been disposed");
  }
}, __93 = new WeakMap(), __privateAdd(_La, __93, m$1(_La, "DisposableCache")), _La), ri = (_Ma = class extends rn {
  constructor() {
    super(...arguments), this.cache = /* @__PURE__ */ new Map();
  }
  has(e) {
    return this.throwIfDisposed(), this.cache.has(e);
  }
  set(e, t) {
    this.throwIfDisposed(), this.cache.set(e, t);
  }
  get(e, t) {
    if (this.throwIfDisposed(), this.cache.has(e)) return this.cache.get(e);
    if (t) {
      let n2 = /* @__PURE__ */ t();
      return this.cache.set(e, n2), n2;
    } else return;
  }
  delete(e) {
    return this.throwIfDisposed(), this.cache.delete(e);
  }
  clear() {
    this.throwIfDisposed(), this.cache.clear();
  }
}, __94 = new WeakMap(), __privateAdd(_Ma, __94, m$1(_Ma, "SimpleCache")), _Ma), Tr = (_Na = class extends rn {
  constructor(e) {
    super(), this.cache = /* @__PURE__ */ new Map(), this.converter = e ?? ((t) => t);
  }
  has(e, t) {
    return this.throwIfDisposed(), this.cacheForContext(e).has(t);
  }
  set(e, t, n2) {
    this.throwIfDisposed(), this.cacheForContext(e).set(t, n2);
  }
  get(e, t, n2) {
    this.throwIfDisposed();
    let i = /* @__PURE__ */ this.cacheForContext(e);
    if (i.has(t)) return i.get(t);
    if (n2) {
      let s = /* @__PURE__ */ n2();
      return i.set(t, s), s;
    } else return;
  }
  delete(e, t) {
    return this.throwIfDisposed(), this.cacheForContext(e).delete(t);
  }
  clear(e) {
    if (this.throwIfDisposed(), e) {
      let t = /* @__PURE__ */ this.converter(e);
      this.cache.delete(t);
    } else this.cache.clear();
  }
  cacheForContext(e) {
    let t = /* @__PURE__ */ this.converter(e), n2 = /* @__PURE__ */ this.cache.get(t);
    return n2 || (n2 = /* @__PURE__ */ new Map(), this.cache.set(t, n2)), n2;
  }
}, __95 = new WeakMap(), __privateAdd(_Na, __95, m$1(_Na, "ContextCache")), _Na), Bs = (_Oa = class extends Tr {
  constructor(e) {
    super((t) => t.toString()), this.onDispose(/* @__PURE__ */ e.workspace.DocumentBuilder.onUpdate((t, n2) => {
      let i = /* @__PURE__ */ t.concat(n2);
      for (let s of i) this.clear(s);
    }));
  }
}, __96 = new WeakMap(), __privateAdd(_Oa, __96, m$1(_Oa, "DocumentCache")), _Oa), nn = (_Pa = class extends ri {
  constructor(e) {
    super(), this.onDispose(/* @__PURE__ */ e.workspace.DocumentBuilder.onUpdate(() => {
      this.clear();
    }));
  }
}, __97 = new WeakMap(), __privateAdd(_Pa, __97, m$1(_Pa, "WorkspaceCache")), _Pa);
var ni = (_Qa = class {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider, this.indexManager = e.shared.workspace.IndexManager, this.globalScopeCache = new nn(e.shared);
  }
  getScope(e) {
    let t = [], n2 = /* @__PURE__ */ this.reflection.getReferenceType(e), i = ge(e.container).precomputedScopes;
    if (i) {
      let o2 = e.container;
      do {
        let l = /* @__PURE__ */ i.get(o2);
        l.length > 0 && t.push(/* @__PURE__ */ K(l).filter((c) => this.reflection.isSubtype(c.type, n2))), o2 = o2.$container;
      } while (o2);
    }
    let s = /* @__PURE__ */ this.getGlobalScope(n2, e);
    for (let o2 = t.length - 1; o2 >= 0; o2--) s = /* @__PURE__ */ this.createScope(t[o2], s);
    return s;
  }
  createScope(e, t, n2) {
    return new tn(K(e), t, n2);
  }
  createScopeForNodes(e, t, n2) {
    let i = /* @__PURE__ */ K(e).map((s) => {
      let o2 = /* @__PURE__ */ this.nameProvider.getName(s);
      if (o2) return this.descriptions.createDescription(s, o2);
    }).nonNullable();
    return new tn(i, t, n2);
  }
  getGlobalScope(e, t) {
    return this.globalScopeCache.get(e, () => new ti(this.indexManager.allElements(e)));
  }
}, __98 = new WeakMap(), __privateAdd(_Qa, __98, m$1(_Qa, "DefaultScopeProvider")), _Qa);
function Fl(r) {
  return typeof r.$comment == "string";
}
m$1(Fl, "isAstNodeWithComment");
function Td(r) {
  return typeof r == "object" && !!r && ("$ref" in r || "$error" in r);
}
m$1(Td, "isIntermediateReference");
var ii = (_Ra = class {
  constructor(e) {
    this.ignoreProperties = /* @__PURE__ */ new Set([
      "$container",
      "$containerProperty",
      "$containerIndex",
      "$document",
      "$cstNode"
    ]), this.langiumDocuments = e.shared.workspace.LangiumDocuments, this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider, this.commentProvider = e.documentation.CommentProvider;
  }
  serialize(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let n2 = t == null ? void 0 : t.replacer, i = /* @__PURE__ */ m$1((o2, l) => this.replacer(o2, l, t), "defaultReplacer"), s = n2 ? (o2, l) => n2(o2, l, i) : i;
    try {
      return this.currentDocument = /* @__PURE__ */ ge(e), JSON.stringify(e, s, t == null ? void 0 : t.space);
    } finally {
      this.currentDocument = void 0;
    }
  }
  deserialize(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let n2 = /* @__PURE__ */ JSON.parse(e);
    return this.linkNode(n2, n2, t), n2;
  }
  replacer(e, t, param) {
    let { refText: n2, sourceText: i, textRegions: s, comments: o2, uriConverter: l } = param;
    var c, u, f, d;
    if (!this.ignoreProperties.has(e)) if (Ae(t)) {
      let p2 = t.ref, h2 = n2 ? t.$refText : void 0;
      if (p2) {
        let g = /* @__PURE__ */ ge(p2), T2 = "";
        this.currentDocument && this.currentDocument !== g && (l ? T2 = /* @__PURE__ */ l(g.uri, t) : T2 = /* @__PURE__ */ g.uri.toString());
        let k = /* @__PURE__ */ this.astNodeLocator.getAstNodePath(p2);
        return {
          $ref: `${T2}#${k}`,
          $refText: h2
        };
      } else return {
        $error: (u = (c = t.error) === null || c === void 0 ? void 0 : c.message) !== null && u !== void 0 ? u : "Could not resolve reference",
        $refText: h2
      };
    } else if (ae(t)) {
      let p2;
      if (s && (p2 = /* @__PURE__ */ this.addAstNodeRegionWithAssignmentsTo(/* @__PURE__ */ Object.assign({}, t)), (!e || t.$document) && (p2 == null ? void 0 : p2.$textRegion) && (p2.$textRegion.documentURI = (f = this.currentDocument) === null || f === void 0 ? void 0 : f.uri.toString())), i && !e && (p2 ?? (p2 = /* @__PURE__ */ Object.assign({}, t)), p2.$sourceText = (d = t.$cstNode) === null || d === void 0 ? void 0 : d.text), o2) {
        p2 ?? (p2 = /* @__PURE__ */ Object.assign({}, t));
        let h2 = /* @__PURE__ */ this.commentProvider.getComment(t);
        h2 && (p2.$comment = /* @__PURE__ */ h2.replace(/\r/g, ""));
      }
      return p2 ?? t;
    } else return t;
  }
  addAstNodeRegionWithAssignmentsTo(e) {
    let t = /* @__PURE__ */ m$1((n2) => ({
      offset: n2.offset,
      end: n2.end,
      length: n2.length,
      range: n2.range
    }), "createDocumentSegment");
    if (e.$cstNode) {
      let n2 = e.$textRegion = /* @__PURE__ */ t(e.$cstNode), i = n2.assignments = {};
      return Object.keys(e).filter((s) => !s.startsWith("$")).forEach((s) => {
        let o2 = /* @__PURE__ */ xo(e.$cstNode, s).map(t);
        o2.length !== 0 && (i[s] = o2);
      }), e;
    }
  }
  linkNode(e, t, n2, i, s, o2) {
    for (let [c, u] of Object.entries(e)) if (Array.isArray(u)) for (let f = 0; f < u.length; f++) {
      let d = u[f];
      Td(d) ? u[f] = /* @__PURE__ */ this.reviveReference(e, c, t, d, n2) : ae(d) && this.linkNode(d, t, n2, e, c, f);
    }
    else Td(u) ? e[c] = /* @__PURE__ */ this.reviveReference(e, c, t, u, n2) : ae(u) && this.linkNode(u, t, n2, e, c);
    let l = e;
    l.$container = i, l.$containerProperty = s, l.$containerIndex = o2;
  }
  reviveReference(e, t, n2, i, s) {
    let o2 = i.$refText, l = i.$error;
    if (i.$ref) {
      let c = /* @__PURE__ */ this.getRefNode(n2, i.$ref, s.uriConverter);
      if (ae(c)) return o2 || (o2 = /* @__PURE__ */ this.nameProvider.getName(c)), {
        $refText: o2 ?? "",
        ref: c
      };
      l = c;
    }
    if (l) {
      let c = {
        $refText: o2 ?? ""
      };
      return c.error = {
        container: e,
        property: t,
        message: l,
        reference: c
      }, c;
    } else return;
  }
  getRefNode(e, t, n2) {
    try {
      let i = /* @__PURE__ */ t.indexOf("#");
      if (i === 0) {
        let c = /* @__PURE__ */ this.astNodeLocator.getAstNode(e, /* @__PURE__ */ t.substring(1));
        return c || "Could not resolve path: " + t;
      }
      if (i < 0) {
        let c = n2 ? n2(t) : We.parse(t), u = /* @__PURE__ */ this.langiumDocuments.getDocument(c);
        return u ? u.parseResult.value : "Could not find document for URI: " + t;
      }
      let s = n2 ? n2(/* @__PURE__ */ t.substring(0, i)) : We.parse(/* @__PURE__ */ t.substring(0, i)), o2 = /* @__PURE__ */ this.langiumDocuments.getDocument(s);
      if (!o2) return "Could not find document for URI: " + t;
      if (i === t.length - 1) return o2.parseResult.value;
      let l = /* @__PURE__ */ this.astNodeLocator.getAstNode(o2.parseResult.value, /* @__PURE__ */ t.substring(i + 1));
      return l || "Could not resolve URI: " + t;
    } catch (i) {
      return String(i);
    }
  }
}, __99 = new WeakMap(), __privateAdd(_Ra, __99, m$1(_Ra, "DefaultJsonSerializer")), _Ra);
var si = (_Sa = class {
  register(e) {
    if (!this.singleton && !this.map) {
      this.singleton = e;
      return;
    }
    if (!this.map && (this.map = {}, this.singleton)) {
      for (let t of this.singleton.LanguageMetaData.fileExtensions) this.map[t] = this.singleton;
      this.singleton = void 0;
    }
    for (let t of e.LanguageMetaData.fileExtensions) this.map[t] !== void 0 && this.map[t] !== e && console.warn(`The file extension ${t} is used by multiple languages. It is now assigned to '${e.LanguageMetaData.languageId}'.`), this.map[t] = e;
  }
  getServices(e) {
    if (this.singleton !== void 0) return this.singleton;
    if (this.map === void 0) throw new Error("The service registry is empty. Use `register` to register the services of a language.");
    let t = /* @__PURE__ */ Ge.extname(e), n2 = this.map[t];
    if (!n2) throw new Error(`The service registry contains no services for the extension '${t}'.`);
    return n2;
  }
  get all() {
    return this.singleton !== void 0 ? [
      this.singleton
    ] : this.map !== void 0 ? Object.values(this.map) : [];
  }
}, __100 = new WeakMap(), __privateAdd(_Sa, __100, m$1(_Sa, "DefaultServiceRegistry")), _Sa);
function Ws(r) {
  return {
    code: r
  };
}
m$1(Ws, "diagnosticData");
var sn;
(function(r) {
  r.all = [
    "fast",
    "slow",
    "built-in"
  ];
})(sn || (sn = {}));
var ai = (_Ta = class {
  constructor(e) {
    this.entries = new dt(), this.reflection = e.shared.AstReflection;
  }
  register(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this, n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "fast";
    if (n2 === "built-in") throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");
    for (let [i, s] of Object.entries(e)) {
      let o2 = s;
      if (Array.isArray(o2)) for (let l of o2) {
        let c = {
          check: /* @__PURE__ */ this.wrapValidationException(l, t),
          category: n2
        };
        this.addEntry(i, c);
      }
      else if (typeof o2 == "function") {
        let l = {
          check: /* @__PURE__ */ this.wrapValidationException(o2, t),
          category: n2
        };
        this.addEntry(i, l);
      }
    }
  }
  wrapValidationException(e, t) {
    return async (n2, i, s) => {
      try {
        await e.call(t, n2, i, s);
      } catch (o2) {
        if (Gt(o2)) throw o2;
        console.error("An error occurred during validation:", o2);
        let l = o2 instanceof Error ? o2.message : String(o2);
        o2 instanceof Error && o2.stack && console.error(o2.stack), i("error", "An error occurred during validation: " + l, {
          node: n2
        });
      }
    };
  }
  addEntry(e, t) {
    if (e === "AstNode") {
      this.entries.add("AstNode", t);
      return;
    }
    for (let n2 of this.reflection.getAllSubTypes(e)) this.entries.add(n2, t);
  }
  getChecks(e, t) {
    let n2 = /* @__PURE__ */ K(/* @__PURE__ */ this.entries.get(e)).concat(/* @__PURE__ */ this.entries.get("AstNode"));
    return t && (n2 = /* @__PURE__ */ n2.filter((i) => t.includes(i.category))), n2.map((i) => i.check);
  }
}, __101 = new WeakMap(), __privateAdd(_Ta, __101, m$1(_Ta, "ValidationRegistry")), _Ta);
var oi = (_Ua = class {
  constructor(e) {
    this.validationRegistry = e.validation.ValidationRegistry, this.metadata = e.LanguageMetaData;
  }
  async validateDocument(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : w.CancellationToken.None;
    let i = e.parseResult, s = [];
    if (await Te(n2), (!t.categories || t.categories.includes("built-in")) && (this.processLexingErrors(i, s, t), t.stopAfterLexingErrors && s.some((o2) => {
      var l;
      return ((l = o2.data) === null || l === void 0 ? void 0 : l.code) === wt.LexingError;
    }) || (this.processParsingErrors(i, s, t), t.stopAfterParsingErrors && s.some((o2) => {
      var l;
      return ((l = o2.data) === null || l === void 0 ? void 0 : l.code) === wt.ParsingError;
    })) || (this.processLinkingErrors(e, s, t), t.stopAfterLinkingErrors && s.some((o2) => {
      var l;
      return ((l = o2.data) === null || l === void 0 ? void 0 : l.code) === wt.LinkingError;
    })))) return s;
    try {
      s.push(...await this.validateAst(i.value, t, n2));
    } catch (o2) {
      if (Gt(o2)) throw o2;
      console.error("An error occurred during validation:", o2);
    }
    return await Te(n2), s;
  }
  processLexingErrors(e, t, n2) {
    for (let i of e.lexerErrors) {
      let s = {
        severity: /* @__PURE__ */ js("error"),
        range: {
          start: {
            line: i.line - 1,
            character: i.column - 1
          },
          end: {
            line: i.line - 1,
            character: i.column + i.length - 1
          }
        },
        message: i.message,
        data: /* @__PURE__ */ Ws(wt.LexingError),
        source: /* @__PURE__ */ this.getSource()
      };
      t.push(s);
    }
  }
  processParsingErrors(e, t, n2) {
    for (let i of e.parserErrors) {
      let s;
      if (isNaN(i.token.startOffset)) {
        if ("previousToken" in i) {
          let o2 = i.previousToken;
          if (isNaN(o2.startOffset)) {
            let l = {
              line: 0,
              character: 0
            };
            s = {
              start: l,
              end: l
            };
          } else {
            let l = {
              line: o2.endLine - 1,
              character: o2.endColumn
            };
            s = {
              start: l,
              end: l
            };
          }
        }
      } else s = /* @__PURE__ */ vr(i.token);
      if (s) {
        let o2 = {
          severity: /* @__PURE__ */ js("error"),
          range: s,
          message: i.message,
          data: /* @__PURE__ */ Ws(wt.ParsingError),
          source: /* @__PURE__ */ this.getSource()
        };
        t.push(o2);
      }
    }
  }
  processLinkingErrors(e, t, n2) {
    for (let i of e.references) {
      let s = i.error;
      if (s) {
        let o2 = {
          node: s.container,
          property: s.property,
          index: s.index,
          data: {
            code: wt.LinkingError,
            containerType: s.container.$type,
            property: s.property,
            refText: s.reference.$refText
          }
        };
        t.push(/* @__PURE__ */ this.toDiagnostic("error", s.message, o2));
      }
    }
  }
  async validateAst(e, t) {
    let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : w.CancellationToken.None;
    let i = [], s = /* @__PURE__ */ m$1((o2, l, c) => {
      i.push(/* @__PURE__ */ this.toDiagnostic(o2, l, c));
    }, "acceptor");
    return await Promise.all(/* @__PURE__ */ Qe(e).map(async (o2) => {
      await Te(n2);
      let l = /* @__PURE__ */ this.validationRegistry.getChecks(o2.$type, t.categories);
      for (let c of l) await c(o2, s, n2);
    })), i;
  }
  toDiagnostic(e, t, n2) {
    return {
      message: t,
      range: /* @__PURE__ */ xd(n2),
      severity: /* @__PURE__ */ js(e),
      code: n2.code,
      codeDescription: n2.codeDescription,
      tags: n2.tags,
      relatedInformation: n2.relatedInformation,
      data: n2.data,
      source: /* @__PURE__ */ this.getSource()
    };
  }
  getSource() {
    return this.metadata.languageId;
  }
}, __102 = new WeakMap(), __privateAdd(_Ua, __102, m$1(_Ua, "DefaultDocumentValidator")), _Ua);
function xd(r) {
  if (r.range) return r.range;
  let e;
  return typeof r.property == "string" ? e = /* @__PURE__ */ Rn(r.node.$cstNode, r.property, r.index) : typeof r.keyword == "string" && (e = /* @__PURE__ */ Eo(r.node.$cstNode, r.keyword, r.index)), e ?? (e = r.node.$cstNode), e ? e.range : {
    start: {
      line: 0,
      character: 0
    },
    end: {
      line: 0,
      character: 0
    }
  };
}
m$1(xd, "getDiagnosticRange");
function js(r) {
  switch (r) {
    case "error":
      return 1;
    case "warning":
      return 2;
    case "info":
      return 3;
    case "hint":
      return 4;
    default:
      throw new Error("Invalid diagnostic severity: " + r);
  }
}
m$1(js, "toDiagnosticSeverity");
var wt;
(function(r) {
  r.LexingError = "lexing-error", r.ParsingError = "parsing-error", r.LinkingError = "linking-error";
})(wt || (wt = {}));
var li = (_Va = class {
  constructor(e) {
    this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider;
  }
  createDescription(e, t) {
    let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ge(e);
    t ?? (t = /* @__PURE__ */ this.nameProvider.getName(e));
    let i = /* @__PURE__ */ this.astNodeLocator.getAstNodePath(e);
    if (!t) throw new Error(`Node at path ${i} has no name.`);
    let s, o2 = /* @__PURE__ */ m$1(() => {
      var l;
      return s ?? (s = /* @__PURE__ */ Yt((l = /* @__PURE__ */ this.nameProvider.getNameNode(e)) !== null && l !== void 0 ? l : e.$cstNode));
    }, "nameSegmentGetter");
    return {
      node: e,
      name: t,
      get nameSegment() {
        return o2();
      },
      selectionSegment: /* @__PURE__ */ Yt(e.$cstNode),
      type: e.$type,
      documentUri: n2.uri,
      path: i
    };
  }
}, __103 = new WeakMap(), __privateAdd(_Va, __103, m$1(_Va, "DefaultAstNodeDescriptionProvider")), _Va), ci = (_Wa = class {
  constructor(e) {
    this.nodeLocator = e.workspace.AstNodeLocator;
  }
  async createDescriptions(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w.CancellationToken.None;
    let n2 = [], i = e.parseResult.value;
    for (let s of Qe(i)) await Te(t), Ir(s).filter((o2) => !qt(o2)).forEach((o2) => {
      let l = /* @__PURE__ */ this.createDescription(o2);
      l && n2.push(l);
    });
    return n2;
  }
  createDescription(e) {
    let t = e.reference.$nodeDescription, n2 = e.reference.$refNode;
    if (!t || !n2) return;
    let i = ge(e.container).uri;
    return {
      sourceUri: i,
      sourcePath: /* @__PURE__ */ this.nodeLocator.getAstNodePath(e.container),
      targetUri: t.documentUri,
      targetPath: t.path,
      segment: /* @__PURE__ */ Yt(n2),
      local: /* @__PURE__ */ Ge.equals(t.documentUri, i)
    };
  }
}, __104 = new WeakMap(), __privateAdd(_Wa, __104, m$1(_Wa, "DefaultReferenceDescriptionProvider")), _Wa);
var ui = (_Xa = class {
  constructor() {
    this.segmentSeparator = "/", this.indexSeparator = "@";
  }
  getAstNodePath(e) {
    if (e.$container) {
      let t = /* @__PURE__ */ this.getAstNodePath(e.$container), n2 = /* @__PURE__ */ this.getPathSegment(e);
      return t + this.segmentSeparator + n2;
    }
    return "";
  }
  getPathSegment(param) {
    let { $containerProperty: e, $containerIndex: t } = param;
    if (!e) throw new Error("Missing '$containerProperty' in AST node.");
    return t !== void 0 ? e + this.indexSeparator + t : e;
  }
  getAstNode(e, t) {
    return t.split(this.segmentSeparator).reduce((i, s) => {
      if (!i || s.length === 0) return i;
      let o2 = /* @__PURE__ */ s.indexOf(this.indexSeparator);
      if (o2 > 0) {
        let l = /* @__PURE__ */ s.substring(0, o2), c = /* @__PURE__ */ parseInt(/* @__PURE__ */ s.substring(o2 + 1)), u = i[l];
        return u == null ? void 0 : u[c];
      }
      return i[s];
    }, e);
  }
}, __105 = new WeakMap(), __privateAdd(_Xa, __105, m$1(_Xa, "DefaultAstNodeLocator")), _Xa);
var fi = (_Ya = class {
  constructor(e) {
    this._ready = new Ue(), this.settings = {}, this.workspaceConfig = false, this.serviceRegistry = e.ServiceRegistry;
  }
  get ready() {
    return this._ready.promise;
  }
  initialize(e) {
    var t, n2;
    this.workspaceConfig = (n2 = (t = e.capabilities.workspace) === null || t === void 0 ? void 0 : t.configuration) !== null && n2 !== void 0 ? n2 : false;
  }
  async initialized(e) {
    if (this.workspaceConfig) {
      if (e.register) {
        let t = this.serviceRegistry.all;
        e.register({
          section: /* @__PURE__ */ t.map((n2) => this.toSectionName(n2.LanguageMetaData.languageId))
        });
      }
      if (e.fetchConfiguration) {
        let t = /* @__PURE__ */ this.serviceRegistry.all.map((i) => ({
          section: /* @__PURE__ */ this.toSectionName(i.LanguageMetaData.languageId)
        })), n2 = await e.fetchConfiguration(t);
        t.forEach((i, s) => {
          this.updateSectionConfiguration(i.section, n2[s]);
        });
      }
    }
    this._ready.resolve();
  }
  updateConfiguration(e) {
    e.settings && Object.keys(e.settings).forEach((t) => {
      this.updateSectionConfiguration(t, e.settings[t]);
    });
  }
  updateSectionConfiguration(e, t) {
    this.settings[e] = t;
  }
  async getConfiguration(e, t) {
    await this.ready;
    let n2 = /* @__PURE__ */ this.toSectionName(e);
    if (this.settings[n2]) return this.settings[n2][t];
  }
  toSectionName(e) {
    return `${e}`;
  }
}, __106 = new WeakMap(), __privateAdd(_Ya, __106, m$1(_Ya, "DefaultConfigurationProvider")), _Ya);
var xr;
(function(r) {
  function e(t) {
    return {
      dispose: /* @__PURE__ */ m$1(async () => await t(), "dispose")
    };
  }
  m$1(e, "create"), r.create = e;
})(xr || (xr = {}));
var di = (_Za = class {
  constructor(e) {
    this.updateBuildOptions = {
      validation: {
        categories: [
          "built-in",
          "fast"
        ]
      }
    }, this.updateListeners = [], this.buildPhaseListeners = new dt(), this.buildState = /* @__PURE__ */ new Map(), this.documentBuildWaiters = /* @__PURE__ */ new Map(), this.currentState = Y.Changed, this.langiumDocuments = e.workspace.LangiumDocuments, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.indexManager = e.workspace.IndexManager, this.serviceRegistry = e.ServiceRegistry;
  }
  async build(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : w.CancellationToken.None;
    var i, s;
    for (let o2 of e) {
      let l = /* @__PURE__ */ o2.uri.toString();
      if (o2.state === Y.Validated) {
        if (typeof t.validation == "boolean" && t.validation) o2.state = Y.IndexedReferences, o2.diagnostics = void 0, this.buildState.delete(l);
        else if (typeof t.validation == "object") {
          let c = /* @__PURE__ */ this.buildState.get(l), u = (i = c == null ? void 0 : c.result) === null || i === void 0 ? void 0 : i.validationChecks;
          if (u) {
            let d = /* @__PURE__ */ ((s = t.validation.categories) !== null && s !== void 0 ? s : sn.all).filter((p2) => !u.includes(p2));
            d.length > 0 && (this.buildState.set(l, {
              completed: false,
              options: {
                validation: /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, t.validation), {
                  categories: d
                })
              },
              result: c.result
            }), o2.state = Y.IndexedReferences);
          }
        }
      } else this.buildState.delete(l);
    }
    this.currentState = Y.Changed, await this.emitUpdate(/* @__PURE__ */ e.map((o2) => o2.uri), []), await this.buildDocuments(e, t, n2);
  }
  async update(e, t) {
    let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : w.CancellationToken.None;
    this.currentState = Y.Changed;
    for (let o2 of t) this.langiumDocuments.deleteDocument(o2), this.buildState.delete(/* @__PURE__ */ o2.toString()), this.indexManager.remove(o2);
    for (let o2 of e) {
      if (!this.langiumDocuments.invalidateDocument(o2)) {
        let c = /* @__PURE__ */ this.langiumDocumentFactory.fromModel({
          $type: "INVALID"
        }, o2);
        c.state = Y.Changed, this.langiumDocuments.addDocument(c);
      }
      this.buildState.delete(/* @__PURE__ */ o2.toString());
    }
    let i = /* @__PURE__ */ K(e).concat(t).map((o2) => o2.toString()).toSet();
    this.langiumDocuments.all.filter((o2) => !i.has(/* @__PURE__ */ o2.uri.toString()) && this.shouldRelink(o2, i)).forEach((o2) => {
      this.serviceRegistry.getServices(o2.uri).references.Linker.unlink(o2), o2.state = /* @__PURE__ */ Math.min(o2.state, Y.ComputedScopes), o2.diagnostics = void 0;
    }), await this.emitUpdate(e, t), await Te(n2);
    let s = /* @__PURE__ */ this.langiumDocuments.all.filter((o2) => {
      var l;
      return o2.state < Y.Linked || !(!((l = /* @__PURE__ */ this.buildState.get(/* @__PURE__ */ o2.uri.toString())) === null || l === void 0) && l.completed);
    }).toArray();
    await this.buildDocuments(s, this.updateBuildOptions, n2);
  }
  async emitUpdate(e, t) {
    await Promise.all(/* @__PURE__ */ this.updateListeners.map((n2) => n2(e, t)));
  }
  shouldRelink(e, t) {
    return e.references.some((n2) => n2.error !== void 0) ? true : this.indexManager.isAffected(e, t);
  }
  onUpdate(e) {
    return this.updateListeners.push(e), xr.create(() => {
      let t = /* @__PURE__ */ this.updateListeners.indexOf(e);
      t >= 0 && this.updateListeners.splice(t, 1);
    });
  }
  async buildDocuments(e, t, n2) {
    this.prepareBuild(e, t), await this.runCancelable(e, Y.Parsed, n2, (s) => this.langiumDocumentFactory.update(s, n2)), await this.runCancelable(e, Y.IndexedContent, n2, (s) => this.indexManager.updateContent(s, n2)), await this.runCancelable(e, Y.ComputedScopes, n2, async (s) => {
      let o2 = this.serviceRegistry.getServices(s.uri).references.ScopeComputation;
      s.precomputedScopes = await o2.computeLocalScopes(s, n2);
    }), await this.runCancelable(e, Y.Linked, n2, (s) => this.serviceRegistry.getServices(s.uri).references.Linker.link(s, n2)), await this.runCancelable(e, Y.IndexedReferences, n2, (s) => this.indexManager.updateReferences(s, n2));
    let i = /* @__PURE__ */ e.filter((s) => this.shouldValidate(s));
    await this.runCancelable(i, Y.Validated, n2, (s) => this.validate(s, n2));
    for (let s of e) {
      let o2 = /* @__PURE__ */ this.buildState.get(/* @__PURE__ */ s.uri.toString());
      o2 && (o2.completed = true);
    }
  }
  prepareBuild(e, t) {
    for (let n2 of e) {
      let i = /* @__PURE__ */ n2.uri.toString(), s = /* @__PURE__ */ this.buildState.get(i);
      (!s || s.completed) && this.buildState.set(i, {
        completed: false,
        options: t,
        result: s == null ? void 0 : s.result
      });
    }
  }
  async runCancelable(e, t, n2, i) {
    let s = /* @__PURE__ */ e.filter((o2) => o2.state < t);
    for (let o2 of s) await Te(n2), await i(o2), o2.state = t;
    await this.notifyBuildPhase(s, t, n2), this.currentState = t;
  }
  onBuildPhase(e, t) {
    return this.buildPhaseListeners.add(e, t), xr.create(() => {
      this.buildPhaseListeners.delete(e, t);
    });
  }
  waitUntil(e, t, n2) {
    let i;
    if (t && "path" in t ? i = t : n2 = t, n2 ?? (n2 = w.CancellationToken.None), i) {
      let s = /* @__PURE__ */ this.langiumDocuments.getDocument(i);
      if (s && s.state > e) return Promise.resolve(i);
    }
    return this.currentState >= e ? Promise.resolve(void 0) : n2.isCancellationRequested ? Promise.reject(ft) : new Promise((s, o2) => {
      let l = this.onBuildPhase(e, () => {
        if (l.dispose(), c.dispose(), i) {
          let u = /* @__PURE__ */ this.langiumDocuments.getDocument(i);
          s(u == null ? void 0 : u.uri);
        } else s(void 0);
      }), c = n2.onCancellationRequested(() => {
        l.dispose(), c.dispose(), o2(ft);
      });
    });
  }
  async notifyBuildPhase(e, t, n2) {
    if (e.length === 0) return;
    let i = /* @__PURE__ */ this.buildPhaseListeners.get(t);
    for (let s of i) await Te(n2), await s(e, n2);
  }
  shouldValidate(e) {
    return !!this.getBuildOptions(e).validation;
  }
  async validate(e, t) {
    var n2, i;
    let s = this.serviceRegistry.getServices(e.uri).validation.DocumentValidator, o2 = this.getBuildOptions(e).validation, l = typeof o2 == "object" ? o2 : void 0, c = await s.validateDocument(e, l, t);
    e.diagnostics ? e.diagnostics.push(...c) : e.diagnostics = c;
    let u = /* @__PURE__ */ this.buildState.get(/* @__PURE__ */ e.uri.toString());
    if (u) {
      (n2 = u.result) !== null && n2 !== void 0 || (u.result = {});
      let f = (i = l == null ? void 0 : l.categories) !== null && i !== void 0 ? i : sn.all;
      u.result.validationChecks ? u.result.validationChecks.push(...f) : u.result.validationChecks = [
        ...f
      ];
    }
  }
  getBuildOptions(e) {
    var t, n2;
    return (n2 = (t = /* @__PURE__ */ this.buildState.get(/* @__PURE__ */ e.uri.toString())) === null || t === void 0 ? void 0 : t.options) !== null && n2 !== void 0 ? n2 : {};
  }
}, __107 = new WeakMap(), __privateAdd(_Za, __107, m$1(_Za, "DefaultDocumentBuilder")), _Za);
var hi = (__a = class {
  constructor(e) {
    this.symbolIndex = /* @__PURE__ */ new Map(), this.symbolByTypeIndex = new Tr(), this.referenceIndex = /* @__PURE__ */ new Map(), this.documents = e.workspace.LangiumDocuments, this.serviceRegistry = e.ServiceRegistry, this.astReflection = e.AstReflection;
  }
  findAllReferences(e, t) {
    let n2 = ge(e).uri, i = [];
    return this.referenceIndex.forEach((s) => {
      s.forEach((o2) => {
        Ge.equals(o2.targetUri, n2) && o2.targetPath === t && i.push(o2);
      });
    }), K(i);
  }
  allElements(e, t) {
    let n2 = /* @__PURE__ */ K(/* @__PURE__ */ this.symbolIndex.keys());
    return t && (n2 = /* @__PURE__ */ n2.filter((i) => !t || t.has(i))), n2.map((i) => this.getFileDescriptions(i, e)).flat();
  }
  getFileDescriptions(e, t) {
    var n2;
    return t ? this.symbolByTypeIndex.get(e, t, () => {
      var s;
      return ((s = /* @__PURE__ */ this.symbolIndex.get(e)) !== null && s !== void 0 ? s : []).filter((l) => this.astReflection.isSubtype(l.type, t));
    }) : (n2 = /* @__PURE__ */ this.symbolIndex.get(e)) !== null && n2 !== void 0 ? n2 : [];
  }
  remove(e) {
    let t = /* @__PURE__ */ e.toString();
    this.symbolIndex.delete(t), this.symbolByTypeIndex.clear(t), this.referenceIndex.delete(t);
  }
  async updateContent(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w.CancellationToken.None;
    let i = await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e, t), s = /* @__PURE__ */ e.uri.toString();
    this.symbolIndex.set(s, i), this.symbolByTypeIndex.clear(s);
  }
  async updateReferences(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w.CancellationToken.None;
    let i = await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e, t);
    this.referenceIndex.set(/* @__PURE__ */ e.uri.toString(), i);
  }
  isAffected(e, t) {
    let n2 = /* @__PURE__ */ this.referenceIndex.get(/* @__PURE__ */ e.uri.toString());
    return n2 ? n2.some((i) => !i.local && t.has(/* @__PURE__ */ i.targetUri.toString())) : false;
  }
}, __108 = new WeakMap(), __privateAdd(__a, __108, m$1(__a, "DefaultIndexManager")), __a);
var pi = (_$a = class {
  constructor(e) {
    this.initialBuildOptions = {}, this._ready = new Ue(), this.serviceRegistry = e.ServiceRegistry, this.langiumDocuments = e.workspace.LangiumDocuments, this.documentBuilder = e.workspace.DocumentBuilder, this.fileSystemProvider = e.workspace.FileSystemProvider, this.mutex = e.workspace.WorkspaceLock;
  }
  get ready() {
    return this._ready.promise;
  }
  initialize(e) {
    var t;
    this.folders = (t = e.workspaceFolders) !== null && t !== void 0 ? t : void 0;
  }
  initialized(e) {
    return this.mutex.write((t) => {
      var n2;
      return this.initializeWorkspace((n2 = this.folders) !== null && n2 !== void 0 ? n2 : [], t);
    });
  }
  async initializeWorkspace(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w.CancellationToken.None;
    let n2 = await this.performStartup(e);
    await Te(t), await this.documentBuilder.build(n2, this.initialBuildOptions, t);
  }
  async performStartup(e) {
    let t = /* @__PURE__ */ this.serviceRegistry.all.flatMap((s) => s.LanguageMetaData.fileExtensions), n2 = [], i = /* @__PURE__ */ m$1((s) => {
      n2.push(s), this.langiumDocuments.hasDocument(s.uri) || this.langiumDocuments.addDocument(s);
    }, "collector");
    return await this.loadAdditionalDocuments(e, i), await Promise.all(/* @__PURE__ */ e.map((s) => [
      s,
      /* @__PURE__ */ this.getRootFolder(s)
    ]).map(async (s) => this.traverseFolder(...s, t, i))), this._ready.resolve(), n2;
  }
  loadAdditionalDocuments(e, t) {
    return Promise.resolve();
  }
  getRootFolder(e) {
    return We.parse(e.uri);
  }
  async traverseFolder(e, t, n2, i) {
    let s = await this.fileSystemProvider.readDirectory(t);
    await Promise.all(/* @__PURE__ */ s.map(async (o2) => {
      if (this.includeEntry(e, o2, n2)) {
        if (o2.isDirectory) await this.traverseFolder(e, o2.uri, n2, i);
        else if (o2.isFile) {
          let l = await this.langiumDocuments.getOrCreateDocument(o2.uri);
          i(l);
        }
      }
    }));
  }
  includeEntry(e, t, n2) {
    let i = /* @__PURE__ */ Ge.basename(t.uri);
    if (i.startsWith(".")) return false;
    if (t.isDirectory) return i !== "node_modules" && i !== "out";
    if (t.isFile) {
      let s = /* @__PURE__ */ Ge.extname(t.uri);
      return n2.includes(s);
    }
    return false;
  }
}, __109 = new WeakMap(), __privateAdd(_$a, __109, m$1(_$a, "DefaultWorkspaceManager")), _$a);
var mi = (_ab = class {
  constructor(e) {
    let t = /* @__PURE__ */ e.parser.TokenBuilder.buildTokens(e.Grammar, {
      caseInsensitive: e.LanguageMetaData.caseInsensitive
    });
    this.tokenTypes = /* @__PURE__ */ this.toTokenTypeDictionary(t);
    let n2 = Ul(t) ? Object.values(t) : t;
    this.chevrotainLexer = new le(n2, {
      positionTracking: "full"
    });
  }
  get definition() {
    return this.tokenTypes;
  }
  tokenize(e) {
    var t;
    let n2 = /* @__PURE__ */ this.chevrotainLexer.tokenize(e);
    return {
      tokens: n2.tokens,
      errors: n2.errors,
      hidden: (t = n2.groups.hidden) !== null && t !== void 0 ? t : []
    };
  }
  toTokenTypeDictionary(e) {
    if (Ul(e)) return e;
    let t = Gl(e) ? Object.values(e.modes).flat() : e, n2 = {};
    return t.forEach((i) => n2[i.name] = i), n2;
  }
}, __110 = new WeakMap(), __privateAdd(_ab, __110, m$1(_ab, "DefaultLexer")), _ab);
function Rd(r) {
  return Array.isArray(r) && (r.length === 0 || "name" in r[0]);
}
m$1(Rd, "isTokenTypeArray");
function Gl(r) {
  return r && "modes" in r && "defaultMode" in r;
}
m$1(Gl, "isIMultiModeLexerDefinition");
function Ul(r) {
  return !Rd(r) && !Gl(r);
}
m$1(Ul, "isTokenTypeDictionary");
function jl(r, e, t) {
  let n2, i;
  typeof r == "string" ? (i = e, n2 = t) : (i = r.range.start, n2 = e), i || (i = /* @__PURE__ */ B.create(0, 0));
  let s = /* @__PURE__ */ vd(r), o2 = /* @__PURE__ */ Kl(n2), l = /* @__PURE__ */ wm({
    lines: s,
    position: i,
    options: o2
  });
  return bm({
    index: 0,
    tokens: l,
    position: i
  });
}
m$1(jl, "parseJSDoc");
function Vl(r, e) {
  let t = /* @__PURE__ */ Kl(e), n2 = /* @__PURE__ */ vd(r);
  if (n2.length === 0) return false;
  let i = n2[0], s = n2[n2.length - 1], o2 = t.start, l = t.end;
  return !!(o2 == null ? void 0 : o2.exec(i)) && !!(l == null ? void 0 : l.exec(s));
}
m$1(Vl, "isJSDoc");
function vd(r) {
  let e = "";
  return typeof r == "string" ? e = r : e = r.text, e.split(uo);
}
m$1(vd, "getLines");
var Ed = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy, _m = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function wm(r) {
  var e, t, n2;
  let i = [], s = r.position.line, o2 = r.position.character;
  for (let l = 0; l < r.lines.length; l++) {
    let c = l === 0, u = l === r.lines.length - 1, f = r.lines[l], d = 0;
    if (c && r.options.start) {
      let h2 = (e = r.options.start) === null || e === void 0 ? void 0 : e.exec(f);
      h2 && (d = h2.index + h2[0].length);
    } else {
      let h2 = (t = r.options.line) === null || t === void 0 ? void 0 : t.exec(f);
      h2 && (d = h2.index + h2[0].length);
    }
    if (u) {
      let h2 = (n2 = r.options.end) === null || n2 === void 0 ? void 0 : n2.exec(f);
      h2 && (f = /* @__PURE__ */ f.substring(0, h2.index));
    }
    if (f = /* @__PURE__ */ f.substring(0, /* @__PURE__ */ Pm(f)), Wl(f, d) >= f.length) {
      if (i.length > 0) {
        let h2 = /* @__PURE__ */ B.create(s, o2);
        i.push({
          type: "break",
          content: "",
          range: /* @__PURE__ */ U.create(h2, h2)
        });
      }
    } else {
      Ed.lastIndex = d;
      let h2 = /* @__PURE__ */ Ed.exec(f);
      if (h2) {
        let g = h2[0], T2 = h2[1], k = /* @__PURE__ */ B.create(s, o2 + d), R = /* @__PURE__ */ B.create(s, o2 + d + g.length);
        i.push({
          type: "tag",
          content: T2,
          range: /* @__PURE__ */ U.create(k, R)
        }), d += g.length, d = /* @__PURE__ */ Wl(f, d);
      }
      if (d < f.length) {
        let g = /* @__PURE__ */ f.substring(d), T2 = /* @__PURE__ */ Array.from(/* @__PURE__ */ g.matchAll(_m));
        i.push(.../* @__PURE__ */ Lm(T2, g, s, o2 + d));
      }
    }
    s++, o2 = 0;
  }
  return i.length > 0 && i[i.length - 1].type === "break" ? i.slice(0, -1) : i;
}
m$1(wm, "tokenize");
function Lm(r, e, t, n2) {
  let i = [];
  if (r.length === 0) {
    let s = /* @__PURE__ */ B.create(t, n2), o2 = /* @__PURE__ */ B.create(t, n2 + e.length);
    i.push({
      type: "text",
      content: e,
      range: /* @__PURE__ */ U.create(s, o2)
    });
  } else {
    let s = 0;
    for (let l of r) {
      let c = l.index, u = /* @__PURE__ */ e.substring(s, c);
      u.length > 0 && i.push({
        type: "text",
        content: /* @__PURE__ */ e.substring(s, c),
        range: /* @__PURE__ */ U.create(/* @__PURE__ */ B.create(t, s + n2), /* @__PURE__ */ B.create(t, c + n2))
      });
      let f = u.length + 1, d = l[1];
      if (i.push({
        type: "inline-tag",
        content: d,
        range: /* @__PURE__ */ U.create(/* @__PURE__ */ B.create(t, s + f + n2), /* @__PURE__ */ B.create(t, s + f + d.length + n2))
      }), f += d.length, l.length === 4) {
        f += l[2].length;
        let p2 = l[3];
        i.push({
          type: "text",
          content: p2,
          range: /* @__PURE__ */ U.create(/* @__PURE__ */ B.create(t, s + f + n2), /* @__PURE__ */ B.create(t, s + f + p2.length + n2))
        });
      } else i.push({
        type: "text",
        content: "",
        range: /* @__PURE__ */ U.create(/* @__PURE__ */ B.create(t, s + f + n2), /* @__PURE__ */ B.create(t, s + f + n2))
      });
      s = c + l[0].length;
    }
    let o2 = /* @__PURE__ */ e.substring(s);
    o2.length > 0 && i.push({
      type: "text",
      content: o2,
      range: /* @__PURE__ */ U.create(/* @__PURE__ */ B.create(t, s + n2), /* @__PURE__ */ B.create(t, s + n2 + o2.length))
    });
  }
  return i;
}
m$1(Lm, "buildInlineTokens");
var Om = /\S/, $m = /\s*$/;
function Wl(r, e) {
  let t = /* @__PURE__ */ r.substring(e).match(Om);
  return t ? e + t.index : r.length;
}
m$1(Wl, "skipWhitespace");
function Pm(r) {
  let e = /* @__PURE__ */ r.match($m);
  if (e && typeof e.index == "number") return e.index;
}
m$1(Pm, "lastCharacter");
function bm(r) {
  var e, t, n2, i;
  let s = /* @__PURE__ */ B.create(r.position.line, r.position.character);
  if (r.tokens.length === 0) return new Vs([], U.create(s, s));
  let o2 = [];
  for (; r.index < r.tokens.length; ) {
    let u = /* @__PURE__ */ Mm(r, o2[o2.length - 1]);
    u && o2.push(u);
  }
  let l = (t = (e = o2[0]) === null || e === void 0 ? void 0 : e.range.start) !== null && t !== void 0 ? t : s, c = (i = (n2 = o2[o2.length - 1]) === null || n2 === void 0 ? void 0 : n2.range.end) !== null && i !== void 0 ? i : s;
  return new Vs(o2, U.create(l, c));
}
m$1(bm, "parseJSDocComment");
function Mm(r, e) {
  let t = r.tokens[r.index];
  if (t.type === "tag") return Id(r, false);
  if (t.type === "text" || t.type === "inline-tag") return kd(r);
  Dm(t, e), r.index++;
}
m$1(Mm, "parseJSDocElement");
function Dm(r, e) {
  if (e) {
    let t = new Ks("", r.range);
    "inlines" in e ? e.inlines.push(t) : e.content.inlines.push(t);
  }
}
m$1(Dm, "appendEmptyLine");
function kd(r) {
  let e = r.tokens[r.index], t = e, n2 = e, i = [];
  for (; e && e.type !== "break" && e.type !== "tag"; ) i.push(/* @__PURE__ */ Fm(r)), n2 = e, e = r.tokens[r.index];
  return new yi(i, U.create(t.range.start, n2.range.end));
}
m$1(kd, "parseJSDocText");
function Fm(r) {
  return r.tokens[r.index].type === "inline-tag" ? Id(r, true) : Nd(r);
}
m$1(Fm, "parseJSDocInline");
function Id(r, e) {
  let t = r.tokens[r.index++], n2 = /* @__PURE__ */ t.content.substring(1), i = r.tokens[r.index];
  if ((i == null ? void 0 : i.type) === "text") if (e) {
    let s = /* @__PURE__ */ Nd(r);
    return new gi(n2, new yi([
      s
    ], s.range), e, U.create(t.range.start, s.range.end));
  } else {
    let s = /* @__PURE__ */ kd(r);
    return new gi(n2, s, e, U.create(t.range.start, s.range.end));
  }
  else {
    let s = t.range;
    return new gi(n2, new yi([], s), e, s);
  }
}
m$1(Id, "parseJSDocTag");
function Nd(r) {
  let e = r.tokens[r.index++];
  return new Ks(e.content, e.range);
}
m$1(Nd, "parseJSDocLine");
function Kl(r) {
  if (!r) return Kl({
    start: "/**",
    end: "*/",
    line: "*"
  });
  let { start: e, end: t, line: n2 } = r;
  return {
    start: /* @__PURE__ */ Bl(e, true),
    end: /* @__PURE__ */ Bl(t, false),
    line: /* @__PURE__ */ Bl(n2, true)
  };
}
m$1(Kl, "normalizeOptions");
function Bl(r, e) {
  if (typeof r == "string" || typeof r == "object") {
    let t = typeof r == "string" ? nr(r) : r.source;
    return e ? new RegExp(`^\\s*${t}`) : new RegExp(`\\s*${t}\\s*$`);
  } else return r;
}
m$1(Bl, "normalizeOption");
var Vs = (_bb = class {
  constructor(e, t) {
    this.elements = e, this.range = t;
  }
  getTag(e) {
    return this.getAllTags().find((t) => t.name === e);
  }
  getTags(e) {
    return this.getAllTags().filter((t) => t.name === e);
  }
  getAllTags() {
    return this.elements.filter((e) => "name" in e);
  }
  toString() {
    let e = "";
    for (let t of this.elements) if (e.length === 0) e = /* @__PURE__ */ t.toString();
    else {
      let n2 = /* @__PURE__ */ t.toString();
      e += Ad(e) + n2;
    }
    return e.trim();
  }
  toMarkdown(e) {
    let t = "";
    for (let n2 of this.elements) if (t.length === 0) t = /* @__PURE__ */ n2.toMarkdown(e);
    else {
      let i = /* @__PURE__ */ n2.toMarkdown(e);
      t += Ad(t) + i;
    }
    return t.trim();
  }
}, __111 = new WeakMap(), __privateAdd(_bb, __111, m$1(_bb, "JSDocCommentImpl")), _bb), gi = (_cb = class {
  constructor(e, t, n2, i) {
    this.name = e, this.content = t, this.inline = n2, this.range = i;
  }
  toString() {
    let e = `@${this.name}`, t = /* @__PURE__ */ this.content.toString();
    return this.content.inlines.length === 1 ? e = `${e} ${t}` : this.content.inlines.length > 1 && (e = `${e}
${t}`), this.inline ? `{${e}}` : e;
  }
  toMarkdown(e) {
    var t, n2;
    return (n2 = (t = e == null ? void 0 : e.renderTag) === null || t === void 0 ? void 0 : t.call(e, this)) !== null && n2 !== void 0 ? n2 : this.toMarkdownDefault(e);
  }
  toMarkdownDefault(e) {
    let t = /* @__PURE__ */ this.content.toMarkdown(e);
    if (this.inline) {
      let s = /* @__PURE__ */ Um(this.name, t, e ?? {});
      if (typeof s == "string") return s;
    }
    let n2 = "";
    (e == null ? void 0 : e.tag) === "italic" || (e == null ? void 0 : e.tag) === void 0 ? n2 = "*" : (e == null ? void 0 : e.tag) === "bold" ? n2 = "**" : (e == null ? void 0 : e.tag) === "bold-italic" && (n2 = "***");
    let i = `${n2}@${this.name}${n2}`;
    return this.content.inlines.length === 1 ? i = `${i} — ${t}` : this.content.inlines.length > 1 && (i = `${i}
${t}`), this.inline ? `{${i}}` : i;
  }
}, __112 = new WeakMap(), __privateAdd(_cb, __112, m$1(_cb, "JSDocTagImpl")), _cb);
function Um(r, e, t) {
  var n2, i;
  if (r === "linkplain" || r === "linkcode" || r === "link") {
    let s = /* @__PURE__ */ e.indexOf(" "), o2 = e;
    if (s > 0) {
      let c = /* @__PURE__ */ Wl(e, s);
      o2 = /* @__PURE__ */ e.substring(c), e = /* @__PURE__ */ e.substring(0, s);
    }
    return (r === "linkcode" || r === "link" && t.link === "code") && (o2 = `\`${o2}\``), (i = (n2 = t.renderLink) === null || n2 === void 0 ? void 0 : n2.call(t, e, o2)) !== null && i !== void 0 ? i : Gm(e, o2);
  }
}
m$1(Um, "renderInlineTag");
function Gm(r, e) {
  try {
    return We.parse(r, true), `[${e}](${r})`;
  } catch {
    return r;
  }
}
m$1(Gm, "renderLinkDefault");
var yi = (_db = class {
  constructor(e, t) {
    this.inlines = e, this.range = t;
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.inlines.length; t++) {
      let n2 = this.inlines[t], i = this.inlines[t + 1];
      e += /* @__PURE__ */ n2.toString(), i && i.range.start.line > n2.range.start.line && (e += `
`);
    }
    return e;
  }
  toMarkdown(e) {
    let t = "";
    for (let n2 = 0; n2 < this.inlines.length; n2++) {
      let i = this.inlines[n2], s = this.inlines[n2 + 1];
      t += /* @__PURE__ */ i.toMarkdown(e), s && s.range.start.line > i.range.start.line && (t += `
`);
    }
    return t;
  }
}, __113 = new WeakMap(), __privateAdd(_db, __113, m$1(_db, "JSDocTextImpl")), _db), Ks = (_eb = class {
  constructor(e, t) {
    this.text = e, this.range = t;
  }
  toString() {
    return this.text;
  }
  toMarkdown() {
    return this.text;
  }
}, __114 = new WeakMap(), __privateAdd(_eb, __114, m$1(_eb, "JSDocLineImpl")), _eb);
function Ad(r) {
  return r.endsWith(`
`) ? `
` : `

`;
}
m$1(Ad, "fillNewlines");
var Ti = (_fb = class {
  constructor(e) {
    this.indexManager = e.shared.workspace.IndexManager, this.commentProvider = e.documentation.CommentProvider;
  }
  getDocumentation(e) {
    let t = /* @__PURE__ */ this.commentProvider.getComment(e);
    if (t && Vl(t)) return jl(t).toMarkdown({
      renderLink: /* @__PURE__ */ m$1((i, s) => this.documentationLinkRenderer(e, i, s), "renderLink"),
      renderTag: /* @__PURE__ */ m$1((i) => this.documentationTagRenderer(e, i), "renderTag")
    });
  }
  documentationLinkRenderer(e, t, n2) {
    var i;
    let s = (i = /* @__PURE__ */ this.findNameInPrecomputedScopes(e, t)) !== null && i !== void 0 ? i : this.findNameInGlobalScope(e, t);
    if (s && s.nameSegment) {
      let o2 = s.nameSegment.range.start.line + 1, l = s.nameSegment.range.start.character + 1, c = /* @__PURE__ */ s.documentUri.with({
        fragment: `L${o2},${l}`
      });
      return `[${n2}](${c.toString()})`;
    } else return;
  }
  documentationTagRenderer(e, t) {
  }
  findNameInPrecomputedScopes(e, t) {
    let i = ge(e).precomputedScopes;
    if (!i) return;
    let s = e;
    do {
      let l = /* @__PURE__ */ i.get(s).find((c) => c.name === t);
      if (l) return l;
      s = s.$container;
    } while (s);
  }
  findNameInGlobalScope(e, t) {
    return this.indexManager.allElements().find((i) => i.name === t);
  }
}, __115 = new WeakMap(), __privateAdd(_fb, __115, m$1(_fb, "JSDocDocumentationProvider")), _fb);
var xi = (_gb = class {
  constructor(e) {
    this.grammarConfig = () => e.parser.GrammarConfig;
  }
  getComment(e) {
    var t;
    return Fl(e) ? e.$comment : (t = /* @__PURE__ */ ra(e.$cstNode, this.grammarConfig().multilineCommentRules)) === null || t === void 0 ? void 0 : t.text;
  }
}, __116 = new WeakMap(), __privateAdd(_gb, __116, m$1(_gb, "DefaultCommentProvider")), _gb);
var ce = {};
p(ce, /* @__PURE__ */ q$1(/* @__PURE__ */ Ol()));
var Ri = (_hb = class {
  constructor(e) {
    this.syncParser = e.parser.LangiumParser;
  }
  parse(e) {
    return Promise.resolve(/* @__PURE__ */ this.syncParser.parse(e));
  }
}, __117 = new WeakMap(), __privateAdd(_hb, __117, m$1(_hb, "DefaultAsyncParser")), _hb), Hl = (_ib = class {
  constructor(e) {
    this.threadCount = 8, this.terminationDelay = 200, this.workerPool = [], this.queue = [], this.hydrator = e.serializer.Hydrator;
  }
  initializeWorkers() {
    for (; this.workerPool.length < this.threadCount; ) {
      let e = /* @__PURE__ */ this.createWorker();
      e.onReady(() => {
        if (this.queue.length > 0) {
          let t = /* @__PURE__ */ this.queue.shift();
          t && (e.lock(), t.resolve(e));
        }
      }), this.workerPool.push(e);
    }
  }
  async parse(e, t) {
    let n2 = await this.acquireParserWorker(t), i = new Ue(), s, o2 = /* @__PURE__ */ t.onCancellationRequested(() => {
      s = /* @__PURE__ */ setTimeout(() => {
        this.terminateWorker(n2);
      }, this.terminationDelay);
    });
    return n2.parse(e).then((l) => {
      let c = /* @__PURE__ */ this.hydrator.hydrate(l);
      i.resolve(c);
    }).catch((l) => {
      i.reject(l);
    }).finally(() => {
      o2.dispose(), clearTimeout(s);
    }), i.promise;
  }
  terminateWorker(e) {
    e.terminate();
    let t = /* @__PURE__ */ this.workerPool.indexOf(e);
    t >= 0 && this.workerPool.splice(t, 1);
  }
  async acquireParserWorker(e) {
    this.initializeWorkers();
    for (let n2 of this.workerPool) if (n2.ready) return n2.lock(), n2;
    let t = new Ue();
    return e.onCancellationRequested(() => {
      let n2 = /* @__PURE__ */ this.queue.indexOf(t);
      n2 >= 0 && this.queue.splice(n2, 1), t.reject(ft);
    }), this.queue.push(t), t.promise;
  }
}, __118 = new WeakMap(), __privateAdd(_ib, __118, m$1(_ib, "AbstractThreadedAsyncParser")), _ib), zl = (_jb = class {
  get ready() {
    return this._ready;
  }
  get onReady() {
    return this.onReadyEmitter.event;
  }
  constructor(e, t, n2, i) {
    this.onReadyEmitter = new ce.Emitter(), this.deferred = new Ue(), this._ready = true, this._parsing = false, this.sendMessage = e, this._terminate = i, t((s) => {
      let o2 = s;
      this.deferred.resolve(o2), this.unlock();
    }), n2((s) => {
      this.deferred.reject(s), this.unlock();
    });
  }
  terminate() {
    this.deferred.reject(ft), this._terminate();
  }
  lock() {
    this._ready = false;
  }
  unlock() {
    this._parsing = false, this._ready = true, this.onReadyEmitter.fire();
  }
  parse(e) {
    if (this._parsing) throw new Error("Parser worker is busy");
    return this._parsing = true, this.deferred = new Ue(), this.sendMessage(e), this.deferred.promise;
  }
}, __119 = new WeakMap(), __privateAdd(_jb, __119, m$1(_jb, "ParserWorker")), _jb);
var Ei = (_kb = class {
  constructor() {
    this.previousTokenSource = new w.CancellationTokenSource(), this.writeQueue = [], this.readQueue = [], this.done = true;
  }
  write(e) {
    this.cancelWrite();
    let t = new w.CancellationTokenSource();
    return this.previousTokenSource = t, this.enqueue(this.writeQueue, e, t.token);
  }
  read(e) {
    return this.enqueue(this.readQueue, e);
  }
  enqueue(e, t, n2) {
    let i = new Ue(), s = {
      action: t,
      deferred: i,
      cancellationToken: n2 ?? w.CancellationToken.None
    };
    return e.push(s), this.performNextOperation(), i.promise;
  }
  async performNextOperation() {
    if (!this.done) return;
    let e = [];
    if (this.writeQueue.length > 0) e.push(/* @__PURE__ */ this.writeQueue.shift());
    else if (this.readQueue.length > 0) e.push(.../* @__PURE__ */ this.readQueue.splice(0, this.readQueue.length));
    else return;
    this.done = false, await Promise.all(/* @__PURE__ */ e.map(async (param) => {
      let { action: t, deferred: n2, cancellationToken: i } = param;
      try {
        let s = await Promise.resolve().then(() => t(i));
        n2.resolve(s);
      } catch (s) {
        Gt(s) ? n2.resolve(void 0) : n2.reject(s);
      }
    })), this.done = true, this.performNextOperation();
  }
  cancelWrite() {
    this.previousTokenSource.cancel();
  }
}, __120 = new WeakMap(), __privateAdd(_kb, __120, m$1(_kb, "DefaultWorkspaceLock")), _kb);
var Ai = (_lb = class {
  constructor(e) {
    this.grammarElementIdMap = new yr(), this.tokenTypeIdMap = new yr(), this.grammar = e.Grammar, this.lexer = e.parser.Lexer, this.linker = e.references.Linker;
  }
  dehydrate(e) {
    return {
      lexerErrors: /* @__PURE__ */ e.lexerErrors.map((t) => Object.assign({}, t)),
      parserErrors: /* @__PURE__ */ e.parserErrors.map((t) => Object.assign({}, t)),
      value: /* @__PURE__ */ this.dehydrateAstNode(e.value, /* @__PURE__ */ this.createDehyrationContext(e.value))
    };
  }
  createDehyrationContext(e) {
    let t = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map();
    for (let i of Qe(e)) t.set(i, {});
    if (e.$cstNode) for (let i of Xt(e.$cstNode)) n2.set(i, {});
    return {
      astNodes: t,
      cstNodes: n2
    };
  }
  dehydrateAstNode(e, t) {
    let n2 = /* @__PURE__ */ t.astNodes.get(e);
    n2.$type = e.$type, n2.$containerIndex = e.$containerIndex, n2.$containerProperty = e.$containerProperty, e.$cstNode !== void 0 && (n2.$cstNode = /* @__PURE__ */ this.dehydrateCstNode(e.$cstNode, t));
    for (let [i, s] of Object.entries(e)) if (!i.startsWith("$")) if (Array.isArray(s)) {
      let o2 = [];
      n2[i] = o2;
      for (let l of s) ae(l) ? o2.push(/* @__PURE__ */ this.dehydrateAstNode(l, t)) : Ae(l) ? o2.push(/* @__PURE__ */ this.dehydrateReference(l, t)) : o2.push(l);
    } else ae(s) ? n2[i] = /* @__PURE__ */ this.dehydrateAstNode(s, t) : Ae(s) ? n2[i] = /* @__PURE__ */ this.dehydrateReference(s, t) : s !== void 0 && (n2[i] = s);
    return n2;
  }
  dehydrateReference(e, t) {
    let n2 = {};
    return n2.$refText = e.$refText, e.$refNode && (n2.$refNode = /* @__PURE__ */ t.cstNodes.get(e.$refNode)), n2;
  }
  dehydrateCstNode(e, t) {
    let n2 = /* @__PURE__ */ t.cstNodes.get(e);
    return ln(e) ? n2.fullText = e.fullText : n2.grammarSource = /* @__PURE__ */ this.getGrammarElementId(e.grammarSource), n2.hidden = e.hidden, n2.astNode = /* @__PURE__ */ t.astNodes.get(e.astNode), Ke(e) ? n2.content = /* @__PURE__ */ e.content.map((i) => this.dehydrateCstNode(i, t)) : Pt(e) && (n2.tokenType = e.tokenType.name, n2.offset = e.offset, n2.length = e.length, n2.startLine = e.range.start.line, n2.startColumn = e.range.start.character, n2.endLine = e.range.end.line, n2.endColumn = e.range.end.character), n2;
  }
  hydrate(e) {
    let t = e.value, n2 = /* @__PURE__ */ this.createHydrationContext(t);
    return "$cstNode" in t && this.hydrateCstNode(t.$cstNode, n2), {
      lexerErrors: e.lexerErrors,
      parserErrors: e.parserErrors,
      value: /* @__PURE__ */ this.hydrateAstNode(t, n2)
    };
  }
  createHydrationContext(e) {
    let t = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map();
    for (let s of Qe(e)) t.set(s, {});
    let i;
    if (e.$cstNode) for (let s of Xt(e.$cstNode)) {
      let o2;
      "fullText" in s ? (o2 = new Xr(s.fullText), i = o2) : "content" in s ? o2 = new hr() : "tokenType" in s && (o2 = /* @__PURE__ */ this.hydrateCstLeafNode(s)), o2 && (n2.set(s, o2), o2.root = i);
    }
    return {
      astNodes: t,
      cstNodes: n2
    };
  }
  hydrateAstNode(e, t) {
    let n2 = /* @__PURE__ */ t.astNodes.get(e);
    n2.$type = e.$type, n2.$containerIndex = e.$containerIndex, n2.$containerProperty = e.$containerProperty, e.$cstNode && (n2.$cstNode = /* @__PURE__ */ t.cstNodes.get(e.$cstNode));
    for (let [i, s] of Object.entries(e)) if (!i.startsWith("$")) if (Array.isArray(s)) {
      let o2 = [];
      n2[i] = o2;
      for (let l of s) ae(l) ? o2.push(/* @__PURE__ */ this.setParent(/* @__PURE__ */ this.hydrateAstNode(l, t), n2)) : Ae(l) ? o2.push(/* @__PURE__ */ this.hydrateReference(l, n2, i, t)) : o2.push(l);
    } else ae(s) ? n2[i] = /* @__PURE__ */ this.setParent(/* @__PURE__ */ this.hydrateAstNode(s, t), n2) : Ae(s) ? n2[i] = /* @__PURE__ */ this.hydrateReference(s, n2, i, t) : s !== void 0 && (n2[i] = s);
    return n2;
  }
  setParent(e, t) {
    return e.$container = t, e;
  }
  hydrateReference(e, t, n2, i) {
    return this.linker.buildReference(t, n2, /* @__PURE__ */ i.cstNodes.get(e.$refNode), e.$refText);
  }
  hydrateCstNode(e, t) {
    let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    let i = /* @__PURE__ */ t.cstNodes.get(e);
    if (typeof e.grammarSource == "number" && (i.grammarSource = /* @__PURE__ */ this.getGrammarElement(e.grammarSource)), i.astNode = /* @__PURE__ */ t.astNodes.get(e.astNode), Ke(i)) for (let s of e.content) {
      let o2 = /* @__PURE__ */ this.hydrateCstNode(s, t, n2++);
      i.content.push(o2);
    }
    return i;
  }
  hydrateCstLeafNode(e) {
    let t = /* @__PURE__ */ this.getTokenType(e.tokenType), n2 = e.offset, i = e.length, s = e.startLine, o2 = e.startColumn, l = e.endLine, c = e.endColumn, u = e.hidden;
    return new dr(n2, i, {
      start: {
        line: s,
        character: o2
      },
      end: {
        line: l,
        character: c
      }
    }, t, u);
  }
  getTokenType(e) {
    return this.lexer.definition[e];
  }
  getGrammarElementId(e) {
    return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.get(e);
  }
  getGrammarElement(e) {
    this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap();
    let t = /* @__PURE__ */ this.grammarElementIdMap.getKey(e);
    if (t) return t;
    throw new Error("Invalid grammar element id: " + e);
  }
  createGrammarElementIdMap() {
    let e = 0;
    for (let t of Qe(this.grammar)) dn(t) && this.grammarElementIdMap.set(t, e++);
  }
}, __121 = new WeakMap(), __privateAdd(_lb, __121, m$1(_lb, "DefaultHydrator")), _lb);
function ql(r) {
  return {
    documentation: {
      CommentProvider: /* @__PURE__ */ m$1((e) => new xi(e), "CommentProvider"),
      DocumentationProvider: /* @__PURE__ */ m$1((e) => new Ti(e), "DocumentationProvider")
    },
    parser: {
      AsyncParser: /* @__PURE__ */ m$1((e) => new Ri(e), "AsyncParser"),
      GrammarConfig: /* @__PURE__ */ m$1((e) => So(e), "GrammarConfig"),
      LangiumParser: /* @__PURE__ */ m$1((e) => Nl(e), "LangiumParser"),
      CompletionParser: /* @__PURE__ */ m$1((e) => Il(e), "CompletionParser"),
      ValueConverter: /* @__PURE__ */ m$1(() => new gr(), "ValueConverter"),
      TokenBuilder: /* @__PURE__ */ m$1(() => new mr(), "TokenBuilder"),
      Lexer: /* @__PURE__ */ m$1((e) => new mi(e), "Lexer"),
      ParserErrorMessageProvider: /* @__PURE__ */ m$1(() => new Yr(), "ParserErrorMessageProvider")
    },
    workspace: {
      AstNodeLocator: /* @__PURE__ */ m$1(() => new ui(), "AstNodeLocator"),
      AstNodeDescriptionProvider: /* @__PURE__ */ m$1((e) => new li(e), "AstNodeDescriptionProvider"),
      ReferenceDescriptionProvider: /* @__PURE__ */ m$1((e) => new ci(e), "ReferenceDescriptionProvider")
    },
    references: {
      Linker: /* @__PURE__ */ m$1((e) => new Jn(e), "Linker"),
      NameProvider: /* @__PURE__ */ m$1(() => new Qn(), "NameProvider"),
      ScopeProvider: /* @__PURE__ */ m$1((e) => new ni(e), "ScopeProvider"),
      ScopeComputation: /* @__PURE__ */ m$1((e) => new ei(e), "ScopeComputation"),
      References: /* @__PURE__ */ m$1((e) => new Zn(e), "References")
    },
    serializer: {
      Hydrator: /* @__PURE__ */ m$1((e) => new Ai(e), "Hydrator"),
      JsonSerializer: /* @__PURE__ */ m$1((e) => new ii(e), "JsonSerializer")
    },
    validation: {
      DocumentValidator: /* @__PURE__ */ m$1((e) => new oi(e), "DocumentValidator"),
      ValidationRegistry: /* @__PURE__ */ m$1((e) => new ai(e), "ValidationRegistry")
    },
    shared: /* @__PURE__ */ m$1(() => r.shared, "shared")
  };
}
m$1(ql, "createDefaultCoreModule");
function Xl(r) {
  return {
    ServiceRegistry: /* @__PURE__ */ m$1(() => new si(), "ServiceRegistry"),
    workspace: {
      LangiumDocuments: /* @__PURE__ */ m$1((e) => new Yn(e), "LangiumDocuments"),
      LangiumDocumentFactory: /* @__PURE__ */ m$1((e) => new Xn(e), "LangiumDocumentFactory"),
      DocumentBuilder: /* @__PURE__ */ m$1((e) => new di(e), "DocumentBuilder"),
      IndexManager: /* @__PURE__ */ m$1((e) => new hi(e), "IndexManager"),
      WorkspaceManager: /* @__PURE__ */ m$1((e) => new pi(e), "WorkspaceManager"),
      FileSystemProvider: /* @__PURE__ */ m$1((e) => r.fileSystemProvider(e), "FileSystemProvider"),
      WorkspaceLock: /* @__PURE__ */ m$1(() => new Ei(), "WorkspaceLock"),
      ConfigurationProvider: /* @__PURE__ */ m$1((e) => new fi(e), "ConfigurationProvider")
    }
  };
}
m$1(Xl, "createDefaultSharedCoreModule");
var Yl;
(function(r) {
  r.merge = (e, t) => Hs(/* @__PURE__ */ Hs({}, e), t);
})(Yl || (Yl = {}));
function zs(r, e, t, n2, i, s, o2, l, c) {
  let u = /* @__PURE__ */ [
    r,
    e,
    t,
    n2,
    i,
    s,
    o2,
    l,
    c
  ].reduce(Hs, {});
  return wd(u);
}
m$1(zs, "inject");
var Jl = /* @__PURE__ */ Symbol("isProxy");
function _d(r) {
  if (r && r[Jl]) for (let e of Object.values(r)) _d(e);
  return r;
}
m$1(_d, "eagerLoad");
function wd(r, e) {
  let t = new Proxy({}, {
    deleteProperty: /* @__PURE__ */ m$1(() => false, "deleteProperty"),
    get: /* @__PURE__ */ m$1((n2, i) => Cd(n2, i, r, e || t), "get"),
    getOwnPropertyDescriptor: /* @__PURE__ */ m$1((n2, i) => (Cd(n2, i, r, e || t), Object.getOwnPropertyDescriptor(n2, i)), "getOwnPropertyDescriptor"),
    has: /* @__PURE__ */ m$1((n2, i) => i in r, "has"),
    ownKeys: /* @__PURE__ */ m$1(() => [
      .../* @__PURE__ */ Reflect.ownKeys(r),
      Jl
    ], "ownKeys")
  });
  return t[Jl] = true, t;
}
m$1(wd, "_inject");
var Sd = /* @__PURE__ */ Symbol();
function Cd(r, e, t, n2) {
  if (e in r) {
    if (r[e] instanceof Error) throw new Error("Construction failure. Please make sure that your dependencies are constructable.", {
      cause: r[e]
    });
    if (r[e] === Sd) throw new Error('Cycle detected. Please make "' + String(e) + '" lazy. See https://langium.org/docs/configuration-services/#resolving-cyclic-dependencies');
    return r[e];
  } else if (e in t) {
    let i = t[e];
    r[e] = Sd;
    try {
      r[e] = typeof i == "function" ? i(n2) : wd(i, n2);
    } catch (s) {
      throw r[e] = s instanceof Error ? s : void 0, s;
    }
    return r[e];
  } else return;
}
m$1(Cd, "_resolve");
function Hs(r, e) {
  if (e) {
    for (let [t, n2] of Object.entries(e)) if (n2 !== void 0) {
      let i = r[t];
      i !== null && n2 !== null && typeof i == "object" && typeof n2 == "object" ? r[t] = /* @__PURE__ */ Hs(i, n2) : r[t] = n2;
    }
  }
  return r;
}
m$1(Hs, "_merge");
var W = {};
o(W, {
  AstUtils: () => Fi,
  BiMap: () => yr,
  Cancellation: () => w,
  ContextCache: () => Tr,
  CstUtils: () => Si,
  DONE_RESULT: () => be,
  Deferred: () => Ue,
  Disposable: () => xr,
  DisposableCache: () => rn,
  DocumentCache: () => Bs,
  EMPTY_STREAM: () => cn,
  ErrorWithLocation: () => Jt,
  GrammarUtils: () => Vi,
  MultiMap: () => dt,
  OperationCancelled: () => ft,
  Reduction: () => Ar,
  RegExpUtils: () => Wi,
  SimpleCache: () => ri,
  StreamImpl: () => He,
  TreeStreamImpl: () => at,
  URI: () => We,
  UriUtils: () => Ge,
  WorkspaceCache: () => nn,
  assertUnreachable: () => bt,
  delayNextTick: () => Ml,
  interruptAndCheck: () => Te,
  isOperationCancelled: () => Gt,
  loadGrammarFromJson: () => Bt,
  setInterruptionPeriod: () => dd,
  startCancelableOperation: () => fd,
  stream: () => K
});
p(W, ce);
var qs = (_mb = class {
  readFile() {
    throw new Error("No file system is available.");
  }
  async readDirectory() {
    return [];
  }
}, __122 = new WeakMap(), __privateAdd(_mb, __122, m$1(_mb, "EmptyFileSystemProvider")), _mb), Ql = {
  fileSystemProvider: /* @__PURE__ */ m$1(() => new qs(), "fileSystemProvider")
};
var Bm = {
  Grammar: /* @__PURE__ */ m$1(() => {
  }, "Grammar"),
  LanguageMetaData: /* @__PURE__ */ m$1(() => ({
    caseInsensitive: false,
    fileExtensions: [
      ".langium"
    ],
    languageId: "langium"
  }), "LanguageMetaData")
}, Wm = {
  AstReflection: /* @__PURE__ */ m$1(() => new kr(), "AstReflection")
};
function jm() {
  let r = /* @__PURE__ */ zs(/* @__PURE__ */ Xl(Ql), Wm), e = /* @__PURE__ */ zs(/* @__PURE__ */ ql({
    shared: r
  }), Bm);
  return r.ServiceRegistry.register(e), e;
}
m$1(jm, "createMinimalGrammarServices");
function Bt(r) {
  var e;
  let t = /* @__PURE__ */ jm(), n2 = /* @__PURE__ */ t.serializer.JsonSerializer.deserialize(r);
  return t.shared.workspace.LangiumDocumentFactory.fromModel(n2, /* @__PURE__ */ We.parse(`memory://${(e = n2.name) !== null && e !== void 0 ? e : "grammar"}.langium`)), n2;
}
m$1(Bt, "loadGrammarFromJson");
p(pe, W);
var Vm = Object.defineProperty, j = /* @__PURE__ */ m$1((r, e) => Vm(r, "name", {
  value: e,
  configurable: true
}), "__name"), Km = "Statement", Hm = "Architecture";
function zm(r) {
  return it.isInstance(r, Hm);
}
m$1(zm, "isArchitecture");
j(zm, "isArchitecture");
var Md = "Branch";
function qm(r) {
  return it.isInstance(r, Md);
}
m$1(qm, "isBranch");
j(qm, "isBranch");
var Xm = "Checkout", Ym = "CherryPicking", Dd = "Commit";
function Jm(r) {
  return it.isInstance(r, Dd);
}
m$1(Jm, "isCommit");
j(Jm, "isCommit");
var Qm = "Common";
function Zm(r) {
  return it.isInstance(r, Qm);
}
m$1(Zm, "isCommon");
j(Zm, "isCommon");
var Fd = "GitGraph";
function eg(r) {
  return it.isInstance(r, Fd);
}
m$1(eg, "isGitGraph");
j(eg, "isGitGraph");
var tg = "Info";
function rg(r) {
  return it.isInstance(r, tg);
}
m$1(rg, "isInfo");
j(rg, "isInfo");
var Ud = "Merge";
function ng(r) {
  return it.isInstance(r, Ud);
}
m$1(ng, "isMerge");
j(ng, "isMerge");
var ig = "Packet";
function sg(r) {
  return it.isInstance(r, ig);
}
m$1(sg, "isPacket");
j(sg, "isPacket");
var ag = "PacketBlock";
function og(r) {
  return it.isInstance(r, ag);
}
m$1(og, "isPacketBlock");
j(og, "isPacketBlock");
var lg = "Pie";
function cg(r) {
  return it.isInstance(r, lg);
}
m$1(cg, "isPie");
j(cg, "isPie");
var ug = "PieSection";
function fg(r) {
  return it.isInstance(r, ug);
}
m$1(fg, "isPieSection");
j(fg, "isPieSection");
var dg = "Direction", Gd = (_nb = class extends zt {
  getAllTypes() {
    return [
      "Architecture",
      "Branch",
      "Checkout",
      "CherryPicking",
      "Commit",
      "Common",
      "Direction",
      "Edge",
      "GitGraph",
      "Group",
      "Info",
      "Junction",
      "Merge",
      "Packet",
      "PacketBlock",
      "Pie",
      "PieSection",
      "Service",
      "Statement"
    ];
  }
  computeIsSubtype(r, e) {
    switch (r) {
      case Md:
      case Xm:
      case Ym:
      case Dd:
      case Ud:
        return this.isSubtype(Km, e);
      case dg:
        return this.isSubtype(Fd, e);
      default:
        return false;
    }
  }
  getReferenceType(r) {
    let e = `${r.container.$type}:${r.property}`;
    switch (e) {
      default:
        throw new Error(`${e} is not a valid reference id.`);
    }
  }
  getTypeMetaData(r) {
    switch (r) {
      case "Architecture":
        return {
          name: "Architecture",
          properties: [
            {
              name: "accDescr"
            },
            {
              name: "accTitle"
            },
            {
              name: "edges",
              defaultValue: []
            },
            {
              name: "groups",
              defaultValue: []
            },
            {
              name: "junctions",
              defaultValue: []
            },
            {
              name: "services",
              defaultValue: []
            },
            {
              name: "title"
            }
          ]
        };
      case "Branch":
        return {
          name: "Branch",
          properties: [
            {
              name: "name"
            },
            {
              name: "order"
            }
          ]
        };
      case "Checkout":
        return {
          name: "Checkout",
          properties: [
            {
              name: "branch"
            }
          ]
        };
      case "CherryPicking":
        return {
          name: "CherryPicking",
          properties: [
            {
              name: "id"
            },
            {
              name: "parent"
            },
            {
              name: "tags",
              defaultValue: []
            }
          ]
        };
      case "Commit":
        return {
          name: "Commit",
          properties: [
            {
              name: "id"
            },
            {
              name: "message"
            },
            {
              name: "tags",
              defaultValue: []
            },
            {
              name: "type"
            }
          ]
        };
      case "Common":
        return {
          name: "Common",
          properties: [
            {
              name: "accDescr"
            },
            {
              name: "accTitle"
            },
            {
              name: "title"
            }
          ]
        };
      case "Edge":
        return {
          name: "Edge",
          properties: [
            {
              name: "lhsDir"
            },
            {
              name: "lhsGroup",
              defaultValue: false
            },
            {
              name: "lhsId"
            },
            {
              name: "lhsInto",
              defaultValue: false
            },
            {
              name: "rhsDir"
            },
            {
              name: "rhsGroup",
              defaultValue: false
            },
            {
              name: "rhsId"
            },
            {
              name: "rhsInto",
              defaultValue: false
            },
            {
              name: "title"
            }
          ]
        };
      case "GitGraph":
        return {
          name: "GitGraph",
          properties: [
            {
              name: "accDescr"
            },
            {
              name: "accTitle"
            },
            {
              name: "statements",
              defaultValue: []
            },
            {
              name: "title"
            }
          ]
        };
      case "Group":
        return {
          name: "Group",
          properties: [
            {
              name: "icon"
            },
            {
              name: "id"
            },
            {
              name: "in"
            },
            {
              name: "title"
            }
          ]
        };
      case "Info":
        return {
          name: "Info",
          properties: [
            {
              name: "accDescr"
            },
            {
              name: "accTitle"
            },
            {
              name: "title"
            }
          ]
        };
      case "Junction":
        return {
          name: "Junction",
          properties: [
            {
              name: "id"
            },
            {
              name: "in"
            }
          ]
        };
      case "Merge":
        return {
          name: "Merge",
          properties: [
            {
              name: "branch"
            },
            {
              name: "id"
            },
            {
              name: "tags",
              defaultValue: []
            },
            {
              name: "type"
            }
          ]
        };
      case "Packet":
        return {
          name: "Packet",
          properties: [
            {
              name: "accDescr"
            },
            {
              name: "accTitle"
            },
            {
              name: "blocks",
              defaultValue: []
            },
            {
              name: "title"
            }
          ]
        };
      case "PacketBlock":
        return {
          name: "PacketBlock",
          properties: [
            {
              name: "end"
            },
            {
              name: "label"
            },
            {
              name: "start"
            }
          ]
        };
      case "Pie":
        return {
          name: "Pie",
          properties: [
            {
              name: "accDescr"
            },
            {
              name: "accTitle"
            },
            {
              name: "sections",
              defaultValue: []
            },
            {
              name: "showData",
              defaultValue: false
            },
            {
              name: "title"
            }
          ]
        };
      case "PieSection":
        return {
          name: "PieSection",
          properties: [
            {
              name: "label"
            },
            {
              name: "value"
            }
          ]
        };
      case "Service":
        return {
          name: "Service",
          properties: [
            {
              name: "icon"
            },
            {
              name: "iconText"
            },
            {
              name: "id"
            },
            {
              name: "in"
            },
            {
              name: "title"
            }
          ]
        };
      case "Direction":
        return {
          name: "Direction",
          properties: [
            {
              name: "accDescr"
            },
            {
              name: "accTitle"
            },
            {
              name: "dir"
            },
            {
              name: "statements",
              defaultValue: []
            },
            {
              name: "title"
            }
          ]
        };
      default:
        return {
          name: r,
          properties: []
        };
    }
  }
}, __123 = new WeakMap(), __210 = new WeakMap(), __privateAdd(_nb, __123, m$1(_nb, "MermaidAstReflection")), __privateAdd(_nb, __210, j(_nb, "MermaidAstReflection")), _nb), it = new Gd(), Ld, hg = /* @__PURE__ */ j(() => Ld ?? (Ld = /* @__PURE__ */ Bt('{"$type":"Grammar","isDeclared":true,"name":"Info","imports":[],"rules":[{"$type":"ParserRule","name":"Info","entry":true,"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"TitleAndAccessibilities","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"EOL","fragment":true,"dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}')), "InfoGrammar"), Od, pg = /* @__PURE__ */ j(() => Od ?? (Od = /* @__PURE__ */ Bt(`{"$type":"Grammar","isDeclared":true,"name":"Packet","imports":[],"rules":[{"$type":"ParserRule","name":"Packet","entry":true,"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"packet-beta"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"+"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"?"},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"TitleAndAccessibilities","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"EOL","fragment":true,"dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}`)), "PacketGrammar"), $d, mg = /* @__PURE__ */ j(() => $d ?? ($d = /* @__PURE__ */ Bt('{"$type":"Grammar","isDeclared":true,"name":"Pie","imports":[],"rules":[{"$type":"ParserRule","name":"Pie","entry":true,"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"+"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"PIE_SECTION_LABEL","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]+\\"/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"PIE_SECTION_VALUE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/(0|[1-9][0-9]*)(\\\\.[0-9]+)?/"},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"TitleAndAccessibilities","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"EOL","fragment":true,"dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}')), "PieGrammar"), Pd, gg = /* @__PURE__ */ j(() => Pd ?? (Pd = /* @__PURE__ */ Bt('{"$type":"Grammar","isDeclared":true,"name":"Architecture","imports":[],"rules":[{"$type":"ParserRule","name":"Architecture","entry":true,"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Statement","fragment":true,"definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"LeftPort","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"RightPort","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Arrow","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_ID","definition":{"$type":"RegexToken","regex":"/[\\\\w]+/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TEXT_ICON","definition":{"$type":"RegexToken","regex":"/\\\\(\\"[^\\"]+\\"\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[[\\\\w ]+\\\\]/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/"},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"TitleAndAccessibilities","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"EOL","fragment":true,"dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}')), "ArchitectureGrammar"), bd, yg = /* @__PURE__ */ j(() => bd ?? (bd = /* @__PURE__ */ Bt(`{"$type":"Grammar","isDeclared":true,"name":"GitGraph","interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"rules":[{"$type":"ParserRule","name":"TitleAndAccessibilities","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"EOL","fragment":true,"dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"ParserRule","name":"GitGraph","entry":true,"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+(?=\\\\s)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"types":[],"usedGrammars":[]}`)), "GitGraphGrammar"), Tg = {
  languageId: "info",
  fileExtensions: [
    ".mmd",
    ".mermaid"
  ],
  caseInsensitive: false
}, xg = {
  languageId: "packet",
  fileExtensions: [
    ".mmd",
    ".mermaid"
  ],
  caseInsensitive: false
}, Rg = {
  languageId: "pie",
  fileExtensions: [
    ".mmd",
    ".mermaid"
  ],
  caseInsensitive: false
}, Eg = {
  languageId: "architecture",
  fileExtensions: [
    ".mmd",
    ".mermaid"
  ],
  caseInsensitive: false
}, Ag = {
  languageId: "gitGraph",
  fileExtensions: [
    ".mmd",
    ".mermaid"
  ],
  caseInsensitive: false
}, tC = {
  AstReflection: /* @__PURE__ */ j(() => new Gd(), "AstReflection")
}, rC = {
  Grammar: /* @__PURE__ */ j(() => hg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ j(() => Tg, "LanguageMetaData"),
  parser: {}
}, nC = {
  Grammar: /* @__PURE__ */ j(() => pg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ j(() => xg, "LanguageMetaData"),
  parser: {}
}, iC = {
  Grammar: /* @__PURE__ */ j(() => mg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ j(() => Rg, "LanguageMetaData"),
  parser: {}
}, sC = {
  Grammar: /* @__PURE__ */ j(() => gg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ j(() => Eg, "LanguageMetaData"),
  parser: {}
}, aC = {
  Grammar: /* @__PURE__ */ j(() => yg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ j(() => Ag, "LanguageMetaData"),
  parser: {}
}, vg = /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/, kg = /accTitle[\t ]*:([^\n\r]*)/, Ig = /title([\t ][^\n\r]*|)/, Ng = {
  ACC_DESCR: vg,
  ACC_TITLE: kg,
  TITLE: Ig
}, Sg = (_ob = class extends gr {
  runConverter(r, e, t) {
    let n2 = /* @__PURE__ */ this.runCommonConverter(r, e, t);
    return n2 === void 0 && (n2 = /* @__PURE__ */ this.runCustomConverter(r, e, t)), n2 === void 0 ? super.runConverter(r, e, t) : n2;
  }
  runCommonConverter(r, e, t) {
    let n2 = Ng[r.name];
    if (n2 === void 0) return;
    let i = /* @__PURE__ */ n2.exec(e);
    if (i !== null) {
      if (i[1] !== void 0) return i[1].trim().replace(/[\t ]{2,}/gm, " ");
      if (i[2] !== void 0) return i[2].replace(/^\s*/gm, "").replace(/\s+$/gm, "").replace(/[\t ]{2,}/gm, " ").replace(/[\n\r]{2,}/gm, `
`);
    }
  }
}, __124 = new WeakMap(), __211 = new WeakMap(), __privateAdd(_ob, __124, m$1(_ob, "AbstractMermaidValueConverter")), __privateAdd(_ob, __211, j(_ob, "AbstractMermaidValueConverter")), _ob), lC = (_pb = class extends Sg {
  runCustomConverter(r, e, t) {
  }
}, __125 = new WeakMap(), __212 = new WeakMap(), __privateAdd(_pb, __125, m$1(_pb, "CommonValueConverter")), __privateAdd(_pb, __212, j(_pb, "CommonValueConverter")), _pb), Cg = (_qb = class extends mr {
  constructor(r) {
    super(), this.keywords = new Set(r);
  }
  buildKeywordTokens(r, e, t) {
    let n2 = /* @__PURE__ */ super.buildKeywordTokens(r, e, t);
    return n2.forEach((i) => {
      this.keywords.has(i.name) && i.PATTERN !== void 0 && (i.PATTERN = new RegExp(i.PATTERN.toString() + "(?:(?=%%)|(?!\\S))"));
    }), n2;
  }
}, __126 = new WeakMap(), __213 = new WeakMap(), __privateAdd(_qb, __126, m$1(_qb, "AbstractMermaidTokenBuilder")), __privateAdd(_qb, __213, j(_qb, "AbstractMermaidTokenBuilder")), _qb);
_rb = class extends Cg {
}, __127 = new WeakMap(), __214 = new WeakMap(), __privateAdd(_rb, __127, m$1(_rb, "CommonTokenBuilder")), __privateAdd(_rb, __214, j(_rb, "CommonTokenBuilder")), _rb;
export {
  Cg as C,
  Ql as Q,
  Sg as S,
  Xl as X,
  aC as a,
  iC as i,
  j,
  lC as l,
  nC as n,
  ql as q,
  rC as r,
  sC as s,
  tC as t,
  zs as z
};
