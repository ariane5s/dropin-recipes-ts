"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LanguageSelector;
(function (LanguageSelector) {
    LanguageSelector["ENGLISH"] = "en";
    LanguageSelector["FRENCH"] = "fr";
})(LanguageSelector = exports.LanguageSelector || (exports.LanguageSelector = {}));
exports.AnyLanguageSelector = "*";
function stringToLanguageSelector(language) {
    switch (language) {
        case LanguageSelector.FRENCH: return LanguageSelector.FRENCH;
        default: return LanguageSelector.ENGLISH;
    }
}
exports.stringToLanguageSelector = stringToLanguageSelector;
