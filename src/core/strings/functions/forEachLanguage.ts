import { Language, LanguageOption, LanguageOptions } from "../Languages"
import { stringToLanguage } from "./stringToLanguage"
import { nameToString } from "./nameToString"
import { currentLanguage } from "../i18n"
import { languageToString } from "./languageToString";

type Callback<Output> = (
  language: Language,
  name: string,
  options: LanguageOption,
) => Output | void

export function forEachLanguage<Output = any>(callback: Callback<Output>, useDefaultLanguage = true): Output[] {
  return Object.values(Language).reduce((output, languageId) => {
    // Current language
    const language = stringToLanguage(languageId)
    const options = LanguageOptions[language]

    // Language name
    const name = languageToString(language, useDefaultLanguage)

    // Response
    const response = callback(language, name, options)
    if(typeof response !== "undefined") {
      output.push(response)
    }

    // Returning current list
    return output
  }, [] as Output[])
}
