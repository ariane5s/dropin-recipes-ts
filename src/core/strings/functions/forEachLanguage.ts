import { Language, LanguageOption, LanguageOptions } from "../Languages"
import { languageToString } from "./languageToString"

type Callback<Output> = (
  language: Language,
  name: string,
  options: LanguageOption,
) => Output | void

export function forEachLanguage<Output = any>(callback: Callback<Output>, useDefaultLanguage = true): Output[] {
  return Object.values(Language).reduce((output, language: Language) => {
    // Current language
    const name = languageToString(language, useDefaultLanguage)
    const options = LanguageOptions[language]

    // Response
    const response = callback(language, name, options)
    if(typeof response !== "undefined") {
      output.push(response)
    }

    // Returning current list
    return output
  }, [] as Output[])
}
