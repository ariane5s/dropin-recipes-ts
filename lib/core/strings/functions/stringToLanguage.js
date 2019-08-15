"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Languages_1 = require("../Languages");
function stringToLanguage(language) {
    switch (language) {
        case Languages_1.Language.FRENCH: return Languages_1.Language.FRENCH;
        default: return Languages_1.Language.ENGLISH;
    }
}
exports.stringToLanguage = stringToLanguage;
