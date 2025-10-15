import { A as of, D as mergeMap, F as Observable, N as BehaviorSubject, P as Subject, S as catchError, b as ignoreElements, h as tap, j as from } from "./vendor-innoai-tech-vuekit.CUMstO-e.chunk.js";
var isUndefined = (value) => typeof value === "undefined";
var isFunction = (value) => typeof value === "function";
var isObject = (value) => !!value && value.constructor === Object;
var isArray = Array.isArray;
function xhrFetch(url, options) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(options.method ?? "GET", url);
		if (options.headers) for (const [key, value] of Object.entries(options.headers)) xhr.setRequestHeader(key, value);
		if (xhr.upload && isFunction(options.onUploadProgress)) xhr.upload.addEventListener("progress", options.onUploadProgress);
		xhr.responseType = "arraybuffer";
		xhr.onloadend = () => {
			if (xhr.status == 0) return;
			const headers = /* @__PURE__ */ parseHeaders(/* @__PURE__ */ xhr.getAllResponseHeaders());
			resolve(new Response(xhr.status != 204 && xhr.response ? new Blob(xhr.response) : null, {
				status: xhr.status,
				statusText: xhr.statusText,
				headers
			}));
		};
		xhr.onerror = () => reject(/* @__PURE__ */ new TypeError("Network request failed"));
		xhr.ontimeout = () => reject(/* @__PURE__ */ new TypeError("Network request timed out"));
		xhr.onabort = () => reject(new DOMException("Aborted", "AbortError"));
		xhr.send(options.body ?? null);
	});
}
function parseHeaders(rawHeaders) {
	const headerRows = /* @__PURE__ */ rawHeaders.trim().split(/[\r\n]+/);
	const headers = new Headers();
	for (const line of headerRows) {
		const parts = /* @__PURE__ */ line.split(": ");
		const key = /* @__PURE__ */ parts.shift();
		headers.set(key, /* @__PURE__ */ parts.join(": "));
	}
	return headers;
}
var paramsSerializer = (params) => {
	const searchParams = new URLSearchParams();
	const append = (k, v) => {
		if (isArray(v)) {
			for (const x of v) append(k, x);
			return;
		}
		if (isObject(v)) {
			append(k, /* @__PURE__ */ JSON.stringify(v));
			return;
		}
		if (isUndefined(v) || `${v}`.length === 0) return;
		searchParams.append(k, `${v}`);
	};
	if (params) for (const [k, v] of Object.entries(params)) append(k, v);
	return searchParams.toString();
};
var getContentType = (headers = {}) => headers["Content-Type"] || headers["content-type"] || "";
var dropContentType = (headers = {}) => {
	if (headers["Content-Type"]) headers["Content-Type"] = void 0;
	if (headers["content-type"]) headers["content-type"] = void 0;
};
var isContentTypeMultipartFormData = (headers) => getContentType(headers).includes("multipart/form-data");
var isContentTypeApplicationJSON = (headers) => getContentType(headers).includes("application/json");
var isContentTypeOctetStream = (headers) => getContentType(headers).includes("application/octet-stream");
var isContentTypeFormURLEncoded = (headers) => getContentType(headers).includes("application/x-www-form-urlencoded");
var transformRequestBody = (data, headers) => {
	if (isContentTypeMultipartFormData(headers)) {
		dropContentType(headers);
		const formData = new FormData();
		const appendValue = (k, v) => {
			if (v instanceof File || v instanceof Blob) formData.append(k, v);
			else if (isArray(v)) for (const item of v) appendValue(k, item);
			else if (isObject(v)) formData.append(k, /* @__PURE__ */ JSON.stringify(v));
			else formData.append(k, v);
		};
		for (const [k, v] of data) appendValue(k, v);
		return formData;
	}
	if (isContentTypeFormURLEncoded(headers)) return paramsSerializer(data);
	if (isContentTypeOctetStream(headers)) return data;
	if (isContentTypeApplicationJSON(headers)) return JSON.stringify(data);
	if (isArray(data) || isObject(data)) return JSON.stringify(data);
	return data;
};
function xFetch(url, options) {
	if (options.onUploadProgress) {
		if (typeof XMLHttpRequest !== "undefined") return xhrFetch(url, options);
	}
	return fetch(url, options);
}
var createFetcher = ({ paramsSerializer: paramsSerializer$1, transformRequestBody: transformRequestBody$1 }) => {
	const toHref = (requestConfig) => {
		let search = /* @__PURE__ */ paramsSerializer$1(requestConfig.params);
		if (search.length && !search.startsWith("?")) search = "?" + search;
		return `${requestConfig.url}${search}`;
	};
	const toRequestBody = (requestConfig) => {
		return transformRequestBody$1(requestConfig.body, requestConfig.headers || {});
	};
	return {
		build: (c) => c,
		toRequestBody,
		toHref,
		async request(requestConfig) {
			const requestBody = /* @__PURE__ */ toRequestBody(requestConfig);
			return xFetch(/* @__PURE__ */ toHref(requestConfig), {
				method: requestConfig.method,
				headers: requestConfig.headers || {},
				body: requestBody,
				onUploadProgress: requestConfig.onUploadProgress
			}).then(async (res) => {
				let body;
				if (res.headers.get("Content-Type")?.includes("application/json")) body = await res.json();
				else if (res.headers.get("Content-Type")?.includes("application/octet-stream")) body = await res.blob();
				else body = await res.text();
				const resp = {
					config: requestConfig,
					status: res.status,
					headers: {}
				};
				for (const [key, value] of res.headers.entries()) resp.headers[key] = value;
				resp.body = body;
				return resp;
			}).then((resp) => {
				if (resp.status >= 400) {
					resp.error = resp.body;
					throw resp;
				}
				return resp;
			});
		}
	};
};
var createRequestSubject = (createConfig, fetcher) => {
	return new ReqSubject(createConfig, fetcher);
};
var ReqSubject = class extends Observable {
	requesting$ = new BehaviorSubject(false);
	error$ = new Subject();
	_success$ = new Subject();
	_input$ = new Subject();
	constructor(createConfig, fetcher) {
		super((subscriber) => {
			return this._success$.subscribe(subscriber);
		});
		this.createConfig = createConfig;
		this.fetcher = fetcher;
	}
	get operationID() {
		return this.createConfig.operationID;
	}
	unsubscribe = this._input$.pipe(/* @__PURE__ */ mergeMap((input) => {
		this.requesting$.next(true);
		return from(/* @__PURE__ */ this.fetcher.request(/* @__PURE__ */ this.createConfig(input))).pipe(/* @__PURE__ */ tap((resp) => this._success$.next(resp)), /* @__PURE__ */ catchError((errorResp) => {
			this.error$.next(errorResp);
			return of(errorResp);
		}));
	}), /* @__PURE__ */ tap(() => {
		this.requesting$.next(false);
	}), /* @__PURE__ */ ignoreElements()).subscribe();
	_prevInputs;
	next = (inputs) => {
		const next = isFunction(inputs) ? inputs(this._prevInputs) : inputs;
		this._prevInputs = next;
		this._input$.next(next);
	};
	toHref = (value) => {
		return this.fetcher.toHref(/* @__PURE__ */ this.createConfig(value));
	};
};
export { transformRequestBody as i, createRequestSubject as n, paramsSerializer as r, createFetcher as t };
