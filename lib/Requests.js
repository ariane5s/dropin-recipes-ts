"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
class Request {
    static enableLocalMode(port) {
        this.URL = `http://localhost:${port}`;
    }
    static fetch(path) {
        if (typeof fetch === "undefined") {
            return node_fetch_1.default(path).then(result => result.json());
        }
        return fetch(path).then(result => result.json());
    }
    static request(path, paramsArray = []) {
        return new Promise((resolve, reject) => {
            let stringParams = "";
            if (paramsArray.length !== 0)
                stringParams = `?${paramsArray.join("&")}`;
            return this.fetch(encodeURI(`${this.URL}/v${this.VERSION}/${path}${stringParams}`))
                .then(result => {
                if (typeof result.error === "undefined") {
                    resolve(result);
                }
                else {
                    reject(result);
                }
            }, reject);
        });
    }
    static getLines(recipe, collection, params = {}) {
        const stringParams = [];
        if (typeof params.filters !== "undefined")
            stringParams.push(`f=${params.filters}`);
        return this.request(`recipes/${recipe}/collections/${collection}/lines`, stringParams);
    }
    static getOneLine(recipe, collection, params = {}) {
        return this.getLines(recipe, collection, params).then(lines => {
            if (lines.length !== 1) {
                return Promise.reject("More than one line found");
            }
            return Promise.resolve(lines[0]);
        });
    }
    static getDocument(recipe, document, params = {}) {
        const stringParams = [];
        if (typeof params.token !== "undefined")
            stringParams.push(`t=${params.token}`);
        if (typeof params.filters !== "undefined")
            stringParams.push(`f=${params.filters}`);
        if (typeof params.linesOnly !== "undefined")
            stringParams.push(`linesOnly=${params.linesOnly}`);
        return this.request(`recipes/${recipe}/documents/${document}`, stringParams);
    }
    static getDocumentLines(recipe, document, params = {}) {
        params.linesOnly = "1";
        return this.getDocument(recipe, document, params);
    }
}
Request.URL = "https://api.dropin.link";
Request.VERSION = 1;
exports.Request = Request;
