import { NameByNumber, Name, NameArticle, NameByLanguage, NameTextOrQuery } from "../Formats/Names/Name"
import { Language } from "../Context/Types/Language"
import { i18nSettings } from "./i18nSettings"
import { i18nData } from "../Formats/Models/i18n"
import { i18nQuery } from "../Formats/Queries/i18n"

export type i18nVars = { [name: string]: string }

export interface i18nOptions<Vars = i18nVars> {
  count?: number
  vars?: Vars
  lowercase?: boolean
  article?: boolean
  language?: Language
}

export const i18n = (data: i18nData, options: i18nOptions = {}): string => {

  // STRING
  if(typeof data === "string") {
    // Lowercase
    if(typeof options.lowercase !== "undefined" && options.lowercase) {
      data = data.toLowerCase()
    }
    console.log("D", data)
    return data
  }

  // OBJECT
  if(typeof data === "object") {

    // ARRAY
    if(Array.isArray(data)) {
      console.log("B", data)
      return data.map(current => i18n(current, options)).join("")
    }

    // QUERY
    if(typeof (data as i18nQuery).$ !== "undefined") {
      let newOptions: i18nOptions
      if(typeof (data as i18nQuery).$.options !== "undefined") {
        newOptions = Object.assign(options, (data as i18nQuery).$.options)
      } else {
        newOptions = options
      }
      return i18n((data as i18nQuery).$.name, newOptions)
    }

    // LANGUAGE NAME
    let firstDepth, currentLanguage

    // Options language
    if(typeof options.language !== "undefined" && typeof (data as NameByLanguage<i18nQuery>)[options.language] !== "undefined") {
      currentLanguage = options.language
      firstDepth = (data as NameByLanguage<i18nQuery>)[currentLanguage]

    // Global text is set
    } else if(typeof (data as NameByLanguage<i18nQuery>)["*"] !== "undefined") {
      firstDepth = (data as NameByLanguage<i18nQuery>)["*"]

    // Default language
    } else if(typeof (data as NameByLanguage<i18nQuery>)[i18nSettings.getCurrentLanguage()] !== "undefined") {
      currentLanguage = i18nSettings.getCurrentLanguage()
      firstDepth = (data as NameByLanguage<i18nQuery>)[currentLanguage]
    }

    // STRING
    if(typeof firstDepth === "string") {
      return i18n(firstDepth, options)
    }

    // OBJECT
    if(typeof firstDepth === "object") {

      // ARRAY OR QUERY
      if(Array.isArray(firstDepth) || typeof (firstDepth as i18nQuery).$ !== "undefined") {
        console.log("A", firstDepth)
        return i18n(firstDepth as NameTextOrQuery, options)
      }

      // NUMBER NAME
      let secondDepth = firstDepth as NameByNumber, output: string = ""

      // One
      if((typeof options.count === "undefined" || options.count === 1) && typeof secondDepth.one !== "undefined") {
        output = i18n(secondDepth.one, options)

      // Many
      } else if(typeof secondDepth.many !== "undefined") {
        output = i18n(secondDepth.many, options)
      }

      if(output.length !== 0) {

        // Article
        if(typeof options.article !== "undefined"
          && typeof currentLanguage !== "undefined"
          && options.article
          && typeof secondDepth.article !== "undefined"
        ) {
          switch(currentLanguage) {
            case Language.FRENCH:
              if(secondDepth.article === NameArticle.MASULINE) {
                output = "le " + output
              } else if(secondDepth.article === NameArticle.FEMININE) {
                output = "la " + output
              }
              break
          }
        }

        return output

      }

    }

  }

  return ""
}
