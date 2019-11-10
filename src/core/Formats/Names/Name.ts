import { LanguagesObject } from "../Objects/Languages"

export type NameText = string | string[]

export enum NameArticle {
  MASCULINE = "m",
  FEMININE = "f",
}

export interface NameByNumber {
  one?: NameText
  many?: NameText
  short?: NameText
  article?: NameArticle
}

export type NameByLanguage = LanguagesObject<NameText | NameByNumber>

export type Name = NameText | NameByLanguage
