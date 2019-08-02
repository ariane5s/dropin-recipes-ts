import { Language, LanguageOptions } from "../Languages"
import { nameToString } from "./nameToString"
import { currentLanguage } from "../i18n";

export function languageToString(language: Language, useDefaultLanguage = true) {
  const options = LanguageOptions[language]
  const contextLanguage = useDefaultLanguage ? currentLanguage : language
  return nameToString(options.name, { language: contextLanguage })
}
