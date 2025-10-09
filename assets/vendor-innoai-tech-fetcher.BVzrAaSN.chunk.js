import { S as e, _ as t, b as r, c as s, o as n, p as o, t as a, v as i, x as u } from "./vendor-rxjs.CLbJyizg.chunk.js";
var p = (e) => !!e && e.constructor === Object, l = Array.isArray, c = (e) => {
	let t = new URLSearchParams(), r = (e, s) => {
		if (l(s)) {
			for (let t of s) r(e, t);
			return;
		}
		p(s) ? r(e, JSON.stringify(s)) : void 0 !== s && 0 !== `${s}`.length && t.append(e, `${s}`);
	};
	if (e) for (let [t, s] of Object.entries(e)) r(t, s);
	return t.toString();
}, d = (e = {}) => e["Content-Type"] || e["content-type"] || "", f = (e, t) => {
	if (d(t).includes("multipart/form-data")) {
		((e = {}) => {
			e["Content-Type"] && (e["Content-Type"] = void 0), e["content-type"] && (e["content-type"] = void 0);
		})(t);
		let r = new FormData(), s = (e, t) => {
			if (t instanceof File || t instanceof Blob) r.append(e, t);
			else if (l(t)) for (let r of t) s(e, r);
			else p(t) ? r.append(e, JSON.stringify(t)) : r.append(e, t);
		};
		for (let [t, r] of e) s(t, r);
		return r;
	}
	return d(t).includes("application/x-www-form-urlencoded") ? c(e) : d(t).includes("application/octet-stream") ? e : d(t).includes("application/json") || l(e) || p(e) ? JSON.stringify(e) : e;
}, h = ({ paramsSerializer: e, transformRequestBody: t }) => {
	let r = (t) => {
		let r = e(t.params);
		return r.length && !r.startsWith("?") && (r = "?" + r), `${t.url}${r}`;
	}, s = (e) => t(e.body, e.headers || {});
	return {
		build: (e) => e,
		toRequestBody: s,
		toHref: r,
		async request(e) {
			let t = s(e);
			return (function(e, t) {
				if (t.onUploadProgress && "undefined" != typeof XMLHttpRequest) return new Promise((r, s) => {
					let n = new XMLHttpRequest();
					if (n.open(t.method ?? "GET", e), t.headers) for (let [e, r] of Object.entries(t.headers)) n.setRequestHeader(e, r);
					n.upload && "function" == typeof t.onUploadProgress && n.upload.addEventListener("progress", t.onUploadProgress), n.responseType = "arraybuffer", n.onloadend = () => {
						if (0 == n.status) return;
						let e = function(e) {
							let t = e.trim().split(/[\r\n]+/), r = new Headers();
							for (let e of t) {
								let t = e.split(": "), s = t.shift();
								r.set(s, t.join(": "));
							}
							return r;
						}(n.getAllResponseHeaders());
						r(new Response(204 != n.status && n.response ? new Blob(n.response) : null, {
							status: n.status,
							statusText: n.statusText,
							headers: e
						}));
					}, n.onerror = () => s(TypeError("Network request failed")), n.ontimeout = () => s(TypeError("Network request timed out")), n.onabort = () => s(new DOMException("Aborted", "AbortError")), n.send(t.body ?? null);
				});
				return fetch(e, t);
			})(r(e), {
				method: e.method,
				headers: e.headers || {},
				body: t,
				onUploadProgress: e.onUploadProgress
			}).then(async (t) => {
				let r;
				r = t.headers.get("Content-Type")?.includes("application/json") ? await t.json() : t.headers.get("Content-Type")?.includes("application/octet-stream") ? await t.blob() : await t.text();
				let s = {
					config: e,
					status: t.status,
					headers: {}
				};
				for (let [e, r] of Object.entries(t.headers ?? {})) s.headers[e] = r;
				return s.body = r, s;
			}).then((e) => {
				if (e.status >= 400) throw e.error = e.body, e;
				return e;
			});
		}
	};
}, y = (e, t) => new b(e, t), b = class extends e {
	requesting$ = new r(!1);
	error$ = new u();
	_success$ = new u();
	_input$ = new u();
	constructor(e, t) {
		super((e) => this._success$.subscribe(e)), this.createConfig = e, this.fetcher = t;
	}
	get operationID() {
		return this.createConfig.operationID;
	}
	unsubscribe = this._input$.pipe(o((e) => (this.requesting$.next(!0), i(this.fetcher.request(this.createConfig(e))).pipe(a((e) => this._success$.next(e)), s((e) => (this.error$.next(e), t(e)))))), a(() => {
		this.requesting$.next(!1);
	}), n()).subscribe();
	_prevInputs;
	next = (e) => {
		let t = "function" == typeof e ? e(this._prevInputs) : e;
		this._prevInputs = t, this._input$.next(t);
	};
	toHref = (e) => this.fetcher.toHref(this.createConfig(e));
};
export { f as i, y as n, c as r, h as t };
