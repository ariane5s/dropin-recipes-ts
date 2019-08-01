import { Name, NameByLanguage } from "./Name"
import { convertNameToString } from "./convertNameToString"

export enum LanguageSelector {
  ANY = "*",
  FRENCH = "fr",
  ENGLISH = "en",
}

export interface LanguageOption {
  name: NameByLanguage<string>
  articles: boolean
}

export const Languages: { [language: string]: LanguageOption } = {

  // French
  [LanguageSelector.FRENCH]: {
    name: {
      [LanguageSelector.FRENCH]: "Français",
      [LanguageSelector.ENGLISH]: "French",
    },
    articles: true,
  },

  // English
  [LanguageSelector.ENGLISH]: {
    name: {
      [LanguageSelector.FRENCH]: "Anglais",
      [LanguageSelector.ENGLISH]: "English",
    },
    articles: false,
  },

}

type forEachLanguageCallback<Output> = (languageId: string, name: string, options: LanguageOption) => Output | undefined

export function forEachLanguage<Output = any>(callback: forEachLanguageCallback<Output>, language?: string): Output[] {
  return Object.keys(Languages).reduce((output, id) => {
    const contextLanguage = typeof language !== "undefined" ? language : id
    const options = Languages[id]
    const name = convertNameToString(contextLanguage, options.name[contextLanguage])
    const response = callback(id, name, options)
    if(typeof response !== "undefined") {
      output.push(response)
    }
    return output
  }, [] as Output[])
}
