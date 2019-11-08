import { LanguagesObject } from "../Objects/Languages"
import { Language } from "../../Context/Types/Language"

export type NameText = string

export enum NameByNumberArticle {
  MASCULINE = "m",
  FEMININE = "f",
}

export interface NameByNumber {
  one?: NameText
  many?: NameText
  article?: NameByNumberArticle
}

export type NameByLanguage<Languages = Languages> = LanguagesObject<NameText | NameByNumber, Languages>

export type Name<L = Language> = NameText | NameByLanguage<L>
