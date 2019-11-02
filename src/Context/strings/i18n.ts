import { DEFAULT_LANGUAGE, Language } from "./Languages"
import { stringToLanguage, nameToString } from "./functions"
import { Name } from "./Names"

export let CURRENT_LANGUAGE: Language = DEFAULT_LANGUAGE

export function setCurrentLanguage(locale: string) {
  CURRENT_LANGUAGE = stringToLanguage(locale)
}

export type i18nVars = { [name: string]: string }

export interface i18nOptions {
  count?: number
  vars?: i18nVars
  lowercase?: boolean
}

export const i18nData = <T extends { [name: string]: Name }>(data: T): T => data

export function i18n(data: string | Name, options: i18nOptions = {}) {
  // Name conversion
  let output = nameToString(data, {
    language: CURRENT_LANGUAGE,
    count: options.count,
  })

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
