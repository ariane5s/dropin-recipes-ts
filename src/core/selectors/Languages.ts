
export enum LanguageSelector {
  FRENCH = "fr",
  ENGLISH = "en",
}

export const AnyLanguageSelector = "*"

export type MultipleLanguagesSelector<Type> = {
  [language in LanguageSelector]: Type
}

export type AnyOrMultipleLanguagesSelector<Type> = {
  [AnyLanguageSelector]: Type
} & {
  [language in LanguageSelector]?: Type
}
