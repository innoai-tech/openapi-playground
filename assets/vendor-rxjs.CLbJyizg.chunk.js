var t = function(r, n) {
	return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
		t.__proto__ = r;
	} || function(t, r) {
		for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
	})(r, n);
};
function r(r, n) {
	if ("function" != typeof n && null !== n) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
	function e() {
		this.constructor = r;
	}
	t(r, n), r.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e());
}
function n(t, r) {
	var n = {};
	for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && 0 > r.indexOf(e) && (n[e] = t[e]);
	if (null != t && "function" == typeof Object.getOwnPropertySymbols) for (var o = 0, e = Object.getOwnPropertySymbols(t); o < e.length; o++) 0 > r.indexOf(e[o]) && Object.prototype.propertyIsEnumerable.call(t, e[o]) && (n[e[o]] = t[e[o]]);
	return n;
}
function e(t, r) {
	var n, e, o, i, u = {
		label: 0,
		sent: function() {
			if (1 & o[0]) throw o[1];
			return o[1];
		},
		trys: [],
		ops: []
	};
	return i = {
		next: c(0),
		throw: c(1),
		return: c(2)
	}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
		return this;
	}), i;
	function c(i) {
		return function(c) {
			var s = [i, c];
			if (n) throw TypeError("Generator is already executing.");
			for (; u;) try {
				if (n = 1, e && (o = 2 & s[0] ? e.return : s[0] ? e.throw || ((o = e.return) && o.call(e), 0) : e.next) && !(o = o.call(e, s[1])).done) return o;
				switch (e = 0, o && (s = [2 & s[0], o.value]), s[0]) {
					case 0:
					case 1:
						o = s;
						break;
					case 4: return u.label++, {
						value: s[1],
						done: !1
					};
					case 5:
						u.label++, e = s[1], s = [0];
						continue;
					case 7:
						s = u.ops.pop(), u.trys.pop();
						continue;
					default:
						if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
							u = 0;
							continue;
						}
						if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
							u.label = s[1];
							break;
						}
						if (6 === s[0] && u.label < o[1]) {
							u.label = o[1], o = s;
							break;
						}
						if (o && u.label < o[2]) {
							u.label = o[2], u.ops.push(s);
							break;
						}
						o[2] && u.ops.pop(), u.trys.pop();
						continue;
				}
				s = r.call(t, u);
			} catch (t) {
				s = [6, t], e = 0;
			} finally {
				n = o = 0;
			}
			if (5 & s[0]) throw s[1];
			return {
				value: s[0] ? s[1] : void 0,
				done: !0
			};
		};
	}
}
function o(t) {
	var r = "function" == typeof Symbol && Symbol.iterator, n = r && t[r], e = 0;
	if (n) return n.call(t);
	if (t && "number" == typeof t.length) return { next: function() {
		return t && e >= t.length && (t = void 0), {
			value: t && t[e++],
			done: !t
		};
	} };
	throw TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function i(t, r) {
	var n = "function" == typeof Symbol && t[Symbol.iterator];
	if (!n) return t;
	var e, o, i = n.call(t), u = [];
	try {
		for (; (void 0 === r || r-- > 0) && !(e = i.next()).done;) u.push(e.value);
	} catch (t) {
		o = { error: t };
	} finally {
		try {
			e && !e.done && (n = i.return) && n.call(i);
		} finally {
			if (o) throw o.error;
		}
	}
	return u;
}
function u(t, r, n) {
	if (n || 2 == arguments.length) for (var e, o = 0, i = r.length; o < i; o++) !e && o in r || (e || (e = Array.prototype.slice.call(r, 0, o)), e[o] = r[o]);
	return t.concat(e || Array.prototype.slice.call(r));
}
function c(t) {
	return this instanceof c ? (this.v = t, this) : new c(t);
}
function s(t) {
	return "function" == typeof t;
}
function a(t) {
	var r = t(function(t) {
		Error.call(t), t.stack = Error().stack;
	});
	return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var l = a(function(t) {
	return function(r) {
		t(this), this.message = r ? r.length + " errors occurred during unsubscription:\n" + r.map(function(t, r) {
			return r + 1 + ") " + t.toString();
		}).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = r;
	};
});
function f(t, r) {
	if (t) {
		var n = t.indexOf(r);
		0 <= n && t.splice(n, 1);
	}
}
var h = function() {
	var t;
	function r(t) {
		this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
	}
	return r.prototype.unsubscribe = function() {
		if (!this.closed) {
			this.closed = !0;
			var t, r, n, e, c, a = this._parentage;
			if (a) if (this._parentage = null, Array.isArray(a)) try {
				for (var f = o(a), h = f.next(); !h.done; h = f.next()) h.value.remove(this);
			} catch (r) {
				t = { error: r };
			} finally {
				try {
					h && !h.done && (r = f.return) && r.call(f);
				} finally {
					if (t) throw t.error;
				}
			}
			else a.remove(this);
			var p = this.initialTeardown;
			if (s(p)) try {
				p();
			} catch (t) {
				c = t instanceof l ? t.errors : [t];
			}
			var v = this._finalizers;
			if (v) {
				this._finalizers = null;
				try {
					for (var b = o(v), y = b.next(); !y.done; y = b.next()) {
						var m = y.value;
						try {
							d(m);
						} catch (t) {
							c = null != c ? c : [], t instanceof l ? c = u(u([], i(c)), i(t.errors)) : c.push(t);
						}
					}
				} catch (t) {
					n = { error: t };
				} finally {
					try {
						y && !y.done && (e = b.return) && e.call(b);
					} finally {
						if (n) throw n.error;
					}
				}
			}
			if (c) throw new l(c);
		}
	}, r.prototype.add = function(t) {
		var n;
		if (t && t !== this) if (this.closed) d(t);
		else {
			if (t instanceof r) {
				if (t.closed || t._hasParent(this)) return;
				t._addParent(this);
			}
			(this._finalizers = null != (n = this._finalizers) ? n : []).push(t);
		}
	}, r.prototype._hasParent = function(t) {
		var r = this._parentage;
		return r === t || Array.isArray(r) && r.includes(t);
	}, r.prototype._addParent = function(t) {
		var r = this._parentage;
		this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t;
	}, r.prototype._removeParent = function(t) {
		var r = this._parentage;
		r === t ? this._parentage = null : Array.isArray(r) && f(r, t);
	}, r.prototype.remove = function(t) {
		var n = this._finalizers;
		n && f(n, t), t instanceof r && t._removeParent(this);
	}, (t = new r()).closed = !0, r.EMPTY = t, r;
}(), p = h.EMPTY;
function v(t) {
	return t instanceof h || t && "closed" in t && s(t.remove) && s(t.add) && s(t.unsubscribe);
}
function d(t) {
	s(t) ? t() : t.unsubscribe();
}
var b = void 0, y = {
	setTimeout: function(t, r) {
		for (var n = [], e = 2; e < arguments.length; e++) n[e - 2] = arguments[e];
		var o = y.delegate;
		return (null == o ? void 0 : o.setTimeout) ? o.setTimeout.apply(o, u([t, r], i(n))) : setTimeout.apply(void 0, u([t, r], i(n)));
	},
	clearTimeout: function(t) {
		var r = y.delegate;
		return ((null == r ? void 0 : r.clearTimeout) || clearTimeout)(t);
	},
	delegate: void 0
};
function m(t) {
	y.setTimeout(function() {
		throw t;
	});
}
function w() {}
var g = _("C", void 0, void 0);
function _(t, r, n) {
	return {
		kind: t,
		value: r,
		error: n
	};
}
function S(t) {
	t();
}
var O = function(t) {
	function n(r) {
		var n = t.call(this) || this;
		return n.isStopped = !1, r ? (n.destination = r, v(r) && r.add(n)) : n.destination = k, n;
	}
	return r(n, t), n.create = function(t, r, n) {
		return new P(t, r, n);
	}, n.prototype.next = function(t) {
		this.isStopped ? T(_("N", t, void 0), this) : this._next(t);
	}, n.prototype.error = function(t) {
		this.isStopped ? T(_("E", void 0, t), this) : (this.isStopped = !0, this._error(t));
	}, n.prototype.complete = function() {
		this.isStopped ? T(g, this) : (this.isStopped = !0, this._complete());
	}, n.prototype.unsubscribe = function() {
		this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
	}, n.prototype._next = function(t) {
		this.destination.next(t);
	}, n.prototype._error = function(t) {
		try {
			this.destination.error(t);
		} finally {
			this.unsubscribe();
		}
	}, n.prototype._complete = function() {
		try {
			this.destination.complete();
		} finally {
			this.unsubscribe();
		}
	}, n;
}(h);
Function.prototype.bind;
var A = function() {
	function t(t) {
		this.partialObserver = t;
	}
	return t.prototype.next = function(t) {
		var r = this.partialObserver;
		if (r.next) try {
			r.next(t);
		} catch (t) {
			j(t);
		}
	}, t.prototype.error = function(t) {
		var r = this.partialObserver;
		if (r.error) try {
			r.error(t);
		} catch (t) {
			j(t);
		}
		else j(t);
	}, t.prototype.complete = function() {
		var t = this.partialObserver;
		if (t.complete) try {
			t.complete();
		} catch (t) {
			j(t);
		}
	}, t;
}(), P = function(t) {
	function n(r, n, e) {
		var o, u = t.call(this) || this;
		return s(r) || !r ? o = {
			next: null != r ? r : void 0,
			error: null != n ? n : void 0,
			complete: null != e ? e : void 0
		} : o = r, u.destination = new A(o), u;
	}
	return r(n, t), n;
}(O);
function j(t) {
	m(t);
}
function T(t, r) {}
var k = {
	closed: !0,
	next: w,
	error: function(t) {
		throw t;
	},
	complete: w
}, C = "function" == typeof Symbol && Symbol.observable || "@@observable";
function z(t) {
	return t;
}
function L() {
	for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
	return U(t);
}
function U(t) {
	return 0 === t.length ? z : 1 === t.length ? t[0] : function(r) {
		return t.reduce(function(t, r) {
			return r(t);
		}, r);
	};
}
var F = function() {
	function t(t) {
		t && (this._subscribe = t);
	}
	return t.prototype.lift = function(r) {
		var n = new t();
		return n.source = this, n.operator = r, n;
	}, t.prototype.subscribe = function(t, r, n) {
		var e = this, o = !function(t) {
			return t && t instanceof O || t && s(t.next) && s(t.error) && s(t.complete) && v(t);
		}(t) ? new P(t, r, n) : t;
		return S(function() {
			var t = e.operator, r = e.source;
			o.add(t ? t.call(o, r) : r ? e._subscribe(o) : e._trySubscribe(o));
		}), o;
	}, t.prototype._trySubscribe = function(t) {
		try {
			return this._subscribe(t);
		} catch (r) {
			t.error(r);
		}
	}, t.prototype.forEach = function(t, r) {
		var n = this;
		return new (r = (M(r)))(function(r, e) {
			var o = new P({
				next: function(r) {
					try {
						t(r);
					} catch (t) {
						e(t), o.unsubscribe();
					}
				},
				error: e,
				complete: r
			});
			n.subscribe(o);
		});
	}, t.prototype._subscribe = function(t) {
		var r;
		return null == (r = this.source) ? void 0 : r.subscribe(t);
	}, t.prototype[C] = function() {
		return this;
	}, t.prototype.pipe = function() {
		for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
		return U(t)(this);
	}, t.prototype.toPromise = function(t) {
		var r = this;
		return new (t = (M(t)))(function(t, n) {
			var e;
			r.subscribe(function(t) {
				return e = t;
			}, function(t) {
				return n(t);
			}, function() {
				return t(e);
			});
		});
	}, t.create = function(r) {
		return new t(r);
	}, t;
}();
function M(t) {
	var r;
	return null != (r = null != t ? t : b) ? r : Promise;
}
function Y(t) {
	return function(r) {
		if (s(null == r ? void 0 : r.lift)) return r.lift(function(r) {
			try {
				return t(r, this);
			} catch (t) {
				this.error(t);
			}
		});
		throw TypeError("Unable to lift unknown Observable type");
	};
}
function N(t, r, n, e, o) {
	return new R(t, r, n, e, o);
}
var R = function(t) {
	function n(r, n, e, o, i, u) {
		var c = t.call(this, r) || this;
		return c.onFinalize = i, c.shouldUnsubscribe = u, c._next = n ? function(t) {
			try {
				n(t);
			} catch (t) {
				r.error(t);
			}
		} : t.prototype._next, c._error = o ? function(t) {
			try {
				o(t);
			} catch (t) {
				r.error(t);
			} finally {
				this.unsubscribe();
			}
		} : t.prototype._error, c._complete = e ? function() {
			try {
				e();
			} catch (t) {
				r.error(t);
			} finally {
				this.unsubscribe();
			}
		} : t.prototype._complete, c;
	}
	return r(n, t), n.prototype.unsubscribe = function() {
		var r;
		if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
			var n = this.closed;
			t.prototype.unsubscribe.call(this), n || null == (r = this.onFinalize) || r.call(this);
		}
	}, n;
}(O), q = a(function(t) {
	return function() {
		t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
	};
}), D = function(t) {
	function n() {
		var r = t.call(this) || this;
		return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
	}
	return r(n, t), n.prototype.lift = function(t) {
		var r = new V(this, this);
		return r.operator = t, r;
	}, n.prototype._throwIfClosed = function() {
		if (this.closed) throw new q();
	}, n.prototype.next = function(t) {
		var r = this;
		S(function() {
			var n, e;
			if (r._throwIfClosed(), !r.isStopped) {
				r.currentObservers || (r.currentObservers = Array.from(r.observers));
				try {
					for (var i = o(r.currentObservers), u = i.next(); !u.done; u = i.next()) u.value.next(t);
				} catch (t) {
					n = { error: t };
				} finally {
					try {
						u && !u.done && (e = i.return) && e.call(i);
					} finally {
						if (n) throw n.error;
					}
				}
			}
		});
	}, n.prototype.error = function(t) {
		var r = this;
		S(function() {
			if (r._throwIfClosed(), !r.isStopped) {
				r.hasError = r.isStopped = !0, r.thrownError = t;
				for (var n = r.observers; n.length;) n.shift().error(t);
			}
		});
	}, n.prototype.complete = function() {
		var t = this;
		S(function() {
			if (t._throwIfClosed(), !t.isStopped) {
				t.isStopped = !0;
				for (var r = t.observers; r.length;) r.shift().complete();
			}
		});
	}, n.prototype.unsubscribe = function() {
		this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
	}, Object.defineProperty(n.prototype, "observed", {
		get: function() {
			var t;
			return (null == (t = this.observers) ? void 0 : t.length) > 0;
		},
		enumerable: !1,
		configurable: !0
	}), n.prototype._trySubscribe = function(r) {
		return this._throwIfClosed(), t.prototype._trySubscribe.call(this, r);
	}, n.prototype._subscribe = function(t) {
		return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
	}, n.prototype._innerSubscribe = function(t) {
		var r = this, n = this.hasError, e = this.isStopped, o = this.observers;
		return n || e ? p : (this.currentObservers = null, o.push(t), new h(function() {
			r.currentObservers = null, f(o, t);
		}));
	}, n.prototype._checkFinalizedStatuses = function(t) {
		var r = this.hasError, n = this.thrownError, e = this.isStopped;
		r ? t.error(n) : e && t.complete();
	}, n.prototype.asObservable = function() {
		var t = new F();
		return t.source = this, t;
	}, n.create = function(t, r) {
		return new V(t, r);
	}, n;
}(F), V = function(t) {
	function n(r, n) {
		var e = t.call(this) || this;
		return e.destination = r, e.source = n, e;
	}
	return r(n, t), n.prototype.next = function(t) {
		var r, n;
		null == (n = null == (r = this.destination) ? void 0 : r.next) || n.call(r, t);
	}, n.prototype.error = function(t) {
		var r, n;
		null == (n = null == (r = this.destination) ? void 0 : r.error) || n.call(r, t);
	}, n.prototype.complete = function() {
		var t, r;
		null == (r = null == (t = this.destination) ? void 0 : t.complete) || r.call(t);
	}, n.prototype._subscribe = function(t) {
		var r, n;
		return null != (n = null == (r = this.source) ? void 0 : r.subscribe(t)) ? n : p;
	}, n;
}(D), B = function(t) {
	function n(r) {
		var n = t.call(this) || this;
		return n._value = r, n;
	}
	return r(n, t), Object.defineProperty(n.prototype, "value", {
		get: function() {
			return this.getValue();
		},
		enumerable: !1,
		configurable: !0
	}), n.prototype._subscribe = function(r) {
		var n = t.prototype._subscribe.call(this, r);
		return n.closed || r.next(this._value), n;
	}, n.prototype.getValue = function() {
		var t = this.hasError, r = this.thrownError, n = this._value;
		if (t) throw r;
		return this._throwIfClosed(), n;
	}, n.prototype.next = function(r) {
		t.prototype.next.call(this, this._value = r);
	}, n;
}(D), G = {
	now: function() {
		return (G.delegate || Date).now();
	},
	delegate: void 0
}, $ = function(t) {
	function n(r, n) {
		return t.call(this) || this;
	}
	return r(n, t), n.prototype.schedule = function(t, r) {
		return void 0 === r && (r = 0), this;
	}, n;
}(h), H = {
	setInterval: function(t, r) {
		for (var n = [], e = 2; e < arguments.length; e++) n[e - 2] = arguments[e];
		var o = H.delegate;
		return (null == o ? void 0 : o.setInterval) ? o.setInterval.apply(o, u([t, r], i(n))) : setInterval.apply(void 0, u([t, r], i(n)));
	},
	clearInterval: function(t) {
		var r = H.delegate;
		return ((null == r ? void 0 : r.clearInterval) || clearInterval)(t);
	},
	delegate: void 0
}, J = function(t) {
	function n(r, n) {
		var e = t.call(this, r, n) || this;
		return e.scheduler = r, e.work = n, e.pending = !1, e;
	}
	return r(n, t), n.prototype.schedule = function(t, r) {
		if (void 0 === r && (r = 0), this.closed) return this;
		this.state = t;
		var n, e = this.id, o = this.scheduler;
		return null != e && (this.id = this.recycleAsyncId(o, e, r)), this.pending = !0, this.delay = r, this.id = null != (n = this.id) ? n : this.requestAsyncId(o, this.id, r), this;
	}, n.prototype.requestAsyncId = function(t, r, n) {
		return void 0 === n && (n = 0), H.setInterval(t.flush.bind(t, this), n);
	}, n.prototype.recycleAsyncId = function(t, r, n) {
		if (void 0 === n && (n = 0), null != n && this.delay === n && !1 === this.pending) return r;
		null != r && H.clearInterval(r);
	}, n.prototype.execute = function(t, r) {
		if (this.closed) return Error("executing a cancelled action");
		this.pending = !1;
		var n = this._execute(t, r);
		if (n) return n;
		!1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
	}, n.prototype._execute = function(t, r) {
		var n, e = !1;
		try {
			this.work(t);
		} catch (t) {
			e = !0, n = t || Error("Scheduled action threw falsy error");
		}
		if (e) return this.unsubscribe(), n;
	}, n.prototype.unsubscribe = function() {
		if (!this.closed) {
			var r = this.id, n = this.scheduler, e = n.actions;
			this.work = this.state = this.scheduler = null, this.pending = !1, f(e, this), null != r && (this.id = this.recycleAsyncId(n, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
		}
	}, n;
}($), K = function() {
	function t(r, n) {
		void 0 === n && (n = t.now), this.schedulerActionCtor = r, this.now = n;
	}
	return t.prototype.schedule = function(t, r, n) {
		return void 0 === r && (r = 0), new this.schedulerActionCtor(this, t).schedule(n, r);
	}, t.now = G.now, t;
}(), Q = new (function(t) {
	function n(r, n) {
		void 0 === n && (n = K.now);
		var e = t.call(this, r, n) || this;
		return e.actions = [], e._active = !1, e;
	}
	return r(n, t), n.prototype.flush = function(t) {
		var r, n = this.actions;
		if (this._active) return void n.push(t);
		this._active = !0;
		do
			if (r = t.execute(t.state, t.delay)) break;
		while (t = n.shift());
		if (this._active = !1, r) {
			for (; t = n.shift();) t.unsubscribe();
			throw r;
		}
	}, n;
}(K))(J), W = new F(function(t) {
	return t.complete();
});
function X(t) {
	return t && s(t.schedule);
}
function Z(t) {
	return t[t.length - 1];
}
function tt(t) {
	return X(Z(t)) ? t.pop() : void 0;
}
var tr = function(t) {
	return t && "number" == typeof t.length && "function" != typeof t;
};
function tn(t) {
	return s(null == t ? void 0 : t.then);
}
function te(t) {
	return Symbol.asyncIterator && s(null == t ? void 0 : t[Symbol.asyncIterator]);
}
function to(t) {
	return TypeError("You provided " + (null !== t && "object" == typeof t ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
var ti = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
function tu(t) {
	return s(null == t ? void 0 : t[ti]);
}
function tc(t) {
	return function(t, r, n) {
		if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
		var e, o = n.apply(t, r || []), i = [];
		return e = {}, u("next"), u("throw"), u("return"), e[Symbol.asyncIterator] = function() {
			return this;
		}, e;
		function u(t) {
			o[t] && (e[t] = function(r) {
				return new Promise(function(n, e) {
					i.push([
						t,
						r,
						n,
						e
					]) > 1 || s(t, r);
				});
			});
		}
		function s(t, r) {
			try {
				var n;
				(n = o[t](r)).value instanceof c ? Promise.resolve(n.value.v).then(a, l) : f(i[0][2], n);
			} catch (t) {
				f(i[0][3], t);
			}
		}
		function a(t) {
			s("next", t);
		}
		function l(t) {
			s("throw", t);
		}
		function f(t, r) {
			t(r), i.shift(), i.length && s(i[0][0], i[0][1]);
		}
	}(this, arguments, function() {
		var r, n, o;
		return e(this, function(e) {
			switch (e.label) {
				case 0: r = t.getReader(), e.label = 1;
				case 1: e.trys.push([
					1,
					,
					9,
					10
				]), e.label = 2;
				case 2: return [4, c(r.read())];
				case 3:
					if (o = (n = e.sent()).value, !n.done) return [3, 5];
					return [4, c(void 0)];
				case 4: return [2, e.sent()];
				case 5: return [4, c(o)];
				case 6: return [4, e.sent()];
				case 7: return e.sent(), [3, 2];
				case 8: return [3, 10];
				case 9: return r.releaseLock(), [7];
				case 10: return [2];
			}
		});
	});
}
function ts(t) {
	return s(null == t ? void 0 : t.getReader);
}
function ta(t) {
	if (t instanceof F) return t;
	if (null != t) {
		var r, n, e, i;
		if (s(t[C])) return r = t, new F(function(t) {
			var n = r[C]();
			if (s(n.subscribe)) return n.subscribe(t);
			throw TypeError("Provided object does not correctly implement Symbol.observable");
		});
		if (tr(t)) return n = t, new F(function(t) {
			for (var r = 0; r < n.length && !t.closed; r++) t.next(n[r]);
			t.complete();
		});
		if (tn(t)) return e = t, new F(function(t) {
			e.then(function(r) {
				t.closed || (t.next(r), t.complete());
			}, function(r) {
				return t.error(r);
			}).then(null, m);
		});
		if (te(t)) return tl(t);
		if (tu(t)) return i = t, new F(function(t) {
			var r, n;
			try {
				for (var e = o(i), u = e.next(); !u.done; u = e.next()) {
					var c = u.value;
					if (t.next(c), t.closed) return;
				}
			} catch (t) {
				r = { error: t };
			} finally {
				try {
					u && !u.done && (n = e.return) && n.call(e);
				} finally {
					if (r) throw r.error;
				}
			}
			t.complete();
		});
		if (ts(t)) return tl(tc(t));
	}
	throw to(t);
}
function tl(t) {
	return new F(function(r) {
		(function(t, r) {
			var n, i, u, c, s, a, l, f;
			return s = this, a = void 0, l = void 0, f = function() {
				var s;
				return e(this, function(e) {
					switch (e.label) {
						case 0: e.trys.push([
							0,
							5,
							6,
							11
						]), n = function(t) {
							if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
							var r, n = t[Symbol.asyncIterator];
							return n ? n.call(t) : (t = o(t), r = {}, e("next"), e("throw"), e("return"), r[Symbol.asyncIterator] = function() {
								return this;
							}, r);
							function e(n) {
								r[n] = t[n] && function(r) {
									return new Promise(function(e, o) {
										var i = e, u = o, c = (r = t[n](r)).done;
										Promise.resolve(r.value).then(function(t) {
											i({
												value: t,
												done: c
											});
										}, u);
									});
								};
							}
						}(t), e.label = 1;
						case 1: return [4, n.next()];
						case 2:
							if ((i = e.sent()).done) return [3, 4];
							if (s = i.value, r.next(s), r.closed) return [2];
							e.label = 3;
						case 3: return [3, 1];
						case 4: return [3, 11];
						case 5: return u = { error: e.sent() }, [3, 11];
						case 6:
							if (e.trys.push([
								6,
								,
								9,
								10
							]), !(i && !i.done && (c = n.return))) return [3, 8];
							return [4, c.call(n)];
						case 7: e.sent(), e.label = 8;
						case 8: return [3, 10];
						case 9:
							if (u) throw u.error;
							return [7];
						case 10: return [7];
						case 11: return r.complete(), [2];
					}
				});
			}, new (l || (l = Promise))(function(t, r) {
				function n(t) {
					try {
						o(f.next(t));
					} catch (t) {
						r(t);
					}
				}
				function e(t) {
					try {
						o(f.throw(t));
					} catch (t) {
						r(t);
					}
				}
				function o(r) {
					var o;
					r.done ? t(r.value) : ((o = r.value) instanceof l ? o : new l(function(t) {
						t(o);
					})).then(n, e);
				}
				o((f = f.apply(s, a || [])).next());
			});
		})(t, r).catch(function(t) {
			return r.error(t);
		});
	});
}
function tf(t, r, n, e, o) {
	void 0 === e && (e = 0), void 0 === o && (o = !1);
	var i = r.schedule(function() {
		n(), o ? t.add(this.schedule(null, e)) : this.unsubscribe();
	}, e);
	if (t.add(i), !o) return i;
}
function th(t, r) {
	return void 0 === r && (r = 0), Y(function(n, e) {
		n.subscribe(N(e, function(n) {
			return tf(e, t, function() {
				return e.next(n);
			}, r);
		}, function() {
			return tf(e, t, function() {
				return e.complete();
			}, r);
		}, function(n) {
			return tf(e, t, function() {
				return e.error(n);
			}, r);
		}));
	});
}
function tp(t, r) {
	return void 0 === r && (r = 0), Y(function(n, e) {
		e.add(t.schedule(function() {
			return n.subscribe(e);
		}, r));
	});
}
function tv(t, r) {
	if (!t) throw Error("Iterable cannot be null");
	return new F(function(n) {
		tf(n, r, function() {
			var e = t[Symbol.asyncIterator]();
			tf(n, r, function() {
				e.next().then(function(t) {
					t.done ? n.complete() : n.next(t.value);
				});
			}, 0, !0);
		});
	});
}
function td(t, r) {
	return r ? function(t, r) {
		if (null != t) {
			if (s(t[C])) return ta(t).pipe(tp(r), th(r));
			if (tr(t)) return new F(function(n) {
				var e = 0;
				return r.schedule(function() {
					e === t.length ? n.complete() : (n.next(t[e++]), n.closed || this.schedule());
				});
			});
			if (tn(t)) return ta(t).pipe(tp(r), th(r));
			if (te(t)) return tv(t, r);
			if (tu(t)) return new F(function(n) {
				var e;
				return tf(n, r, function() {
					e = t[ti](), tf(n, r, function() {
						var t, r, o;
						try {
							r = (t = e.next()).value, o = t.done;
						} catch (t) {
							n.error(t);
							return;
						}
						o ? n.complete() : n.next(r);
					}, 0, !0);
				}), function() {
					return s(null == e ? void 0 : e.return) && e.return();
				};
			});
			if (ts(t)) return tv(tc(t), r);
		}
		throw to(t);
	}(t, r) : ta(t);
}
function tb() {
	for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
	return td(t, tt(t));
}
function ty(t) {
	return !!t && (t instanceof F || s(t.lift) && s(t.subscribe));
}
function tm(t, r) {
	return Y(function(n, e) {
		var o = 0;
		n.subscribe(N(e, function(n) {
			e.next(t.call(r, n, o++));
		}));
	});
}
var tw = Array.isArray;
function tg(t) {
	return tm(function(r) {
		return tw(r) ? t.apply(void 0, u([], i(r))) : t(r);
	});
}
var t_ = Array.isArray, tx = Object.getPrototypeOf, tS = Object.prototype, tO = Object.keys;
function tE() {
	for (var t, r, n, e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
	var i = tt(e), u = s(Z(e)) ? e.pop() : void 0, c = function(t) {
		if (1 === t.length) {
			var r, n = t[0];
			if (t_(n)) return {
				args: n,
				keys: null
			};
			if ((r = n) && "object" == typeof r && tx(r) === tS) {
				var e = tO(n);
				return {
					args: e.map(function(t) {
						return n[t];
					}),
					keys: e
				};
			}
		}
		return {
			args: t,
			keys: null
		};
	}(e), a = c.args, l = c.keys;
	if (0 === a.length) return td([], i);
	var f = new F((t = a, r = i, void 0 === (n = l ? function(t) {
		return l.reduce(function(r, n, e) {
			return r[n] = t[e], r;
		}, {});
	} : z) && (n = z), function(e) {
		(function(t, r, n) {
			t ? tf(n, t, r) : r();
		})(r, function() {
			for (var o = t.length, i = Array(o), u = o, c = o, s = function(o) {
				(function(t, r, n) {
					t ? tf(n, t, r) : r();
				})(r, function() {
					var s = td(t[o], r), a = !1;
					s.subscribe(N(e, function(t) {
						i[o] = t, !a && (a = !0, c--), c || e.next(n(i.slice()));
					}, function() {
						--u || e.complete();
					}));
				}, e);
			}, a = 0; a < o; a++) s(a);
		}, e);
	}));
	return u ? f.pipe(tg(u)) : f;
}
function tI(t, r, n) {
	return (void 0 === n && (n = Infinity), s(r)) ? tI(function(n, e) {
		return tm(function(t, o) {
			return r(n, t, e, o);
		})(ta(t(n, e)));
	}, n) : ("number" == typeof r && (n = r), Y(function(r, e) {
		var o, i, u, c, s, a, l, f;
		return o = n, i = [], u = 0, c = 0, s = !1, a = function() {
			!s || i.length || u || e.complete();
		}, l = function(t) {
			return u < o ? f(t) : i.push(t);
		}, f = function(r) {
			u++;
			var n = !1;
			ta(t(r, c++)).subscribe(N(e, function(t) {
				e.next(t);
			}, function() {
				n = !0;
			}, void 0, function() {
				if (n) try {
					for (u--; i.length && u < o;) (function() {
						var t = i.shift();
						f(t);
					})();
					a();
				} catch (t) {
					e.error(t);
				}
			}));
		}, r.subscribe(N(e, l, function() {
			s = !0, a();
		})), function() {};
	}));
}
function tA(t) {
	return void 0 === t && (t = Infinity), tI(z, t);
}
var tP = ["addListener", "removeListener"], tj = ["addEventListener", "removeEventListener"], tT = ["on", "off"];
function tk(t, r, n, e) {
	if (s(n) && (e = n, n = void 0), e) return tk(t, r, n).pipe(tg(e));
	var o, u, c, a = i(s((o = t).addEventListener) && s(o.removeEventListener) ? tj.map(function(e) {
		return function(o) {
			return t[e](r, o, n);
		};
	}) : s((u = t).addListener) && s(u.removeListener) ? tP.map(tC(t, r)) : s((c = t).on) && s(c.off) ? tT.map(tC(t, r)) : [], 2), l = a[0], f = a[1];
	if (!l && tr(t)) return tI(function(t) {
		return tk(t, r, n);
	})(ta(t));
	if (!l) throw TypeError("Invalid event target");
	return new F(function(t) {
		var r = function() {
			for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
			return t.next(1 < r.length ? r : r[0]);
		};
		return l(r), function() {
			return f(r);
		};
	});
}
function tC(t, r) {
	return function(n) {
		return function(e) {
			return t[n](r, e);
		};
	};
}
function tz(t, r, n) {
	void 0 === t && (t = 0), void 0 === n && (n = Q);
	var e = -1;
	return null != r && (X(r) ? n = r : e = r), new F(function(r) {
		var o, i = (o = t) instanceof Date && !isNaN(o) ? t - n.now() : t;
		i < 0 && (i = 0);
		var u = 0;
		return n.schedule(function() {
			r.closed || (r.next(u++), 0 <= e ? this.schedule(void 0, e) : r.complete());
		}, i);
	});
}
function tL() {
	for (var t, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
	var e = tt(r), o = (t = Infinity, "number" == typeof Z(r) ? r.pop() : t);
	return r.length ? 1 === r.length ? ta(r[0]) : tA(o)(td(r, e)) : W;
}
function tU(t, r) {
	return Y(function(n, e) {
		var o = 0;
		n.subscribe(N(e, function(n) {
			return t.call(r, n, o++) && e.next(n);
		}));
	});
}
function tF(t) {
	return Y(function(r, n) {
		var e, o = null, i = !1;
		o = r.subscribe(N(n, void 0, void 0, function(u) {
			e = ta(t(u, tF(t)(r))), o ? (o.unsubscribe(), o = null, e.subscribe(n)) : i = !0;
		})), i && (o.unsubscribe(), o = null, e.subscribe(n));
	});
}
function tM(t, r) {
	return void 0 === r && (r = Q), Y(function(n, e) {
		var o = null, i = null, u = null, c = function() {
			if (o) {
				o.unsubscribe(), o = null;
				var t = i;
				i = null, e.next(t);
			}
		};
		function s() {
			var n = u + t, i = r.now();
			if (i < n) {
				o = this.schedule(void 0, n - i), e.add(o);
				return;
			}
			c();
		}
		n.subscribe(N(e, function(n) {
			i = n, u = r.now(), o || (o = r.schedule(s, t), e.add(o));
		}, function() {
			c(), e.complete();
		}, void 0, function() {
			i = o = null;
		}));
	});
}
function tY(t) {
	return t <= 0 ? function() {
		return W;
	} : Y(function(r, n) {
		var e = 0;
		r.subscribe(N(n, function(r) {
			++e <= t && (n.next(r), t <= e && n.complete());
		}));
	});
}
function tN() {
	return Y(function(t, r) {
		t.subscribe(N(r, w));
	});
}
function tR(t, r) {
	void 0 === r && (r = Q);
	var n = tz(t, r);
	return function t(r, n) {
		return n ? function(e) {
			return function() {
				for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
				return tA(1)(td(t, tt(t)));
			}(n.pipe(tY(1), tN()), e.pipe(t(r)));
		} : tI(function(t, n) {
			return ta(r(t, n)).pipe(tY(1), tm(function() {
				return t;
			}));
		});
	}(function() {
		return n;
	});
}
function tq(t, r) {
	return void 0 === r && (r = z), t = null != t ? t : tD, Y(function(n, e) {
		var o, i = !0;
		n.subscribe(N(e, function(n) {
			var u = r(n);
			(i || !t(o, u)) && (i = !1, o = u, e.next(n));
		}));
	});
}
function tD(t, r) {
	return t === r;
}
function tV(t) {
	return tU(function(r, n) {
		return t <= n;
	});
}
function tB(t, r) {
	return Y(function(n, e) {
		var o = null, i = 0, u = !1, c = function() {
			return u && !o && e.complete();
		};
		n.subscribe(N(e, function(n) {
			o?.unsubscribe();
			var u = 0, s = i++;
			ta(t(n, s)).subscribe(o = N(e, function(t) {
				return e.next(r ? r(n, t, s, u++) : t);
			}, function() {
				o = null, c();
			}));
		}, function() {
			u = !0, c();
		}));
	});
}
function tG(t, r, n) {
	var e = s(t) || r || n ? {
		next: t,
		error: r,
		complete: n
	} : t;
	return e ? Y(function(t, r) {
		null == (n = e.subscribe) || n.call(e);
		var n, o = !0;
		t.subscribe(N(r, function(t) {
			var n;
			null == (n = e.next) || n.call(e, t), r.next(t);
		}, function() {
			var t;
			o = !1, null == (t = e.complete) || t.call(e), r.complete();
		}, function(t) {
			var n;
			o = !1, null == (n = e.error) || n.call(e, t), r.error(t);
		}, function() {
			var t, r;
			o && (null == (t = e.unsubscribe) || t.call(e)), null == (r = e.finalize) || r.call(e);
		}));
	}) : z;
}
export { L as C, F as S, tb as _, tR as a, B as b, tF as c, tz as d, tk as f, ty as g, tm as h, tq as i, tU as l, tE as m, tB as n, tN as o, tI as p, tV as r, tM as s, tG as t, tL as u, td as v, n as w, D as x, W as y };
