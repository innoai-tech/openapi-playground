import { O as Observable, B as BehaviorSubject, S as Subject, g as mergeMap, t as tap, h as ignoreElements, e as from, j as catchError, o as of } from './vendor-rxjs.BO1Fdxz5.chunk.js';
import { b as isFunction, v as forEach, d as isArray, e as isObject, a as isUndefined } from './vendor-innoai-tech-lodash.CDxVqk50.chunk.js';

const createRequestSubject = (createConfig, fetcher) => {
  return new ReqSubject(createConfig, fetcher);
};
class ReqSubject extends Observable {
  constructor(createConfig, fetcher) {
    super((subscriber) => {
      return this._success$.subscribe(subscriber);
    });
    this.createConfig = createConfig;
    this.fetcher = fetcher;
  }
  requesting$ = new BehaviorSubject(false);
  error$ = new Subject();
  _success$ = new Subject();
  _input$ = new Subject();
  get operationID() {
    return this.createConfig.operationID;
  }
  unsubscribe = this._input$.pipe(
    mergeMap((input) => {
      this.requesting$.next(true);
      return from(
        this.fetcher.request(this.createConfig(input))
      ).pipe(
        tap((resp) => this._success$.next(resp)),
        catchError((errorResp) => {
          this.error$.next(errorResp);
          return of(errorResp);
        })
      );
    }),
    tap(() => {
      this.requesting$.next(false);
    }),
    ignoreElements()
  ).subscribe();
  _prevInputs;
  next = (inputs) => {
    const next = isFunction(inputs) ? inputs(this._prevInputs) : inputs;
    this._prevInputs = next;
    this._input$.next(next);
  };
  toHref = (value) => {
    return this.fetcher.toHref(this.createConfig(value));
  };
}
const getContentType = (headers = {}) => headers["Content-Type"] || headers["content-type"] || "";
const dropContentType = (headers = {}) => {
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

const createFetcher = ({
  paramsSerializer,
  transformRequestBody
}) => {
  return {
    toHref: (requestConfig) => {
      let search = paramsSerializer(requestConfig.params);
      if (search.length && !search.startsWith("?")) {
        search = "?" + search;
      }
      return `${requestConfig.url}${search}`;
    },
    request: (requestConfig) => {
      const reqInit = {
        method: requestConfig.method,
        headers: requestConfig.headers || {},
        body: transformRequestBody(
          requestConfig.body,
          requestConfig.headers || {}
        )
      };
      return fetch(
        `${requestConfig.url}?${paramsSerializer(requestConfig.params)}`,
        reqInit
      ).then(async (res) => {
        let body;
        if (res.headers.get("Content-Type")?.includes("application/json")) {
          body = await res.json();
        } else if (res.headers.get("Content-Type")?.includes("application/octet-stream")) {
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

export { createRequestSubject as a, createFetcher as c, paramsSerializer as p, transformRequestBody as t };
