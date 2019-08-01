import { LanguageSelector } from "./Languages"
import { Name, NameByNumber } from "./Name"

export function convertNameToString(language: string, name: Name, count = 1, vars = {}): string {
  if(typeof name === "string") return name

  // Is NameByLanguage
  if(typeof name === "object") {
    let current: string | NameByNumber = ""

    // Global text is set
    if(typeof name[LanguageSelector.ANY] !== "undefined") {
      current = name[LanguageSelector.ANY]

    // Current language
    } else if(typeof name[language] !== "undefined") {
      current = name[language]
    }

    // Is NameByNumber
    if(typeof current === "object") {
      if(count === 1) {
        if(typeof current.one !== "undefined") {
          return current.one
        }
      } else if(typeof current.many !== "undefined") {
        return current.many
      }
    }
  }

  return ""
}
