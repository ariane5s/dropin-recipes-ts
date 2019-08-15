"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Languages_1 = require("./Languages");
const functions_1 = require("./functions");
exports.CURRENT_LANGUAGE = Languages_1.DEFAULT_LANGUAGE;
function setCurrentLanguage(locale) {
    exports.CURRENT_LANGUAGE = functions_1.stringToLanguage(locale);
}
exports.setCurrentLanguage = setCurrentLanguage;
exports.i18nData = (data) => data;
function i18n(data, options = {}) {
    // Name conversion
    let output = functions_1.nameToString(data, {
        language: exports.CURRENT_LANGUAGE,
        count: options.count,
    });
    // Variables
    if (typeof options.vars !== "undefined") {
        Object.keys(options.vars).forEach(variable => {
            output = output.replace(new RegExp(`\\$\\{${variable}\\}`), options.vars[variable]);
        });
    }
    // Lowercase
    if (typeof options.lowercase !== "undefined" && options.lowercase) {
        output = output.toLowerCase();
    }
    return output;
}
exports.i18n = i18n;
