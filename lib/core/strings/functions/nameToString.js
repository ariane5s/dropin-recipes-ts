"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Languages_1 = require("../../selectors/Languages");
const Languages_2 = require("../Languages");
function nameToString(name, options = {}) {
    if (typeof name === "string")
        return name;
    let output = "";
    // Is NameByLanguage
    if (typeof name === "object") {
        let current = output;
        // Global text is set
        if (typeof name[Languages_1.AnyLanguageSelector] !== "undefined") {
            current = name[Languages_1.AnyLanguageSelector];
            // Current language
        }
        else if (typeof options.language !== "undefined" && typeof name[options.language] !== "undefined") {
            current = name[options.language];
            // Default language
        }
        else if (typeof name[Languages_2.DEFAULT_LANGUAGE] !== "undefined") {
            current = name[Languages_2.DEFAULT_LANGUAGE];
        }
        // Is NameByNumber
        if (typeof current === "object") {
            if ((typeof options.count === "undefined" || options.count === 1) && typeof current.one !== "undefined") {
                output = current.one;
            }
            else if (typeof current.many !== "undefined") {
                output = current.many;
            }
        }
        else {
            output = current;
        }
    }
    return output;
}
exports.nameToString = nameToString;
