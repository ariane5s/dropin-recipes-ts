import { Language, LanguageOptions } from "../Languages"
import { nameToString } from "./nameToString"
import { CURRENT_LANGUAGE } from "../i18n"

export function languageToString(language: Language, useDefaultLanguage = true): string {
  const options = LanguageOptions[language]
  const contextLanguage = useDefaultLanguage ? CURRENT_LANGUAGE : language
  return nameToString(options.name, { language: contextLanguage })
}
