"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Request {
    static enableLocalMode(port) {
        this.URL = `http://localhost:${port}`;
    }
    static request(path, paramsArray = []) {
        return new Promise((resolve, reject) => {
            let stringParams = "";
            if (paramsArray.length !== 0)
                stringParams = `?${paramsArray.join("&")}`;
            fetch(encodeURI(`${this.URL}/v${this.VERSION}/${path}${stringParams}`))
                .then(result => result.json()).then(result => {
                if (typeof result.error === "undefined") {
                    resolve(result);
                }
                else {
                    reject(result);
                }
            }, reject);
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
