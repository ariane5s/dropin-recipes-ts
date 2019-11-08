import { LanguagesObject } from "../Objects/Languages"

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

export type NameByLanguage = LanguagesObject<NameText | NameByNumber>

export type Name = NameText | NameByLanguage
