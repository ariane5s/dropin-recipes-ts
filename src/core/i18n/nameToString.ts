import { Name, NameByLanguage, NameText } from "./Names"
import { LanguageSelector, AnyLanguageSelector } from "../selectors/Languages"

interface Options {
  language?: LanguageSelector
  count?: number
  vars?: any
}

export function nameToString(name: Name, options: Options = {}): NameText {
  if(typeof name === "string") return name

  let output: NameText = ""

  // Is NameByLanguage
  if(typeof name === "object") {
    let current: NameByLanguage = output

    // Global text is set
    if(typeof name[AnyLanguageSelector] !== "undefined") {
      current = name[AnyLanguageSelector] as NameByLanguage

    // Current language
    } else if(typeof options.language !== "undefined" && typeof name[options.language] !== "undefined") {
      current = name[options.language] as NameByLanguage
    }

    // Is NameByNumber
    if(typeof current === "object") {
      if((typeof options.count === "undefined" || options.count === 1) && typeof current.one !== "undefined") {
        return current.one
      }
      if(typeof current.many !== "undefined") {
        return current.many
      }
    } else {
      output = current
    }
  }

  return output
}
