"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Language;
(function (Language) {
    Language["ENGLISH"] = "en";
    Language["FRENCH"] = "fr";
})(Language = exports.Language || (exports.Language = {}));
exports.LanguageOptions = {
    // French
    [Language.FRENCH]: {
        name: {
            [Language.FRENCH]: "Français",
            [Language.ENGLISH]: "French",
        },
        articles: true,
    },
    // English
    [Language.ENGLISH]: {
        name: {
            [Language.FRENCH]: "Anglais",
            [Language.ENGLISH]: "English",
        },
        articles: false,
    },
};
