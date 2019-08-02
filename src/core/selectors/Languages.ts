import { Language } from "../strings"

export type LanguageSelector = Language | "*"

export const AnyLanguageSelector = "*"

export type MultipleLanguagesSelector<Type> = {
  [language in Language]: Type
}

export type AnyOrMultipleLanguagesSelector<Type> = {
  [language in LanguageSelector]?: Type
}
