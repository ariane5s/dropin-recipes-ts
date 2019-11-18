import { i18nData, i18nOptions } from "../Formats/Models/i18n"
import { i18nQuery } from "../Formats/Queries/i18n"
import { Language } from "../Context/Fields/Language"
import { i18nSettings } from "./i18nSettings"
import { i18nArticle } from "../Context/Code/i18nArticle"
import { NameArticle } from "../Context/Fields/NameArticle"
import { NameField_ByLanguage, NameField_i18n, NameField_ByNumber } from "../Formats/Fields"

export const i18n = (data: i18nData, options: i18nOptions = {}): string => {

  // NUMBER
  if(typeof data === "number") {
    return data.toString()
  }

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
  const dataByLanguage = data as NameField_ByLanguage<NameField_i18n>
  let currentLanguage: Language | null = null
  let languageDepth: NameField_i18n | null = null

  // Options language
  if(typeof options.language !== "undefined" && typeof dataByLanguage[options.language] !== "undefined") {
    currentLanguage = options.language
    languageDepth = dataByLanguage[currentLanguage] as NameField_i18n

  // Global Name text
  } else if(typeof dataByLanguage["*"] !== "undefined") {
    languageDepth = dataByLanguage["*"] as NameField_i18n

  // Default language
  } else if(typeof dataByLanguage[i18nSettings.getCurrentLanguage()] !== "undefined") {
    currentLanguage = i18nSettings.getCurrentLanguage()
    languageDepth = dataByLanguage[currentLanguage] as NameField_i18n
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
  let secondDepth = languageDepth as NameField_ByNumber<NameField_i18n>
  let output: string = ""

  if(typeof options.count === "undefined") {
    options.count = 1
  }

  // One
  if(typeof secondDepth.one !== "undefined" && options.count === 1) {
    output = i18n(secondDepth.one, options)

  // Many
  } else if(typeof secondDepth.many !== "undefined") {
    output = i18n(secondDepth.many, options)
  }

  // Articles
  if(typeof options.article !== "undefined" && options.article && typeof currentLanguage !== "undefined") {
    switch(currentLanguage) {
      case Language.FRENCH:
        switch(options.article as i18nArticle) {
          case i18nArticle.FR_IND:
            if(options.count !== 1) {
              output = "des " + output
            } else if(secondDepth.article === NameArticle.FR_FEM || secondDepth.article === NameArticle.FR_FEM_CNT) {
              output = "une " + output
            } else {
              output = "un " + output
            }
            break
          case i18nArticle.FR_DEF:
            if(options.count !== 1) {
              output = "les " + output
            } else if(secondDepth.article === NameArticle.FR_MAS_CNT || secondDepth.article === NameArticle.FR_FEM_CNT) {
              output = "l'" + output
            } else if(secondDepth.article === NameArticle.FR_FEM) {
              output = "la " + output
            } else {
              output = "le " + output
            }
            break
          case i18nArticle.FR_DEF_CNT:
            if(options.count !== 1) {
              output = "aux " + output
            } else if(secondDepth.article === NameArticle.FR_MAS_CNT || secondDepth.article === NameArticle.FR_FEM_CNT) {
              output = "à l'" + output
            } else if(secondDepth.article === NameArticle.FR_FEM) {
              output = "à la " + output
            } else {
              output = "au " + output
            }
            break
          case i18nArticle.FR_PAR:
            if(options.count !== 1) {
              output = "des " + output
            } else if(secondDepth.article === NameArticle.FR_MAS_CNT || secondDepth.article === NameArticle.FR_FEM_CNT) {
              output = "de l'" + output
            } else if(secondDepth.article === NameArticle.FR_FEM) {
              output = "de la " + output
            } else {
              output = "du " + output
            }
            break
        }
        break
    }

  }

  return output

}
