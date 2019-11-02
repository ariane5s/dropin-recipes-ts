import { AnyLanguageSelector } from "../../Languages"
import { NameText, NameByLanguage, Name } from "../Names"
import { Language, DEFAULT_LANGUAGE } from "../Languages"

export interface nameToStringOptions {
  language?: Language
  count?: Number
}

export type nameToStringVars = { [name: string]: string }

export function nameToString(name: Name, options: nameToStringOptions = {}): string {
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

  return output
}
