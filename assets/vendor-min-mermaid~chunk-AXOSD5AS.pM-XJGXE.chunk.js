var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a2, __, _b, __2, _c2, __3, _d2, __4, _e2, __5, _f2, __6, _g2, __7, _h2, __8, _i2, __9, _j, __10, _k, __11, _l2, __12, _m2, __13, _n2, __14, _o2, __15, _p2, __16, _q, __17, _r2, __18, _s2, __19, _t2, __20, _u2, __21, _v, __22, _w, __23, _x, __24, _y, __25, _z, __26, _A, __27, _B, __28, _C, __29, _D, __30, _E, __31, _F, __32, _G, __33, _H, __34, _I, __35, _J, __36, _K, __37, _L, __38, _M, __39, _N, __40, _O, __41, _P, __42, _Q, __43, _R, __44, _S, __45, _T, __46, _U, __47, _V, __48, _W, __49, _X, __50, _Y, __51, _Z, __52, __53, __54, _$, __55, _aa, __56, _ba, __57, _ca, __58, _da, __59, _ea, __60, _fa, __61, _ga, __62, _ha, __63, _ia, __64, _ja, __65, _ka, __66, _la, __67, _ma, __68, _na, __69, _oa, __70, _pa, __71, _qa, __72, _ra, __73, _sa, __74, _ta, __75, _ua, __76, _va, __77, _wa, __78, _xa, __79, _ya, __80, _za, __81, _Aa, __82, _Ba, __83, _Ca, __84, _Da, __85, _Ea, __86, _Fa, __87, _Ga, __88, _Ha, __89, _Ia, __90, _Ja, __91, _Ka, __92, _La, __93, _Ma, __94, _Na, __95, _Oa, __96, _Pa, __97, _Qa, __98, _Ra, __99, _Sa, __100, _Ta, __101, _Ua, __102, _Va, __103, _Wa, __104, _Xa, __105, _Ya, __106, _Za, __107, __a, __108, _$a, __109, _ab, __110, _bb, __111, _cb, __112, _db, __113, _eb, __114, _fb, __115, _gb, __116, _hb, __117, _ib, __118, _jb, __119, _kb, __120, _lb, __121, _mb, __122, _nb, __123, _ob, __124, _pb, __125, _qb, __126, __210, _rb, __127, __211, _sb, __128, __212, _tb, __129, __213, _ub, __130, __214;
import { f as fi$1, _ as _f$1, Z as Zr$1, h, J as Jr$1, k as kr, R as Rn$1, D as Df$1, a as De$1, b as fm$1, A as Ai$1, Q as Qr$1, X as Xr$1, c as Qm$1, p as pr$1, z as zi$1, s as sn$1, N as Nf$1, U as Ui$1, T as Tm$1, d as fn$1, y as ym$1, e as s0, g as Ri$1, V as Vi$1, M as Mi$1, i as pm$1, j as cm$1, l as _i$1, K as Ki$1, m as mp$1, n as fp$1, o as lm$1 } from "./vendor-min-mermaid~chunk-5ZJXQJOJ.C1fDHJEj.chunk.js";
import { C as Cr$1 } from "./vendor-min-mermaid~chunk-YPUTD6PB.Df5Nckn-.chunk.js";
import { a as N, Y as Y$1, m as m$2, T } from "./vendor-min-mermaid~chunk-6BY5RJGC.DKNoSLq2.chunk.js";
import { m as m$1, o, p, q as q$1, n } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var rc = /* @__PURE__ */ n((tc) => {
  Object.defineProperty(tc, "__esModule", {
    value: true
  });
  var Zl;
  function ec() {
    if (Zl === void 0) throw new Error("No runtime abstraction layer installed");
    return Zl;
  }
  m$1(ec, "RAL");
  (function(r) {
    function e(t) {
      if (t === void 0) throw new Error("No runtime abstraction layer provided");
      Zl = t;
    }
    m$1(e, "install"), r.install = e;
  })(ec || (ec = {}));
  tc.default = ec;
});
var Pf = /* @__PURE__ */ n((Le) => {
  Object.defineProperty(Le, "__esModule", {
    value: true
  });
  Le.stringArray = Le.array = Le.func = Le.error = Le.number = Le.string = Le.boolean = void 0;
  function jm(r) {
    return r === true || r === false;
  }
  m$1(jm, "boolean");
  Le.boolean = jm;
  function Of(r) {
    return typeof r == "string" || r instanceof String;
  }
  m$1(Of, "string");
  Le.string = Of;
  function Vm(r) {
    return typeof r == "number" || r instanceof Number;
  }
  m$1(Vm, "number");
  Le.number = Vm;
  function Km(r) {
    return r instanceof Error;
  }
  m$1(Km, "error");
  Le.error = Km;
  function Hm(r) {
    return typeof r == "function";
  }
  m$1(Hm, "func");
  Le.func = Hm;
  function $f(r) {
    return Array.isArray(r);
  }
  m$1($f, "array");
  Le.array = $f;
  function zm(r) {
    return $f(r) && r.every((e) => Of(e));
  }
  m$1(zm, "stringArray");
  Le.stringArray = zm;
});
var ic = /* @__PURE__ */ n((jn) => {
  var _a3, __131, _b2, __132;
  Object.defineProperty(jn, "__esModule", {
    value: true
  });
  jn.Emitter = jn.Event = void 0;
  var qm = /* @__PURE__ */ rc(), bf;
  (function(r) {
    let e = {
      dispose() {
      }
    };
    r.None = function() {
      return e;
    };
  })(bf || (jn.Event = bf = {}));
  var nc = (_a3 = class {
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
        (0, qm.default)().console.error(l);
      }
      return t;
    }
    isEmpty() {
      return !this._callbacks || this._callbacks.length === 0;
    }
    dispose() {
      this._callbacks = void 0, this._contexts = void 0;
    }
  }, __131 = new WeakMap(), __privateAdd(_a3, __131, m$1(_a3, "CallbackList")), _a3), Pa = (_b2 = class {
    constructor(e) {
      this._options = e;
    }
    get event() {
      return this._event || (this._event = (e, t, n2) => {
        this._callbacks || (this._callbacks = new nc()), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(e, t);
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
  }, __132 = new WeakMap(), __privateAdd(_b2, __132, m$1(_b2, "Emitter")), _b2);
  jn.Emitter = Pa;
  Pa._noop = function() {
  };
});
var Mf = /* @__PURE__ */ n((Vn) => {
  var _a3, __131, _b2, __132;
  Object.defineProperty(Vn, "__esModule", {
    value: true
  });
  Vn.CancellationTokenSource = Vn.CancellationToken = void 0;
  var Xm = /* @__PURE__ */ rc(), Ym = /* @__PURE__ */ Pf(), sc = /* @__PURE__ */ ic(), ba;
  (function(r) {
    r.None = /* @__PURE__ */ Object.freeze({
      isCancellationRequested: false,
      onCancellationRequested: sc.Event.None
    }), r.Cancelled = /* @__PURE__ */ Object.freeze({
      isCancellationRequested: true,
      onCancellationRequested: sc.Event.None
    });
    function e(t) {
      let n2 = t;
      return n2 && (n2 === r.None || n2 === r.Cancelled || Ym.boolean(n2.isCancellationRequested) && !!n2.onCancellationRequested);
    }
    m$1(e, "is"), r.is = e;
  })(ba || (Vn.CancellationToken = ba = {}));
  var Jm = /* @__PURE__ */ Object.freeze(function(r, e) {
    let t = /* @__PURE__ */ (0, Xm.default)().timer.setTimeout(/* @__PURE__ */ r.bind(e), 0);
    return {
      dispose() {
        t.dispose();
      }
    };
  }), Ma = (_a3 = class {
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
      return this._isCancelled ? Jm : (this._emitter || (this._emitter = new sc.Emitter()), this._emitter.event);
    }
    dispose() {
      this._emitter && (this._emitter.dispose(), this._emitter = void 0);
    }
  }, __131 = new WeakMap(), __privateAdd(_a3, __131, m$1(_a3, "MutableToken")), _a3), ac = (_b2 = class {
    get token() {
      return this._token || (this._token = new Ma()), this._token;
    }
    cancel() {
      this._token ? this._token.cancel() : this._token = ba.Cancelled;
    }
    dispose() {
      this._token ? this._token instanceof Ma && this._token.dispose() : this._token = ba.None;
    }
  }, __132 = new WeakMap(), __privateAdd(_b2, __132, m$1(_b2, "CancellationTokenSource")), _b2);
  Vn.CancellationTokenSource = ac;
});
var de = {};
o(de, {
  AbstractAstReflection: () => Jt,
  AbstractCstNode: () => Wi,
  AbstractLangiumParser: () => ji,
  AbstractParserErrorMessageProvider: () => Oa,
  AbstractThreadedAsyncParser: () => Tc,
  AstUtils: () => Fs,
  BiMap: () => xr,
  Cancellation: () => _,
  CompositeCstNodeImpl: () => gr,
  ContextCache: () => Rr,
  CstNodeBuilder: () => Bi,
  CstUtils: () => _s,
  DEFAULT_TOKENIZE_OPTIONS: () => Wa,
  DONE_RESULT: () => Ce,
  DatatypeSymbol: () => La,
  DefaultAstNodeDescriptionProvider: () => as,
  DefaultAstNodeLocator: () => ls,
  DefaultAsyncParser: () => Ts,
  DefaultCommentProvider: () => ys,
  DefaultConfigurationProvider: () => cs,
  DefaultDocumentBuilder: () => us,
  DefaultDocumentValidator: () => ss,
  DefaultHydrator: () => Rs,
  DefaultIndexManager: () => ds,
  DefaultJsonSerializer: () => rs,
  DefaultLangiumDocumentFactory: () => zi,
  DefaultLangiumDocuments: () => qi,
  DefaultLexer: () => Ar,
  DefaultLexerErrorMessageProvider: () => hs,
  DefaultLinker: () => Xi,
  DefaultNameProvider: () => Yi,
  DefaultReferenceDescriptionProvider: () => os,
  DefaultReferences: () => Ji,
  DefaultScopeComputation: () => Qi,
  DefaultScopeProvider: () => ts,
  DefaultServiceRegistry: () => ns,
  DefaultTokenBuilder: () => Pt,
  DefaultValueConverter: () => Tr,
  DefaultWorkspaceLock: () => xs,
  DefaultWorkspaceManager: () => fs,
  Deferred: () => Ue,
  Disposable: () => Vt,
  DisposableCache: () => qn,
  DocumentCache: () => Ga,
  DocumentState: () => Y,
  DocumentValidator: () => Qe,
  EMPTY_SCOPE: () => Zm,
  EMPTY_STREAM: () => ei,
  EmptyFileSystem: () => Ic,
  EmptyFileSystemProvider: () => Xa,
  ErrorWithLocation: () => tr,
  GrammarAST: () => ci,
  GrammarUtils: () => js,
  IndentationAwareLexer: () => kc,
  IndentationAwareTokenBuilder: () => qa,
  JSDocDocumentationProvider: () => gs,
  LangiumCompletionParser: () => Ki,
  LangiumParser: () => Vi,
  LangiumParserErrorMessageProvider: () => Wn,
  LeafCstNodeImpl: () => mr,
  LexingMode: () => vr,
  MapScope: () => Zi,
  Module: () => Ac,
  MultiMap: () => st,
  OperationCancelled: () => mt,
  ParserWorker: () => xc,
  Reduction: () => Nr,
  RegExpUtils: () => Bs,
  RootCstNodeImpl: () => Bn,
  SimpleCache: () => es,
  StreamImpl: () => Ke,
  StreamScope: () => zn,
  TextDocument: () => Kn,
  TreeStreamImpl: () => lt,
  URI: () => Ge,
  UriUtils: () => Be,
  ValidationCategory: () => Yn,
  ValidationRegistry: () => is,
  ValueConverter: () => pt,
  WorkspaceCache: () => Xn,
  assertUnreachable: () => ut,
  createCompletionParser: () => Jl,
  createDefaultCoreModule: () => Rc,
  createDefaultSharedCoreModule: () => Ec,
  createGrammarConfig: () => el,
  createLangiumParser: () => Ql,
  createParser: () => Hi,
  delayNextTick: () => oc,
  diagnosticData: () => Er,
  eagerLoad: () => rh,
  getDiagnosticRange: () => Kf,
  indentationBuilderDefaultOptions: () => vc,
  inject: () => za,
  interruptAndCheck: () => ue,
  isAstNode: () => le,
  isAstNodeDescription: () => co,
  isAstNodeWithComment: () => uc,
  isCompositeCstNode: () => tt,
  isIMultiModeLexerDefinition: () => fc,
  isJSDoc: () => gc,
  isLeafCstNode: () => Ft,
  isLinkingError: () => Qt,
  isNamed: () => jf,
  isOperationCancelled: () => gt,
  isReference: () => Ee,
  isRootCstNode: () => Zn,
  isTokenTypeArray: () => ja,
  isTokenTypeDictionary: () => dc,
  loadGrammarFromJson: () => Kt,
  parseJSDoc: () => mc,
  prepareLangiumParser: () => Lf,
  setInterruptionPeriod: () => Ff,
  startCancelableOperation: () => Fa,
  stream: () => K,
  toDiagnosticData: () => Hf,
  toDiagnosticSeverity: () => Ba
});
var _s = {};
o(_s, {
  DefaultNameRegexp: () => Cs,
  RangeComparison: () => ct,
  compareRange: () => Gc,
  findCommentNode: () => po,
  findDeclarationNodeAtOffset: () => ph,
  findLeafNodeAtOffset: () => mo,
  findLeafNodeBeforeOffset: () => Bc,
  flattenCst: () => hh,
  getInteriorNodes: () => yh,
  getNextNode: () => mh,
  getPreviousNode: () => jc,
  getStartlineNode: () => gh,
  inRange: () => ho,
  isChildNode: () => fo,
  isCommentNode: () => uo,
  streamCst: () => Zt,
  toDocumentSegment: () => er,
  tokenToRange: () => Sr
});
function le(r) {
  return typeof r == "object" && r !== null && typeof r.$type == "string";
}
m$1(le, "isAstNode");
function Ee(r) {
  return typeof r == "object" && r !== null && typeof r.$refText == "string";
}
m$1(Ee, "isReference");
function co(r) {
  return typeof r == "object" && r !== null && typeof r.name == "string" && typeof r.type == "string" && typeof r.path == "string";
}
m$1(co, "isAstNodeDescription");
function Qt(r) {
  return typeof r == "object" && r !== null && le(r.container) && Ee(r.reference) && typeof r.message == "string";
}
m$1(Qt, "isLinkingError");
var Jt = (_a2 = class {
  constructor() {
    this.subtypes = {}, this.allSubtypes = {};
  }
  isInstance(e, t) {
    return le(e) && this.isSubtype(e.$type, t);
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
function tt(r) {
  return typeof r == "object" && r !== null && Array.isArray(r.content);
}
m$1(tt, "isCompositeCstNode");
function Ft(r) {
  return typeof r == "object" && r !== null && typeof r.tokenType == "object";
}
m$1(Ft, "isLeafCstNode");
function Zn(r) {
  return tt(r) && typeof r.fullText == "string";
}
m$1(Zn, "isRootCstNode");
var Ke = (_b = class {
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
    return new _b(() => ({
      first: /* @__PURE__ */ this.startFn(),
      firstDone: false,
      iterator: /* @__PURE__ */ e[Symbol.iterator]()
    }), (t) => {
      let n2;
      if (!t.firstDone) {
        do
          if (n2 = /* @__PURE__ */ this.nextFn(t.first), !n2.done) return n2;
        while (!n2.done);
        t.firstDone = true;
      }
      do
        if (n2 = /* @__PURE__ */ t.iterator.next(), !n2.done) return n2;
      while (!n2.done);
      return Ce;
    });
  }
  join() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ",";
    let t = /* @__PURE__ */ this.iterator(), n2 = "", i, s = false;
    do
      i = /* @__PURE__ */ t.next(), i.done || (s && (n2 += e), n2 += /* @__PURE__ */ fh(i.value)), s = true;
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
      return n2 ? Ce : {
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
      return Ce;
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
          if (Ss(s)) t.iterator = /* @__PURE__ */ s[Symbol.iterator]();
          else return {
            done: false,
            value: s
          };
        }
      } while (t.iterator);
      return Ce;
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
        if (!i) if (Ss(s)) n2.iterator = /* @__PURE__ */ s[Symbol.iterator]();
        else return {
          done: false,
          value: s
        };
      } while (n2.iterator);
      return Ce;
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
    }), (t) => (t.size++, t.size > e ? Ce : this.nextFn(t.state)));
  }
  distinct(e) {
    return new _b(() => ({
      set: /* @__PURE__ */ new Set(),
      internalState: /* @__PURE__ */ this.startFn()
    }), (t) => {
      let n2;
      do
        if (n2 = /* @__PURE__ */ this.nextFn(t.internalState), !n2.done) {
          let i = e ? e(n2.value) : n2.value;
          if (!t.set.has(i)) return t.set.add(i), n2;
        }
      while (!n2.done);
      return Ce;
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
function fh(r) {
  return typeof r == "string" ? r : typeof r > "u" ? "undefined" : typeof r.toString == "function" ? r.toString() : Object.prototype.toString.call(r);
}
m$1(fh, "toString");
function Ss(r) {
  return !!r && typeof r[Symbol.iterator] == "function";
}
m$1(Ss, "isIterable");
var ei = new Ke(() => {
}, () => Ce), Ce = /* @__PURE__ */ Object.freeze({
  done: true,
  value: void 0
});
function K() {
  for (var _len = arguments.length, r = new Array(_len), _key = 0; _key < _len; _key++) {
    r[_key] = arguments[_key];
  }
  if (r.length === 1) {
    let e = r[0];
    if (e instanceof Ke) return e;
    if (Ss(e)) return new Ke(() => e[Symbol.iterator](), (t) => t.next());
    if (typeof e.length == "number") return new Ke(() => ({
      index: 0
    }), (t) => t.index < e.length ? {
      done: false,
      value: e[t.index++]
    } : Ce);
  }
  return r.length > 1 ? new Ke(() => ({
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
        Ss(t) ? e.iterator = /* @__PURE__ */ t[Symbol.iterator]() : t && typeof t.length == "number" && (e.array = t);
      }
    } while (e.iterator || e.array || e.collIndex < r.length);
    return Ce;
  }) : ei;
}
m$1(K, "stream");
var lt = (_c2 = class extends Ke {
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
      return Ce;
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
}, __3 = new WeakMap(), __privateAdd(_c2, __3, m$1(_c2, "TreeStreamImpl")), _c2), Nr;
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
})(Nr || (Nr = {}));
function Zt(r) {
  return new lt(r, (e) => tt(e) ? e.content : [], {
    includeRoot: true
  });
}
m$1(Zt, "streamCst");
function hh(r) {
  return Zt(r).filter(Ft);
}
m$1(hh, "flattenCst");
function fo(r, e) {
  for (; r.container; ) if (r = r.container, r === e) return true;
  return false;
}
m$1(fo, "isChildNode");
function Sr(r) {
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
m$1(Sr, "tokenToRange");
function er(r) {
  if (!r) return;
  let { offset: e, end: t, range: n2 } = r;
  return {
    range: n2,
    offset: e,
    end: t,
    length: t - e
  };
}
m$1(er, "toDocumentSegment");
var ct;
(function(r) {
  r[r.Before = 0] = "Before", r[r.After = 1] = "After", r[r.OverlapFront = 2] = "OverlapFront", r[r.OverlapBack = 3] = "OverlapBack", r[r.Inside = 4] = "Inside", r[r.Outside = 5] = "Outside";
})(ct || (ct = {}));
function Gc(r, e) {
  if (r.end.line < e.start.line || r.end.line === e.start.line && r.end.character <= e.start.character) return ct.Before;
  if (r.start.line > e.end.line || r.start.line === e.end.line && r.start.character >= e.end.character) return ct.After;
  let t = r.start.line > e.start.line || r.start.line === e.start.line && r.start.character >= e.start.character, n2 = r.end.line < e.end.line || r.end.line === e.end.line && r.end.character <= e.end.character;
  return t && n2 ? ct.Inside : t ? ct.OverlapBack : n2 ? ct.OverlapFront : ct.Outside;
}
m$1(Gc, "compareRange");
function ho(r, e) {
  return Gc(r, e) > ct.After;
}
m$1(ho, "inRange");
var Cs = /^[\w\p{L}]$/u;
function ph(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Cs;
  if (r) {
    if (e > 0) {
      let n2 = e - r.offset, i = /* @__PURE__ */ r.text.charAt(n2);
      t.test(i) || e--;
    }
    return mo(r, e);
  }
}
m$1(ph, "findDeclarationNodeAtOffset");
function po(r, e) {
  if (r) {
    let t = /* @__PURE__ */ jc(r, true);
    if (t && uo(t, e)) return t;
    if (Zn(r)) {
      let n2 = /* @__PURE__ */ r.content.findIndex((i) => !i.hidden);
      for (let i = n2 - 1; i >= 0; i--) {
        let s = r.content[i];
        if (uo(s, e)) return s;
      }
    }
  }
}
m$1(po, "findCommentNode");
function uo(r, e) {
  return Ft(r) && e.includes(r.tokenType.name);
}
m$1(uo, "isCommentNode");
function mo(r, e) {
  if (Ft(r)) return r;
  if (tt(r)) {
    let t = /* @__PURE__ */ Wc(r, e, false);
    if (t) return mo(t, e);
  }
}
m$1(mo, "findLeafNodeAtOffset");
function Bc(r, e) {
  if (Ft(r)) return r;
  if (tt(r)) {
    let t = /* @__PURE__ */ Wc(r, e, true);
    if (t) return Bc(t, e);
  }
}
m$1(Bc, "findLeafNodeBeforeOffset");
function Wc(r, e, t) {
  let n2 = 0, i = r.content.length - 1, s;
  for (; n2 <= i; ) {
    let o2 = /* @__PURE__ */ Math.floor((n2 + i) / 2), l = r.content[o2];
    if (l.offset <= e && l.end > e) return l;
    l.end <= e ? (s = t ? l : void 0, n2 = o2 + 1) : i = o2 - 1;
  }
  return s;
}
m$1(Wc, "binarySearch");
function jc(r) {
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
m$1(jc, "getPreviousNode");
function mh(r) {
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
m$1(mh, "getNextNode");
function gh(r) {
  if (r.range.start.character === 0) return r;
  let e = r.range.start.line, t = r, n2;
  for (; r.container; ) {
    let i = r.container, s = n2 ?? i.content.indexOf(r);
    if (s === 0 ? (r = i, n2 = void 0) : (n2 = s - 1, r = i.content[n2]), r.range.start.line !== e) break;
    t = r;
  }
  return t;
}
m$1(gh, "getStartlineNode");
function yh(r, e) {
  let t = /* @__PURE__ */ Th(r, e);
  return t ? t.parent.content.slice(t.a + 1, t.b) : [];
}
m$1(yh, "getInteriorNodes");
function Th(r, e) {
  let t = /* @__PURE__ */ Uc(r), n2 = /* @__PURE__ */ Uc(e), i;
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
m$1(Th, "getCommonParent");
function Uc(r) {
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
m$1(Uc, "getParentChain");
var js = {};
o(js, {
  findAssignment: () => Jo,
  findNameAssignment: () => Ws,
  findNodeForKeyword: () => Xo,
  findNodeForProperty: () => gi,
  findNodesForKeyword: () => Uh,
  findNodesForKeywordInternal: () => Yo,
  findNodesForProperty: () => zo,
  getActionAtElement: () => Zc,
  getActionType: () => tu,
  getAllReachableRules: () => mi,
  getCrossReferenceTerminal: () => Ko,
  getEntryRule: () => Xc,
  getExplicitRuleType: () => yn,
  getHiddenRules: () => Yc,
  getRuleType: () => Qo,
  getRuleTypeName: () => Vh,
  getTypeName: () => Ti,
  isArrayCardinality: () => Bh,
  isArrayOperator: () => Wh,
  isCommentTerminal: () => Ho,
  isDataType: () => jh,
  isDataTypeRule: () => yi,
  isOptionalCardinality: () => Gh,
  terminalRegex: () => Tn
});
var tr = (_d2 = class extends Error {
  constructor(e, t) {
    super(e ? `${t} at ${e.range.start.line}:${e.range.start.character}` : t);
  }
}, __4 = new WeakMap(), __privateAdd(_d2, __4, m$1(_d2, "ErrorWithLocation")), _d2);
function ut(r) {
  throw new Error("Error! The input value was not handled.");
}
m$1(ut, "assertUnreachable");
var ci = {};
o(ci, {
  AbstractElement: () => wr,
  AbstractRule: () => Cr,
  AbstractType: () => _r,
  Action: () => Xr,
  Alternatives: () => Yr,
  ArrayLiteral: () => Lr,
  ArrayType: () => Or,
  Assignment: () => Jr,
  BooleanLiteral: () => $r,
  CharacterRange: () => Qr,
  Condition: () => ti,
  Conjunction: () => Pr,
  CrossReference: () => Zr,
  Disjunction: () => br,
  EndOfFile: () => en,
  Grammar: () => Mr,
  GrammarImport: () => ni,
  Group: () => tn,
  InferredType: () => Dr,
  Interface: () => Fr,
  Keyword: () => rn,
  LangiumGrammarAstReflection: () => hn,
  LangiumGrammarTerminals: () => xh,
  NamedArgument: () => ii,
  NegatedToken: () => nn,
  Negation: () => Ur,
  NumberLiteral: () => Gr,
  Parameter: () => Br,
  ParameterReference: () => Wr,
  ParserRule: () => jr,
  ReferenceType: () => Vr,
  RegexToken: () => sn,
  ReturnType: () => si,
  RuleCall: () => an,
  SimpleType: () => Kr,
  StringLiteral: () => Hr,
  TerminalAlternatives: () => on,
  TerminalGroup: () => ln,
  TerminalRule: () => rr,
  TerminalRuleCall: () => cn,
  Type: () => zr,
  TypeAttribute: () => ai,
  TypeDefinition: () => ws,
  UnionType: () => qr,
  UnorderedGroup: () => un,
  UntilToken: () => dn,
  ValueLiteral: () => ri,
  Wildcard: () => fn,
  isAbstractElement: () => oi,
  isAbstractRule: () => Rh,
  isAbstractType: () => Eh,
  isAction: () => kt,
  isAlternatives: () => Ps,
  isArrayLiteral: () => Nh,
  isArrayType: () => go,
  isAssignment: () => rt,
  isBooleanLiteral: () => yo,
  isCharacterRange: () => Io,
  isCondition: () => Ah,
  isConjunction: () => To,
  isCrossReference: () => nr,
  isDisjunction: () => xo,
  isEndOfFile: () => No,
  isFeatureName: () => vh,
  isGrammar: () => Sh,
  isGrammarImport: () => Ch,
  isGroup: () => Ut,
  isInferredType: () => Ls,
  isInterface: () => Os,
  isKeyword: () => Ye,
  isNamedArgument: () => _h,
  isNegatedToken: () => So,
  isNegation: () => Ro,
  isNumberLiteral: () => wh,
  isParameter: () => Lh,
  isParameterReference: () => Eo,
  isParserRule: () => _e,
  isPrimitiveType: () => Vc,
  isReferenceType: () => Ao,
  isRegexToken: () => Co,
  isReturnType: () => vo,
  isRuleCall: () => nt,
  isSimpleType: () => $s,
  isStringLiteral: () => Oh,
  isTerminalAlternatives: () => _o,
  isTerminalGroup: () => wo,
  isTerminalRule: () => He,
  isTerminalRuleCall: () => bs,
  isType: () => li,
  isTypeAttribute: () => $h,
  isTypeDefinition: () => kh,
  isUnionType: () => ko,
  isUnorderedGroup: () => Ms,
  isUntilToken: () => Lo,
  isValueLiteral: () => Ih,
  isWildcard: () => Oo,
  reflection: () => L
});
var xh = {
  ID: /\^?[_a-zA-Z][\w_]*/,
  STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,
  NUMBER: /NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,
  RegexLiteral: /\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,
  WS: /\s+/,
  ML_COMMENT: /\/\*[\s\S]*?\*\//,
  SL_COMMENT: /\/\/[^\n\r]*/
}, Cr = "AbstractRule";
function Rh(r) {
  return L.isInstance(r, Cr);
}
m$1(Rh, "isAbstractRule");
var _r = "AbstractType";
function Eh(r) {
  return L.isInstance(r, _r);
}
m$1(Eh, "isAbstractType");
var ti = "Condition";
function Ah(r) {
  return L.isInstance(r, ti);
}
m$1(Ah, "isCondition");
function vh(r) {
  return Vc(r) || r === "current" || r === "entry" || r === "extends" || r === "false" || r === "fragment" || r === "grammar" || r === "hidden" || r === "import" || r === "interface" || r === "returns" || r === "terminal" || r === "true" || r === "type" || r === "infer" || r === "infers" || r === "with" || typeof r == "string" && /\^?[_a-zA-Z][\w_]*/.test(r);
}
m$1(vh, "isFeatureName");
function Vc(r) {
  return r === "string" || r === "number" || r === "boolean" || r === "Date" || r === "bigint";
}
m$1(Vc, "isPrimitiveType");
var ws = "TypeDefinition";
function kh(r) {
  return L.isInstance(r, ws);
}
m$1(kh, "isTypeDefinition");
var ri = "ValueLiteral";
function Ih(r) {
  return L.isInstance(r, ri);
}
m$1(Ih, "isValueLiteral");
var wr = "AbstractElement";
function oi(r) {
  return L.isInstance(r, wr);
}
m$1(oi, "isAbstractElement");
var Lr = "ArrayLiteral";
function Nh(r) {
  return L.isInstance(r, Lr);
}
m$1(Nh, "isArrayLiteral");
var Or = "ArrayType";
function go(r) {
  return L.isInstance(r, Or);
}
m$1(go, "isArrayType");
var $r = "BooleanLiteral";
function yo(r) {
  return L.isInstance(r, $r);
}
m$1(yo, "isBooleanLiteral");
var Pr = "Conjunction";
function To(r) {
  return L.isInstance(r, Pr);
}
m$1(To, "isConjunction");
var br = "Disjunction";
function xo(r) {
  return L.isInstance(r, br);
}
m$1(xo, "isDisjunction");
var Mr = "Grammar";
function Sh(r) {
  return L.isInstance(r, Mr);
}
m$1(Sh, "isGrammar");
var ni = "GrammarImport";
function Ch(r) {
  return L.isInstance(r, ni);
}
m$1(Ch, "isGrammarImport");
var Dr = "InferredType";
function Ls(r) {
  return L.isInstance(r, Dr);
}
m$1(Ls, "isInferredType");
var Fr = "Interface";
function Os(r) {
  return L.isInstance(r, Fr);
}
m$1(Os, "isInterface");
var ii = "NamedArgument";
function _h(r) {
  return L.isInstance(r, ii);
}
m$1(_h, "isNamedArgument");
var Ur = "Negation";
function Ro(r) {
  return L.isInstance(r, Ur);
}
m$1(Ro, "isNegation");
var Gr = "NumberLiteral";
function wh(r) {
  return L.isInstance(r, Gr);
}
m$1(wh, "isNumberLiteral");
var Br = "Parameter";
function Lh(r) {
  return L.isInstance(r, Br);
}
m$1(Lh, "isParameter");
var Wr = "ParameterReference";
function Eo(r) {
  return L.isInstance(r, Wr);
}
m$1(Eo, "isParameterReference");
var jr = "ParserRule";
function _e(r) {
  return L.isInstance(r, jr);
}
m$1(_e, "isParserRule");
var Vr = "ReferenceType";
function Ao(r) {
  return L.isInstance(r, Vr);
}
m$1(Ao, "isReferenceType");
var si = "ReturnType";
function vo(r) {
  return L.isInstance(r, si);
}
m$1(vo, "isReturnType");
var Kr = "SimpleType";
function $s(r) {
  return L.isInstance(r, Kr);
}
m$1($s, "isSimpleType");
var Hr = "StringLiteral";
function Oh(r) {
  return L.isInstance(r, Hr);
}
m$1(Oh, "isStringLiteral");
var rr = "TerminalRule";
function He(r) {
  return L.isInstance(r, rr);
}
m$1(He, "isTerminalRule");
var zr = "Type";
function li(r) {
  return L.isInstance(r, zr);
}
m$1(li, "isType");
var ai = "TypeAttribute";
function $h(r) {
  return L.isInstance(r, ai);
}
m$1($h, "isTypeAttribute");
var qr = "UnionType";
function ko(r) {
  return L.isInstance(r, qr);
}
m$1(ko, "isUnionType");
var Xr = "Action";
function kt(r) {
  return L.isInstance(r, Xr);
}
m$1(kt, "isAction");
var Yr = "Alternatives";
function Ps(r) {
  return L.isInstance(r, Yr);
}
m$1(Ps, "isAlternatives");
var Jr = "Assignment";
function rt(r) {
  return L.isInstance(r, Jr);
}
m$1(rt, "isAssignment");
var Qr = "CharacterRange";
function Io(r) {
  return L.isInstance(r, Qr);
}
m$1(Io, "isCharacterRange");
var Zr = "CrossReference";
function nr(r) {
  return L.isInstance(r, Zr);
}
m$1(nr, "isCrossReference");
var en = "EndOfFile";
function No(r) {
  return L.isInstance(r, en);
}
m$1(No, "isEndOfFile");
var tn = "Group";
function Ut(r) {
  return L.isInstance(r, tn);
}
m$1(Ut, "isGroup");
var rn = "Keyword";
function Ye(r) {
  return L.isInstance(r, rn);
}
m$1(Ye, "isKeyword");
var nn = "NegatedToken";
function So(r) {
  return L.isInstance(r, nn);
}
m$1(So, "isNegatedToken");
var sn = "RegexToken";
function Co(r) {
  return L.isInstance(r, sn);
}
m$1(Co, "isRegexToken");
var an = "RuleCall";
function nt(r) {
  return L.isInstance(r, an);
}
m$1(nt, "isRuleCall");
var on = "TerminalAlternatives";
function _o(r) {
  return L.isInstance(r, on);
}
m$1(_o, "isTerminalAlternatives");
var ln = "TerminalGroup";
function wo(r) {
  return L.isInstance(r, ln);
}
m$1(wo, "isTerminalGroup");
var cn = "TerminalRuleCall";
function bs(r) {
  return L.isInstance(r, cn);
}
m$1(bs, "isTerminalRuleCall");
var un = "UnorderedGroup";
function Ms(r) {
  return L.isInstance(r, un);
}
m$1(Ms, "isUnorderedGroup");
var dn = "UntilToken";
function Lo(r) {
  return L.isInstance(r, dn);
}
m$1(Lo, "isUntilToken");
var fn = "Wildcard";
function Oo(r) {
  return L.isInstance(r, fn);
}
m$1(Oo, "isWildcard");
var hn = (_e2 = class extends Jt {
  getAllTypes() {
    return [
      wr,
      Cr,
      _r,
      Xr,
      Yr,
      Lr,
      Or,
      Jr,
      $r,
      Qr,
      ti,
      Pr,
      Zr,
      br,
      en,
      Mr,
      ni,
      tn,
      Dr,
      Fr,
      rn,
      ii,
      nn,
      Ur,
      Gr,
      Br,
      Wr,
      jr,
      Vr,
      sn,
      si,
      an,
      Kr,
      Hr,
      on,
      ln,
      rr,
      cn,
      zr,
      ai,
      ws,
      qr,
      un,
      dn,
      ri,
      fn
    ];
  }
  computeIsSubtype(e, t) {
    switch (e) {
      case Xr:
      case Yr:
      case Jr:
      case Qr:
      case Zr:
      case en:
      case tn:
      case rn:
      case nn:
      case sn:
      case an:
      case on:
      case ln:
      case cn:
      case un:
      case dn:
      case fn:
        return this.isSubtype(wr, t);
      case Lr:
      case Gr:
      case Hr:
        return this.isSubtype(ri, t);
      case Or:
      case Vr:
      case Kr:
      case qr:
        return this.isSubtype(ws, t);
      case $r:
        return this.isSubtype(ti, t) || this.isSubtype(ri, t);
      case Pr:
      case br:
      case Ur:
      case Wr:
        return this.isSubtype(ti, t);
      case Dr:
      case Fr:
      case zr:
        return this.isSubtype(_r, t);
      case jr:
        return this.isSubtype(Cr, t) || this.isSubtype(_r, t);
      case rr:
        return this.isSubtype(Cr, t);
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
        return _r;
      case "Grammar:hiddenTokens":
      case "ParserRule:hiddenTokens":
      case "RuleCall:rule":
        return Cr;
      case "Grammar:usedGrammars":
        return Mr;
      case "NamedArgument:parameter":
      case "ParameterReference:parameter":
        return Br;
      case "TerminalRuleCall:rule":
        return rr;
      default:
        throw new Error(`${t} is not a valid reference id.`);
    }
  }
  getTypeMetaData(e) {
    switch (e) {
      case wr:
        return {
          name: wr,
          properties: [
            {
              name: "cardinality"
            },
            {
              name: "lookahead"
            }
          ]
        };
      case Lr:
        return {
          name: Lr,
          properties: [
            {
              name: "elements",
              defaultValue: []
            }
          ]
        };
      case Or:
        return {
          name: Or,
          properties: [
            {
              name: "elementType"
            }
          ]
        };
      case $r:
        return {
          name: $r,
          properties: [
            {
              name: "true",
              defaultValue: false
            }
          ]
        };
      case Pr:
        return {
          name: Pr,
          properties: [
            {
              name: "left"
            },
            {
              name: "right"
            }
          ]
        };
      case br:
        return {
          name: br,
          properties: [
            {
              name: "left"
            },
            {
              name: "right"
            }
          ]
        };
      case Mr:
        return {
          name: Mr,
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
      case ni:
        return {
          name: ni,
          properties: [
            {
              name: "path"
            }
          ]
        };
      case Dr:
        return {
          name: Dr,
          properties: [
            {
              name: "name"
            }
          ]
        };
      case Fr:
        return {
          name: Fr,
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
      case ii:
        return {
          name: ii,
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
      case Ur:
        return {
          name: Ur,
          properties: [
            {
              name: "value"
            }
          ]
        };
      case Gr:
        return {
          name: Gr,
          properties: [
            {
              name: "value"
            }
          ]
        };
      case Br:
        return {
          name: Br,
          properties: [
            {
              name: "name"
            }
          ]
        };
      case Wr:
        return {
          name: Wr,
          properties: [
            {
              name: "parameter"
            }
          ]
        };
      case jr:
        return {
          name: jr,
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
      case Vr:
        return {
          name: Vr,
          properties: [
            {
              name: "referenceType"
            }
          ]
        };
      case si:
        return {
          name: si,
          properties: [
            {
              name: "name"
            }
          ]
        };
      case Kr:
        return {
          name: Kr,
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
      case Hr:
        return {
          name: Hr,
          properties: [
            {
              name: "value"
            }
          ]
        };
      case rr:
        return {
          name: rr,
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
      case zr:
        return {
          name: zr,
          properties: [
            {
              name: "name"
            },
            {
              name: "type"
            }
          ]
        };
      case ai:
        return {
          name: ai,
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
      case qr:
        return {
          name: qr,
          properties: [
            {
              name: "types",
              defaultValue: []
            }
          ]
        };
      case Xr:
        return {
          name: Xr,
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
      case Yr:
        return {
          name: Yr,
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
      case Jr:
        return {
          name: Jr,
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
      case Qr:
        return {
          name: Qr,
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
      case Zr:
        return {
          name: Zr,
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
      case en:
        return {
          name: en,
          properties: [
            {
              name: "cardinality"
            },
            {
              name: "lookahead"
            }
          ]
        };
      case tn:
        return {
          name: tn,
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
      case rn:
        return {
          name: rn,
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
      case nn:
        return {
          name: nn,
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
      case sn:
        return {
          name: sn,
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
      case an:
        return {
          name: an,
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
      case on:
        return {
          name: on,
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
      case ln:
        return {
          name: ln,
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
      case cn:
        return {
          name: cn,
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
      case un:
        return {
          name: un,
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
      case dn:
        return {
          name: dn,
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
      case fn:
        return {
          name: fn,
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
}, __5 = new WeakMap(), __privateAdd(_e2, __5, m$1(_e2, "LangiumGrammarAstReflection")), _e2), L = new hn();
var Fs = {};
o(Fs, {
  assignMandatoryProperties: () => bo,
  copyAstNode: () => Po,
  findLocalReferences: () => bh,
  findRootNode: () => ui,
  getContainerOfType: () => ir,
  getDocument: () => we,
  hasContainerOfType: () => Ph,
  linkContentToContainer: () => Ds,
  streamAllContents: () => dt,
  streamAst: () => Je,
  streamContents: () => di,
  streamReferences: () => pn
});
function Ds(r) {
  for (let [e, t] of Object.entries(r)) e.startsWith("$") || (Array.isArray(t) ? t.forEach((n2, i) => {
    le(n2) && (n2.$container = r, n2.$containerProperty = e, n2.$containerIndex = i);
  }) : le(t) && (t.$container = r, t.$containerProperty = e));
}
m$1(Ds, "linkContentToContainer");
function ir(r, e) {
  let t = r;
  for (; t; ) {
    if (e(t)) return t;
    t = t.$container;
  }
}
m$1(ir, "getContainerOfType");
function Ph(r, e) {
  let t = r;
  for (; t; ) {
    if (e(t)) return true;
    t = t.$container;
  }
  return false;
}
m$1(Ph, "hasContainerOfType");
function we(r) {
  let t = ui(r).$document;
  if (!t) throw new Error("AST node has no document.");
  return t;
}
m$1(we, "getDocument");
function ui(r) {
  for (; r.$container; ) r = r.$container;
  return r;
}
m$1(ui, "findRootNode");
function di(r, e) {
  if (!r) throw new Error("Node must be an AstNode.");
  let t = e == null ? void 0 : e.range;
  return new Ke(() => ({
    keys: /* @__PURE__ */ Object.keys(r),
    keyIndex: 0,
    arrayIndex: 0
  }), (n2) => {
    for (; n2.keyIndex < n2.keys.length; ) {
      let i = n2.keys[n2.keyIndex];
      if (!i.startsWith("$")) {
        let s = r[i];
        if (le(s)) {
          if (n2.keyIndex++, $o(s, t)) return {
            done: false,
            value: s
          };
        } else if (Array.isArray(s)) {
          for (; n2.arrayIndex < s.length; ) {
            let o2 = n2.arrayIndex++, l = s[o2];
            if (le(l) && $o(l, t)) return {
              done: false,
              value: l
            };
          }
          n2.arrayIndex = 0;
        }
      }
      n2.keyIndex++;
    }
    return Ce;
  });
}
m$1(di, "streamContents");
function dt(r, e) {
  if (!r) throw new Error("Root node must be an AstNode.");
  return new lt(r, (t) => di(t, e));
}
m$1(dt, "streamAllContents");
function Je(r, e) {
  if (r) {
    if ((e == null ? void 0 : e.range) && !$o(r, e.range)) return new lt(r, () => []);
  } else throw new Error("Root node must be an AstNode.");
  return new lt(r, (t) => di(t, e), {
    includeRoot: true
  });
}
m$1(Je, "streamAst");
function $o(r, e) {
  var t;
  if (!e) return true;
  let n2 = (t = r.$cstNode) === null || t === void 0 ? void 0 : t.range;
  return n2 ? ho(n2, e) : false;
}
m$1($o, "isAstNodeInRange");
function pn(r) {
  return new Ke(() => ({
    keys: /* @__PURE__ */ Object.keys(r),
    keyIndex: 0,
    arrayIndex: 0
  }), (e) => {
    for (; e.keyIndex < e.keys.length; ) {
      let t = e.keys[e.keyIndex];
      if (!t.startsWith("$")) {
        let n2 = r[t];
        if (Ee(n2)) return e.keyIndex++, {
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
            if (Ee(s)) return {
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
    return Ce;
  });
}
m$1(pn, "streamReferences");
function bh(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we(r).parseResult.value;
  let t = [];
  return Je(e).forEach((n2) => {
    pn(n2).forEach((i) => {
      i.reference.ref === r && t.push(i.reference);
    });
  }), K(t);
}
m$1(bh, "findLocalReferences");
function bo(r, e) {
  let t = /* @__PURE__ */ r.getTypeMetaData(e.$type), n2 = e;
  for (let i of t.properties) i.defaultValue !== void 0 && n2[i.name] === void 0 && (n2[i.name] = /* @__PURE__ */ Kc(i.defaultValue));
}
m$1(bo, "assignMandatoryProperties");
function Kc(r) {
  return Array.isArray(r) ? [
    .../* @__PURE__ */ r.map(Kc)
  ] : r;
}
m$1(Kc, "copyDefaultValue");
function Po(r, e) {
  let t = {
    $type: r.$type
  };
  for (let [n2, i] of Object.entries(r)) if (!n2.startsWith("$")) if (le(i)) t[n2] = /* @__PURE__ */ Po(i, e);
  else if (Ee(i)) t[n2] = /* @__PURE__ */ e(t, n2, i.$refNode, i.$refText);
  else if (Array.isArray(i)) {
    let s = [];
    for (let o2 of i) le(o2) ? s.push(/* @__PURE__ */ Po(o2, e)) : Ee(o2) ? s.push(/* @__PURE__ */ e(t, n2, o2.$refNode, o2.$refText)) : s.push(o2);
    t[n2] = s;
  } else t[n2] = i;
  return Ds(t), t;
}
m$1(Po, "copyAstNode");
var Bs = {};
o(Bs, {
  NEWLINE_REGEXP: () => Uo,
  escapeRegExp: () => lr,
  getCaseInsensitivePattern: () => Bo,
  getTerminalParts: () => Fh,
  isMultilineComment: () => Go,
  isWhitespace: () => gn,
  partialMatches: () => Wo,
  partialRegExp: () => qc,
  whitespaceCharacters: () => zc
});
function w(r) {
  return r.charCodeAt(0);
}
m$1(w, "cc");
function Us(r, e) {
  Array.isArray(r) ? r.forEach(function(t) {
    e.push(t);
  }) : e.push(r);
}
m$1(Us, "insertToSet");
function mn(r, e) {
  if (r[e] === true) throw "duplicate flag " + e;
  r[e];
  r[e] = true;
}
m$1(mn, "addFlag");
function sr(r) {
  if (r === void 0) throw Error("Internal Error - Should never get here!");
  return true;
}
m$1(sr, "ASSERT_EXISTS");
function fi() {
  throw Error("Internal Error - Should never get here!");
}
m$1(fi, "ASSERT_NEVER_REACH_HERE");
function Mo(r) {
  return r.type === "Character";
}
m$1(Mo, "isCharacter");
var hi = [];
for (let r = /* @__PURE__ */ w("0"); r <= w("9"); r++) hi.push(r);
var pi = /* @__PURE__ */ [
  /* @__PURE__ */ w("_")
].concat(hi);
for (let r = /* @__PURE__ */ w("a"); r <= w("z"); r++) pi.push(r);
for (let r = /* @__PURE__ */ w("A"); r <= w("Z"); r++) pi.push(r);
var Do = [
  /* @__PURE__ */ w(" "),
  /* @__PURE__ */ w("\f"),
  /* @__PURE__ */ w(`
`),
  /* @__PURE__ */ w("\r"),
  /* @__PURE__ */ w("	"),
  /* @__PURE__ */ w("\v"),
  /* @__PURE__ */ w("	"),
  /* @__PURE__ */ w(" "),
  /* @__PURE__ */ w(" "),
  /* @__PURE__ */ w(" "),
  /* @__PURE__ */ w(" "),
  /* @__PURE__ */ w(" "),
  /* @__PURE__ */ w(" "),
  /* @__PURE__ */ w(" "),
  /* @__PURE__ */ w(" "),
  /* @__PURE__ */ w(" "),
  /* @__PURE__ */ w(" "),
  /* @__PURE__ */ w(" "),
  /* @__PURE__ */ w(" "),
  /* @__PURE__ */ w(" "),
  /* @__PURE__ */ w("\u2028"),
  /* @__PURE__ */ w("\u2029"),
  /* @__PURE__ */ w(" "),
  /* @__PURE__ */ w(" "),
  /* @__PURE__ */ w("　"),
  /* @__PURE__ */ w("\uFEFF")
];
var Mh = /[0-9a-fA-F]/, Gs = /[0-9]/, Dh = /[1-9]/, ar = (_f2 = class {
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
        mn(n2, "global");
        break;
      case "i":
        mn(n2, "ignoreCase");
        break;
      case "m":
        mn(n2, "multiLine");
        break;
      case "u":
        mn(n2, "unicode");
        break;
      case "y":
        mn(n2, "sticky");
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
        sr(t);
        let n2 = /* @__PURE__ */ this.disjunction();
        return this.consumeChar(")"), {
          type: t,
          value: n2,
          loc: /* @__PURE__ */ this.loc(e)
        };
    }
    return fi();
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
        sr(t);
        break;
    }
    if (!(e === true && t === void 0) && sr(t)) return this.peekChar(0) === "?" ? (this.consumeChar("?"), t.greedy = false) : t.greedy = true, t.type = "Quantifier", t.loc = /* @__PURE__ */ this.loc(n2), t;
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
    return e === void 0 && this.isPatternCharacter() && (e = /* @__PURE__ */ this.patternCharacter()), sr(e) ? (e.loc = /* @__PURE__ */ this.loc(t), this.isQuantifier() && (e.quantifier = /* @__PURE__ */ this.quantifier()), e) : fi();
  }
  dotAll() {
    return this.consumeChar("."), {
      type: "Set",
      complement: true,
      value: [
        /* @__PURE__ */ w(`
`),
        /* @__PURE__ */ w("\r"),
        /* @__PURE__ */ w("\u2028"),
        /* @__PURE__ */ w("\u2029")
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
        e = hi;
        break;
      case "D":
        e = hi, t = true;
        break;
      case "s":
        e = Do;
        break;
      case "S":
        e = Do, t = true;
        break;
      case "w":
        e = pi;
        break;
      case "W":
        e = pi, t = true;
        break;
    }
    return sr(e) ? {
      type: "Set",
      value: e,
      complement: t
    } : fi();
  }
  controlEscapeAtom() {
    let e;
    switch (this.popChar()) {
      case "f":
        e = /* @__PURE__ */ w("\f");
        break;
      case "n":
        e = /* @__PURE__ */ w(`
`);
        break;
      case "r":
        e = /* @__PURE__ */ w("\r");
        break;
      case "t":
        e = /* @__PURE__ */ w("	");
        break;
      case "v":
        e = /* @__PURE__ */ w("\v");
        break;
    }
    return sr(e) ? {
      type: "Character",
      value: e
    } : fi();
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
      value: /* @__PURE__ */ w("\0")
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
      value: /* @__PURE__ */ w(e)
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
          value: /* @__PURE__ */ w(e)
        };
    }
  }
  characterClass() {
    let e = [], t = false;
    for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), t = true); this.isClassAtom(); ) {
      let n2 = /* @__PURE__ */ this.classAtom();
      n2.type === "Character";
      if (Mo(n2) && this.isRangeDash()) {
        this.consumeChar("-");
        let s = /* @__PURE__ */ this.classAtom();
        s.type === "Character";
        if (Mo(s)) {
          if (s.value < n2.value) throw Error("Range out of order in character class");
          e.push({
            from: n2.value,
            to: s.value
          });
        } else Us(n2.value, e), e.push(/* @__PURE__ */ w("-")), Us(s.value, e);
      } else Us(n2.value, e);
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
          value: /* @__PURE__ */ w("\b")
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
    if (Dh.test(e) === false) throw Error("Expecting a positive integer");
    for (; Gs.test(/* @__PURE__ */ this.peekChar(0)); ) e += /* @__PURE__ */ this.popChar();
    return parseInt(e, 10);
  }
  integerIncludingZero() {
    let e = /* @__PURE__ */ this.popChar();
    if (Gs.test(e) === false) throw Error("Expecting an integer");
    for (; Gs.test(/* @__PURE__ */ this.peekChar(0)); ) e += /* @__PURE__ */ this.popChar();
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
          value: /* @__PURE__ */ w(e)
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
    return Gs.test(/* @__PURE__ */ this.peekChar(0));
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
      if (Mh.test(s) === false) throw Error("Expecting a HexDecimal digits");
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
var ft = (_g2 = class {
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
}, __7 = new WeakMap(), __privateAdd(_g2, __7, m$1(_g2, "BaseRegExpVisitor")), _g2);
var Uo = /\r?\n/gm, Hc = new ar(), Fo = (_h2 = class extends ft {
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
      let n2 = /* @__PURE__ */ lr(t);
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
}, __8 = new WeakMap(), __privateAdd(_h2, __8, m$1(_h2, "TerminalRegExpVisitor")), _h2), or = new Fo();
function Fh(r) {
  try {
    typeof r != "string" && (r = r.source), r = `/${r}/`;
    let e = /* @__PURE__ */ Hc.pattern(r), t = [];
    for (let n2 of e.value.value) or.reset(r), or.visit(n2), t.push({
      start: or.startRegexp,
      end: or.endRegex
    });
    return t;
  } catch {
    return [];
  }
}
m$1(Fh, "getTerminalParts");
function Go(r) {
  try {
    return typeof r == "string" && (r = new RegExp(r)), r = /* @__PURE__ */ r.toString(), or.reset(r), or.visit(/* @__PURE__ */ Hc.pattern(r)), or.multiline;
  } catch {
    return false;
  }
}
m$1(Go, "isMultilineComment");
var zc = /* @__PURE__ */ `\f
\r	\v              \u2028\u2029  　\uFEFF`.split("");
function gn(r) {
  let e = typeof r == "string" ? new RegExp(r) : r;
  return zc.some((t) => e.test(t));
}
m$1(gn, "isWhitespace");
function lr(r) {
  return r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
m$1(lr, "escapeRegExp");
function Bo(r) {
  return Array.prototype.map.call(r, (e) => /\w/.test(e) ? `[${e.toLowerCase()}${e.toUpperCase()}]` : lr(e)).join("");
}
m$1(Bo, "getCaseInsensitivePattern");
function Wo(r, e) {
  let t = /* @__PURE__ */ qc(r), n2 = /* @__PURE__ */ e.match(t);
  return !!n2 && n2[0].length > 0;
}
m$1(Wo, "partialMatches");
function qc(r) {
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
m$1(qc, "partialRegExp");
function Xc(r) {
  return r.rules.find((e) => _e(e) && e.entry);
}
m$1(Xc, "getEntryRule");
function Yc(r) {
  return r.rules.filter((e) => He(e) && e.hidden);
}
m$1(Yc, "getHiddenRules");
function mi(r, e) {
  let t = /* @__PURE__ */ new Set(), n2 = /* @__PURE__ */ Xc(r);
  if (!n2) return new Set(r.rules);
  let i = /* @__PURE__ */ [
    n2
  ].concat(/* @__PURE__ */ Yc(r));
  for (let o2 of i) Jc(o2, t, e);
  let s = /* @__PURE__ */ new Set();
  for (let o2 of r.rules) (t.has(o2.name) || He(o2) && o2.hidden) && s.add(o2);
  return s;
}
m$1(mi, "getAllReachableRules");
function Jc(r, e, t) {
  e.add(r.name), dt(r).forEach((n2) => {
    if (nt(n2) || t && bs(n2)) {
      let i = n2.rule.ref;
      i && !e.has(i.name) && Jc(i, e, t);
    }
  });
}
m$1(Jc, "ruleDfs");
function Ko(r) {
  if (r.terminal) return r.terminal;
  if (r.type.ref) {
    let e = /* @__PURE__ */ Ws(r.type.ref);
    return e == null ? void 0 : e.terminal;
  }
}
m$1(Ko, "getCrossReferenceTerminal");
function Ho(r) {
  return r.hidden && !gn(/* @__PURE__ */ Tn(r));
}
m$1(Ho, "isCommentTerminal");
function zo(r, e) {
  return !r || !e ? [] : qo(r, e, r.astNode, true);
}
m$1(zo, "findNodesForProperty");
function gi(r, e, t) {
  if (!r || !e) return;
  let n2 = /* @__PURE__ */ qo(r, e, r.astNode, true);
  if (n2.length !== 0) return t !== void 0 ? t = /* @__PURE__ */ Math.max(0, /* @__PURE__ */ Math.min(t, n2.length - 1)) : t = 0, n2[t];
}
m$1(gi, "findNodeForProperty");
function qo(r, e, t, n2) {
  if (!n2) {
    let i = /* @__PURE__ */ ir(r.grammarSource, rt);
    if (i && i.feature === e) return [
      r
    ];
  }
  return tt(r) && r.astNode === t ? r.content.flatMap((i) => qo(i, e, t, false)) : [];
}
m$1(qo, "findNodesForPropertyInternal");
function Uh(r, e) {
  return r ? Yo(r, e, r == null ? void 0 : r.astNode) : [];
}
m$1(Uh, "findNodesForKeyword");
function Xo(r, e, t) {
  if (!r) return;
  let n2 = /* @__PURE__ */ Yo(r, e, r == null ? void 0 : r.astNode);
  if (n2.length !== 0) return t !== void 0 ? t = /* @__PURE__ */ Math.max(0, /* @__PURE__ */ Math.min(t, n2.length - 1)) : t = 0, n2[t];
}
m$1(Xo, "findNodeForKeyword");
function Yo(r, e, t) {
  if (r.astNode !== t) return [];
  if (Ye(r.grammarSource) && r.grammarSource.value === e) return [
    r
  ];
  let n2 = /* @__PURE__ */ Zt(r).iterator(), i, s = [];
  do
    if (i = /* @__PURE__ */ n2.next(), !i.done) {
      let o2 = i.value;
      o2.astNode === t ? Ye(o2.grammarSource) && o2.grammarSource.value === e && s.push(o2) : n2.prune();
    }
  while (!i.done);
  return s;
}
m$1(Yo, "findNodesForKeywordInternal");
function Jo(r) {
  var e;
  let t = r.astNode;
  for (; t === ((e = r.container) === null || e === void 0 ? void 0 : e.astNode); ) {
    let n2 = /* @__PURE__ */ ir(r.grammarSource, rt);
    if (n2) return n2;
    r = r.container;
  }
}
m$1(Jo, "findAssignment");
function Ws(r) {
  let e = r;
  return Ls(e) && (kt(e.$container) ? e = e.$container.$container : _e(e.$container) ? e = e.$container : ut(e.$container)), Qc(r, e, /* @__PURE__ */ new Map());
}
m$1(Ws, "findNameAssignment");
function Qc(r, e, t) {
  var n2;
  function i(s, o2) {
    let l;
    return ir(s, rt) || (l = /* @__PURE__ */ Qc(o2, o2, t)), t.set(r, l), l;
  }
  if (m$1(i, "go"), t.has(r)) return t.get(r);
  t.set(r, void 0);
  for (let s of dt(e)) {
    if (rt(s) && s.feature.toLowerCase() === "name") return t.set(r, s), s;
    if (nt(s) && _e(s.rule.ref)) return i(s, s.rule.ref);
    if ($s(s) && !((n2 = s.typeRef) === null || n2 === void 0) && n2.ref) return i(s, s.typeRef.ref);
  }
}
m$1(Qc, "findNameAssignmentInternal");
function Zc(r) {
  let e = r.$container;
  if (Ut(e)) {
    let t = e.elements, n2 = /* @__PURE__ */ t.indexOf(r);
    for (let i = n2 - 1; i >= 0; i--) {
      let s = t[i];
      if (kt(s)) return s;
      {
        let o2 = /* @__PURE__ */ dt(t[i]).find(kt);
        if (o2) return o2;
      }
    }
  }
  if (oi(e)) return Zc(e);
}
m$1(Zc, "getActionAtElement");
function Gh(r, e) {
  return r === "?" || r === "*" || Ut(e) && !!e.guardCondition;
}
m$1(Gh, "isOptionalCardinality");
function Bh(r) {
  return r === "*" || r === "+";
}
m$1(Bh, "isArrayCardinality");
function Wh(r) {
  return r === "+=";
}
m$1(Wh, "isArrayOperator");
function yi(r) {
  return eu(r, /* @__PURE__ */ new Set());
}
m$1(yi, "isDataTypeRule");
function eu(r, e) {
  if (e.has(r)) return true;
  e.add(r);
  for (let t of dt(r)) if (nt(t)) {
    if (!t.rule.ref || _e(t.rule.ref) && !eu(t.rule.ref, e)) return false;
  } else {
    if (rt(t)) return false;
    if (kt(t)) return false;
  }
  return !!r.definition;
}
m$1(eu, "isDataTypeRuleInternal");
function jh(r) {
  return Vo(r.type, /* @__PURE__ */ new Set());
}
m$1(jh, "isDataType");
function Vo(r, e) {
  if (e.has(r)) return true;
  if (e.add(r), go(r)) return false;
  if (Ao(r)) return false;
  if (ko(r)) return r.types.every((t) => Vo(t, e));
  if ($s(r)) {
    if (r.primitiveType !== void 0) return true;
    if (r.stringType !== void 0) return true;
    if (r.typeRef !== void 0) {
      let t = r.typeRef.ref;
      return li(t) ? Vo(t.type, e) : false;
    } else return false;
  } else return false;
}
m$1(Vo, "isDataTypeInternal");
function yn(r) {
  if (r.inferredType) return r.inferredType.name;
  if (r.dataType) return r.dataType;
  if (r.returnType) {
    let e = r.returnType.ref;
    if (e) {
      if (_e(e)) return e.name;
      if (Os(e) || li(e)) return e.name;
    }
  }
}
m$1(yn, "getExplicitRuleType");
function Ti(r) {
  var e;
  if (_e(r)) return yi(r) ? r.name : (e = /* @__PURE__ */ yn(r)) !== null && e !== void 0 ? e : r.name;
  if (Os(r) || li(r) || vo(r)) return r.name;
  if (kt(r)) {
    let t = /* @__PURE__ */ tu(r);
    if (t) return t;
  } else if (Ls(r)) return r.name;
  throw new Error("Cannot get name of Unknown Type");
}
m$1(Ti, "getTypeName");
function tu(r) {
  var e;
  if (r.inferredType) return r.inferredType.name;
  if (!((e = r.type) === null || e === void 0) && e.ref) return Ti(r.type.ref);
}
m$1(tu, "getActionType");
function Vh(r) {
  var e, t, n2;
  return He(r) ? (t = (e = r.type) === null || e === void 0 ? void 0 : e.name) !== null && t !== void 0 ? t : "string" : yi(r) ? r.name : (n2 = /* @__PURE__ */ yn(r)) !== null && n2 !== void 0 ? n2 : r.name;
}
m$1(Vh, "getRuleTypeName");
function Qo(r) {
  var e, t, n2;
  return He(r) ? (t = (e = r.type) === null || e === void 0 ? void 0 : e.name) !== null && t !== void 0 ? t : "string" : (n2 = /* @__PURE__ */ yn(r)) !== null && n2 !== void 0 ? n2 : r.name;
}
m$1(Qo, "getRuleType");
function Tn(r) {
  let e = {
    s: false,
    i: false,
    u: false
  }, t = /* @__PURE__ */ xn(r.definition, e), n2 = /* @__PURE__ */ Object.entries(e).filter((param) => {
    let [, i] = param;
    return i;
  }).map((param) => {
    let [i] = param;
    return i;
  }).join("");
  return new RegExp(t, n2);
}
m$1(Tn, "terminalRegex");
var Zo = /[\s\S]/.source;
function xn(r, e) {
  if (_o(r)) return Kh(r);
  if (wo(r)) return Hh(r);
  if (Io(r)) return Xh(r);
  if (bs(r)) {
    let t = r.rule.ref;
    if (!t) throw new Error("Missing rule reference.");
    return It(/* @__PURE__ */ xn(t.definition), {
      cardinality: r.cardinality,
      lookahead: r.lookahead
    });
  } else {
    if (So(r)) return qh(r);
    if (Lo(r)) return zh(r);
    if (Co(r)) {
      let t = /* @__PURE__ */ r.regex.lastIndexOf("/"), n2 = /* @__PURE__ */ r.regex.substring(1, t), i = /* @__PURE__ */ r.regex.substring(t + 1);
      return e && (e.i = /* @__PURE__ */ i.includes("i"), e.s = /* @__PURE__ */ i.includes("s"), e.u = /* @__PURE__ */ i.includes("u")), It(n2, {
        cardinality: r.cardinality,
        lookahead: r.lookahead,
        wrap: false
      });
    } else {
      if (Oo(r)) return It(Zo, {
        cardinality: r.cardinality,
        lookahead: r.lookahead
      });
      throw new Error(`Invalid terminal element: ${r == null ? void 0 : r.$type}`);
    }
  }
}
m$1(xn, "abstractElementToRegex");
function Kh(r) {
  return It(/* @__PURE__ */ r.elements.map((e) => xn(e)).join("|"), {
    cardinality: r.cardinality,
    lookahead: r.lookahead
  });
}
m$1(Kh, "terminalAlternativesToRegex");
function Hh(r) {
  return It(/* @__PURE__ */ r.elements.map((e) => xn(e)).join(""), {
    cardinality: r.cardinality,
    lookahead: r.lookahead
  });
}
m$1(Hh, "terminalGroupToRegex");
function zh(r) {
  return It(`${Zo}*?${xn(r.terminal)}`, {
    cardinality: r.cardinality,
    lookahead: r.lookahead
  });
}
m$1(zh, "untilTokenToRegex");
function qh(r) {
  return It(`(?!${xn(r.terminal)})${Zo}*?`, {
    cardinality: r.cardinality,
    lookahead: r.lookahead
  });
}
m$1(qh, "negateTokenToRegex");
function Xh(r) {
  return r.right ? It(`[${jo(r.left)}-${jo(r.right)}]`, {
    cardinality: r.cardinality,
    lookahead: r.lookahead,
    wrap: false
  }) : It(/* @__PURE__ */ jo(r.left), {
    cardinality: r.cardinality,
    lookahead: r.lookahead,
    wrap: false
  });
}
m$1(Xh, "characterRangeToRegex");
function jo(r) {
  return lr(r.value);
}
m$1(jo, "keywordToRegex");
function It(r, e) {
  var t;
  return (e.wrap !== false || e.lookahead) && (r = `(${(t = e.lookahead) !== null && t !== void 0 ? t : ""}${r})`), e.cardinality ? `${r}${e.cardinality}` : r;
}
m$1(It, "withCardinality");
function el(r) {
  let e = [], t = r.Grammar;
  for (let n2 of t.rules) He(n2) && Ho(n2) && Go(/* @__PURE__ */ Tn(n2)) && e.push(n2.name);
  return {
    multilineCommentRules: e,
    nameRegexp: Cs
  };
}
m$1(el, "createGrammarConfig");
function Rn(r) {
  console && console.error && console.error(`Error: ${r}`);
}
m$1(Rn, "PRINT_ERROR");
function xi(r) {
  console && console.warn && console.warn(`Warning: ${r}`);
}
m$1(xi, "PRINT_WARNING");
function Ri(r) {
  let e = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime(), t = /* @__PURE__ */ r();
  return {
    time: (/* @__PURE__ */ new Date()).getTime() - e,
    value: t
  };
}
m$1(Ri, "timer");
function Ei(r) {
  function e() {
  }
  m$1(e, "FakeConstructor"), e.prototype = r;
  let t = new e();
  function n2() {
    return typeof t.bar;
  }
  return m$1(n2, "fakeAccess"), n2(), n2(), r;
}
m$1(Ei, "toFastProperties");
function Yh(r) {
  return Jh(r) ? r.LABEL : r.name;
}
m$1(Yh, "tokenLabel");
function Jh(r) {
  return pr$1(r.LABEL) && r.LABEL !== "";
}
m$1(Jh, "hasTokenLabel");
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
    super([]), this.idx = 1, fi$1(this, /* @__PURE__ */ Tm$1(e, (t) => t !== void 0));
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
    super(e.definition), this.orgText = "", fi$1(this, /* @__PURE__ */ Tm$1(e, (t) => t !== void 0));
  }
}, __11 = new WeakMap(), __privateAdd(_k, __11, m$1(_k, "Rule")), _k), J = (_l2 = class extends ze {
  constructor(e) {
    super(e.definition), this.ignoreAmbiguities = false, fi$1(this, /* @__PURE__ */ Tm$1(e, (t) => t !== void 0));
  }
}, __12 = new WeakMap(), __privateAdd(_l2, __12, m$1(_l2, "Alternative")), _l2), z = (_m2 = class extends ze {
  constructor(e) {
    super(e.definition), this.idx = 1, fi$1(this, /* @__PURE__ */ Tm$1(e, (t) => t !== void 0));
  }
}, __13 = new WeakMap(), __privateAdd(_m2, __13, m$1(_m2, "Option")), _m2), Q = (_n2 = class extends ze {
  constructor(e) {
    super(e.definition), this.idx = 1, fi$1(this, /* @__PURE__ */ Tm$1(e, (t) => t !== void 0));
  }
}, __14 = new WeakMap(), __privateAdd(_n2, __14, m$1(_n2, "RepetitionMandatory")), _n2), Z = (_o2 = class extends ze {
  constructor(e) {
    super(e.definition), this.idx = 1, fi$1(this, /* @__PURE__ */ Tm$1(e, (t) => t !== void 0));
  }
}, __15 = new WeakMap(), __privateAdd(_o2, __15, m$1(_o2, "RepetitionMandatoryWithSeparator")), _o2), F = (_p2 = class extends ze {
  constructor(e) {
    super(e.definition), this.idx = 1, fi$1(this, /* @__PURE__ */ Tm$1(e, (t) => t !== void 0));
  }
}, __16 = new WeakMap(), __privateAdd(_p2, __16, m$1(_p2, "Repetition")), _p2), q = (_q = class extends ze {
  constructor(e) {
    super(e.definition), this.idx = 1, fi$1(this, /* @__PURE__ */ Tm$1(e, (t) => t !== void 0));
  }
}, __17 = new WeakMap(), __privateAdd(_q, __17, m$1(_q, "RepetitionWithSeparator")), _q), X = (_r2 = class extends ze {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    super(e.definition), this.idx = 1, this.ignoreAmbiguities = false, this.hasPredicates = false, fi$1(this, /* @__PURE__ */ Tm$1(e, (t) => t !== void 0));
  }
}, __18 = new WeakMap(), __privateAdd(_r2, __18, m$1(_r2, "Alternation")), _r2), D = (_s2 = class {
  constructor(e) {
    this.idx = 1, fi$1(this, /* @__PURE__ */ Tm$1(e, (t) => t !== void 0));
  }
  accept(e) {
    e.visit(this);
  }
}, __19 = new WeakMap(), __privateAdd(_s2, __19, m$1(_s2, "Terminal")), _s2);
function Vs(r) {
  return Jr$1(r, En);
}
m$1(Vs, "serializeGrammar");
function En(r) {
  function e(t) {
    return Jr$1(t, En);
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
      separator: /* @__PURE__ */ En(new D({
        terminalType: r.separator
      })),
      definition: /* @__PURE__ */ e(r.definition)
    };
    if (r instanceof q) return {
      type: "RepetitionWithSeparator",
      idx: r.idx,
      separator: /* @__PURE__ */ En(new D({
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
        label: /* @__PURE__ */ Yh(r.terminalType),
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
m$1(En, "serializeProduction");
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
function tl(r) {
  return r instanceof J || r instanceof z || r instanceof F || r instanceof Q || r instanceof Z || r instanceof q || r instanceof D || r instanceof Me;
}
m$1(tl, "isSequenceProd");
function cr(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return r instanceof z || r instanceof F || r instanceof q ? true : r instanceof X ? fp$1(r.definition, (n2) => cr(n2, e)) : r instanceof H && pm$1(e, r) ? false : r instanceof ze ? (r instanceof H && e.push(r), Ui$1(r.definition, (n2) => cr(n2, e))) : false;
}
m$1(cr, "isOptionalProd");
function rl(r) {
  return r instanceof X;
}
m$1(rl, "isBranchingProd");
function We(r) {
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
m$1(We, "getProductionDslName");
var Nt = (_u2 = class {
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
    let i = /* @__PURE__ */ ru(e, t, n2);
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
    let i = /* @__PURE__ */ ru(e, t, n2);
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
function ru(r, e, t) {
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
m$1(ru, "restForRepetitionWithSeparator");
function ur(r) {
  if (r instanceof H) return ur(r.referencedRule);
  if (r instanceof D) return ep(r);
  if (tl(r)) return Qh(r);
  if (rl(r)) return Zh(r);
  throw Error("non exhaustive match");
}
m$1(ur, "first");
function Qh(r) {
  let e = [], t = r.definition, n2 = 0, i = t.length > n2, s, o2 = true;
  for (; i && o2; ) s = t[n2], o2 = /* @__PURE__ */ cr(s), e = /* @__PURE__ */ e.concat(/* @__PURE__ */ ur(s)), n2 = n2 + 1, i = t.length > n2;
  return mp$1(e);
}
m$1(Qh, "firstForSequence");
function Zh(r) {
  let e = /* @__PURE__ */ Jr$1(r.definition, (t) => ur(t));
  return mp$1(/* @__PURE__ */ Qr$1(e));
}
m$1(Zh, "firstForBranching");
function ep(r) {
  return [
    r.terminalType
  ];
}
m$1(ep, "firstForTerminal");
var Ks = "_~IN~_";
var nl = (_v = class extends Nt {
  constructor(e) {
    super(), this.topProd = e, this.follows = {};
  }
  startWalking() {
    return this.walk(this.topProd), this.follows;
  }
  walkTerminal(e, t, n2) {
  }
  walkProdRef(e, t, n2) {
    let i = tp(e.referencedRule, e.idx) + this.topProd.name, s = /* @__PURE__ */ t.concat(n2), o2 = new J({
      definition: s
    }), l = /* @__PURE__ */ ur(o2);
    this.follows[i] = l;
  }
}, __22 = new WeakMap(), __privateAdd(_v, __22, m$1(_v, "ResyncFollowsWalker")), _v);
function nu(r) {
  let e = {};
  return Zr$1(r, (t) => {
    let n2 = /* @__PURE__ */ new nl(t).startWalking();
    fi$1(e, n2);
  }), e;
}
m$1(nu, "computeAllProdsFollows");
function tp(r, e) {
  return r.name + e + Ks;
}
m$1(tp, "buildBetweenProdsFollowPrefix");
var Hs = {}, rp = new ar();
function An(r) {
  let e = /* @__PURE__ */ r.toString();
  if (Hs.hasOwnProperty(e)) return Hs[e];
  {
    let t = /* @__PURE__ */ rp.pattern(e);
    return Hs[e] = t, t;
  }
}
m$1(An, "getRegExpAst");
function iu() {
  Hs = {};
}
m$1(iu, "clearRegExpParserCache");
var au = "Complement Sets are not supported for first char optimization", Ai = `Unable to use "first char" lexer optimizations:
`;
function ou(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  try {
    let t = /* @__PURE__ */ An(r);
    return il(t.value, {}, t.flags.ignoreCase);
  } catch (t) {
    if (t.message === au) e && xi(`${Ai}	Unable to optimize: < ${r.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
    else {
      let n2 = "";
      e && (n2 = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), Rn(`${Ai}
	Failed parsing: < ${r.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + n2);
    }
  }
  return [];
}
m$1(ou, "getOptimizedStartCodesIndices");
function il(r, e, t) {
  switch (r.type) {
    case "Disjunction":
      for (let i = 0; i < r.value.length; i++) il(r.value[i], e, t);
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
            zs(o2.value, e, t);
            break;
          case "Set":
            if (o2.complement === true) throw Error(au);
            Zr$1(o2.value, (c) => {
              if (typeof c == "number") zs(c, e, t);
              else {
                let u = c;
                if (t === true) for (let d = u.from; d <= u.to; d++) zs(d, e, t);
                else {
                  for (let d = u.from; d <= u.to && d < vn; d++) zs(d, e, t);
                  if (u.to >= vn) {
                    let d = u.from >= vn ? u.from : vn, f = u.to, h2 = /* @__PURE__ */ ht(d), p2 = /* @__PURE__ */ ht(f);
                    for (let g = h2; g <= p2; g++) e[g] = g;
                  }
                }
              }
            });
            break;
          case "Group":
            il(o2.value, e, t);
            break;
          default:
            throw Error("Non Exhaustive Match");
        }
        let l = o2.quantifier !== void 0 && o2.quantifier.atLeast === 0;
        if (o2.type === "Group" && sl(o2) === false || o2.type !== "Group" && l === false) break;
      }
      break;
    default:
      throw Error("non exhaustive match!");
  }
  return Xr$1(e);
}
m$1(il, "firstCharOptimizedIndices");
function zs(r, e, t) {
  let n2 = /* @__PURE__ */ ht(r);
  e[n2] = n2, t === true && np(r, e);
}
m$1(zs, "addOptimizedIdxToResult");
function np(r, e) {
  let t = /* @__PURE__ */ String.fromCharCode(r), n2 = /* @__PURE__ */ t.toUpperCase();
  if (n2 !== t) {
    let i = /* @__PURE__ */ ht(/* @__PURE__ */ n2.charCodeAt(0));
    e[i] = i;
  } else {
    let i = /* @__PURE__ */ t.toLowerCase();
    if (i !== t) {
      let s = /* @__PURE__ */ ht(/* @__PURE__ */ i.charCodeAt(0));
      e[s] = s;
    }
  }
}
m$1(np, "handleIgnoreCase");
function su(r, e) {
  return Ki$1(r.value, (t) => {
    if (typeof t == "number") return pm$1(e, t);
    {
      let n2 = t;
      return Ki$1(e, (i) => n2.from <= i && i <= n2.to) !== void 0;
    }
  });
}
m$1(su, "findCode");
function sl(r) {
  let e = r.quantifier;
  return e && e.atLeast === 0 ? true : r.value ? N(r.value) ? Ui$1(r.value, sl) : sl(r.value) : false;
}
m$1(sl, "isWholeOptional");
var al = (_w = class extends ft {
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
    e.complement ? su(e, this.targetCharCodes) === void 0 && (this.found = true) : su(e, this.targetCharCodes) !== void 0 && (this.found = true);
  }
}, __23 = new WeakMap(), __privateAdd(_w, __23, m$1(_w, "CharCodeFinder")), _w);
function qs(r, e) {
  if (e instanceof RegExp) {
    let t = /* @__PURE__ */ An(e), n2 = new al(r);
    return n2.visit(t), n2.found;
  } else return Ki$1(e, (t) => pm$1(r, /* @__PURE__ */ t.charCodeAt(0))) !== void 0;
}
m$1(qs, "canMatchCharCode");
var dr = "PATTERN", kn = "defaultMode", Xs = "modes", ll = typeof new RegExp("(?:)").sticky == "boolean";
function uu(r, e) {
  e = /* @__PURE__ */ Nf$1(e, {
    useSticky: ll,
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
    Ep();
  });
  let n2;
  t("Reject Lexer.NA", () => {
    n2 = /* @__PURE__ */ Qm$1(r, (A) => A[dr] === se.NA);
  });
  let i = false, s;
  t("Transform Patterns", () => {
    i = false, s = /* @__PURE__ */ Jr$1(n2, (A) => {
      let x = A[dr];
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
        ], P[1]) ? P[1] : e.useSticky ? cu(x) : lu(x);
      } else {
        if (T(x)) return i = true, {
          exec: x
        };
        if (typeof x == "object") return i = true, x;
        if (typeof x == "string") {
          if (x.length === 1) return x;
          {
            let P = /* @__PURE__ */ x.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), b = new RegExp(P);
            return e.useSticky ? cu(b) : lu(b);
          }
        } else throw Error("non exhaustive match");
      }
    });
  });
  let o2, l, c, u, d;
  t("misc mapping", () => {
    o2 = /* @__PURE__ */ Jr$1(n2, (A) => A.tokenTypeIdx), l = /* @__PURE__ */ Jr$1(n2, (A) => {
      let x = A.GROUP;
      if (x !== se.SKIPPED) {
        if (pr$1(x)) return x;
        if (sn$1(x)) return false;
        throw Error("non exhaustive match");
      }
    }), c = /* @__PURE__ */ Jr$1(n2, (A) => {
      let x = A.LONGER_ALT;
      if (x) return N(x) ? Jr$1(x, (b) => lm$1(n2, b)) : [
        /* @__PURE__ */ lm$1(n2, x)
      ];
    }), u = /* @__PURE__ */ Jr$1(n2, (A) => A.PUSH_MODE), d = /* @__PURE__ */ Jr$1(n2, (A) => fm$1(A, "POP_MODE"));
  });
  let f;
  t("Line Terminator Handling", () => {
    let A = /* @__PURE__ */ Tu(e.lineTerminatorCharacters);
    f = /* @__PURE__ */ Jr$1(n2, (x) => false), e.positionTracking !== "onlyOffset" && (f = /* @__PURE__ */ Jr$1(n2, (x) => fm$1(x, "LINE_BREAKS") ? !!x.LINE_BREAKS : yu(x, A) === false && qs(A, x.PATTERN)));
  });
  let h2, p2, g, y;
  t("Misc Mapping #2", () => {
    h2 = /* @__PURE__ */ Jr$1(n2, mu), p2 = /* @__PURE__ */ Jr$1(s, xp), g = /* @__PURE__ */ Rn$1(n2, (A, x) => {
      let P = x.GROUP;
      return pr$1(P) && P !== se.SKIPPED && (A[P] = []), A;
    }, {}), y = /* @__PURE__ */ Jr$1(s, (A, x) => ({
      pattern: s[x],
      longerAlt: c[x],
      canLineTerminator: f[x],
      isCustom: h2[x],
      short: p2[x],
      group: l[x],
      push: u[x],
      pop: d[x],
      tokenTypeIdx: o2[x],
      tokenType: n2[x]
    }));
  });
  let v = true, R = [];
  return e.safeMode || t("First Char Optimization", () => {
    R = /* @__PURE__ */ Rn$1(n2, (A, x, P) => {
      if (typeof x.PATTERN == "string") {
        let b = /* @__PURE__ */ x.PATTERN.charCodeAt(0), Te = /* @__PURE__ */ ht(b);
        ol(A, Te, y[P]);
      } else if (N(x.START_CHARS_HINT)) {
        let b;
        Zr$1(x.START_CHARS_HINT, (Te) => {
          let kr2 = typeof Te == "string" ? Te.charCodeAt(0) : Te, Ae = /* @__PURE__ */ ht(kr2);
          b !== Ae && (b = Ae, ol(A, Ae, y[P]));
        });
      } else if (cm$1(x.PATTERN)) if (x.PATTERN.unicode) v = false, e.ensureOptimizations && Rn(`${Ai}	Unable to analyze < ${x.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
      else {
        let b = /* @__PURE__ */ ou(x.PATTERN, e.ensureOptimizations);
        Cr$1(b) && (v = false), Zr$1(b, (Te) => {
          ol(A, Te, y[P]);
        });
      }
      else e.ensureOptimizations && Rn(`${Ai}	TokenType: <${x.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), v = false;
      return A;
    }, []);
  }), {
    emptyGroups: g,
    patternIdxToConfig: y,
    charCodeToPatternIdxToConfig: R,
    hasCustom: i,
    canBeOptimized: v
  };
}
m$1(uu, "analyzeTokenTypes");
function du(r, e) {
  let t = [], n2 = /* @__PURE__ */ sp(r);
  t = /* @__PURE__ */ t.concat(n2.errors);
  let i = /* @__PURE__ */ ap(n2.valid), s = i.valid;
  return t = /* @__PURE__ */ t.concat(i.errors), t = /* @__PURE__ */ t.concat(/* @__PURE__ */ ip(s)), t = /* @__PURE__ */ t.concat(/* @__PURE__ */ pp(s)), t = /* @__PURE__ */ t.concat(/* @__PURE__ */ mp(s, e)), t = /* @__PURE__ */ t.concat(/* @__PURE__ */ gp(s)), t;
}
m$1(du, "validatePatterns");
function ip(r) {
  let e = [], t = /* @__PURE__ */ fn$1(r, (n2) => cm$1(n2[dr]));
  return e = /* @__PURE__ */ e.concat(/* @__PURE__ */ lp(t)), e = /* @__PURE__ */ e.concat(/* @__PURE__ */ dp(t)), e = /* @__PURE__ */ e.concat(/* @__PURE__ */ fp(t)), e = /* @__PURE__ */ e.concat(/* @__PURE__ */ hp(t)), e = /* @__PURE__ */ e.concat(/* @__PURE__ */ cp(t)), e;
}
m$1(ip, "validateRegExpPattern");
function sp(r) {
  let e = /* @__PURE__ */ fn$1(r, (i) => !fm$1(i, dr)), t = /* @__PURE__ */ Jr$1(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- missing static 'PATTERN' property",
    type: ie.MISSING_PATTERN,
    tokenTypes: [
      i
    ]
  })), n2 = /* @__PURE__ */ Ri$1(r, e);
  return {
    errors: t,
    valid: n2
  };
}
m$1(sp, "findMissingPatterns");
function ap(r) {
  let e = /* @__PURE__ */ fn$1(r, (i) => {
    let s = i[dr];
    return !cm$1(s) && !T(s) && !fm$1(s, "exec") && !pr$1(s);
  }), t = /* @__PURE__ */ Jr$1(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
    type: ie.INVALID_PATTERN,
    tokenTypes: [
      i
    ]
  })), n2 = /* @__PURE__ */ Ri$1(r, e);
  return {
    errors: t,
    valid: n2
  };
}
m$1(ap, "findInvalidPatterns");
var op = /[^\\][$]/;
function lp(r) {
  var __131;
  const _e3 = class _e3 extends ft {
    constructor() {
      super(...arguments), this.found = false;
    }
    visitEndAnchor(s) {
      this.found = true;
    }
  };
  __131 = new WeakMap();
  __privateAdd(_e3, __131, m$1(_e3, "EndAnchorFinder"));
  let e = _e3;
  let t = /* @__PURE__ */ fn$1(r, (i) => {
    let s = i.PATTERN;
    try {
      let o2 = /* @__PURE__ */ An(s), l = new e();
      return l.visit(o2), l.found;
    } catch {
      return op.test(s.source);
    }
  });
  return Jr$1(t, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: ie.EOI_ANCHOR_FOUND,
    tokenTypes: [
      i
    ]
  }));
}
m$1(lp, "findEndOfInputAnchor");
function cp(r) {
  let e = /* @__PURE__ */ fn$1(r, (n2) => n2.PATTERN.test(""));
  return Jr$1(e, (n2) => ({
    message: "Token Type: ->" + n2.name + "<- static 'PATTERN' must not match an empty string",
    type: ie.EMPTY_MATCH_PATTERN,
    tokenTypes: [
      n2
    ]
  }));
}
m$1(cp, "findEmptyMatchRegExps");
var up = /[^\\[][\^]|^\^/;
function dp(r) {
  var __131;
  const _e3 = class _e3 extends ft {
    constructor() {
      super(...arguments), this.found = false;
    }
    visitStartAnchor(s) {
      this.found = true;
    }
  };
  __131 = new WeakMap();
  __privateAdd(_e3, __131, m$1(_e3, "StartAnchorFinder"));
  let e = _e3;
  let t = /* @__PURE__ */ fn$1(r, (i) => {
    let s = i.PATTERN;
    try {
      let o2 = /* @__PURE__ */ An(s), l = new e();
      return l.visit(o2), l.found;
    } catch {
      return up.test(s.source);
    }
  });
  return Jr$1(t, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: ie.SOI_ANCHOR_FOUND,
    tokenTypes: [
      i
    ]
  }));
}
m$1(dp, "findStartOfInputAnchor");
function fp(r) {
  let e = /* @__PURE__ */ fn$1(r, (n2) => {
    let i = n2[dr];
    return i instanceof RegExp && (i.multiline || i.global);
  });
  return Jr$1(e, (n2) => ({
    message: "Token Type: ->" + n2.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
    type: ie.UNSUPPORTED_FLAGS_FOUND,
    tokenTypes: [
      n2
    ]
  }));
}
m$1(fp, "findUnsupportedFlags");
function hp(r) {
  let e = [], t = /* @__PURE__ */ Jr$1(r, (s) => Rn$1(r, (o2, l) => (s.PATTERN.source === l.PATTERN.source && !pm$1(e, l) && l.PATTERN !== se.NA && (e.push(l), o2.push(l)), o2), []));
  t = /* @__PURE__ */ Ai$1(t);
  let n2 = /* @__PURE__ */ fn$1(t, (s) => s.length > 1);
  return Jr$1(n2, (s) => {
    let o2 = /* @__PURE__ */ Jr$1(s, (c) => c.name);
    return {
      message: `The same RegExp pattern ->${De$1(s).PATTERN}<-has been used in all of the following Token Types: ${o2.join(", ")} <-`,
      type: ie.DUPLICATE_PATTERNS_FOUND,
      tokenTypes: s
    };
  });
}
m$1(hp, "findDuplicatePatterns");
function pp(r) {
  let e = /* @__PURE__ */ fn$1(r, (n2) => {
    if (!fm$1(n2, "GROUP")) return false;
    let i = n2.GROUP;
    return i !== se.SKIPPED && i !== se.NA && !pr$1(i);
  });
  return Jr$1(e, (n2) => ({
    message: "Token Type: ->" + n2.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
    type: ie.INVALID_GROUP_TYPE_FOUND,
    tokenTypes: [
      n2
    ]
  }));
}
m$1(pp, "findInvalidGroupType");
function mp(r, e) {
  let t = /* @__PURE__ */ fn$1(r, (i) => i.PUSH_MODE !== void 0 && !pm$1(e, i.PUSH_MODE));
  return Jr$1(t, (i) => ({
    message: `Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,
    type: ie.PUSH_MODE_DOES_NOT_EXIST,
    tokenTypes: [
      i
    ]
  }));
}
m$1(mp, "findModesThatDoNotExist");
function gp(r) {
  let e = [], t = /* @__PURE__ */ Rn$1(r, (n2, i, s) => {
    let o2 = i.PATTERN;
    return o2 === se.NA || (pr$1(o2) ? n2.push({
      str: o2,
      idx: s,
      tokenType: i
    }) : cm$1(o2) && Tp(o2) && n2.push({
      str: o2.source,
      idx: s,
      tokenType: i
    })), n2;
  }, []);
  return Zr$1(r, (n2, i) => {
    Zr$1(t, (param) => {
      let { str: s, idx: o2, tokenType: l } = param;
      if (i < o2 && yp(s, n2.PATTERN)) {
        let c = `Token: ->${l.name}<- can never be matched.
Because it appears AFTER the Token Type ->${n2.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
        e.push({
          message: c,
          type: ie.UNREACHABLE_PATTERN,
          tokenTypes: [
            n2,
            l
          ]
        });
      }
    });
  }), e;
}
m$1(gp, "findUnreachablePatterns");
function yp(r, e) {
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
m$1(yp, "testTokenType");
function Tp(r) {
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
m$1(Tp, "noMetaChar");
function lu(r) {
  let e = r.ignoreCase ? "i" : "";
  return new RegExp(`^(?:${r.source})`, e);
}
m$1(lu, "addStartOfInput");
function cu(r) {
  let e = r.ignoreCase ? "iy" : "y";
  return new RegExp(`${r.source}`, e);
}
m$1(cu, "addStickyFlag");
function fu(r, e, t) {
  let n2 = [];
  return fm$1(r, kn) || n2.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + kn + `> property in its definition
`,
    type: ie.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
  }), fm$1(r, Xs) || n2.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + Xs + `> property in its definition
`,
    type: ie.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
  }), fm$1(r, Xs) && fm$1(r, kn) && !fm$1(r.modes, r.defaultMode) && n2.push({
    message: `A MultiMode Lexer cannot be initialized with a ${kn}: <${r.defaultMode}>which does not exist
`,
    type: ie.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
  }), fm$1(r, Xs) && Zr$1(r.modes, (i, s) => {
    Zr$1(i, (o2, l) => {
      if (sn$1(o2)) n2.push({
        message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${s}> at index: <${l}>
`,
        type: ie.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
      });
      else if (fm$1(o2, "LONGER_ALT")) {
        let c = N(o2.LONGER_ALT) ? o2.LONGER_ALT : [
          o2.LONGER_ALT
        ];
        Zr$1(c, (u) => {
          !sn$1(u) && !pm$1(i, u) && n2.push({
            message: `A MultiMode Lexer cannot be initialized with a longer_alt <${u.name}> on token <${o2.name}> outside of mode <${s}>
`,
            type: ie.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
          });
        });
      }
    });
  }), n2;
}
m$1(fu, "performRuntimeChecks");
function hu(r, e, t) {
  let n2 = [], i = false, s = /* @__PURE__ */ Ai$1(/* @__PURE__ */ Qr$1(/* @__PURE__ */ Xr$1(r.modes))), o2 = /* @__PURE__ */ Qm$1(s, (c) => c[dr] === se.NA), l = /* @__PURE__ */ Tu(t);
  return e && Zr$1(o2, (c) => {
    let u = /* @__PURE__ */ yu(c, l);
    if (u !== false) {
      let f = {
        message: /* @__PURE__ */ Rp(c, u),
        type: u.issue,
        tokenType: c
      };
      n2.push(f);
    } else fm$1(c, "LINE_BREAKS") ? c.LINE_BREAKS === true && (i = true) : qs(l, c.PATTERN) && (i = true);
  }), e && !i && n2.push({
    message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,
    type: ie.NO_LINE_BREAKS_FLAGS
  }), n2;
}
m$1(hu, "performWarningRuntimeChecks");
function pu(r) {
  let e = {}, t = /* @__PURE__ */ h(r);
  return Zr$1(t, (n2) => {
    let i = r[n2];
    if (N(i)) e[n2] = [];
    else throw Error("non exhaustive match");
  }), e;
}
m$1(pu, "cloneEmptyGroups");
function mu(r) {
  let e = r.PATTERN;
  if (cm$1(e)) return false;
  if (T(e)) return true;
  if (fm$1(e, "exec")) return true;
  if (pr$1(e)) return false;
  throw Error("non exhaustive match");
}
m$1(mu, "isCustomPattern");
function xp(r) {
  return pr$1(r) && r.length === 1 ? r.charCodeAt(0) : false;
}
m$1(xp, "isShortPattern");
var gu = {
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
function yu(r, e) {
  if (fm$1(r, "LINE_BREAKS")) return false;
  if (cm$1(r.PATTERN)) {
    try {
      qs(e, r.PATTERN);
    } catch (t) {
      return {
        issue: ie.IDENTIFY_TERMINATOR,
        errMsg: t.message
      };
    }
    return false;
  } else {
    if (pr$1(r.PATTERN)) return false;
    if (mu(r)) return {
      issue: ie.CUSTOM_LINE_BREAK
    };
    throw Error("non exhaustive match");
  }
}
m$1(yu, "checkLineBreaksIssues");
function Rp(r, e) {
  if (e.issue === ie.IDENTIFY_TERMINATOR) return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${r.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  if (e.issue === ie.CUSTOM_LINE_BREAK) return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${r.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  throw Error("non exhaustive match");
}
m$1(Rp, "buildLineBreakIssueMessage");
function Tu(r) {
  return Jr$1(r, (t) => pr$1(t) ? t.charCodeAt(0) : t);
}
m$1(Tu, "getCharCodes");
function ol(r, e, t) {
  r[e] === void 0 ? r[e] = [
    t
  ] : r[e].push(t);
}
m$1(ol, "addToMapOfArrays");
var vn = 256, Ys = [];
function ht(r) {
  return r < vn ? r : Ys[r];
}
m$1(ht, "charCodeToOptimizedIndex");
function Ep() {
  if (Cr$1(Ys)) {
    Ys = new Array(65536);
    for (let r = 0; r < 65536; r++) Ys[r] = r > 255 ? 255 + ~~(r / 255) : r;
  }
}
m$1(Ep, "initCharCodeToOptimizedIndexMap");
function St(r, e) {
  let t = r.tokenTypeIdx;
  return t === e.tokenTypeIdx ? true : e.isParent === true && e.categoryMatchesMap[t] === true;
}
m$1(St, "tokenStructuredMatcher");
function In(r, e) {
  return r.tokenTypeIdx === e.tokenTypeIdx;
}
m$1(In, "tokenStructuredMatcherNoCategories");
var xu = 1, Eu = {};
function Ct(r) {
  let e = /* @__PURE__ */ Ap(r);
  vp(e), Ip(e), kp(e), Zr$1(e, (t) => {
    t.isParent = t.categoryMatches.length > 0;
  });
}
m$1(Ct, "augmentTokenTypes");
function Ap(r) {
  let e = /* @__PURE__ */ _f$1(r), t = r, n2 = true;
  for (; n2; ) {
    t = /* @__PURE__ */ Ai$1(/* @__PURE__ */ Qr$1(/* @__PURE__ */ Jr$1(t, (s) => s.CATEGORIES)));
    let i = /* @__PURE__ */ Ri$1(t, e);
    e = /* @__PURE__ */ e.concat(i), Cr$1(i) ? n2 = false : t = i;
  }
  return e;
}
m$1(Ap, "expandCategories");
function vp(r) {
  Zr$1(r, (e) => {
    cl(e) || (Eu[xu] = e, e.tokenTypeIdx = xu++), Ru(e) && !N(e.CATEGORIES) && (e.CATEGORIES = [
      e.CATEGORIES
    ]), Ru(e) || (e.CATEGORIES = []), Np(e) || (e.categoryMatches = []), Sp(e) || (e.categoryMatchesMap = {});
  });
}
m$1(vp, "assignTokenDefaultProps");
function kp(r) {
  Zr$1(r, (e) => {
    e.categoryMatches = [], Zr$1(e.categoryMatchesMap, (t, n2) => {
      e.categoryMatches.push(Eu[n2].tokenTypeIdx);
    });
  });
}
m$1(kp, "assignCategoriesTokensProp");
function Ip(r) {
  Zr$1(r, (e) => {
    Au([], e);
  });
}
m$1(Ip, "assignCategoriesMapProp");
function Au(r, e) {
  Zr$1(r, (t) => {
    e.categoryMatchesMap[t.tokenTypeIdx] = true;
  }), Zr$1(e.CATEGORIES, (t) => {
    let n2 = /* @__PURE__ */ r.concat(e);
    pm$1(n2, t) || Au(n2, t);
  });
}
m$1(Au, "singleAssignCategoriesToksMap");
function cl(r) {
  return fm$1(r, "tokenTypeIdx");
}
m$1(cl, "hasShortKeyProperty");
function Ru(r) {
  return fm$1(r, "CATEGORIES");
}
m$1(Ru, "hasCategoriesProperty");
function Np(r) {
  return fm$1(r, "categoryMatches");
}
m$1(Np, "hasExtendingTokensTypesProperty");
function Sp(r) {
  return fm$1(r, "categoryMatchesMap");
}
m$1(Sp, "hasExtendingTokensTypesMapProperty");
function vu(r) {
  return fm$1(r, "tokenTypeIdx");
}
m$1(vu, "isTokenType");
var Nn = {
  buildUnableToPopLexerModeMessage(r) {
    return `Unable to pop Lexer Mode after encountering Token ->${r.image}<- The Mode Stack is empty`;
  },
  buildUnexpectedCharactersMessage(r, e, t, n2, i) {
    return `unexpected character: ->${r.charAt(e)}<- at offset: ${e}, skipped ${t} characters.`;
  }
};
var ie;
(function(r) {
  r[r.MISSING_PATTERN = 0] = "MISSING_PATTERN", r[r.INVALID_PATTERN = 1] = "INVALID_PATTERN", r[r.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", r[r.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", r[r.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", r[r.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", r[r.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", r[r.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", r[r.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", r[r.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", r[r.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", r[r.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", r[r.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", r[r.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", r[r.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", r[r.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", r[r.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", r[r.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(ie || (ie = {}));
var vi = {
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
  errorMessageProvider: Nn,
  traceInitPerf: false,
  skipValidations: false,
  recoveryEnabled: true
};
Object.freeze(vi);
var se = (_x = class {
  constructor(e, t = vi) {
    if (this.lexerDefinition = e, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = true, this.trackEndLines = true, this.hasCustom = false, this.canModeBeOptimized = {}, this.TRACE_INIT = (i, s) => {
      if (this.traceInitPerf === true) {
        this.traceInitIndent++;
        let o2 = /* @__PURE__ */ new Array(this.traceInitIndent + 1).join("	");
        this.traceInitIndent < this.traceInitMaxIdent && console.log(`${o2}--> <${i}>`);
        let { time: l, value: c } = Ri(s), u = l > 10 ? console.warn : console.log;
        return this.traceInitIndent < this.traceInitMaxIdent && u(`${o2}<-- <${i}> time: ${l}ms`), this.traceInitIndent--, c;
      } else return s();
    }, typeof t == "boolean") throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
    this.config = /* @__PURE__ */ fi$1({}, vi, t);
    let n2 = this.config.traceInitPerf;
    n2 === true ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = true) : typeof n2 == "number" && (this.traceInitMaxIdent = n2, this.traceInitPerf = true), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", () => {
      let i, s = true;
      this.TRACE_INIT("Lexer Config handling", () => {
        if (this.config.lineTerminatorsPattern === vi.lineTerminatorsPattern) this.config.lineTerminatorsPattern = gu;
        else if (this.config.lineTerminatorCharacters === vi.lineTerminatorCharacters) throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
        if (t.safeMode && t.ensureOptimizations) throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
        this.trackStartLines = /* @__PURE__ */ /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /* @__PURE__ */ /full/i.test(this.config.positionTracking), N(e) ? i = {
          modes: {
            defaultMode: /* @__PURE__ */ _f$1(e)
          },
          defaultMode: kn
        } : (s = false, i = /* @__PURE__ */ _f$1(e));
      }), this.config.skipValidations === false && (this.TRACE_INIT("performRuntimeChecks", () => {
        this.lexerDefinitionErrors = /* @__PURE__ */ this.lexerDefinitionErrors.concat(/* @__PURE__ */ fu(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      }), this.TRACE_INIT("performWarningRuntimeChecks", () => {
        this.lexerDefinitionWarning = /* @__PURE__ */ this.lexerDefinitionWarning.concat(/* @__PURE__ */ hu(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      })), i.modes = i.modes ? i.modes : {}, Zr$1(i.modes, (l, c) => {
        i.modes[c] = /* @__PURE__ */ Qm$1(l, (u) => sn$1(u));
      });
      let o2 = /* @__PURE__ */ h(i.modes);
      if (Zr$1(i.modes, (l, c) => {
        this.TRACE_INIT(`Mode: <${c}> processing`, () => {
          if (this.modes.push(c), this.config.skipValidations === false && this.TRACE_INIT("validatePatterns", () => {
            this.lexerDefinitionErrors = /* @__PURE__ */ this.lexerDefinitionErrors.concat(/* @__PURE__ */ du(l, o2));
          }), Cr$1(this.lexerDefinitionErrors)) {
            Ct(l);
            let u;
            this.TRACE_INIT("analyzeTokenTypes", () => {
              u = /* @__PURE__ */ uu(l, {
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
        let c = /* @__PURE__ */ Jr$1(this.lexerDefinitionErrors, (u) => u.message).join(`-----------------------
`);
        throw new Error(`Errors detected in definition of Lexer:
` + c);
      }
      Zr$1(this.lexerDefinitionWarning, (l) => {
        xi(l.message);
      }), this.TRACE_INIT("Choosing sub-methods implementations", () => {
        if (ll ? (this.chopInput = Y$1, this.match = this.matchWithTest) : (this.updateLastIndex = kr, this.match = this.matchWithExec), s && (this.handleModes = kr), this.trackStartLines === false && (this.computeNewColumn = Y$1), this.trackEndLines === false && (this.updateTokenEndLineColumnLocation = kr), /full/i.test(this.config.positionTracking)) this.createTokenInstance = this.createFullToken;
        else if (/onlyStart/i.test(this.config.positionTracking)) this.createTokenInstance = this.createStartOnlyToken;
        else if (/onlyOffset/i.test(this.config.positionTracking)) this.createTokenInstance = this.createOffsetOnlyToken;
        else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
        this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
      }), this.TRACE_INIT("Failed Optimization Warnings", () => {
        let l = /* @__PURE__ */ Rn$1(this.canModeBeOptimized, (c, u, d) => (u === false && c.push(d), c), []);
        if (t.ensureOptimizations && !Cr$1(l)) throw Error(`Lexer Modes: < ${l.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
      }), this.TRACE_INIT("clearRegExpParserCache", () => {
        iu();
      }), this.TRACE_INIT("toFastProperties", () => {
        Ei(this);
      });
    });
  }
  tokenize(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.defaultMode;
    if (!Cr$1(this.lexerDefinitionErrors)) {
      let i = /* @__PURE__ */ Jr$1(this.lexerDefinitionErrors, (s) => s.message).join(`-----------------------
`);
      throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
` + i);
    }
    return this.tokenizeInternal(e, t);
  }
  tokenizeInternal(e, t) {
    let n2, i, s, o2, l, c, u, d, f, h2, p2, g, y, R, A, x = e, P = x.length, b = 0, Te = 0, kr2 = this.hasCustom ? 0 : Math.floor(e.length / 10), Ae = new Array(kr2), bt = [], yt = this.trackStartLines ? 1 : void 0, k = this.trackStartLines ? 1 : void 0, T2 = /* @__PURE__ */ pu(this.emptyGroups), C = this.trackStartLines, S = this.config.lineTerminatorsPattern, V = 0, $ = [], O = [], Oe = [], $e = [];
    Object.freeze($e);
    let ee;
    function Ht() {
      return $;
    }
    m$1(Ht, "getPossiblePatternsSlow");
    function wc(ve) {
      let Xe = /* @__PURE__ */ ht(ve), Ir = O[Xe];
      return Ir === void 0 ? $e : Ir;
    }
    m$1(wc, "getPossiblePatternsOptimized");
    let dh = /* @__PURE__ */ m$1((ve) => {
      if (Oe.length === 1 && ve.tokenType.PUSH_MODE === void 0) {
        let Xe = /* @__PURE__ */ this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(ve);
        bt.push({
          offset: ve.startOffset,
          line: ve.startLine,
          column: ve.startColumn,
          length: ve.image.length,
          message: Xe
        });
      } else {
        Oe.pop();
        let Xe = /* @__PURE__ */ Df$1(Oe);
        $ = this.patternIdxToConfig[Xe], O = this.charCodeToPatternIdxToConfig[Xe], V = $.length;
        let Ir = this.canModeBeOptimized[Xe] && this.config.safeMode === false;
        O && Ir ? ee = wc : ee = Ht;
      }
    }, "pop_mode");
    function Lc(ve) {
      Oe.push(ve), O = this.charCodeToPatternIdxToConfig[ve], $ = this.patternIdxToConfig[ve], V = $.length, V = $.length;
      let Xe = this.canModeBeOptimized[ve] && this.config.safeMode === false;
      O && Xe ? ee = wc : ee = Ht;
    }
    m$1(Lc, "push_mode"), Lc.call(this, t);
    let Ze, Oc = this.config.recoveryEnabled;
    for (; b < P; ) {
      c = null;
      let ve = /* @__PURE__ */ x.charCodeAt(b), Xe = /* @__PURE__ */ ee(ve), Ir = Xe.length;
      for (n2 = 0; n2 < Ir; n2++) {
        Ze = Xe[n2];
        let je = Ze.pattern;
        u = null;
        let Tt = Ze.short;
        if (Tt !== false ? ve === Tt && (c = je) : Ze.isCustom === true ? (A = /* @__PURE__ */ je.exec(x, b, Ae, T2), A !== null ? (c = A[0], A.payload !== void 0 && (u = A.payload)) : c = null) : (this.updateLastIndex(je, b), c = /* @__PURE__ */ this.match(je, e, b)), c !== null) {
          if (l = Ze.longerAlt, l !== void 0) {
            let Mt = l.length;
            for (s = 0; s < Mt; s++) {
              let xt = $[l[s]], zt = xt.pattern;
              if (d = null, xt.isCustom === true ? (A = /* @__PURE__ */ zt.exec(x, b, Ae, T2), A !== null ? (o2 = A[0], A.payload !== void 0 && (d = A.payload)) : o2 = null) : (this.updateLastIndex(zt, b), o2 = /* @__PURE__ */ this.match(zt, e, b)), o2 && o2.length > c.length) {
                c = o2, u = d, Ze = xt;
                break;
              }
            }
          }
          break;
        }
      }
      if (c !== null) {
        if (f = c.length, h2 = Ze.group, h2 !== void 0 && (p2 = Ze.tokenTypeIdx, g = /* @__PURE__ */ this.createTokenInstance(c, b, p2, Ze.tokenType, yt, k, f), this.handlePayload(g, u), h2 === false ? Te = /* @__PURE__ */ this.addToken(Ae, Te, g) : T2[h2].push(g)), e = /* @__PURE__ */ this.chopInput(e, f), b = b + f, k = /* @__PURE__ */ this.computeNewColumn(k, f), C === true && Ze.canLineTerminator === true) {
          let je = 0, Tt, Mt;
          S.lastIndex = 0;
          do
            Tt = /* @__PURE__ */ S.test(c), Tt === true && (Mt = S.lastIndex - 1, je++);
          while (Tt === true);
          je !== 0 && (yt = yt + je, k = f - Mt, this.updateTokenEndLineColumnLocation(g, h2, Mt, je, yt, k, f));
        }
        this.handleModes(Ze, dh, Lc, g);
      } else {
        let je = b, Tt = yt, Mt = k, xt = Oc === false;
        for (; xt === false && b < P; ) for (e = /* @__PURE__ */ this.chopInput(e, 1), b++, i = 0; i < V; i++) {
          let zt = $[i], ao = zt.pattern, $c = zt.short;
          if ($c !== false ? x.charCodeAt(b) === $c && (xt = true) : zt.isCustom === true ? xt = ao.exec(x, b, Ae, T2) !== null : (this.updateLastIndex(ao, b), xt = ao.exec(e) !== null), xt === true) break;
        }
        if (y = b - je, k = /* @__PURE__ */ this.computeNewColumn(k, y), R = /* @__PURE__ */ this.config.errorMessageProvider.buildUnexpectedCharactersMessage(x, je, y, Tt, Mt), bt.push({
          offset: je,
          line: Tt,
          column: Mt,
          length: y,
          message: R
        }), Oc === false) break;
      }
    }
    return this.hasCustom || (Ae.length = Te), {
      tokens: Ae,
      groups: T2,
      errors: bt
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
se.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
se.NA = /NOT_APPLICABLE/;
function _t(r) {
  return ul(r) ? r.LABEL : r.name;
}
m$1(_t, "tokenLabel");
function ul(r) {
  return pr$1(r.LABEL) && r.LABEL !== "";
}
m$1(ul, "hasTokenLabel");
var Cp = "parent", ku = "categories", Iu = "label", Nu = "group", Su = "push_mode", Cu = "pop_mode", _u = "longer_alt", wu = "line_breaks", Lu = "start_chars_hint";
function Gt(r) {
  return _p(r);
}
m$1(Gt, "createToken");
function _p(r) {
  let e = r.pattern, t = {};
  if (t.name = r.name, sn$1(e) || (t.PATTERN = e), fm$1(r, Cp)) throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
  return fm$1(r, ku) && (t.CATEGORIES = r[ku]), Ct([
    t
  ]), fm$1(r, Iu) && (t.LABEL = r[Iu]), fm$1(r, Nu) && (t.GROUP = r[Nu]), fm$1(r, Cu) && (t.POP_MODE = r[Cu]), fm$1(r, Su) && (t.PUSH_MODE = r[Su]), fm$1(r, _u) && (t.LONGER_ALT = r[_u]), fm$1(r, wu) && (t.LINE_BREAKS = r[wu]), fm$1(r, Lu) && (t.START_CHARS_HINT = r[Lu]), t;
}
m$1(_p, "createTokenInternal");
var qe = /* @__PURE__ */ Gt({
  name: "EOF",
  pattern: se.NA
});
Ct([
  qe
]);
function wt(r, e, t, n2, i, s, o2, l) {
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
m$1(wt, "createTokenInstance");
function ki(r, e) {
  return St(r, e);
}
m$1(ki, "tokenMatcher");
var Lt = {
  buildMismatchTokenMessage(param) {
    let { expected: r, actual: e, previous: t, ruleName: n2 } = param;
    return `Expecting ${ul(r) ? `--> ${_t(r)} <--` : `token of type --> ${r.name} <--`} but found --> '${e.image}' <--`;
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
      let c = /* @__PURE__ */ Rn$1(r, (h2, p2) => h2.concat(p2), []), u = /* @__PURE__ */ Jr$1(c, (h2) => `[${Jr$1(h2, (p2) => _t(p2)).join(", ")}]`), f = `one of these possible Token sequences:
${Jr$1(u, (h2, p2) => `  ${p2 + 1}. ${h2}`).join(`
`)}`;
      return s + f + l;
    }
  },
  buildEarlyExitMessage(param) {
    let { expectedIterationPaths: r, actual: e, customUserDescription: t, ruleName: n2 } = param;
    let i = "Expecting: ", o2 = `
but found: '` + De$1(e).image + "'";
    if (t) return i + t + o2;
    {
      let c = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${Jr$1(r, (u) => `[${Jr$1(u, (d) => _t(d)).join(",")}]`).join(" ,")}>`;
      return i + c + o2;
    }
  }
};
Object.freeze(Lt);
var Ou = {
  buildRuleNotFoundError(r, e) {
    return "Invalid grammar, reference to a rule which is not defined: ->" + e.nonTerminalName + `<-
inside top level rule: ->` + r.name + "<-";
  }
}, it = {
  buildDuplicateFoundError(r, e) {
    function t(d) {
      return d instanceof D ? d.terminalType.name : d instanceof H ? d.nonTerminalName : "";
    }
    m$1(t, "getExtraProductionArgument");
    let n2 = r.name, i = /* @__PURE__ */ De$1(e), s = i.idx, o2 = /* @__PURE__ */ We(i), l = /* @__PURE__ */ t(i), c = s > 0, u = `->${o2}${c ? s : ""}<- ${l ? `with argument: ->${l}<-` : ""}
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
    let e = /* @__PURE__ */ Jr$1(r.prefixPath, (i) => _t(i)).join(", "), t = r.alternation.idx === 0 ? "" : r.alternation.idx;
    return `Ambiguous alternatives: <${r.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${t}> inside <${r.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
  },
  buildAlternationAmbiguityError(r) {
    let e = /* @__PURE__ */ Jr$1(r.prefixPath, (i) => _t(i)).join(", "), t = r.alternation.idx === 0 ? "" : r.alternation.idx, n2 = `Ambiguous Alternatives Detected: <${r.ambiguityIndices.join(" ,")}> in <OR${t}> inside <${r.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
    return n2 = n2 + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, n2;
  },
  buildEmptyRepetitionError(r) {
    let e = /* @__PURE__ */ We(r.repetition);
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
    let e = r.topLevelRule.name, t = /* @__PURE__ */ Jr$1(r.leftRecursionPath, (s) => s.name), n2 = `${e} --> ${t.concat([
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
function $u(r, e) {
  let t = new dl(r, e);
  return t.resolveRefs(), t.errors;
}
m$1($u, "resolveGrammar");
var dl = (_y = class extends De {
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
var fl = (_z = class extends Nt {
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
}, __26 = new WeakMap(), __privateAdd(_z, __26, m$1(_z, "AbstractNextPossibleTokensWalker")), _z), Js = (_A = class extends fl {
  constructor(e, t) {
    super(e, t), this.path = t, this.nextTerminalName = "", this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
  }
  walkTerminal(e, t, n2) {
    if (this.isAtEndOfPath && e.terminalType.name === this.nextTerminalName && e.idx === this.nextTerminalOccurrence && !this.found) {
      let i = /* @__PURE__ */ t.concat(n2), s = new J({
        definition: i
      });
      this.possibleTokTypes = /* @__PURE__ */ ur(s), this.found = true;
    }
  }
}, __27 = new WeakMap(), __privateAdd(_A, __27, m$1(_A, "NextAfterTokenWalker")), _A), Sn = (_B = class extends Nt {
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
}, __28 = new WeakMap(), __privateAdd(_B, __28, m$1(_B, "AbstractNextTerminalAfterProductionWalker")), _B), Qs = (_C = class extends Sn {
  walkMany(e, t, n2) {
    if (e.idx === this.occurrence) {
      let i = /* @__PURE__ */ De$1(/* @__PURE__ */ t.concat(n2));
      this.result.isEndOfRule = i === void 0, i instanceof D && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else super.walkMany(e, t, n2);
  }
}, __29 = new WeakMap(), __privateAdd(_C, __29, m$1(_C, "NextTerminalAfterManyWalker")), _C), Ii = (_D = class extends Sn {
  walkManySep(e, t, n2) {
    if (e.idx === this.occurrence) {
      let i = /* @__PURE__ */ De$1(/* @__PURE__ */ t.concat(n2));
      this.result.isEndOfRule = i === void 0, i instanceof D && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else super.walkManySep(e, t, n2);
  }
}, __30 = new WeakMap(), __privateAdd(_D, __30, m$1(_D, "NextTerminalAfterManySepWalker")), _D), Zs = (_E = class extends Sn {
  walkAtLeastOne(e, t, n2) {
    if (e.idx === this.occurrence) {
      let i = /* @__PURE__ */ De$1(/* @__PURE__ */ t.concat(n2));
      this.result.isEndOfRule = i === void 0, i instanceof D && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else super.walkAtLeastOne(e, t, n2);
  }
}, __31 = new WeakMap(), __privateAdd(_E, __31, m$1(_E, "NextTerminalAfterAtLeastOneWalker")), _E), Ni = (_F = class extends Sn {
  walkAtLeastOneSep(e, t, n2) {
    if (e.idx === this.occurrence) {
      let i = /* @__PURE__ */ De$1(/* @__PURE__ */ t.concat(n2));
      this.result.isEndOfRule = i === void 0, i instanceof D && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else super.walkAtLeastOneSep(e, t, n2);
  }
}, __32 = new WeakMap(), __privateAdd(_F, __32, m$1(_F, "NextTerminalAfterAtLeastOneSepWalker")), _F);
function ea(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  t = /* @__PURE__ */ _f$1(t);
  let n2 = [], i = 0;
  function s(l) {
    return l.concat(/* @__PURE__ */ Mi$1(r, i + 1));
  }
  m$1(s, "remainingPathWith");
  function o2(l) {
    let c = /* @__PURE__ */ ea(/* @__PURE__ */ s(l), e, t);
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
m$1(ea, "possiblePathsFrom");
function ta(r, e, t, n2) {
  let i = "EXIT_NONE_TERMINAL", s = [
    i
  ], o2 = "EXIT_ALTERNATIVE", l = false, c = e.length, u = c - n2 - 1, d = [], f = [];
  for (f.push({
    idx: -1,
    def: r,
    ruleStack: [],
    occurrenceStack: []
  }); !Cr$1(f); ) {
    let h2 = /* @__PURE__ */ f.pop();
    if (h2 === o2) {
      l && Df$1(f).idx <= u && f.pop();
      continue;
    }
    let p2 = h2.def, g = h2.idx, y = h2.ruleStack, v = h2.occurrenceStack;
    if (Cr$1(p2)) continue;
    let R = p2[0];
    if (R === i) {
      let A = {
        idx: g,
        def: /* @__PURE__ */ Mi$1(p2),
        ruleStack: /* @__PURE__ */ _i$1(y),
        occurrenceStack: /* @__PURE__ */ _i$1(v)
      };
      f.push(A);
    } else if (R instanceof D) if (g < c - 1) {
      let A = g + 1, x = e[A];
      if (t(x, R.terminalType)) {
        let P = {
          idx: A,
          def: /* @__PURE__ */ Mi$1(p2),
          ruleStack: y,
          occurrenceStack: v
        };
        f.push(P);
      }
    } else if (g === c - 1) d.push({
      nextTokenType: R.terminalType,
      nextTokenOccurrence: R.idx,
      ruleStack: y,
      occurrenceStack: v
    }), l = true;
    else throw Error("non exhaustive match");
    else if (R instanceof H) {
      let A = /* @__PURE__ */ _f$1(y);
      A.push(R.nonTerminalName);
      let x = /* @__PURE__ */ _f$1(v);
      x.push(R.idx);
      let P = {
        idx: g,
        def: /* @__PURE__ */ R.definition.concat(s, /* @__PURE__ */ Mi$1(p2)),
        ruleStack: A,
        occurrenceStack: x
      };
      f.push(P);
    } else if (R instanceof z) {
      let A = {
        idx: g,
        def: /* @__PURE__ */ Mi$1(p2),
        ruleStack: y,
        occurrenceStack: v
      };
      f.push(A), f.push(o2);
      let x = {
        idx: g,
        def: /* @__PURE__ */ R.definition.concat(/* @__PURE__ */ Mi$1(p2)),
        ruleStack: y,
        occurrenceStack: v
      };
      f.push(x);
    } else if (R instanceof Q) {
      let A = new F({
        definition: R.definition,
        idx: R.idx
      }), x = /* @__PURE__ */ R.definition.concat([
        A
      ], /* @__PURE__ */ Mi$1(p2)), P = {
        idx: g,
        def: x,
        ruleStack: y,
        occurrenceStack: v
      };
      f.push(P);
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
      ], /* @__PURE__ */ Mi$1(p2)), b = {
        idx: g,
        def: P,
        ruleStack: y,
        occurrenceStack: v
      };
      f.push(b);
    } else if (R instanceof q) {
      let A = {
        idx: g,
        def: /* @__PURE__ */ Mi$1(p2),
        ruleStack: y,
        occurrenceStack: v
      };
      f.push(A), f.push(o2);
      let x = new D({
        terminalType: R.separator
      }), P = new F({
        definition: /* @__PURE__ */ [
          x
        ].concat(R.definition),
        idx: R.idx
      }), b = /* @__PURE__ */ R.definition.concat([
        P
      ], /* @__PURE__ */ Mi$1(p2)), Te = {
        idx: g,
        def: b,
        ruleStack: y,
        occurrenceStack: v
      };
      f.push(Te);
    } else if (R instanceof F) {
      let A = {
        idx: g,
        def: /* @__PURE__ */ Mi$1(p2),
        ruleStack: y,
        occurrenceStack: v
      };
      f.push(A), f.push(o2);
      let x = new F({
        definition: R.definition,
        idx: R.idx
      }), P = /* @__PURE__ */ R.definition.concat([
        x
      ], /* @__PURE__ */ Mi$1(p2)), b = {
        idx: g,
        def: P,
        ruleStack: y,
        occurrenceStack: v
      };
      f.push(b);
    } else if (R instanceof X) for (let A = R.definition.length - 1; A >= 0; A--) {
      let x = R.definition[A], P = {
        idx: g,
        def: /* @__PURE__ */ x.definition.concat(/* @__PURE__ */ Mi$1(p2)),
        ruleStack: y,
        occurrenceStack: v
      };
      f.push(P), f.push(o2);
    }
    else if (R instanceof J) f.push({
      idx: g,
      def: /* @__PURE__ */ R.definition.concat(/* @__PURE__ */ Mi$1(p2)),
      ruleStack: y,
      occurrenceStack: v
    });
    else if (R instanceof Me) f.push(/* @__PURE__ */ wp(R, g, y, v));
    else throw Error("non exhaustive match");
  }
  return d;
}
m$1(ta, "nextPossibleTokensAfter");
function wp(r, e, t, n2) {
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
m$1(wp, "expandTopLevelRule");
var ae;
(function(r) {
  r[r.OPTION = 0] = "OPTION", r[r.REPETITION = 1] = "REPETITION", r[r.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", r[r.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", r[r.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", r[r.ALTERNATION = 5] = "ALTERNATION";
})(ae || (ae = {}));
function Si(r) {
  if (r instanceof z || r === "Option") return ae.OPTION;
  if (r instanceof F || r === "Repetition") return ae.REPETITION;
  if (r instanceof Q || r === "RepetitionMandatory") return ae.REPETITION_MANDATORY;
  if (r instanceof Z || r === "RepetitionMandatoryWithSeparator") return ae.REPETITION_MANDATORY_WITH_SEPARATOR;
  if (r instanceof q || r === "RepetitionWithSeparator") return ae.REPETITION_WITH_SEPARATOR;
  if (r instanceof X || r === "Alternation") return ae.ALTERNATION;
  throw Error("non exhaustive match");
}
m$1(Si, "getProdType");
function na(r) {
  let { occurrence: e, rule: t, prodType: n2, maxLookahead: i } = r, s = /* @__PURE__ */ Si(n2);
  return s === ae.ALTERNATION ? Cn(e, t, i) : _n(e, t, s, i);
}
m$1(na, "getLookaheadPaths");
function bu(r, e, t, n2, i, s) {
  let o2 = /* @__PURE__ */ Cn(r, e, t), l = Bu(o2) ? In : St;
  return s(o2, n2, l, i);
}
m$1(bu, "buildLookaheadFuncForOr");
function Mu(r, e, t, n2, i, s) {
  let o2 = /* @__PURE__ */ _n(r, e, i, t), l = Bu(o2) ? In : St;
  return s(o2[0], l, n2);
}
m$1(Mu, "buildLookaheadFuncForOptionalProd");
function Du(r, e, t, n2) {
  let i = r.length, s = /* @__PURE__ */ Ui$1(r, (o2) => Ui$1(o2, (l) => l.length === 1));
  if (e) return function(o2) {
    let l = /* @__PURE__ */ Jr$1(o2, (c) => c.GATE);
    for (let c = 0; c < i; c++) {
      let u = r[c], d = u.length, f = l[c];
      if (!(f !== void 0 && f.call(this) === false)) e: for (let h2 = 0; h2 < d; h2++) {
        let p2 = u[h2], g = p2.length;
        for (let y = 0; y < g; y++) {
          let v = /* @__PURE__ */ this.LA(y + 1);
          if (t(v, p2[y]) === false) continue e;
        }
        return c;
      }
    }
  };
  if (s && !n2) {
    let o2 = /* @__PURE__ */ Jr$1(r, (c) => Qr$1(c)), l = /* @__PURE__ */ Rn$1(o2, (c, u, d) => (Zr$1(u, (f) => {
      fm$1(c, f.tokenTypeIdx) || (c[f.tokenTypeIdx] = d), Zr$1(f.categoryMatches, (h2) => {
        fm$1(c, h2) || (c[h2] = d);
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
        let d = l[u], f = d.length;
        for (let h2 = 0; h2 < f; h2++) {
          let p2 = /* @__PURE__ */ this.LA(h2 + 1);
          if (t(p2, d[h2]) === false) continue e;
        }
        return o2;
      }
    }
  };
}
m$1(Du, "buildAlternativesLookAheadFunc");
function Fu(r, e, t) {
  let n2 = /* @__PURE__ */ Ui$1(r, (s) => s.length === 1), i = r.length;
  if (n2 && !t) {
    let s = /* @__PURE__ */ Qr$1(r);
    if (s.length === 1 && Cr$1(s[0].categoryMatches)) {
      let l = s[0].tokenTypeIdx;
      return function() {
        return this.LA(1).tokenTypeIdx === l;
      };
    } else {
      let o2 = /* @__PURE__ */ Rn$1(s, (l, c, u) => (l[c.tokenTypeIdx] = true, Zr$1(c.categoryMatches, (d) => {
        l[d] = true;
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
m$1(Fu, "buildSingleAlternativeLookaheadFunction");
var pl = (_G = class extends Nt {
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
    this.checkIsTarget(e, ae.OPTION, t, n2) || super.walkOption(e, t, n2);
  }
  walkAtLeastOne(e, t, n2) {
    this.checkIsTarget(e, ae.REPETITION_MANDATORY, t, n2) || super.walkOption(e, t, n2);
  }
  walkAtLeastOneSep(e, t, n2) {
    this.checkIsTarget(e, ae.REPETITION_MANDATORY_WITH_SEPARATOR, t, n2) || super.walkOption(e, t, n2);
  }
  walkMany(e, t, n2) {
    this.checkIsTarget(e, ae.REPETITION, t, n2) || super.walkOption(e, t, n2);
  }
  walkManySep(e, t, n2) {
    this.checkIsTarget(e, ae.REPETITION_WITH_SEPARATOR, t, n2) || super.walkOption(e, t, n2);
  }
}, __33 = new WeakMap(), __privateAdd(_G, __33, m$1(_G, "RestDefinitionFinderWalker")), _G), ra = (_H = class extends De {
  constructor(e, t, n2) {
    super(), this.targetOccurrence = e, this.targetProdType = t, this.targetRef = n2, this.result = [];
  }
  checkIsTarget(e, t) {
    e.idx === this.targetOccurrence && this.targetProdType === t && (this.targetRef === void 0 || e === this.targetRef) && (this.result = e.definition);
  }
  visitOption(e) {
    this.checkIsTarget(e, ae.OPTION);
  }
  visitRepetition(e) {
    this.checkIsTarget(e, ae.REPETITION);
  }
  visitRepetitionMandatory(e) {
    this.checkIsTarget(e, ae.REPETITION_MANDATORY);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.checkIsTarget(e, ae.REPETITION_MANDATORY_WITH_SEPARATOR);
  }
  visitRepetitionWithSeparator(e) {
    this.checkIsTarget(e, ae.REPETITION_WITH_SEPARATOR);
  }
  visitAlternation(e) {
    this.checkIsTarget(e, ae.ALTERNATION);
  }
}, __34 = new WeakMap(), __privateAdd(_H, __34, m$1(_H, "InsideDefinitionFinderVisitor")), _H);
function Pu(r) {
  let e = new Array(r);
  for (let t = 0; t < r; t++) e[t] = [];
  return e;
}
m$1(Pu, "initializeArrayOfArrays");
function hl(r) {
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
m$1(hl, "pathToHashKeys");
function Lp(r, e, t) {
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
m$1(Lp, "isUniquePrefixHash");
function Uu(r, e) {
  let t = /* @__PURE__ */ Jr$1(r, (o2) => ea([
    o2
  ], 1)), n2 = /* @__PURE__ */ Pu(t.length), i = /* @__PURE__ */ Jr$1(t, (o2) => {
    let l = {};
    return Zr$1(o2, (c) => {
      let u = /* @__PURE__ */ hl(c.partialPath);
      Zr$1(u, (d) => {
        l[d] = true;
      });
    }), l;
  }), s = t;
  for (let o2 = 1; o2 <= e; o2++) {
    let l = s;
    s = /* @__PURE__ */ Pu(l.length);
    for (let c = 0; c < l.length; c++) {
      let u = l[c];
      for (let d = 0; d < u.length; d++) {
        let f = u[d].partialPath, h2 = u[d].suffixDef, p2 = /* @__PURE__ */ hl(f);
        if (Lp(i, p2, c) || Cr$1(h2) || f.length === e) {
          let y = n2[c];
          if (ia(y, f) === false) {
            y.push(f);
            for (let v = 0; v < p2.length; v++) {
              let R = p2[v];
              i[c][R] = true;
            }
          }
        } else {
          let y = /* @__PURE__ */ ea(h2, o2 + 1, f);
          s[c] = /* @__PURE__ */ s[c].concat(y), Zr$1(y, (v) => {
            let R = /* @__PURE__ */ hl(v.partialPath);
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
m$1(Uu, "lookAheadSequenceFromAlternatives");
function Cn(r, e, t, n2) {
  let i = new ra(r, ae.ALTERNATION, n2);
  return e.accept(i), Uu(i.result, t);
}
m$1(Cn, "getLookaheadPathsForOr");
function _n(r, e, t, n2) {
  let i = new ra(r, t);
  e.accept(i);
  let s = i.result, l = /* @__PURE__ */ new pl(e, r, t).startWalking(), c = new J({
    definition: s
  }), u = new J({
    definition: l
  });
  return Uu([
    c,
    u
  ], n2);
}
m$1(_n, "getLookaheadPathsForOptionalProd");
function ia(r, e) {
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
m$1(ia, "containsPath");
function Gu(r, e) {
  return r.length < e.length && Ui$1(r, (t, n2) => {
    let i = e[n2];
    return t === i || i.categoryMatchesMap[t.tokenTypeIdx];
  });
}
m$1(Gu, "isStrictPrefixOfPath");
function Bu(r) {
  return Ui$1(r, (e) => Ui$1(e, (t) => Ui$1(t, (n2) => Cr$1(n2.categoryMatches))));
}
m$1(Bu, "areTokenCategoriesNotUsed");
function Wu(r) {
  let e = /* @__PURE__ */ r.lookaheadStrategy.validate({
    rules: r.rules,
    tokenTypes: r.tokenTypes,
    grammarName: r.grammarName
  });
  return Jr$1(e, (t) => Object.assign({
    type: ye.CUSTOM_LOOKAHEAD_VALIDATION
  }, t));
}
m$1(Wu, "validateLookahead");
function ju(r, e, t, n2) {
  let i = /* @__PURE__ */ zi$1(r, (c) => Op(c, t)), s = /* @__PURE__ */ Fp(r, e, t), o2 = /* @__PURE__ */ zi$1(r, (c) => bp(c, t)), l = /* @__PURE__ */ zi$1(r, (c) => Pp(c, r, n2, t));
  return i.concat(s, o2, l);
}
m$1(ju, "validateGrammar");
function Op(r, e) {
  let t = new ml();
  r.accept(t);
  let n2 = t.allProductions, i = /* @__PURE__ */ Vi$1(n2, $p), s = /* @__PURE__ */ Tm$1(i, (l) => l.length > 1);
  return Jr$1(/* @__PURE__ */ Xr$1(s), (l) => {
    let c = /* @__PURE__ */ De$1(l), u = /* @__PURE__ */ e.buildDuplicateFoundError(r, l), d = /* @__PURE__ */ We(c), f = {
      message: u,
      type: ye.DUPLICATE_PRODUCTIONS,
      ruleName: r.name,
      dslName: d,
      occurrence: c.idx
    }, h2 = /* @__PURE__ */ Vu(c);
    return h2 && (f.parameter = h2), f;
  });
}
m$1(Op, "validateDuplicateProductions");
function $p(r) {
  return `${We(r)}_#_${r.idx}_#_${Vu(r)}`;
}
m$1($p, "identifyProductionForDuplicates");
function Vu(r) {
  return r instanceof D ? r.terminalType.name : r instanceof H ? r.nonTerminalName : "";
}
m$1(Vu, "getExtraProductionArgument");
var ml = (_I = class extends De {
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
function Pp(r, e, t, n2) {
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
m$1(Pp, "validateRuleDoesNotAlreadyExist");
function Ku(r, e, t) {
  let n2 = [], i;
  return pm$1(e, r) || (i = `Invalid rule override, rule: ->${r}<- cannot be overridden in the grammar: ->${t}<-as it is not defined in any of the super grammars `, n2.push({
    message: i,
    type: ye.INVALID_RULE_OVERRIDE,
    ruleName: r
  })), n2;
}
m$1(Ku, "validateRuleIsOverridden");
function yl(r, e, t) {
  let n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
  let i = [], s = /* @__PURE__ */ sa(e.definition);
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
    ])), u = /* @__PURE__ */ zi$1(c, (d) => {
      let f = /* @__PURE__ */ _f$1(n2);
      return f.push(d), yl(r, d, t, f);
    });
    return i.concat(u);
  }
}
m$1(yl, "validateNoLeftRecursion");
function sa(r) {
  let e = [];
  if (Cr$1(r)) return e;
  let t = /* @__PURE__ */ De$1(r);
  if (t instanceof H) e.push(t.referencedRule);
  else if (t instanceof J || t instanceof z || t instanceof Q || t instanceof Z || t instanceof q || t instanceof F) e = /* @__PURE__ */ e.concat(/* @__PURE__ */ sa(t.definition));
  else if (t instanceof X) e = /* @__PURE__ */ Qr$1(/* @__PURE__ */ Jr$1(t.definition, (s) => sa(s.definition)));
  else if (!(t instanceof D)) throw Error("non exhaustive match");
  let n2 = /* @__PURE__ */ cr(t), i = r.length > 1;
  if (n2 && i) {
    let s = /* @__PURE__ */ Mi$1(r);
    return e.concat(/* @__PURE__ */ sa(s));
  } else return e;
}
m$1(sa, "getFirstNoneTerminal");
var Ci = (_J = class extends De {
  constructor() {
    super(...arguments), this.alternations = [];
  }
  visitAlternation(e) {
    this.alternations.push(e);
  }
}, __36 = new WeakMap(), __privateAdd(_J, __36, m$1(_J, "OrCollector")), _J);
function Hu(r, e) {
  let t = new Ci();
  r.accept(t);
  let n2 = t.alternations;
  return zi$1(n2, (s) => {
    let o2 = /* @__PURE__ */ _i$1(s.definition);
    return zi$1(o2, (l, c) => {
      let u = /* @__PURE__ */ ta([
        l
      ], [], St, 1);
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
m$1(Hu, "validateEmptyOrAlternative");
function zu(r, e, t) {
  let n2 = new Ci();
  r.accept(n2);
  let i = n2.alternations;
  return i = /* @__PURE__ */ Qm$1(i, (o2) => o2.ignoreAmbiguities === true), zi$1(i, (o2) => {
    let l = o2.idx, c = o2.maxLookahead || e, u = /* @__PURE__ */ Cn(l, r, c, o2), d = /* @__PURE__ */ Mp(u, o2, r, t), f = /* @__PURE__ */ Dp(u, o2, r, t);
    return d.concat(f);
  });
}
m$1(zu, "validateAmbiguousAlternationAlternatives");
var gl = (_K = class extends De {
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
function bp(r, e) {
  let t = new Ci();
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
m$1(bp, "validateTooManyAlts");
function qu(r, e, t) {
  let n2 = [];
  return Zr$1(r, (i) => {
    let s = new gl();
    i.accept(s);
    let o2 = s.allProductions;
    Zr$1(o2, (l) => {
      let c = /* @__PURE__ */ Si(l), u = l.maxLookahead || e, d = l.idx, h2 = _n(d, i, c, u)[0];
      if (Cr$1(/* @__PURE__ */ Qr$1(h2))) {
        let p2 = /* @__PURE__ */ t.buildEmptyRepetitionError({
          topLevelRule: i,
          repetition: l
        });
        n2.push({
          message: p2,
          type: ye.NO_NON_EMPTY_LOOKAHEAD,
          ruleName: i.name
        });
      }
    });
  }), n2;
}
m$1(qu, "validateSomeNonEmptyLookaheadPath");
function Mp(r, e, t, n2) {
  let i = [], s = /* @__PURE__ */ Rn$1(r, (l, c, u) => (e.definition[u].ignoreAmbiguities === true || Zr$1(c, (d) => {
    let f = [
      u
    ];
    Zr$1(r, (h2, p2) => {
      u !== p2 && ia(h2, d) && e.definition[p2].ignoreAmbiguities !== true && f.push(p2);
    }), f.length > 1 && !ia(i, d) && (i.push(d), l.push({
      alts: f,
      path: d
    }));
  }), l), []);
  return Jr$1(s, (l) => {
    let c = /* @__PURE__ */ Jr$1(l.alts, (d) => d + 1);
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
m$1(Mp, "checkAlternativesAmbiguities");
function Dp(r, e, t, n2) {
  let i = /* @__PURE__ */ Rn$1(r, (o2, l, c) => {
    let u = /* @__PURE__ */ Jr$1(l, (d) => ({
      idx: c,
      path: d
    }));
    return o2.concat(u);
  }, []);
  return Ai$1(/* @__PURE__ */ zi$1(i, (o2) => {
    if (e.definition[o2.idx].ignoreAmbiguities === true) return [];
    let c = o2.idx, u = o2.path, d = /* @__PURE__ */ fn$1(i, (h2) => e.definition[h2.idx].ignoreAmbiguities !== true && h2.idx < c && Gu(h2.path, u));
    return Jr$1(d, (h2) => {
      let p2 = [
        h2.idx + 1,
        c + 1
      ], g = e.idx === 0 ? "" : e.idx;
      return {
        message: /* @__PURE__ */ n2.buildAlternationPrefixAmbiguityError({
          topLevelRule: t,
          alternation: e,
          ambiguityIndices: p2,
          prefixPath: h2.path
        }),
        type: ye.AMBIGUOUS_PREFIX_ALTS,
        ruleName: t.name,
        occurrence: g,
        alternatives: p2
      };
    });
  }));
}
m$1(Dp, "checkPrefixAlternativesAmbiguities");
function Fp(r, e, t) {
  let n2 = [], i = /* @__PURE__ */ Jr$1(e, (s) => s.name);
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
m$1(Fp, "checkTerminalAndNoneTerminalsNameSpace");
function Xu(r) {
  let e = /* @__PURE__ */ Nf$1(r, {
    errMsgProvider: Ou
  }), t = {};
  return Zr$1(r.rules, (n2) => {
    t[n2.name] = n2;
  }), $u(t, e.errMsgProvider);
}
m$1(Xu, "resolveGrammar");
function Yu(r) {
  return r = /* @__PURE__ */ Nf$1(r, {
    errMsgProvider: it
  }), ju(r.rules, r.tokenTypes, r.errMsgProvider, r.grammarName);
}
m$1(Yu, "validateGrammar");
var Ju = "MismatchedTokenException", Qu = "NoViableAltException", Zu = "EarlyExitException", ed = "NotAllInputParsedException", td = [
  Ju,
  Qu,
  Zu,
  ed
];
Object.freeze(td);
function Bt(r) {
  return pm$1(td, r.name);
}
m$1(Bt, "isRecognitionException");
var wn = (_L = class extends Error {
  constructor(e, t) {
    super(e), this.token = t, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}, __38 = new WeakMap(), __privateAdd(_L, __38, m$1(_L, "RecognitionException")), _L), fr = (_M = class extends wn {
  constructor(e, t, n2) {
    super(e, t), this.previousToken = n2, this.name = Ju;
  }
}, __39 = new WeakMap(), __privateAdd(_M, __39, m$1(_M, "MismatchedTokenException")), _M), _i = (_N = class extends wn {
  constructor(e, t, n2) {
    super(e, t), this.previousToken = n2, this.name = Qu;
  }
}, __40 = new WeakMap(), __privateAdd(_N, __40, m$1(_N, "NoViableAltException")), _N), wi = (_O = class extends wn {
  constructor(e, t) {
    super(e, t), this.name = ed;
  }
}, __41 = new WeakMap(), __privateAdd(_O, __41, m$1(_O, "NotAllInputParsedException")), _O), Li = (_P = class extends wn {
  constructor(e, t, n2) {
    super(e, t), this.previousToken = n2, this.name = Zu;
  }
}, __42 = new WeakMap(), __privateAdd(_P, __42, m$1(_P, "EarlyExitException")), _P);
var Tl = {}, Rl = "InRuleRecoveryException", xl = (_Q = class extends Error {
  constructor(e) {
    super(e), this.name = Rl;
  }
}, __43 = new WeakMap(), __privateAdd(_Q, __43, m$1(_Q, "InRuleRecoveryException")), _Q), aa = (_R = class {
  initRecoverable(e) {
    this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = fm$1(e, "recoveryEnabled") ? e.recoveryEnabled : Fe.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = Up);
  }
  getTokenToInsert(e) {
    let t = /* @__PURE__ */ wt(e, "", NaN, NaN, NaN, NaN, NaN, NaN);
    return t.isInsertedInRecovery = true, t;
  }
  canTokenTypeBeInsertedInRecovery(e) {
    return true;
  }
  canTokenTypeBeDeletedInRecovery(e) {
    return true;
  }
  tryInRepetitionRecovery(e, t, n2, i) {
    let s = /* @__PURE__ */ this.findReSyncTokenType(), o2 = /* @__PURE__ */ this.exportLexerState(), l = [], c = false, u = /* @__PURE__ */ this.LA(1), d = /* @__PURE__ */ this.LA(1), f = /* @__PURE__ */ m$1(() => {
      let h2 = /* @__PURE__ */ this.LA(0), p2 = /* @__PURE__ */ this.errorMessageProvider.buildMismatchTokenMessage({
        expected: i,
        actual: u,
        previous: h2,
        ruleName: /* @__PURE__ */ this.getCurrRuleFullName()
      }), g = new fr(p2, u, this.LA(0));
      g.resyncedTokens = /* @__PURE__ */ _i$1(l), this.SAVE_ERROR(g);
    }, "generateErrorMessage");
    for (; !c; ) if (this.tokenMatcher(d, i)) {
      f();
      return;
    } else if (n2.call(this)) {
      f(), e.apply(this, t);
      return;
    } else this.tokenMatcher(d, s) ? c = true : (d = /* @__PURE__ */ this.SKIP_TOKEN(), this.addToResyncTokens(d, l));
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
    throw new xl("sad sad panda");
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
      let i = /* @__PURE__ */ Ki$1(e, (s) => ki(t, s));
      if (i !== void 0) return i;
      t = /* @__PURE__ */ this.LA(n2), n2++;
    }
  }
  getCurrFollowKey() {
    if (this.RULE_STACK.length === 1) return Tl;
    let e = /* @__PURE__ */ this.getLastExplicitRuleShortName(), t = /* @__PURE__ */ this.getLastExplicitRuleOccurrenceIndex(), n2 = /* @__PURE__ */ this.getPreviousExplicitRuleShortName();
    return {
      ruleName: /* @__PURE__ */ this.shortRuleNameToFullName(e),
      idxInCallingRule: t,
      inRule: /* @__PURE__ */ this.shortRuleNameToFullName(n2)
    };
  }
  buildFullFollowKeyStack() {
    let e = this.RULE_STACK, t = this.RULE_OCCURRENCE_STACK;
    return Jr$1(e, (n2, i) => i === 0 ? Tl : {
      ruleName: /* @__PURE__ */ this.shortRuleNameToFullName(n2),
      idxInCallingRule: t[i],
      inRule: /* @__PURE__ */ this.shortRuleNameToFullName(e[i - 1])
    });
  }
  flattenFollowSet() {
    let e = /* @__PURE__ */ Jr$1(/* @__PURE__ */ this.buildFullFollowKeyStack(), (t) => this.getFollowSetFromFollowKey(t));
    return Qr$1(e);
  }
  getFollowSetFromFollowKey(e) {
    if (e === Tl) return [
      qe
    ];
    let t = e.ruleName + e.idxInCallingRule + Ks + e.inRule;
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
    return Jr$1(this.RULE_STACK, (e) => this.shortRuleNameToFullName(e));
  }
}, __44 = new WeakMap(), __privateAdd(_R, __44, m$1(_R, "Recoverable")), _R);
function Up(r, e, t, n2, i, s, o2) {
  let l = /* @__PURE__ */ this.getKeyForAutomaticLookahead(n2, i), c = this.firstAfterRepMap[l];
  if (c === void 0) {
    let h2 = /* @__PURE__ */ this.getCurrRuleFullName(), p2 = this.getGAstProductions()[h2];
    c = /* @__PURE__ */ new s(p2, i).startWalking(), this.firstAfterRepMap[l] = c;
  }
  let u = c.token, d = c.occurrence, f = c.isEndOfRule;
  this.RULE_STACK.length === 1 && f && u === void 0 && (u = qe, d = 1), !(u === void 0 || d === void 0) && this.shouldInRepetitionRecoveryBeTried(u, d, o2) && this.tryInRepetitionRecovery(r, e, t, u);
}
m$1(Up, "attemptInRepetitionRecovery");
function oa(r, e, t) {
  return t | e | r;
}
m$1(oa, "getKeyForAutomaticLookahead");
var Ot = (_S = class {
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
    return zi$1(e, (t) => yl(t, t, it));
  }
  validateEmptyOrAlternatives(e) {
    return zi$1(e, (t) => Hu(t, it));
  }
  validateAmbiguousAlternationAlternatives(e, t) {
    return zi$1(e, (n2) => zu(n2, t, it));
  }
  validateSomeNonEmptyLookaheadPath(e, t) {
    return qu(e, t, it);
  }
  buildLookaheadForAlternation(e) {
    return bu(e.prodOccurrence, e.rule, e.maxLookahead, e.hasPredicates, e.dynamicTokensEnabled, Du);
  }
  buildLookaheadForOptional(e) {
    return Mu(e.prodOccurrence, e.rule, e.maxLookahead, e.dynamicTokensEnabled, /* @__PURE__ */ Si(e.prodType), Fu);
  }
}, __45 = new WeakMap(), __privateAdd(_S, __45, m$1(_S, "LLkLookaheadStrategy")), _S);
var ca = (_T = class {
  initLooksAhead(e) {
    this.dynamicTokensEnabled = fm$1(e, "dynamicTokensEnabled") ? e.dynamicTokensEnabled : Fe.dynamicTokensEnabled, this.maxLookahead = fm$1(e, "maxLookahead") ? e.maxLookahead : Fe.maxLookahead, this.lookaheadStrategy = fm$1(e, "lookaheadStrategy") ? e.lookaheadStrategy : new Ot({
      maxLookahead: this.maxLookahead
    }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
  }
  preComputeLookaheadFunctions(e) {
    Zr$1(e, (t) => {
      this.TRACE_INIT(`${t.name} Rule Lookahead`, () => {
        let { alternation: n2, repetition: i, option: s, repetitionMandatory: o2, repetitionMandatoryWithSeparator: l, repetitionWithSeparator: c } = Gp(t);
        Zr$1(n2, (u) => {
          let d = u.idx === 0 ? "" : u.idx;
          this.TRACE_INIT(`${We(u)}${d}`, () => {
            let f = /* @__PURE__ */ this.lookaheadStrategy.buildLookaheadForAlternation({
              prodOccurrence: u.idx,
              rule: t,
              maxLookahead: u.maxLookahead || this.maxLookahead,
              hasPredicates: u.hasPredicates,
              dynamicTokensEnabled: this.dynamicTokensEnabled
            }), h2 = /* @__PURE__ */ oa(this.fullRuleNameToShort[t.name], 256, u.idx);
            this.setLaFuncCache(h2, f);
          });
        }), Zr$1(i, (u) => {
          this.computeLookaheadFunc(t, u.idx, 768, "Repetition", u.maxLookahead, /* @__PURE__ */ We(u));
        }), Zr$1(s, (u) => {
          this.computeLookaheadFunc(t, u.idx, 512, "Option", u.maxLookahead, /* @__PURE__ */ We(u));
        }), Zr$1(o2, (u) => {
          this.computeLookaheadFunc(t, u.idx, 1024, "RepetitionMandatory", u.maxLookahead, /* @__PURE__ */ We(u));
        }), Zr$1(l, (u) => {
          this.computeLookaheadFunc(t, u.idx, 1536, "RepetitionMandatoryWithSeparator", u.maxLookahead, /* @__PURE__ */ We(u));
        }), Zr$1(c, (u) => {
          this.computeLookaheadFunc(t, u.idx, 1280, "RepetitionWithSeparator", u.maxLookahead, /* @__PURE__ */ We(u));
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
      }), c = /* @__PURE__ */ oa(this.fullRuleNameToShort[e.name], n2, t);
      this.setLaFuncCache(c, l);
    });
  }
  getKeyForAutomaticLookahead(e, t) {
    let n2 = /* @__PURE__ */ this.getLastExplicitRuleShortName();
    return oa(n2, e, t);
  }
  getLaFuncFromCache(e) {
    return this.lookAheadFuncsCache.get(e);
  }
  setLaFuncCache(e, t) {
    this.lookAheadFuncsCache.set(e, t);
  }
}, __46 = new WeakMap(), __privateAdd(_T, __46, m$1(_T, "LooksAhead")), _T), El = (_U = class extends De {
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
}, __47 = new WeakMap(), __privateAdd(_U, __47, m$1(_U, "DslMethodsCollectorVisitor")), _U), la = new El();
function Gp(r) {
  la.reset(), r.accept(la);
  let e = la.dslMethods;
  return la.reset(), e;
}
m$1(Gp, "collectMethods");
function kl(r, e) {
  isNaN(r.startOffset) === true ? (r.startOffset = e.startOffset, r.endOffset = e.endOffset) : r.endOffset < e.endOffset && (r.endOffset = e.endOffset);
}
m$1(kl, "setNodeLocationOnlyOffset");
function Il(r, e) {
  isNaN(r.startOffset) === true ? (r.startOffset = e.startOffset, r.startColumn = e.startColumn, r.startLine = e.startLine, r.endOffset = e.endOffset, r.endColumn = e.endColumn, r.endLine = e.endLine) : r.endOffset < e.endOffset && (r.endOffset = e.endOffset, r.endColumn = e.endColumn, r.endLine = e.endLine);
}
m$1(Il, "setNodeLocationFull");
function rd(r, e, t) {
  r.children[t] === void 0 ? r.children[t] = [
    e
  ] : r.children[t].push(e);
}
m$1(rd, "addTerminalToCst");
function nd(r, e, t) {
  r.children[e] === void 0 ? r.children[e] = [
    t
  ] : r.children[e].push(t);
}
m$1(nd, "addNoneTerminalToCst");
var Bp = "name";
function Nl(r, e) {
  Object.defineProperty(r, Bp, {
    enumerable: false,
    configurable: true,
    writable: false,
    value: e
  });
}
m$1(Nl, "defineNameProp");
function Wp(r, e) {
  let t = /* @__PURE__ */ h(r), n2 = t.length;
  for (let i = 0; i < n2; i++) {
    let s = t[i], o2 = r[s], l = o2.length;
    for (let c = 0; c < l; c++) {
      let u = o2[c];
      u.tokenTypeIdx === void 0 && this[u.name](u.children, e);
    }
  }
}
m$1(Wp, "defaultVisit");
function id(r, e) {
  let t = /* @__PURE__ */ m$1(function() {
  }, "derivedConstructor");
  Nl(t, r + "BaseSemantics");
  let n2 = {
    visit: /* @__PURE__ */ m$1(function(i, s) {
      if (N(i) && (i = i[0]), !sn$1(i)) return this[i.name](i.children, s);
    }, "visit"),
    validateVisitor: /* @__PURE__ */ m$1(function() {
      let i = /* @__PURE__ */ jp(this, e);
      if (!Cr$1(i)) {
        let s = /* @__PURE__ */ Jr$1(i, (o2) => o2.msg);
        throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${s.join(`

`).replace(/\n/g, `
	`)}`);
      }
    }, "validateVisitor")
  };
  return t.prototype = n2, t.prototype.constructor = t, t._RULE_NAMES = e, t;
}
m$1(id, "createBaseSemanticVisitorConstructor");
function sd(r, e, t) {
  let n2 = /* @__PURE__ */ m$1(function() {
  }, "derivedConstructor");
  Nl(n2, r + "BaseSemanticsWithDefaults");
  let i = /* @__PURE__ */ Object.create(t.prototype);
  return Zr$1(e, (s) => {
    i[s] = Wp;
  }), n2.prototype = i, n2.prototype.constructor = n2, n2;
}
m$1(sd, "createBaseVisitorConstructorWithDefaults");
var Sl;
(function(r) {
  r[r.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", r[r.MISSING_METHOD = 1] = "MISSING_METHOD";
})(Sl || (Sl = {}));
function jp(r, e) {
  return Vp(r, e);
}
m$1(jp, "validateVisitor");
function Vp(r, e) {
  let t = /* @__PURE__ */ fn$1(e, (i) => T(r[i]) === false), n2 = /* @__PURE__ */ Jr$1(t, (i) => ({
    msg: `Missing visitor method: <${i}> on ${r.constructor.name} CST Visitor.`,
    type: Sl.MISSING_METHOD,
    methodName: i
  }));
  return Ai$1(n2);
}
m$1(Vp, "validateMissingCstMethods");
var ha = (_V = class {
  initTreeBuilder(e) {
    if (this.CST_STACK = [], this.outputCst = e.outputCst, this.nodeLocationTracking = fm$1(e, "nodeLocationTracking") ? e.nodeLocationTracking : Fe.nodeLocationTracking, !this.outputCst) this.cstInvocationStateUpdate = kr, this.cstFinallyStateUpdate = kr, this.cstPostTerminal = kr, this.cstPostNonTerminal = kr, this.cstPostRule = kr;
    else if (/full/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = Il, this.setNodeLocationFromNode = Il, this.cstPostRule = kr, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = kr, this.setNodeLocationFromNode = kr, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
    else if (/onlyOffset/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = kl, this.setNodeLocationFromNode = kl, this.cstPostRule = kr, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = kr, this.setNodeLocationFromNode = kr, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
    else if (/none/i.test(this.nodeLocationTracking)) this.setNodeLocationFromToken = kr, this.setNodeLocationFromNode = kr, this.cstPostRule = kr, this.setInitialNodeLocation = kr;
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
    rd(n2, t, e), this.setNodeLocationFromToken(n2.location, t);
  }
  cstPostNonTerminal(e, t) {
    let n2 = this.CST_STACK[this.CST_STACK.length - 1];
    nd(n2, t, e), this.setNodeLocationFromNode(n2.location, e.location);
  }
  getBaseCstVisitorConstructor() {
    if (sn$1(this.baseCstVisitorConstructor)) {
      let e = /* @__PURE__ */ id(this.className, /* @__PURE__ */ h(this.gastProductionsCache));
      return this.baseCstVisitorConstructor = e, e;
    }
    return this.baseCstVisitorConstructor;
  }
  getBaseCstVisitorConstructorWithDefaults() {
    if (sn$1(this.baseCstVisitorWithDefaultsConstructor)) {
      let e = /* @__PURE__ */ sd(this.className, /* @__PURE__ */ h(this.gastProductionsCache), /* @__PURE__ */ this.getBaseCstVisitorConstructor());
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
var pa = (_W = class {
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
    return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : Ln;
  }
  LA(e) {
    let t = this.currIdx + e;
    return t < 0 || this.tokVectorLength <= t ? Ln : this.tokVector[t];
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
var ma = (_X = class {
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
    let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : On;
    if (pm$1(this.definedRulesNames, e)) {
      let o2 = {
        message: /* @__PURE__ */ it.buildDuplicateRuleNameError({
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
    let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : On;
    let i = /* @__PURE__ */ Ku(e, this.definedRulesNames, this.className);
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
        if (Bt(i)) return false;
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
    return Vs(/* @__PURE__ */ Xr$1(this.gastProductionsCache));
  }
}, __50 = new WeakMap(), __privateAdd(_X, __50, m$1(_X, "RecognizerApi")), _X);
var ga = (_Y = class {
  initRecognizerEngine(e, t) {
    if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = In, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, fm$1(t, "serializedGrammar")) throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
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
    else if (fm$1(e, "modes") && Ui$1(/* @__PURE__ */ Qr$1(/* @__PURE__ */ Xr$1(e.modes)), vu)) {
      let s = /* @__PURE__ */ Qr$1(/* @__PURE__ */ Xr$1(e.modes)), o2 = /* @__PURE__ */ mp$1(s);
      this.tokensMap = /* @__PURE__ */ Rn$1(o2, (l, c) => (l[c.name] = c, l), {});
    } else if (m$2(e)) this.tokensMap = /* @__PURE__ */ _f$1(e);
    else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
    this.tokensMap.EOF = qe;
    let n2 = fm$1(e, "modes") ? Qr$1(/* @__PURE__ */ Xr$1(e.modes)) : Xr$1(e), i = /* @__PURE__ */ Ui$1(n2, (s) => Cr$1(s.categoryMatches));
    this.tokenMatcher = i ? In : St, Ct(/* @__PURE__ */ Xr$1(this.tokensMap));
  }
  defineRule(e, t, n2) {
    if (this.selfAnalysisDone) throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    let i = fm$1(n2, "resyncEnabled") ? n2.resyncEnabled : On.resyncEnabled, s = fm$1(n2, "recoveryValueFunc") ? n2.recoveryValueFunc : On.recoveryValueFunc, o2 = this.ruleShortNameIdx << 12;
    this.ruleShortNameIdx++, this.shortRuleNameToFull[o2] = e, this.fullRuleNameToShort[e] = o2;
    let l;
    return this.outputCst === true ? l = /* @__PURE__ */ m$1(function() {
      for (var _len = arguments.length, d = new Array(_len), _key = 0; _key < _len; _key++) {
        d[_key] = arguments[_key];
      }
      try {
        this.ruleInvocationStateUpdate(o2, e, this.subruleIdx), t.apply(this, d);
        let f = this.CST_STACK[this.CST_STACK.length - 1];
        return this.cstPostRule(f), f;
      } catch (f) {
        return this.invokeRuleCatch(f, i, s);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    }, "invokeRuleWithTry") : l = /* @__PURE__ */ m$1(function() {
      for (var _len = arguments.length, d = new Array(_len), _key = 0; _key < _len; _key++) {
        d[_key] = arguments[_key];
      }
      try {
        return this.ruleInvocationStateUpdate(o2, e, this.subruleIdx), t.apply(this, d);
      } catch (f) {
        return this.invokeRuleCatch(f, i, s);
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
    if (Bt(e)) {
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
    } else throw this.raiseEarlyExitException(e, ae.REPETITION_MANDATORY, t.ERR_MSG);
    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [
      e,
      t
    ], i, 1024, e, Zs);
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
        Ni
      ], l, 1536, e, Ni);
    } else throw this.raiseEarlyExitException(e, ae.REPETITION_MANDATORY_WITH_SEPARATOR, t.ERR_MSG);
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
    ], i, 768, e, Qs, o2);
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
        Ii
      ], l, 1280, e, Ii);
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
      this.SAVE_ERROR(new wi(t, e));
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
    throw Bt(e) && e.partialCstResult !== void 0 && (this.cstPostNonTerminal(e.partialCstResult, t !== void 0 && t.LABEL !== void 0 ? t.LABEL : n2), delete e.partialCstResult), e;
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
    }), this.SAVE_ERROR(new fr(i, t, s));
  }
  consumeInternalRecovery(e, t, n2) {
    if (this.recoveryEnabled && n2.name === "MismatchedTokenException" && !this.isBackTracking()) {
      let i = /* @__PURE__ */ this.getFollowsForInRuleRecovery(e, t);
      try {
        return this.tryInRuleRecovery(e, i);
      } catch (s) {
        throw s.name === Rl ? n2 : s;
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
var ya = (_Z = class {
  initErrorHandler(e) {
    this._errors = [], this.errorMessageProvider = fm$1(e, "errorMessageProvider") ? e.errorMessageProvider : Fe.errorMessageProvider;
  }
  SAVE_ERROR(e) {
    if (Bt(e)) return e.context = {
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
    let i = /* @__PURE__ */ this.getCurrRuleFullName(), s = this.getGAstProductions()[i], l = _n(e, s, t, this.maxLookahead)[0], c = [];
    for (let d = 1; d <= this.maxLookahead; d++) c.push(/* @__PURE__ */ this.LA(d));
    let u = /* @__PURE__ */ this.errorMessageProvider.buildEarlyExitMessage({
      expectedIterationPaths: l,
      actual: c,
      previous: /* @__PURE__ */ this.LA(0),
      customUserDescription: n2,
      ruleName: i
    });
    throw this.SAVE_ERROR(new Li(u, this.LA(1), this.LA(0)));
  }
  raiseNoAltException(e, t) {
    let n2 = /* @__PURE__ */ this.getCurrRuleFullName(), i = this.getGAstProductions()[n2], s = /* @__PURE__ */ Cn(e, i, this.maxLookahead), o2 = [];
    for (let u = 1; u <= this.maxLookahead; u++) o2.push(/* @__PURE__ */ this.LA(u));
    let l = /* @__PURE__ */ this.LA(0), c = /* @__PURE__ */ this.errorMessageProvider.buildNoViableAltMessage({
      expectedPathsPerAlt: s,
      actual: o2,
      previous: l,
      customUserDescription: t,
      ruleName: /* @__PURE__ */ this.getCurrRuleFullName()
    });
    throw this.SAVE_ERROR(new _i(c, this.LA(1), l));
  }
}, __52 = new WeakMap(), __privateAdd(_Z, __52, m$1(_Z, "ErrorHandler")), _Z);
var Ta = (__53 = class {
  initContentAssist() {
  }
  computeContentAssist(e, t) {
    let n2 = this.gastProductionsCache[e];
    if (sn$1(n2)) throw Error(`Rule ->${e}<- does not exist in this grammar.`);
    return ta([
      n2
    ], t, this.tokenMatcher, this.maxLookahead);
  }
  getNextPossibleTokenTypes(e) {
    let t = /* @__PURE__ */ De$1(e.ruleStack), i = this.getGAstProductions()[t];
    return new Js(i, e).startWalking();
  }
}, __54 = new WeakMap(), __privateAdd(__53, __54, m$1(__53, "ContentAssist")), __53);
var Ea = {
  description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(Ea);
var ad = true, od = Math.pow(2, 8) - 1, cd = /* @__PURE__ */ Gt({
  name: "RECORDING_PHASE_TOKEN",
  pattern: se.NA
});
Ct([
  cd
]);
var ud = /* @__PURE__ */ wt(cd, `This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`, -1, -1, -1, -1, -1, -1);
Object.freeze(ud);
var Hp = {
  name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  children: {}
}, xa = (_$ = class {
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
    return Ln;
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
    return $i.call(this, z, e, t);
  }
  atLeastOneInternalRecord(e, t) {
    $i.call(this, Q, t, e);
  }
  atLeastOneSepFirstInternalRecord(e, t) {
    $i.call(this, Z, t, e, ad);
  }
  manyInternalRecord(e, t) {
    $i.call(this, F, t, e);
  }
  manySepFirstInternalRecord(e, t) {
    $i.call(this, q, t, e, ad);
  }
  orInternalRecord(e, t) {
    return zp.call(this, e, t);
  }
  subruleInternalRecord(e, t, n2) {
    if (Ra(t), !e || fm$1(e, "ruleName") === false) {
      let l = new Error(`<SUBRULE${ld(t)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw l.KNOWN_RECORDER_ERROR = true, l;
    }
    let i = /* @__PURE__ */ Df$1(this.recordingProdStack), s = e.ruleName, o2 = new H({
      idx: t,
      nonTerminalName: s,
      label: n2 == null ? void 0 : n2.LABEL,
      referencedRule: void 0
    });
    return i.definition.push(o2), this.outputCst ? Hp : Ea;
  }
  consumeInternalRecord(e, t, n2) {
    if (Ra(t), !cl(e)) {
      let o2 = new Error(`<CONSUME${ld(t)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw o2.KNOWN_RECORDER_ERROR = true, o2;
    }
    let i = /* @__PURE__ */ Df$1(this.recordingProdStack), s = new D({
      idx: t,
      terminalType: e,
      label: n2 == null ? void 0 : n2.LABEL
    });
    return i.definition.push(s), ud;
  }
}, __55 = new WeakMap(), __privateAdd(_$, __55, m$1(_$, "GastRecorder")), _$);
function $i(r, e, t) {
  let n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  Ra(t);
  let i = /* @__PURE__ */ Df$1(this.recordingProdStack), s = T(e) ? e : e.DEF, o2 = new r({
    definition: [],
    idx: t
  });
  return n2 && (o2.separator = e.SEP), fm$1(e, "MAX_LOOKAHEAD") && (o2.maxLookahead = e.MAX_LOOKAHEAD), this.recordingProdStack.push(o2), s.call(this), i.definition.push(o2), this.recordingProdStack.pop(), Ea;
}
m$1($i, "recordProd");
function zp(r, e) {
  Ra(e);
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
  }), Ea;
}
m$1(zp, "recordOrProd");
function ld(r) {
  return r === 0 ? "" : `${r}`;
}
m$1(ld, "getIdxSuffix");
function Ra(r) {
  if (r < 0 || r > od) {
    let e = new Error(`Invalid DSL Method idx value: <${r}>
	Idx value must be a none negative value smaller than ${od + 1}`);
    throw e.KNOWN_RECORDER_ERROR = true, e;
  }
}
m$1(Ra, "assertMethodIdxIsValid");
var Aa = (_aa = class {
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
      let { time: i, value: s } = Ri(t), o2 = i > 10 ? console.warn : console.log;
      return this.traceInitIndent < this.traceInitMaxIdent && o2(`${n2}<-- <${e}> time: ${i}ms`), this.traceInitIndent--, s;
    } else return t();
  }
}, __56 = new WeakMap(), __privateAdd(_aa, __56, m$1(_aa, "PerformanceTracer")), _aa);
function dd(r, e) {
  e.forEach((t) => {
    let n2 = t.prototype;
    Object.getOwnPropertyNames(n2).forEach((i) => {
      if (i === "constructor") return;
      let s = /* @__PURE__ */ Object.getOwnPropertyDescriptor(n2, i);
      s && (s.get || s.set) ? Object.defineProperty(r.prototype, i, s) : r.prototype[i] = t.prototype[i];
    });
  });
}
m$1(dd, "applyMixins");
var Ln = /* @__PURE__ */ wt(qe, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(Ln);
var Fe = /* @__PURE__ */ Object.freeze({
  recoveryEnabled: false,
  maxLookahead: 3,
  dynamicTokensEnabled: false,
  outputCst: true,
  errorMessageProvider: Lt,
  nodeLocationTracking: "none",
  traceInitPerf: false,
  skipValidations: false
}), On = /* @__PURE__ */ Object.freeze({
  recoveryValueFunc: /* @__PURE__ */ m$1(() => {
  }, "recoveryValueFunc"),
  resyncEnabled: true
}), ye;
(function(r) {
  r[r.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", r[r.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", r[r.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", r[r.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", r[r.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", r[r.LEFT_RECURSION = 5] = "LEFT_RECURSION", r[r.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", r[r.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", r[r.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", r[r.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", r[r.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", r[r.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", r[r.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", r[r.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(ye || (ye = {}));
function va() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
  return function() {
    return r;
  };
}
m$1(va, "EMPTY_ALT");
var Pi = (_ba = class {
  static performSelfAnalysis(e) {
    throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
  }
  performSelfAnalysis() {
    this.TRACE_INIT("performSelfAnalysis", () => {
      let e;
      this.selfAnalysisDone = true;
      let t = this.className;
      this.TRACE_INIT("toFastProps", () => {
        Ei(this);
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
        n2 = /* @__PURE__ */ Xu({
          rules: /* @__PURE__ */ Xr$1(this.gastProductionsCache)
        }), this.definitionErrors = /* @__PURE__ */ this.definitionErrors.concat(n2);
      }), this.TRACE_INIT("Grammar Validations", () => {
        if (Cr$1(n2) && this.skipValidations === false) {
          let i = /* @__PURE__ */ Yu({
            rules: /* @__PURE__ */ Xr$1(this.gastProductionsCache),
            tokenTypes: /* @__PURE__ */ Xr$1(this.tokensMap),
            errMsgProvider: it,
            grammarName: t
          }), s = /* @__PURE__ */ Wu({
            lookaheadStrategy: this.lookaheadStrategy,
            rules: /* @__PURE__ */ Xr$1(this.gastProductionsCache),
            tokenTypes: /* @__PURE__ */ Xr$1(this.tokensMap),
            grammarName: t
          });
          this.definitionErrors = /* @__PURE__ */ this.definitionErrors.concat(i, s);
        }
      }), Cr$1(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT("computeAllProdsFollows", () => {
        let i = /* @__PURE__ */ nu(/* @__PURE__ */ Xr$1(this.gastProductionsCache));
        this.resyncFollows = i;
      }), this.TRACE_INIT("ComputeLookaheadFunctions", () => {
        var i, s;
        (s = (i = this.lookaheadStrategy).initialize) === null || s === void 0 || s.call(i, {
          rules: /* @__PURE__ */ Xr$1(this.gastProductionsCache)
        }), this.preComputeLookaheadFunctions(/* @__PURE__ */ Xr$1(this.gastProductionsCache));
      })), !_ba.DEFER_DEFINITION_ERRORS_HANDLING && !Cr$1(this.definitionErrors)) throw e = /* @__PURE__ */ Jr$1(this.definitionErrors, (i) => i.message), new Error(`Parser Definition Errors detected:
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
Pi.DEFER_DEFINITION_ERRORS_HANDLING = false;
dd(Pi, [
  aa,
  ca,
  ha,
  pa,
  ga,
  ma,
  ya,
  Ta,
  xa,
  Aa
]);
var bi = (_ca = class extends Pi {
  constructor(e, t = Fe) {
    let n2 = /* @__PURE__ */ _f$1(t);
    n2.outputCst = false, super(e, n2);
  }
}, __58 = new WeakMap(), __privateAdd(_ca, __58, m$1(_ca, "EmbeddedActionsParser")), _ca);
function hr(r, e, t) {
  return `${r.name}_${e}_${t}`;
}
m$1(hr, "buildATNKey");
var Wt = 1, Xp = 2, fd = 4, hd = 5;
var bn = 7, Yp = 8, Jp = 9, Qp = 10, Zp = 11, pd = 12, Mi = (_da = class {
  constructor(e) {
    this.target = e;
  }
  isEpsilon() {
    return false;
  }
}, __59 = new WeakMap(), __privateAdd(_da, __59, m$1(_da, "AbstractTransition")), _da), $n = (_ea = class extends Mi {
  constructor(e, t) {
    super(e), this.tokenType = t;
  }
}, __60 = new WeakMap(), __privateAdd(_ea, __60, m$1(_ea, "AtomTransition")), _ea), Di = (_fa = class extends Mi {
  constructor(e) {
    super(e);
  }
  isEpsilon() {
    return true;
  }
}, __61 = new WeakMap(), __privateAdd(_fa, __61, m$1(_fa, "EpsilonTransition")), _fa), Pn = (_ga = class extends Mi {
  constructor(e, t, n2) {
    super(e), this.rule = t, this.followState = n2;
  }
  isEpsilon() {
    return true;
  }
}, __62 = new WeakMap(), __privateAdd(_ga, __62, m$1(_ga, "RuleTransition")), _ga);
function md(r) {
  let e = {
    decisionMap: {},
    decisionStates: [],
    ruleToStartState: /* @__PURE__ */ new Map(),
    ruleToStopState: /* @__PURE__ */ new Map(),
    states: []
  };
  em(e, r);
  let t = r.length;
  for (let n2 = 0; n2 < t; n2++) {
    let i = r[n2], s = /* @__PURE__ */ pr(e, i, i);
    s !== void 0 && dm(e, i, s);
  }
  return e;
}
m$1(md, "createATN");
function em(r, e) {
  let t = e.length;
  for (let n2 = 0; n2 < t; n2++) {
    let i = e[n2], s = /* @__PURE__ */ xe(r, i, void 0, {
      type: Xp
    }), o2 = /* @__PURE__ */ xe(r, i, void 0, {
      type: bn
    });
    s.stop = o2, r.ruleToStartState.set(i, s), r.ruleToStopState.set(i, o2);
  }
}
m$1(em, "createRuleStartAndStopATNStates");
function gd(r, e, t) {
  return t instanceof D ? _l(r, e, t.terminalType, t) : t instanceof H ? um(r, e, t) : t instanceof X ? sm(r, e, t) : t instanceof z ? am(r, e, t) : t instanceof F ? tm(r, e, t) : t instanceof q ? rm(r, e, t) : t instanceof Q ? nm(r, e, t) : t instanceof Z ? im(r, e, t) : pr(r, e, t);
}
m$1(gd, "atom");
function tm(r, e, t) {
  let n2 = /* @__PURE__ */ xe(r, e, t, {
    type: hd
  });
  jt(r, n2);
  let i = /* @__PURE__ */ Mn(r, e, n2, t, /* @__PURE__ */ pr(r, e, t));
  return Td(r, e, t, i);
}
m$1(tm, "repetition");
function rm(r, e, t) {
  let n2 = /* @__PURE__ */ xe(r, e, t, {
    type: hd
  });
  jt(r, n2);
  let i = /* @__PURE__ */ Mn(r, e, n2, t, /* @__PURE__ */ pr(r, e, t)), s = /* @__PURE__ */ _l(r, e, t.separator, t);
  return Td(r, e, t, i, s);
}
m$1(rm, "repetitionSep");
function nm(r, e, t) {
  let n2 = /* @__PURE__ */ xe(r, e, t, {
    type: fd
  });
  jt(r, n2);
  let i = /* @__PURE__ */ Mn(r, e, n2, t, /* @__PURE__ */ pr(r, e, t));
  return yd(r, e, t, i);
}
m$1(nm, "repetitionMandatory");
function im(r, e, t) {
  let n2 = /* @__PURE__ */ xe(r, e, t, {
    type: fd
  });
  jt(r, n2);
  let i = /* @__PURE__ */ Mn(r, e, n2, t, /* @__PURE__ */ pr(r, e, t)), s = /* @__PURE__ */ _l(r, e, t.separator, t);
  return yd(r, e, t, i, s);
}
m$1(im, "repetitionMandatorySep");
function sm(r, e, t) {
  let n2 = /* @__PURE__ */ xe(r, e, t, {
    type: Wt
  });
  jt(r, n2);
  let i = /* @__PURE__ */ Jr$1(t.definition, (o2) => gd(r, e, o2));
  return Mn(r, e, n2, t, ...i);
}
m$1(sm, "alternation");
function am(r, e, t) {
  let n2 = /* @__PURE__ */ xe(r, e, t, {
    type: Wt
  });
  jt(r, n2);
  let i = /* @__PURE__ */ Mn(r, e, n2, t, /* @__PURE__ */ pr(r, e, t));
  return om(r, e, t, i);
}
m$1(am, "option");
function pr(r, e, t) {
  let n2 = /* @__PURE__ */ fn$1(/* @__PURE__ */ Jr$1(t.definition, (i) => gd(r, e, i)), (i) => i !== void 0);
  return n2.length === 1 ? n2[0] : n2.length === 0 ? void 0 : cm(r, n2);
}
m$1(pr, "block");
function yd(r, e, t, n2, i) {
  let s = n2.left, o2 = n2.right, l = /* @__PURE__ */ xe(r, e, t, {
    type: Zp
  });
  jt(r, l);
  let c = /* @__PURE__ */ xe(r, e, t, {
    type: pd
  });
  return s.loopback = l, c.loopback = l, r.decisionMap[hr(e, i ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", t.idx)] = l, me(o2, l), i === void 0 ? (me(l, s), me(l, c)) : (me(l, c), me(l, i.left), me(i.right, s)), {
    left: s,
    right: c
  };
}
m$1(yd, "plus");
function Td(r, e, t, n2, i) {
  let s = n2.left, o2 = n2.right, l = /* @__PURE__ */ xe(r, e, t, {
    type: Qp
  });
  jt(r, l);
  let c = /* @__PURE__ */ xe(r, e, t, {
    type: pd
  }), u = /* @__PURE__ */ xe(r, e, t, {
    type: Jp
  });
  return l.loopback = u, c.loopback = u, me(l, s), me(l, c), me(o2, u), i !== void 0 ? (me(u, c), me(u, i.left), me(i.right, s)) : me(u, l), r.decisionMap[hr(e, i ? "RepetitionWithSeparator" : "Repetition", t.idx)] = l, {
    left: l,
    right: c
  };
}
m$1(Td, "star");
function om(r, e, t, n2) {
  let i = n2.left, s = n2.right;
  return me(i, s), r.decisionMap[hr(e, "Option", t.idx)] = i, n2;
}
m$1(om, "optional");
function jt(r, e) {
  return r.decisionStates.push(e), e.decision = r.decisionStates.length - 1, e.decision;
}
m$1(jt, "defineDecisionState");
function Mn(r, e, t, n2) {
  for (var _len = arguments.length, i = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    i[_key - 4] = arguments[_key];
  }
  let s = /* @__PURE__ */ xe(r, e, n2, {
    type: Yp,
    start: t
  });
  t.end = s;
  for (let l of i) l !== void 0 ? (me(t, l.left), me(l.right, s)) : me(t, s);
  let o2 = {
    left: t,
    right: s
  };
  return r.decisionMap[hr(e, /* @__PURE__ */ lm(n2), n2.idx)] = t, o2;
}
m$1(Mn, "makeAlts");
function lm(r) {
  if (r instanceof X) return "Alternation";
  if (r instanceof z) return "Option";
  if (r instanceof F) return "Repetition";
  if (r instanceof q) return "RepetitionWithSeparator";
  if (r instanceof Q) return "RepetitionMandatory";
  if (r instanceof Z) return "RepetitionMandatoryWithSeparator";
  throw new Error("Invalid production type encountered");
}
m$1(lm, "getProdType");
function cm(r, e) {
  let t = e.length;
  for (let s = 0; s < t - 1; s++) {
    let o2 = e[s], l;
    o2.left.transitions.length === 1 && (l = o2.left.transitions[0]);
    let c = l instanceof Pn, u = l, d = e[s + 1].left;
    o2.left.type === Wt && o2.right.type === Wt && l !== void 0 && (c && u.followState === o2.right || l.target === o2.right) ? (c ? u.followState = d : l.target = d, fm(r, o2.right)) : me(o2.right, d);
  }
  let n2 = e[0], i = e[t - 1];
  return {
    left: n2.left,
    right: i.right
  };
}
m$1(cm, "makeBlock");
function _l(r, e, t, n2) {
  let i = /* @__PURE__ */ xe(r, e, n2, {
    type: Wt
  }), s = /* @__PURE__ */ xe(r, e, n2, {
    type: Wt
  });
  return wl(i, new $n(s, t)), {
    left: i,
    right: s
  };
}
m$1(_l, "tokenRef");
function um(r, e, t) {
  let n2 = t.referencedRule, i = /* @__PURE__ */ r.ruleToStartState.get(n2), s = /* @__PURE__ */ xe(r, e, t, {
    type: Wt
  }), o2 = /* @__PURE__ */ xe(r, e, t, {
    type: Wt
  }), l = new Pn(i, n2, o2);
  return wl(s, l), {
    left: s,
    right: o2
  };
}
m$1(um, "ruleRef");
function dm(r, e, t) {
  let n2 = /* @__PURE__ */ r.ruleToStartState.get(e);
  me(n2, t.left);
  let i = /* @__PURE__ */ r.ruleToStopState.get(e);
  return me(t.right, i), {
    left: n2,
    right: i
  };
}
m$1(dm, "buildRuleHandle");
function me(r, e) {
  let t = new Di(e);
  wl(r, t);
}
m$1(me, "epsilon");
function xe(r, e, t, n2) {
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
m$1(xe, "newState");
function wl(r, e) {
  r.transitions.length === 0 && (r.epsilonOnlyTransitions = /* @__PURE__ */ e.isEpsilon()), r.transitions.push(e);
}
m$1(wl, "addTransition");
function fm(r, e) {
  r.states.splice(/* @__PURE__ */ r.states.indexOf(e), 1);
}
m$1(fm, "removeState");
var Fi = {}, Dn = (_ha = class {
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
    let t = /* @__PURE__ */ Ll(e);
    t in this.map || (this.map[t] = this.configs.length, this.configs.push(e));
  }
  get elements() {
    return this.configs;
  }
  get alts() {
    return Jr$1(this.configs, (e) => e.alt);
  }
  get key() {
    let e = "";
    for (let t in this.map) e += t + ":";
    return e;
  }
}, __63 = new WeakMap(), __privateAdd(_ha, __63, m$1(_ha, "ATNConfigSet")), _ha);
function Ll(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return `${e ? `a${r.alt}` : ""}s${r.state.stateNumber}:${r.stack.map((t) => t.stateNumber.toString()).join("_")}`;
}
m$1(Ll, "getATNConfigKey");
function hm(r, e) {
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
m$1(hm, "createDFACache");
var ka = (_ia = class {
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
}, __64 = new WeakMap(), __privateAdd(_ia, __64, m$1(_ia, "PredicateSet")), _ia), xd = new ka(), Ui = (_ja = class extends Ot {
  constructor(e) {
    var t;
    super(), this.logging = (t = e == null ? void 0 : e.logging) !== null && t !== void 0 ? t : (n2) => console.log(n2);
  }
  initialize(e) {
    this.atn = /* @__PURE__ */ md(e.rules), this.dfas = /* @__PURE__ */ pm(this.atn);
  }
  validateAmbiguousAlternationAlternatives() {
    return [];
  }
  validateEmptyOrAlternatives() {
    return [];
  }
  buildLookaheadForAlternation(e) {
    let { prodOccurrence: t, rule: n2, hasPredicates: i, dynamicTokensEnabled: s } = e, o2 = this.dfas, l = this.logging, c = /* @__PURE__ */ hr(n2, "Alternation", t), d = this.atn.decisionMap[c].decision, f = /* @__PURE__ */ Jr$1(/* @__PURE__ */ na({
      maxLookahead: 1,
      occurrence: t,
      prodType: "Alternation",
      rule: n2
    }), (h2) => Jr$1(h2, (p2) => p2[0]));
    if (Rd(f, false) && !s) {
      let h2 = /* @__PURE__ */ Rn$1(f, (p2, g, y) => (Zr$1(g, (v) => {
        v && (p2[v.tokenTypeIdx] = y, Zr$1(v.categoryMatches, (R) => {
          p2[R] = y;
        }));
      }), p2), {});
      return i ? function(p2) {
        var g;
        let y = /* @__PURE__ */ this.LA(1), v = h2[y.tokenTypeIdx];
        if (p2 !== void 0 && v !== void 0) {
          let R = (g = p2[v]) === null || g === void 0 ? void 0 : g.GATE;
          if (R !== void 0 && R.call(this) === false) return;
        }
        return v;
      } : function() {
        let p2 = /* @__PURE__ */ this.LA(1);
        return h2[p2.tokenTypeIdx];
      };
    } else return i ? function(h2) {
      let p2 = new ka(), g = h2 === void 0 ? 0 : h2.length;
      for (let v = 0; v < g; v++) {
        let R = h2 == null ? void 0 : h2[v].GATE;
        p2.set(v, R === void 0 || R.call(this));
      }
      let y = /* @__PURE__ */ Ol.call(this, o2, d, p2, l);
      return typeof y == "number" ? y : void 0;
    } : function() {
      let h2 = /* @__PURE__ */ Ol.call(this, o2, d, xd, l);
      return typeof h2 == "number" ? h2 : void 0;
    };
  }
  buildLookaheadForOptional(e) {
    let { prodOccurrence: t, rule: n2, prodType: i, dynamicTokensEnabled: s } = e, o2 = this.dfas, l = this.logging, c = /* @__PURE__ */ hr(n2, i, t), d = this.atn.decisionMap[c].decision, f = /* @__PURE__ */ Jr$1(/* @__PURE__ */ na({
      maxLookahead: 1,
      occurrence: t,
      prodType: i,
      rule: n2
    }), (h2) => Jr$1(h2, (p2) => p2[0]));
    if (Rd(f) && f[0][0] && !s) {
      let h2 = f[0], p2 = /* @__PURE__ */ Qr$1(h2);
      if (p2.length === 1 && Cr$1(p2[0].categoryMatches)) {
        let y = p2[0].tokenTypeIdx;
        return function() {
          return this.LA(1).tokenTypeIdx === y;
        };
      } else {
        let g = /* @__PURE__ */ Rn$1(p2, (y, v) => (v !== void 0 && (y[v.tokenTypeIdx] = true, Zr$1(v.categoryMatches, (R) => {
          y[R] = true;
        })), y), {});
        return function() {
          let y = /* @__PURE__ */ this.LA(1);
          return g[y.tokenTypeIdx] === true;
        };
      }
    }
    return function() {
      let h2 = /* @__PURE__ */ Ol.call(this, o2, d, xd, l);
      return typeof h2 == "object" ? false : h2 === 0;
    };
  }
}, __65 = new WeakMap(), __privateAdd(_ja, __65, m$1(_ja, "LLStarLookaheadStrategy")), _ja);
function Rd(r) {
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
m$1(Rd, "isLL1Sequence");
function pm(r) {
  let e = r.decisionStates.length, t = /* @__PURE__ */ Array(e);
  for (let n2 = 0; n2 < e; n2++) t[n2] = /* @__PURE__ */ hm(r.decisionStates[n2], n2);
  return t;
}
m$1(pm, "initATNSimulator");
function Ol(r, e, t, n2) {
  let i = /* @__PURE__ */ r[e](t), s = i.start;
  if (s === void 0) {
    let l = /* @__PURE__ */ Im(i.atnStartState);
    s = /* @__PURE__ */ vd(i, /* @__PURE__ */ Ad(l)), i.start = s;
  }
  return mm.apply(this, [
    i,
    s,
    t,
    n2
  ]);
}
m$1(Ol, "adaptivePredict");
function mm(r, e, t, n2) {
  let i = e, s = 1, o2 = [], l = /* @__PURE__ */ this.LA(s++);
  for (; ; ) {
    let c = /* @__PURE__ */ Em(i, l);
    if (c === void 0 && (c = /* @__PURE__ */ gm.apply(this, [
      r,
      i,
      l,
      s,
      t,
      n2
    ])), c === Fi) return Rm(o2, i, l);
    if (c.isAcceptState === true) return c.prediction;
    i = c, o2.push(l), l = /* @__PURE__ */ this.LA(s++);
  }
}
m$1(mm, "performLookahead");
function gm(r, e, t, n2, i, s) {
  let o2 = /* @__PURE__ */ Am(e.configs, t, i);
  if (o2.size === 0) return Ed(r, e, t, Fi), Fi;
  let l = /* @__PURE__ */ Ad(o2), c = /* @__PURE__ */ km(o2, i);
  if (c !== void 0) l.isAcceptState = true, l.prediction = c, l.configs.uniqueAlt = c;
  else if (_m(o2)) {
    let u = /* @__PURE__ */ ym$1(o2.alts);
    l.isAcceptState = true, l.prediction = u, l.configs.uniqueAlt = u, ym.apply(this, [
      r,
      n2,
      o2.alts,
      s
    ]);
  }
  return l = /* @__PURE__ */ Ed(r, e, t, l), l;
}
m$1(gm, "computeLookaheadTarget");
function ym(r, e, t, n2) {
  let i = [];
  for (let u = 1; u <= e; u++) i.push(this.LA(u).tokenType);
  let s = r.atnStartState, o2 = s.rule, l = s.production, c = /* @__PURE__ */ Tm({
    topLevelRule: o2,
    ambiguityIndices: t,
    production: l,
    prefixPath: i
  });
  n2(c);
}
m$1(ym, "reportLookaheadAmbiguity");
function Tm(r) {
  let e = /* @__PURE__ */ Jr$1(r.prefixPath, (i) => _t(i)).join(", "), t = r.production.idx === 0 ? "" : r.production.idx, n2 = `Ambiguous Alternatives Detected: <${r.ambiguityIndices.join(", ")}> in <${xm(r.production)}${t}> inside <${r.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
  return n2 = n2 + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, n2;
}
m$1(Tm, "buildAmbiguityError");
function xm(r) {
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
m$1(xm, "getProductionDslName");
function Rm(r, e, t) {
  let n2 = /* @__PURE__ */ zi$1(e.configs.elements, (s) => s.state.transitions), i = /* @__PURE__ */ s0(/* @__PURE__ */ n2.filter((s) => s instanceof $n).map((s) => s.tokenType), (s) => s.tokenTypeIdx);
  return {
    actualToken: t,
    possibleTokenTypes: i,
    tokenPath: r
  };
}
m$1(Rm, "buildAdaptivePredictError");
function Em(r, e) {
  return r.edges[e.tokenTypeIdx];
}
m$1(Em, "getExistingTargetState");
function Am(r, e, t) {
  let n2 = new Dn(), i = [];
  for (let o2 of r.elements) {
    if (t.is(o2.alt) === false) continue;
    if (o2.state.type === bn) {
      i.push(o2);
      continue;
    }
    let l = o2.state.transitions.length;
    for (let c = 0; c < l; c++) {
      let u = o2.state.transitions[c], d = /* @__PURE__ */ vm(u, e);
      d !== void 0 && n2.add({
        state: d,
        alt: o2.alt,
        stack: o2.stack
      });
    }
  }
  let s;
  if (i.length === 0 && n2.size === 1 && (s = n2), s === void 0) {
    s = new Dn();
    for (let o2 of n2.elements) Ia(o2, s);
  }
  if (i.length > 0 && !Sm(s)) for (let o2 of i) s.add(o2);
  return s;
}
m$1(Am, "computeReachSet");
function vm(r, e) {
  if (r instanceof $n && ki(e, r.tokenType)) return r.target;
}
m$1(vm, "getReachableTarget");
function km(r, e) {
  let t;
  for (let n2 of r.elements) if (e.is(n2.alt) === true) {
    if (t === void 0) t = n2.alt;
    else if (t !== n2.alt) return;
  }
  return t;
}
m$1(km, "getUniqueAlt");
function Ad(r) {
  return {
    configs: r,
    edges: {},
    isAcceptState: false,
    prediction: -1
  };
}
m$1(Ad, "newDFAState");
function Ed(r, e, t, n2) {
  return n2 = /* @__PURE__ */ vd(r, n2), e.edges[t.tokenTypeIdx] = n2, n2;
}
m$1(Ed, "addDFAEdge");
function vd(r, e) {
  if (e === Fi) return e;
  let t = e.configs.key, n2 = r.states[t];
  return n2 !== void 0 ? n2 : (e.configs.finalize(), r.states[t] = e, e);
}
m$1(vd, "addDFAState");
function Im(r) {
  let e = new Dn(), t = r.transitions.length;
  for (let n2 = 0; n2 < t; n2++) {
    let s = {
      state: r.transitions[n2].target,
      alt: n2,
      stack: []
    };
    Ia(s, e);
  }
  return e;
}
m$1(Im, "computeStartState");
function Ia(r, e) {
  let t = r.state;
  if (t.type === bn) {
    if (r.stack.length > 0) {
      let i = [
        ...r.stack
      ], o2 = {
        state: /* @__PURE__ */ i.pop(),
        alt: r.alt,
        stack: i
      };
      Ia(o2, e);
    } else e.add(r);
    return;
  }
  t.epsilonOnlyTransitions || e.add(r);
  let n2 = t.transitions.length;
  for (let i = 0; i < n2; i++) {
    let s = t.transitions[i], o2 = /* @__PURE__ */ Nm(r, s);
    o2 !== void 0 && Ia(o2, e);
  }
}
m$1(Ia, "closure");
function Nm(r, e) {
  if (e instanceof Di) return {
    state: e.target,
    alt: r.alt,
    stack: r.stack
  };
  if (e instanceof Pn) {
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
m$1(Nm, "getEpsilonTarget");
function Sm(r) {
  for (let e of r.elements) if (e.state.type === bn) return true;
  return false;
}
m$1(Sm, "hasConfigInRuleStopState");
function Cm(r) {
  for (let e of r.elements) if (e.state.type !== bn) return false;
  return true;
}
m$1(Cm, "allConfigsInRuleStopStates");
function _m(r) {
  if (Cm(r)) return true;
  let e = /* @__PURE__ */ wm(r.elements);
  return Lm(e) && !Om(e);
}
m$1(_m, "hasConflictTerminatingPrediction");
function wm(r) {
  let e = /* @__PURE__ */ new Map();
  for (let t of r) {
    let n2 = /* @__PURE__ */ Ll(t, false), i = /* @__PURE__ */ e.get(n2);
    i === void 0 && (i = {}, e.set(n2, i)), i[t.alt] = true;
  }
  return e;
}
m$1(wm, "getConflictingAltSets");
function Lm(r) {
  for (let e of Array.from(/* @__PURE__ */ r.values())) if (Object.keys(e).length > 1) return true;
  return false;
}
m$1(Lm, "hasConflictingAltSet");
function Om(r) {
  for (let e of Array.from(/* @__PURE__ */ r.values())) if (Object.keys(e).length === 1) return true;
  return false;
}
m$1(Om, "hasStateAssociatedWithOneAlt");
var kd;
(function(r) {
  function e(t) {
    return typeof t == "string";
  }
  m$1(e, "is"), r.is = e;
})(kd || (kd = {}));
var $l;
(function(r) {
  function e(t) {
    return typeof t == "string";
  }
  m$1(e, "is"), r.is = e;
})($l || ($l = {}));
var Id;
(function(r) {
  r.MIN_VALUE = -2147483648, r.MAX_VALUE = 2147483647;
  function e(t) {
    return typeof t == "number" && r.MIN_VALUE <= t && t <= r.MAX_VALUE;
  }
  m$1(e, "is"), r.is = e;
})(Id || (Id = {}));
var Na;
(function(r) {
  r.MIN_VALUE = 0, r.MAX_VALUE = 2147483647;
  function e(t) {
    return typeof t == "number" && r.MIN_VALUE <= t && t <= r.MAX_VALUE;
  }
  m$1(e, "is"), r.is = e;
})(Na || (Na = {}));
var B;
(function(r) {
  function e(n2, i) {
    return n2 === Number.MAX_VALUE && (n2 = Na.MAX_VALUE), i === Number.MAX_VALUE && (i = Na.MAX_VALUE), {
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
var Sa;
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
})(Sa || (Sa = {}));
var Nd;
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
})(Nd || (Nd = {}));
var Pl;
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
})(Pl || (Pl = {}));
var Sd;
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
    return m.objectLiteral(i) && U.is(i.range) && Pl.is(i.color);
  }
  m$1(t, "is"), r.is = t;
})(Sd || (Sd = {}));
var Cd;
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
    return m.objectLiteral(i) && m.string(i.label) && (m.undefined(i.textEdit) || Un.is(i)) && (m.undefined(i.additionalTextEdits) || m.typedArray(i.additionalTextEdits, Un.is));
  }
  m$1(t, "is"), r.is = t;
})(Cd || (Cd = {}));
var _d;
(function(r) {
  r.Comment = "comment", r.Imports = "imports", r.Region = "region";
})(_d || (_d = {}));
var wd;
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
})(wd || (wd = {}));
var bl;
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
    return m.defined(i) && Sa.is(i.location) && m.string(i.message);
  }
  m$1(t, "is"), r.is = t;
})(bl || (bl = {}));
var Ld;
(function(r) {
  r.Error = 1, r.Warning = 2, r.Information = 3, r.Hint = 4;
})(Ld || (Ld = {}));
var Od;
(function(r) {
  r.Unnecessary = 1, r.Deprecated = 2;
})(Od || (Od = {}));
var $d;
(function(r) {
  function e(t) {
    let n2 = t;
    return m.objectLiteral(n2) && m.string(n2.href);
  }
  m$1(e, "is"), r.is = e;
})($d || ($d = {}));
var Ca;
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
    return m.defined(s) && U.is(s.range) && m.string(s.message) && (m.number(s.severity) || m.undefined(s.severity)) && (m.integer(s.code) || m.string(s.code) || m.undefined(s.code)) && (m.undefined(s.codeDescription) || m.string((i = s.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (m.string(s.source) || m.undefined(s.source)) && (m.undefined(s.relatedInformation) || m.typedArray(s.relatedInformation, bl.is));
  }
  m$1(t, "is"), r.is = t;
})(Ca || (Ca = {}));
var Fn;
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
})(Fn || (Fn = {}));
var Un;
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
})(Un || (Un = {}));
var Ml;
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
})(Ml || (Ml = {}));
var Gn;
(function(r) {
  function e(t) {
    let n2 = t;
    return m.string(n2);
  }
  m$1(e, "is"), r.is = e;
})(Gn || (Gn = {}));
var Pd;
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
    return Un.is(o2) && (Ml.is(o2.annotationId) || Gn.is(o2.annotationId));
  }
  m$1(i, "is"), r.is = i;
})(Pd || (Pd = {}));
var Dl;
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
    return m.defined(i) && Wl.is(i.textDocument) && Array.isArray(i.edits);
  }
  m$1(t, "is"), r.is = t;
})(Dl || (Dl = {}));
var Fl;
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
    return i && i.kind === "create" && m.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || m.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || m.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Gn.is(i.annotationId));
  }
  m$1(t, "is"), r.is = t;
})(Fl || (Fl = {}));
var Ul;
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
    return i && i.kind === "rename" && m.string(i.oldUri) && m.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || m.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || m.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Gn.is(i.annotationId));
  }
  m$1(t, "is"), r.is = t;
})(Ul || (Ul = {}));
var Gl;
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
    return i && i.kind === "delete" && m.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || m.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || m.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || Gn.is(i.annotationId));
  }
  m$1(t, "is"), r.is = t;
})(Gl || (Gl = {}));
var Bl;
(function(r) {
  function e(t) {
    let n2 = t;
    return n2 && (n2.changes !== void 0 || n2.documentChanges !== void 0) && (n2.documentChanges === void 0 || n2.documentChanges.every((i) => m.string(i.kind) ? Fl.is(i) || Ul.is(i) || Gl.is(i) : Dl.is(i)));
  }
  m$1(e, "is"), r.is = e;
})(Bl || (Bl = {}));
var bd;
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
})(bd || (bd = {}));
var Md;
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
})(Md || (Md = {}));
var Wl;
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
})(Wl || (Wl = {}));
var Dd;
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
})(Dd || (Dd = {}));
var jl;
(function(r) {
  r.PlainText = "plaintext", r.Markdown = "markdown";
  function e(t) {
    let n2 = t;
    return n2 === r.PlainText || n2 === r.Markdown;
  }
  m$1(e, "is"), r.is = e;
})(jl || (jl = {}));
var Gi;
(function(r) {
  function e(t) {
    let n2 = t;
    return m.objectLiteral(t) && jl.is(n2.kind) && m.string(n2.value);
  }
  m$1(e, "is"), r.is = e;
})(Gi || (Gi = {}));
var Fd;
(function(r) {
  r.Text = 1, r.Method = 2, r.Function = 3, r.Constructor = 4, r.Field = 5, r.Variable = 6, r.Class = 7, r.Interface = 8, r.Module = 9, r.Property = 10, r.Unit = 11, r.Value = 12, r.Enum = 13, r.Keyword = 14, r.Snippet = 15, r.Color = 16, r.File = 17, r.Reference = 18, r.Folder = 19, r.EnumMember = 20, r.Constant = 21, r.Struct = 22, r.Event = 23, r.Operator = 24, r.TypeParameter = 25;
})(Fd || (Fd = {}));
var Ud;
(function(r) {
  r.PlainText = 1, r.Snippet = 2;
})(Ud || (Ud = {}));
var Gd;
(function(r) {
  r.Deprecated = 1;
})(Gd || (Gd = {}));
var Bd;
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
})(Bd || (Bd = {}));
var Wd;
(function(r) {
  r.asIs = 1, r.adjustIndentation = 2;
})(Wd || (Wd = {}));
var jd;
(function(r) {
  function e(t) {
    let n2 = t;
    return n2 && (m.string(n2.detail) || n2.detail === void 0) && (m.string(n2.description) || n2.description === void 0);
  }
  m$1(e, "is"), r.is = e;
})(jd || (jd = {}));
var Vd;
(function(r) {
  function e(t) {
    return {
      label: t
    };
  }
  m$1(e, "create"), r.create = e;
})(Vd || (Vd = {}));
var Kd;
(function(r) {
  function e(t, n2) {
    return {
      items: t || [],
      isIncomplete: !!n2
    };
  }
  m$1(e, "create"), r.create = e;
})(Kd || (Kd = {}));
var _a;
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
})(_a || (_a = {}));
var Hd;
(function(r) {
  function e(t) {
    let n2 = t;
    return !!n2 && m.objectLiteral(n2) && (Gi.is(n2.contents) || _a.is(n2.contents) || m.typedArray(n2.contents, _a.is)) && (t.range === void 0 || U.is(t.range));
  }
  m$1(e, "is"), r.is = e;
})(Hd || (Hd = {}));
var zd;
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
})(zd || (zd = {}));
var qd;
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
})(qd || (qd = {}));
var Xd;
(function(r) {
  r.Text = 1, r.Read = 2, r.Write = 3;
})(Xd || (Xd = {}));
var Yd;
(function(r) {
  function e(t, n2) {
    let i = {
      range: t
    };
    return m.number(n2) && (i.kind = n2), i;
  }
  m$1(e, "create"), r.create = e;
})(Yd || (Yd = {}));
var Jd;
(function(r) {
  r.File = 1, r.Module = 2, r.Namespace = 3, r.Package = 4, r.Class = 5, r.Method = 6, r.Property = 7, r.Field = 8, r.Constructor = 9, r.Enum = 10, r.Interface = 11, r.Function = 12, r.Variable = 13, r.Constant = 14, r.String = 15, r.Number = 16, r.Boolean = 17, r.Array = 18, r.Object = 19, r.Key = 20, r.Null = 21, r.EnumMember = 22, r.Struct = 23, r.Event = 24, r.Operator = 25, r.TypeParameter = 26;
})(Jd || (Jd = {}));
var Qd;
(function(r) {
  r.Deprecated = 1;
})(Qd || (Qd = {}));
var Zd;
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
})(Zd || (Zd = {}));
var ef;
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
})(ef || (ef = {}));
var tf;
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
})(tf || (tf = {}));
var rf;
(function(r) {
  r.Empty = "", r.QuickFix = "quickfix", r.Refactor = "refactor", r.RefactorExtract = "refactor.extract", r.RefactorInline = "refactor.inline", r.RefactorRewrite = "refactor.rewrite", r.Source = "source", r.SourceOrganizeImports = "source.organizeImports", r.SourceFixAll = "source.fixAll";
})(rf || (rf = {}));
var wa;
(function(r) {
  r.Invoked = 1, r.Automatic = 2;
})(wa || (wa = {}));
var nf;
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
    return m.defined(i) && m.typedArray(i.diagnostics, Ca.is) && (i.only === void 0 || m.typedArray(i.only, m.string)) && (i.triggerKind === void 0 || i.triggerKind === wa.Invoked || i.triggerKind === wa.Automatic);
  }
  m$1(t, "is"), r.is = t;
})(nf || (nf = {}));
var sf;
(function(r) {
  function e(n2, i, s) {
    let o2 = {
      title: n2
    }, l = true;
    return typeof i == "string" ? (l = false, o2.kind = i) : Fn.is(i) ? o2.command = i : o2.edit = i, l && s !== void 0 && (o2.kind = s), o2;
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return i && m.string(i.title) && (i.diagnostics === void 0 || m.typedArray(i.diagnostics, Ca.is)) && (i.kind === void 0 || m.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || Fn.is(i.command)) && (i.isPreferred === void 0 || m.boolean(i.isPreferred)) && (i.edit === void 0 || Bl.is(i.edit));
  }
  m$1(t, "is"), r.is = t;
})(sf || (sf = {}));
var af;
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
    return m.defined(i) && U.is(i.range) && (m.undefined(i.command) || Fn.is(i.command));
  }
  m$1(t, "is"), r.is = t;
})(af || (af = {}));
var of;
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
})(of || (of = {}));
var lf;
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
})(lf || (lf = {}));
var cf;
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
})(cf || (cf = {}));
var uf;
(function(r) {
  r.namespace = "namespace", r.type = "type", r.class = "class", r.enum = "enum", r.interface = "interface", r.struct = "struct", r.typeParameter = "typeParameter", r.parameter = "parameter", r.variable = "variable", r.property = "property", r.enumMember = "enumMember", r.event = "event", r.function = "function", r.method = "method", r.macro = "macro", r.keyword = "keyword", r.modifier = "modifier", r.comment = "comment", r.string = "string", r.number = "number", r.regexp = "regexp", r.operator = "operator", r.decorator = "decorator";
})(uf || (uf = {}));
var df;
(function(r) {
  r.declaration = "declaration", r.definition = "definition", r.readonly = "readonly", r.static = "static", r.deprecated = "deprecated", r.abstract = "abstract", r.async = "async", r.modification = "modification", r.documentation = "documentation", r.defaultLibrary = "defaultLibrary";
})(df || (df = {}));
var ff;
(function(r) {
  function e(t) {
    let n2 = t;
    return m.objectLiteral(n2) && (n2.resultId === void 0 || typeof n2.resultId == "string") && Array.isArray(n2.data) && (n2.data.length === 0 || typeof n2.data[0] == "number");
  }
  m$1(e, "is"), r.is = e;
})(ff || (ff = {}));
var hf;
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
})(hf || (hf = {}));
var pf;
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
})(pf || (pf = {}));
var mf;
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
})(mf || (mf = {}));
var gf;
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
})(gf || (gf = {}));
var Vl;
(function(r) {
  r.Type = 1, r.Parameter = 2;
  function e(t) {
    return t === 1 || t === 2;
  }
  m$1(e, "is"), r.is = e;
})(Vl || (Vl = {}));
var Kl;
(function(r) {
  function e(n2) {
    return {
      value: n2
    };
  }
  m$1(e, "create"), r.create = e;
  function t(n2) {
    let i = n2;
    return m.objectLiteral(i) && (i.tooltip === void 0 || m.string(i.tooltip) || Gi.is(i.tooltip)) && (i.location === void 0 || Sa.is(i.location)) && (i.command === void 0 || Fn.is(i.command));
  }
  m$1(t, "is"), r.is = t;
})(Kl || (Kl = {}));
var yf;
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
    return m.objectLiteral(i) && B.is(i.position) && (m.string(i.label) || m.typedArray(i.label, Kl.is)) && (i.kind === void 0 || Vl.is(i.kind)) && i.textEdits === void 0 || m.typedArray(i.textEdits, Un.is) && (i.tooltip === void 0 || m.string(i.tooltip) || Gi.is(i.tooltip)) && (i.paddingLeft === void 0 || m.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || m.boolean(i.paddingRight));
  }
  m$1(t, "is"), r.is = t;
})(yf || (yf = {}));
var Tf;
(function(r) {
  function e(t) {
    return {
      kind: "snippet",
      value: t
    };
  }
  m$1(e, "createSnippet"), r.createSnippet = e;
})(Tf || (Tf = {}));
var xf;
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
})(xf || (xf = {}));
var Rf;
(function(r) {
  function e(t) {
    return {
      items: t
    };
  }
  m$1(e, "create"), r.create = e;
})(Rf || (Rf = {}));
var Ef;
(function(r) {
  r.Invoked = 0, r.Automatic = 1;
})(Ef || (Ef = {}));
var Af;
(function(r) {
  function e(t, n2) {
    return {
      range: t,
      text: n2
    };
  }
  m$1(e, "create"), r.create = e;
})(Af || (Af = {}));
var vf;
(function(r) {
  function e(t, n2) {
    return {
      triggerKind: t,
      selectedCompletionInfo: n2
    };
  }
  m$1(e, "create"), r.create = e;
})(vf || (vf = {}));
var kf;
(function(r) {
  function e(t) {
    let n2 = t;
    return m.objectLiteral(n2) && $l.is(n2.uri) && m.string(n2.name);
  }
  m$1(e, "is"), r.is = e;
})(kf || (kf = {}));
var If;
(function(r) {
  function e(s, o2, l, c) {
    return new Hl(s, o2, l, c);
  }
  m$1(e, "create"), r.create = e;
  function t(s) {
    let o2 = s;
    return !!(m.defined(o2) && m.string(o2.uri) && (m.undefined(o2.languageId) || m.string(o2.languageId)) && m.uinteger(o2.lineCount) && m.func(o2.getText) && m.func(o2.positionAt) && m.func(o2.offsetAt));
  }
  m$1(t, "is"), r.is = t;
  function n2(s, o2) {
    let l = /* @__PURE__ */ s.getText(), c = /* @__PURE__ */ i(o2, (d, f) => {
      let h2 = d.range.start.line - f.range.start.line;
      return h2 === 0 ? d.range.start.character - f.range.start.character : h2;
    }), u = l.length;
    for (let d = c.length - 1; d >= 0; d--) {
      let f = c[d], h2 = /* @__PURE__ */ s.offsetAt(f.range.start), p2 = /* @__PURE__ */ s.offsetAt(f.range.end);
      if (p2 <= u) l = l.substring(0, h2) + f.newText + l.substring(p2, l.length);
      else throw new Error("Overlapping edit");
      u = h2;
    }
    return l;
  }
  m$1(n2, "applyEdits"), r.applyEdits = n2;
  function i(s, o2) {
    if (s.length <= 1) return s;
    let l = s.length / 2 | 0, c = /* @__PURE__ */ s.slice(0, l), u = /* @__PURE__ */ s.slice(l);
    i(c, o2), i(u, o2);
    let d = 0, f = 0, h2 = 0;
    for (; d < c.length && f < u.length; ) o2(c[d], u[f]) <= 0 ? s[h2++] = c[d++] : s[h2++] = u[f++];
    for (; d < c.length; ) s[h2++] = c[d++];
    for (; f < u.length; ) s[h2++] = u[f++];
    return s;
  }
  m$1(i, "mergeSort");
})(If || (If = {}));
var Hl = (_ka = class {
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
  function t(p2) {
    return typeof p2 < "u";
  }
  m$1(t, "defined"), r.defined = t;
  function n2(p2) {
    return typeof p2 > "u";
  }
  m$1(n2, "undefined"), r.undefined = n2;
  function i(p2) {
    return p2 === true || p2 === false;
  }
  m$1(i, "boolean"), r.boolean = i;
  function s(p2) {
    return e.call(p2) === "[object String]";
  }
  m$1(s, "string"), r.string = s;
  function o2(p2) {
    return e.call(p2) === "[object Number]";
  }
  m$1(o2, "number"), r.number = o2;
  function l(p2, g, y) {
    return e.call(p2) === "[object Number]" && g <= p2 && p2 <= y;
  }
  m$1(l, "numberRange"), r.numberRange = l;
  function c(p2) {
    return e.call(p2) === "[object Number]" && -2147483648 <= p2 && p2 <= 2147483647;
  }
  m$1(c, "integer"), r.integer = c;
  function u(p2) {
    return e.call(p2) === "[object Number]" && 0 <= p2 && p2 <= 2147483647;
  }
  m$1(u, "uinteger"), r.uinteger = u;
  function d(p2) {
    return e.call(p2) === "[object Function]";
  }
  m$1(d, "func"), r.func = d;
  function f(p2) {
    return p2 !== null && typeof p2 == "object";
  }
  m$1(f, "objectLiteral"), r.objectLiteral = f;
  function h2(p2, g) {
    return Array.isArray(p2) && p2.every(g);
  }
  m$1(h2, "typedArray"), r.typedArray = h2;
})(m || (m = {}));
var Bi = (_la = class {
  constructor() {
    this.nodeStack = [];
  }
  get current() {
    var e;
    return (e = this.nodeStack[this.nodeStack.length - 1]) !== null && e !== void 0 ? e : this.rootNode;
  }
  buildRootNode(e) {
    return this.rootNode = new Bn(e), this.rootNode.root = this.rootNode, this.nodeStack = [
      this.rootNode
    ], this.rootNode;
  }
  buildCompositeNode(e) {
    let t = new gr();
    return t.grammarSource = e, t.root = this.rootNode, this.current.content.push(t), this.nodeStack.push(t), t;
  }
  buildLeafNode(e, t) {
    let n2 = new mr(e.startOffset, e.image.length, Sr(e), e.tokenType, !t);
    return n2.grammarSource = t, n2.root = this.rootNode, this.current.content.push(n2), n2;
  }
  removeNode(e) {
    let t = e.container;
    if (t) {
      let n2 = /* @__PURE__ */ t.content.indexOf(e);
      n2 >= 0 && t.content.splice(n2, 1);
    }
  }
  addHiddenNodes(e) {
    let t = [];
    for (let s of e) {
      let o2 = new mr(s.startOffset, s.image.length, Sr(s), s.tokenType, true);
      o2.root = this.rootNode, t.push(o2);
    }
    let n2 = this.current, i = false;
    if (n2.content.length > 0) {
      n2.content.push(...t);
      return;
    }
    for (; n2.container; ) {
      let s = /* @__PURE__ */ n2.container.content.indexOf(n2);
      if (s > 0) {
        n2.container.content.splice(s, 0, ...t), i = true;
        break;
      }
      n2 = n2.container;
    }
    i || this.rootNode.content.unshift(...t);
  }
  construct(e) {
    let t = this.current;
    typeof e.$type == "string" && (this.current.astNode = e), e.$cstNode = t;
    let n2 = /* @__PURE__ */ this.nodeStack.pop();
    (n2 == null ? void 0 : n2.content.length) === 0 && this.removeNode(n2);
  }
}, __67 = new WeakMap(), __privateAdd(_la, __67, m$1(_la, "CstNodeBuilder")), _la), Wi = (_ma = class {
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
}, __68 = new WeakMap(), __privateAdd(_ma, __68, m$1(_ma, "AbstractCstNode")), _ma), mr = (_na = class extends Wi {
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
}, __69 = new WeakMap(), __privateAdd(_na, __69, m$1(_na, "LeafCstNodeImpl")), _na), gr = (_oa = class extends Wi {
  constructor() {
    super(...arguments), this.content = new zl(this);
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
}, __70 = new WeakMap(), __privateAdd(_oa, __70, m$1(_oa, "CompositeCstNodeImpl")), _oa), zl = (_pa = class extends Array {
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
}, __71 = new WeakMap(), __privateAdd(_pa, __71, m$1(_pa, "CstNodeContainer")), _pa), Bn = (_qa = class extends gr {
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
var La = /* @__PURE__ */ Symbol("Datatype");
function ql(r) {
  return r.$type === La;
}
m$1(ql, "isDataTypeNode");
var Nf = "​", Sf = /* @__PURE__ */ m$1((r) => r.endsWith(Nf) ? r : r + Nf, "withRuleSuffix"), ji = (_ra = class {
  constructor(e) {
    this._unorderedGroups = /* @__PURE__ */ new Map(), this.allRules = /* @__PURE__ */ new Map(), this.lexer = e.parser.Lexer;
    let t = this.lexer.definition, n2 = e.LanguageMetaData.mode === "production";
    this.wrapper = new Xl(t, Object.assign(/* @__PURE__ */ Object.assign({}, e.parser.ParserConfig), {
      skipValidations: n2,
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
  getRule(e) {
    return this.allRules.get(e);
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
}, __73 = new WeakMap(), __privateAdd(_ra, __73, m$1(_ra, "AbstractLangiumParser")), _ra), Vi = (_sa = class extends ji {
  get current() {
    return this.stack[this.stack.length - 1];
  }
  constructor(e) {
    super(e), this.nodeBuilder = new Bi(), this.stack = [], this.assignmentMap = /* @__PURE__ */ new Map(), this.linker = e.references.Linker, this.converter = e.parser.ValueConverter, this.astReflection = e.shared.AstReflection;
  }
  rule(e, t) {
    let n2 = /* @__PURE__ */ this.computeRuleType(e), i = /* @__PURE__ */ this.wrapper.DEFINE_RULE(/* @__PURE__ */ Sf(e.name), /* @__PURE__ */ this.startImplementation(n2, t).bind(this));
    return this.allRules.set(e.name, i), e.entry && (this.mainRule = i), i;
  }
  computeRuleType(e) {
    if (!e.fragment) {
      if (yi(e)) return La;
      {
        let t = /* @__PURE__ */ yn(e);
        return t ?? e.name;
      }
    }
  }
  parse(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.nodeBuilder.buildRootNode(e);
    let n2 = this.lexerResult = /* @__PURE__ */ this.lexer.tokenize(e);
    this.wrapper.input = n2.tokens;
    let i = t.rule ? this.allRules.get(t.rule) : this.mainRule;
    if (!i) throw new Error(t.rule ? `No rule found with name '${t.rule}'` : "No main rule available.");
    let s = /* @__PURE__ */ i.call(this.wrapper, {});
    return this.nodeBuilder.addHiddenNodes(n2.hidden), this.unorderedGroups.clear(), this.lexerResult = void 0, {
      value: s,
      lexerErrors: n2.errors,
      lexerReport: n2.report,
      parserErrors: this.wrapper.errors
    };
  }
  startImplementation(e, t) {
    return (n2) => {
      let i = !this.isRecording() && e !== void 0;
      if (i) {
        let o2 = {
          $type: e
        };
        this.stack.push(o2), e === La && (o2.value = "");
      }
      let s;
      try {
        s = /* @__PURE__ */ t(n2);
      } catch {
        s = void 0;
      }
      return s === void 0 && i && (s = /* @__PURE__ */ this.construct()), s;
    };
  }
  extractHiddenTokens(e) {
    let t = this.lexerResult.hidden;
    if (!t.length) return [];
    let n2 = e.startOffset;
    for (let i = 0; i < t.length; i++) if (t[i].startOffset > n2) return t.splice(0, i);
    return t.splice(0, t.length);
  }
  consume(e, t, n2) {
    let i = /* @__PURE__ */ this.wrapper.wrapConsume(e, t);
    if (!this.isRecording() && this.isValidToken(i)) {
      let s = /* @__PURE__ */ this.extractHiddenTokens(i);
      this.nodeBuilder.addHiddenNodes(s);
      let o2 = /* @__PURE__ */ this.nodeBuilder.buildLeafNode(i, n2), { assignment: l, isCrossRef: c } = this.getAssignment(n2), u = this.current;
      if (l) {
        let d = Ye(n2) ? i.image : this.converter.convert(i.image, o2);
        this.assign(l.operator, l.feature, d, o2, c);
      } else if (ql(u)) {
        let d = i.image;
        Ye(n2) || (d = /* @__PURE__ */ this.converter.convert(d, o2).toString()), u.value += d;
      }
    }
  }
  isValidToken(e) {
    return !e.isInsertedInRecovery && !isNaN(e.startOffset) && typeof e.endOffset == "number" && !isNaN(e.endOffset);
  }
  subrule(e, t, n2, i, s) {
    let o2;
    !this.isRecording() && !n2 && (o2 = /* @__PURE__ */ this.nodeBuilder.buildCompositeNode(i));
    let l = /* @__PURE__ */ this.wrapper.wrapSubrule(e, t, s);
    !this.isRecording() && o2 && o2.length > 0 && this.performSubruleAssignment(l, i, o2);
  }
  performSubruleAssignment(e, t, n2) {
    let { assignment: i, isCrossRef: s } = this.getAssignment(t);
    if (i) this.assign(i.operator, i.feature, e, n2, s);
    else if (!i) {
      let o2 = this.current;
      if (ql(o2)) o2.value += /* @__PURE__ */ e.toString();
      else if (typeof e == "object" && e) {
        let c = /* @__PURE__ */ this.assignWithoutOverride(e, o2);
        this.stack.pop(), this.stack.push(c);
      }
    }
  }
  action(e, t) {
    if (!this.isRecording()) {
      let n2 = this.current;
      if (t.feature && t.operator) {
        n2 = /* @__PURE__ */ this.construct(), this.nodeBuilder.removeNode(n2.$cstNode), this.nodeBuilder.buildCompositeNode(t).content.push(n2.$cstNode);
        let s = {
          $type: e
        };
        this.stack.push(s), this.assign(t.operator, t.feature, n2, n2.$cstNode, false);
      } else n2.$type = e;
    }
  }
  construct() {
    if (this.isRecording()) return;
    let e = this.current;
    return Ds(e), this.nodeBuilder.construct(e), this.stack.pop(), ql(e) ? this.converter.convert(e.value, e.$cstNode) : (bo(this.astReflection, e), e);
  }
  getAssignment(e) {
    if (!this.assignmentMap.has(e)) {
      let t = /* @__PURE__ */ ir(e, rt);
      this.assignmentMap.set(e, {
        assignment: t,
        isCrossRef: t ? nr(t.terminal) : false
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
    for (let [i, s] of Object.entries(t)) {
      let o2 = e[i];
      o2 === void 0 ? e[i] = s : Array.isArray(o2) && Array.isArray(s) && (s.push(...o2), e[i] = s);
    }
    let n2 = e.$cstNode;
    return n2 && (n2.astNode = void 0, e.$cstNode = void 0), e;
  }
  get definitionErrors() {
    return this.wrapper.definitionErrors;
  }
}, __74 = new WeakMap(), __privateAdd(_sa, __74, m$1(_sa, "LangiumParser")), _sa), Oa = (_ta = class {
  buildMismatchTokenMessage(e) {
    return Lt.buildMismatchTokenMessage(e);
  }
  buildNotAllInputParsedMessage(e) {
    return Lt.buildNotAllInputParsedMessage(e);
  }
  buildNoViableAltMessage(e) {
    return Lt.buildNoViableAltMessage(e);
  }
  buildEarlyExitMessage(e) {
    return Lt.buildEarlyExitMessage(e);
  }
}, __75 = new WeakMap(), __privateAdd(_ta, __75, m$1(_ta, "AbstractParserErrorMessageProvider")), _ta), Wn = (_ua = class extends Oa {
  buildMismatchTokenMessage(param) {
    let { expected: e, actual: t } = param;
    return `Expecting ${e.LABEL ? "`" + e.LABEL + "`" : e.name.endsWith(":KW") ? `keyword '${e.name.substring(0, e.name.length - 3)}'` : `token of type '${e.name}'`} but found \`${t.image}\`.`;
  }
  buildNotAllInputParsedMessage(param) {
    let { firstRedundant: e } = param;
    return `Expecting end of file but found \`${e.image}\`.`;
  }
}, __76 = new WeakMap(), __privateAdd(_ua, __76, m$1(_ua, "LangiumParserErrorMessageProvider")), _ua), Ki = (_va = class extends ji {
  constructor() {
    super(...arguments), this.tokens = [], this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  action() {
  }
  construct() {
  }
  parse(e) {
    this.resetState();
    let t = /* @__PURE__ */ this.lexer.tokenize(e, {
      mode: "partial"
    });
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
    let n2 = /* @__PURE__ */ this.wrapper.DEFINE_RULE(/* @__PURE__ */ Sf(e.name), /* @__PURE__ */ this.startImplementation(t).bind(this));
    return this.allRules.set(e.name, n2), e.entry && (this.mainRule = n2), n2;
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
  subrule(e, t, n2, i, s) {
    this.before(i), this.wrapper.wrapSubrule(e, t, s), this.after(i);
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
}, __77 = new WeakMap(), __privateAdd(_va, __77, m$1(_va, "LangiumCompletionParser")), _va), $m = {
  recoveryEnabled: true,
  nodeLocationTracking: "full",
  skipValidations: true,
  errorMessageProvider: new Wn()
}, Xl = (_wa = class extends bi {
  constructor(e, t) {
    let n2 = t && "maxLookahead" in t;
    super(e, /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, $m), {
      lookaheadStrategy: n2 ? new Ot({
        maxLookahead: t.maxLookahead
      }) : new Ui({
        logging: t.skipValidations ? () => {
        } : void 0
      })
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
function Hi(r, e, t) {
  return Pm({
    parser: e,
    tokens: t,
    ruleNames: /* @__PURE__ */ new Map()
  }, r), e;
}
m$1(Hi, "createParser");
function Pm(r, e) {
  let t = /* @__PURE__ */ mi(e, false), n2 = /* @__PURE__ */ K(e.rules).filter(_e).filter((i) => t.has(i));
  for (let i of n2) {
    let s = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, r), {
      consume: 1,
      optional: 1,
      subrule: 1,
      many: 1,
      or: 1
    });
    r.parser.rule(i, /* @__PURE__ */ yr(s, i.definition));
  }
}
m$1(Pm, "buildRules");
function yr(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  let n2;
  if (Ye(e)) n2 = /* @__PURE__ */ Bm(r, e);
  else if (kt(e)) n2 = /* @__PURE__ */ bm(r, e);
  else if (rt(e)) n2 = /* @__PURE__ */ yr(r, e.terminal);
  else if (nr(e)) n2 = /* @__PURE__ */ Cf(r, e);
  else if (nt(e)) n2 = /* @__PURE__ */ Mm(r, e);
  else if (Ps(e)) n2 = /* @__PURE__ */ Fm(r, e);
  else if (Ms(e)) n2 = /* @__PURE__ */ Um(r, e);
  else if (Ut(e)) n2 = /* @__PURE__ */ Gm(r, e);
  else if (No(e)) {
    let i = r.consume++;
    n2 = /* @__PURE__ */ m$1(() => r.parser.consume(i, qe, e), "method");
  } else throw new tr(e.$cstNode, `Unexpected element type: ${e.$type}`);
  return _f(r, t ? void 0 : $a(e), n2, e.cardinality);
}
m$1(yr, "buildElement");
function bm(r, e) {
  let t = /* @__PURE__ */ Ti(e);
  return () => r.parser.action(t, e);
}
m$1(bm, "buildAction");
function Mm(r, e) {
  let t = e.rule.ref;
  if (_e(t)) {
    let n2 = r.subrule++, i = t.fragment, s = e.arguments.length > 0 ? Dm(t, e.arguments) : () => ({});
    return (o2) => r.parser.subrule(n2, /* @__PURE__ */ wf(r, t), i, e, /* @__PURE__ */ s(o2));
  } else if (He(t)) {
    let n2 = r.consume++, i = /* @__PURE__ */ Yl(r, t.name);
    return () => r.parser.consume(n2, i, e);
  } else if (t) ut();
  else throw new tr(e.$cstNode, `Undefined rule: ${e.rule.$refText}`);
}
m$1(Mm, "buildRuleCall");
function Dm(r, e) {
  let t = /* @__PURE__ */ e.map((n2) => $t(n2.value));
  return (n2) => {
    let i = {};
    for (let s = 0; s < t.length; s++) {
      let o2 = r.parameters[s], l = t[s];
      i[o2.name] = /* @__PURE__ */ l(n2);
    }
    return i;
  };
}
m$1(Dm, "buildRuleCallPredicate");
function $t(r) {
  if (xo(r)) {
    let e = /* @__PURE__ */ $t(r.left), t = /* @__PURE__ */ $t(r.right);
    return (n2) => e(n2) || t(n2);
  } else if (To(r)) {
    let e = /* @__PURE__ */ $t(r.left), t = /* @__PURE__ */ $t(r.right);
    return (n2) => e(n2) && t(n2);
  } else if (Ro(r)) {
    let e = /* @__PURE__ */ $t(r.value);
    return (t) => !e(t);
  } else if (Eo(r)) {
    let e = r.parameter.ref.name;
    return (t) => t !== void 0 && t[e] === true;
  } else if (yo(r)) {
    let e = !!r.true;
    return () => e;
  }
  ut();
}
m$1($t, "buildPredicate");
function Fm(r, e) {
  if (e.elements.length === 1) return yr(r, e.elements[0]);
  {
    let t = [];
    for (let i of e.elements) {
      let s = {
        ALT: /* @__PURE__ */ yr(r, i, true)
      }, o2 = /* @__PURE__ */ $a(i);
      o2 && (s.GATE = /* @__PURE__ */ $t(o2)), t.push(s);
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
m$1(Fm, "buildAlternatives");
function Um(r, e) {
  if (e.elements.length === 1) return yr(r, e.elements[0]);
  let t = [];
  for (let l of e.elements) {
    let c = {
      ALT: /* @__PURE__ */ yr(r, l, true)
    }, u = /* @__PURE__ */ $a(l);
    u && (c.GATE = /* @__PURE__ */ $t(u)), t.push(c);
  }
  let n2 = r.or++, i = /* @__PURE__ */ m$1((l, c) => {
    let u = /* @__PURE__ */ c.getRuleStack().join("-");
    return `uGroup_${l}_${u}`;
  }, "idFunc"), s = /* @__PURE__ */ m$1((l) => r.parser.alternatives(n2, /* @__PURE__ */ t.map((c, u) => {
    let d = {
      ALT: /* @__PURE__ */ m$1(() => true, "ALT")
    }, f = r.parser;
    d.ALT = () => {
      if (c.ALT(l), !f.isRecording()) {
        let p2 = /* @__PURE__ */ i(n2, f);
        f.unorderedGroups.get(p2) || f.unorderedGroups.set(p2, []);
        let g = /* @__PURE__ */ f.unorderedGroups.get(p2);
        typeof (g == null ? void 0 : g[u]) > "u" && (g[u] = true);
      }
    };
    let h2 = c.GATE;
    return h2 ? d.GATE = () => h2(l) : d.GATE = () => {
      let p2 = /* @__PURE__ */ f.unorderedGroups.get(/* @__PURE__ */ i(n2, f));
      return !(p2 == null ? void 0 : p2[u]);
    }, d;
  })), "alternatives"), o2 = /* @__PURE__ */ _f(r, /* @__PURE__ */ $a(e), s, "*");
  return (l) => {
    o2(l), r.parser.isRecording() || r.parser.unorderedGroups.delete(/* @__PURE__ */ i(n2, r.parser));
  };
}
m$1(Um, "buildUnorderedGroup");
function Gm(r, e) {
  let t = /* @__PURE__ */ e.elements.map((n2) => yr(r, n2));
  return (n2) => t.forEach((i) => i(n2));
}
m$1(Gm, "buildGroup");
function $a(r) {
  if (Ut(r)) return r.guardCondition;
}
m$1($a, "getGuardCondition");
function Cf(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.terminal;
  if (t) if (nt(t) && _e(t.rule.ref)) {
    let n2 = t.rule.ref, i = r.subrule++;
    return (s) => r.parser.subrule(i, /* @__PURE__ */ wf(r, n2), false, e, s);
  } else if (nt(t) && He(t.rule.ref)) {
    let n2 = r.consume++, i = /* @__PURE__ */ Yl(r, t.rule.ref.name);
    return () => r.parser.consume(n2, i, e);
  } else if (Ye(t)) {
    let n2 = r.consume++, i = /* @__PURE__ */ Yl(r, t.value);
    return () => r.parser.consume(n2, i, e);
  } else throw new Error("Could not build cross reference parser");
  else {
    if (!e.type.ref) throw new Error("Could not resolve reference to type: " + e.type.$refText);
    let n2 = /* @__PURE__ */ Ws(e.type.ref), i = n2 == null ? void 0 : n2.terminal;
    if (!i) throw new Error("Could not find name assignment for type: " + Ti(e.type.ref));
    return Cf(r, e, i);
  }
}
m$1(Cf, "buildCrossReference");
function Bm(r, e) {
  let t = r.consume++, n2 = r.tokens[e.value];
  if (!n2) throw new Error("Could not find token for keyword: " + e.value);
  return () => r.parser.consume(t, n2, e);
}
m$1(Bm, "buildKeyword");
function _f(r, e, t, n2) {
  let i = e && $t(e);
  if (!n2) if (i) {
    let s = r.or++;
    return (o2) => r.parser.alternatives(s, [
      {
        ALT: /* @__PURE__ */ m$1(() => t(o2), "ALT"),
        GATE: /* @__PURE__ */ m$1(() => i(o2), "GATE")
      },
      {
        ALT: /* @__PURE__ */ va(),
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
          ALT: /* @__PURE__ */ va(),
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
  } else ut();
}
m$1(_f, "wrap");
function wf(r, e) {
  let t = /* @__PURE__ */ Wm(r, e), n2 = /* @__PURE__ */ r.parser.getRule(t);
  if (!n2) throw new Error(`Rule "${t}" not found."`);
  return n2;
}
m$1(wf, "getRule");
function Wm(r, e) {
  if (_e(e)) return e.name;
  if (r.ruleNames.has(e)) return r.ruleNames.get(e);
  {
    let t = e, n2 = t.$container, i = e.$type;
    for (; !_e(n2); ) (Ut(n2) || Ps(n2) || Ms(n2)) && (i = n2.elements.indexOf(t).toString() + ":" + i), t = n2, n2 = n2.$container;
    return i = n2.name + ":" + i, r.ruleNames.set(e, i), i;
  }
}
m$1(Wm, "getRuleName");
function Yl(r, e) {
  let t = r.tokens[e];
  if (!t) throw new Error(`Token "${e}" not found."`);
  return t;
}
m$1(Yl, "getToken");
function Jl(r) {
  let e = r.Grammar, t = r.parser.Lexer, n2 = new Ki(r);
  return Hi(e, n2, t.definition), n2.finalize(), n2;
}
m$1(Jl, "createCompletionParser");
function Ql(r) {
  let e = /* @__PURE__ */ Lf(r);
  return e.finalize(), e;
}
m$1(Ql, "createLangiumParser");
function Lf(r) {
  let e = r.Grammar, t = r.parser.Lexer, n2 = new Vi(r);
  return Hi(e, n2, t.definition);
}
m$1(Lf, "prepareLangiumParser");
var Pt = (_xa = class {
  constructor() {
    this.diagnostics = [];
  }
  buildTokens(e, t) {
    let n2 = /* @__PURE__ */ K(/* @__PURE__ */ mi(e, false)), i = /* @__PURE__ */ this.buildTerminalTokens(n2), s = /* @__PURE__ */ this.buildKeywordTokens(n2, i, t);
    return i.forEach((o2) => {
      let l = o2.PATTERN;
      typeof l == "object" && l && "test" in l && gn(l) ? s.unshift(o2) : s.push(o2);
    }), s;
  }
  flushLexingReport(e) {
    return {
      diagnostics: /* @__PURE__ */ this.popDiagnostics()
    };
  }
  popDiagnostics() {
    let e = [
      ...this.diagnostics
    ];
    return this.diagnostics = [], e;
  }
  buildTerminalTokens(e) {
    return e.filter(He).filter((t) => !t.fragment).map((t) => this.buildTerminalToken(t)).toArray();
  }
  buildTerminalToken(e) {
    let t = /* @__PURE__ */ Tn(e), n2 = this.requiresCustomPattern(t) ? this.regexPatternFunction(t) : t, i = {
      name: e.name,
      PATTERN: n2
    };
    return typeof n2 == "function" && (i.LINE_BREAKS = true), e.hidden && (i.GROUP = gn(t) ? se.SKIPPED : "hidden"), i;
  }
  requiresCustomPattern(e) {
    return e.flags.includes("u") || e.flags.includes("s") ? true : !!(e.source.includes("?<=") || e.source.includes("?<!"));
  }
  regexPatternFunction(e) {
    let t = new RegExp(e, e.flags + "y");
    return (n2, i) => (t.lastIndex = i, t.exec(n2));
  }
  buildKeywordTokens(e, t, n2) {
    return e.filter(_e).flatMap((i) => dt(i).filter(Ye)).distinct((i) => i.value).toArray().sort((i, s) => s.value.length - i.value.length).map((i) => this.buildKeywordToken(i, t, !!(n2 == null ? void 0 : n2.caseInsensitive)));
  }
  buildKeywordToken(e, t, n2) {
    let i = /* @__PURE__ */ this.buildKeywordPattern(e, n2), s = {
      name: e.value,
      PATTERN: i,
      LONGER_ALT: /* @__PURE__ */ this.findLongerAlt(e, t)
    };
    return typeof i == "function" && (s.LINE_BREAKS = true), s;
  }
  buildKeywordPattern(e, t) {
    return t ? new RegExp(Bo(e.value)) : e.value;
  }
  findLongerAlt(e, t) {
    return t.reduce((n2, i) => {
      let s = i == null ? void 0 : i.PATTERN;
      return (s == null ? void 0 : s.source) && Wo("^" + s.source + "$", e.value) && n2.push(i), n2;
    }, []);
  }
}, __79 = new WeakMap(), __privateAdd(_xa, __79, m$1(_xa, "DefaultTokenBuilder")), _xa);
var Tr = (_ya = class {
  convert(e, t) {
    let n2 = t.grammarSource;
    if (nr(n2) && (n2 = /* @__PURE__ */ Ko(n2)), nt(n2)) {
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
        return pt.convertInt(t);
      case "STRING":
        return pt.convertString(t);
      case "ID":
        return pt.convertID(t);
    }
    switch ((i = /* @__PURE__ */ Qo(e)) === null || i === void 0 ? void 0 : i.toLowerCase()) {
      case "number":
        return pt.convertNumber(t);
      case "boolean":
        return pt.convertBoolean(t);
      case "bigint":
        return pt.convertBigint(t);
      case "date":
        return pt.convertDate(t);
      default:
        return t;
    }
  }
}, __80 = new WeakMap(), __privateAdd(_ya, __80, m$1(_ya, "DefaultValueConverter")), _ya), pt;
(function(r) {
  function e(u) {
    let d = "";
    for (let f = 1; f < u.length - 1; f++) {
      let h2 = /* @__PURE__ */ u.charAt(f);
      if (h2 === "\\") {
        let p2 = /* @__PURE__ */ u.charAt(++f);
        d += /* @__PURE__ */ t(p2);
      } else d += h2;
    }
    return d;
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
})(pt || (pt = {}));
var _ = {};
p(_, /* @__PURE__ */ q$1(/* @__PURE__ */ Mf()));
function oc() {
  return new Promise((r) => {
    typeof setImmediate > "u" ? setTimeout(r, 0) : setImmediate(r);
  });
}
m$1(oc, "delayNextTick");
var Da = 0, Df = 10;
function Fa() {
  return Da = /* @__PURE__ */ performance.now(), new _.CancellationTokenSource();
}
m$1(Fa, "startCancelableOperation");
function Ff(r) {
  Df = r;
}
m$1(Ff, "setInterruptionPeriod");
var mt = /* @__PURE__ */ Symbol("OperationCancelled");
function gt(r) {
  return r === mt;
}
m$1(gt, "isOperationCancelled");
async function ue(r) {
  if (r === _.CancellationToken.None) return;
  let e = /* @__PURE__ */ performance.now();
  if (e - Da >= Df && (Da = e, await oc(), Da = /* @__PURE__ */ performance.now()), r.isCancellationRequested) throw mt;
}
m$1(ue, "interruptAndCheck");
var Ue = (_za = class {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = (n2) => (e(n2), this), this.reject = (n2) => (t(n2), this);
    });
  }
}, __81 = new WeakMap(), __privateAdd(_za, __81, m$1(_za, "Deferred")), _za);
var Ua = (_Aa = class {
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
      let i = /* @__PURE__ */ Bf(n2.range), s = /* @__PURE__ */ this.offsetAt(i.start), o2 = /* @__PURE__ */ this.offsetAt(i.end);
      this._content = this._content.substring(0, s) + n2.text + this._content.substring(o2, this._content.length);
      let l = /* @__PURE__ */ Math.max(i.start.line, 0), c = /* @__PURE__ */ Math.max(i.end.line, 0), u = this._lineOffsets, d = /* @__PURE__ */ Uf(n2.text, false, s);
      if (c - l === d.length) for (let h2 = 0, p2 = d.length; h2 < p2; h2++) u[h2 + l + 1] = d[h2];
      else d.length < 1e4 ? u.splice(l + 1, c - l, ...d) : this._lineOffsets = u = /* @__PURE__ */ u.slice(0, l + 1).concat(d, /* @__PURE__ */ u.slice(c + 1));
      let f = n2.text.length - (o2 - s);
      if (f !== 0) for (let h2 = l + 1 + d.length, p2 = u.length; h2 < p2; h2++) u[h2] = u[h2] + f;
    } else if (_Aa.isFull(n2)) this._content = n2.text, this._lineOffsets = void 0;
    else throw new Error("Unknown change event received");
    this._version = t;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = /* @__PURE__ */ Uf(this._content, true)), this._lineOffsets;
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
    for (; e > t && Gf(/* @__PURE__ */ this._content.charCodeAt(e - 1)); ) e--;
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
}, __82 = new WeakMap(), __privateAdd(_Aa, __82, m$1(_Aa, "FullTextDocument")), _Aa), Kn;
(function(r) {
  function e(i, s, o2, l) {
    return new Ua(i, s, o2, l);
  }
  m$1(e, "create"), r.create = e;
  function t(i, s, o2) {
    if (i instanceof Ua) return i.update(s, o2), i;
    throw new Error("TextDocument.update: document must be created by TextDocument.create");
  }
  m$1(t, "update"), r.update = t;
  function n2(i, s) {
    let o2 = /* @__PURE__ */ i.getText(), l = /* @__PURE__ */ lc(/* @__PURE__ */ s.map(Qm), (d, f) => {
      let h2 = d.range.start.line - f.range.start.line;
      return h2 === 0 ? d.range.start.character - f.range.start.character : h2;
    }), c = 0, u = [];
    for (let d of l) {
      let f = /* @__PURE__ */ i.offsetAt(d.range.start);
      if (f < c) throw new Error("Overlapping edit");
      f > c && u.push(/* @__PURE__ */ o2.substring(c, f)), d.newText.length && u.push(d.newText), c = /* @__PURE__ */ i.offsetAt(d.range.end);
    }
    return u.push(/* @__PURE__ */ o2.substr(c)), u.join("");
  }
  m$1(n2, "applyEdits"), r.applyEdits = n2;
})(Kn || (Kn = {}));
function lc(r, e) {
  if (r.length <= 1) return r;
  let t = r.length / 2 | 0, n2 = /* @__PURE__ */ r.slice(0, t), i = /* @__PURE__ */ r.slice(t);
  lc(n2, e), lc(i, e);
  let s = 0, o2 = 0, l = 0;
  for (; s < n2.length && o2 < i.length; ) e(n2[s], i[o2]) <= 0 ? r[l++] = n2[s++] : r[l++] = i[o2++];
  for (; s < n2.length; ) r[l++] = n2[s++];
  for (; o2 < i.length; ) r[l++] = i[o2++];
  return r;
}
m$1(lc, "mergeSort");
function Uf(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  let n2 = e ? [
    t
  ] : [];
  for (let i = 0; i < r.length; i++) {
    let s = /* @__PURE__ */ r.charCodeAt(i);
    Gf(s) && (s === 13 && i + 1 < r.length && r.charCodeAt(i + 1) === 10 && i++, n2.push(t + i + 1));
  }
  return n2;
}
m$1(Uf, "computeLineOffsets");
function Gf(r) {
  return r === 13 || r === 10;
}
m$1(Gf, "isEOL");
function Bf(r) {
  let e = r.start, t = r.end;
  return e.line > t.line || e.line === t.line && e.character > t.character ? {
    start: t,
    end: e
  } : r;
}
m$1(Bf, "getWellformedRange");
function Qm(r) {
  let e = /* @__PURE__ */ Bf(r.range);
  return e !== r.range ? {
    newText: r.newText,
    range: e
  } : r;
}
m$1(Qm, "getWellformedEdit");
var Wf;
(() => {
  var r = {
    470: (i) => {
      function s(c) {
        if (typeof c != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(c));
      }
      m$1(s, "e");
      function o2(c, u) {
        for (var d, f = "", h2 = 0, p2 = -1, g = 0, y = 0; y <= c.length; ++y) {
          if (y < c.length) d = /* @__PURE__ */ c.charCodeAt(y);
          else {
            if (d === 47) break;
            d = 47;
          }
          if (d === 47) {
            if (!(p2 === y - 1 || g === 1)) if (p2 !== y - 1 && g === 2) {
              if (f.length < 2 || h2 !== 2 || f.charCodeAt(f.length - 1) !== 46 || f.charCodeAt(f.length - 2) !== 46) {
                if (f.length > 2) {
                  var v = /* @__PURE__ */ f.lastIndexOf("/");
                  if (v !== f.length - 1) {
                    v === -1 ? (f = "", h2 = 0) : h2 = (f = /* @__PURE__ */ f.slice(0, v)).length - 1 - f.lastIndexOf("/"), p2 = y, g = 0;
                    continue;
                  }
                } else if (f.length === 2 || f.length === 1) {
                  f = "", h2 = 0, p2 = y, g = 0;
                  continue;
                }
              }
              u && (f.length > 0 ? f += "/.." : f = "..", h2 = 2);
            } else f.length > 0 ? f += "/" + c.slice(p2 + 1, y) : f = /* @__PURE__ */ c.slice(p2 + 1, y), h2 = y - p2 - 1;
            p2 = y, g = 0;
          } else d === 46 && g !== -1 ? ++g : g = -1;
        }
        return f;
      }
      m$1(o2, "r");
      var l = {
        resolve: /* @__PURE__ */ m$1(function() {
          for (var c, u = "", d = false, f = arguments.length - 1; f >= -1 && !d; f--) {
            var h2;
            f >= 0 ? h2 = arguments[f] : (c === void 0 && (c = /* @__PURE__ */ process.cwd()), h2 = c), s(h2), h2.length !== 0 && (u = h2 + "/" + u, d = h2.charCodeAt(0) === 47);
          }
          return u = /* @__PURE__ */ o2(u, !d), d ? u.length > 0 ? "/" + u : "/" : u.length > 0 ? u : ".";
        }, "resolve"),
        normalize: /* @__PURE__ */ m$1(function(c) {
          if (s(c), c.length === 0) return ".";
          var u = c.charCodeAt(0) === 47, d = c.charCodeAt(c.length - 1) === 47;
          return (c = /* @__PURE__ */ o2(c, !u)).length !== 0 || u || (c = "."), c.length > 0 && d && (c += "/"), u ? "/" + c : c;
        }, "normalize"),
        isAbsolute: /* @__PURE__ */ m$1(function(c) {
          return s(c), c.length > 0 && c.charCodeAt(0) === 47;
        }, "isAbsolute"),
        join: /* @__PURE__ */ m$1(function() {
          if (arguments.length === 0) return ".";
          for (var c, u = 0; u < arguments.length; ++u) {
            var d = arguments[u];
            s(d), d.length > 0 && (c === void 0 ? c = d : c += "/" + d);
          }
          return c === void 0 ? "." : l.normalize(c);
        }, "join"),
        relative: /* @__PURE__ */ m$1(function(c, u) {
          if (s(c), s(u), c === u || (c = /* @__PURE__ */ l.resolve(c)) === (u = /* @__PURE__ */ l.resolve(u))) return "";
          for (var d = 1; d < c.length && c.charCodeAt(d) === 47; ++d) ;
          for (var f = c.length, h2 = f - d, p2 = 1; p2 < u.length && u.charCodeAt(p2) === 47; ++p2) ;
          for (var g = u.length - p2, y = h2 < g ? h2 : g, v = -1, R = 0; R <= y; ++R) {
            if (R === y) {
              if (g > y) {
                if (u.charCodeAt(p2 + R) === 47) return u.slice(p2 + R + 1);
                if (R === 0) return u.slice(p2 + R);
              } else h2 > y && (c.charCodeAt(d + R) === 47 ? v = R : R === 0 && (v = 0));
              break;
            }
            var A = /* @__PURE__ */ c.charCodeAt(d + R);
            if (A !== u.charCodeAt(p2 + R)) break;
            A === 47 && (v = R);
          }
          var x = "";
          for (R = d + v + 1; R <= f; ++R) R !== f && c.charCodeAt(R) !== 47 || (x.length === 0 ? x += ".." : x += "/..");
          return x.length > 0 ? x + u.slice(p2 + v) : (p2 += v, u.charCodeAt(p2) === 47 && ++p2, u.slice(p2));
        }, "relative"),
        _makeLong: /* @__PURE__ */ m$1(function(c) {
          return c;
        }, "_makeLong"),
        dirname: /* @__PURE__ */ m$1(function(c) {
          if (s(c), c.length === 0) return ".";
          for (var u = /* @__PURE__ */ c.charCodeAt(0), d = u === 47, f = -1, h2 = true, p2 = c.length - 1; p2 >= 1; --p2) if ((u = /* @__PURE__ */ c.charCodeAt(p2)) === 47) {
            if (!h2) {
              f = p2;
              break;
            }
          } else h2 = false;
          return f === -1 ? d ? "/" : "." : d && f === 1 ? "//" : c.slice(0, f);
        }, "dirname"),
        basename: /* @__PURE__ */ m$1(function(c, u) {
          if (u !== void 0 && typeof u != "string") throw new TypeError('"ext" argument must be a string');
          s(c);
          var d, f = 0, h2 = -1, p2 = true;
          if (u !== void 0 && u.length > 0 && u.length <= c.length) {
            if (u.length === c.length && u === c) return "";
            var g = u.length - 1, y = -1;
            for (d = c.length - 1; d >= 0; --d) {
              var v = /* @__PURE__ */ c.charCodeAt(d);
              if (v === 47) {
                if (!p2) {
                  f = d + 1;
                  break;
                }
              } else y === -1 && (p2 = false, y = d + 1), g >= 0 && (v === u.charCodeAt(g) ? --g == -1 && (h2 = d) : (g = -1, h2 = y));
            }
            return f === h2 ? h2 = y : h2 === -1 && (h2 = c.length), c.slice(f, h2);
          }
          for (d = c.length - 1; d >= 0; --d) if (c.charCodeAt(d) === 47) {
            if (!p2) {
              f = d + 1;
              break;
            }
          } else h2 === -1 && (p2 = false, h2 = d + 1);
          return h2 === -1 ? "" : c.slice(f, h2);
        }, "basename"),
        extname: /* @__PURE__ */ m$1(function(c) {
          s(c);
          for (var u = -1, d = 0, f = -1, h2 = true, p2 = 0, g = c.length - 1; g >= 0; --g) {
            var y = /* @__PURE__ */ c.charCodeAt(g);
            if (y !== 47) f === -1 && (h2 = false, f = g + 1), y === 46 ? u === -1 ? u = g : p2 !== 1 && (p2 = 1) : u !== -1 && (p2 = -1);
            else if (!h2) {
              d = g + 1;
              break;
            }
          }
          return u === -1 || f === -1 || p2 === 0 || p2 === 1 && u === f - 1 && u === d + 1 ? "" : c.slice(u, f);
        }, "extname"),
        format: /* @__PURE__ */ m$1(function(c) {
          if (c === null || typeof c != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof c);
          return function(u, d) {
            var f = d.dir || d.root, h2 = d.base || (d.name || "") + (d.ext || "");
            return f ? f === d.root ? f + h2 : f + "/" + h2 : h2;
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
          var d, f = /* @__PURE__ */ c.charCodeAt(0), h2 = f === 47;
          h2 ? (u.root = "/", d = 1) : d = 0;
          for (var p2 = -1, g = 0, y = -1, v = true, R = c.length - 1, A = 0; R >= d; --R) if ((f = /* @__PURE__ */ c.charCodeAt(R)) !== 47) y === -1 && (v = false, y = R + 1), f === 46 ? p2 === -1 ? p2 = R : A !== 1 && (A = 1) : p2 !== -1 && (A = -1);
          else if (!v) {
            g = R + 1;
            break;
          }
          return p2 === -1 || y === -1 || A === 0 || A === 1 && p2 === y - 1 && p2 === g + 1 ? y !== -1 && (u.base = u.name = g === 0 && h2 ? c.slice(1, y) : c.slice(g, y)) : (g === 0 && h2 ? (u.name = /* @__PURE__ */ c.slice(1, p2), u.base = /* @__PURE__ */ c.slice(1, y)) : (u.name = /* @__PURE__ */ c.slice(g, p2), u.base = /* @__PURE__ */ c.slice(g, y)), u.ext = /* @__PURE__ */ c.slice(p2, y)), g > 0 ? u.dir = /* @__PURE__ */ c.slice(0, g - 1) : h2 && (u.dir = "/"), u;
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
    var __131, __132;
    let i;
    t.r(n2), t.d(n2, {
      URI: /* @__PURE__ */ m$1(() => h2, "URI"),
      Utils: /* @__PURE__ */ m$1(() => yt, "Utils")
    }), typeof process == "object" ? i = process.platform === "win32" : typeof navigator == "object" && (i = navigator.userAgent.indexOf("Windows") >= 0);
    let s = /^\w[\w\d+.-]*$/, o2 = /^\//, l = /^\/\//;
    function c(k, T2) {
      if (!k.scheme && T2) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${k.authority}", path: "${k.path}", query: "${k.query}", fragment: "${k.fragment}"}`);
      if (k.scheme && !s.test(k.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
      if (k.path) {
        if (k.authority) {
          if (!o2.test(k.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (l.test(k.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
    m$1(c, "s");
    let u = "", d = "/", f = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    const _h3 = class _h3 {
      constructor(T2, C, S, V, $, O = false) {
        __publicField(this, "scheme");
        __publicField(this, "authority");
        __publicField(this, "path");
        __publicField(this, "query");
        __publicField(this, "fragment");
        typeof T2 == "object" ? (this.scheme = T2.scheme || u, this.authority = T2.authority || u, this.path = T2.path || u, this.query = T2.query || u, this.fragment = T2.fragment || u) : (this.scheme = /* @__PURE__ */ function(Oe, $e) {
          return Oe || $e ? Oe : "file";
        }(T2, O), this.authority = C || u, this.path = /* @__PURE__ */ function(Oe, $e) {
          switch (Oe) {
            case "https":
            case "http":
            case "file":
              $e ? $e[0] !== d && ($e = d + $e) : $e = d;
          }
          return $e;
        }(this.scheme, S || u), this.query = V || u, this.fragment = $ || u, c(this, O));
      }
      static isUri(T2) {
        return T2 instanceof _h3 || !!T2 && typeof T2.authority == "string" && typeof T2.fragment == "string" && typeof T2.path == "string" && typeof T2.query == "string" && typeof T2.scheme == "string" && typeof T2.fsPath == "string" && typeof T2.with == "function" && typeof T2.toString == "function";
      }
      get fsPath() {
        return A(this, false);
      }
      with(T2) {
        if (!T2) return this;
        let { scheme: C, authority: S, path: V, query: $, fragment: O } = T2;
        return C === void 0 ? C = this.scheme : C === null && (C = u), S === void 0 ? S = this.authority : S === null && (S = u), V === void 0 ? V = this.path : V === null && (V = u), $ === void 0 ? $ = this.query : $ === null && ($ = u), O === void 0 ? O = this.fragment : O === null && (O = u), C === this.scheme && S === this.authority && V === this.path && $ === this.query && O === this.fragment ? this : new g(C, S, V, $, O);
      }
      static parse(T2) {
        let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        let S = /* @__PURE__ */ f.exec(T2);
        return S ? new g(S[2] || u, Te(S[4] || u), Te(S[5] || u), Te(S[7] || u), Te(S[9] || u), C) : new g(u, u, u, u, u);
      }
      static file(T2) {
        let C = u;
        if (i && (T2 = /* @__PURE__ */ T2.replace(/\\/g, d)), T2[0] === d && T2[1] === d) {
          let S = /* @__PURE__ */ T2.indexOf(d, 2);
          S === -1 ? (C = /* @__PURE__ */ T2.substring(2), T2 = d) : (C = /* @__PURE__ */ T2.substring(2, S), T2 = T2.substring(S) || d);
        }
        return new g("file", C, T2, u, u);
      }
      static from(T2) {
        let C = new g(T2.scheme, T2.authority, T2.path, T2.query, T2.fragment);
        return c(C, true), C;
      }
      toString() {
        let T2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        return x(this, T2);
      }
      toJSON() {
        return this;
      }
      static revive(T2) {
        if (T2) {
          if (T2 instanceof _h3) return T2;
          {
            let C = new g(T2);
            return C._formatted = T2.external, C._fsPath = T2._sep === p2 ? T2.fsPath : null, C;
          }
        }
        return T2;
      }
    };
    __131 = new WeakMap();
    __privateAdd(_h3, __131, m$1(_h3, "f"));
    let h2 = _h3;
    let p2 = i ? 1 : void 0;
    const _g3 = class _g3 extends h2 {
      constructor() {
        super(...arguments);
        __publicField(this, "_formatted", null);
        __publicField(this, "_fsPath", null);
      }
      get fsPath() {
        return this._fsPath || (this._fsPath = /* @__PURE__ */ A(this, false)), this._fsPath;
      }
      toString() {
        let T2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        return T2 ? x(this, true) : (this._formatted || (this._formatted = /* @__PURE__ */ x(this, false)), this._formatted);
      }
      toJSON() {
        let T2 = {
          $mid: 1
        };
        return this._fsPath && (T2.fsPath = this._fsPath, T2._sep = p2), this._formatted && (T2.external = this._formatted), this.path && (T2.path = this.path), this.scheme && (T2.scheme = this.scheme), this.authority && (T2.authority = this.authority), this.query && (T2.query = this.query), this.fragment && (T2.fragment = this.fragment), T2;
      }
    };
    __132 = new WeakMap();
    __privateAdd(_g3, __132, m$1(_g3, "l"));
    let g = _g3;
    let y = {
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
    function v(k, T2, C) {
      let S, V = -1;
      for (let $ = 0; $ < k.length; $++) {
        let O = /* @__PURE__ */ k.charCodeAt($);
        if (O >= 97 && O <= 122 || O >= 65 && O <= 90 || O >= 48 && O <= 57 || O === 45 || O === 46 || O === 95 || O === 126 || T2 && O === 47 || C && O === 91 || C && O === 93 || C && O === 58) V !== -1 && (S += /* @__PURE__ */ encodeURIComponent(/* @__PURE__ */ k.substring(V, $)), V = -1), S !== void 0 && (S += /* @__PURE__ */ k.charAt($));
        else {
          S === void 0 && (S = /* @__PURE__ */ k.substr(0, $));
          let Oe = y[O];
          Oe !== void 0 ? (V !== -1 && (S += /* @__PURE__ */ encodeURIComponent(/* @__PURE__ */ k.substring(V, $)), V = -1), S += Oe) : V === -1 && (V = $);
        }
      }
      return V !== -1 && (S += /* @__PURE__ */ encodeURIComponent(/* @__PURE__ */ k.substring(V))), S !== void 0 ? S : k;
    }
    m$1(v, "d");
    function R(k) {
      let T2;
      for (let C = 0; C < k.length; C++) {
        let S = /* @__PURE__ */ k.charCodeAt(C);
        S === 35 || S === 63 ? (T2 === void 0 && (T2 = /* @__PURE__ */ k.substr(0, C)), T2 += y[S]) : T2 !== void 0 && (T2 += k[C]);
      }
      return T2 !== void 0 ? T2 : k;
    }
    m$1(R, "p");
    function A(k, T2) {
      let C;
      return C = k.authority && k.path.length > 1 && k.scheme === "file" ? `//${k.authority}${k.path}` : k.path.charCodeAt(0) === 47 && (k.path.charCodeAt(1) >= 65 && k.path.charCodeAt(1) <= 90 || k.path.charCodeAt(1) >= 97 && k.path.charCodeAt(1) <= 122) && k.path.charCodeAt(2) === 58 ? T2 ? k.path.substr(1) : k.path[1].toLowerCase() + k.path.substr(2) : k.path, i && (C = /* @__PURE__ */ C.replace(/\//g, "\\")), C;
    }
    m$1(A, "m");
    function x(k, T2) {
      let C = T2 ? R : v, S = "", { scheme: V, authority: $, path: O, query: Oe, fragment: $e } = k;
      if (V && (S += V, S += ":"), ($ || V === "file") && (S += d, S += d), $) {
        let ee = /* @__PURE__ */ $.indexOf("@");
        if (ee !== -1) {
          let Ht = /* @__PURE__ */ $.substr(0, ee);
          $ = /* @__PURE__ */ $.substr(ee + 1), ee = /* @__PURE__ */ Ht.lastIndexOf(":"), ee === -1 ? S += /* @__PURE__ */ C(Ht, false, false) : (S += /* @__PURE__ */ C(/* @__PURE__ */ Ht.substr(0, ee), false, false), S += ":", S += /* @__PURE__ */ C(/* @__PURE__ */ Ht.substr(ee + 1), false, true)), S += "@";
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
      return Oe && (S += "?", S += /* @__PURE__ */ C(Oe, false, false)), $e && (S += "#", S += T2 ? $e : v($e, false, false)), S;
    }
    m$1(x, "y");
    function P(k) {
      try {
        return decodeURIComponent(k);
      } catch {
        return k.length > 3 ? k.substr(0, 3) + P(/* @__PURE__ */ k.substr(3)) : k;
      }
    }
    m$1(P, "v");
    let b = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function Te(k) {
      return k.match(b) ? k.replace(b, (T2) => P(T2)) : k;
    }
    m$1(Te, "C");
    var kr2 = /* @__PURE__ */ t(470);
    let Ae = kr2.posix || kr2, bt = "/";
    var yt;
    (function(k) {
      k.joinPath = function(T2) {
        for (var _len = arguments.length, C = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          C[_key - 1] = arguments[_key];
        }
        return T2.with({
          path: /* @__PURE__ */ Ae.join(T2.path, ...C)
        });
      }, k.resolvePath = function(T2) {
        for (var _len = arguments.length, C = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          C[_key - 1] = arguments[_key];
        }
        let S = T2.path, V = false;
        S[0] !== bt && (S = bt + S, V = true);
        let $ = /* @__PURE__ */ Ae.resolve(S, ...C);
        return V && $[0] === bt && !T2.authority && ($ = /* @__PURE__ */ $.substring(1)), T2.with({
          path: $
        });
      }, k.dirname = function(T2) {
        if (T2.path.length === 0 || T2.path === bt) return T2;
        let C = /* @__PURE__ */ Ae.dirname(T2.path);
        return C.length === 1 && C.charCodeAt(0) === 46 && (C = ""), T2.with({
          path: C
        });
      }, k.basename = function(T2) {
        return Ae.basename(T2.path);
      }, k.extname = function(T2) {
        return Ae.extname(T2.path);
      };
    })(yt || (yt = {}));
  })(), Wf = n2;
})();
var { URI: Ge, Utils: Hn } = Wf;
var Be;
(function(r) {
  r.basename = Hn.basename, r.dirname = Hn.dirname, r.extname = Hn.extname, r.joinPath = Hn.joinPath, r.resolvePath = Hn.resolvePath;
  function e(i, s) {
    return (i == null ? void 0 : i.toString()) === (s == null ? void 0 : s.toString());
  }
  m$1(e, "equals"), r.equals = e;
  function t(i, s) {
    let o2 = typeof i == "string" ? i : i.path, l = typeof s == "string" ? s : s.path, c = /* @__PURE__ */ o2.split("/").filter((p2) => p2.length > 0), u = /* @__PURE__ */ l.split("/").filter((p2) => p2.length > 0), d = 0;
    for (; d < c.length && c[d] === u[d]; d++) ;
    let f = /* @__PURE__ */ "../".repeat(c.length - d), h2 = /* @__PURE__ */ u.slice(d).join("/");
    return f + h2;
  }
  m$1(t, "relative"), r.relative = t;
  function n2(i) {
    return Ge.parse(/* @__PURE__ */ i.toString()).toString();
  }
  m$1(n2, "normalize"), r.normalize = n2;
})(Be || (Be = {}));
var Y;
(function(r) {
  r[r.Changed = 0] = "Changed", r[r.Parsed = 1] = "Parsed", r[r.IndexedContent = 2] = "IndexedContent", r[r.ComputedScopes = 3] = "ComputedScopes", r[r.Linked = 4] = "Linked", r[r.IndexedReferences = 5] = "IndexedReferences", r[r.Validated = 6] = "Validated";
})(Y || (Y = {}));
var zi = (_Ba = class {
  constructor(e) {
    this.serviceRegistry = e.ServiceRegistry, this.textDocuments = e.workspace.TextDocuments, this.fileSystemProvider = e.workspace.FileSystemProvider;
  }
  async fromUri(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.CancellationToken.None;
    let n2 = await this.fileSystemProvider.readFile(e);
    return this.createAsync(e, n2, t);
  }
  fromTextDocument(e, t, n2) {
    return t = t ?? Ge.parse(e.uri), _.CancellationToken.is(n2) ? this.createAsync(t, e, n2) : this.create(t, e, n2);
  }
  fromString(e, t, n2) {
    return _.CancellationToken.is(n2) ? this.createAsync(t, e, n2) : this.create(t, e, n2);
  }
  fromModel(e, t) {
    return this.create(t, {
      $model: e
    });
  }
  create(e, t, n2) {
    if (typeof t == "string") {
      let i = /* @__PURE__ */ this.parse(e, t, n2);
      return this.createLangiumDocument(i, e, void 0, t);
    } else if ("$model" in t) {
      let i = {
        value: t.$model,
        parserErrors: [],
        lexerErrors: []
      };
      return this.createLangiumDocument(i, e);
    } else {
      let i = /* @__PURE__ */ this.parse(e, /* @__PURE__ */ t.getText(), n2);
      return this.createLangiumDocument(i, e, t);
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
  parse(e, t, n2) {
    return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(t, n2);
  }
  parseAsync(e, t, n2) {
    return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(t, n2);
  }
  createTextDocumentGetter(e, t) {
    let n2 = this.serviceRegistry, i;
    return () => i ?? (i = /* @__PURE__ */ Kn.create(/* @__PURE__ */ e.toString(), n2.getServices(e).LanguageMetaData.languageId, 0, t ?? ""));
  }
}, __83 = new WeakMap(), __privateAdd(_Ba, __83, m$1(_Ba, "DefaultLangiumDocumentFactory")), _Ba), qi = (_Ca = class {
  constructor(e) {
    this.documentMap = /* @__PURE__ */ new Map(), this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.serviceRegistry = e.ServiceRegistry;
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
    return n2 && (this.serviceRegistry.getServices(e).references.Linker.unlink(n2), n2.state = Y.Changed, n2.precomputedScopes = void 0, n2.diagnostics = void 0), n2;
  }
  deleteDocument(e) {
    let t = /* @__PURE__ */ e.toString(), n2 = /* @__PURE__ */ this.documentMap.get(t);
    return n2 && (n2.state = Y.Changed, this.documentMap.delete(t)), n2;
  }
}, __84 = new WeakMap(), __privateAdd(_Ca, __84, m$1(_Ca, "DefaultLangiumDocuments")), _Ca);
var cc = /* @__PURE__ */ Symbol("ref_resolving"), Xi = (_Da = class {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.langiumDocuments = () => e.shared.workspace.LangiumDocuments, this.scopeProvider = e.references.ScopeProvider, this.astNodeLocator = e.workspace.AstNodeLocator;
  }
  async link(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.CancellationToken.None;
    for (let n2 of Je(e.parseResult.value)) await ue(t), pn(n2).forEach((i) => this.doLink(i, e));
  }
  doLink(e, t) {
    var n2;
    let i = e.reference;
    if (i._ref === void 0) {
      i._ref = cc;
      try {
        let s = /* @__PURE__ */ this.getCandidate(e);
        if (Qt(s)) i._ref = s;
        else if (i._nodeDescription = s, this.langiumDocuments().hasDocument(s.documentUri)) {
          let o2 = /* @__PURE__ */ this.loadAstNode(s);
          i._ref = o2 ?? this.createLinkingError(e, s);
        } else i._ref = void 0;
      } catch (s) {
        console.error(`An error occurred while resolving reference to '${i.$refText}':`, s);
        let o2 = (n2 = s.message) !== null && n2 !== void 0 ? n2 : String(s);
        i._ref = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, e), {
          message: `An error occurred while resolving reference to '${i.$refText}': ${o2}`
        });
      }
      t.references.push(i);
    }
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
        if (le(this._ref)) return this._ref;
        if (co(this._nodeDescription)) {
          let c = /* @__PURE__ */ s.loadAstNode(this._nodeDescription);
          this._ref = c ?? s.createLinkingError({
            reference: o2,
            container: e,
            property: t
          }, this._nodeDescription);
        } else if (this._ref === void 0) {
          this._ref = cc;
          let c = ui(e).$document, u = /* @__PURE__ */ s.getLinkedNode({
            reference: o2,
            container: e,
            property: t
          });
          if (u.error && c && c.state < Y.ComputedScopes) return this._ref = void 0;
          this._ref = (l = u.node) !== null && l !== void 0 ? l : u.error, this._nodeDescription = u.descr, c == null ? void 0 : c.references.push(this);
        } else if (this._ref === cc) throw new Error(`Cyclic reference resolution detected: ${s.astNodeLocator.getAstNodePath(e)}/${t} (symbol '${i}')`);
        return le(this._ref) ? this._ref : void 0;
      },
      get $nodeDescription() {
        return this._nodeDescription;
      },
      get error() {
        return Qt(this._ref) ? this._ref : void 0;
      }
    };
    return o2;
  }
  getLinkedNode(e) {
    var t;
    try {
      let n2 = /* @__PURE__ */ this.getCandidate(e);
      if (Qt(n2)) return {
        error: n2
      };
      let i = /* @__PURE__ */ this.loadAstNode(n2);
      return i ? {
        node: i,
        descr: n2
      } : {
        descr: n2,
        error: /* @__PURE__ */ this.createLinkingError(e, n2)
      };
    } catch (n2) {
      console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`, n2);
      let i = (t = n2.message) !== null && t !== void 0 ? t : String(n2);
      return {
        error: /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, e), {
          message: `An error occurred while resolving reference to '${e.reference.$refText}': ${i}`
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
    let n2 = ui(e.container).$document;
    n2 && n2.state < Y.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n2.uri}).`);
    let i = /* @__PURE__ */ this.reflection.getReferenceType(e);
    return Object.assign(/* @__PURE__ */ Object.assign({}, e), {
      message: `Could not resolve reference to ${i} named '${e.reference.$refText}'.`,
      targetDescription: t
    });
  }
}, __85 = new WeakMap(), __privateAdd(_Da, __85, m$1(_Da, "DefaultLinker")), _Da);
function jf(r) {
  return typeof r.name == "string";
}
m$1(jf, "isNamed");
var Yi = (_Ea = class {
  getName(e) {
    if (jf(e)) return e.name;
  }
  getNameNode(e) {
    return gi(e.$cstNode, "name");
  }
}, __86 = new WeakMap(), __privateAdd(_Ea, __86, m$1(_Ea, "DefaultNameProvider")), _Ea);
var Ji = (_Fa = class {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.index = e.shared.workspace.IndexManager, this.nodeLocator = e.workspace.AstNodeLocator;
  }
  findDeclaration(e) {
    if (e) {
      let t = /* @__PURE__ */ Jo(e), n2 = e.astNode;
      if (t && n2) {
        let i = n2[t.feature];
        if (Ee(i)) return i.ref;
        if (Array.isArray(i)) {
          for (let s of i) if (Ee(s) && s.$refNode && s.$refNode.offset <= e.offset && s.$refNode.end >= e.end) return s.ref;
        }
      }
      if (n2) {
        let i = /* @__PURE__ */ this.nameProvider.getNameNode(n2);
        if (i && (i === e || fo(e, i))) return n2;
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
    return t.documentUri && (i = /* @__PURE__ */ i.filter((s) => Be.equals(s.sourceUri, t.documentUri))), n2.push(...i), K(n2);
  }
  getReferenceToSelf(e) {
    let t = /* @__PURE__ */ this.nameProvider.getNameNode(e);
    if (t) {
      let n2 = /* @__PURE__ */ we(e), i = /* @__PURE__ */ this.nodeLocator.getAstNodePath(e);
      return {
        sourceUri: n2.uri,
        sourcePath: i,
        targetUri: n2.uri,
        targetPath: i,
        segment: /* @__PURE__ */ er(t),
        local: true
      };
    }
  }
}, __87 = new WeakMap(), __privateAdd(_Fa, __87, m$1(_Fa, "DefaultReferences")), _Fa);
var st = (_Ga = class {
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), e) for (let [t, n2] of e) this.add(t, n2);
  }
  get size() {
    return Nr.sum(/* @__PURE__ */ K(/* @__PURE__ */ this.map.values()).map((e) => e.length));
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
}, __88 = new WeakMap(), __privateAdd(_Ga, __88, m$1(_Ga, "MultiMap")), _Ga), xr = (_Ha = class {
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
var Qi = (_Ia = class {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider;
  }
  async computeExports(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.CancellationToken.None;
    return this.computeExportsForNode(e.parseResult.value, e, void 0, t);
  }
  async computeExportsForNode(e, t) {
    let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : di, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : _.CancellationToken.None;
    let s = [];
    this.exportNode(e, s, t);
    for (let o2 of n2(e)) await ue(i), this.exportNode(o2, s, t);
    return s;
  }
  exportNode(e, t, n2) {
    let i = /* @__PURE__ */ this.nameProvider.getName(e);
    i && t.push(/* @__PURE__ */ this.descriptions.createDescription(e, i, n2));
  }
  async computeLocalScopes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.CancellationToken.None;
    let n2 = e.parseResult.value, i = new st();
    for (let s of dt(n2)) await ue(t), this.processNode(s, e, i);
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
var zn = (_Ja = class {
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
}, __91 = new WeakMap(), __privateAdd(_Ja, __91, m$1(_Ja, "StreamScope")), _Ja), Zi = (_Ka = class {
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
}, __92 = new WeakMap(), __privateAdd(_Ka, __92, m$1(_Ka, "MapScope")), _Ka), Zm = {
  getElement() {
  },
  getAllElements() {
    return ei;
  }
};
var qn = (_La = class {
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
}, __93 = new WeakMap(), __privateAdd(_La, __93, m$1(_La, "DisposableCache")), _La), es = (_Ma = class extends qn {
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
}, __94 = new WeakMap(), __privateAdd(_Ma, __94, m$1(_Ma, "SimpleCache")), _Ma), Rr = (_Na = class extends qn {
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
}, __95 = new WeakMap(), __privateAdd(_Na, __95, m$1(_Na, "ContextCache")), _Na), Ga = (_Oa = class extends Rr {
  constructor(e, t) {
    super((n2) => n2.toString()), t ? (this.toDispose.push(/* @__PURE__ */ e.workspace.DocumentBuilder.onDocumentPhase(t, (n2) => {
      this.clear(/* @__PURE__ */ n2.uri.toString());
    })), this.toDispose.push(/* @__PURE__ */ e.workspace.DocumentBuilder.onUpdate((n2, i) => {
      for (let s of i) this.clear(s);
    }))) : this.toDispose.push(/* @__PURE__ */ e.workspace.DocumentBuilder.onUpdate((n2, i) => {
      let s = /* @__PURE__ */ n2.concat(i);
      for (let o2 of s) this.clear(o2);
    }));
  }
}, __96 = new WeakMap(), __privateAdd(_Oa, __96, m$1(_Oa, "DocumentCache")), _Oa), Xn = (_Pa = class extends es {
  constructor(e, t) {
    super(), t ? (this.toDispose.push(/* @__PURE__ */ e.workspace.DocumentBuilder.onBuildPhase(t, () => {
      this.clear();
    })), this.toDispose.push(/* @__PURE__ */ e.workspace.DocumentBuilder.onUpdate((n2, i) => {
      i.length > 0 && this.clear();
    }))) : this.toDispose.push(/* @__PURE__ */ e.workspace.DocumentBuilder.onUpdate(() => {
      this.clear();
    }));
  }
}, __97 = new WeakMap(), __privateAdd(_Pa, __97, m$1(_Pa, "WorkspaceCache")), _Pa);
var ts = (_Qa = class {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider, this.indexManager = e.shared.workspace.IndexManager, this.globalScopeCache = new Xn(e.shared);
  }
  getScope(e) {
    let t = [], n2 = /* @__PURE__ */ this.reflection.getReferenceType(e), i = we(e.container).precomputedScopes;
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
    return new zn(K(e), t, n2);
  }
  createScopeForNodes(e, t, n2) {
    let i = /* @__PURE__ */ K(e).map((s) => {
      let o2 = /* @__PURE__ */ this.nameProvider.getName(s);
      if (o2) return this.descriptions.createDescription(s, o2);
    }).nonNullable();
    return new zn(i, t, n2);
  }
  getGlobalScope(e, t) {
    return this.globalScopeCache.get(e, () => new Zi(this.indexManager.allElements(e)));
  }
}, __98 = new WeakMap(), __privateAdd(_Qa, __98, m$1(_Qa, "DefaultScopeProvider")), _Qa);
function uc(r) {
  return typeof r.$comment == "string";
}
m$1(uc, "isAstNodeWithComment");
function Vf(r) {
  return typeof r == "object" && !!r && ("$ref" in r || "$error" in r);
}
m$1(Vf, "isIntermediateReference");
var rs = (_Ra = class {
  constructor(e) {
    this.ignoreProperties = /* @__PURE__ */ new Set([
      "$container",
      "$containerProperty",
      "$containerIndex",
      "$document",
      "$cstNode"
    ]), this.langiumDocuments = e.shared.workspace.LangiumDocuments, this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider, this.commentProvider = e.documentation.CommentProvider;
  }
  serialize(e, t) {
    let n2 = t ?? {}, i = t == null ? void 0 : t.replacer, s = /* @__PURE__ */ m$1((l, c) => this.replacer(l, c, n2), "defaultReplacer"), o2 = i ? (l, c) => i(l, c, s) : s;
    try {
      return this.currentDocument = /* @__PURE__ */ we(e), JSON.stringify(e, o2, t == null ? void 0 : t.space);
    } finally {
      this.currentDocument = void 0;
    }
  }
  deserialize(e, t) {
    let n2 = t ?? {}, i = /* @__PURE__ */ JSON.parse(e);
    return this.linkNode(i, i, n2), i;
  }
  replacer(e, t, param) {
    let { refText: n2, sourceText: i, textRegions: s, comments: o2, uriConverter: l } = param;
    var c, u, d, f;
    if (!this.ignoreProperties.has(e)) if (Ee(t)) {
      let h2 = t.ref, p2 = n2 ? t.$refText : void 0;
      if (h2) {
        let g = /* @__PURE__ */ we(h2), y = "";
        this.currentDocument && this.currentDocument !== g && (l ? y = /* @__PURE__ */ l(g.uri, t) : y = /* @__PURE__ */ g.uri.toString());
        let v = /* @__PURE__ */ this.astNodeLocator.getAstNodePath(h2);
        return {
          $ref: `${y}#${v}`,
          $refText: p2
        };
      } else return {
        $error: (u = (c = t.error) === null || c === void 0 ? void 0 : c.message) !== null && u !== void 0 ? u : "Could not resolve reference",
        $refText: p2
      };
    } else if (le(t)) {
      let h2;
      if (s && (h2 = /* @__PURE__ */ this.addAstNodeRegionWithAssignmentsTo(/* @__PURE__ */ Object.assign({}, t)), (!e || t.$document) && (h2 == null ? void 0 : h2.$textRegion) && (h2.$textRegion.documentURI = (d = this.currentDocument) === null || d === void 0 ? void 0 : d.uri.toString())), i && !e && (h2 ?? (h2 = /* @__PURE__ */ Object.assign({}, t)), h2.$sourceText = (f = t.$cstNode) === null || f === void 0 ? void 0 : f.text), o2) {
        h2 ?? (h2 = /* @__PURE__ */ Object.assign({}, t));
        let p2 = /* @__PURE__ */ this.commentProvider.getComment(t);
        p2 && (h2.$comment = /* @__PURE__ */ p2.replace(/\r/g, ""));
      }
      return h2 ?? t;
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
        let o2 = /* @__PURE__ */ zo(e.$cstNode, s).map(t);
        o2.length !== 0 && (i[s] = o2);
      }), e;
    }
  }
  linkNode(e, t, n2, i, s, o2) {
    for (let [c, u] of Object.entries(e)) if (Array.isArray(u)) for (let d = 0; d < u.length; d++) {
      let f = u[d];
      Vf(f) ? u[d] = /* @__PURE__ */ this.reviveReference(e, c, t, f, n2) : le(f) && this.linkNode(f, t, n2, e, c, d);
    }
    else Vf(u) ? e[c] = /* @__PURE__ */ this.reviveReference(e, c, t, u, n2) : le(u) && this.linkNode(u, t, n2, e, c);
    let l = e;
    l.$container = i, l.$containerProperty = s, l.$containerIndex = o2;
  }
  reviveReference(e, t, n2, i, s) {
    let o2 = i.$refText, l = i.$error;
    if (i.$ref) {
      let c = /* @__PURE__ */ this.getRefNode(n2, i.$ref, s.uriConverter);
      if (le(c)) return o2 || (o2 = /* @__PURE__ */ this.nameProvider.getName(c)), {
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
        let c = n2 ? n2(t) : Ge.parse(t), u = /* @__PURE__ */ this.langiumDocuments.getDocument(c);
        return u ? u.parseResult.value : "Could not find document for URI: " + t;
      }
      let s = n2 ? n2(/* @__PURE__ */ t.substring(0, i)) : Ge.parse(/* @__PURE__ */ t.substring(0, i)), o2 = /* @__PURE__ */ this.langiumDocuments.getDocument(s);
      if (!o2) return "Could not find document for URI: " + t;
      if (i === t.length - 1) return o2.parseResult.value;
      let l = /* @__PURE__ */ this.astNodeLocator.getAstNode(o2.parseResult.value, /* @__PURE__ */ t.substring(i + 1));
      return l || "Could not resolve URI: " + t;
    } catch (i) {
      return String(i);
    }
  }
}, __99 = new WeakMap(), __privateAdd(_Ra, __99, m$1(_Ra, "DefaultJsonSerializer")), _Ra);
var ns = (_Sa = class {
  get map() {
    return this.fileExtensionMap;
  }
  constructor(e) {
    this.languageIdMap = /* @__PURE__ */ new Map(), this.fileExtensionMap = /* @__PURE__ */ new Map(), this.textDocuments = e == null ? void 0 : e.workspace.TextDocuments;
  }
  register(e) {
    let t = e.LanguageMetaData;
    for (let n2 of t.fileExtensions) this.fileExtensionMap.has(n2) && console.warn(`The file extension ${n2} is used by multiple languages. It is now assigned to '${t.languageId}'.`), this.fileExtensionMap.set(n2, e);
    this.languageIdMap.set(t.languageId, e), this.languageIdMap.size === 1 ? this.singleton = e : this.singleton = void 0;
  }
  getServices(e) {
    var t, n2;
    if (this.singleton !== void 0) return this.singleton;
    if (this.languageIdMap.size === 0) throw new Error("The service registry is empty. Use `register` to register the services of a language.");
    let i = (n2 = (t = this.textDocuments) === null || t === void 0 ? void 0 : t.get(e)) === null || n2 === void 0 ? void 0 : n2.languageId;
    if (i !== void 0) {
      let l = /* @__PURE__ */ this.languageIdMap.get(i);
      if (l) return l;
    }
    let s = /* @__PURE__ */ Be.extname(e), o2 = /* @__PURE__ */ this.fileExtensionMap.get(s);
    if (!o2) throw i ? new Error(`The service registry contains no services for the extension '${s}' for language '${i}'.`) : new Error(`The service registry contains no services for the extension '${s}'.`);
    return o2;
  }
  hasServices(e) {
    try {
      return this.getServices(e), true;
    } catch {
      return false;
    }
  }
  get all() {
    return Array.from(/* @__PURE__ */ this.languageIdMap.values());
  }
}, __100 = new WeakMap(), __privateAdd(_Sa, __100, m$1(_Sa, "DefaultServiceRegistry")), _Sa);
function Er(r) {
  return {
    code: r
  };
}
m$1(Er, "diagnosticData");
var Yn;
(function(r) {
  r.all = [
    "fast",
    "slow",
    "built-in"
  ];
})(Yn || (Yn = {}));
var is = (_Ta = class {
  constructor(e) {
    this.entries = new st(), this.entriesBefore = [], this.entriesAfter = [], this.reflection = e.shared.AstReflection;
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
      } else ut();
    }
  }
  wrapValidationException(e, t) {
    return async (n2, i, s) => {
      await this.handleException(() => e.call(t, n2, i, s), "An error occurred during validation", i, n2);
    };
  }
  async handleException(e, t, n2, i) {
    try {
      await e();
    } catch (s) {
      if (gt(s)) throw s;
      console.error(`${t}:`, s), s instanceof Error && s.stack && console.error(s.stack);
      let o2 = s instanceof Error ? s.message : String(s);
      n2("error", `${t}: ${o2}`, {
        node: i
      });
    }
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
  registerBeforeDocument(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
    this.entriesBefore.push(/* @__PURE__ */ this.wrapPreparationException(e, "An error occurred during set-up of the validation", t));
  }
  registerAfterDocument(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
    this.entriesAfter.push(/* @__PURE__ */ this.wrapPreparationException(e, "An error occurred during tear-down of the validation", t));
  }
  wrapPreparationException(e, t, n2) {
    return async (i, s, o2, l) => {
      await this.handleException(() => e.call(n2, i, s, o2, l), t, s, i);
    };
  }
  get checksBefore() {
    return this.entriesBefore;
  }
  get checksAfter() {
    return this.entriesAfter;
  }
}, __101 = new WeakMap(), __privateAdd(_Ta, __101, m$1(_Ta, "ValidationRegistry")), _Ta);
var ss = (_Ua = class {
  constructor(e) {
    this.validationRegistry = e.validation.ValidationRegistry, this.metadata = e.LanguageMetaData;
  }
  async validateDocument(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _.CancellationToken.None;
    let i = e.parseResult, s = [];
    if (await ue(n2), (!t.categories || t.categories.includes("built-in")) && (this.processLexingErrors(i, s, t), t.stopAfterLexingErrors && s.some((o2) => {
      var l;
      return ((l = o2.data) === null || l === void 0 ? void 0 : l.code) === Qe.LexingError;
    }) || (this.processParsingErrors(i, s, t), t.stopAfterParsingErrors && s.some((o2) => {
      var l;
      return ((l = o2.data) === null || l === void 0 ? void 0 : l.code) === Qe.ParsingError;
    })) || (this.processLinkingErrors(e, s, t), t.stopAfterLinkingErrors && s.some((o2) => {
      var l;
      return ((l = o2.data) === null || l === void 0 ? void 0 : l.code) === Qe.LinkingError;
    })))) return s;
    try {
      s.push(...await this.validateAst(i.value, t, n2));
    } catch (o2) {
      if (gt(o2)) throw o2;
      console.error("An error occurred during validation:", o2);
    }
    return await ue(n2), s;
  }
  processLexingErrors(e, t, n2) {
    var i, s, o2;
    let l = [
      ...e.lexerErrors,
      ...(s = (i = e.lexerReport) === null || i === void 0 ? void 0 : i.diagnostics) !== null && s !== void 0 ? s : []
    ];
    for (let c of l) {
      let u = (o2 = c.severity) !== null && o2 !== void 0 ? o2 : "error", d = {
        severity: /* @__PURE__ */ Ba(u),
        range: {
          start: {
            line: c.line - 1,
            character: c.column - 1
          },
          end: {
            line: c.line - 1,
            character: c.column + c.length - 1
          }
        },
        message: c.message,
        data: /* @__PURE__ */ Hf(u),
        source: /* @__PURE__ */ this.getSource()
      };
      t.push(d);
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
      } else s = /* @__PURE__ */ Sr(i.token);
      if (s) {
        let o2 = {
          severity: /* @__PURE__ */ Ba("error"),
          range: s,
          message: i.message,
          data: /* @__PURE__ */ Er(Qe.ParsingError),
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
            code: Qe.LinkingError,
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
    let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _.CancellationToken.None;
    let i = [], s = /* @__PURE__ */ m$1((o2, l, c) => {
      i.push(/* @__PURE__ */ this.toDiagnostic(o2, l, c));
    }, "acceptor");
    return await this.validateAstBefore(e, t, s, n2), await this.validateAstNodes(e, t, s, n2), await this.validateAstAfter(e, t, s, n2), i;
  }
  async validateAstBefore(e, t, n2) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : _.CancellationToken.None;
    var s;
    let o2 = this.validationRegistry.checksBefore;
    for (let l of o2) await ue(i), await l(e, n2, (s = t.categories) !== null && s !== void 0 ? s : [], i);
  }
  async validateAstNodes(e, t, n2) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : _.CancellationToken.None;
    await Promise.all(/* @__PURE__ */ Je(e).map(async (s) => {
      await ue(i);
      let o2 = /* @__PURE__ */ this.validationRegistry.getChecks(s.$type, t.categories);
      for (let l of o2) await l(s, n2, i);
    }));
  }
  async validateAstAfter(e, t, n2) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : _.CancellationToken.None;
    var s;
    let o2 = this.validationRegistry.checksAfter;
    for (let l of o2) await ue(i), await l(e, n2, (s = t.categories) !== null && s !== void 0 ? s : [], i);
  }
  toDiagnostic(e, t, n2) {
    return {
      message: t,
      range: /* @__PURE__ */ Kf(n2),
      severity: /* @__PURE__ */ Ba(e),
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
function Kf(r) {
  if (r.range) return r.range;
  let e;
  return typeof r.property == "string" ? e = /* @__PURE__ */ gi(r.node.$cstNode, r.property, r.index) : typeof r.keyword == "string" && (e = /* @__PURE__ */ Xo(r.node.$cstNode, r.keyword, r.index)), e ?? (e = r.node.$cstNode), e ? e.range : {
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
m$1(Kf, "getDiagnosticRange");
function Ba(r) {
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
m$1(Ba, "toDiagnosticSeverity");
function Hf(r) {
  switch (r) {
    case "error":
      return Er(Qe.LexingError);
    case "warning":
      return Er(Qe.LexingWarning);
    case "info":
      return Er(Qe.LexingInfo);
    case "hint":
      return Er(Qe.LexingHint);
    default:
      throw new Error("Invalid diagnostic severity: " + r);
  }
}
m$1(Hf, "toDiagnosticData");
var Qe;
(function(r) {
  r.LexingError = "lexing-error", r.LexingWarning = "lexing-warning", r.LexingInfo = "lexing-info", r.LexingHint = "lexing-hint", r.ParsingError = "parsing-error", r.LinkingError = "linking-error";
})(Qe || (Qe = {}));
var as = (_Va = class {
  constructor(e) {
    this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider;
  }
  createDescription(e, t, n2) {
    let i = n2 ?? we(e);
    t ?? (t = /* @__PURE__ */ this.nameProvider.getName(e));
    let s = /* @__PURE__ */ this.astNodeLocator.getAstNodePath(e);
    if (!t) throw new Error(`Node at path ${s} has no name.`);
    let o2, l = /* @__PURE__ */ m$1(() => {
      var c;
      return o2 ?? (o2 = /* @__PURE__ */ er((c = /* @__PURE__ */ this.nameProvider.getNameNode(e)) !== null && c !== void 0 ? c : e.$cstNode));
    }, "nameSegmentGetter");
    return {
      node: e,
      name: t,
      get nameSegment() {
        return l();
      },
      selectionSegment: /* @__PURE__ */ er(e.$cstNode),
      type: e.$type,
      documentUri: i.uri,
      path: s
    };
  }
}, __103 = new WeakMap(), __privateAdd(_Va, __103, m$1(_Va, "DefaultAstNodeDescriptionProvider")), _Va), os = (_Wa = class {
  constructor(e) {
    this.nodeLocator = e.workspace.AstNodeLocator;
  }
  async createDescriptions(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.CancellationToken.None;
    let n2 = [], i = e.parseResult.value;
    for (let s of Je(i)) await ue(t), pn(s).filter((o2) => !Qt(o2)).forEach((o2) => {
      let l = /* @__PURE__ */ this.createDescription(o2);
      l && n2.push(l);
    });
    return n2;
  }
  createDescription(e) {
    let t = e.reference.$nodeDescription, n2 = e.reference.$refNode;
    if (!t || !n2) return;
    let i = we(e.container).uri;
    return {
      sourceUri: i,
      sourcePath: /* @__PURE__ */ this.nodeLocator.getAstNodePath(e.container),
      targetUri: t.documentUri,
      targetPath: t.path,
      segment: /* @__PURE__ */ er(n2),
      local: /* @__PURE__ */ Be.equals(t.documentUri, i)
    };
  }
}, __104 = new WeakMap(), __privateAdd(_Wa, __104, m$1(_Wa, "DefaultReferenceDescriptionProvider")), _Wa);
var ls = (_Xa = class {
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
var ne = {};
p(ne, /* @__PURE__ */ q$1(/* @__PURE__ */ ic()));
var cs = (_Ya = class {
  constructor(e) {
    this._ready = new Ue(), this.settings = {}, this.workspaceConfig = false, this.onConfigurationSectionUpdateEmitter = new ne.Emitter(), this.serviceRegistry = e.ServiceRegistry;
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
      let n2 = e.settings[t];
      this.updateSectionConfiguration(t, n2), this.onConfigurationSectionUpdateEmitter.fire({
        section: t,
        configuration: n2
      });
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
  get onConfigurationSectionUpdate() {
    return this.onConfigurationSectionUpdateEmitter.event;
  }
}, __106 = new WeakMap(), __privateAdd(_Ya, __106, m$1(_Ya, "DefaultConfigurationProvider")), _Ya);
var Vt;
(function(r) {
  function e(t) {
    return {
      dispose: /* @__PURE__ */ m$1(async () => await t(), "dispose")
    };
  }
  m$1(e, "create"), r.create = e;
})(Vt || (Vt = {}));
var us = (_Za = class {
  constructor(e) {
    this.updateBuildOptions = {
      validation: {
        categories: [
          "built-in",
          "fast"
        ]
      }
    }, this.updateListeners = [], this.buildPhaseListeners = new st(), this.documentPhaseListeners = new st(), this.buildState = /* @__PURE__ */ new Map(), this.documentBuildWaiters = /* @__PURE__ */ new Map(), this.currentState = Y.Changed, this.langiumDocuments = e.workspace.LangiumDocuments, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.textDocuments = e.workspace.TextDocuments, this.indexManager = e.workspace.IndexManager, this.serviceRegistry = e.ServiceRegistry;
  }
  async build(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _.CancellationToken.None;
    var i, s;
    for (let o2 of e) {
      let l = /* @__PURE__ */ o2.uri.toString();
      if (o2.state === Y.Validated) {
        if (typeof t.validation == "boolean" && t.validation) o2.state = Y.IndexedReferences, o2.diagnostics = void 0, this.buildState.delete(l);
        else if (typeof t.validation == "object") {
          let c = /* @__PURE__ */ this.buildState.get(l), u = (i = c == null ? void 0 : c.result) === null || i === void 0 ? void 0 : i.validationChecks;
          if (u) {
            let f = /* @__PURE__ */ ((s = t.validation.categories) !== null && s !== void 0 ? s : Yn.all).filter((h2) => !u.includes(h2));
            f.length > 0 && (this.buildState.set(l, {
              completed: false,
              options: {
                validation: /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, t.validation), {
                  categories: f
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
    let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _.CancellationToken.None;
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
    }), await this.emitUpdate(e, t), await ue(n2);
    let s = /* @__PURE__ */ this.sortDocuments(/* @__PURE__ */ this.langiumDocuments.all.filter((o2) => {
      var l;
      return o2.state < Y.Linked || !(!((l = /* @__PURE__ */ this.buildState.get(/* @__PURE__ */ o2.uri.toString())) === null || l === void 0) && l.completed);
    }).toArray());
    await this.buildDocuments(s, this.updateBuildOptions, n2);
  }
  async emitUpdate(e, t) {
    await Promise.all(/* @__PURE__ */ this.updateListeners.map((n2) => n2(e, t)));
  }
  sortDocuments(e) {
    let t = 0, n2 = e.length - 1;
    for (; t < n2; ) {
      for (; t < e.length && this.hasTextDocument(e[t]); ) t++;
      for (; n2 >= 0 && !this.hasTextDocument(e[n2]); ) n2--;
      t < n2 && ([e[t], e[n2]] = [
        e[n2],
        e[t]
      ]);
    }
    return e;
  }
  hasTextDocument(e) {
    var t;
    return !!(!((t = this.textDocuments) === null || t === void 0) && t.get(e.uri));
  }
  shouldRelink(e, t) {
    return e.references.some((n2) => n2.error !== void 0) ? true : this.indexManager.isAffected(e, t);
  }
  onUpdate(e) {
    return this.updateListeners.push(e), Vt.create(() => {
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
    let s = /* @__PURE__ */ e.filter((l) => l.state < t);
    for (let l of s) await ue(n2), await i(l), l.state = t, await this.notifyDocumentPhase(l, t, n2);
    let o2 = /* @__PURE__ */ e.filter((l) => l.state === t);
    await this.notifyBuildPhase(o2, t, n2), this.currentState = t;
  }
  onBuildPhase(e, t) {
    return this.buildPhaseListeners.add(e, t), Vt.create(() => {
      this.buildPhaseListeners.delete(e, t);
    });
  }
  onDocumentPhase(e, t) {
    return this.documentPhaseListeners.add(e, t), Vt.create(() => {
      this.documentPhaseListeners.delete(e, t);
    });
  }
  waitUntil(e, t, n2) {
    let i;
    if (t && "path" in t ? i = t : n2 = t, n2 ?? (n2 = _.CancellationToken.None), i) {
      let s = /* @__PURE__ */ this.langiumDocuments.getDocument(i);
      if (s && s.state > e) return Promise.resolve(i);
    }
    return this.currentState >= e ? Promise.resolve(void 0) : n2.isCancellationRequested ? Promise.reject(mt) : new Promise((s, o2) => {
      let l = this.onBuildPhase(e, () => {
        if (l.dispose(), c.dispose(), i) {
          let u = /* @__PURE__ */ this.langiumDocuments.getDocument(i);
          s(u == null ? void 0 : u.uri);
        } else s(void 0);
      }), c = n2.onCancellationRequested(() => {
        l.dispose(), c.dispose(), o2(mt);
      });
    });
  }
  async notifyDocumentPhase(e, t, n2) {
    let s = /* @__PURE__ */ this.documentPhaseListeners.get(t).slice();
    for (let o2 of s) try {
      await o2(e, n2);
    } catch (l) {
      if (!gt(l)) throw l;
    }
  }
  async notifyBuildPhase(e, t, n2) {
    if (e.length === 0) return;
    let s = /* @__PURE__ */ this.buildPhaseListeners.get(t).slice();
    for (let o2 of s) await ue(n2), await o2(e, n2);
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
      let d = (i = l == null ? void 0 : l.categories) !== null && i !== void 0 ? i : Yn.all;
      u.result.validationChecks ? u.result.validationChecks.push(...d) : u.result.validationChecks = [
        ...d
      ];
    }
  }
  getBuildOptions(e) {
    var t, n2;
    return (n2 = (t = /* @__PURE__ */ this.buildState.get(/* @__PURE__ */ e.uri.toString())) === null || t === void 0 ? void 0 : t.options) !== null && n2 !== void 0 ? n2 : {};
  }
}, __107 = new WeakMap(), __privateAdd(_Za, __107, m$1(_Za, "DefaultDocumentBuilder")), _Za);
var ds = (__a = class {
  constructor(e) {
    this.symbolIndex = /* @__PURE__ */ new Map(), this.symbolByTypeIndex = new Rr(), this.referenceIndex = /* @__PURE__ */ new Map(), this.documents = e.workspace.LangiumDocuments, this.serviceRegistry = e.ServiceRegistry, this.astReflection = e.AstReflection;
  }
  findAllReferences(e, t) {
    let n2 = we(e).uri, i = [];
    return this.referenceIndex.forEach((s) => {
      s.forEach((o2) => {
        Be.equals(o2.targetUri, n2) && o2.targetPath === t && i.push(o2);
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
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.CancellationToken.None;
    let i = await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e, t), s = /* @__PURE__ */ e.uri.toString();
    this.symbolIndex.set(s, i), this.symbolByTypeIndex.clear(s);
  }
  async updateReferences(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.CancellationToken.None;
    let i = await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e, t);
    this.referenceIndex.set(/* @__PURE__ */ e.uri.toString(), i);
  }
  isAffected(e, t) {
    let n2 = /* @__PURE__ */ this.referenceIndex.get(/* @__PURE__ */ e.uri.toString());
    return n2 ? n2.some((i) => !i.local && t.has(/* @__PURE__ */ i.targetUri.toString())) : false;
  }
}, __108 = new WeakMap(), __privateAdd(__a, __108, m$1(__a, "DefaultIndexManager")), __a);
var fs = (_$a = class {
  constructor(e) {
    this.initialBuildOptions = {}, this._ready = new Ue(), this.serviceRegistry = e.ServiceRegistry, this.langiumDocuments = e.workspace.LangiumDocuments, this.documentBuilder = e.workspace.DocumentBuilder, this.fileSystemProvider = e.workspace.FileSystemProvider, this.mutex = e.workspace.WorkspaceLock;
  }
  get ready() {
    return this._ready.promise;
  }
  get workspaceFolders() {
    return this.folders;
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
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.CancellationToken.None;
    let n2 = await this.performStartup(e);
    await ue(t), await this.documentBuilder.build(n2, this.initialBuildOptions, t);
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
    return Ge.parse(e.uri);
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
    let i = /* @__PURE__ */ Be.basename(t.uri);
    if (i.startsWith(".")) return false;
    if (t.isDirectory) return i !== "node_modules" && i !== "out";
    if (t.isFile) {
      let s = /* @__PURE__ */ Be.extname(t.uri);
      return n2.includes(s);
    }
    return false;
  }
}, __109 = new WeakMap(), __privateAdd(_$a, __109, m$1(_$a, "DefaultWorkspaceManager")), _$a);
var hs = (_ab = class {
  buildUnexpectedCharactersMessage(e, t, n2, i, s) {
    return Nn.buildUnexpectedCharactersMessage(e, t, n2, i, s);
  }
  buildUnableToPopLexerModeMessage(e) {
    return Nn.buildUnableToPopLexerModeMessage(e);
  }
}, __110 = new WeakMap(), __privateAdd(_ab, __110, m$1(_ab, "DefaultLexerErrorMessageProvider")), _ab), Wa = {
  mode: "full"
}, Ar = (_bb = class {
  constructor(e) {
    this.errorMessageProvider = e.parser.LexerErrorMessageProvider, this.tokenBuilder = e.parser.TokenBuilder;
    let t = /* @__PURE__ */ this.tokenBuilder.buildTokens(e.Grammar, {
      caseInsensitive: e.LanguageMetaData.caseInsensitive
    });
    this.tokenTypes = /* @__PURE__ */ this.toTokenTypeDictionary(t);
    let n2 = dc(t) ? Object.values(t) : t, i = e.LanguageMetaData.mode === "production";
    this.chevrotainLexer = new se(n2, {
      positionTracking: "full",
      skipValidations: i,
      errorMessageProvider: this.errorMessageProvider
    });
  }
  get definition() {
    return this.tokenTypes;
  }
  tokenize(e) {
    var n2, i, s;
    let o2 = /* @__PURE__ */ this.chevrotainLexer.tokenize(e);
    return {
      tokens: o2.tokens,
      errors: o2.errors,
      hidden: (n2 = o2.groups.hidden) !== null && n2 !== void 0 ? n2 : [],
      report: (s = (i = this.tokenBuilder).flushLexingReport) === null || s === void 0 ? void 0 : s.call(i, e)
    };
  }
  toTokenTypeDictionary(e) {
    if (dc(e)) return e;
    let t = fc(e) ? Object.values(e.modes).flat() : e, n2 = {};
    return t.forEach((i) => n2[i.name] = i), n2;
  }
}, __111 = new WeakMap(), __privateAdd(_bb, __111, m$1(_bb, "DefaultLexer")), _bb);
function ja(r) {
  return Array.isArray(r) && (r.length === 0 || "name" in r[0]);
}
m$1(ja, "isTokenTypeArray");
function fc(r) {
  return r && "modes" in r && "defaultMode" in r;
}
m$1(fc, "isIMultiModeLexerDefinition");
function dc(r) {
  return !ja(r) && !fc(r);
}
m$1(dc, "isTokenTypeDictionary");
function mc(r, e, t) {
  let n2, i;
  typeof r == "string" ? (i = e, n2 = t) : (i = r.range.start, n2 = e), i || (i = /* @__PURE__ */ B.create(0, 0));
  let s = /* @__PURE__ */ Xf(r), o2 = /* @__PURE__ */ yc(n2), l = /* @__PURE__ */ tg({
    lines: s,
    position: i,
    options: o2
  });
  return ag({
    index: 0,
    tokens: l,
    position: i
  });
}
m$1(mc, "parseJSDoc");
function gc(r, e) {
  let t = /* @__PURE__ */ yc(e), n2 = /* @__PURE__ */ Xf(r);
  if (n2.length === 0) return false;
  let i = n2[0], s = n2[n2.length - 1], o2 = t.start, l = t.end;
  return !!(o2 == null ? void 0 : o2.exec(i)) && !!(l == null ? void 0 : l.exec(s));
}
m$1(gc, "isJSDoc");
function Xf(r) {
  let e = "";
  return typeof r == "string" ? e = r : e = r.text, e.split(Uo);
}
m$1(Xf, "getLines");
var zf = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy, eg = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function tg(r) {
  var e, t, n2;
  let i = [], s = r.position.line, o2 = r.position.character;
  for (let l = 0; l < r.lines.length; l++) {
    let c = l === 0, u = l === r.lines.length - 1, d = r.lines[l], f = 0;
    if (c && r.options.start) {
      let p2 = (e = r.options.start) === null || e === void 0 ? void 0 : e.exec(d);
      p2 && (f = p2.index + p2[0].length);
    } else {
      let p2 = (t = r.options.line) === null || t === void 0 ? void 0 : t.exec(d);
      p2 && (f = p2.index + p2[0].length);
    }
    if (u) {
      let p2 = (n2 = r.options.end) === null || n2 === void 0 ? void 0 : n2.exec(d);
      p2 && (d = /* @__PURE__ */ d.substring(0, p2.index));
    }
    if (d = /* @__PURE__ */ d.substring(0, /* @__PURE__ */ sg(d)), pc(d, f) >= d.length) {
      if (i.length > 0) {
        let p2 = /* @__PURE__ */ B.create(s, o2);
        i.push({
          type: "break",
          content: "",
          range: /* @__PURE__ */ U.create(p2, p2)
        });
      }
    } else {
      zf.lastIndex = f;
      let p2 = /* @__PURE__ */ zf.exec(d);
      if (p2) {
        let g = p2[0], y = p2[1], v = /* @__PURE__ */ B.create(s, o2 + f), R = /* @__PURE__ */ B.create(s, o2 + f + g.length);
        i.push({
          type: "tag",
          content: y,
          range: /* @__PURE__ */ U.create(v, R)
        }), f += g.length, f = /* @__PURE__ */ pc(d, f);
      }
      if (f < d.length) {
        let g = /* @__PURE__ */ d.substring(f), y = /* @__PURE__ */ Array.from(/* @__PURE__ */ g.matchAll(eg));
        i.push(.../* @__PURE__ */ rg(y, g, s, o2 + f));
      }
    }
    s++, o2 = 0;
  }
  return i.length > 0 && i[i.length - 1].type === "break" ? i.slice(0, -1) : i;
}
m$1(tg, "tokenize");
function rg(r, e, t, n2) {
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
      let d = u.length + 1, f = l[1];
      if (i.push({
        type: "inline-tag",
        content: f,
        range: /* @__PURE__ */ U.create(/* @__PURE__ */ B.create(t, s + d + n2), /* @__PURE__ */ B.create(t, s + d + f.length + n2))
      }), d += f.length, l.length === 4) {
        d += l[2].length;
        let h2 = l[3];
        i.push({
          type: "text",
          content: h2,
          range: /* @__PURE__ */ U.create(/* @__PURE__ */ B.create(t, s + d + n2), /* @__PURE__ */ B.create(t, s + d + h2.length + n2))
        });
      } else i.push({
        type: "text",
        content: "",
        range: /* @__PURE__ */ U.create(/* @__PURE__ */ B.create(t, s + d + n2), /* @__PURE__ */ B.create(t, s + d + n2))
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
m$1(rg, "buildInlineTokens");
var ng = /\S/, ig = /\s*$/;
function pc(r, e) {
  let t = /* @__PURE__ */ r.substring(e).match(ng);
  return t ? e + t.index : r.length;
}
m$1(pc, "skipWhitespace");
function sg(r) {
  let e = /* @__PURE__ */ r.match(ig);
  if (e && typeof e.index == "number") return e.index;
}
m$1(sg, "lastCharacter");
function ag(r) {
  var e, t, n2, i;
  let s = /* @__PURE__ */ B.create(r.position.line, r.position.character);
  if (r.tokens.length === 0) return new Va([], U.create(s, s));
  let o2 = [];
  for (; r.index < r.tokens.length; ) {
    let u = /* @__PURE__ */ og(r, o2[o2.length - 1]);
    u && o2.push(u);
  }
  let l = (t = (e = o2[0]) === null || e === void 0 ? void 0 : e.range.start) !== null && t !== void 0 ? t : s, c = (i = (n2 = o2[o2.length - 1]) === null || n2 === void 0 ? void 0 : n2.range.end) !== null && i !== void 0 ? i : s;
  return new Va(o2, U.create(l, c));
}
m$1(ag, "parseJSDocComment");
function og(r, e) {
  let t = r.tokens[r.index];
  if (t.type === "tag") return Jf(r, false);
  if (t.type === "text" || t.type === "inline-tag") return Yf(r);
  lg(t, e), r.index++;
}
m$1(og, "parseJSDocElement");
function lg(r, e) {
  if (e) {
    let t = new Ka("", r.range);
    "inlines" in e ? e.inlines.push(t) : e.content.inlines.push(t);
  }
}
m$1(lg, "appendEmptyLine");
function Yf(r) {
  let e = r.tokens[r.index], t = e, n2 = e, i = [];
  for (; e && e.type !== "break" && e.type !== "tag"; ) i.push(/* @__PURE__ */ cg(r)), n2 = e, e = r.tokens[r.index];
  return new ms(i, U.create(t.range.start, n2.range.end));
}
m$1(Yf, "parseJSDocText");
function cg(r) {
  return r.tokens[r.index].type === "inline-tag" ? Jf(r, true) : Qf(r);
}
m$1(cg, "parseJSDocInline");
function Jf(r, e) {
  let t = r.tokens[r.index++], n2 = /* @__PURE__ */ t.content.substring(1), i = r.tokens[r.index];
  if ((i == null ? void 0 : i.type) === "text") if (e) {
    let s = /* @__PURE__ */ Qf(r);
    return new ps(n2, new ms([
      s
    ], s.range), e, U.create(t.range.start, s.range.end));
  } else {
    let s = /* @__PURE__ */ Yf(r);
    return new ps(n2, s, e, U.create(t.range.start, s.range.end));
  }
  else {
    let s = t.range;
    return new ps(n2, new ms([], s), e, s);
  }
}
m$1(Jf, "parseJSDocTag");
function Qf(r) {
  let e = r.tokens[r.index++];
  return new Ka(e.content, e.range);
}
m$1(Qf, "parseJSDocLine");
function yc(r) {
  if (!r) return yc({
    start: "/**",
    end: "*/",
    line: "*"
  });
  let { start: e, end: t, line: n2 } = r;
  return {
    start: /* @__PURE__ */ hc(e, true),
    end: /* @__PURE__ */ hc(t, false),
    line: /* @__PURE__ */ hc(n2, true)
  };
}
m$1(yc, "normalizeOptions");
function hc(r, e) {
  if (typeof r == "string" || typeof r == "object") {
    let t = typeof r == "string" ? lr(r) : r.source;
    return e ? new RegExp(`^\\s*${t}`) : new RegExp(`\\s*${t}\\s*$`);
  } else return r;
}
m$1(hc, "normalizeOption");
var Va = (_cb = class {
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
      e += qf(e) + n2;
    }
    return e.trim();
  }
  toMarkdown(e) {
    let t = "";
    for (let n2 of this.elements) if (t.length === 0) t = /* @__PURE__ */ n2.toMarkdown(e);
    else {
      let i = /* @__PURE__ */ n2.toMarkdown(e);
      t += qf(t) + i;
    }
    return t.trim();
  }
}, __112 = new WeakMap(), __privateAdd(_cb, __112, m$1(_cb, "JSDocCommentImpl")), _cb), ps = (_db = class {
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
      let s = /* @__PURE__ */ ug(this.name, t, e ?? {});
      if (typeof s == "string") return s;
    }
    let n2 = "";
    (e == null ? void 0 : e.tag) === "italic" || (e == null ? void 0 : e.tag) === void 0 ? n2 = "*" : (e == null ? void 0 : e.tag) === "bold" ? n2 = "**" : (e == null ? void 0 : e.tag) === "bold-italic" && (n2 = "***");
    let i = `${n2}@${this.name}${n2}`;
    return this.content.inlines.length === 1 ? i = `${i} — ${t}` : this.content.inlines.length > 1 && (i = `${i}
${t}`), this.inline ? `{${i}}` : i;
  }
}, __113 = new WeakMap(), __privateAdd(_db, __113, m$1(_db, "JSDocTagImpl")), _db);
function ug(r, e, t) {
  var n2, i;
  if (r === "linkplain" || r === "linkcode" || r === "link") {
    let s = /* @__PURE__ */ e.indexOf(" "), o2 = e;
    if (s > 0) {
      let c = /* @__PURE__ */ pc(e, s);
      o2 = /* @__PURE__ */ e.substring(c), e = /* @__PURE__ */ e.substring(0, s);
    }
    return (r === "linkcode" || r === "link" && t.link === "code") && (o2 = `\`${o2}\``), (i = (n2 = t.renderLink) === null || n2 === void 0 ? void 0 : n2.call(t, e, o2)) !== null && i !== void 0 ? i : dg(e, o2);
  }
}
m$1(ug, "renderInlineTag");
function dg(r, e) {
  try {
    return Ge.parse(r, true), `[${e}](${r})`;
  } catch {
    return r;
  }
}
m$1(dg, "renderLinkDefault");
var ms = (_eb = class {
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
}, __114 = new WeakMap(), __privateAdd(_eb, __114, m$1(_eb, "JSDocTextImpl")), _eb), Ka = (_fb = class {
  constructor(e, t) {
    this.text = e, this.range = t;
  }
  toString() {
    return this.text;
  }
  toMarkdown() {
    return this.text;
  }
}, __115 = new WeakMap(), __privateAdd(_fb, __115, m$1(_fb, "JSDocLineImpl")), _fb);
function qf(r) {
  return r.endsWith(`
`) ? `
` : `

`;
}
m$1(qf, "fillNewlines");
var gs = (_gb = class {
  constructor(e) {
    this.indexManager = e.shared.workspace.IndexManager, this.commentProvider = e.documentation.CommentProvider;
  }
  getDocumentation(e) {
    let t = /* @__PURE__ */ this.commentProvider.getComment(e);
    if (t && gc(t)) return mc(t).toMarkdown({
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
    let i = we(e).precomputedScopes;
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
}, __116 = new WeakMap(), __privateAdd(_gb, __116, m$1(_gb, "JSDocDocumentationProvider")), _gb);
var ys = (_hb = class {
  constructor(e) {
    this.grammarConfig = () => e.parser.GrammarConfig;
  }
  getComment(e) {
    var t;
    return uc(e) ? e.$comment : (t = /* @__PURE__ */ po(e.$cstNode, this.grammarConfig().multilineCommentRules)) === null || t === void 0 ? void 0 : t.text;
  }
}, __117 = new WeakMap(), __privateAdd(_hb, __117, m$1(_hb, "DefaultCommentProvider")), _hb);
var Ts = (_ib = class {
  constructor(e) {
    this.syncParser = e.parser.LangiumParser;
  }
  parse(e, t) {
    return Promise.resolve(/* @__PURE__ */ this.syncParser.parse(e));
  }
}, __118 = new WeakMap(), __privateAdd(_ib, __118, m$1(_ib, "DefaultAsyncParser")), _ib), Tc = (_jb = class {
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
      n2 >= 0 && this.queue.splice(n2, 1), t.reject(mt);
    }), this.queue.push(t), t.promise;
  }
}, __119 = new WeakMap(), __privateAdd(_jb, __119, m$1(_jb, "AbstractThreadedAsyncParser")), _jb), xc = (_kb = class {
  get ready() {
    return this._ready;
  }
  get onReady() {
    return this.onReadyEmitter.event;
  }
  constructor(e, t, n2, i) {
    this.onReadyEmitter = new ne.Emitter(), this.deferred = new Ue(), this._ready = true, this._parsing = false, this.sendMessage = e, this._terminate = i, t((s) => {
      let o2 = s;
      this.deferred.resolve(o2), this.unlock();
    }), n2((s) => {
      this.deferred.reject(s), this.unlock();
    });
  }
  terminate() {
    this.deferred.reject(mt), this._terminate();
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
}, __120 = new WeakMap(), __privateAdd(_kb, __120, m$1(_kb, "ParserWorker")), _kb);
var xs = (_lb = class {
  constructor() {
    this.previousTokenSource = new _.CancellationTokenSource(), this.writeQueue = [], this.readQueue = [], this.done = true;
  }
  write(e) {
    this.cancelWrite();
    let t = /* @__PURE__ */ Fa();
    return this.previousTokenSource = t, this.enqueue(this.writeQueue, e, t.token);
  }
  read(e) {
    return this.enqueue(this.readQueue, e);
  }
  enqueue(e, t) {
    let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _.CancellationToken.None;
    let i = new Ue(), s = {
      action: t,
      deferred: i,
      cancellationToken: n2
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
        gt(s) ? n2.resolve(void 0) : n2.reject(s);
      }
    })), this.done = true, this.performNextOperation();
  }
  cancelWrite() {
    this.previousTokenSource.cancel();
  }
}, __121 = new WeakMap(), __privateAdd(_lb, __121, m$1(_lb, "DefaultWorkspaceLock")), _lb);
var Rs = (_mb = class {
  constructor(e) {
    this.grammarElementIdMap = new xr(), this.tokenTypeIdMap = new xr(), this.grammar = e.Grammar, this.lexer = e.parser.Lexer, this.linker = e.references.Linker;
  }
  dehydrate(e) {
    return {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport ? this.dehydrateLexerReport(e.lexerReport) : void 0,
      parserErrors: /* @__PURE__ */ e.parserErrors.map((t) => Object.assign(/* @__PURE__ */ Object.assign({}, t), {
        message: t.message
      })),
      value: /* @__PURE__ */ this.dehydrateAstNode(e.value, /* @__PURE__ */ this.createDehyrationContext(e.value))
    };
  }
  dehydrateLexerReport(e) {
    return e;
  }
  createDehyrationContext(e) {
    let t = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map();
    for (let i of Je(e)) t.set(i, {});
    if (e.$cstNode) for (let i of Zt(e.$cstNode)) n2.set(i, {});
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
      for (let l of s) le(l) ? o2.push(/* @__PURE__ */ this.dehydrateAstNode(l, t)) : Ee(l) ? o2.push(/* @__PURE__ */ this.dehydrateReference(l, t)) : o2.push(l);
    } else le(s) ? n2[i] = /* @__PURE__ */ this.dehydrateAstNode(s, t) : Ee(s) ? n2[i] = /* @__PURE__ */ this.dehydrateReference(s, t) : s !== void 0 && (n2[i] = s);
    return n2;
  }
  dehydrateReference(e, t) {
    let n2 = {};
    return n2.$refText = e.$refText, e.$refNode && (n2.$refNode = /* @__PURE__ */ t.cstNodes.get(e.$refNode)), n2;
  }
  dehydrateCstNode(e, t) {
    let n2 = /* @__PURE__ */ t.cstNodes.get(e);
    return Zn(e) ? n2.fullText = e.fullText : n2.grammarSource = /* @__PURE__ */ this.getGrammarElementId(e.grammarSource), n2.hidden = e.hidden, n2.astNode = /* @__PURE__ */ t.astNodes.get(e.astNode), tt(e) ? n2.content = /* @__PURE__ */ e.content.map((i) => this.dehydrateCstNode(i, t)) : Ft(e) && (n2.tokenType = e.tokenType.name, n2.offset = e.offset, n2.length = e.length, n2.startLine = e.range.start.line, n2.startColumn = e.range.start.character, n2.endLine = e.range.end.line, n2.endColumn = e.range.end.character), n2;
  }
  hydrate(e) {
    let t = e.value, n2 = /* @__PURE__ */ this.createHydrationContext(t);
    return "$cstNode" in t && this.hydrateCstNode(t.$cstNode, n2), {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport,
      parserErrors: e.parserErrors,
      value: /* @__PURE__ */ this.hydrateAstNode(t, n2)
    };
  }
  createHydrationContext(e) {
    let t = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map();
    for (let s of Je(e)) t.set(s, {});
    let i;
    if (e.$cstNode) for (let s of Zt(e.$cstNode)) {
      let o2;
      "fullText" in s ? (o2 = new Bn(s.fullText), i = o2) : "content" in s ? o2 = new gr() : "tokenType" in s && (o2 = /* @__PURE__ */ this.hydrateCstLeafNode(s)), o2 && (n2.set(s, o2), o2.root = i);
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
      for (let l of s) le(l) ? o2.push(/* @__PURE__ */ this.setParent(/* @__PURE__ */ this.hydrateAstNode(l, t), n2)) : Ee(l) ? o2.push(/* @__PURE__ */ this.hydrateReference(l, n2, i, t)) : o2.push(l);
    } else le(s) ? n2[i] = /* @__PURE__ */ this.setParent(/* @__PURE__ */ this.hydrateAstNode(s, t), n2) : Ee(s) ? n2[i] = /* @__PURE__ */ this.hydrateReference(s, n2, i, t) : s !== void 0 && (n2[i] = s);
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
    if (typeof e.grammarSource == "number" && (i.grammarSource = /* @__PURE__ */ this.getGrammarElement(e.grammarSource)), i.astNode = /* @__PURE__ */ t.astNodes.get(e.astNode), tt(i)) for (let s of e.content) {
      let o2 = /* @__PURE__ */ this.hydrateCstNode(s, t, n2++);
      i.content.push(o2);
    }
    return i;
  }
  hydrateCstLeafNode(e) {
    let t = /* @__PURE__ */ this.getTokenType(e.tokenType), n2 = e.offset, i = e.length, s = e.startLine, o2 = e.startColumn, l = e.endLine, c = e.endColumn, u = e.hidden;
    return new mr(n2, i, {
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
    if (e) return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.get(e);
  }
  getGrammarElement(e) {
    return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.getKey(e);
  }
  createGrammarElementIdMap() {
    let e = 0;
    for (let t of Je(this.grammar)) oi(t) && this.grammarElementIdMap.set(t, e++);
  }
}, __122 = new WeakMap(), __privateAdd(_mb, __122, m$1(_mb, "DefaultHydrator")), _mb);
function Rc(r) {
  return {
    documentation: {
      CommentProvider: /* @__PURE__ */ m$1((e) => new ys(e), "CommentProvider"),
      DocumentationProvider: /* @__PURE__ */ m$1((e) => new gs(e), "DocumentationProvider")
    },
    parser: {
      AsyncParser: /* @__PURE__ */ m$1((e) => new Ts(e), "AsyncParser"),
      GrammarConfig: /* @__PURE__ */ m$1((e) => el(e), "GrammarConfig"),
      LangiumParser: /* @__PURE__ */ m$1((e) => Ql(e), "LangiumParser"),
      CompletionParser: /* @__PURE__ */ m$1((e) => Jl(e), "CompletionParser"),
      ValueConverter: /* @__PURE__ */ m$1(() => new Tr(), "ValueConverter"),
      TokenBuilder: /* @__PURE__ */ m$1(() => new Pt(), "TokenBuilder"),
      Lexer: /* @__PURE__ */ m$1((e) => new Ar(e), "Lexer"),
      ParserErrorMessageProvider: /* @__PURE__ */ m$1(() => new Wn(), "ParserErrorMessageProvider"),
      LexerErrorMessageProvider: /* @__PURE__ */ m$1(() => new hs(), "LexerErrorMessageProvider")
    },
    workspace: {
      AstNodeLocator: /* @__PURE__ */ m$1(() => new ls(), "AstNodeLocator"),
      AstNodeDescriptionProvider: /* @__PURE__ */ m$1((e) => new as(e), "AstNodeDescriptionProvider"),
      ReferenceDescriptionProvider: /* @__PURE__ */ m$1((e) => new os(e), "ReferenceDescriptionProvider")
    },
    references: {
      Linker: /* @__PURE__ */ m$1((e) => new Xi(e), "Linker"),
      NameProvider: /* @__PURE__ */ m$1(() => new Yi(), "NameProvider"),
      ScopeProvider: /* @__PURE__ */ m$1((e) => new ts(e), "ScopeProvider"),
      ScopeComputation: /* @__PURE__ */ m$1((e) => new Qi(e), "ScopeComputation"),
      References: /* @__PURE__ */ m$1((e) => new Ji(e), "References")
    },
    serializer: {
      Hydrator: /* @__PURE__ */ m$1((e) => new Rs(e), "Hydrator"),
      JsonSerializer: /* @__PURE__ */ m$1((e) => new rs(e), "JsonSerializer")
    },
    validation: {
      DocumentValidator: /* @__PURE__ */ m$1((e) => new ss(e), "DocumentValidator"),
      ValidationRegistry: /* @__PURE__ */ m$1((e) => new is(e), "ValidationRegistry")
    },
    shared: /* @__PURE__ */ m$1(() => r.shared, "shared")
  };
}
m$1(Rc, "createDefaultCoreModule");
function Ec(r) {
  return {
    ServiceRegistry: /* @__PURE__ */ m$1((e) => new ns(e), "ServiceRegistry"),
    workspace: {
      LangiumDocuments: /* @__PURE__ */ m$1((e) => new qi(e), "LangiumDocuments"),
      LangiumDocumentFactory: /* @__PURE__ */ m$1((e) => new zi(e), "LangiumDocumentFactory"),
      DocumentBuilder: /* @__PURE__ */ m$1((e) => new us(e), "DocumentBuilder"),
      IndexManager: /* @__PURE__ */ m$1((e) => new ds(e), "IndexManager"),
      WorkspaceManager: /* @__PURE__ */ m$1((e) => new fs(e), "WorkspaceManager"),
      FileSystemProvider: /* @__PURE__ */ m$1((e) => r.fileSystemProvider(e), "FileSystemProvider"),
      WorkspaceLock: /* @__PURE__ */ m$1(() => new xs(), "WorkspaceLock"),
      ConfigurationProvider: /* @__PURE__ */ m$1((e) => new cs(e), "ConfigurationProvider")
    }
  };
}
m$1(Ec, "createDefaultSharedCoreModule");
var Ac;
(function(r) {
  r.merge = (e, t) => Ha(/* @__PURE__ */ Ha({}, e), t);
})(Ac || (Ac = {}));
function za(r, e, t, n2, i, s, o2, l, c) {
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
  ].reduce(Ha, {});
  return nh(u);
}
m$1(za, "inject");
var th = /* @__PURE__ */ Symbol("isProxy");
function rh(r) {
  if (r && r[th]) for (let e of Object.values(r)) rh(e);
  return r;
}
m$1(rh, "eagerLoad");
function nh(r, e) {
  let t = new Proxy({}, {
    deleteProperty: /* @__PURE__ */ m$1(() => false, "deleteProperty"),
    set: /* @__PURE__ */ m$1(() => {
      throw new Error("Cannot set property on injected service container");
    }, "set"),
    get: /* @__PURE__ */ m$1((n2, i) => i === th ? true : eh(n2, i, r, e || t), "get"),
    getOwnPropertyDescriptor: /* @__PURE__ */ m$1((n2, i) => (eh(n2, i, r, e || t), Object.getOwnPropertyDescriptor(n2, i)), "getOwnPropertyDescriptor"),
    has: /* @__PURE__ */ m$1((n2, i) => i in r, "has"),
    ownKeys: /* @__PURE__ */ m$1(() => [
      .../* @__PURE__ */ Object.getOwnPropertyNames(r)
    ], "ownKeys")
  });
  return t;
}
m$1(nh, "_inject");
var Zf = /* @__PURE__ */ Symbol();
function eh(r, e, t, n2) {
  if (e in r) {
    if (r[e] instanceof Error) throw new Error("Construction failure. Please make sure that your dependencies are constructable.", {
      cause: r[e]
    });
    if (r[e] === Zf) throw new Error('Cycle detected. Please make "' + String(e) + '" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');
    return r[e];
  } else if (e in t) {
    let i = t[e];
    r[e] = Zf;
    try {
      r[e] = typeof i == "function" ? i(n2) : nh(i, n2);
    } catch (s) {
      throw r[e] = s instanceof Error ? s : void 0, s;
    }
    return r[e];
  } else return;
}
m$1(eh, "_resolve");
function Ha(r, e) {
  if (e) {
    for (let [t, n2] of Object.entries(e)) if (n2 !== void 0) {
      let i = r[t];
      i !== null && n2 !== null && typeof i == "object" && typeof n2 == "object" ? r[t] = /* @__PURE__ */ Ha(i, n2) : r[t] = n2;
    }
  }
  return r;
}
m$1(Ha, "_merge");
var vc = {
  indentTokenName: "INDENT",
  dedentTokenName: "DEDENT",
  whitespaceTokenName: "WS",
  ignoreIndentationDelimiters: []
}, vr;
(function(r) {
  r.REGULAR = "indentation-sensitive", r.IGNORE_INDENTATION = "ignore-indentation";
})(vr || (vr = {}));
var qa = (_nb = class extends Pt {
  constructor(e = vc) {
    super(), this.indentationStack = [
      0
    ], this.whitespaceRegExp = /[ \t]+/y, this.options = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, vc), e), this.indentTokenType = /* @__PURE__ */ Gt({
      name: this.options.indentTokenName,
      pattern: /* @__PURE__ */ this.indentMatcher.bind(this),
      line_breaks: false
    }), this.dedentTokenType = /* @__PURE__ */ Gt({
      name: this.options.dedentTokenName,
      pattern: /* @__PURE__ */ this.dedentMatcher.bind(this),
      line_breaks: false
    });
  }
  buildTokens(e, t) {
    let n2 = /* @__PURE__ */ super.buildTokens(e, t);
    if (!ja(n2)) throw new Error("Invalid tokens built by default builder");
    let { indentTokenName: i, dedentTokenName: s, whitespaceTokenName: o2, ignoreIndentationDelimiters: l } = this.options, c, u, d, f = [];
    for (let h2 of n2) {
      for (let [p2, g] of l) h2.name === p2 ? h2.PUSH_MODE = vr.IGNORE_INDENTATION : h2.name === g && (h2.POP_MODE = true);
      h2.name === s ? c = h2 : h2.name === i ? u = h2 : h2.name === o2 ? d = h2 : f.push(h2);
    }
    if (!c || !u || !d) throw new Error("Some indentation/whitespace tokens not found!");
    return l.length > 0 ? {
      modes: {
        [vr.REGULAR]: [
          c,
          u,
          ...f,
          d
        ],
        [vr.IGNORE_INDENTATION]: [
          ...f,
          d
        ]
      },
      defaultMode: vr.REGULAR
    } : [
      c,
      u,
      d,
      ...f
    ];
  }
  flushLexingReport(e) {
    let t = /* @__PURE__ */ super.flushLexingReport(e);
    return Object.assign(/* @__PURE__ */ Object.assign({}, t), {
      remainingDedents: /* @__PURE__ */ this.flushRemainingDedents(e)
    });
  }
  isStartOfLine(e, t) {
    return t === 0 || `\r
`.includes(e[t - 1]);
  }
  matchWhitespace(e, t, n2, i) {
    var s;
    this.whitespaceRegExp.lastIndex = t;
    let o2 = /* @__PURE__ */ this.whitespaceRegExp.exec(e);
    return {
      currIndentLevel: (s = o2 == null ? void 0 : o2[0].length) !== null && s !== void 0 ? s : 0,
      prevIndentLevel: /* @__PURE__ */ this.indentationStack.at(-1),
      match: o2
    };
  }
  createIndentationTokenInstance(e, t, n2, i) {
    let s = /* @__PURE__ */ this.getLineNumber(t, i);
    return wt(e, n2, i, i + n2.length, s, s, 1, n2.length);
  }
  getLineNumber(e, t) {
    return e.substring(0, t).split(/\r\n|\r|\n/).length;
  }
  indentMatcher(e, t, n2, i) {
    if (!this.isStartOfLine(e, t)) return null;
    let { currIndentLevel: s, prevIndentLevel: o2, match: l } = this.matchWhitespace(e, t, n2, i);
    return s <= o2 ? null : (this.indentationStack.push(s), l);
  }
  dedentMatcher(e, t, n2, i) {
    var s, o2, l, c;
    if (!this.isStartOfLine(e, t)) return null;
    let { currIndentLevel: u, prevIndentLevel: d, match: f } = this.matchWhitespace(e, t, n2, i);
    if (u >= d) return null;
    let h2 = /* @__PURE__ */ this.indentationStack.lastIndexOf(u);
    if (h2 === -1) return this.diagnostics.push({
      severity: "error",
      message: `Invalid dedent level ${u} at offset: ${t}. Current indentation stack: ${this.indentationStack}`,
      offset: t,
      length: (o2 = (s = f == null ? void 0 : f[0]) === null || s === void 0 ? void 0 : s.length) !== null && o2 !== void 0 ? o2 : 0,
      line: /* @__PURE__ */ this.getLineNumber(e, t),
      column: 1
    }), null;
    let p2 = this.indentationStack.length - h2 - 1, g = (c = (l = /* @__PURE__ */ e.substring(0, t).match(/[\r\n]+$/)) === null || l === void 0 ? void 0 : l[0].length) !== null && c !== void 0 ? c : 1;
    for (let y = 0; y < p2; y++) {
      let v = /* @__PURE__ */ this.createIndentationTokenInstance(this.dedentTokenType, e, "", t - (g - 1));
      n2.push(v), this.indentationStack.pop();
    }
    return null;
  }
  buildTerminalToken(e) {
    let t = /* @__PURE__ */ super.buildTerminalToken(e), { indentTokenName: n2, dedentTokenName: i, whitespaceTokenName: s } = this.options;
    return t.name === n2 ? this.indentTokenType : t.name === i ? this.dedentTokenType : t.name === s ? Gt({
      name: s,
      pattern: this.whitespaceRegExp,
      group: se.SKIPPED
    }) : t;
  }
  flushRemainingDedents(e) {
    let t = [];
    for (; this.indentationStack.length > 1; ) t.push(/* @__PURE__ */ this.createIndentationTokenInstance(this.dedentTokenType, e, "", e.length)), this.indentationStack.pop();
    return this.indentationStack = [
      0
    ], t;
  }
}, __123 = new WeakMap(), __privateAdd(_nb, __123, m$1(_nb, "IndentationAwareTokenBuilder")), _nb), kc = (_ob = class extends Ar {
  constructor(e) {
    if (super(e), e.parser.TokenBuilder instanceof qa) this.indentationTokenBuilder = e.parser.TokenBuilder;
    else throw new Error("IndentationAwareLexer requires an accompanying IndentationAwareTokenBuilder");
  }
  tokenize(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Wa;
    let n2 = /* @__PURE__ */ super.tokenize(e), i = n2.report;
    (t == null ? void 0 : t.mode) === "full" && n2.tokens.push(...i.remainingDedents), i.remainingDedents = [];
    let { indentTokenType: s, dedentTokenType: o2 } = this.indentationTokenBuilder, l = s.tokenTypeIdx, c = o2.tokenTypeIdx, u = [], d = n2.tokens.length - 1;
    for (let f = 0; f < d; f++) {
      let h2 = n2.tokens[f], p2 = n2.tokens[f + 1];
      if (h2.tokenTypeIdx === l && p2.tokenTypeIdx === c) {
        f++;
        continue;
      }
      u.push(h2);
    }
    return d >= 0 && u.push(n2.tokens[d]), n2.tokens = u, n2;
  }
}, __124 = new WeakMap(), __privateAdd(_ob, __124, m$1(_ob, "IndentationAwareLexer")), _ob);
var W = {};
o(W, {
  AstUtils: () => Fs,
  BiMap: () => xr,
  Cancellation: () => _,
  ContextCache: () => Rr,
  CstUtils: () => _s,
  DONE_RESULT: () => Ce,
  Deferred: () => Ue,
  Disposable: () => Vt,
  DisposableCache: () => qn,
  DocumentCache: () => Ga,
  EMPTY_STREAM: () => ei,
  ErrorWithLocation: () => tr,
  GrammarUtils: () => js,
  MultiMap: () => st,
  OperationCancelled: () => mt,
  Reduction: () => Nr,
  RegExpUtils: () => Bs,
  SimpleCache: () => es,
  StreamImpl: () => Ke,
  TreeStreamImpl: () => lt,
  URI: () => Ge,
  UriUtils: () => Be,
  WorkspaceCache: () => Xn,
  assertUnreachable: () => ut,
  delayNextTick: () => oc,
  interruptAndCheck: () => ue,
  isOperationCancelled: () => gt,
  loadGrammarFromJson: () => Kt,
  setInterruptionPeriod: () => Ff,
  startCancelableOperation: () => Fa,
  stream: () => K
});
p(W, ne);
var Xa = (_pb = class {
  readFile() {
    throw new Error("No file system is available.");
  }
  async readDirectory() {
    return [];
  }
}, __125 = new WeakMap(), __privateAdd(_pb, __125, m$1(_pb, "EmptyFileSystemProvider")), _pb), Ic = {
  fileSystemProvider: /* @__PURE__ */ m$1(() => new Xa(), "fileSystemProvider")
};
var fg = {
  Grammar: /* @__PURE__ */ m$1(() => {
  }, "Grammar"),
  LanguageMetaData: /* @__PURE__ */ m$1(() => ({
    caseInsensitive: false,
    fileExtensions: [
      ".langium"
    ],
    languageId: "langium"
  }), "LanguageMetaData")
}, hg = {
  AstReflection: /* @__PURE__ */ m$1(() => new hn(), "AstReflection")
};
function pg() {
  let r = /* @__PURE__ */ za(/* @__PURE__ */ Ec(Ic), hg), e = /* @__PURE__ */ za(/* @__PURE__ */ Rc({
    shared: r
  }), fg);
  return r.ServiceRegistry.register(e), e;
}
m$1(pg, "createMinimalGrammarServices");
function Kt(r) {
  var e;
  let t = /* @__PURE__ */ pg(), n2 = /* @__PURE__ */ t.serializer.JsonSerializer.deserialize(r);
  return t.shared.workspace.LangiumDocumentFactory.fromModel(n2, /* @__PURE__ */ Ge.parse(`memory://${(e = n2.name) !== null && e !== void 0 ? e : "grammar"}.langium`)), n2;
}
m$1(Kt, "loadGrammarFromJson");
p(de, W);
var mg = Object.defineProperty, j = /* @__PURE__ */ m$1((r, e) => mg(r, "name", {
  value: e,
  configurable: true
}), "__name"), ih = "Statement", Za = "Architecture";
function gg(r) {
  return at.isInstance(r, Za);
}
m$1(gg, "isArchitecture");
j(gg, "isArchitecture");
var Es = "Branch";
function yg(r) {
  return at.isInstance(r, Es);
}
m$1(yg, "isBranch");
j(yg, "isBranch");
var Ya = "Checkout", Ja = "CherryPicking", As = "Commit";
function Tg(r) {
  return at.isInstance(r, As);
}
m$1(Tg, "isCommit");
j(Tg, "isCommit");
var eo = "Common";
function xg(r) {
  return at.isInstance(r, eo);
}
m$1(xg, "isCommon");
j(xg, "isCommon");
var Nc = "Edge", vs = "GitGraph";
function Rg(r) {
  return at.isInstance(r, vs);
}
m$1(Rg, "isGitGraph");
j(Rg, "isGitGraph");
var Sc = "Group", to = "Info";
function Eg(r) {
  return at.isInstance(r, to);
}
m$1(Eg, "isInfo");
j(Eg, "isInfo");
var Cc = "Junction", ks = "Merge";
function Ag(r) {
  return at.isInstance(r, ks);
}
m$1(Ag, "isMerge");
j(Ag, "isMerge");
var ro = "Packet";
function vg(r) {
  return at.isInstance(r, ro);
}
m$1(vg, "isPacket");
j(vg, "isPacket");
var no = "PacketBlock";
function kg(r) {
  return at.isInstance(r, no);
}
m$1(kg, "isPacketBlock");
j(kg, "isPacketBlock");
var io = "Pie";
function Ig(r) {
  return at.isInstance(r, io);
}
m$1(Ig, "isPie");
j(Ig, "isPie");
var so = "PieSection";
function Ng(r) {
  return at.isInstance(r, so);
}
m$1(Ng, "isPieSection");
j(Ng, "isPieSection");
var _c = "Service", Qa = "Direction", uh = (_qb = class extends Jt {
  getAllTypes() {
    return [
      Za,
      Es,
      Ya,
      Ja,
      As,
      eo,
      Qa,
      Nc,
      vs,
      Sc,
      to,
      Cc,
      ks,
      ro,
      no,
      io,
      so,
      _c,
      ih
    ];
  }
  computeIsSubtype(r, e) {
    switch (r) {
      case Es:
      case Ya:
      case Ja:
      case As:
      case ks:
        return this.isSubtype(ih, e);
      case Qa:
        return this.isSubtype(vs, e);
      default:
        return false;
    }
  }
  getReferenceType(r) {
    let e = `${r.container.$type}:${r.property}`;
    throw new Error(`${e} is not a valid reference id.`);
  }
  getTypeMetaData(r) {
    switch (r) {
      case Za:
        return {
          name: Za,
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
      case Es:
        return {
          name: Es,
          properties: [
            {
              name: "name"
            },
            {
              name: "order"
            }
          ]
        };
      case Ya:
        return {
          name: Ya,
          properties: [
            {
              name: "branch"
            }
          ]
        };
      case Ja:
        return {
          name: Ja,
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
      case As:
        return {
          name: As,
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
      case eo:
        return {
          name: eo,
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
      case Nc:
        return {
          name: Nc,
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
      case vs:
        return {
          name: vs,
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
      case Sc:
        return {
          name: Sc,
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
      case to:
        return {
          name: to,
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
      case Cc:
        return {
          name: Cc,
          properties: [
            {
              name: "id"
            },
            {
              name: "in"
            }
          ]
        };
      case ks:
        return {
          name: ks,
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
      case ro:
        return {
          name: ro,
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
      case no:
        return {
          name: no,
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
      case io:
        return {
          name: io,
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
      case so:
        return {
          name: so,
          properties: [
            {
              name: "label"
            },
            {
              name: "value"
            }
          ]
        };
      case _c:
        return {
          name: _c,
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
      case Qa:
        return {
          name: Qa,
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
}, __126 = new WeakMap(), __210 = new WeakMap(), __privateAdd(_qb, __126, m$1(_qb, "MermaidAstReflection")), __privateAdd(_qb, __210, j(_qb, "MermaidAstReflection")), _qb), at = new uh(), sh, Sg = /* @__PURE__ */ j(() => sh ?? (sh = /* @__PURE__ */ Kt('{"$type":"Grammar","isDeclared":true,"name":"Info","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Info","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}')), "InfoGrammar"), ah, Cg = /* @__PURE__ */ j(() => ah ?? (ah = /* @__PURE__ */ Kt(`{"$type":"Grammar","isDeclared":true,"name":"Packet","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Packet","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"packet-beta"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"+"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"?"},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}`)), "PacketGrammar"), oh, _g = /* @__PURE__ */ j(() => oh ?? (oh = /* @__PURE__ */ Kt('{"$type":"Grammar","isDeclared":true,"name":"Pie","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Pie","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"+"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"PIE_SECTION_LABEL","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]+\\"/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"PIE_SECTION_VALUE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/(0|[1-9][0-9]*)(\\\\.[0-9]+)?/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}')), "PieGrammar"), lh, wg = /* @__PURE__ */ j(() => lh ?? (lh = /* @__PURE__ */ Kt('{"$type":"Grammar","isDeclared":true,"name":"Architecture","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Architecture","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"LeftPort","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"RightPort","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Arrow","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_ID","definition":{"$type":"RegexToken","regex":"/[\\\\w]+/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TEXT_ICON","definition":{"$type":"RegexToken","regex":"/\\\\(\\"[^\\"]+\\"\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[[\\\\w ]+\\\\]/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}')), "ArchitectureGrammar"), ch, Lg = /* @__PURE__ */ j(() => ch ?? (ch = /* @__PURE__ */ Kt(`{"$type":"Grammar","isDeclared":true,"name":"GitGraph","interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"ParserRule","entry":true,"name":"GitGraph","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+(?=\\\\s)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"types":[],"usedGrammars":[]}`)), "GitGraphGrammar"), Og = {
  languageId: "info",
  fileExtensions: [
    ".mmd",
    ".mermaid"
  ],
  caseInsensitive: false,
  mode: "production"
}, $g = {
  languageId: "packet",
  fileExtensions: [
    ".mmd",
    ".mermaid"
  ],
  caseInsensitive: false,
  mode: "production"
}, Pg = {
  languageId: "pie",
  fileExtensions: [
    ".mmd",
    ".mermaid"
  ],
  caseInsensitive: false,
  mode: "production"
}, bg = {
  languageId: "architecture",
  fileExtensions: [
    ".mmd",
    ".mermaid"
  ],
  caseInsensitive: false,
  mode: "production"
}, Mg = {
  languageId: "gitGraph",
  fileExtensions: [
    ".mmd",
    ".mermaid"
  ],
  caseInsensitive: false,
  mode: "production"
}, bS = {
  AstReflection: /* @__PURE__ */ j(() => new uh(), "AstReflection")
}, MS = {
  Grammar: /* @__PURE__ */ j(() => Sg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ j(() => Og, "LanguageMetaData"),
  parser: {}
}, DS = {
  Grammar: /* @__PURE__ */ j(() => Cg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ j(() => $g, "LanguageMetaData"),
  parser: {}
}, FS = {
  Grammar: /* @__PURE__ */ j(() => _g(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ j(() => Pg, "LanguageMetaData"),
  parser: {}
}, US = {
  Grammar: /* @__PURE__ */ j(() => wg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ j(() => bg, "LanguageMetaData"),
  parser: {}
}, GS = {
  Grammar: /* @__PURE__ */ j(() => Lg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ j(() => Mg, "LanguageMetaData"),
  parser: {}
}, Dg = /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/, Fg = /accTitle[\t ]*:([^\n\r]*)/, Ug = /title([\t ][^\n\r]*|)/, Gg = {
  ACC_DESCR: Dg,
  ACC_TITLE: Fg,
  TITLE: Ug
}, Bg = (_rb = class extends Tr {
  runConverter(r, e, t) {
    let n2 = /* @__PURE__ */ this.runCommonConverter(r, e, t);
    return n2 === void 0 && (n2 = /* @__PURE__ */ this.runCustomConverter(r, e, t)), n2 === void 0 ? super.runConverter(r, e, t) : n2;
  }
  runCommonConverter(r, e, t) {
    let n2 = Gg[r.name];
    if (n2 === void 0) return;
    let i = /* @__PURE__ */ n2.exec(e);
    if (i !== null) {
      if (i[1] !== void 0) return i[1].trim().replace(/[\t ]{2,}/gm, " ");
      if (i[2] !== void 0) return i[2].replace(/^\s*/gm, "").replace(/\s+$/gm, "").replace(/[\t ]{2,}/gm, " ").replace(/[\n\r]{2,}/gm, `
`);
    }
  }
}, __127 = new WeakMap(), __211 = new WeakMap(), __privateAdd(_rb, __127, m$1(_rb, "AbstractMermaidValueConverter")), __privateAdd(_rb, __211, j(_rb, "AbstractMermaidValueConverter")), _rb), WS = (_sb = class extends Bg {
  runCustomConverter(r, e, t) {
  }
}, __128 = new WeakMap(), __212 = new WeakMap(), __privateAdd(_sb, __128, m$1(_sb, "CommonValueConverter")), __privateAdd(_sb, __212, j(_sb, "CommonValueConverter")), _sb), Wg = (_tb = class extends Pt {
  constructor(r) {
    super(), this.keywords = new Set(r);
  }
  buildKeywordTokens(r, e, t) {
    let n2 = /* @__PURE__ */ super.buildKeywordTokens(r, e, t);
    return n2.forEach((i) => {
      this.keywords.has(i.name) && i.PATTERN !== void 0 && (i.PATTERN = new RegExp(i.PATTERN.toString() + "(?:(?=%%)|(?!\\S))"));
    }), n2;
  }
}, __129 = new WeakMap(), __213 = new WeakMap(), __privateAdd(_tb, __129, m$1(_tb, "AbstractMermaidTokenBuilder")), __privateAdd(_tb, __213, j(_tb, "AbstractMermaidTokenBuilder")), _tb);
_ub = class extends Wg {
}, __130 = new WeakMap(), __214 = new WeakMap(), __privateAdd(_ub, __130, m$1(_ub, "CommonTokenBuilder")), __privateAdd(_ub, __214, j(_ub, "CommonTokenBuilder")), _ub;
export {
  Bg as B,
  DS as D,
  Ec as E,
  FS as F,
  GS as G,
  Ic as I,
  MS as M,
  Rc as R,
  US as U,
  WS as W,
  Wg as a,
  bS as b,
  j,
  za as z
};
