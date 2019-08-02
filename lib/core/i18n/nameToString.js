"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Languages_1 = require("../selectors/Languages");
function nameToString(name, options = {}, vars = {}) {
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
    // Variables
    Object.keys(vars).forEach(variable => {
        output = output.replace(new RegExp(`\\$\\{${variable}\\}`), vars[variable]);
    });
    // Lowercase
    if (typeof options.lowercase !== "undefined" && options.lowercase) {
        output = output.toLowerCase();
    }
    return output;
}
exports.nameToString = nameToString;
