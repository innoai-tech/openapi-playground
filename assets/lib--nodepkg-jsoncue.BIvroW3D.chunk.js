var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _t, _e, _s, _i, i_fn;
import { P as t, N as e, a as s, D as i, b as r, T as n, I as o, s as h, t as a, L as l, i as c, c as u, f, d as p, e as d, E as g, g as k, h as O } from "./lib--nodepkg-codemirror.C19z96lt.chunk.js";
import { o as m, S as b, E as P } from "./lib--nodepkg-typedef.Bwrbe8Ho.chunk.js";
var x = {};
class S {
  constructor(t2, e2, s2, i2, r2, n2, o2, h2, a2, l2 = 0, c2) {
    this.p = t2, this.stack = e2, this.state = s2, this.reducePos = i2, this.pos = r2, this.score = n2, this.buffer = o2, this.bufferBase = h2, this.curContext = a2, this.lookAhead = l2, this.parent = c2;
  }
  toString() {
    return `[${this.stack.filter((t2, e2) => e2 % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
  }
  static start(t2, e2) {
    let s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, i2 = t2.parser.context;
    return new S(t2, [], e2, s2, s2, 0, [], 0, i2 ? new y(i2, i2.start) : null, 0, null);
  }
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  pushState(t2, e2) {
    this.stack.push(this.state, e2, this.bufferBase + this.buffer.length), this.state = t2;
  }
  reduce(t2) {
    var e2;
    let s2 = t2 >> 19, i2 = 65535 & t2, { parser: r2 } = this.p, n2 = r2.dynamicPrecedence(i2);
    if (n2 && (this.score += n2), 0 == s2) {
      this.pushState(r2.getGoto(this.state, i2, true), this.reducePos), i2 < r2.minRepeatTerm && this.storeNode(i2, this.reducePos, this.reducePos, 4, true), this.reduceContext(i2, this.reducePos);
      return;
    }
    let o2 = this.stack.length - (s2 - 1) * 3 - (262144 & t2 ? 6 : 0), h2 = o2 ? this.stack[o2 - 2] : this.p.ranges[0].from, a2 = this.reducePos - h2;
    a2 >= 2e3 && !(null === (e2 = this.p.parser.nodeSet.types[i2]) || void 0 === e2 ? void 0 : e2.isAnonymous) && (h2 == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = a2) : this.p.lastBigReductionSize < a2 && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = h2, this.p.lastBigReductionSize = a2));
    let l2 = o2 ? this.stack[o2 - 1] : 0, c2 = this.bufferBase + this.buffer.length - l2;
    if (i2 < r2.minRepeatTerm || 131072 & t2) {
      let t3 = r2.stateFlag(this.state, 1) ? this.pos : this.reducePos;
      this.storeNode(i2, h2, t3, c2 + 4, true);
    }
    if (262144 & t2)
      this.state = this.stack[o2];
    else {
      let t3 = this.stack[o2 - 3];
      this.state = r2.getGoto(t3, i2, true);
    }
    for (; this.stack.length > o2; )
      this.stack.pop();
    this.reduceContext(i2, h2);
  }
  storeNode(t2, e2, s2) {
    let i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4, r2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (0 == t2 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let t3 = this, i3 = this.buffer.length;
      if (0 == i3 && t3.parent && (i3 = t3.bufferBase - t3.parent.bufferBase, t3 = t3.parent), i3 > 0 && 0 == t3.buffer[i3 - 4] && t3.buffer[i3 - 1] > -1) {
        if (e2 == s2)
          return;
        if (t3.buffer[i3 - 2] >= e2) {
          t3.buffer[i3 - 2] = s2;
          return;
        }
      }
    }
    if (r2 && this.pos != s2) {
      let r3 = this.buffer.length;
      if (r3 > 0 && 0 != this.buffer[r3 - 4])
        for (; r3 > 0 && this.buffer[r3 - 2] > s2; )
          this.buffer[r3] = this.buffer[r3 - 4], this.buffer[r3 + 1] = this.buffer[r3 - 3], this.buffer[r3 + 2] = this.buffer[r3 - 2], this.buffer[r3 + 3] = this.buffer[r3 - 1], r3 -= 4, i2 > 4 && (i2 -= 4);
      this.buffer[r3] = t2, this.buffer[r3 + 1] = e2, this.buffer[r3 + 2] = s2, this.buffer[r3 + 3] = i2;
    } else
      this.buffer.push(t2, e2, s2, i2);
  }
  shift(t2, e2, s2, i2) {
    if (131072 & t2)
      this.pushState(65535 & t2, this.pos);
    else if ((262144 & t2) == 0) {
      let { parser: r2 } = this.p;
      (i2 > this.pos || e2 <= r2.maxNode) && (this.pos = i2, r2.stateFlag(t2, 1) || (this.reducePos = i2)), this.pushState(t2, s2), this.shiftContext(e2, s2), e2 <= r2.maxNode && this.buffer.push(e2, s2, i2, 4);
    } else
      this.pos = i2, this.shiftContext(e2, s2), e2 <= this.p.parser.maxNode && this.buffer.push(e2, s2, i2, 4);
  }
  apply(t2, e2, s2, i2) {
    65536 & t2 ? this.reduce(t2) : this.shift(t2, e2, s2, i2);
  }
  useNode(t2, e2) {
    let s2 = this.p.reused.length - 1;
    (s2 < 0 || this.p.reused[s2] != t2) && (this.p.reused.push(t2), s2++);
    let i2 = this.pos;
    this.reducePos = this.pos = i2 + t2.length, this.pushState(e2, i2), this.buffer.push(s2, i2, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, t2, this, this.p.stream.reset(this.pos - t2.length)));
  }
  split() {
    let t2 = this, e2 = t2.buffer.length;
    for (; e2 > 0 && t2.buffer[e2 - 2] > t2.reducePos; )
      e2 -= 4;
    let s2 = t2.buffer.slice(e2), i2 = t2.bufferBase + e2;
    for (; t2 && i2 == t2.bufferBase; )
      t2 = t2.parent;
    return new S(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, s2, i2, this.curContext, this.lookAhead, t2);
  }
  recoverByDelete(t2, e2) {
    let s2 = t2 <= this.p.parser.maxNode;
    s2 && this.storeNode(t2, this.pos, e2, 4), this.storeNode(0, this.pos, e2, s2 ? 8 : 4), this.pos = this.reducePos = e2, this.score -= 190;
  }
  canShift(t2) {
    for (let e2 = new w(this); ; ) {
      let s2 = this.p.parser.stateSlot(e2.state, 4) || this.p.parser.hasAction(e2.state, t2);
      if (0 == s2)
        return false;
      if ((65536 & s2) == 0)
        return true;
      e2.reduce(s2);
    }
  }
  recoverByInsert(t2) {
    if (this.stack.length >= 300)
      return [];
    let e2 = this.p.parser.nextStates(this.state);
    if (e2.length > 8 || this.stack.length >= 120) {
      let s3 = [];
      for (let i2 = 0, r2; i2 < e2.length; i2 += 2)
        (r2 = e2[i2 + 1]) != this.state && this.p.parser.hasAction(r2, t2) && s3.push(e2[i2], r2);
      if (this.stack.length < 120)
        for (let t3 = 0; s3.length < 8 && t3 < e2.length; t3 += 2) {
          let i2 = e2[t3 + 1];
          s3.some((t4, e3) => 1 & e3 && t4 == i2) || s3.push(e2[t3], i2);
        }
      e2 = s3;
    }
    let s2 = [];
    for (let t3 = 0; t3 < e2.length && s2.length < 4; t3 += 2) {
      let i2 = e2[t3 + 1];
      if (i2 == this.state)
        continue;
      let r2 = this.split();
      r2.pushState(i2, this.pos), r2.storeNode(0, r2.pos, r2.pos, 4, true), r2.shiftContext(e2[t3], this.pos), r2.reducePos = this.pos, r2.score -= 200, s2.push(r2);
    }
    return s2;
  }
  forceReduce() {
    let { parser: t2 } = this.p, e2 = t2.stateSlot(this.state, 5);
    if ((65536 & e2) == 0)
      return false;
    if (!t2.validAction(this.state, e2)) {
      let s2 = e2 >> 19, i2 = 65535 & e2, r2 = this.stack.length - 3 * s2;
      if (r2 < 0 || 0 > t2.getGoto(this.stack[r2], i2, false)) {
        let t3 = this.findForcedReduction();
        if (null == t3)
          return false;
        e2 = t3;
      }
      this.storeNode(0, this.pos, this.pos, 4, true), this.score -= 100;
    }
    return this.reducePos = this.pos, this.reduce(e2), true;
  }
  findForcedReduction() {
    let { parser: t2 } = this.p, e2 = [], s2 = (i2, r2) => {
      if (!e2.includes(i2))
        return e2.push(i2), t2.allActions(i2, (e3) => {
          if (393216 & e3)
            ;
          else if (65536 & e3) {
            let s3 = (e3 >> 19) - r2;
            if (s3 > 1) {
              let i3 = 65535 & e3, r3 = this.stack.length - 3 * s3;
              if (r3 >= 0 && t2.getGoto(this.stack[r3], i3, false) >= 0)
                return s3 << 19 | 65536 | i3;
            }
          } else {
            let t3 = s2(e3, r2 + 1);
            if (null != t3)
              return t3;
          }
        });
    };
    return s2(this.state, 0);
  }
  forceAll() {
    for (; !this.p.parser.stateFlag(this.state, 2); )
      if (!this.forceReduce()) {
        this.storeNode(0, this.pos, this.pos, 4, true);
        break;
      }
    return this;
  }
  get deadEnd() {
    if (3 != this.stack.length)
      return false;
    let { parser: t2 } = this.p;
    return 65535 == t2.data[t2.stateSlot(this.state, 1)] && !t2.stateSlot(this.state, 4);
  }
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, true), this.state = this.stack[0], this.stack.length = 0;
  }
  sameState(t2) {
    if (this.state != t2.state || this.stack.length != t2.stack.length)
      return false;
    for (let e2 = 0; e2 < this.stack.length; e2 += 3)
      if (this.stack[e2] != t2.stack[e2])
        return false;
    return true;
  }
  get parser() {
    return this.p.parser;
  }
  dialectEnabled(t2) {
    return this.p.parser.dialect.flags[t2];
  }
  shiftContext(t2, e2) {
    this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, t2, this, this.p.stream.reset(e2)));
  }
  reduceContext(t2, e2) {
    this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, t2, this, this.p.stream.reset(e2)));
  }
  emitContext() {
    let t2 = this.buffer.length - 1;
    (t2 < 0 || -3 != this.buffer[t2]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
  }
  emitLookAhead() {
    let t2 = this.buffer.length - 1;
    (t2 < 0 || -4 != this.buffer[t2]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
  }
  updateContext(t2) {
    if (t2 != this.curContext.context) {
      let e2 = new y(this.curContext.tracker, t2);
      e2.hash != this.curContext.hash && this.emitContext(), this.curContext = e2;
    }
  }
  setLookAhead(t2) {
    t2 > this.lookAhead && (this.emitLookAhead(), this.lookAhead = t2);
  }
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
  }
}
class y {
  constructor(t2, e2) {
    this.tracker = t2, this.context = e2, this.hash = t2.strict ? t2.hash(e2) : 0;
  }
}
class w {
  constructor(t2) {
    this.start = t2, this.state = t2.state, this.stack = t2.stack, this.base = this.stack.length;
  }
  reduce(t2) {
    let e2 = t2 >> 19;
    0 == e2 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (e2 - 1) * 3;
    let s2 = this.start.p.parser.getGoto(this.stack[this.base - 3], 65535 & t2, true);
    this.state = s2;
  }
}
class v {
  constructor(t2, e2, s2) {
    this.stack = t2, this.pos = e2, this.index = s2, this.buffer = t2.buffer, 0 == this.index && this.maybeNext();
  }
  static create(t2) {
    let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t2.bufferBase + t2.buffer.length;
    return new v(t2, e2, e2 - t2.bufferBase);
  }
  maybeNext() {
    let t2 = this.stack.parent;
    null != t2 && (this.index = this.stack.bufferBase - t2.bufferBase, this.stack = t2, this.buffer = t2.buffer);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    this.index -= 4, this.pos -= 4, 0 == this.index && this.maybeNext();
  }
  fork() {
    return new v(this.stack, this.pos, this.index);
  }
}
function Q(t2) {
  let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
  if ("string" != typeof t2)
    return t2;
  let s2 = null;
  for (let i2 = 0, r2 = 0; i2 < t2.length; ) {
    let n2 = 0;
    for (; ; ) {
      let e3 = t2.charCodeAt(i2++), s3 = false;
      if (126 == e3) {
        n2 = 65535;
        break;
      }
      e3 >= 92 && e3--, e3 >= 34 && e3--;
      let r3 = e3 - 32;
      if (r3 >= 46 && (r3 -= 46, s3 = true), n2 += r3, s3)
        break;
      n2 *= 46;
    }
    s2 ? s2[r2++] = n2 : s2 = new e2(n2);
  }
  return s2;
}
class R {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
}
let X = new R();
class T {
  constructor(t2, e2) {
    this.input = t2, this.ranges = e2, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = X, this.rangeIndex = 0, this.pos = this.chunkPos = e2[0].from, this.range = e2[0], this.end = e2[e2.length - 1].to, this.readNext();
  }
  resolveOffset(t2, e2) {
    let s2 = this.range, i2 = this.rangeIndex, r2 = this.pos + t2;
    for (; r2 < s2.from; ) {
      if (!i2)
        return null;
      let t3 = this.ranges[--i2];
      r2 -= s2.from - t3.to, s2 = t3;
    }
    for (; e2 < 0 ? r2 > s2.to : r2 >= s2.to; ) {
      if (i2 == this.ranges.length - 1)
        return null;
      let t3 = this.ranges[++i2];
      r2 += t3.from - s2.to, s2 = t3;
    }
    return r2;
  }
  clipPos(t2) {
    if (t2 >= this.range.from && t2 < this.range.to)
      return t2;
    for (let e2 of this.ranges)
      if (e2.to > t2)
        return Math.max(t2, e2.from);
    return this.end;
  }
  peek(t2) {
    let e2 = this.chunkOff + t2, s2, i2;
    if (e2 >= 0 && e2 < this.chunk.length)
      s2 = this.pos + t2, i2 = this.chunk.charCodeAt(e2);
    else {
      let e3 = this.resolveOffset(t2, 1);
      if (null == e3)
        return -1;
      if ((s2 = e3) >= this.chunk2Pos && s2 < this.chunk2Pos + this.chunk2.length)
        i2 = this.chunk2.charCodeAt(s2 - this.chunk2Pos);
      else {
        let t3 = this.rangeIndex, e4 = this.range;
        for (; e4.to <= s2; )
          e4 = this.ranges[++t3];
        this.chunk2 = this.input.chunk(this.chunk2Pos = s2), s2 + this.chunk2.length > e4.to && (this.chunk2 = this.chunk2.slice(0, e4.to - s2)), i2 = this.chunk2.charCodeAt(0);
      }
    }
    return s2 >= this.token.lookAhead && (this.token.lookAhead = s2 + 1), i2;
  }
  acceptToken(t2) {
    let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, s2 = e2 ? this.resolveOffset(e2, -1) : this.pos;
    if (null == s2 || s2 < this.token.start)
      throw RangeError("Token end out of bounds");
    this.token.value = t2, this.token.end = s2;
  }
  acceptTokenTo(t2, e2) {
    this.token.value = t2, this.token.end = e2;
  }
  getChunk() {
    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
      let { chunk: t2, chunkPos: e2 } = this;
      this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = t2, this.chunk2Pos = e2, this.chunkOff = this.pos - this.chunkPos;
    } else {
      this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
      let t2 = this.input.chunk(this.pos), e2 = this.pos + t2.length;
      this.chunk = e2 > this.range.to ? t2.slice(0, this.range.to - this.pos) : t2, this.chunkPos = this.pos, this.chunkOff = 0;
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
  }
  advance() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    for (this.chunkOff += t2; this.pos + t2 >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1)
        return this.setDone();
      t2 -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
    }
    return this.pos += t2, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
  }
  setDone() {
    return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1;
  }
  reset(t2, e2) {
    if (e2 ? (this.token = e2, e2.start = t2, e2.lookAhead = t2 + 1, e2.value = e2.extended = -1) : this.token = X, this.pos != t2) {
      if (this.pos = t2, t2 == this.end)
        return this.setDone(), this;
      for (; t2 < this.range.from; )
        this.range = this.ranges[--this.rangeIndex];
      for (; t2 >= this.range.to; )
        this.range = this.ranges[++this.rangeIndex];
      t2 >= this.chunkPos && t2 < this.chunkPos + this.chunk.length ? this.chunkOff = t2 - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext();
    }
    return this;
  }
  read(t2, e2) {
    if (t2 >= this.chunkPos && e2 <= this.chunkPos + this.chunk.length)
      return this.chunk.slice(t2 - this.chunkPos, e2 - this.chunkPos);
    if (t2 >= this.chunk2Pos && e2 <= this.chunk2Pos + this.chunk2.length)
      return this.chunk2.slice(t2 - this.chunk2Pos, e2 - this.chunk2Pos);
    if (t2 >= this.range.from && e2 <= this.range.to)
      return this.input.read(t2, e2);
    let s2 = "";
    for (let i2 of this.ranges) {
      if (i2.from >= e2)
        break;
      i2.to > t2 && (s2 += this.input.read(Math.max(i2.from, t2), Math.min(i2.to, e2)));
    }
    return s2;
  }
}
class C {
  constructor(t2, e2) {
    this.data = t2, this.id = e2;
  }
  token(t2, e2) {
    let { parser: s2 } = e2.p;
    !function(t3, e3, s3, i2, r2, n2) {
      let o2 = 0, h2 = 1 << i2, { dialect: a2 } = s3.p.parser;
      t:
        for (; (h2 & t3[o2]) != 0; ) {
          let s4 = t3[o2 + 1];
          for (let i4 = o2 + 3; i4 < s4; i4 += 2)
            if ((t3[i4 + 1] & h2) > 0) {
              let s5 = t3[i4];
              if (a2.allows(s5) && (-1 == e3.token.value || e3.token.value == s5 || function(t4, e4, s6, i5) {
                let r3 = A(s6, i5, e4);
                return r3 < 0 || A(s6, i5, t4) < r3;
              }(s5, e3.token.value, r2, n2))) {
                e3.acceptToken(s5);
                break;
              }
            }
          let i3 = e3.next, l2 = 0, c2 = t3[o2 + 2];
          if (e3.next < 0 && c2 > l2 && 65535 == t3[s4 + 3 * c2 - 3]) {
            o2 = t3[s4 + 3 * c2 - 1];
            continue;
          }
          for (; l2 < c2; ) {
            let r3 = l2 + c2 >> 1, n3 = s4 + r3 + (r3 << 1), h3 = t3[n3], a3 = t3[n3 + 1] || 65536;
            if (i3 < h3)
              c2 = r3;
            else if (i3 >= a3)
              l2 = r3 + 1;
            else {
              o2 = t3[n3 + 2], e3.advance();
              continue t;
            }
          }
          break;
        }
    }(this.data, t2, e2, this.id, s2.data, s2.tokenPrecTable);
  }
}
function A(t2, e2, s2) {
  for (let i2 = e2, r2; 65535 != (r2 = t2[i2]); i2++)
    if (r2 == s2)
      return i2 - e2;
  return -1;
}
C.prototype.contextual = C.prototype.fallback = C.prototype.extend = false, C.prototype.fallback = C.prototype.extend = false;
let N = "undefined" != typeof process && x && /\bparse\b/.test(x.LOG), j = null;
function q(t2, e2, s2) {
  let i2 = t2.cursor(o.IncludeAnonymous);
  for (i2.moveTo(e2); ; )
    if (!(s2 < 0 ? i2.childBefore(e2) : i2.childAfter(e2)))
      for (; ; ) {
        if ((s2 < 0 ? i2.to < e2 : i2.from > e2) && !i2.type.isError)
          return s2 < 0 ? Math.max(0, Math.min(i2.to - 1, e2 - 25)) : Math.min(t2.length, Math.max(i2.from + 1, e2 + 25));
        if (s2 < 0 ? i2.prevSibling() : i2.nextSibling())
          break;
        if (!i2.parent())
          return s2 < 0 ? 0 : t2.length;
      }
}
class $ {
  constructor(t2, e2) {
    this.fragments = t2, this.nodeSet = e2, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let t2 = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (t2) {
      for (this.safeFrom = t2.openStart ? q(t2.tree, t2.from + t2.offset, 1) - t2.offset : t2.from, this.safeTo = t2.openEnd ? q(t2.tree, t2.to + t2.offset, -1) - t2.offset : t2.to; this.trees.length; )
        this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(t2.tree), this.start.push(-t2.offset), this.index.push(0), this.nextStart = this.safeFrom;
    } else
      this.nextStart = 1e9;
  }
  nodeAt(t2) {
    if (t2 < this.nextStart)
      return null;
    for (; this.fragment && this.safeTo <= t2; )
      this.nextFragment();
    if (!this.fragment)
      return null;
    for (; ; ) {
      let e2 = this.trees.length - 1;
      if (e2 < 0)
        return this.nextFragment(), null;
      let s2 = this.trees[e2], i2 = this.index[e2];
      if (i2 == s2.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let o2 = s2.children[i2], h2 = this.start[e2] + s2.positions[i2];
      if (h2 > t2)
        return this.nextStart = h2, null;
      if (o2 instanceof n) {
        if (h2 == t2) {
          if (h2 < this.safeFrom)
            return null;
          let t3 = h2 + o2.length;
          if (t3 <= this.safeTo) {
            let e3 = o2.prop(r.lookAhead);
            if (!e3 || t3 + e3 < this.fragment.to)
              return o2;
          }
        }
        this.index[e2]++, h2 + o2.length >= Math.max(this.safeFrom, t2) && (this.trees.push(o2), this.start.push(h2), this.index.push(0));
      } else
        this.index[e2]++, this.nextStart = h2 + o2.length;
    }
  }
}
class Z {
  constructor(t2, e2) {
    this.stream = e2, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = t2.tokenizers.map((t3) => new R());
  }
  getActions(t2) {
    let e2 = 0, s2 = null, { parser: i2 } = t2.p, { tokenizers: r2 } = i2, n2 = i2.stateSlot(t2.state, 3), o2 = t2.curContext ? t2.curContext.hash : 0, h2 = 0;
    for (let i3 = 0; i3 < r2.length; i3++) {
      if ((1 << i3 & n2) == 0)
        continue;
      let a2 = r2[i3], l2 = this.tokens[i3];
      if ((!s2 || a2.fallback) && ((a2.contextual || l2.start != t2.pos || l2.mask != n2 || l2.context != o2) && (this.updateCachedToken(l2, a2, t2), l2.mask = n2, l2.context = o2), l2.lookAhead > l2.end + 25 && (h2 = Math.max(l2.lookAhead, h2)), 0 != l2.value)) {
        let i4 = e2;
        if (l2.extended > -1 && (e2 = this.addActions(t2, l2.extended, l2.end, e2)), e2 = this.addActions(t2, l2.value, l2.end, e2), !a2.extend && (s2 = l2, e2 > i4))
          break;
      }
    }
    for (; this.actions.length > e2; )
      this.actions.pop();
    return h2 && t2.setLookAhead(h2), s2 || t2.pos != this.stream.end || ((s2 = new R()).value = t2.p.parser.eofTerm, s2.start = s2.end = t2.pos, e2 = this.addActions(t2, s2.value, s2.end, e2)), this.mainToken = s2, this.actions;
  }
  getMainToken(t2) {
    if (this.mainToken)
      return this.mainToken;
    let e2 = new R(), { pos: s2, p: i2 } = t2;
    return e2.start = s2, e2.end = Math.min(s2 + 1, i2.stream.end), e2.value = s2 == i2.stream.end ? i2.parser.eofTerm : 0, e2;
  }
  updateCachedToken(t2, e2, s2) {
    let i2 = this.stream.clipPos(s2.pos);
    if (e2.token(this.stream.reset(i2, t2), s2), t2.value > -1) {
      let { parser: e3 } = s2.p;
      for (let i3 = 0; i3 < e3.specialized.length; i3++)
        if (e3.specialized[i3] == t2.value) {
          let r2 = e3.specializers[i3](this.stream.read(t2.start, t2.end), s2);
          if (r2 >= 0 && s2.p.parser.dialect.allows(r2 >> 1)) {
            (1 & r2) == 0 ? t2.value = r2 >> 1 : t2.extended = r2 >> 1;
            break;
          }
        }
    } else
      t2.value = 0, t2.end = this.stream.clipPos(i2 + 1);
  }
  putAction(t2, e2, s2, i2) {
    for (let e3 = 0; e3 < i2; e3 += 3)
      if (this.actions[e3] == t2)
        return i2;
    return this.actions[i2++] = t2, this.actions[i2++] = e2, this.actions[i2++] = s2, i2;
  }
  addActions(t2, e2, s2, i2) {
    let { state: r2 } = t2, { parser: n2 } = t2.p, { data: o2 } = n2;
    for (let t3 = 0; t3 < 2; t3++)
      for (let h2 = n2.stateSlot(r2, t3 ? 2 : 1); ; h2 += 3) {
        if (65535 == o2[h2]) {
          if (1 == o2[h2 + 1])
            h2 = I(o2, h2 + 2);
          else {
            0 == i2 && 2 == o2[h2 + 1] && (i2 = this.putAction(I(o2, h2 + 2), e2, s2, i2));
            break;
          }
        }
        o2[h2] == e2 && (i2 = this.putAction(I(o2, h2 + 1), e2, s2, i2));
      }
    return i2;
  }
}
class Y {
  constructor(t2, e2, s2, i2) {
    this.parser = t2, this.input = e2, this.ranges = i2, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new T(e2, i2), this.tokens = new Z(t2, this.stream), this.topTerm = t2.top[1];
    let { from: r2 } = i2[0];
    this.stacks = [S.start(this, t2.top[0], r2)], this.fragments = s2.length && this.stream.end - r2 > 4 * t2.bufferLength ? new $(s2, t2.nodeSet) : null;
  }
  get parsedPos() {
    return this.minStackPos;
  }
  advance() {
    let t2, e2, s2 = this.stacks, i2 = this.minStackPos, r2 = this.stacks = [];
    if (this.bigReductionCount > 300 && 1 == s2.length) {
      let [t3] = s2;
      for (; t3.forceReduce() && t3.stack.length && t3.stack[t3.stack.length - 2] >= this.lastBigReductionStart; )
        ;
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let n2 = 0; n2 < s2.length; n2++) {
      let o2 = s2[n2];
      for (; ; ) {
        if (this.tokens.mainToken = null, o2.pos > i2)
          r2.push(o2);
        else {
          if (this.advanceStack(o2, r2, s2))
            continue;
          t2 || (t2 = [], e2 = []), t2.push(o2);
          let i3 = this.tokens.getMainToken(o2);
          e2.push(i3.value, i3.end);
        }
        break;
      }
    }
    if (!r2.length) {
      let e3 = t2 && function(t3) {
        let e4 = null;
        for (let s3 of t3) {
          let t4 = s3.p.stoppedAt;
          (s3.pos == s3.p.stream.end || null != t4 && s3.pos > t4) && s3.p.parser.stateFlag(s3.state, 2) && (!e4 || e4.score < s3.score) && (e4 = s3);
        }
        return e4;
      }(t2);
      if (e3)
        return N && console.log("Finish with " + this.stackID(e3)), this.stackToTree(e3);
      if (this.parser.strict)
        throw N && t2 && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), SyntaxError("No parse at " + i2);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && t2) {
      let s3 = null != this.stoppedAt && t2[0].pos > this.stoppedAt ? t2[0] : this.runRecovery(t2, e2, r2);
      if (s3)
        return N && console.log("Force-finish " + this.stackID(s3)), this.stackToTree(s3.forceAll());
    }
    if (this.recovering) {
      let t3 = 1 == this.recovering ? 1 : 3 * this.recovering;
      if (r2.length > t3)
        for (r2.sort((t4, e3) => e3.score - t4.score); r2.length > t3; )
          r2.pop();
      r2.some((t4) => t4.reducePos > i2) && this.recovering--;
    } else if (r2.length > 1) {
      e:
        for (let t3 = 0; t3 < r2.length - 1; t3++) {
          let e3 = r2[t3];
          for (let s3 = t3 + 1; s3 < r2.length; s3++) {
            let i3 = r2[s3];
            if (e3.sameState(i3) || e3.buffer.length > 500 && i3.buffer.length > 500) {
              if ((e3.score - i3.score || e3.buffer.length - i3.buffer.length) > 0)
                r2.splice(s3--, 1);
              else {
                r2.splice(t3--, 1);
                continue e;
              }
            }
          }
        }
      r2.length > 12 && r2.splice(12, r2.length - 12);
    }
    this.minStackPos = r2[0].pos;
    for (let t3 = 1; t3 < r2.length; t3++)
      r2[t3].pos < this.minStackPos && (this.minStackPos = r2[t3].pos);
    return null;
  }
  stopAt(t2) {
    if (null != this.stoppedAt && this.stoppedAt < t2)
      throw RangeError("Can't move stoppedAt forward");
    this.stoppedAt = t2;
  }
  advanceStack(t2, e2, s2) {
    let i2 = t2.pos, { parser: o2 } = this, h2 = N ? this.stackID(t2) + " -> " : "";
    if (null != this.stoppedAt && i2 > this.stoppedAt)
      return t2.forceReduce() ? t2 : null;
    if (this.fragments) {
      let e3 = t2.curContext && t2.curContext.tracker.strict, s3 = e3 ? t2.curContext.hash : 0;
      for (let a3 = this.fragments.nodeAt(i2); a3; ) {
        let i3 = this.parser.nodeSet.types[a3.type.id] == a3.type ? o2.getGoto(t2.state, a3.type.id) : -1;
        if (i3 > -1 && a3.length && (!e3 || (a3.prop(r.contextHash) || 0) == s3))
          return t2.useNode(a3, i3), N && console.log(h2 + this.stackID(t2) + ` (via reuse of ${o2.getName(a3.type.id)})`), true;
        if (!(a3 instanceof n) || 0 == a3.children.length || a3.positions[0] > 0)
          break;
        let l3 = a3.children[0];
        if (l3 instanceof n && 0 == a3.positions[0])
          a3 = l3;
        else
          break;
      }
    }
    let a2 = o2.stateSlot(t2.state, 4);
    if (a2 > 0)
      return t2.reduce(a2), N && console.log(h2 + this.stackID(t2) + ` (via always-reduce ${o2.getName(65535 & a2)})`), true;
    if (t2.stack.length >= 8400)
      for (; t2.stack.length > 6e3 && t2.forceReduce(); )
        ;
    let l2 = this.tokens.getActions(t2);
    for (let r2 = 0; r2 < l2.length; ) {
      let n2 = l2[r2++], a3 = l2[r2++], c2 = l2[r2++], u2 = r2 == l2.length || !s2, f2 = u2 ? t2 : t2.split(), p2 = this.tokens.mainToken;
      if (f2.apply(n2, a3, p2 ? p2.start : f2.pos, c2), N && console.log(h2 + this.stackID(f2) + ` (via ${(65536 & n2) == 0 ? "shift" : `reduce of ${o2.getName(65535 & n2)}`} for ${o2.getName(a3)} @ ${i2}${f2 == t2 ? "" : ", split"})`), u2)
        return true;
      f2.pos > i2 ? e2.push(f2) : s2.push(f2);
    }
    return false;
  }
  advanceFully(t2, e2) {
    let s2 = t2.pos;
    for (; ; ) {
      if (!this.advanceStack(t2, null, null))
        return false;
      if (t2.pos > s2)
        return D(t2, e2), true;
    }
  }
  runRecovery(t2, e2, s2) {
    let i2 = null, r2 = false;
    for (let n2 = 0; n2 < t2.length; n2++) {
      let o2 = t2[n2], h2 = e2[n2 << 1], a2 = e2[(n2 << 1) + 1], l2 = N ? this.stackID(o2) + " -> " : "";
      if (o2.deadEnd && (r2 || (r2 = true, o2.restart(), N && console.log(l2 + this.stackID(o2) + " (restarted)"), this.advanceFully(o2, s2))))
        continue;
      let c2 = o2.split(), u2 = l2;
      for (let t3 = 0; c2.forceReduce() && t3 < 10 && (N && console.log(u2 + this.stackID(c2) + " (via force-reduce)"), !this.advanceFully(c2, s2)); t3++)
        N && (u2 = this.stackID(c2) + " -> ");
      for (let t3 of o2.recoverByInsert(h2))
        N && console.log(l2 + this.stackID(t3) + " (via recover-insert)"), this.advanceFully(t3, s2);
      this.stream.end > o2.pos ? (a2 == o2.pos && (a2++, h2 = 0), o2.recoverByDelete(h2, a2), N && console.log(l2 + this.stackID(o2) + ` (via recover-delete ${this.parser.getName(h2)})`), D(o2, s2)) : (!i2 || i2.score < o2.score) && (i2 = o2);
    }
    return i2;
  }
  stackToTree(t2) {
    return t2.close(), n.build({ buffer: v.create(t2), nodeSet: this.parser.nodeSet, topID: this.topTerm, maxBufferLength: this.parser.bufferLength, reused: this.reused, start: this.ranges[0].from, length: t2.pos - this.ranges[0].from, minRepeatType: this.parser.minRepeatTerm });
  }
  stackID(t2) {
    let e2 = (j || (j = /* @__PURE__ */ new WeakMap())).get(t2);
    return e2 || j.set(t2, e2 = String.fromCodePoint(this.nextStackID++)), e2 + t2;
  }
}
function D(t2, e2) {
  for (let s2 = 0; s2 < e2.length; s2++) {
    let i2 = e2[s2];
    if (i2.pos == t2.pos && i2.sameState(t2)) {
      e2[s2].score < t2.score && (e2[s2] = t2);
      return;
    }
  }
  e2.push(t2);
}
class z {
  constructor(t2, e2, s2) {
    this.source = t2, this.flags = e2, this.disabled = s2;
  }
  allows(t2) {
    return !this.disabled || 0 == this.disabled[t2];
  }
}
class B extends t {
  constructor(t2) {
    if (super(), this.wrappers = [], 14 != t2.version)
      throw RangeError(`Parser version (${t2.version}) doesn't match runtime version (14)`);
    let n2 = t2.nodeNames.split(" ");
    this.minRepeatTerm = n2.length;
    for (let e2 = 0; e2 < t2.repeatNodeCount; e2++)
      n2.push("");
    let o2 = Object.keys(t2.topRules).map((e2) => t2.topRules[e2][1]), h2 = [];
    for (let t3 = 0; t3 < n2.length; t3++)
      h2.push([]);
    function a2(t3, e2, s2) {
      h2[t3].push([e2, e2.deserialize(String(s2))]);
    }
    if (t2.nodeProps)
      for (let e2 of t2.nodeProps) {
        let t3 = e2[0];
        "string" == typeof t3 && (t3 = r[t3]);
        for (let s2 = 1; s2 < e2.length; ) {
          let i2 = e2[s2++];
          if (i2 >= 0)
            a2(i2, t3, e2[s2++]);
          else {
            let r2 = e2[s2 + -i2];
            for (let n3 = -i2; n3 > 0; n3--)
              a2(e2[s2++], t3, r2);
            s2++;
          }
        }
      }
    this.nodeSet = new e(n2.map((e2, i2) => s.define({ name: i2 >= this.minRepeatTerm ? void 0 : e2, id: i2, props: h2[i2], top: o2.indexOf(i2) > -1, error: 0 == i2, skipped: t2.skippedNodes && t2.skippedNodes.indexOf(i2) > -1 }))), t2.propSources && (this.nodeSet = this.nodeSet.extend(...t2.propSources)), this.strict = false, this.bufferLength = i;
    let l2 = Q(t2.tokenData);
    this.context = t2.context, this.specializerSpecs = t2.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let t3 = 0; t3 < this.specializerSpecs.length; t3++)
      this.specialized[t3] = this.specializerSpecs[t3].term;
    this.specializers = this.specializerSpecs.map(U), this.states = Q(t2.states, Uint32Array), this.data = Q(t2.stateData), this.goto = Q(t2.goto), this.maxTerm = t2.maxTerm, this.tokenizers = t2.tokenizers.map((t3) => "number" == typeof t3 ? new C(l2, t3) : t3), this.topRules = t2.topRules, this.dialects = t2.dialects || {}, this.dynamicPrecedences = t2.dynamicPrecedences || null, this.tokenPrecTable = t2.tokenPrec, this.termNames = t2.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(t2, e2, s2) {
    let i2 = new Y(this, t2, e2, s2);
    for (let r2 of this.wrappers)
      i2 = r2(i2, t2, e2, s2);
    return i2;
  }
  getGoto(t2, e2) {
    let s2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i2 = this.goto;
    if (e2 >= i2[0])
      return -1;
    for (let r2 = i2[e2 + 1]; ; ) {
      let e3 = i2[r2++], n2 = 1 & e3, o2 = i2[r2++];
      if (n2 && s2)
        return o2;
      for (let s3 = r2 + (e3 >> 1); r2 < s3; r2++)
        if (i2[r2] == t2)
          return o2;
      if (n2)
        return -1;
    }
  }
  hasAction(t2, e2) {
    let s2 = this.data;
    for (let i2 = 0; i2 < 2; i2++)
      for (let r2 = this.stateSlot(t2, i2 ? 2 : 1), n2; ; r2 += 3) {
        if (65535 == (n2 = s2[r2])) {
          if (1 == s2[r2 + 1])
            n2 = s2[r2 = I(s2, r2 + 2)];
          else if (2 == s2[r2 + 1])
            return I(s2, r2 + 2);
          else
            break;
        }
        if (n2 == e2 || 0 == n2)
          return I(s2, r2 + 1);
      }
    return 0;
  }
  stateSlot(t2, e2) {
    return this.states[6 * t2 + e2];
  }
  stateFlag(t2, e2) {
    return (this.stateSlot(t2, 0) & e2) > 0;
  }
  validAction(t2, e2) {
    return !!this.allActions(t2, (t3) => t3 == e2 || null);
  }
  allActions(t2, e2) {
    let s2 = this.stateSlot(t2, 4), i2 = s2 ? e2(s2) : void 0;
    for (let s3 = this.stateSlot(t2, 1); null == i2; s3 += 3) {
      if (65535 == this.data[s3]) {
        if (1 == this.data[s3 + 1])
          s3 = I(this.data, s3 + 2);
        else
          break;
      }
      i2 = e2(I(this.data, s3 + 1));
    }
    return i2;
  }
  nextStates(t2) {
    let e2 = [];
    for (let s2 = this.stateSlot(t2, 1); ; s2 += 3) {
      if (65535 == this.data[s2]) {
        if (1 == this.data[s2 + 1])
          s2 = I(this.data, s2 + 2);
        else
          break;
      }
      if ((1 & this.data[s2 + 2]) == 0) {
        let t3 = this.data[s2 + 1];
        e2.some((e3, s3) => 1 & s3 && e3 == t3) || e2.push(this.data[s2], t3);
      }
    }
    return e2;
  }
  configure(t2) {
    let e2 = Object.assign(Object.create(B.prototype), this);
    if (t2.props && (e2.nodeSet = this.nodeSet.extend(...t2.props)), t2.top) {
      let s2 = this.topRules[t2.top];
      if (!s2)
        throw RangeError(`Invalid top rule name ${t2.top}`);
      e2.top = s2;
    }
    return t2.tokenizers && (e2.tokenizers = this.tokenizers.map((e3) => {
      let s2 = t2.tokenizers.find((t3) => t3.from == e3);
      return s2 ? s2.to : e3;
    })), t2.specializers && (e2.specializers = this.specializers.slice(), e2.specializerSpecs = this.specializerSpecs.map((s2, i2) => {
      let r2 = t2.specializers.find((t3) => t3.from == s2.external);
      if (!r2)
        return s2;
      let n2 = Object.assign(Object.assign({}, s2), { external: r2.to });
      return e2.specializers[i2] = U(n2), n2;
    })), t2.contextTracker && (e2.context = t2.contextTracker), t2.dialect && (e2.dialect = this.parseDialect(t2.dialect)), null != t2.strict && (e2.strict = t2.strict), t2.wrap && (e2.wrappers = e2.wrappers.concat(t2.wrap)), null != t2.bufferLength && (e2.bufferLength = t2.bufferLength), e2;
  }
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  getName(t2) {
    return this.termNames ? this.termNames[t2] : String(t2 <= this.maxNode && this.nodeSet.types[t2].name || t2);
  }
  get eofTerm() {
    return this.maxNode + 1;
  }
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  dynamicPrecedence(t2) {
    let e2 = this.dynamicPrecedences;
    return null == e2 ? 0 : e2[t2] || 0;
  }
  parseDialect(t2) {
    let e2 = Object.keys(this.dialects), s2 = e2.map(() => false);
    if (t2)
      for (let i3 of t2.split(" ")) {
        let t3 = e2.indexOf(i3);
        t3 >= 0 && (s2[t3] = true);
      }
    let i2 = null;
    for (let t3 = 0; t3 < e2.length; t3++)
      if (!s2[t3])
        for (let s3 = this.dialects[e2[t3]], r2; 65535 != (r2 = this.data[s3++]); )
          (i2 || (i2 = new Uint8Array(this.maxTerm + 1)))[r2] = 1;
    return new z(t2, s2, i2);
  }
  static deserialize(t2) {
    return new B(t2);
  }
}
function I(t2, e2) {
  return t2[e2] | t2[e2 + 1] << 16;
}
function U(t2) {
  if (t2.external) {
    let e2 = t2.extend ? 1 : 0;
    return (s2, i2) => t2.external(s2, i2) << 1 | e2;
  }
  return t2.get;
}
let V = h({ PropertyName: a.propertyName, String: a.string, Bytes: a.string, Number: a.number, "True False": a.bool, ",": a.separator, ":": a.separator, "[ ]": a.squareBracket, "{ }": a.brace }), E = B.deserialize({ version: 14, states: "&`Q}QPOOOOQO'#C`'#C`O!UQPO'#C`O!^QPO'#CcO#ZQPO'#CfOOQO'#Cg'#CgOOQO'#Ch'#ChOOQO'#Ci'#CiOOQO'#Cj'#CjOOQO'#Ck'#CkOOQO'#Cl'#ClOOQO'#Cw'#CwO#bQPO'#C_OOQO'#Cm'#CmQ!aQPOOQOQPOOOOQO,58},58}O#gQPO,58}OOQO,59Q,59QO#rQPO,59QO#zQPO,58yOOQO-E6k-E6kOOQO1G.i1G.iO$RQPO1G.lO$YQPO1G.lOOQO1G.l1G.lO$bQQO'#C`O$vQPO'#CnO#zQPO1G.eO${QQO1G.eOOQO,59Z,59ZOOQO7+$W7+$WO%^QPO7+$WOOQO-E6m-E6mOOQO,59Y,59YOOQO-E6l-E6lO%eQQO7+$POOQO7+$P7+$POOQO<<Gr<<GrP!iQPO'#CoOOQO<<Gk<<Gk", stateData: "&S~OfOSgOSPOS~OUROXSOhPOmTOnUOoVOpWOqWOrXOsYO~OiQO~P]Od]XjSX~OT`OhPOiPO~OUROXSOiVOmTOnUOoVOpWOqWOrXOsYO~OWbO~P!iOjdO~OTfOhPOiPO~OWiOlgO~OijO~P]OWoO~P!iOWoOlpO~Od]Xh]Xi]XjSXt]XT]X~OjrO~OtuOdRihRiiRiTRi~OWvO~P!iOtxOdRqhRqiRqTRq~Otgqpoimrshr~", goto: "#PlPPPmsPP}PP}}}}}}}!W!b!hPPPPPPP!nX]OR^aW[OR^aTkdl_ZOSdglpwQ^OQaRTe^aQldRslQhcRqhQ_OQcSQmdUngpwRtl", nodeNames: "⚠ Comment Document Property PropertyName } { Object ] [ Array Null Number String Bytes True False", maxTerm: 36, nodeProps: [["isolate", 1, ""], ["openedBy", 5, "{", 8, "["], ["closedBy", 6, "}", 9, "]"]], propSources: [V], skippedNodes: [0, 1], repeatNodeCount: 3, tokenData: "C|~RiXY!pYZ!{]^!{pq!prs#Stu)`wx)t|}9w!O!P:O!P!Q;[!Q![;|![!]<b!c!})`!}#O<g#P#Q<l#R#S)`#T#Y)`#Y#Z<q#Z#b)`#b#c?b#c#h)`#h#iAj#i#o)`#o#pCr#q#rCw~!uQf~XY!ppq!p~#SOtQg~~#VWpq#oqr#ors&Xs#O#o#O#P$a#P;'S#o;'S;=`&R<%lO#o~#rWpq#oqr#ors$[s#O#o#O#P$a#P;'S#o;'S;=`&R<%lO#o~$aOi~~$dXrs#o!P!Q#o#O#P#o#U#V#o#Y#Z#o#b#c#o#f#g#o#h#i#o#i#j%P~%SR!Q![%]!c!i%]#T#Z%]~%`R!Q![%i!c!i%i#T#Z%i~%lR!Q![%u!c!i%u#T#Z%u~%xR!Q![#o!c!i#o#T#Z#o~&UP;=`<%l#o~&^Pi~rs&a~&dZXY&aYZ&a]^&apq&aqr&ars'Vs#O&a#O#P'h#P;'S&a;'S;=`)Y<%lO&a~'YPrs']~'`Prs'c~'hOo~~'kXrs&a!P!Q&a#O#P&a#U#V&a#Y#Z&a#b#c&a#f#g&a#h#i&a#i#j(W~(ZR!Q![(d!c!i(d#T#Z(d~(gR!Q![(p!c!i(p#T#Z(p~(sR!Q![(|!c!i(|#T#Z(|~)PR!Q![&a!c!i&a#T#Z&a~)]P;=`<%l&a~)eTh~tu)`!Q![)`!c!})`#R#S)`#T#o)`~)wXpq*dqr*dsw*dwx-lx#O*d#O#P+t#P;'S*d;'S;=`-f<%lO*d~*gXpq*dqr*dsw*dwx+Sx#O*d#O#P+t#P;'S*d;'S;=`-f<%lO*d~+XXp~pq*dqr*dsw*dwx+Sx#O*d#O#P+t#P;'S*d;'S;=`-f<%lO*d~+wXrs*d!P!Q*d#O#P*d#U#V*d#Y#Z*d#b#c*d#f#g*d#h#i*d#i#j,d~,gR!Q![,p!c!i,p#T#Z,p~,sR!Q![,|!c!i,|#T#Z,|~-PR!Q![-Y!c!i-Y#T#Z-Y~-]R!Q![*d!c!i*d#T#Z*d~-iP;=`<%l*d~-qXp~pq*dqr*dsw*dwx.^x#O*d#O#P+t#P;'S*d;'S;=`-f<%lO*d~.c[p~XY/XYZ/X]^/Xpq4eqr4esw4ewx5^x#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~/[[XY/XYZ/X]^/Xpq/Xqr/Xsw/Xwx0Qx#O/X#O#P2m#P;'S/X;'S;=`4_<%lO/X~0T[XY/XYZ/X]^/Xpq/Xqr/Xsw/Xwx0yx#O/X#O#P2m#P;'S/X;'S;=`4_<%lO/X~0|[XY/XYZ/X]^/Xpq/Xqr/Xsw/Xwx1rx#O/X#O#P2m#P;'S/X;'S;=`4_<%lO/X~1w[q~XY/XYZ/X]^/Xpq/Xqr/Xsw/Xwx1rx#O/X#O#P2m#P;'S/X;'S;=`4_<%lO/X~2pXrs/X!P!Q/X#O#P/X#U#V/X#Y#Z/X#b#c/X#f#g/X#h#i/X#i#j3]~3`R!Q![3i!c!i3i#T#Z3i~3lR!Q![3u!c!i3u#T#Z3u~3xR!Q![4R!c!i4R#T#Z4R~4UR!Q![/X!c!i/X#T#Z/X~4bP;=`<%l/X~4h[XY/XYZ/X]^/Xpq4eqr4esw4ewx5^x#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~5c[p~XY/XYZ/X]^/Xpq4eqr4esw4ewx6Xx#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~6^[p~XY/XYZ/X]^/Xpq4eqr4esw4ewx7Sx#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~7Z[q~p~XY/XYZ/X]^/Xpq4eqr4esw4ewx7Sx#O4e#O#P8P#P;'S4e;'S;=`9q<%lO4e~8SXrs4e!P!Q4e#O#P4e#U#V4e#Y#Z4e#b#c4e#f#g4e#h#i4e#i#j8o~8rR!Q![8{!c!i8{#T#Z8{~9OR!Q![9X!c!i9X#T#Z9X~9[R!Q![9e!c!i9e#T#Z9e~9hR!Q![4e!c!i4e#T#Z4e~9tP;=`<%l4eR:OOlPtQ~:RP!Q![:U~:ZSn~!Q![:U!g!h:g#R#S:U#X#Y:g~:jS{|:v}!O:v!Q![;P#R#S;P~:yQ!Q![;P#R#S;P~;UQn~!Q![;P#R#S;P~;_P!P!Q;b~;gTP~OY;bZ];b^;'S;b;'S;=`;v<%lO;b~;yP;=`<%l;b~<RTn~!O!P:U!Q![;|!g!h:g#R#S;|#X#Y:g~<gOj~~<lOX~~<qOW~~<vUh~tu)`!Q![)`!c!})`#R#S)`#T#U=Y#U#o)`~=_Vh~tu)`!Q![)`!c!})`#R#S)`#T#`)`#`#a=t#a#o)`~=yVh~tu)`!Q![)`!c!})`#R#S)`#T#g)`#g#h>`#h#o)`~>eVh~tu)`!Q![)`!c!})`#R#S)`#T#X)`#X#Y>z#Y#o)`~?RTs~h~tu)`!Q![)`!c!})`#R#S)`#T#o)`~?gVh~tu)`!Q![)`!c!})`#R#S)`#T#i)`#i#j?|#j#o)`~@RVh~tu)`!Q![)`!c!})`#R#S)`#T#`)`#`#a@h#a#o)`~@mVh~tu)`!Q![)`!c!})`#R#S)`#T#`)`#`#aAS#a#o)`~AZTm~h~tu)`!Q![)`!c!})`#R#S)`#T#o)`~AoVh~tu)`!Q![)`!c!})`#R#S)`#T#f)`#f#gBU#g#o)`~BZVh~tu)`!Q![)`!c!})`#R#S)`#T#i)`#i#jBp#j#o)`~BuVh~tu)`!Q![)`!c!})`#R#S)`#T#X)`#X#YC[#Y#o)`~CcTr~h~tu)`!Q![)`!c!})`#R#S)`#T#o)`~CwOU~~C|OT~", tokenizers: [0, 1], topRules: { Document: [0, 2] }, tokenPrec: 222 }), F = l.define({ name: "jsoncue", parser: E.configure({ props: [c.add({ Object: u({ except: /^\s*\}/ }), Array: u({ except: /^\s*\]/ }) }), f.add({ "Object Array": p })] }), languageData: { closeBrackets: { brackets: ["[", "{", '"""', "'''", '"', "'"] }, indentOnInput: /^\s*[\}\]]$/ } });
function W() {
  return new d(F);
}
const _G = class _G {
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
__publicField(_G, "parse", (t2) => new _G(E.parse(t2), t2));
let G = _G;
let L = class extends Error {
  constructor(t2, e2, s2 = "") {
    let i2 = g.create({ doc: t2.sliceDoc(0) }), r2 = i2.doc.lineAt(e2.from), n2 = `${r2.number} | `;
    super(`SyntaxError${s2 ? `: ${s2}` : ""}
${n2}${i2.sliceDoc(r2.from, r2.to)}        
${Array(n2.length + (e2.from - r2.from - 1)).fill(" ").join("")} ^ at position ${e2.from}        
`), this.source = t2, this.node = e2, this.reason = s2;
  }
}, M = Array.isArray;
function _(t2) {
  return !!t2 && t2.constructor === Object;
}
let J = (t2) => "string" == typeof t2 || t2 instanceof String;
function H(t2) {
  return void 0 === t2;
}
class K {
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
function* tt(t2) {
  for (let e2 = t2.firstChild; null != e2; e2 = e2.nextSibling)
    yield e2;
}
let te = function(t2, e2) {
  let s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  return ts(t2, e2, [], s2);
}, ts = (t2, e2, s2, i2) => {
  if (!e2)
    return null;
  switch (i2.onValueNode && i2.onValueNode(e2, s2), e2.type.id) {
    case 2:
      let r2;
      for (let n3 of tt(e2))
        if (!n3.type.is(1)) {
          if (n3.type.is(3)) {
            r2 || (r2 = {});
            let [e3, o3] = to(t2, n3), h3 = th(t2, e3);
            ta(r2, h3, ts(t2, o3, [...s2, ...h3], i2));
          } else {
            if (r2) {
              if (i2.invalidValueAsUndefined)
                return;
              throw new L(t2, n3, "Property / Value could not in same scope");
            }
            return ts(t2, n3, s2, i2);
          }
        }
      return r2;
    case 7:
      let n2 = {};
      for (let r3 of tt(e2))
        if (!r3.type.is(1) && r3.type.is(3)) {
          let [e3, o3] = to(t2, r3), h3 = th(t2, e3);
          ta(n2, h3, ts(t2, o3, [...s2, ...h3], i2));
        }
      return n2;
    case 10:
      let o2 = [];
      for (let r3 of tt(e2)) {
        if ("[" == r3.name || "]" == r3.name)
          continue;
        let e3 = ts(t2, r3, [...s2, o2.length], i2);
        o2.push(e3);
      }
      return o2;
    case 14:
      if (e2.firstChild)
        throw new L(t2, e2, "invalid bytes");
      let h2 = t2.sliceDoc(e2.from, e2.to);
      if (h2.startsWith("'''"))
        return ti(tn(h2.substring(3, h2.length - 3)));
      return ti(JSON.parse(h2.replaceAll("'", '"')));
    case 13:
      if (e2.firstChild) {
        if (i2.invalidValueAsUndefined)
          return;
        throw new L(t2, e2, "invalid string");
      }
      let a2 = t2.sliceDoc(e2.from, e2.to);
      if (a2.startsWith('"""'))
        return tn(a2.substring(3, a2.length - 3));
      return JSON.parse(a2);
    case 12:
      if (e2.firstChild) {
        if (i2.invalidValueAsUndefined)
          return;
        throw new L(t2, e2, "invalid number");
      }
      return parseFloat(t2.sliceDoc(e2.from, e2.to));
    case 15:
      return true;
    case 16:
      return false;
    case 11:
      return null;
    default:
      if (i2.invalidValueAsUndefined)
        return;
      throw new L(t2, e2);
  }
};
function ti(t2) {
  return new tr(new TextEncoder().encode(t2));
}
class tr extends Uint8Array {
  toJSON() {
    return btoa(new TextDecoder().decode(this));
  }
}
function tn(t2) {
  let e2 = t2.match(/^(([\n\r]+)[\t ]+)/);
  return e2 ? t2.replaceAll(e2[1], e2[2]).trimStart() : t2;
}
function to(t2, e2) {
  let s2;
  let i2 = [];
  for (let r2 of tt(e2)) {
    if (r2.type.is(4)) {
      i2.push(r2);
      continue;
    }
    if (!H(s2))
      throw new L(t2, r2, "Property must only one value");
    s2 = r2;
  }
  if (0 == i2.length)
    throw new L(t2, e2, "Property must have at least one PropertyName");
  if (H(s2))
    throw new L(t2, e2, "Property must at least one value");
  return [i2, s2];
}
function th(t2, e2) {
  return e2.map((e3) => function(t3) {
    try {
      return JSON.parse(t3);
    } catch (e4) {
      return t3;
    }
  }(t2.sliceDoc(e3.from, e3.to)));
}
function ta(t2, e2, s2) {
  if (0 === e2.length)
    return;
  if (1 === e2.length) {
    t2[e2[0]] = s2;
    return;
  }
  let [i2, ...r2] = e2;
  if (H(t2[i2]))
    t2[i2] = {};
  else if (!_(t2[i2]))
    throw Error(`o[${i2}] already have non-object value`);
  return ta(t2[i2], r2, s2);
}
class tl {
  constructor() {
    __privateAdd(this, _i);
    __privateAdd(this, _s, new K());
  }
  toString() {
    return __privateGet(this, _s).toString();
  }
  print(t2) {
    if (M(t2)) {
      if (0 == t2.length) {
        __privateGet(this, _s).write("[]");
        return;
      }
      __privateGet(this, _s).write("["), __privateGet(this, _s).break(), __privateGet(this, _s).withIdent(() => {
        for (let e2 of t2)
          tu(e2) && (__privateGet(this, _s).tab(), this.print(e2), __privateGet(this, _s).write(","), __privateGet(this, _s).break());
      }), __privateGet(this, _s).tab(), __privateGet(this, _s).write("]");
      return;
    }
    if (_(t2)) {
      let e2 = Object.entries(t2).filter((t3) => {
        let [e3, s3] = t3;
        return tu(s3);
      });
      if (0 == e2.length) {
        __privateGet(this, _s).write("{}");
        return;
      }
      if (1 == e2.length) {
        let [t3, s3] = e2[0], i2 = tc(t3);
        __privateGet(this, _s).write(i2), __privateGet(this, _s).write(": "), this.print(s3);
        return;
      }
      let s2 = () => {
        let t3 = {}, s3 = 0;
        for (let [i2, r2] of e2) {
          let e3 = `${tc(i2)}: `, n2 = r2;
          for (; _(n2) && 1 == Object.keys(n2).length; ) {
            let [t4, s4] = Object.entries(n2)[0];
            e3 += `${tc(t4)}: `, n2 = s4;
          }
          t3[e3] = n2;
          let o2 = e3.length;
          o2 > s3 && (s3 = o2);
        }
        for (let [e3, i2] of Object.entries(t3))
          __privateGet(this, _s).tab(), __privateGet(this, _s).write(e3), __privateGet(this, _s).space(s3 - e3.length), this.print(i2), __privateGet(this, _s).break();
      };
      if (!__privateGet(this, _s).written) {
        s2();
        return;
      }
      __privateGet(this, _s).write("{"), __privateGet(this, _s).break(), __privateGet(this, _s).withIdent(() => {
        s2();
      }), __privateGet(this, _s).tab(), __privateGet(this, _s).write("}");
      return;
    }
    if (J(t2)) {
      if (/[\r\n]/.test(t2)) {
        __privateMethod(this, _i, i_fn).call(this, t2, '"""');
        return;
      }
      __privateGet(this, _s).write(`"${t2.split("").map((t3) => '"' == t3 ? '\\"' : t3).join("")}"`);
      return;
    }
    __privateGet(this, _s).write(JSON.stringify(t2));
  }
}
_s = new WeakMap();
_i = new WeakSet();
i_fn = function(t2, e2) {
  __privateGet(this, _s).write(e2), __privateGet(this, _s).break(), __privateGet(this, _s).withIdent(() => {
    for (let e3 of function* (t3) {
      let e4 = 0;
      for (let s2 = 0; s2 < t3.length; s2++) {
        let i2 = t3.charAt(s2);
        if ("\r\n".includes(i2)) {
          if (0 == s2) {
            yield "", e4 = s2 + 1;
            continue;
          }
          yield t3.slice(e4, s2), e4 = s2 + 1;
        }
      }
    }(t2))
      __privateGet(this, _s).tab(), __privateGet(this, _s).write(e3), __privateGet(this, _s).break();
    __privateGet(this, _s).tab(), __privateGet(this, _s).write(e2);
  });
};
function tc(t2) {
  return /^[A-Za-z$_]([$_A-Za-z0-9]+)?$/.test(t2) ? t2 : JSON.stringify(t2);
}
function tu(t2) {
  return !(H(t2) || t2 && t2.constructor && t2.call && t2.apply);
}
class tf {
  static parse(t2) {
    let e2 = G.parse(t2);
    return te(e2, e2.topNode);
  }
  static stringify(t2) {
    return function(t3) {
      let e2 = new tl();
      return e2.print(t3), e2.toString();
    }(t2);
  }
  static asBytes(t2) {
    return ti(t2);
  }
  static stringifyPropertyName(t2) {
    return tc(t2);
  }
}
let tp = (t2, e2) => {
  let s2 = k(t2).topNode;
  e2 > 0 && t2.sliceDoc(e2 - 1, e2).endsWith("\n") && (e2 += 1);
  let i2 = function(s3) {
    let r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    switch (s3.type.id) {
      case 2:
        let n2 = false;
        for (let o3 of tt(s3))
          if (!o3.type.is(1)) {
            if (o3.type.is(3)) {
              if (n2 = true, o3.from <= e2 && e2 <= o3.to) {
                let e3;
                let s4 = [];
                for (let t3 of tt(o3)) {
                  if (t3.type.is(4)) {
                    s4.push(t3);
                    continue;
                  }
                  e3 = t3;
                }
                let n3 = [...r2, ...th(t2, s4)];
                if (e3)
                  return i2(e3, n3);
                return { path: n3, node: o3 };
              }
              continue;
            }
            if (!n2)
              return i2(o3);
          }
        break;
      case 7:
        for (let n3 of tt(s3))
          if (!n3.type.is(1) && n3.type.is(3) && n3.from <= e2 && e2 <= n3.to) {
            let e3;
            let s4 = [];
            for (let t3 of tt(n3)) {
              if (t3.type.is(4)) {
                s4.push(t3);
                continue;
              }
              e3 = t3;
            }
            let o3 = [...r2, ...th(t2, s4)];
            if (e3)
              return i2(e3, o3);
            return { path: o3, node: n3 };
          }
        break;
      case 10:
        let o2 = 0;
        for (let t3 of tt(s3))
          if (!("[" == t3.name || "]" == t3.name)) {
            if (t3.from <= e2 && e2 <= t3.to)
              return i2(t3, [...r2, o2]);
            o2++;
          }
    }
    return { node: s3, path: r2 };
  };
  return { ...i2(s2), root: s2, values: te(t2, s2, { invalidValueAsUndefined: true }) };
};
function td(t2) {
  switch (t2.type) {
    case "object":
    case "record":
      return "{${}}";
    case "array":
      return "[${}]";
    case "string":
      return '"${}"';
    case "binary":
      return "'${}'";
  }
  return "${}";
}
function tg(t2) {
  switch (t2.type) {
    case "object":
    case "record":
      return "{}";
    case "array":
      return "[]";
    case "binary":
      return "''";
    case "string":
      return '""';
  }
  return "";
}
function tk(t2) {
  let e2 = (e3, s2) => {
    let i2 = tp(e3, s2), r2 = function t3(e4, s3, i3) {
      let r3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : P;
      switch (e4.type) {
        case "array":
          if (0 === i3.length)
            break;
          let n2 = i3[0];
          if (H(s3) && (s3 = []), !function(t4) {
            try {
              return Number(t4) === t4;
            } catch {
              return false;
            }
          }(n2) || !M(s3))
            return;
          for (let [o3, h2, a2] of e4.entries(Array(n2 + 1), r3))
            if (o3 == n2) {
              let e5 = s3[n2];
              return t3(a2, e5, i3.slice(1), { path: [...r3.path, n2], branch: [...r3.branch, e5] });
            }
          break;
        case "record":
          if (0 === i3.length)
            break;
          if (H(s3) && (s3 = {}), !_(s3))
            return;
          for (let [n3, o3, h2] of (0 == Object.keys(s3).length && i3.length > 0 && (s3[i3[0]] = void 0), e4.entries(s3, r3))) {
            if (n3 == b)
              continue;
            let e5 = s3[n3];
            return t3(h2, e5, i3.slice(1), { path: [...r3.path, String(n3)], branch: [...r3.branch, e5] });
          }
          break;
        case "union":
        case "object":
          if (H(s3) && (s3 = {}), !_(s3))
            return;
          let o2 = {};
          for (let [n3, h2, a2] of e4.entries(s3, r3)) {
            let e5 = String(n3);
            if (e5 == i3[0]) {
              let n4 = s3[e5];
              return t3(a2, n4, i3.slice(1), { path: [...r3.path, e5], branch: [...r3.branch, n4] });
            }
            o2[e5] = a2;
          }
          return m(o2);
      }
      return e4;
    }(t2, i2.values, i2.path);
    return r2 ? function(t3, e4) {
      var s3, i3, r3, n2;
      let o2 = [];
      switch (t3.type) {
        case "array":
          if (e4.type.is(10)) {
            let e5 = t3.getSchema("items");
            o2.push(O(td(e5), { label: tg(e5) }));
            break;
          }
          o2.push(O(td(t3), { label: tg(t3) }));
          break;
        case "record":
          break;
        case "union":
        case "object":
          for (let [e5, n3, h2] of t3.entries({}, P)) {
            let t4 = String(e5), n4 = { label: t4, info: null !== (r3 = null === (i3 = h2.getMeta("description")) || void 0 === i3 ? void 0 : null === (s3 = i3.split("\n")) || void 0 === s3 ? void 0 : s3[0]) && void 0 !== r3 ? r3 : "" };
            o2.push(O(`${tf.stringifyPropertyName(t4)}: ${td(h2)}`, n4));
          }
          break;
        case "boolean":
          o2.push({ label: "true", apply: "true" }, { label: "false", apply: "false" });
          break;
        case "enums":
          for (let e5 of null !== (n2 = t3.getSchema("enum")) && void 0 !== n2 ? n2 : [])
            o2.push({ label: `${e5}`, apply: JSON.stringify(e5) });
      }
      return o2;
    }(r2, i2.node) : [];
  };
  return (t3) => {
    let s2 = t3.matchBefore(/\w+/);
    return t3.explicit || s2 ? { from: (null == s2 ? void 0 : s2.text) ? null == s2 ? void 0 : s2.from : t3.pos, options: e2(t3.state, t3.pos), filter: true } : null;
  };
}
class tO {
  static parse(t2) {
    if ("" === t2)
      return [];
    if ("/" !== t2.charAt(0))
      throw Error("Invalid JSON pointer: " + t2);
    return t2.substring(1).split(/\//).map(tO.unescape);
  }
  static compile(t2) {
    return 0 === t2.length ? "" : "/" + t2.map(tO.escape).join("/");
  }
  static unescape(t2) {
    return t2.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  static escape(t2) {
    return t2.toString().replace(/~/g, "~0").replace(/\//g, "~1");
  }
}
function tm(t2) {
  return (e2) => {
    let s2 = k(e2.state).topNode, i2 = [...function* t3(e3) {
      yield e3;
      for (let s3 = e3.firstChild; null != s3; s3 = s3.nextSibling)
        yield* t3(s3);
    }(k(e2.state).topNode)].filter((t3) => t3.type.isError);
    if (i2.length > 0)
      return i2.map((t3) => ({ severity: "error", from: t3.from, to: t3.to, message: function(t4) {
        if (t4.parent) {
          if (t4.parent.type.is(4))
            return "Invalid PropertyName`";
          if (t4.parent.type.is(7))
            return "Object should have valid Property: `PropertyName: value`";
          if (t4.parent.type.is(2)) {
            if (t4.prevSibling && t4.prevSibling.type.is(3))
              return "Document is already an Object with Properties, value is not allow to add`";
            if (t4.prevSibling && !t4.prevSibling.type.is(3))
              return "Document is already a value, Property not allow to add`";
          }
          if (t4.parent.type.is(10) && t4.prevSibling && "," != t4.prevSibling.name)
            return "Array items need split by `,`";
        }
        return "Syntax Error";
      }(t3) }));
    let r2 = {}, n2 = te(e2.state, s2, { onValueNode: (t3, e3) => {
      var s3;
      let i3 = tO.compile(e3);
      r2[i3] = [...null !== (s3 = r2[i3]) && void 0 !== s3 ? s3 : [], t3];
    }, invalidValueAsUndefined: true }), [o2] = t2.validate(n2);
    if (!o2)
      return [];
    let h2 = [];
    for (let t3 of o2.failures()) {
      var a2;
      if ("never" !== t3.type)
        for (let e3 of null !== (a2 = r2[tO.compile(t3.path)]) && void 0 !== a2 ? a2 : [])
          h2.push({ severity: "error", from: e3.from, to: e3.to, message: t3.message });
    }
    return h2;
  };
}
export {
  tf as J,
  tk as a,
  tm as b,
  W as j
};
