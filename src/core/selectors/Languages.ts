import { Language } from "../strings"

export const AnyLanguageSelector = "*"

export type LanguageSelector = "*" | Language

export type MultipleLanguagesSelector<Content> = {
  [language: string]: Content
}

export type AllLanguagesSelector<Content> = {
  [language in Language]: Content
}
