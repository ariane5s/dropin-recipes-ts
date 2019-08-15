"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Languages_1 = require("../Languages");
const nameToString_1 = require("./nameToString");
const i18n_1 = require("../i18n");
function languageToString(language, useDefaultLanguage = true) {
    const options = Languages_1.LanguageOptions[language];
    const contextLanguage = useDefaultLanguage ? i18n_1.CURRENT_LANGUAGE : language;
    return nameToString_1.nameToString(options.name, { language: contextLanguage });
}
exports.languageToString = languageToString;
