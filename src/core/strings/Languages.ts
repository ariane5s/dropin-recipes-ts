import { NameText } from "./Names"
import { MultipleLanguagesSelector } from "../selectors/Languages"

export enum Language {
  ENGLISH = "en",
  FRENCH = "fr",
}

export const DEFAULT_LANGUAGE = Language.ENGLISH

export interface LanguageOption {
  name: MultipleLanguagesSelector<NameText>
  articles: boolean
}

export const LanguageOptions: MultipleLanguagesSelector<LanguageOption> = {

  // English
  [Language.ENGLISH]: {
    name: {
      [Language.ENGLISH]: "English",
      [Language.FRENCH]: "Anglais",
    },
    articles: false,
  },

  // French
  [Language.FRENCH]: {
    name: {
      [Language.ENGLISH]: "French",
      [Language.FRENCH]: "Français",
    },
    articles: true,
  },

}
