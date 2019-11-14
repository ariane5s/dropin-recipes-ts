import { NameTextOrQuery, NameByLanguage, NameByNumber, NameArticle,  } from "../Formats/Names/Name"
import { i18nQuery } from "../Formats/Queries/i18n"
import { i18nOptions } from "../Formats/Models/i18n"
import { Language } from "../Context/Types/Language"
import { i18nSettings } from "./i18nSettings"

const FRENCH_VOWELS = [ "a", "e", "i", "o", "u", "y" ]

export const i18n = (data: NameTextOrQuery | NameByLanguage<NameTextOrQuery>, options: i18nOptions = {}): string => {

  // STRING
  if(typeof data === "string") {
    // Lowercase
    if(typeof options.lowercase !== "undefined" && options.lowercase) {
      data = data.toLowerCase()
    }
    return data
  }

  // NOT AN OBJECT
  if(typeof data !== "object") {
    return ""
  }

  // ARRAY
  if(Array.isArray(data)) {
    return data.map(current => i18n(current, options)).join("")
  }

  // QUERY
  const dataAsQuery = data as i18nQuery
  if(typeof dataAsQuery.$ !== "undefined") {
    if(
      typeof dataAsQuery.$ !== "object"
      || typeof dataAsQuery.$.type === "undefined"
      || dataAsQuery.$.type !== "i18n"
      || typeof dataAsQuery.$.name === "undefined"
    ) {
      console.log(typeof dataAsQuery.$ !== "object" || typeof dataAsQuery.$.type !== "undefined" || dataAsQuery.$.type !== "i18n" || typeof dataAsQuery.$.name !== "undefined")
      return ""
    }
    let queryOptions: i18nOptions
    if(typeof dataAsQuery.$.options === "object") {
      queryOptions = Object.assign(options, dataAsQuery.$.options)
    } else {
      queryOptions = options
    }
    return i18n(dataAsQuery.$.name, queryOptions)
  }

  // LANGUAGE NAME
  const dataByLanguage = data as NameByLanguage<NameTextOrQuery>
  let currentLanguage: Language | null = null
  let languageDepth: NameTextOrQuery | null = null

  // Options language
  if(typeof options.language !== "undefined" && typeof dataByLanguage[options.language] !== "undefined") {
    currentLanguage = options.language
    languageDepth = dataByLanguage[currentLanguage] as NameTextOrQuery

  // Global Name text
  } else if(typeof dataByLanguage["*"] !== "undefined") {
    languageDepth = dataByLanguage["*"] as NameTextOrQuery

  // Default language
  } else if(typeof dataByLanguage[i18nSettings.getCurrentLanguage()] !== "undefined") {
    currentLanguage = i18nSettings.getCurrentLanguage()
    languageDepth = dataByLanguage[currentLanguage] as NameTextOrQuery
  }

  // NO LANGUAGE DATA FOUND
  if(languageDepth === null) {
    return ""
  }

  // STRING
  if(typeof languageDepth === "string") {
    return i18n(languageDepth, options)
  }

  // NOT AN OBJECT
  if(typeof languageDepth !== "object") {
    return ""
  }

  // ARRAY OR QUERY
  if(Array.isArray(languageDepth) || typeof languageDepth.$ !== "undefined") {
    return i18n(languageDepth, options)
  }

  // NUMBER NAME
  let secondDepth = languageDepth as NameByNumber<NameTextOrQuery>
  let output: string = ""

  // One
  if(typeof secondDepth.one !== "undefined" && (typeof options.count === "undefined" || options.count === 1)) {
    output = i18n(secondDepth.one, options)

  // Many
  } else if(typeof secondDepth.many !== "undefined") {
    output = i18n(secondDepth.many, options)
  }

  if(output.length !== 0) {

    // Article
    if(typeof options.article !== "undefined" && options.article && typeof currentLanguage !== "undefined") {
      switch(currentLanguage) {
        case Language.FRENCH:
          if(FRENCH_VOWELS.indexOf(output[0].toLowerCase()) !== -1) {
            output = "l'" + output
          } else if(typeof secondDepth.article !== "undefined") {
            if(secondDepth.article === NameArticle.FR_MAS) {
              output = "le " + output
            } else if(secondDepth.article === NameArticle.FR_FEM) {
              output = "la " + output
            }
          }
          break
      }
    }

  }

  return output

}
