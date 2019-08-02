import { DEFAULT_LANGUAGE } from "./Languages"
import { stringToLanguage, nameToString } from "./functions"
import { Name } from "./Names"

export let CURRENT_LANGUAGE = DEFAULT_LANGUAGE

export function setCurrentLocale(locale: string) {
  CURRENT_LANGUAGE = stringToLanguage(locale)
}

export type i18nVars = { [name: string]: string }

export interface i18nOptions {
  count?: number
  vars?: i18nVars
  lowercase?: boolean
}

export function i18n(name: Name, options: i18nOptions = {}) {
  let output: string = ""

  // Is Name
  if(typeof name === "object") {
    output = nameToString(name, {
      language: CURRENT_LANGUAGE,
      count: options.count,
    })
  } else {
    output = name
  }

  // Variables
  if(typeof options.vars !== "undefined") {
    Object.keys(options.vars).forEach(variable => {
      output = output.replace(new RegExp(`\\$\\{${variable}\\}`), (options.vars as i18nVars)[variable])
    })
  }

  // Lowercase
  if(typeof options.lowercase !== "undefined" && options.lowercase) {
    output = output.toLowerCase()
  }

  return output
}
