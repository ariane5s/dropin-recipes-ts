"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Recipes {
    static enableLocalMode(port = 8040) {
        this.API = `http://localhost:${port}/`;
    }
    static request(path) {
        return new Promise((resolve, reject) => {
            fetch(this.API + path).then(result => result.json()).then(result => {
                if (typeof result.error === "undefined") {
                    resolve(result);
                }
                else {
                    reject(result);
                }
            }, reject);
        });
    }
    static getDocument(recipe, document) {
        return this.request(`recipes/${recipe}/documents/${document}`);
    }
    static getLines(recipe, collection, filters) {
        return this.request(`recipes/${recipe}/collections/${collection}/lines`);
    }
}
Recipes.API = "https://api.dropin.link/";
exports.default = Recipes;
