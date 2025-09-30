import { A as n, D as t, E as e, O as r, S as i, T as u, _ as o, b as s, c, d as a, f as l, g as f, h as d, k as h, m as v, o as p, p as y, s as b, u as g, w, x as m } from "./vendor-innoai-tech-fetcher.BFkhBuB3.chunk.js";
var I = {
	now: function() {
		return (I.delegate || Date).now();
	},
	delegate: void 0
}, x = function(n) {
	function t(t, e) {
		return n.call(this) || this;
	}
	return r(t, n), t.prototype.schedule = function(n, t) {
		return void 0 === t && (t = 0), this;
	}, t;
}(u), A = {
	setInterval: function(t, e) {
		for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
		var u = A.delegate;
		return (null == u ? void 0 : u.setInterval) ? u.setInterval.apply(u, n([t, e], h(r))) : setInterval.apply(void 0, n([t, e], h(r)));
	},
	clearInterval: function(n) {
		var t = A.delegate;
		return ((null == t ? void 0 : t.clearInterval) || clearInterval)(n);
	},
	delegate: void 0
}, k = function(n) {
	function t(t, e) {
		var r = n.call(this, t, e) || this;
		return r.scheduler = t, r.work = e, r.pending = !1, r;
	}
	return r(t, n), t.prototype.schedule = function(n, t) {
		if (void 0 === t && (t = 0), this.closed) return this;
		this.state = n;
		var e, r = this.id, i = this.scheduler;
		return null != r && (this.id = this.recycleAsyncId(i, r, t)), this.pending = !0, this.delay = t, this.id = null != (e = this.id) ? e : this.requestAsyncId(i, this.id, t), this;
	}, t.prototype.requestAsyncId = function(n, t, e) {
		return void 0 === e && (e = 0), A.setInterval(n.flush.bind(n, this), e);
	}, t.prototype.recycleAsyncId = function(n, t, e) {
		if (void 0 === e && (e = 0), null != e && this.delay === e && !1 === this.pending) return t;
		null != t && A.clearInterval(t);
	}, t.prototype.execute = function(n, t) {
		if (this.closed) return Error("executing a cancelled action");
		this.pending = !1;
		var e = this._execute(n, t);
		if (e) return e;
		!1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
	}, t.prototype._execute = function(n, t) {
		var e, r = !1;
		try {
			this.work(n);
		} catch (n) {
			r = !0, e = n || Error("Scheduled action threw falsy error");
		}
		if (r) return this.unsubscribe(), e;
	}, t.prototype.unsubscribe = function() {
		if (!this.closed) {
			var t = this.id, r = this.scheduler, i = r.actions;
			this.work = this.state = this.scheduler = null, this.pending = !1, e(i, this), null != t && (this.id = this.recycleAsyncId(r, t, null)), this.delay = null, n.prototype.unsubscribe.call(this);
		}
	}, t;
}(x), E = function() {
	function n(t, e) {
		void 0 === e && (e = n.now), this.schedulerActionCtor = t, this.now = e;
	}
	return n.prototype.schedule = function(n, t, e) {
		return void 0 === t && (t = 0), new this.schedulerActionCtor(this, n).schedule(e, t);
	}, n.now = I.now, n;
}(), L = new (function(n) {
	function t(t, e) {
		void 0 === e && (e = E.now);
		var r = n.call(this, t, e) || this;
		return r.actions = [], r._active = !1, r;
	}
	return r(t, n), t.prototype.flush = function(n) {
		var t, e = this.actions;
		if (this._active) return void e.push(n);
		this._active = !0;
		do
			if (t = n.execute(n.state, n.delay)) break;
		while (n = e.shift());
		if (this._active = !1, t) {
			for (; n = e.shift();) n.unsubscribe();
			throw t;
		}
	}, t;
}(E))(k), _ = new i(function(n) {
	return n.complete();
});
function O(n) {
	return !!n && (n instanceof i || t(n.lift) && t(n.subscribe));
}
var j = Array.isArray;
function T(t) {
	return c(function(e) {
		return j(e) ? t.apply(void 0, n([], h(e))) : t(e);
	});
}
var C = Array.isArray, D = Object.getPrototypeOf, q = Object.prototype, M = Object.keys;
function N() {
	for (var n, t, e, r = [], u = 0; u < arguments.length; u++) r[u] = arguments[u];
	var o = f(r), c = d(r), l = function(n) {
		if (1 === n.length) {
			var t, e = n[0];
			if (C(e)) return {
				args: e,
				keys: null
			};
			if ((t = e) && "object" == typeof t && D(t) === q) {
				var r = M(e);
				return {
					args: r.map(function(n) {
						return e[n];
					}),
					keys: r
				};
			}
		}
		return {
			args: n,
			keys: null
		};
	}(r), h = l.args, v = l.keys;
	if (0 === h.length) return g([], o);
	var p = new i((n = h, t = o, void 0 === (e = v ? function(n) {
		return v.reduce(function(t, e, r) {
			return t[e] = n[r], t;
		}, {});
	} : w) && (e = w), function(r) {
		(function(n, t, e) {
			n ? a(e, n, t) : t();
		})(t, function() {
			for (var i = n.length, u = Array(i), o = i, c = i, l = function(i) {
				(function(n, t, e) {
					n ? a(e, n, t) : t();
				})(t, function() {
					var a = g(n[i], t), l = !1;
					a.subscribe(s(r, function(n) {
						u[i] = n, !l && (l = !0, c--), c || r.next(e(u.slice()));
					}, function() {
						--o || r.complete();
					}));
				}, r);
			}, f = 0; f < i; f++) l(f);
		}, r);
	}));
	return c ? p.pipe(T(c)) : p;
}
function P(n) {
	return void 0 === n && (n = Infinity), b(w, n);
}
var S = ["addListener", "removeListener"], U = ["addEventListener", "removeEventListener"], Y = ["on", "off"];
function z(n, e, r, u) {
	if (t(r) && (u = r, r = void 0), u) return z(n, e, r).pipe(T(u));
	var o, s, c, a = h(t((o = n).addEventListener) && t(o.removeEventListener) ? U.map(function(t) {
		return function(i) {
			return n[t](e, i, r);
		};
	}) : t((s = n).addListener) && t(s.removeListener) ? S.map(B(n, e)) : t((c = n).on) && t(c.off) ? Y.map(B(n, e)) : [], 2), f = a[0], d = a[1];
	if (!f && y(n)) return b(function(n) {
		return z(n, e, r);
	})(l(n));
	if (!f) throw TypeError("Invalid event target");
	return new i(function(n) {
		var t = function() {
			for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
			return n.next(1 < t.length ? t : t[0]);
		};
		return f(t), function() {
			return d(t);
		};
	});
}
function B(n, t) {
	return function(e) {
		return function(r) {
			return n[e](t, r);
		};
	};
}
function F(n, t, e) {
	void 0 === n && (n = 0), void 0 === e && (e = L);
	var r = -1;
	return null != t && (o(t) ? e = t : r = t), new i(function(t) {
		var i, u = (i = n) instanceof Date && !isNaN(i) ? n - e.now() : n;
		u < 0 && (u = 0);
		var o = 0;
		return e.schedule(function() {
			t.closed || (t.next(o++), 0 <= r ? this.schedule(void 0, r) : t.complete());
		}, u);
	});
}
function G() {
	for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
	var e = f(n), r = v(n, Infinity);
	return n.length ? 1 === n.length ? l(n[0]) : P(r)(g(n, e)) : _;
}
function H(n, t) {
	return m(function(e, r) {
		var i = 0;
		e.subscribe(s(r, function(e) {
			return n.call(t, e, i++) && r.next(e);
		}));
	});
}
function J(n, t) {
	return void 0 === t && (t = L), m(function(e, r) {
		var i = null, u = null, o = null, c = function() {
			if (i) {
				i.unsubscribe(), i = null;
				var n = u;
				u = null, r.next(n);
			}
		};
		function a() {
			var e = o + n, u = t.now();
			if (u < e) {
				i = this.schedule(void 0, e - u), r.add(i);
				return;
			}
			c();
		}
		e.subscribe(s(r, function(e) {
			u = e, o = t.now(), i || (i = t.schedule(a, n), r.add(i));
		}, function() {
			c(), r.complete();
		}, void 0, function() {
			u = i = null;
		}));
	});
}
function K(n) {
	return n <= 0 ? function() {
		return _;
	} : m(function(t, e) {
		var r = 0;
		t.subscribe(s(e, function(t) {
			++r <= n && (e.next(t), n <= r && e.complete());
		}));
	});
}
function Q(n, t) {
	void 0 === t && (t = L);
	var e = F(n, t);
	return function n(t, e) {
		return e ? function(r) {
			return function() {
				for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
				return P(1)(g(n, f(n)));
			}(e.pipe(K(1), p()), r.pipe(n(t)));
		} : b(function(n, e) {
			return l(t(n, e)).pipe(K(1), c(function() {
				return n;
			}));
		});
	}(function() {
		return e;
	});
}
function R(n, t) {
	return void 0 === t && (t = w), n = null != n ? n : V, m(function(e, r) {
		var i, u = !0;
		e.subscribe(s(r, function(e) {
			var o = t(e);
			(u || !n(i, o)) && (u = !1, i = o, r.next(e));
		}));
	});
}
function V(n, t) {
	return n === t;
}
function W(n) {
	return H(function(t, e) {
		return n <= e;
	});
}
function X(n, t) {
	return m(function(e, r) {
		var i = null, u = 0, o = !1, c = function() {
			return o && !i && r.complete();
		};
		e.subscribe(s(r, function(e) {
			i?.unsubscribe();
			var o = 0, a = u++;
			l(n(e, a)).subscribe(i = s(r, function(n) {
				return r.next(t ? t(e, n, a, o++) : n);
			}, function() {
				i = null, c();
			}));
		}, function() {
			o = !0, c();
		}));
	});
}
export { J as a, F as c, O as d, _ as f, Q as i, z as l, W as n, H as o, R as r, G as s, X as t, N as u };
