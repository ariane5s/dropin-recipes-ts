import { Language } from "../Languages"

export function stringToLanguage(language: string): Language {
  switch(language) {
    case Language.FRENCH: return Language.FRENCH
    default: return Language.ENGLISH
  }
}
