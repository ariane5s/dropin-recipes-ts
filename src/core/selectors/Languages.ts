
export enum LanguageSelector {
  ENGLISH = "en",
  FRENCH = "fr",
}

export const AnyLanguageSelector = "*"

export type MultipleLanguagesSelector<Type> = {
  [language in LanguageSelector]: Type
}

export type AnyOrMultipleLanguagesSelector<Type> = {
  [AnyLanguageSelector]?: Type
} & {
  [language in LanguageSelector]?: Type
}

export function stringToLanguageSelector(language: string): LanguageSelector {
  switch(language) {
    case LanguageSelector.FRENCH: return LanguageSelector.FRENCH
    default: return LanguageSelector.ENGLISH
  }
}
