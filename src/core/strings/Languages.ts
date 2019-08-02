import { NameText } from "./Names"
import { MultipleLanguagesSelector } from "../selectors/Languages"

export enum Language {
  ENGLISH = "en",
  FRENCH = "fr",
}

export interface LanguageOption {
  name: MultipleLanguagesSelector<NameText>
  articles: boolean
}

export const LanguageOptions: MultipleLanguagesSelector<LanguageOption> = {

  // French
  [Language.FRENCH]: {
    name: {
      [Language.FRENCH]: "Français",
      [Language.ENGLISH]: "French",
    },
    articles: true,
  },

  // English
  [Language.ENGLISH]: {
    name: {
      [Language.FRENCH]: "Anglais",
      [Language.ENGLISH]: "English",
    },
    articles: false,
  },

}
