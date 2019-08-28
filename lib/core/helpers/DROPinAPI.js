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
class DROPinAPI {
    static enableLocalMode(port) {
        this.URL = `http://localhost:${port}`;
    }
    static setToken(token) {
        this.TOKEN = token;
    }
    static fetch(url, init) {
        if (typeof node_fetch_1.default !== "undefined") {
            return node_fetch_1.default(url, init);
        }
        return fetch(url, init);
    }
    static request(method, path, params = {}, body) {
        let init = { method, headers: { "content-type": "application/json" } };
        // Token
        if (typeof this.TOKEN !== "undefined") {
            init.headers["Authorization"] = "Bearer " + this.TOKEN;
        }
        // Body
        if (typeof body !== "undefined") {
            init.body = JSON.stringify(body);
        }
        // String parameters
        let stringParams = "";
        const keys = Object.keys(params);
        if (keys.length !== 0) {
            stringParams = `?${keys.filter(k => typeof params[k] !== "undefined").map(k => k + "=" + params[k]).join("&")}`;
        }
        // URL
        const url = encodeURI(`${this.URL}/v${this.VERSION}/${path}${stringParams}`);
        // Fetch
        return new Promise((resolve, reject) => {
            return this.fetch(url, init)
                .then(result => result.json())
                .then(result => {
                if (typeof result.error === "undefined") {
                    resolve(result);
                }
                else {
                    reject(result.error);
                }
            }, reject);
        });
    }
    static register(invitationCode, email, password) {
        return this.request(FetchMethod.PUT, "users", {}, {
            invitation_code: invitationCode,
            email: email,
            password: password,
        });
    }
    static login(email, password) {
        return this.request(FetchMethod.POST, "auth", {}, {
            email: email,
            password: password,
        });
    }
    static forgottenPassword(email, hash) {
        let params = { email };
        if (typeof hash !== "undefined")
            params.hash = hash;
        return this.request(FetchMethod.POST, "forgotten", {}, params);
    }
    static forgottenPasswordUpdate(email, hash, password) {
        return this.request(FetchMethod.POST, "forgotten", {}, {
            email: email,
            hash: hash,
            password: password,
        });
    }
    static validateEmail(email, hash) {
        return this.request(FetchMethod.GET, "validate", {
            email: email,
            hash: hash,
        });
    }
    static getLines(recipe, collection, params = {}) {
        return this.request(FetchMethod.GET, `recipes/${recipe}/collections/${collection}/lines`, params);
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
        return this.request(FetchMethod.GET, `recipes/${recipe}/documents/${document}`, params);
    }
    static getDocumentLines(recipe, document, params = {}) {
        params.linesOnly = "1";
        return this.request(FetchMethod.GET, `recipes/${recipe}/documents/${document}`, params);
    }
    static getNotifications(user) {
        return this.request(FetchMethod.GET, `users/${user}/notifs`);
    }
    static setNotificationAsRead(user, notification, isRead) {
        return this.request(FetchMethod.POST, `users/${user}/notifs/${notification}`, {}, {
            is_read: isRead
        });
    }
    static getCompanies() {
        return this.request(FetchMethod.GET, `companies`);
    }
    static getCompaniesAndRecipes(user) {
        return this.request(FetchMethod.GET, `users/${user}/companies-and-recipes`);
    }
    static getCompany(company) {
        return this.request(FetchMethod.GET, `companies/${company}`);
    }
    static createCompany(name, company, administrators) {
        return this.request(FetchMethod.PUT, "companies", {}, {
            name,
            slug: company,
            administrators
        });
    }
    static updateCompany(name, company, administrators) {
        return this.request(FetchMethod.POST, `companies/${company}`, {}, {
            name,
            slug: company,
            administrators
        });
    }
    static deleteCompany(company) {
        return this.request(FetchMethod.DELETE, `companies/${company}`);
    }
    static getCollection(recipe, collection) {
        return this.request(FetchMethod.GET, `recipes/${recipe}/collections/${collection}`);
    }
    static createCollection(recipe, collection, name, fields) {
        return this.request(FetchMethod.PUT, `recipes/${recipe}/collections`, {}, {
            name,
            slug: collection,
            fields
        });
    }
    static updateCollection(recipe, collection, name, fields) {
        return this.request(FetchMethod.POST, `recipes/${recipe}/collections/${collection}`, {}, {
            name,
            slug: collection,
            fields
        });
    }
    static deleteCollection(recipe, collection) {
        return this.request(FetchMethod.DELETE, `recipes/${recipe}/collections/${collection}`);
    }
    static getRecipe(recipe) {
        return this.request(FetchMethod.GET, `recipes/${recipe}`);
    }
    static createRecipe(name, recipeId, company, administrators, authors) {
        return this.request(FetchMethod.PUT, "recipes", {}, {
            name,
            slug: recipeId,
            company,
            authors,
            administrators
        });
    }
    static updateRecipe(name, recipeId, administrators, authors) {
        return this.request(FetchMethod.POST, `recipes/${recipeId}`, {}, {
            name,
            slug: recipeId,
            authors,
            administrators
        });
    }
    static deleteRecipe(recipe) {
        return this.request(FetchMethod.DELETE, `recipes/${recipe}`);
    }
    static getSection(recipe, section) {
        return this.request(FetchMethod.GET, `recipes/${recipe}/sections/${section}`);
    }
    static createSection(recipe, section, name, list) {
        return this.request(FetchMethod.PUT, `recipes/${recipe}/sections`, {}, {
            name,
            slug: section,
            list
        });
    }
    static updateSection(recipe, section, name, list) {
        return this.request(FetchMethod.POST, `recipes/${recipe}/sections/${section}`, {}, {
            name,
            slug: section,
            list
        });
    }
    static deleteSection(recipe, section) {
        return this.request(FetchMethod.DELETE, `recipes/${recipe}/sections/${section}`);
    }
    static getLines(recipe, collection) {
        return this.request(FetchMethod.GET, `recipes/${recipe}/collections/${collection}`);
    }
}
DROPinAPI.URL = "https://api.dropin.link";
DROPinAPI.VERSION = 1;
exports.DROPinAPI = DROPinAPI;
