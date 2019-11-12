import { NameByNumber, Name, NameArticle } from "../Formats/Names/Name"
import { Language } from "../Context/Types/Language"
import { i18nSettings } from "./i18nSettings"

export type i18nVars = { [name: string]: string }

export interface i18nOptions<Vars = i18nVars> {
  count?: number
  vars?: Vars
  lowercase?: boolean
  article?: boolean
  language?: Language
}

export function i18n(data: Name, options: i18nOptions = {}): string {
  let output: string = ""

  if(Array.isArray(data)) {
    output = data.join("")

  // Name conversion
  } else if(typeof data === "object") {
    let firstDepth, currentLanguage

    // Current language
    if(typeof options.language !== "undefined" && typeof data[options.language] !== "undefined") {
      currentLanguage = options.language
      firstDepth = data[currentLanguage]

    // Global text is set
    } else if(typeof data["*"] !== "undefined") {
      firstDepth = data["*"]

    // Default language
    } else if(typeof data[i18nSettings.getCurrentLanguage()] !== "undefined") {
      currentLanguage = i18nSettings.getCurrentLanguage()
      firstDepth = data[currentLanguage]
    }

    // String array
    if(Array.isArray(firstDepth)) {
      output = firstDepth.join("")

    // Is NameByNumber
    } else if(typeof firstDepth === "object") {
      let secondDepth = firstDepth as NameByNumber

      // One
      if((typeof options.count === "undefined" || options.count === 1) && typeof secondDepth.one !== "undefined") {
        if(Array.isArray(secondDepth.one)) secondDepth.one = secondDepth.one.join("")
        output = secondDepth.one

      // Many
      } else if(typeof secondDepth.many !== "undefined") {
        if(Array.isArray(secondDepth.many)) secondDepth.many = secondDepth.many.join("")
        output = secondDepth.many
      }

      // Article
      if(output.length !== 0
        && typeof currentLanguage !== "undefined"
        && typeof options.article !== "undefined"
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

    } else if(typeof firstDepth === "string") {
      output = firstDepth
    }
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
