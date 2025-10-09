var t = function(e, r) {
	return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
		t.__proto__ = e;
	} || function(t, e) {
		for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
	})(e, r);
};
function e(e, r) {
	if ("function" != typeof r && null !== r) throw TypeError("Class extends value " + String(r) + " is not a constructor or null");
	function n() {
		this.constructor = e;
	}
	t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
}
function r(t, e) {
	var r, n, o, i = {
		label: 0,
		sent: function() {
			if (1 & o[0]) throw o[1];
			return o[1];
		},
		trys: [],
		ops: []
	}, u = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
	return u.next = s(0), u.throw = s(1), u.return = s(2), "function" == typeof Symbol && (u[Symbol.iterator] = function() {
		return this;
	}), u;
	function s(s) {
		return function(c) {
			var a = [s, c];
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
function n(t) {
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
function o(t, e) {
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
function i(t, e, r) {
	if (r || 2 == arguments.length) for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
	return t.concat(n || Array.prototype.slice.call(e));
}
function u(t) {
	return this instanceof u ? (this.v = t, this) : new u(t);
}
function s(t) {
	return "function" == typeof t;
}
function c(t) {
	var e = t(function(t) {
		Error.call(t), t.stack = Error().stack;
	});
	return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e;
}
var a = c(function(t) {
	return function(e) {
		t(this), this.message = e ? e.length + " errors occurred during unsubscription:\n" + e.map(function(t, e) {
			return e + 1 + ") " + t.toString();
		}).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = e;
	};
});
function l(t, e) {
	if (t) {
		var r = t.indexOf(e);
		0 <= r && t.splice(r, 1);
	}
}
var f = function() {
	var t;
	function e(t) {
		this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
	}
	return e.prototype.unsubscribe = function() {
		if (!this.closed) {
			this.closed = !0;
			var t, e, r, u, c, l = this._parentage;
			if (l) if (this._parentage = null, Array.isArray(l)) try {
				for (var f = n(l), p = f.next(); !p.done; p = f.next()) p.value.remove(this);
			} catch (e) {
				t = { error: e };
			} finally {
				try {
					p && !p.done && (e = f.return) && e.call(f);
				} finally {
					if (t) throw t.error;
				}
			}
			else l.remove(this);
			var h = this.initialTeardown;
			if (s(h)) try {
				h();
			} catch (t) {
				c = t instanceof a ? t.errors : [t];
			}
			var d = this._finalizers;
			if (d) {
				this._finalizers = null;
				try {
					for (var y = n(d), v = y.next(); !v.done; v = y.next()) {
						var m = v.value;
						try {
							b(m);
						} catch (t) {
							c = null != c ? c : [], t instanceof a ? c = i(i([], o(c)), o(t.errors)) : c.push(t);
						}
					}
				} catch (t) {
					r = { error: t };
				} finally {
					try {
						v && !v.done && (u = y.return) && u.call(y);
					} finally {
						if (r) throw r.error;
					}
				}
			}
			if (c) throw new a(c);
		}
	}, e.prototype.add = function(t) {
		var r;
		if (t && t !== this) if (this.closed) b(t);
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
		e === t ? this._parentage = null : Array.isArray(e) && l(e, t);
	}, e.prototype.remove = function(t) {
		var r = this._finalizers;
		r && l(r, t), t instanceof e && t._removeParent(this);
	}, (t = new e()).closed = !0, e.EMPTY = t, e;
}(), p = f.EMPTY;
function h(t) {
	return t instanceof f || t && "closed" in t && s(t.remove) && s(t.add) && s(t.unsubscribe);
}
function b(t) {
	s(t) ? t() : t.unsubscribe();
}
var d = void 0, y = {
	setTimeout: function(t, e) {
		for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
		var u = y.delegate;
		return (null == u ? void 0 : u.setTimeout) ? u.setTimeout.apply(u, i([t, e], o(r))) : setTimeout.apply(void 0, i([t, e], o(r)));
	},
	clearTimeout: function(t) {
		var e = y.delegate;
		return ((null == e ? void 0 : e.clearTimeout) || clearTimeout)(t);
	},
	delegate: void 0
};
function v(t) {
	y.setTimeout(function() {
		throw t;
	});
}
function m() {}
var w = _("C", void 0, void 0);
function _(t, e, r) {
	return {
		kind: t,
		value: e,
		error: r
	};
}
function x(t) {
	t();
}
var S = function(t) {
	function r(e) {
		var r = t.call(this) || this;
		return r.isStopped = !1, e ? (r.destination = e, h(e) && e.add(r)) : r.destination = A, r;
	}
	return e(r, t), r.create = function(t, e, r) {
		return new T(t, e, r);
	}, r.prototype.next = function(t) {
		this.isStopped ? I(_("N", t, void 0), this) : this._next(t);
	}, r.prototype.error = function(t) {
		this.isStopped ? I(_("E", void 0, t), this) : (this.isStopped = !0, this._error(t));
	}, r.prototype.complete = function() {
		this.isStopped ? I(w, this) : (this.isStopped = !0, this._complete());
	}, r.prototype.unsubscribe = function() {
		this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
	}, r.prototype._next = function(t) {
		this.destination.next(t);
	}, r.prototype._error = function(t) {
		try {
			this.destination.error(t);
		} finally {
			this.unsubscribe();
		}
	}, r.prototype._complete = function() {
		try {
			this.destination.complete();
		} finally {
			this.unsubscribe();
		}
	}, r;
}(f);
Function.prototype.bind;
var E = function() {
	function t(t) {
		this.partialObserver = t;
	}
	return t.prototype.next = function(t) {
		var e = this.partialObserver;
		if (e.next) try {
			e.next(t);
		} catch (t) {
			P(t);
		}
	}, t.prototype.error = function(t) {
		var e = this.partialObserver;
		if (e.error) try {
			e.error(t);
		} catch (t) {
			P(t);
		}
		else P(t);
	}, t.prototype.complete = function() {
		var t = this.partialObserver;
		if (t.complete) try {
			t.complete();
		} catch (t) {
			P(t);
		}
	}, t;
}(), T = function(t) {
	function r(e, r, n) {
		var o, u = t.call(this) || this;
		return s(e) || !e ? o = {
			next: null != e ? e : void 0,
			error: null != r ? r : void 0,
			complete: null != n ? n : void 0
		} : o = e, u.destination = new E(o), u;
	}
	return e(r, t), r;
}(S);
function P(t) {
	v(t);
}
function I(t, e) {}
var A = {
	closed: !0,
	next: m,
	error: function(t) {
		throw t;
	},
	complete: m
}, C = "function" == typeof Symbol && Symbol.observable || "@@observable";
function $(t) {
	return t;
}
function k() {
	for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
	return F(t);
}
function F(t) {
	return 0 === t.length ? $ : 1 === t.length ? t[0] : function(e) {
		return t.reduce(function(t, e) {
			return e(t);
		}, e);
	};
}
var R = function() {
	function t(t) {
		t && (this._subscribe = t);
	}
	return t.prototype.lift = function(e) {
		var r = new t();
		return r.source = this, r.operator = e, r;
	}, t.prototype.subscribe = function(t, e, r) {
		var n = this, o = !function(t) {
			return t && t instanceof S || t && s(t.next) && s(t.error) && s(t.complete) && h(t);
		}(t) ? new T(t, e, r) : t;
		return x(function() {
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
		return new (e = (q(e)))(function(e, n) {
			var o = new T({
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
	}, t.prototype[C] = function() {
		return this;
	}, t.prototype.pipe = function() {
		for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
		return F(t)(this);
	}, t.prototype.toPromise = function(t) {
		var e = this;
		return new (t = (q(t)))(function(t, r) {
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
function q(t) {
	var e;
	return null != (e = null != t ? t : d) ? e : Promise;
}
function z(t) {
	return function(e) {
		if (s(null == e ? void 0 : e.lift)) return e.lift(function(e) {
			try {
				return t(e, this);
			} catch (t) {
				this.error(t);
			}
		});
		throw TypeError("Unable to lift unknown Observable type");
	};
}
function U(t, e, r, n, o) {
	return new N(t, e, r, n, o);
}
var N = function(t) {
	function r(e, r, n, o, i, u) {
		var s = t.call(this, e) || this;
		return s.onFinalize = i, s.shouldUnsubscribe = u, s._next = r ? function(t) {
			try {
				r(t);
			} catch (t) {
				e.error(t);
			}
		} : t.prototype._next, s._error = o ? function(t) {
			try {
				o(t);
			} catch (t) {
				e.error(t);
			} finally {
				this.unsubscribe();
			}
		} : t.prototype._error, s._complete = n ? function() {
			try {
				n();
			} catch (t) {
				e.error(t);
			} finally {
				this.unsubscribe();
			}
		} : t.prototype._complete, s;
	}
	return e(r, t), r.prototype.unsubscribe = function() {
		var e;
		if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
			var r = this.closed;
			t.prototype.unsubscribe.call(this), r || null == (e = this.onFinalize) || e.call(this);
		}
	}, r;
}(S), H = c(function(t) {
	return function() {
		t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
	};
}), L = function(t) {
	function r() {
		var e = t.call(this) || this;
		return e.closed = !1, e.currentObservers = null, e.observers = [], e.isStopped = !1, e.hasError = !1, e.thrownError = null, e;
	}
	return e(r, t), r.prototype.lift = function(t) {
		var e = new M(this, this);
		return e.operator = t, e;
	}, r.prototype._throwIfClosed = function() {
		if (this.closed) throw new H();
	}, r.prototype.next = function(t) {
		var e = this;
		x(function() {
			var r, o;
			if (e._throwIfClosed(), !e.isStopped) {
				e.currentObservers || (e.currentObservers = Array.from(e.observers));
				try {
					for (var i = n(e.currentObservers), u = i.next(); !u.done; u = i.next()) u.value.next(t);
				} catch (t) {
					r = { error: t };
				} finally {
					try {
						u && !u.done && (o = i.return) && o.call(i);
					} finally {
						if (r) throw r.error;
					}
				}
			}
		});
	}, r.prototype.error = function(t) {
		var e = this;
		x(function() {
			if (e._throwIfClosed(), !e.isStopped) {
				e.hasError = e.isStopped = !0, e.thrownError = t;
				for (var r = e.observers; r.length;) r.shift().error(t);
			}
		});
	}, r.prototype.complete = function() {
		var t = this;
		x(function() {
			if (t._throwIfClosed(), !t.isStopped) {
				t.isStopped = !0;
				for (var e = t.observers; e.length;) e.shift().complete();
			}
		});
	}, r.prototype.unsubscribe = function() {
		this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
	}, Object.defineProperty(r.prototype, "observed", {
		get: function() {
			var t;
			return (null == (t = this.observers) ? void 0 : t.length) > 0;
		},
		enumerable: !1,
		configurable: !0
	}), r.prototype._trySubscribe = function(e) {
		return this._throwIfClosed(), t.prototype._trySubscribe.call(this, e);
	}, r.prototype._subscribe = function(t) {
		return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
	}, r.prototype._innerSubscribe = function(t) {
		var e = this, r = this.hasError, n = this.isStopped, o = this.observers;
		return r || n ? p : (this.currentObservers = null, o.push(t), new f(function() {
			e.currentObservers = null, l(o, t);
		}));
	}, r.prototype._checkFinalizedStatuses = function(t) {
		var e = this.hasError, r = this.thrownError, n = this.isStopped;
		e ? t.error(r) : n && t.complete();
	}, r.prototype.asObservable = function() {
		var t = new R();
		return t.source = this, t;
	}, r.create = function(t, e) {
		return new M(t, e);
	}, r;
}(R), M = function(t) {
	function r(e, r) {
		var n = t.call(this) || this;
		return n.destination = e, n.source = r, n;
	}
	return e(r, t), r.prototype.next = function(t) {
		var e, r;
		null == (r = null == (e = this.destination) ? void 0 : e.next) || r.call(e, t);
	}, r.prototype.error = function(t) {
		var e, r;
		null == (r = null == (e = this.destination) ? void 0 : e.error) || r.call(e, t);
	}, r.prototype.complete = function() {
		var t, e;
		null == (e = null == (t = this.destination) ? void 0 : t.complete) || e.call(t);
	}, r.prototype._subscribe = function(t) {
		var e, r;
		return null != (r = null == (e = this.source) ? void 0 : e.subscribe(t)) ? r : p;
	}, r;
}(L), B = function(t) {
	function r(e) {
		var r = t.call(this) || this;
		return r._value = e, r;
	}
	return e(r, t), Object.defineProperty(r.prototype, "value", {
		get: function() {
			return this.getValue();
		},
		enumerable: !1,
		configurable: !0
	}), r.prototype._subscribe = function(e) {
		var r = t.prototype._subscribe.call(this, e);
		return r.closed || e.next(this._value), r;
	}, r.prototype.getValue = function() {
		var t = this.hasError, e = this.thrownError, r = this._value;
		if (t) throw e;
		return this._throwIfClosed(), r;
	}, r.prototype.next = function(e) {
		t.prototype.next.call(this, this._value = e);
	}, r;
}(L);
function D(t) {
	return t && s(t.schedule);
}
function Y(t) {
	return t[t.length - 1];
}
function G(t) {
	return s(Y(t)) ? t.pop() : void 0;
}
function J(t) {
	return D(Y(t)) ? t.pop() : void 0;
}
function V(t, e) {
	return "number" == typeof Y(t) ? t.pop() : e;
}
var X = function(t) {
	return t && "number" == typeof t.length && "function" != typeof t;
};
function W(t) {
	return s(null == t ? void 0 : t.then);
}
function K(t) {
	return Symbol.asyncIterator && s(null == t ? void 0 : t[Symbol.asyncIterator]);
}
function Q(t) {
	return TypeError("You provided " + (null !== t && "object" == typeof t ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
var Z = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
function tt(t) {
	return s(null == t ? void 0 : t[Z]);
}
function te(t) {
	return function(t, e, r) {
		if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
		var n, o = r.apply(t, e || []), i = [];
		return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", function(t) {
			return function(e) {
				return Promise.resolve(e).then(t, l);
			};
		}), n[Symbol.asyncIterator] = function() {
			return this;
		}, n;
		function s(t, e) {
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
				(r = o[t](e)).value instanceof u ? Promise.resolve(r.value.v).then(a, l) : f(i[0][2], r);
			} catch (t) {
				f(i[0][3], t);
			}
		}
		function a(t) {
			c("next", t);
		}
		function l(t) {
			c("throw", t);
		}
		function f(t, e) {
			t(e), i.shift(), i.length && c(i[0][0], i[0][1]);
		}
	}(this, arguments, function() {
		var e, n, o;
		return r(this, function(r) {
			switch (r.label) {
				case 0: e = t.getReader(), r.label = 1;
				case 1: r.trys.push([
					1,
					,
					9,
					10
				]), r.label = 2;
				case 2: return [4, u(e.read())];
				case 3:
					if (o = (n = r.sent()).value, !n.done) return [3, 5];
					return [4, u(void 0)];
				case 4: return [2, r.sent()];
				case 5: return [4, u(o)];
				case 6: return [4, r.sent()];
				case 7: return r.sent(), [3, 2];
				case 8: return [3, 10];
				case 9: return e.releaseLock(), [7];
				case 10: return [2];
			}
		});
	});
}
function tr(t) {
	return s(null == t ? void 0 : t.getReader);
}
function tn(t) {
	if (t instanceof R) return t;
	if (null != t) {
		var e, r, o, i;
		if (s(t[C])) return e = t, new R(function(t) {
			var r = e[C]();
			if (s(r.subscribe)) return r.subscribe(t);
			throw TypeError("Provided object does not correctly implement Symbol.observable");
		});
		if (X(t)) return r = t, new R(function(t) {
			for (var e = 0; e < r.length && !t.closed; e++) t.next(r[e]);
			t.complete();
		});
		if (W(t)) return o = t, new R(function(t) {
			o.then(function(e) {
				t.closed || (t.next(e), t.complete());
			}, function(e) {
				return t.error(e);
			}).then(null, v);
		});
		if (K(t)) return to(t);
		if (tt(t)) return i = t, new R(function(t) {
			var e, r;
			try {
				for (var o = n(i), u = o.next(); !u.done; u = o.next()) {
					var s = u.value;
					if (t.next(s), t.closed) return;
				}
			} catch (t) {
				e = { error: t };
			} finally {
				try {
					u && !u.done && (r = o.return) && r.call(o);
				} finally {
					if (e) throw e.error;
				}
			}
			t.complete();
		});
		if (tr(t)) return to(te(t));
	}
	throw Q(t);
}
function to(t) {
	return new R(function(e) {
		(function(t, e) {
			var o, i, u, s, c, a, l, f;
			return c = this, a = void 0, l = void 0, f = function() {
				var c;
				return r(this, function(r) {
					switch (r.label) {
						case 0: r.trys.push([
							0,
							5,
							6,
							11
						]), o = function(t) {
							if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
							var e, r = t[Symbol.asyncIterator];
							return r ? r.call(t) : (t = n(t), e = {}, o("next"), o("throw"), o("return"), e[Symbol.asyncIterator] = function() {
								return this;
							}, e);
							function o(r) {
								e[r] = t[r] && function(e) {
									return new Promise(function(n, o) {
										var i = n, u = o, s = (e = t[r](e)).done;
										Promise.resolve(e.value).then(function(t) {
											i({
												value: t,
												done: s
											});
										}, u);
									});
								};
							}
						}(t), r.label = 1;
						case 1: return [4, o.next()];
						case 2:
							if ((i = r.sent()).done) return [3, 4];
							if (c = i.value, e.next(c), e.closed) return [2];
							r.label = 3;
						case 3: return [3, 1];
						case 4: return [3, 11];
						case 5: return u = { error: r.sent() }, [3, 11];
						case 6:
							if (r.trys.push([
								6,
								,
								9,
								10
							]), !(i && !i.done && (s = o.return))) return [3, 8];
							return [4, s.call(o)];
						case 7: r.sent(), r.label = 8;
						case 8: return [3, 10];
						case 9:
							if (u) throw u.error;
							return [7];
						case 10: return [7];
						case 11: return e.complete(), [2];
					}
				});
			}, new (l || (l = Promise))(function(t, e) {
				function r(t) {
					try {
						o(f.next(t));
					} catch (t) {
						e(t);
					}
				}
				function n(t) {
					try {
						o(f.throw(t));
					} catch (t) {
						e(t);
					}
				}
				function o(e) {
					var o;
					e.done ? t(e.value) : ((o = e.value) instanceof l ? o : new l(function(t) {
						t(o);
					})).then(r, n);
				}
				o((f = f.apply(c, a || [])).next());
			});
		})(t, e).catch(function(t) {
			return e.error(t);
		});
	});
}
function ti(t, e, r, n, o) {
	void 0 === n && (n = 0), void 0 === o && (o = !1);
	var i = e.schedule(function() {
		r(), o ? t.add(this.schedule(null, n)) : this.unsubscribe();
	}, n);
	if (t.add(i), !o) return i;
}
function tu(t, e) {
	return void 0 === e && (e = 0), z(function(r, n) {
		r.subscribe(U(n, function(r) {
			return ti(n, t, function() {
				return n.next(r);
			}, e);
		}, function() {
			return ti(n, t, function() {
				return n.complete();
			}, e);
		}, function(r) {
			return ti(n, t, function() {
				return n.error(r);
			}, e);
		}));
	});
}
function ts(t, e) {
	return void 0 === e && (e = 0), z(function(r, n) {
		n.add(t.schedule(function() {
			return r.subscribe(n);
		}, e));
	});
}
function tc(t, e) {
	if (!t) throw Error("Iterable cannot be null");
	return new R(function(r) {
		ti(r, e, function() {
			var n = t[Symbol.asyncIterator]();
			ti(r, e, function() {
				n.next().then(function(t) {
					t.done ? r.complete() : r.next(t.value);
				});
			}, 0, !0);
		});
	});
}
function ta(t, e) {
	return e ? function(t, e) {
		if (null != t) {
			if (s(t[C])) return tn(t).pipe(ts(e), tu(e));
			if (X(t)) return new R(function(r) {
				var n = 0;
				return e.schedule(function() {
					n === t.length ? r.complete() : (r.next(t[n++]), r.closed || this.schedule());
				});
			});
			if (W(t)) return tn(t).pipe(ts(e), tu(e));
			if (K(t)) return tc(t, e);
			if (tt(t)) return new R(function(r) {
				var n;
				return ti(r, e, function() {
					n = t[Z](), ti(r, e, function() {
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
					return s(null == n ? void 0 : n.return) && n.return();
				};
			});
			if (tr(t)) return tc(te(t), e);
		}
		throw Q(t);
	}(t, e) : tn(t);
}
function tl() {
	for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
	return ta(t, J(t));
}
function tf(t, e) {
	return z(function(r, n) {
		var o = 0;
		r.subscribe(U(n, function(r) {
			n.next(t.call(e, r, o++));
		}));
	});
}
function tp(t, e, r) {
	return (void 0 === r && (r = Infinity), s(e)) ? tp(function(r, n) {
		return tf(function(t, o) {
			return e(r, t, n, o);
		})(tn(t(r, n)));
	}, r) : ("number" == typeof e && (r = e), z(function(e, n) {
		var o, i, u, s, c, a, l, f;
		return o = r, i = [], u = 0, s = 0, c = !1, a = function() {
			!c || i.length || u || n.complete();
		}, l = function(t) {
			return u < o ? f(t) : i.push(t);
		}, f = function(e) {
			u++;
			var r = !1;
			tn(t(e, s++)).subscribe(U(n, function(t) {
				n.next(t);
			}, function() {
				r = !0;
			}, void 0, function() {
				if (r) try {
					for (u--; i.length && u < o;) (function() {
						var t = i.shift();
						f(t);
					})();
					a();
				} catch (t) {
					n.error(t);
				}
			}));
		}, e.subscribe(U(n, l, function() {
			c = !0, a();
		})), function() {};
	}));
}
function th() {
	return z(function(t, e) {
		t.subscribe(U(e, m));
	});
}
function tb(t, e, r) {
	var n = s(t) || e || r ? {
		next: t,
		error: e,
		complete: r
	} : t;
	return n ? z(function(t, e) {
		null == (r = n.subscribe) || r.call(n);
		var r, o = !0;
		t.subscribe(U(e, function(t) {
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
	}) : $;
}
var td = (t) => !!t && t.constructor === Object, ty = Array.isArray, tv = (t) => {
	let e = new URLSearchParams(), r = (t, n) => {
		if (ty(n)) {
			for (let e of n) r(t, e);
			return;
		}
		td(n) ? r(t, JSON.stringify(n)) : void 0 !== n && 0 !== `${n}`.length && e.append(t, `${n}`);
	};
	if (t) for (let [e, n] of Object.entries(t)) r(e, n);
	return e.toString();
}, tm = (t = {}) => t["Content-Type"] || t["content-type"] || "", tw = (t, e) => {
	if (tm(e).includes("multipart/form-data")) {
		((t = {}) => {
			t["Content-Type"] && (t["Content-Type"] = void 0), t["content-type"] && (t["content-type"] = void 0);
		})(e);
		let r = new FormData(), n = (t, e) => {
			if (e instanceof File || e instanceof Blob) r.append(t, e);
			else if (ty(e)) for (let r of e) n(t, r);
			else td(e) ? r.append(t, JSON.stringify(e)) : r.append(t, e);
		};
		for (let [e, r] of t) n(e, r);
		return r;
	}
	return tm(e).includes("application/x-www-form-urlencoded") ? tv(t) : tm(e).includes("application/octet-stream") ? t : tm(e).includes("application/json") || ty(t) || td(t) ? JSON.stringify(t) : t;
}, t_ = ({ paramsSerializer: t, transformRequestBody: e }) => {
	let r = (e) => {
		let r = t(e.params);
		return r.length && !r.startsWith("?") && (r = "?" + r), `${e.url}${r}`;
	}, n = (t) => e(t.body, t.headers || {});
	return {
		build: (t) => t,
		toRequestBody: n,
		toHref: r,
		async request(t) {
			let e = n(t);
			return (function(t, e) {
				if (e.onUploadProgress && "undefined" != typeof XMLHttpRequest) return new Promise((r, n) => {
					let o = new XMLHttpRequest();
					if (o.open(e.method ?? "GET", t), e.headers) for (let [t, r] of Object.entries(e.headers)) o.setRequestHeader(t, r);
					o.upload && "function" == typeof e.onUploadProgress && o.upload.addEventListener("progress", e.onUploadProgress), o.responseType = "arraybuffer", o.onloadend = () => {
						if (0 == o.status) return;
						let t = function(t) {
							let e = t.trim().split(/[\r\n]+/), r = new Headers();
							for (let t of e) {
								let e = t.split(": "), n = e.shift();
								r.set(n, e.join(": "));
							}
							return r;
						}(o.getAllResponseHeaders());
						r(new Response(204 != o.status && o.response ? new Blob(o.response) : null, {
							status: o.status,
							statusText: o.statusText,
							headers: t
						}));
					}, o.onerror = () => n(TypeError("Network request failed")), o.ontimeout = () => n(TypeError("Network request timed out")), o.onabort = () => n(new DOMException("Aborted", "AbortError")), o.send(e.body ?? null);
				});
				return fetch(t, e);
			})(r(t), {
				method: t.method,
				headers: t.headers || {},
				body: e,
				onUploadProgress: t.onUploadProgress
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
			});
		}
	};
}, tg = "object" == typeof global && global && global.Object === Object && global, tx = "object" == typeof self && self && self.Object === Object && self, tS = (tg || tx || Function("return this")()).Symbol, tO = Object.prototype, tj = tO.hasOwnProperty, tE = tO.toString, tT = tS ? tS.toStringTag : void 0, tP = function(t) {
	var e = tj.call(t, tT), r = t[tT];
	try {
		t[tT] = void 0;
		var n = !0;
	} catch (t) {}
	var o = tE.call(t);
	return n && (e ? t[tT] = r : delete t[tT]), o;
}, tI = Object.prototype.toString, tA = tS ? tS.toStringTag : void 0, tC = function(t) {
	return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : tA && tA in Object(t) ? tP(t) : tI.call(t);
}, t$ = function(t) {
	var e = typeof t;
	return null != t && ("object" == e || "function" == e);
}, tk = function(t) {
	if (!t$(t)) return !1;
	var e = tC(t);
	return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e;
}, tF = (t, e) => new tR(t, e), tR = class extends R {
	requesting$ = new B(!1);
	error$ = new L();
	_success$ = new L();
	_input$ = new L();
	constructor(t, e) {
		super((t) => this._success$.subscribe(t)), this.createConfig = t, this.fetcher = e;
	}
	get operationID() {
		return this.createConfig.operationID;
	}
	unsubscribe = this._input$.pipe(tp((t) => (this.requesting$.next(!0), ta(this.fetcher.request(this.createConfig(t))).pipe(tb((t) => this._success$.next(t)), function t(e) {
		return z(function(r, n) {
			var o, i = null, u = !1;
			i = r.subscribe(U(n, void 0, void 0, function(s) {
				o = tn(e(s, t(e)(r))), i ? (i.unsubscribe(), i = null, o.subscribe(n)) : u = !0;
			})), u && (i.unsubscribe(), i = null, o.subscribe(n));
		});
	}((t) => (this.error$.next(t), tl(t)))))), tb(() => {
		this.requesting$.next(!1);
	}), th()).subscribe();
	_prevInputs;
	next = (t) => {
		let e = tk(t) ? t(this._prevInputs) : t;
		this._prevInputs = e, this._input$.next(e);
	};
	toHref = (t) => this.fetcher.toHref(this.createConfig(t));
};
export { i as A, k as C, s as D, l as E, e as O, R as S, f as T, D as _, tb as a, U as b, tf as c, ti as d, tn as f, J as g, G as h, tw as i, o as k, tl as l, V as m, tF as n, th as o, X as p, tv as r, tp as s, t_ as t, ta as u, B as v, $ as w, z as x, L as y };
