"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Language;
(function (Language) {
    Language["ENGLISH"] = "en";
    Language["FRENCH"] = "fr";
})(Language = exports.Language || (exports.Language = {}));
exports.DEFAULT_LANGUAGE = Language.ENGLISH;
exports.LanguageOptions = {
    // English
    [Language.ENGLISH]: {
        name: {
            [Language.ENGLISH]: "English",
            [Language.FRENCH]: "Anglais",
        },
        articles: false,
    },
    // French
    [Language.FRENCH]: {
        name: {
            [Language.ENGLISH]: "French",
            [Language.FRENCH]: "Français",
        },
        articles: true,
    },
};
