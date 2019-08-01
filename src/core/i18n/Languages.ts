import { NameText } from "./Names"
import { MultipleLanguagesSelector, LanguageSelector } from "../selectors/Languages"

export interface LanguageOption {
  name: MultipleLanguagesSelector<NameText>
  articles: boolean
}

export const Languages: MultipleLanguagesSelector<LanguageOption> = {

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

/*type forEachLanguageCallback<Output> = (languageId: string, name: string, options: LanguageOption) => Output | undefined

export function forEachLanguage<Output = any>(callback: forEachLanguageCallback<Output>, language?: string): Output[] {
  return Object.keys(Languages).reduce((output, id) => {
    const contextLanguage = typeof language !== "undefined" ? language : id
    const options = Languages[id]
    const name = nameToString(contextLanguage, options.name[contextLanguage])
    const response = callback(id, name, options)
    if(typeof response !== "undefined") {
      output.push(response)
    }
    return output
  }, [] as Output[])
}*/
