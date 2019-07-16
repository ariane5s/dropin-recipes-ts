"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
var FetchMethod;
(function (FetchMethod) {
    FetchMethod["PUT"] = "PUT";
    FetchMethod["GET"] = "GET";
    FetchMethod["POST"] = "POST";
    FetchMethod["DELETE"] = "DELETE";
})(FetchMethod || (FetchMethod = {}));
class Request {
    static enableLocalMode(port) {
        this.URL = `http://localhost:${port}`;
    }
    static setToken(token) {
        this.TOKEN = token;
    }
    static fetch(method, path, params) {
        let init = { method, headers: { "content-type": "application/json" } };
        // Token
        if (typeof this.TOKEN !== "undefined") {
            init.headers["Authorization"] = "Bearer " + this.TOKEN;
        }
        // Parameters
        let stringParams = "";
        const keys = Object.keys(params);
        if (keys.length !== 0) {
            stringParams = `?${keys.map((k) => k + "=" + params[k]).join('&')}`;
        }
        // URL
        const url = encodeURI(`${this.URL}/v${this.VERSION}/${path}${stringParams}`);
        // Fetch
        const fetchFunction = fetch || node_fetch_1.default;
        return new Promise((resolve, reject) => {
            return fetchFunction(url, init)
                .then(result => result.json())
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
    static register(invitationCode, email, password) {
        return this.fetch(FetchMethod.PUT, "users", {
            invitation_code: invitationCode,
            email: email,
            password: password,
        });
    }
    static login(email, password) {
        return this.fetch(FetchMethod.POST, "auth", {
            email: email,
            password: password,
        });
    }
    static forgottenPassword(email, hash) {
        let params = { email };
        if (typeof hash !== "undefined")
            params.hash = hash;
        return this.fetch(FetchMethod.POST, "forgotten", params);
    }
    static forgottenPasswordUpdate(email, hash, password) {
        return this.fetch(FetchMethod.POST, "forgotten", {
            email: email,
            hash: hash,
            password: password,
        });
    }
    static validateEmail(email, hash) {
        return this.fetch(FetchMethod.GET, "validate", {
            email: email,
            hash: hash,
        });
    }
    static getLines(recipe, collection, params = {}) {
        return this.fetch(FetchMethod.GET, `recipes/${recipe}/collections/${collection}/lines`, params);
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
        if (typeof params.linesOnly !== "undefined") {
            return Promise.reject(`The "linesOnly" parameter can only be used by the getDocumentLines function`);
        }
        return this.fetch(FetchMethod.GET, `recipes/${recipe}/documents/${document}`, params);
    }
    static getDocumentLines(recipe, document, params = {}) {
        params.linesOnly = "1";
        return this.getDocument(recipe, document, params);
    }
}
Request.URL = "https://api.dropin.link";
Request.VERSION = 1;
exports.Request = Request;
