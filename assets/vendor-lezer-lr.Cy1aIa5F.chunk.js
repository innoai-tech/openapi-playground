import { P as t, N as e, a as s, D as i, b as h, T as r, I as n } from "./lib-nodepkg-codemirror.D6AdZl-l.chunk.js";
var o = {};
class a {
  constructor(t2, e2, s2, i2, h2, r2, n2, o2, a2, l2 = 0, c2) {
    this.p = t2, this.stack = e2, this.state = s2, this.reducePos = i2, this.pos = h2, this.score = r2, this.buffer = n2, this.bufferBase = o2, this.curContext = a2, this.lookAhead = l2, this.parent = c2;
  }
  toString() {
    return `[${this.stack.filter((t2, e2) => e2 % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
  }
  static start(t2, e2) {
    let s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, i2 = t2.parser.context;
    return new a(t2, [], e2, s2, s2, 0, [], 0, i2 ? new l(i2, i2.start) : null, 0, null);
  }
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  pushState(t2, e2) {
    this.stack.push(this.state, e2, this.bufferBase + this.buffer.length), this.state = t2;
  }
  reduce(t2) {
    var e2;
    let s2 = t2 >> 19, i2 = 65535 & t2, { parser: h2 } = this.p, r2 = this.reducePos < this.pos - 25;
    r2 && this.setLookAhead(this.pos);
    let n2 = h2.dynamicPrecedence(i2);
    if (n2 && (this.score += n2), 0 == s2) {
      this.pushState(h2.getGoto(this.state, i2, true), this.reducePos), i2 < h2.minRepeatTerm && this.storeNode(i2, this.reducePos, this.reducePos, r2 ? 8 : 4, true), this.reduceContext(i2, this.reducePos);
      return;
    }
    let o2 = this.stack.length - (s2 - 1) * 3 - (262144 & t2 ? 6 : 0), a2 = o2 ? this.stack[o2 - 2] : this.p.ranges[0].from, l2 = this.reducePos - a2;
    l2 >= 2e3 && !(null === (e2 = this.p.parser.nodeSet.types[i2]) || void 0 === e2 ? void 0 : e2.isAnonymous) && (a2 == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = l2) : this.p.lastBigReductionSize < l2 && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = a2, this.p.lastBigReductionSize = l2));
    let c2 = o2 ? this.stack[o2 - 1] : 0, u2 = this.bufferBase + this.buffer.length - c2;
    if (i2 < h2.minRepeatTerm || 131072 & t2) {
      let t3 = h2.stateFlag(this.state, 1) ? this.pos : this.reducePos;
      this.storeNode(i2, a2, t3, u2 + 4, true);
    }
    if (262144 & t2) this.state = this.stack[o2];
    else {
      let t3 = this.stack[o2 - 3];
      this.state = h2.getGoto(t3, i2, true);
    }
    for (; this.stack.length > o2; ) this.stack.pop();
    this.reduceContext(i2, a2);
  }
  storeNode(t2, e2, s2) {
    let i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4, h2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (0 == t2 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let t3 = this, i3 = this.buffer.length;
      if (0 == i3 && t3.parent && (i3 = t3.bufferBase - t3.parent.bufferBase, t3 = t3.parent), i3 > 0 && 0 == t3.buffer[i3 - 4] && t3.buffer[i3 - 1] > -1) {
        if (e2 == s2) return;
        if (t3.buffer[i3 - 2] >= e2) {
          t3.buffer[i3 - 2] = s2;
          return;
        }
      }
    }
    if (h2 && this.pos != s2) {
      let h3 = this.buffer.length;
      if (h3 > 0 && 0 != this.buffer[h3 - 4]) {
        let t3 = false;
        for (let e3 = h3; e3 > 0 && this.buffer[e3 - 2] > s2; e3 -= 4) if (this.buffer[e3 - 1] >= 0) {
          t3 = true;
          break;
        }
        if (t3) for (; h3 > 0 && this.buffer[h3 - 2] > s2; ) this.buffer[h3] = this.buffer[h3 - 4], this.buffer[h3 + 1] = this.buffer[h3 - 3], this.buffer[h3 + 2] = this.buffer[h3 - 2], this.buffer[h3 + 3] = this.buffer[h3 - 1], h3 -= 4, i2 > 4 && (i2 -= 4);
      }
      this.buffer[h3] = t2, this.buffer[h3 + 1] = e2, this.buffer[h3 + 2] = s2, this.buffer[h3 + 3] = i2;
    } else this.buffer.push(t2, e2, s2, i2);
  }
  shift(t2, e2, s2, i2) {
    if (131072 & t2) this.pushState(65535 & t2, this.pos);
    else if ((262144 & t2) == 0) {
      let { parser: h2 } = this.p;
      (i2 > this.pos || e2 <= h2.maxNode) && (this.pos = i2, h2.stateFlag(t2, 1) || (this.reducePos = i2)), this.pushState(t2, s2), this.shiftContext(e2, s2), e2 <= h2.maxNode && this.buffer.push(e2, s2, i2, 4);
    } else this.pos = i2, this.shiftContext(e2, s2), e2 <= this.p.parser.maxNode && this.buffer.push(e2, s2, i2, 4);
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
    for (; e2 > 0 && t2.buffer[e2 - 2] > t2.reducePos; ) e2 -= 4;
    let s2 = t2.buffer.slice(e2), i2 = t2.bufferBase + e2;
    for (; t2 && i2 == t2.bufferBase; ) t2 = t2.parent;
    return new a(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, s2, i2, this.curContext, this.lookAhead, t2);
  }
  recoverByDelete(t2, e2) {
    let s2 = t2 <= this.p.parser.maxNode;
    s2 && this.storeNode(t2, this.pos, e2, 4), this.storeNode(0, this.pos, e2, s2 ? 8 : 4), this.pos = this.reducePos = e2, this.score -= 190;
  }
  canShift(t2) {
    for (let e2 = new c(this); ; ) {
      let s2 = this.p.parser.stateSlot(e2.state, 4) || this.p.parser.hasAction(e2.state, t2);
      if (0 == s2) return false;
      if ((65536 & s2) == 0) return true;
      e2.reduce(s2);
    }
  }
  recoverByInsert(t2) {
    if (this.stack.length >= 300) return [];
    let e2 = this.p.parser.nextStates(this.state);
    if (e2.length > 8 || this.stack.length >= 120) {
      let s3 = [];
      for (let i2 = 0, h2; i2 < e2.length; i2 += 2) (h2 = e2[i2 + 1]) != this.state && this.p.parser.hasAction(h2, t2) && s3.push(e2[i2], h2);
      if (this.stack.length < 120) for (let t3 = 0; s3.length < 8 && t3 < e2.length; t3 += 2) {
        let i2 = e2[t3 + 1];
        s3.some((t4, e3) => 1 & e3 && t4 == i2) || s3.push(e2[t3], i2);
      }
      e2 = s3;
    }
    let s2 = [];
    for (let t3 = 0; t3 < e2.length && s2.length < 4; t3 += 2) {
      let i2 = e2[t3 + 1];
      if (i2 == this.state) continue;
      let h2 = this.split();
      h2.pushState(i2, this.pos), h2.storeNode(0, h2.pos, h2.pos, 4, true), h2.shiftContext(e2[t3], this.pos), h2.reducePos = this.pos, h2.score -= 200, s2.push(h2);
    }
    return s2;
  }
  forceReduce() {
    let { parser: t2 } = this.p, e2 = t2.stateSlot(this.state, 5);
    if ((65536 & e2) == 0) return false;
    if (!t2.validAction(this.state, e2)) {
      let s2 = e2 >> 19, i2 = 65535 & e2, h2 = this.stack.length - 3 * s2;
      if (h2 < 0 || 0 > t2.getGoto(this.stack[h2], i2, false)) {
        let t3 = this.findForcedReduction();
        if (null == t3) return false;
        e2 = t3;
      }
      this.storeNode(0, this.pos, this.pos, 4, true), this.score -= 100;
    }
    return this.reducePos = this.pos, this.reduce(e2), true;
  }
  findForcedReduction() {
    let { parser: t2 } = this.p, e2 = [], s2 = (i2, h2) => {
      if (!e2.includes(i2)) return e2.push(i2), t2.allActions(i2, (e3) => {
        if (393216 & e3) ;
        else if (65536 & e3) {
          let s3 = (e3 >> 19) - h2;
          if (s3 > 1) {
            let i3 = 65535 & e3, h3 = this.stack.length - 3 * s3;
            if (h3 >= 0 && t2.getGoto(this.stack[h3], i3, false) >= 0) return s3 << 19 | 65536 | i3;
          }
        } else {
          let t3 = s2(e3, h2 + 1);
          if (null != t3) return t3;
        }
      });
    };
    return s2(this.state, 0);
  }
  forceAll() {
    for (; !this.p.parser.stateFlag(this.state, 2); ) if (!this.forceReduce()) {
      this.storeNode(0, this.pos, this.pos, 4, true);
      break;
    }
    return this;
  }
  get deadEnd() {
    if (3 != this.stack.length) return false;
    let { parser: t2 } = this.p;
    return 65535 == t2.data[t2.stateSlot(this.state, 1)] && !t2.stateSlot(this.state, 4);
  }
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, true), this.state = this.stack[0], this.stack.length = 0;
  }
  sameState(t2) {
    if (this.state != t2.state || this.stack.length != t2.stack.length) return false;
    for (let e2 = 0; e2 < this.stack.length; e2 += 3) if (this.stack[e2] != t2.stack[e2]) return false;
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
      let e2 = new l(this.curContext.tracker, t2);
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
class l {
  constructor(t2, e2) {
    this.tracker = t2, this.context = e2, this.hash = t2.strict ? t2.hash(e2) : 0;
  }
}
class c {
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
class u {
  constructor(t2, e2, s2) {
    this.stack = t2, this.pos = e2, this.index = s2, this.buffer = t2.buffer, 0 == this.index && this.maybeNext();
  }
  static create(t2) {
    let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t2.bufferBase + t2.buffer.length;
    return new u(t2, e2, e2 - t2.bufferBase);
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
    return new u(this.stack, this.pos, this.index);
  }
}
function f(t2) {
  let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
  if ("string" != typeof t2) return t2;
  let s2 = null;
  for (let i2 = 0, h2 = 0; i2 < t2.length; ) {
    let r2 = 0;
    for (; ; ) {
      let e3 = t2.charCodeAt(i2++), s3 = false;
      if (126 == e3) {
        r2 = 65535;
        break;
      }
      e3 >= 92 && e3--, e3 >= 34 && e3--;
      let h3 = e3 - 32;
      if (h3 >= 46 && (h3 -= 46, s3 = true), r2 += h3, s3) break;
      r2 *= 46;
    }
    s2 ? s2[h2++] = r2 : s2 = new e2(r2);
  }
  return s2;
}
class p {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
}
let d = new p();
class k {
  constructor(t2, e2) {
    this.input = t2, this.ranges = e2, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = d, this.rangeIndex = 0, this.pos = this.chunkPos = e2[0].from, this.range = e2[0], this.end = e2[e2.length - 1].to, this.readNext();
  }
  resolveOffset(t2, e2) {
    let s2 = this.range, i2 = this.rangeIndex, h2 = this.pos + t2;
    for (; h2 < s2.from; ) {
      if (!i2) return null;
      let t3 = this.ranges[--i2];
      h2 -= s2.from - t3.to, s2 = t3;
    }
    for (; e2 < 0 ? h2 > s2.to : h2 >= s2.to; ) {
      if (i2 == this.ranges.length - 1) return null;
      let t3 = this.ranges[++i2];
      h2 += t3.from - s2.to, s2 = t3;
    }
    return h2;
  }
  clipPos(t2) {
    if (t2 >= this.range.from && t2 < this.range.to) return t2;
    for (let e2 of this.ranges) if (e2.to > t2) return Math.max(t2, e2.from);
    return this.end;
  }
  peek(t2) {
    let e2 = this.chunkOff + t2, s2, i2;
    if (e2 >= 0 && e2 < this.chunk.length) s2 = this.pos + t2, i2 = this.chunk.charCodeAt(e2);
    else {
      let e3 = this.resolveOffset(t2, 1);
      if (null == e3) return -1;
      if ((s2 = e3) >= this.chunk2Pos && s2 < this.chunk2Pos + this.chunk2.length) i2 = this.chunk2.charCodeAt(s2 - this.chunk2Pos);
      else {
        let t3 = this.rangeIndex, e4 = this.range;
        for (; e4.to <= s2; ) e4 = this.ranges[++t3];
        this.chunk2 = this.input.chunk(this.chunk2Pos = s2), s2 + this.chunk2.length > e4.to && (this.chunk2 = this.chunk2.slice(0, e4.to - s2)), i2 = this.chunk2.charCodeAt(0);
      }
    }
    return s2 >= this.token.lookAhead && (this.token.lookAhead = s2 + 1), i2;
  }
  acceptToken(t2) {
    let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, s2 = e2 ? this.resolveOffset(e2, -1) : this.pos;
    if (null == s2 || s2 < this.token.start) throw RangeError("Token end out of bounds");
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
      if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
      t2 -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
    }
    return this.pos += t2, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
  }
  setDone() {
    return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1;
  }
  reset(t2, e2) {
    if (e2 ? (this.token = e2, e2.start = t2, e2.lookAhead = t2 + 1, e2.value = e2.extended = -1) : this.token = d, this.pos != t2) {
      if (this.pos = t2, t2 == this.end) return this.setDone(), this;
      for (; t2 < this.range.from; ) this.range = this.ranges[--this.rangeIndex];
      for (; t2 >= this.range.to; ) this.range = this.ranges[++this.rangeIndex];
      t2 >= this.chunkPos && t2 < this.chunkPos + this.chunk.length ? this.chunkOff = t2 - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext();
    }
    return this;
  }
  read(t2, e2) {
    if (t2 >= this.chunkPos && e2 <= this.chunkPos + this.chunk.length) return this.chunk.slice(t2 - this.chunkPos, e2 - this.chunkPos);
    if (t2 >= this.chunk2Pos && e2 <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(t2 - this.chunk2Pos, e2 - this.chunk2Pos);
    if (t2 >= this.range.from && e2 <= this.range.to) return this.input.read(t2, e2);
    let s2 = "";
    for (let i2 of this.ranges) {
      if (i2.from >= e2) break;
      i2.to > t2 && (s2 += this.input.read(Math.max(i2.from, t2), Math.min(i2.to, e2)));
    }
    return s2;
  }
}
class g {
  constructor(t2, e2) {
    this.data = t2, this.id = e2;
  }
  token(t2, e2) {
    let { parser: s2 } = e2.p;
    !function(t3, e3, s3, i2, h2, r2) {
      let n2 = 0, o2 = 1 << i2, { dialect: a2 } = s3.p.parser;
      t: for (; (o2 & t3[n2]) != 0; ) {
        let s4 = t3[n2 + 1];
        for (let i4 = n2 + 3; i4 < s4; i4 += 2) if ((t3[i4 + 1] & o2) > 0) {
          let s5 = t3[i4];
          if (a2.allows(s5) && (-1 == e3.token.value || e3.token.value == s5 || function(t4, e4, s6, i5) {
            let h3 = m(s6, i5, e4);
            return h3 < 0 || m(s6, i5, t4) < h3;
          }(s5, e3.token.value, h2, r2))) {
            e3.acceptToken(s5);
            break;
          }
        }
        let i3 = e3.next, l2 = 0, c2 = t3[n2 + 2];
        if (e3.next < 0 && c2 > l2 && 65535 == t3[s4 + 3 * c2 - 3]) {
          n2 = t3[s4 + 3 * c2 - 1];
          continue;
        }
        for (; l2 < c2; ) {
          let h3 = l2 + c2 >> 1, r3 = s4 + h3 + (h3 << 1), o3 = t3[r3], a3 = t3[r3 + 1] || 65536;
          if (i3 < o3) c2 = h3;
          else if (i3 >= a3) l2 = h3 + 1;
          else {
            n2 = t3[r3 + 2], e3.advance();
            continue t;
          }
        }
        break;
      }
    }(this.data, t2, e2, this.id, s2.data, s2.tokenPrecTable);
  }
}
function m(t2, e2, s2) {
  for (let i2 = e2, h2; 65535 != (h2 = t2[i2]); i2++) if (h2 == s2) return i2 - e2;
  return -1;
}
g.prototype.contextual = g.prototype.fallback = g.prototype.extend = false, g.prototype.fallback = g.prototype.extend = false;
let x = "undefined" != typeof process && o && /\bparse\b/.test(o.LOG), b = null;
function S(t2, e2, s2) {
  let i2 = t2.cursor(n.IncludeAnonymous);
  for (i2.moveTo(e2); ; ) if (!(s2 < 0 ? i2.childBefore(e2) : i2.childAfter(e2))) for (; ; ) {
    if ((s2 < 0 ? i2.to < e2 : i2.from > e2) && !i2.type.isError) return s2 < 0 ? Math.max(0, Math.min(i2.to - 1, e2 - 25)) : Math.min(t2.length, Math.max(i2.from + 1, e2 + 25));
    if (s2 < 0 ? i2.prevSibling() : i2.nextSibling()) break;
    if (!i2.parent()) return s2 < 0 ? 0 : t2.length;
  }
}
class v {
  constructor(t2, e2) {
    this.fragments = t2, this.nodeSet = e2, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let t2 = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (t2) {
      for (this.safeFrom = t2.openStart ? S(t2.tree, t2.from + t2.offset, 1) - t2.offset : t2.from, this.safeTo = t2.openEnd ? S(t2.tree, t2.to + t2.offset, -1) - t2.offset : t2.to; this.trees.length; ) this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(t2.tree), this.start.push(-t2.offset), this.index.push(0), this.nextStart = this.safeFrom;
    } else this.nextStart = 1e9;
  }
  nodeAt(t2) {
    if (t2 < this.nextStart) return null;
    for (; this.fragment && this.safeTo <= t2; ) this.nextFragment();
    if (!this.fragment) return null;
    for (; ; ) {
      let e2 = this.trees.length - 1;
      if (e2 < 0) return this.nextFragment(), null;
      let s2 = this.trees[e2], i2 = this.index[e2];
      if (i2 == s2.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let n2 = s2.children[i2], o2 = this.start[e2] + s2.positions[i2];
      if (o2 > t2) return this.nextStart = o2, null;
      if (n2 instanceof r) {
        if (o2 == t2) {
          if (o2 < this.safeFrom) return null;
          let t3 = o2 + n2.length;
          if (t3 <= this.safeTo) {
            let e3 = n2.prop(h.lookAhead);
            if (!e3 || t3 + e3 < this.fragment.to) return n2;
          }
        }
        this.index[e2]++, o2 + n2.length >= Math.max(this.safeFrom, t2) && (this.trees.push(n2), this.start.push(o2), this.index.push(0));
      } else this.index[e2]++, this.nextStart = o2 + n2.length;
    }
  }
}
class P {
  constructor(t2, e2) {
    this.stream = e2, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = t2.tokenizers.map((t3) => new p());
  }
  getActions(t2) {
    let e2 = 0, s2 = null, { parser: i2 } = t2.p, { tokenizers: h2 } = i2, r2 = i2.stateSlot(t2.state, 3), n2 = t2.curContext ? t2.curContext.hash : 0, o2 = 0;
    for (let i3 = 0; i3 < h2.length; i3++) {
      if ((1 << i3 & r2) == 0) continue;
      let a2 = h2[i3], l2 = this.tokens[i3];
      if ((!s2 || a2.fallback) && ((a2.contextual || l2.start != t2.pos || l2.mask != r2 || l2.context != n2) && (this.updateCachedToken(l2, a2, t2), l2.mask = r2, l2.context = n2), l2.lookAhead > l2.end + 25 && (o2 = Math.max(l2.lookAhead, o2)), 0 != l2.value)) {
        let i4 = e2;
        if (l2.extended > -1 && (e2 = this.addActions(t2, l2.extended, l2.end, e2)), e2 = this.addActions(t2, l2.value, l2.end, e2), !a2.extend && (s2 = l2, e2 > i4)) break;
      }
    }
    for (; this.actions.length > e2; ) this.actions.pop();
    return o2 && t2.setLookAhead(o2), s2 || t2.pos != this.stream.end || ((s2 = new p()).value = t2.p.parser.eofTerm, s2.start = s2.end = t2.pos, e2 = this.addActions(t2, s2.value, s2.end, e2)), this.mainToken = s2, this.actions;
  }
  getMainToken(t2) {
    if (this.mainToken) return this.mainToken;
    let e2 = new p(), { pos: s2, p: i2 } = t2;
    return e2.start = s2, e2.end = Math.min(s2 + 1, i2.stream.end), e2.value = s2 == i2.stream.end ? i2.parser.eofTerm : 0, e2;
  }
  updateCachedToken(t2, e2, s2) {
    let i2 = this.stream.clipPos(s2.pos);
    if (e2.token(this.stream.reset(i2, t2), s2), t2.value > -1) {
      let { parser: e3 } = s2.p;
      for (let i3 = 0; i3 < e3.specialized.length; i3++) if (e3.specialized[i3] == t2.value) {
        let h2 = e3.specializers[i3](this.stream.read(t2.start, t2.end), s2);
        if (h2 >= 0 && s2.p.parser.dialect.allows(h2 >> 1)) {
          (1 & h2) == 0 ? t2.value = h2 >> 1 : t2.extended = h2 >> 1;
          break;
        }
      }
    } else t2.value = 0, t2.end = this.stream.clipPos(i2 + 1);
  }
  putAction(t2, e2, s2, i2) {
    for (let e3 = 0; e3 < i2; e3 += 3) if (this.actions[e3] == t2) return i2;
    return this.actions[i2++] = t2, this.actions[i2++] = e2, this.actions[i2++] = s2, i2;
  }
  addActions(t2, e2, s2, i2) {
    let { state: h2 } = t2, { parser: r2 } = t2.p, { data: n2 } = r2;
    for (let t3 = 0; t3 < 2; t3++) for (let o2 = r2.stateSlot(h2, t3 ? 2 : 1); ; o2 += 3) {
      if (65535 == n2[o2]) {
        if (1 == n2[o2 + 1]) o2 = N(n2, o2 + 2);
        else {
          0 == i2 && 2 == n2[o2 + 1] && (i2 = this.putAction(N(n2, o2 + 2), e2, s2, i2));
          break;
        }
      }
      n2[o2] == e2 && (i2 = this.putAction(N(n2, o2 + 1), e2, s2, i2));
    }
    return i2;
  }
}
class A {
  constructor(t2, e2, s2, i2) {
    this.parser = t2, this.input = e2, this.ranges = i2, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new k(e2, i2), this.tokens = new P(t2, this.stream), this.topTerm = t2.top[1];
    let { from: h2 } = i2[0];
    this.stacks = [a.start(this, t2.top[0], h2)], this.fragments = s2.length && this.stream.end - h2 > 4 * t2.bufferLength ? new v(s2, t2.nodeSet) : null;
  }
  get parsedPos() {
    return this.minStackPos;
  }
  advance() {
    let t2, e2, s2 = this.stacks, i2 = this.minStackPos, h2 = this.stacks = [];
    if (this.bigReductionCount > 300 && 1 == s2.length) {
      let [t3] = s2;
      for (; t3.forceReduce() && t3.stack.length && t3.stack[t3.stack.length - 2] >= this.lastBigReductionStart; ) ;
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let r2 = 0; r2 < s2.length; r2++) {
      let n2 = s2[r2];
      for (; ; ) {
        if (this.tokens.mainToken = null, n2.pos > i2) h2.push(n2);
        else {
          if (this.advanceStack(n2, h2, s2)) continue;
          t2 || (t2 = [], e2 = []), t2.push(n2);
          let i3 = this.tokens.getMainToken(n2);
          e2.push(i3.value, i3.end);
        }
        break;
      }
    }
    if (!h2.length) {
      let e3 = t2 && function(t3) {
        let e4 = null;
        for (let s3 of t3) {
          let t4 = s3.p.stoppedAt;
          (s3.pos == s3.p.stream.end || null != t4 && s3.pos > t4) && s3.p.parser.stateFlag(s3.state, 2) && (!e4 || e4.score < s3.score) && (e4 = s3);
        }
        return e4;
      }(t2);
      if (e3) return x && console.log("Finish with " + this.stackID(e3)), this.stackToTree(e3);
      if (this.parser.strict) throw x && t2 && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), SyntaxError("No parse at " + i2);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && t2) {
      let s3 = null != this.stoppedAt && t2[0].pos > this.stoppedAt ? t2[0] : this.runRecovery(t2, e2, h2);
      if (s3) return x && console.log("Force-finish " + this.stackID(s3)), this.stackToTree(s3.forceAll());
    }
    if (this.recovering) {
      let t3 = 1 == this.recovering ? 1 : 3 * this.recovering;
      if (h2.length > t3) for (h2.sort((t4, e3) => e3.score - t4.score); h2.length > t3; ) h2.pop();
      h2.some((t4) => t4.reducePos > i2) && this.recovering--;
    } else if (h2.length > 1) {
      e: for (let t3 = 0; t3 < h2.length - 1; t3++) {
        let e3 = h2[t3];
        for (let s3 = t3 + 1; s3 < h2.length; s3++) {
          let i3 = h2[s3];
          if (e3.sameState(i3) || e3.buffer.length > 500 && i3.buffer.length > 500) {
            if ((e3.score - i3.score || e3.buffer.length - i3.buffer.length) > 0) h2.splice(s3--, 1);
            else {
              h2.splice(t3--, 1);
              continue e;
            }
          }
        }
      }
      h2.length > 12 && h2.splice(12, h2.length - 12);
    }
    this.minStackPos = h2[0].pos;
    for (let t3 = 1; t3 < h2.length; t3++) h2[t3].pos < this.minStackPos && (this.minStackPos = h2[t3].pos);
    return null;
  }
  stopAt(t2) {
    if (null != this.stoppedAt && this.stoppedAt < t2) throw RangeError("Can't move stoppedAt forward");
    this.stoppedAt = t2;
  }
  advanceStack(t2, e2, s2) {
    let i2 = t2.pos, { parser: n2 } = this, o2 = x ? this.stackID(t2) + " -> " : "";
    if (null != this.stoppedAt && i2 > this.stoppedAt) return t2.forceReduce() ? t2 : null;
    if (this.fragments) {
      let e3 = t2.curContext && t2.curContext.tracker.strict, s3 = e3 ? t2.curContext.hash : 0;
      for (let a3 = this.fragments.nodeAt(i2); a3; ) {
        let i3 = this.parser.nodeSet.types[a3.type.id] == a3.type ? n2.getGoto(t2.state, a3.type.id) : -1;
        if (i3 > -1 && a3.length && (!e3 || (a3.prop(h.contextHash) || 0) == s3)) return t2.useNode(a3, i3), x && console.log(o2 + this.stackID(t2) + ` (via reuse of ${n2.getName(a3.type.id)})`), true;
        if (!(a3 instanceof r) || 0 == a3.children.length || a3.positions[0] > 0) break;
        let l3 = a3.children[0];
        if (l3 instanceof r && 0 == a3.positions[0]) a3 = l3;
        else break;
      }
    }
    let a2 = n2.stateSlot(t2.state, 4);
    if (a2 > 0) return t2.reduce(a2), x && console.log(o2 + this.stackID(t2) + ` (via always-reduce ${n2.getName(65535 & a2)})`), true;
    if (t2.stack.length >= 8400) for (; t2.stack.length > 6e3 && t2.forceReduce(); ) ;
    let l2 = this.tokens.getActions(t2);
    for (let h2 = 0; h2 < l2.length; ) {
      let r2 = l2[h2++], a3 = l2[h2++], c2 = l2[h2++], u2 = h2 == l2.length || !s2, f2 = u2 ? t2 : t2.split(), p2 = this.tokens.mainToken;
      if (f2.apply(r2, a3, p2 ? p2.start : f2.pos, c2), x && console.log(o2 + this.stackID(f2) + ` (via ${(65536 & r2) == 0 ? "shift" : `reduce of ${n2.getName(65535 & r2)}`} for ${n2.getName(a3)} @ ${i2}${f2 == t2 ? "" : ", split"})`), u2) return true;
      f2.pos > i2 ? e2.push(f2) : s2.push(f2);
    }
    return false;
  }
  advanceFully(t2, e2) {
    let s2 = t2.pos;
    for (; ; ) {
      if (!this.advanceStack(t2, null, null)) return false;
      if (t2.pos > s2) return C(t2, e2), true;
    }
  }
  runRecovery(t2, e2, s2) {
    let i2 = null, h2 = false;
    for (let r2 = 0; r2 < t2.length; r2++) {
      let n2 = t2[r2], o2 = e2[r2 << 1], a2 = e2[(r2 << 1) + 1], l2 = x ? this.stackID(n2) + " -> " : "";
      if (n2.deadEnd && (h2 || (h2 = true, n2.restart(), x && console.log(l2 + this.stackID(n2) + " (restarted)"), this.advanceFully(n2, s2)))) continue;
      let c2 = n2.split(), u2 = l2;
      for (let t3 = 0; c2.forceReduce() && t3 < 10 && (x && console.log(u2 + this.stackID(c2) + " (via force-reduce)"), !this.advanceFully(c2, s2)); t3++) x && (u2 = this.stackID(c2) + " -> ");
      for (let t3 of n2.recoverByInsert(o2)) x && console.log(l2 + this.stackID(t3) + " (via recover-insert)"), this.advanceFully(t3, s2);
      this.stream.end > n2.pos ? (a2 == n2.pos && (a2++, o2 = 0), n2.recoverByDelete(o2, a2), x && console.log(l2 + this.stackID(n2) + ` (via recover-delete ${this.parser.getName(o2)})`), C(n2, s2)) : (!i2 || i2.score < n2.score) && (i2 = n2);
    }
    return i2;
  }
  stackToTree(t2) {
    return t2.close(), r.build({ buffer: u.create(t2), nodeSet: this.parser.nodeSet, topID: this.topTerm, maxBufferLength: this.parser.bufferLength, reused: this.reused, start: this.ranges[0].from, length: t2.pos - this.ranges[0].from, minRepeatType: this.parser.minRepeatTerm });
  }
  stackID(t2) {
    let e2 = (b || (b = /* @__PURE__ */ new WeakMap())).get(t2);
    return e2 || b.set(t2, e2 = String.fromCodePoint(this.nextStackID++)), e2 + t2;
  }
}
function C(t2, e2) {
  for (let s2 = 0; s2 < e2.length; s2++) {
    let i2 = e2[s2];
    if (i2.pos == t2.pos && i2.sameState(t2)) {
      e2[s2].score < t2.score && (e2[s2] = t2);
      return;
    }
  }
  e2.push(t2);
}
class y {
  constructor(t2, e2, s2) {
    this.source = t2, this.flags = e2, this.disabled = s2;
  }
  allows(t2) {
    return !this.disabled || 0 == this.disabled[t2];
  }
}
class T extends t {
  constructor(t2) {
    if (super(), this.wrappers = [], 14 != t2.version) throw RangeError(`Parser version (${t2.version}) doesn't match runtime version (14)`);
    let r2 = t2.nodeNames.split(" ");
    this.minRepeatTerm = r2.length;
    for (let e2 = 0; e2 < t2.repeatNodeCount; e2++) r2.push("");
    let n2 = Object.keys(t2.topRules).map((e2) => t2.topRules[e2][1]), o2 = [];
    for (let t3 = 0; t3 < r2.length; t3++) o2.push([]);
    function a2(t3, e2, s2) {
      o2[t3].push([e2, e2.deserialize(String(s2))]);
    }
    if (t2.nodeProps) for (let e2 of t2.nodeProps) {
      let t3 = e2[0];
      "string" == typeof t3 && (t3 = h[t3]);
      for (let s2 = 1; s2 < e2.length; ) {
        let i2 = e2[s2++];
        if (i2 >= 0) a2(i2, t3, e2[s2++]);
        else {
          let h2 = e2[s2 + -i2];
          for (let r3 = -i2; r3 > 0; r3--) a2(e2[s2++], t3, h2);
          s2++;
        }
      }
    }
    this.nodeSet = new e(r2.map((e2, i2) => s.define({ name: i2 >= this.minRepeatTerm ? void 0 : e2, id: i2, props: o2[i2], top: n2.indexOf(i2) > -1, error: 0 == i2, skipped: t2.skippedNodes && t2.skippedNodes.indexOf(i2) > -1 }))), t2.propSources && (this.nodeSet = this.nodeSet.extend(...t2.propSources)), this.strict = false, this.bufferLength = i;
    let l2 = f(t2.tokenData);
    this.context = t2.context, this.specializerSpecs = t2.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let t3 = 0; t3 < this.specializerSpecs.length; t3++) this.specialized[t3] = this.specializerSpecs[t3].term;
    this.specializers = this.specializerSpecs.map(w), this.states = f(t2.states, Uint32Array), this.data = f(t2.stateData), this.goto = f(t2.goto), this.maxTerm = t2.maxTerm, this.tokenizers = t2.tokenizers.map((t3) => "number" == typeof t3 ? new g(l2, t3) : t3), this.topRules = t2.topRules, this.dialects = t2.dialects || {}, this.dynamicPrecedences = t2.dynamicPrecedences || null, this.tokenPrecTable = t2.tokenPrec, this.termNames = t2.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(t2, e2, s2) {
    let i2 = new A(this, t2, e2, s2);
    for (let h2 of this.wrappers) i2 = h2(i2, t2, e2, s2);
    return i2;
  }
  getGoto(t2, e2) {
    let s2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i2 = this.goto;
    if (e2 >= i2[0]) return -1;
    for (let h2 = i2[e2 + 1]; ; ) {
      let e3 = i2[h2++], r2 = 1 & e3, n2 = i2[h2++];
      if (r2 && s2) return n2;
      for (let s3 = h2 + (e3 >> 1); h2 < s3; h2++) if (i2[h2] == t2) return n2;
      if (r2) return -1;
    }
  }
  hasAction(t2, e2) {
    let s2 = this.data;
    for (let i2 = 0; i2 < 2; i2++) for (let h2 = this.stateSlot(t2, i2 ? 2 : 1), r2; ; h2 += 3) {
      if (65535 == (r2 = s2[h2])) {
        if (1 == s2[h2 + 1]) r2 = s2[h2 = N(s2, h2 + 2)];
        else if (2 == s2[h2 + 1]) return N(s2, h2 + 2);
        else break;
      }
      if (r2 == e2 || 0 == r2) return N(s2, h2 + 1);
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
        if (1 == this.data[s3 + 1]) s3 = N(this.data, s3 + 2);
        else break;
      }
      i2 = e2(N(this.data, s3 + 1));
    }
    return i2;
  }
  nextStates(t2) {
    let e2 = [];
    for (let s2 = this.stateSlot(t2, 1); ; s2 += 3) {
      if (65535 == this.data[s2]) {
        if (1 == this.data[s2 + 1]) s2 = N(this.data, s2 + 2);
        else break;
      }
      if ((1 & this.data[s2 + 2]) == 0) {
        let t3 = this.data[s2 + 1];
        e2.some((e3, s3) => 1 & s3 && e3 == t3) || e2.push(this.data[s2], t3);
      }
    }
    return e2;
  }
  configure(t2) {
    let e2 = Object.assign(Object.create(T.prototype), this);
    if (t2.props && (e2.nodeSet = this.nodeSet.extend(...t2.props)), t2.top) {
      let s2 = this.topRules[t2.top];
      if (!s2) throw RangeError(`Invalid top rule name ${t2.top}`);
      e2.top = s2;
    }
    return t2.tokenizers && (e2.tokenizers = this.tokenizers.map((e3) => {
      let s2 = t2.tokenizers.find((t3) => t3.from == e3);
      return s2 ? s2.to : e3;
    })), t2.specializers && (e2.specializers = this.specializers.slice(), e2.specializerSpecs = this.specializerSpecs.map((s2, i2) => {
      let h2 = t2.specializers.find((t3) => t3.from == s2.external);
      if (!h2) return s2;
      let r2 = Object.assign(Object.assign({}, s2), { external: h2.to });
      return e2.specializers[i2] = w(r2), r2;
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
    if (t2) for (let i3 of t2.split(" ")) {
      let t3 = e2.indexOf(i3);
      t3 >= 0 && (s2[t3] = true);
    }
    let i2 = null;
    for (let t3 = 0; t3 < e2.length; t3++) if (!s2[t3]) for (let s3 = this.dialects[e2[t3]], h2; 65535 != (h2 = this.data[s3++]); ) (i2 || (i2 = new Uint8Array(this.maxTerm + 1)))[h2] = 1;
    return new y(t2, s2, i2);
  }
  static deserialize(t2) {
    return new T(t2);
  }
}
function N(t2, e2) {
  return t2[e2] | t2[e2 + 1] << 16;
}
function w(t2) {
  if (t2.external) {
    let e2 = t2.extend ? 1 : 0;
    return (s2, i2) => t2.external(s2, i2) << 1 | e2;
  }
  return t2.get;
}
export {
  T as L
};
