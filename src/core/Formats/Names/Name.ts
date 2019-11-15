import { NameArticle } from "../../Context/States/NameArticle"
import { LanguagesObject } from "../Objects/Languages"
import { i18nQuery } from "../Queries/i18n"

export type NameText<TextType = string> = TextType | TextType[]

export interface NameByNumber<TextType = NameText> {
  one?: TextType
  many?: TextType
  short?: TextType
  article?: NameArticle
}

export type NameByLanguage<TextType = NameText> = LanguagesObject<TextType | NameByNumber<TextType>>

export type Name<TextType = NameText> = TextType | NameByLanguage<TextType>

export type NameTextOrQuery<TextType = string, QueryType = Name> = (TextType|i18nQuery<QueryType>) | (TextType|i18nQuery<QueryType>)[]
