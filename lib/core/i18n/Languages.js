"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Languages_1 = require("../selectors/Languages");
exports.Languages = {
    // French
    [Languages_1.LanguageSelector.FRENCH]: {
        name: {
            [Languages_1.LanguageSelector.FRENCH]: "Français",
            [Languages_1.LanguageSelector.ENGLISH]: "French",
        },
        articles: true,
    },
    // English
    [Languages_1.LanguageSelector.ENGLISH]: {
        name: {
            [Languages_1.LanguageSelector.FRENCH]: "Anglais",
            [Languages_1.LanguageSelector.ENGLISH]: "English",
        },
        articles: false,
    },
};
/*type forEachLanguageCallback<Output> = (languageId: string, name: string, options: LanguageOption) => Output | undefined

export function forEachLanguage<Output = any>(callback: forEachLanguageCallback<Output>, language?: string): Output[] {
  return Object.keys(Languages).reduce((output, id) => {
    const contextLanguage = typeof language !== "undefined" ? language : id
    const options = Languages[id]
    const name = nameToString(contextLanguage, options.name[contextLanguage])
    const response = callback(id, name, options)
    if(typeof response !== "undefined") {
      output.push(response)
    }
    return output
  }, [] as Output[])
}*/
