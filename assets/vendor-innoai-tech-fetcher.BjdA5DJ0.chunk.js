var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { O as Observable, B as BehaviorSubject, S as Subject, g as mergeMap, t as tap, h as ignoreElements, e as from, j as catchError, o as of } from "./vendor-rxjs.Bs9iBULs.chunk.js";
import { b as isFunction, v as forEach, d as isArray, e as isObject, a as isUndefined } from "./vendor-innoai-tech-lodash.DimVzCL6.chunk.js";
const createRequestSubject = (createConfig, fetcher) => {
  return new ReqSubject(createConfig, fetcher);
};
class ReqSubject extends Observable {
  constructor(createConfig, fetcher) {
    super((subscriber) => {
      return this._success$.subscribe(subscriber);
    });
    __publicField(this, "requesting$", new BehaviorSubject(false));
    __publicField(this, "error$", new Subject());
    __publicField(this, "_success$", new Subject());
    __publicField(this, "_input$", new Subject());
    __publicField(this, "unsubscribe", this._input$.pipe(mergeMap((input) => {
      this.requesting$.next(true);
      return from(this.fetcher.request(this.createConfig(input))).pipe(tap((resp) => this._success$.next(resp)), catchError((errorResp) => {
        this.error$.next(errorResp);
        return of(errorResp);
      }));
    }), tap(() => {
      this.requesting$.next(false);
    }), ignoreElements()).subscribe());
    __publicField(this, "_prevInputs");
    __publicField(this, "next", (inputs) => {
      const next = isFunction(inputs) ? inputs(this._prevInputs) : inputs;
      this._prevInputs = next;
      this._input$.next(next);
    });
    __publicField(this, "toHref", (value) => {
      return this.fetcher.toHref(this.createConfig(value));
    });
    this.createConfig = createConfig;
    this.fetcher = fetcher;
  }
  get operationID() {
    return this.createConfig.operationID;
  }
}
const getContentType = function() {
  let headers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return headers["Content-Type"] || headers["content-type"] || "";
};
const dropContentType = function() {
  let headers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  if (headers["Content-Type"]) {
    headers["Content-Type"] = void 0;
  }
  if (headers["content-type"]) {
    headers["content-type"] = void 0;
  }
};
const isContentTypeMultipartFormData = (headers) => getContentType(headers).includes("multipart/form-data");
const isContentTypeFormURLEncoded = (headers) => getContentType(headers).includes("application/x-www-form-urlencoded");
const paramsSerializer = (params) => {
  const searchParams = new URLSearchParams();
  const append = (k, v) => {
    if (isArray(v)) {
      forEach(v, (vv) => {
        append(k, vv);
      });
      return;
    }
    if (isObject(v)) {
      append(k, JSON.stringify(v));
      return;
    }
    if (isUndefined(v) || `${v}`.length === 0) {
      return;
    }
    searchParams.append(k, `${v}`);
  };
  forEach(params, (v, k) => {
    append(k, v);
  });
  return searchParams.toString();
};
const transformRequestBody = (data, headers) => {
  if (isContentTypeMultipartFormData(headers)) {
    dropContentType(headers);
    const formData = new FormData();
    const appendValue = (k, v) => {
      if (v instanceof File || v instanceof Blob) {
        formData.append(k, v);
      } else if (isArray(v)) {
        forEach(v, (item) => appendValue(k, item));
      } else if (isObject(v)) {
        formData.append(k, JSON.stringify(v));
      } else {
        formData.append(k, v);
      }
    };
    forEach(data, (v, k) => appendValue(k, v));
    return formData;
  }
  if (isContentTypeFormURLEncoded(headers)) {
    return paramsSerializer(data);
  }
  if (isArray(data) || isObject(data)) {
    return JSON.stringify(data);
  }
  return data;
};
const createFetcher = (param) => {
  let { paramsSerializer: paramsSerializer2, transformRequestBody: transformRequestBody2 } = param;
  return {
    toHref: (requestConfig) => {
      let search = paramsSerializer2(requestConfig.params);
      if (search.length && !search.startsWith("?")) {
        search = "?" + search;
      }
      return `${requestConfig.url}${search}`;
    },
    request: (requestConfig) => {
      const reqInit = {
        method: requestConfig.method,
        headers: requestConfig.headers || {},
        body: transformRequestBody2(requestConfig.body, requestConfig.headers || {})
      };
      return fetch(`${requestConfig.url}?${paramsSerializer2(requestConfig.params)}`, reqInit).then(async (res) => {
        var _a, _b;
        let body;
        if ((_a = res.headers.get("Content-Type")) == null ? void 0 : _a.includes("application/json")) {
          body = await res.json();
        } else if ((_b = res.headers.get("Content-Type")) == null ? void 0 : _b.includes("application/octet-stream")) {
          body = await res.blob();
        } else {
          body = await res.text();
        }
        const resp = {
          config: requestConfig,
          status: res.status,
          headers: {}
        };
        for (const [key, value] of res.headers) {
          resp.headers[key] = value;
        }
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
export {
  createRequestSubject as a,
  createFetcher as c,
  paramsSerializer as p,
  transformRequestBody as t
};
