"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertNameToString_1 = require("./convertNameToString");
exports.Languages = {
    // French
    [LanguageSelector.FRENCH]: {
        name: {
            [LanguageSelector.FRENCH]: "Français",
            [LanguageSelector.ENGLISH]: "French",
        },
        articles: true,
    },
    // English
    [LanguageSelector.ENGLISH]: {
        name: {
            [LanguageSelector.FRENCH]: "Anglais",
            [LanguageSelector.ENGLISH]: "English",
        },
        articles: false,
    },
};
function forEachLanguage(callback, language) {
    return Object.keys(exports.Languages).reduce((output, id) => {
        const contextLanguage = typeof language !== "undefined" ? language : id;
        const options = exports.Languages[id];
        const name = convertNameToString_1.convertNameToString(contextLanguage, options.name[contextLanguage]);
        const response = callback(id, name, options);
        if (typeof response !== "undefined") {
            output.push(response);
        }
        return output;
    }, []);
}
exports.forEachLanguage = forEachLanguage;
