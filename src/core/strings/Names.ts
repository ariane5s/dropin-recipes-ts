import { MultipleLanguagesSelector, AnyOrMultipleLanguagesSelector } from "../selectors"

export type NameText = string

export enum NameArticle {
  MASCULINE = "m",
  FEMININE = "f",
}

export interface NameByNumber {
  one?: NameText
  many?: NameText
  article?: NameArticle
}

export type NameByLanguage = NameText | NameByNumber

export type MultipleNamesByLanguage = MultipleLanguagesSelector<NameByLanguage>

export type Name = NameText | AnyOrMultipleLanguagesSelector<NameByLanguage>

export type MultipleNames<Type = Name> = { [name: string]: Type }
