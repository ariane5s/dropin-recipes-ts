"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Languages_1 = require("../Languages");
const languageToString_1 = require("./languageToString");
function forEachLanguage(callback, useDefaultLanguage = true) {
    return Object.values(Languages_1.Language).reduce((output, language) => {
        // Current language
        const name = languageToString_1.languageToString(language, useDefaultLanguage);
        const options = Languages_1.LanguageOptions[language];
        // Response
        const response = callback(language, name, options);
        if (typeof response !== "undefined") {
            output.push(response);
        }
        // Returning current list
        return output;
    }, []);
}
exports.forEachLanguage = forEachLanguage;
