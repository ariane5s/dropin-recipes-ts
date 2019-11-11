import { Language } from "../Context/Types/Language"
import { i18nSettings } from "./i18nSettings"
import { Name, NameText } from "../Formats/Names/Name"

export type i18nVars = { [name: string]: string }

export interface i18nOptions {
  count?: number
  vars?: i18nVars
  lowercase?: boolean
  article?: boolean
}

export function i18n(name: Name, options: i18nOptions = {}) {
  // Name conversion
  if(typeof name === "object") {
    let current: NameByLanguage = name

    // Global text is set
    if(typeof name[AnyLanguageSelector] !== "undefined") {
      current = name[AnyLanguageSelector] as NameByLanguage

    // Current language
    } else if(typeof options.language !== "undefined" && typeof name[options.language] !== "undefined") {
      current = name[options.language] as NameByLanguage

    // Default language
    } else if(typeof name[DEFAULT_LANGUAGE] !== "undefined") {
      current = name[DEFAULT_LANGUAGE] as NameByLanguage
    }

    // Is NameByNumber
    if(typeof current === "object") {
      if((typeof options.count === "undefined" || options.count === 1) && typeof current.one !== "undefined") {
        output = current.one
      } else if(typeof current.many !== "undefined") {
        output = current.many
      }
    } else {
      output = current
    }
  }

  // Variables
  if(typeof options.vars !== "undefined") {
    Object.keys(options.vars).forEach(variable => {
      data = data.replace(new RegExp(`\\$\\{${variable}\\}`), (options.vars as i18nVars)[variable])
    })
  }

  // Lowercase
  if(typeof options.lowercase !== "undefined" && options.lowercase) {
    data = data.toLowerCase()
  }

  return data
}
