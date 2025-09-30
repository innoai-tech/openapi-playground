var t, e = "object" == typeof global && global && global.Object === Object && global, r = "object" == typeof self && self && self.Object === Object && self, n = e || r || Function("return this")(), o = n.Symbol, i = Object.prototype, u = i.hasOwnProperty, c = i.toString, s = o ? o.toStringTag : void 0, a = function(t) {
	var e = u.call(t, s), r = t[s];
	try {
		t[s] = void 0;
		var n = !0;
	} catch (t) {}
	var o = c.call(t);
	return n && (e ? t[s] = r : delete t[s]), o;
}, l = Object.prototype.toString, f = o ? o.toStringTag : void 0, p = function(t) {
	return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : f && f in Object(t) ? a(t) : l.call(t);
}, h = function(t) {
	return null != t && "object" == typeof t;
}, b = Array.isArray, y = function(t) {
	var e = typeof t;
	return null != t && ("object" == e || "function" == e);
}, d = function(t) {
	return t;
}, v = function(t) {
	if (!y(t)) return !1;
	var e = p(t);
	return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e;
}, m = function(t, e) {
	for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t););
	return t;
}, _ = /^(?:0|[1-9]\d*)$/, w = function(t, e) {
	var r = typeof t;
	return !!(e = null == e ? 9007199254740991 : e) && ("number" == r || "symbol" != r && _.test(t)) && t > -1 && t % 1 == 0 && t < e;
}, g = function(t) {
	return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
}, x = function(t) {
	return null != t && g(t.length) && !v(t);
}, j = Object.prototype, S = function(t) {
	var e = t && t.constructor;
	return t === ("function" == typeof e && e.prototype || j);
}, O = function(t, e) {
	for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
	return n;
}, A = function(t) {
	return h(t) && "[object Arguments]" == p(t);
}, I = Object.prototype, T = I.hasOwnProperty, E = I.propertyIsEnumerable, P = A(function() {
	return arguments;
}()) ? A : function(t) {
	return h(t) && T.call(t, "callee") && !E.call(t, "callee");
}, C = "object" == typeof exports && exports && !exports.nodeType && exports, F = C && "object" == typeof module && module && !module.nodeType && module, k = F && F.exports === C ? n.Buffer : void 0, $ = (k ? k.isBuffer : void 0) || function() {
	return !1;
}, U = {};
U["[object Float32Array]"] = U["[object Float64Array]"] = U["[object Int8Array]"] = U["[object Int16Array]"] = U["[object Int32Array]"] = U["[object Uint8Array]"] = U["[object Uint8ClampedArray]"] = U["[object Uint16Array]"] = U["[object Uint32Array]"] = !0, U["[object Arguments]"] = U["[object Array]"] = U["[object ArrayBuffer]"] = U["[object Boolean]"] = U["[object DataView]"] = U["[object Date]"] = U["[object Error]"] = U["[object Function]"] = U["[object Map]"] = U["[object Number]"] = U["[object Object]"] = U["[object RegExp]"] = U["[object Set]"] = U["[object String]"] = U["[object WeakMap]"] = !1;
var z = function(t) {
	return function(e) {
		return t(e);
	};
}, q = "object" == typeof exports && exports && !exports.nodeType && exports, R = q && "object" == typeof module && module && !module.nodeType && module, B = R && R.exports === q && e.process, L = function() {
	try {
		var t = R && R.require && R.require("util").types;
		if (t) return t;
		return B && B.binding && B.binding("util");
	} catch (t) {}
}(), N = L && L.isTypedArray, D = N ? z(N) : function(t) {
	return h(t) && g(t.length) && !!U[p(t)];
}, M = Object.prototype.hasOwnProperty, Y = function(t, e) {
	var r = b(t), n = !r && P(t), o = !r && !n && $(t), i = !r && !n && !o && D(t), u = r || n || o || i, c = u ? O(t.length, String) : [], s = c.length;
	for (var a in t) (e || M.call(t, a)) && !(u && ("length" == a || o && ("offset" == a || "parent" == a) || i && ("buffer" == a || "byteLength" == a || "byteOffset" == a) || w(a, s))) && c.push(a);
	return c;
}, G = function(t, e) {
	return function(r) {
		return t(e(r));
	};
}, J = G(Object.keys, Object), V = Object.prototype.hasOwnProperty, H = function(t) {
	if (!S(t)) return J(t);
	var e = [];
	for (var r in Object(t)) V.call(t, r) && "constructor" != r && e.push(r);
	return e;
}, K = function(t) {
	return x(t) ? Y(t) : H(t);
}, W = function(t, e, r) {
	for (var n = -1, o = Object(t), i = r(t), u = i.length; u--;) {
		var c = i[++n];
		if (!1 === e(o[c], c, o)) break;
	}
	return t;
}, Q = function(t, e) {
	return t && W(t, e, K);
}, X = function(e, r) {
	if (null == e) return e;
	if (!x(e)) return Q(e, r);
	for (var n = e.length, o = -1, i = Object(e); (t ? o-- : ++o < n) && !1 !== r(i[o], o, i););
	return e;
}, Z = function(t, e) {
	return (b(t) ? m : X)(t, "function" == typeof e ? e : d);
}, tt = function(t) {
	return void 0 === t;
}, te = function(t, e) {
	return (te = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
		t.__proto__ = e;
	} || function(t, e) {
		for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
	})(t, e);
};
function tr(t, e) {
	if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
	function r() {
		this.constructor = t;
	}
	te(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}
function tn(t, e) {
	var r, n, o, i = {
		label: 0,
		sent: function() {
			if (1 & o[0]) throw o[1];
			return o[1];
		},
		trys: [],
		ops: []
	}, u = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
	return u.next = c(0), u.throw = c(1), u.return = c(2), "function" == typeof Symbol && (u[Symbol.iterator] = function() {
		return this;
	}), u;
	function c(c) {
		return function(s) {
			var a = [c, s];
			if (r) throw TypeError("Generator is already executing.");
			for (; u && (u = 0, a[0] && (i = 0)), i;) try {
				if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
				switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
					case 0:
					case 1:
						o = a;
						break;
					case 4: return i.label++, {
						value: a[1],
						done: !1
					};
					case 5:
						i.label++, n = a[1], a = [0];
						continue;
					case 7:
						a = i.ops.pop(), i.trys.pop();
						continue;
					default:
						if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
							i = 0;
							continue;
						}
						if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
							i.label = a[1];
							break;
						}
						if (6 === a[0] && i.label < o[1]) {
							i.label = o[1], o = a;
							break;
						}
						if (o && i.label < o[2]) {
							i.label = o[2], i.ops.push(a);
							break;
						}
						o[2] && i.ops.pop(), i.trys.pop();
						continue;
				}
				a = e.call(t, i);
			} catch (t) {
				a = [6, t], n = 0;
			} finally {
				r = o = 0;
			}
			if (5 & a[0]) throw a[1];
			return {
				value: a[0] ? a[1] : void 0,
				done: !0
			};
		};
	}
}
function to(t) {
	var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], n = 0;
	if (r) return r.call(t);
	if (t && "number" == typeof t.length) return { next: function() {
		return t && n >= t.length && (t = void 0), {
			value: t && t[n++],
			done: !t
		};
	} };
	throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ti(t, e) {
	var r = "function" == typeof Symbol && t[Symbol.iterator];
	if (!r) return t;
	var n, o, i = r.call(t), u = [];
	try {
		for (; (void 0 === e || e-- > 0) && !(n = i.next()).done;) u.push(n.value);
	} catch (t) {
		o = { error: t };
	} finally {
		try {
			n && !n.done && (r = i.return) && r.call(i);
		} finally {
			if (o) throw o.error;
		}
	}
	return u;
}
function tu(t, e, r) {
	if (r || 2 == arguments.length) for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
	return t.concat(n || Array.prototype.slice.call(e));
}
function tc(t) {
	return this instanceof tc ? (this.v = t, this) : new tc(t);
}
function ts(t) {
	return "function" == typeof t;
}
function ta(t) {
	var e = t(function(t) {
		Error.call(t), t.stack = Error().stack;
	});
	return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e;
}
var tl = ta(function(t) {
	return function(e) {
		t(this), this.message = e ? e.length + " errors occurred during unsubscription:\n" + e.map(function(t, e) {
			return e + 1 + ") " + t.toString();
		}).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = e;
	};
});
function tf(t, e) {
	if (t) {
		var r = t.indexOf(e);
		0 <= r && t.splice(r, 1);
	}
}
var tp = function() {
	var t;
	function e(t) {
		this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
	}
	return e.prototype.unsubscribe = function() {
		if (!this.closed) {
			this.closed = !0;
			var t, e, r, n, o, i = this._parentage;
			if (i) if (this._parentage = null, Array.isArray(i)) try {
				for (var u = to(i), c = u.next(); !c.done; c = u.next()) c.value.remove(this);
			} catch (e) {
				t = { error: e };
			} finally {
				try {
					c && !c.done && (e = u.return) && e.call(u);
				} finally {
					if (t) throw t.error;
				}
			}
			else i.remove(this);
			var s = this.initialTeardown;
			if (ts(s)) try {
				s();
			} catch (t) {
				o = t instanceof tl ? t.errors : [t];
			}
			var a = this._finalizers;
			if (a) {
				this._finalizers = null;
				try {
					for (var l = to(a), f = l.next(); !f.done; f = l.next()) {
						var p = f.value;
						try {
							ty(p);
						} catch (t) {
							o = null != o ? o : [], t instanceof tl ? o = tu(tu([], ti(o)), ti(t.errors)) : o.push(t);
						}
					}
				} catch (t) {
					r = { error: t };
				} finally {
					try {
						f && !f.done && (n = l.return) && n.call(l);
					} finally {
						if (r) throw r.error;
					}
				}
			}
			if (o) throw new tl(o);
		}
	}, e.prototype.add = function(t) {
		var r;
		if (t && t !== this) if (this.closed) ty(t);
		else {
			if (t instanceof e) {
				if (t.closed || t._hasParent(this)) return;
				t._addParent(this);
			}
			(this._finalizers = null != (r = this._finalizers) ? r : []).push(t);
		}
	}, e.prototype._hasParent = function(t) {
		var e = this._parentage;
		return e === t || Array.isArray(e) && e.includes(t);
	}, e.prototype._addParent = function(t) {
		var e = this._parentage;
		this._parentage = Array.isArray(e) ? (e.push(t), e) : e ? [e, t] : t;
	}, e.prototype._removeParent = function(t) {
		var e = this._parentage;
		e === t ? this._parentage = null : Array.isArray(e) && tf(e, t);
	}, e.prototype.remove = function(t) {
		var r = this._finalizers;
		r && tf(r, t), t instanceof e && t._removeParent(this);
	}, (t = new e()).closed = !0, e.EMPTY = t, e;
}(), th = tp.EMPTY;
function tb(t) {
	return t instanceof tp || t && "closed" in t && ts(t.remove) && ts(t.add) && ts(t.unsubscribe);
}
function ty(t) {
	ts(t) ? t() : t.unsubscribe();
}
var td = void 0, tv = {
	setTimeout: function(t, e) {
		for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
		var o = tv.delegate;
		return (null == o ? void 0 : o.setTimeout) ? o.setTimeout.apply(o, tu([t, e], ti(r))) : setTimeout.apply(void 0, tu([t, e], ti(r)));
	},
	clearTimeout: function(t) {
		var e = tv.delegate;
		return ((null == e ? void 0 : e.clearTimeout) || clearTimeout)(t);
	},
	delegate: void 0
};
function tm(t) {
	tv.setTimeout(function() {
		throw t;
	});
}
function t_() {}
var tw = tg("C", void 0, void 0);
function tg(t, e, r) {
	return {
		kind: t,
		value: e,
		error: r
	};
}
function tj(t) {
	t();
}
var tS = function(t) {
	function e(e) {
		var r = t.call(this) || this;
		return r.isStopped = !1, e ? (r.destination = e, tb(e) && e.add(r)) : r.destination = tC, r;
	}
	return tr(e, t), e.create = function(t, e, r) {
		return new tT(t, e, r);
	}, e.prototype.next = function(t) {
		this.isStopped ? tP(tg("N", t, void 0), this) : this._next(t);
	}, e.prototype.error = function(t) {
		this.isStopped ? tP(tg("E", void 0, t), this) : (this.isStopped = !0, this._error(t));
	}, e.prototype.complete = function() {
		this.isStopped ? tP(tw, this) : (this.isStopped = !0, this._complete());
	}, e.prototype.unsubscribe = function() {
		this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
	}, e.prototype._next = function(t) {
		this.destination.next(t);
	}, e.prototype._error = function(t) {
		try {
			this.destination.error(t);
		} finally {
			this.unsubscribe();
		}
	}, e.prototype._complete = function() {
		try {
			this.destination.complete();
		} finally {
			this.unsubscribe();
		}
	}, e;
}(tp);
Function.prototype.bind;
var tI = function() {
	function t(t) {
		this.partialObserver = t;
	}
	return t.prototype.next = function(t) {
		var e = this.partialObserver;
		if (e.next) try {
			e.next(t);
		} catch (t) {
			tE(t);
		}
	}, t.prototype.error = function(t) {
		var e = this.partialObserver;
		if (e.error) try {
			e.error(t);
		} catch (t) {
			tE(t);
		}
		else tE(t);
	}, t.prototype.complete = function() {
		var t = this.partialObserver;
		if (t.complete) try {
			t.complete();
		} catch (t) {
			tE(t);
		}
	}, t;
}(), tT = function(t) {
	function e(e, r, n) {
		var o, u = t.call(this) || this;
		return ts(e) || !e ? o = {
			next: null != e ? e : void 0,
			error: null != r ? r : void 0,
			complete: null != n ? n : void 0
		} : o = e, u.destination = new tI(o), u;
	}
	return tr(e, t), e;
}(tS);
function tE(t) {
	tm(t);
}
function tP(t, e) {}
var tC = {
	closed: !0,
	next: t_,
	error: function(t) {
		throw t;
	},
	complete: t_
}, tF = "function" == typeof Symbol && Symbol.observable || "@@observable";
function tk(t) {
	return t;
}
function t$() {
	for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
	return tU(t);
}
function tU(t) {
	return 0 === t.length ? tk : 1 === t.length ? t[0] : function(e) {
		return t.reduce(function(t, e) {
			return e(t);
		}, e);
	};
}
var tz = function() {
	function t(t) {
		t && (this._subscribe = t);
	}
	return t.prototype.lift = function(e) {
		var r = new t();
		return r.source = this, r.operator = e, r;
	}, t.prototype.subscribe = function(t, e, r) {
		var n = this, o = !function(t) {
			return t && t instanceof tS || t && ts(t.next) && ts(t.error) && ts(t.complete) && tb(t);
		}(t) ? new tT(t, e, r) : t;
		return tj(function() {
			var t = n.operator, e = n.source;
			o.add(t ? t.call(o, e) : e ? n._subscribe(o) : n._trySubscribe(o));
		}), o;
	}, t.prototype._trySubscribe = function(t) {
		try {
			return this._subscribe(t);
		} catch (e) {
			t.error(e);
		}
	}, t.prototype.forEach = function(t, e) {
		var r = this;
		return new (e = (tq(e)))(function(e, n) {
			var o = new tT({
				next: function(e) {
					try {
						t(e);
					} catch (t) {
						n(t), o.unsubscribe();
					}
				},
				error: n,
				complete: e
			});
			r.subscribe(o);
		});
	}, t.prototype._subscribe = function(t) {
		var e;
		return null == (e = this.source) ? void 0 : e.subscribe(t);
	}, t.prototype[tF] = function() {
		return this;
	}, t.prototype.pipe = function() {
		for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
		return tU(t)(this);
	}, t.prototype.toPromise = function(t) {
		var e = this;
		return new (t = (tq(t)))(function(t, r) {
			var n;
			e.subscribe(function(t) {
				return n = t;
			}, function(t) {
				return r(t);
			}, function() {
				return t(n);
			});
		});
	}, t.create = function(e) {
		return new t(e);
	}, t;
}();
function tq(t) {
	var e;
	return null != (e = null != t ? t : td) ? e : Promise;
}
function tR(t) {
	return function(e) {
		if (ts(null == e ? void 0 : e.lift)) return e.lift(function(e) {
			try {
				return t(e, this);
			} catch (t) {
				this.error(t);
			}
		});
		throw TypeError("Unable to lift unknown Observable type");
	};
}
function tB(t, e, r, n, o) {
	return new tL(t, e, r, n, o);
}
var tL = function(t) {
	function e(e, r, n, o, i, u) {
		var c = t.call(this, e) || this;
		return c.onFinalize = i, c.shouldUnsubscribe = u, c._next = r ? function(t) {
			try {
				r(t);
			} catch (t) {
				e.error(t);
			}
		} : t.prototype._next, c._error = o ? function(t) {
			try {
				o(t);
			} catch (t) {
				e.error(t);
			} finally {
				this.unsubscribe();
			}
		} : t.prototype._error, c._complete = n ? function() {
			try {
				n();
			} catch (t) {
				e.error(t);
			} finally {
				this.unsubscribe();
			}
		} : t.prototype._complete, c;
	}
	return tr(e, t), e.prototype.unsubscribe = function() {
		var e;
		if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
			var r = this.closed;
			t.prototype.unsubscribe.call(this), r || null == (e = this.onFinalize) || e.call(this);
		}
	}, e;
}(tS), tN = ta(function(t) {
	return function() {
		t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
	};
}), tD = function(t) {
	function e() {
		var e = t.call(this) || this;
		return e.closed = !1, e.currentObservers = null, e.observers = [], e.isStopped = !1, e.hasError = !1, e.thrownError = null, e;
	}
	return tr(e, t), e.prototype.lift = function(t) {
		var e = new tM(this, this);
		return e.operator = t, e;
	}, e.prototype._throwIfClosed = function() {
		if (this.closed) throw new tN();
	}, e.prototype.next = function(t) {
		var e = this;
		tj(function() {
			var r, n;
			if (e._throwIfClosed(), !e.isStopped) {
				e.currentObservers || (e.currentObservers = Array.from(e.observers));
				try {
					for (var o = to(e.currentObservers), i = o.next(); !i.done; i = o.next()) i.value.next(t);
				} catch (t) {
					r = { error: t };
				} finally {
					try {
						i && !i.done && (n = o.return) && n.call(o);
					} finally {
						if (r) throw r.error;
					}
				}
			}
		});
	}, e.prototype.error = function(t) {
		var e = this;
		tj(function() {
			if (e._throwIfClosed(), !e.isStopped) {
				e.hasError = e.isStopped = !0, e.thrownError = t;
				for (var r = e.observers; r.length;) r.shift().error(t);
			}
		});
	}, e.prototype.complete = function() {
		var t = this;
		tj(function() {
			if (t._throwIfClosed(), !t.isStopped) {
				t.isStopped = !0;
				for (var e = t.observers; e.length;) e.shift().complete();
			}
		});
	}, e.prototype.unsubscribe = function() {
		this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
	}, Object.defineProperty(e.prototype, "observed", {
		get: function() {
			var t;
			return (null == (t = this.observers) ? void 0 : t.length) > 0;
		},
		enumerable: !1,
		configurable: !0
	}), e.prototype._trySubscribe = function(e) {
		return this._throwIfClosed(), t.prototype._trySubscribe.call(this, e);
	}, e.prototype._subscribe = function(t) {
		return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
	}, e.prototype._innerSubscribe = function(t) {
		var e = this, r = this.hasError, n = this.isStopped, o = this.observers;
		return r || n ? th : (this.currentObservers = null, o.push(t), new tp(function() {
			e.currentObservers = null, tf(o, t);
		}));
	}, e.prototype._checkFinalizedStatuses = function(t) {
		var e = this.hasError, r = this.thrownError, n = this.isStopped;
		e ? t.error(r) : n && t.complete();
	}, e.prototype.asObservable = function() {
		var t = new tz();
		return t.source = this, t;
	}, e.create = function(t, e) {
		return new tM(t, e);
	}, e;
}(tz), tM = function(t) {
	function e(e, r) {
		var n = t.call(this) || this;
		return n.destination = e, n.source = r, n;
	}
	return tr(e, t), e.prototype.next = function(t) {
		var e, r;
		null == (r = null == (e = this.destination) ? void 0 : e.next) || r.call(e, t);
	}, e.prototype.error = function(t) {
		var e, r;
		null == (r = null == (e = this.destination) ? void 0 : e.error) || r.call(e, t);
	}, e.prototype.complete = function() {
		var t, e;
		null == (e = null == (t = this.destination) ? void 0 : t.complete) || e.call(t);
	}, e.prototype._subscribe = function(t) {
		var e, r;
		return null != (r = null == (e = this.source) ? void 0 : e.subscribe(t)) ? r : th;
	}, e;
}(tD), tY = function(t) {
	function e(e) {
		var r = t.call(this) || this;
		return r._value = e, r;
	}
	return tr(e, t), Object.defineProperty(e.prototype, "value", {
		get: function() {
			return this.getValue();
		},
		enumerable: !1,
		configurable: !0
	}), e.prototype._subscribe = function(e) {
		var r = t.prototype._subscribe.call(this, e);
		return r.closed || e.next(this._value), r;
	}, e.prototype.getValue = function() {
		var t = this.hasError, e = this.thrownError, r = this._value;
		if (t) throw e;
		return this._throwIfClosed(), r;
	}, e.prototype.next = function(e) {
		t.prototype.next.call(this, this._value = e);
	}, e;
}(tD);
function tG(t) {
	return t && ts(t.schedule);
}
function tJ(t) {
	return t[t.length - 1];
}
function tV(t) {
	return ts(tJ(t)) ? t.pop() : void 0;
}
function tH(t) {
	return tG(tJ(t)) ? t.pop() : void 0;
}
function tK(t, e) {
	return "number" == typeof tJ(t) ? t.pop() : e;
}
var tW = function(t) {
	return t && "number" == typeof t.length && "function" != typeof t;
};
function tQ(t) {
	return ts(null == t ? void 0 : t.then);
}
function tX(t) {
	return Symbol.asyncIterator && ts(null == t ? void 0 : t[Symbol.asyncIterator]);
}
function tZ(t) {
	return TypeError("You provided " + (null !== t && "object" == typeof t ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
var t0 = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
function t1(t) {
	return ts(null == t ? void 0 : t[t0]);
}
function t2(t) {
	return function(t, e, r) {
		if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
		var n, o = r.apply(t, e || []), i = [];
		return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", function(t) {
			return function(e) {
				return Promise.resolve(e).then(t, a);
			};
		}), n[Symbol.asyncIterator] = function() {
			return this;
		}, n;
		function u(t, e) {
			o[t] && (n[t] = function(e) {
				return new Promise(function(r, n) {
					i.push([
						t,
						e,
						r,
						n
					]) > 1 || c(t, e);
				});
			}, e && (n[t] = e(n[t])));
		}
		function c(t, e) {
			try {
				var r;
				(r = o[t](e)).value instanceof tc ? Promise.resolve(r.value.v).then(s, a) : l(i[0][2], r);
			} catch (t) {
				l(i[0][3], t);
			}
		}
		function s(t) {
			c("next", t);
		}
		function a(t) {
			c("throw", t);
		}
		function l(t, e) {
			t(e), i.shift(), i.length && c(i[0][0], i[0][1]);
		}
	}(this, arguments, function() {
		var e, r, n;
		return tn(this, function(o) {
			switch (o.label) {
				case 0: e = t.getReader(), o.label = 1;
				case 1: o.trys.push([
					1,
					,
					9,
					10
				]), o.label = 2;
				case 2: return [4, tc(e.read())];
				case 3:
					if (n = (r = o.sent()).value, !r.done) return [3, 5];
					return [4, tc(void 0)];
				case 4: return [2, o.sent()];
				case 5: return [4, tc(n)];
				case 6: return [4, o.sent()];
				case 7: return o.sent(), [3, 2];
				case 8: return [3, 10];
				case 9: return e.releaseLock(), [7];
				case 10: return [2];
			}
		});
	});
}
function t3(t) {
	return ts(null == t ? void 0 : t.getReader);
}
function t4(t) {
	if (t instanceof tz) return t;
	if (null != t) {
		var e, r, n, o;
		if (ts(t[tF])) return e = t, new tz(function(t) {
			var r = e[tF]();
			if (ts(r.subscribe)) return r.subscribe(t);
			throw TypeError("Provided object does not correctly implement Symbol.observable");
		});
		if (tW(t)) return r = t, new tz(function(t) {
			for (var e = 0; e < r.length && !t.closed; e++) t.next(r[e]);
			t.complete();
		});
		if (tQ(t)) return n = t, new tz(function(t) {
			n.then(function(e) {
				t.closed || (t.next(e), t.complete());
			}, function(e) {
				return t.error(e);
			}).then(null, tm);
		});
		if (tX(t)) return t6(t);
		if (t1(t)) return o = t, new tz(function(t) {
			var e, r;
			try {
				for (var n = to(o), i = n.next(); !i.done; i = n.next()) {
					var u = i.value;
					if (t.next(u), t.closed) return;
				}
			} catch (t) {
				e = { error: t };
			} finally {
				try {
					i && !i.done && (r = n.return) && r.call(n);
				} finally {
					if (e) throw e.error;
				}
			}
			t.complete();
		});
		if (t3(t)) return t6(t2(t));
	}
	throw tZ(t);
}
function t6(t) {
	return new tz(function(e) {
		(function(t, e) {
			var r, n, o, i, u, c, s, a;
			return u = this, c = void 0, s = void 0, a = function() {
				var u;
				return tn(this, function(c) {
					switch (c.label) {
						case 0: c.trys.push([
							0,
							5,
							6,
							11
						]), r = function(t) {
							if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
							var e, r = t[Symbol.asyncIterator];
							return r ? r.call(t) : (t = to(t), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
								return this;
							}, e);
							function n(r) {
								e[r] = t[r] && function(e) {
									return new Promise(function(n, o) {
										var i = n, u = o, c = (e = t[r](e)).done;
										Promise.resolve(e.value).then(function(t) {
											i({
												value: t,
												done: c
											});
										}, u);
									});
								};
							}
						}(t), c.label = 1;
						case 1: return [4, r.next()];
						case 2:
							if ((n = c.sent()).done) return [3, 4];
							if (u = n.value, e.next(u), e.closed) return [2];
							c.label = 3;
						case 3: return [3, 1];
						case 4: return [3, 11];
						case 5: return o = { error: c.sent() }, [3, 11];
						case 6:
							if (c.trys.push([
								6,
								,
								9,
								10
							]), !(n && !n.done && (i = r.return))) return [3, 8];
							return [4, i.call(r)];
						case 7: c.sent(), c.label = 8;
						case 8: return [3, 10];
						case 9:
							if (o) throw o.error;
							return [7];
						case 10: return [7];
						case 11: return e.complete(), [2];
					}
				});
			}, new (s || (s = Promise))(function(t, e) {
				function r(t) {
					try {
						o(a.next(t));
					} catch (t) {
						e(t);
					}
				}
				function n(t) {
					try {
						o(a.throw(t));
					} catch (t) {
						e(t);
					}
				}
				function o(e) {
					var o;
					e.done ? t(e.value) : ((o = e.value) instanceof s ? o : new s(function(t) {
						t(o);
					})).then(r, n);
				}
				o((a = a.apply(u, c || [])).next());
			});
		})(t, e).catch(function(t) {
			return e.error(t);
		});
	});
}
function t8(t, e, r, n, o) {
	void 0 === n && (n = 0), void 0 === o && (o = !1);
	var i = e.schedule(function() {
		r(), o ? t.add(this.schedule(null, n)) : this.unsubscribe();
	}, n);
	if (t.add(i), !o) return i;
}
function t5(t, e) {
	return void 0 === e && (e = 0), tR(function(r, n) {
		r.subscribe(tB(n, function(r) {
			return t8(n, t, function() {
				return n.next(r);
			}, e);
		}, function() {
			return t8(n, t, function() {
				return n.complete();
			}, e);
		}, function(r) {
			return t8(n, t, function() {
				return n.error(r);
			}, e);
		}));
	});
}
function t7(t, e) {
	return void 0 === e && (e = 0), tR(function(r, n) {
		n.add(t.schedule(function() {
			return r.subscribe(n);
		}, e));
	});
}
function t9(t, e) {
	if (!t) throw Error("Iterable cannot be null");
	return new tz(function(r) {
		t8(r, e, function() {
			var n = t[Symbol.asyncIterator]();
			t8(r, e, function() {
				n.next().then(function(t) {
					t.done ? r.complete() : r.next(t.value);
				});
			}, 0, !0);
		});
	});
}
function et(t, e) {
	return e ? function(t, e) {
		if (null != t) {
			if (ts(t[tF])) return t4(t).pipe(t7(e), t5(e));
			if (tW(t)) return new tz(function(r) {
				var n = 0;
				return e.schedule(function() {
					n === t.length ? r.complete() : (r.next(t[n++]), r.closed || this.schedule());
				});
			});
			if (tQ(t)) return t4(t).pipe(t7(e), t5(e));
			if (tX(t)) return t9(t, e);
			if (t1(t)) return new tz(function(r) {
				var n;
				return t8(r, e, function() {
					n = t[t0](), t8(r, e, function() {
						var t, e, o;
						try {
							e = (t = n.next()).value, o = t.done;
						} catch (t) {
							r.error(t);
							return;
						}
						o ? r.complete() : r.next(e);
					}, 0, !0);
				}), function() {
					return ts(null == n ? void 0 : n.return) && n.return();
				};
			});
			if (t3(t)) return t9(t2(t), e);
		}
		throw tZ(t);
	}(t, e) : t4(t);
}
function ee() {
	for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
	var r = tH(t);
	return et(t, r);
}
function er(t, e) {
	return tR(function(r, n) {
		var o = 0;
		r.subscribe(tB(n, function(r) {
			n.next(t.call(e, r, o++));
		}));
	});
}
function en(t, e, r) {
	return (void 0 === r && (r = Infinity), ts(e)) ? en(function(r, n) {
		return er(function(t, o) {
			return e(r, t, n, o);
		})(t4(t(r, n)));
	}, r) : ("number" == typeof e && (r = e), tR(function(e, n) {
		var o, i, u, c, s, a, l, f, p;
		return o = r, u = [], c = 0, s = 0, a = !1, l = function() {
			!a || u.length || c || n.complete();
		}, f = function(t) {
			return c < o ? p(t) : u.push(t);
		}, p = function(e) {
			c++;
			var r = !1;
			t4(t(e, s++)).subscribe(tB(n, function(t) {
				i ? f(t) : n.next(t);
			}, function() {
				r = !0;
			}, void 0, function() {
				if (r) try {
					for (c--; u.length && c < o;) (function() {
						var t = u.shift();
						p(t);
					})();
					l();
				} catch (t) {
					n.error(t);
				}
			}));
		}, e.subscribe(tB(n, f, function() {
			a = !0, l();
		})), function() {};
	}));
}
function eo() {
	return tR(function(t, e) {
		t.subscribe(tB(e, t_));
	});
}
function ei(t, e, r) {
	var n = ts(t) || e || r ? {
		next: t,
		error: e,
		complete: r
	} : t;
	return n ? tR(function(t, e) {
		null == (r = n.subscribe) || r.call(n);
		var r, o = !0;
		t.subscribe(tB(e, function(t) {
			var r;
			null == (r = n.next) || r.call(n, t), e.next(t);
		}, function() {
			var t;
			o = !1, null == (t = n.complete) || t.call(n), e.complete();
		}, function(t) {
			var r;
			o = !1, null == (r = n.error) || r.call(n, t), e.error(t);
		}, function() {
			var t, e;
			o && (null == (t = n.unsubscribe) || t.call(n)), null == (e = n.finalize) || e.call(n);
		}));
	}) : tk;
}
var eu = (t, e) => new ec(t, e), ec = class extends tz {
	constructor(t, e) {
		super((t) => this._success$.subscribe(t)), this.createConfig = t, this.fetcher = e;
	}
	requesting$ = new tY(!1);
	error$ = new tD();
	_success$ = new tD();
	_input$ = new tD();
	get operationID() {
		return this.createConfig.operationID;
	}
	unsubscribe = this._input$.pipe(en((t) => (this.requesting$.next(!0), et(this.fetcher.request(this.createConfig(t))).pipe(ei((t) => this._success$.next(t)), function t(e) {
		return tR(function(r, n) {
			var o, i = null, u = !1;
			i = r.subscribe(tB(n, void 0, void 0, function(c) {
				o = t4(e(c, t(e)(r))), i ? (i.unsubscribe(), i = null, o.subscribe(n)) : u = !0;
			})), u && (i.unsubscribe(), i = null, o.subscribe(n));
		});
	}((t) => (this.error$.next(t), ee(t)))))), ei(() => {
		this.requesting$.next(!1);
	}), eo()).subscribe();
	_prevInputs;
	next = (t) => {
		let e = v(t) ? t(this._prevInputs) : t;
		this._prevInputs = e, this._input$.next(e);
	};
	toHref = (t) => this.fetcher.toHref(this.createConfig(t));
}, es = (t = {}) => t["Content-Type"] || t["content-type"] || "", ea = (t) => {
	let e = new URLSearchParams(), r = (t, n) => b(n) ? void Z(n, (e) => {
		r(t, e);
	}) : y(n) ? void r(t, JSON.stringify(n)) : void (!tt(n) && 0 !== `${n}`.length && e.append(t, `${n}`));
	return Z(t, (t, e) => {
		r(e, t);
	}), e.toString();
}, el = (t, e) => {
	if (es(e).includes("multipart/form-data")) {
		((t = {}) => {
			t["Content-Type"] && (t["Content-Type"] = void 0), t["content-type"] && (t["content-type"] = void 0);
		})(e);
		let r = new FormData(), n = (t, e) => {
			e instanceof File || e instanceof Blob ? r.append(t, e) : b(e) ? Z(e, (e) => n(t, e)) : y(e) ? r.append(t, JSON.stringify(e)) : r.append(t, e);
		};
		return Z(t, (t, e) => n(e, t)), r;
	}
	return es(e).includes("application/x-www-form-urlencoded") ? ea(t) : es(e).includes("application/octet-stream") ? t : b(t) || y(t) ? JSON.stringify(t) : t;
}, ef = ({ paramsSerializer: t, transformRequestBody: e }) => {
	let r = (e) => {
		let r = t(e.params);
		return r.length && !r.startsWith("?") && (r = "?" + r), `${e.url}${r}`;
	}, n = (t) => e(t.body, t.headers || {});
	return {
		build: (t) => t,
		toRequestBody: n,
		toHref: r,
		request: (t) => fetch(r(t), {
			method: t.method,
			headers: t.headers || {},
			body: n(t)
		}).then(async (e) => {
			let r;
			r = e.headers.get("Content-Type")?.includes("application/json") ? await e.json() : e.headers.get("Content-Type")?.includes("application/octet-stream") ? await e.blob() : await e.text();
			let n = {
				config: t,
				status: e.status,
				headers: {}
			};
			for (let [t, r] of Object.entries(e.headers ?? {})) n.headers[t] = r;
			return n.body = r, n;
		}).then((t) => {
			if (t.status >= 400) throw t.error = t.body, t;
			return t;
		})
	};
};
export { p as $, tu as A, z as B, t$ as C, ts as D, tf as E, H as F, g as G, P as H, G as I, v as J, w as K, Y as L, X as M, Q as N, tr as O, K as P, h as Q, D as R, tz as S, tp as T, S as U, $ as V, x as W, y as X, d as Y, b as Z, tG as _, ei as a, tB as b, er as c, t8 as d, o as et, t4 as f, tH as g, tV as h, el as i, tt as j, ti as k, ee as l, tK as m, eu as n, eo as o, tW as p, m as q, ea as r, en as s, ef as t, n as tt, et as u, tY as v, tk as w, tR as x, tD as y, L as z };
