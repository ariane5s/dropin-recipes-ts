import { LanguagesObject } from "../Objects/Languages"
import { i18nQuery } from "../Queries/i18n"

export type NameText<TextType = string> = TextType | TextType[]

export enum NameArticle {
  FR_MAS, // Français - Masculin (un, le, du, au, les, des, aux)
  FR_MAS_CNT, // Français - Masculin contracté (un, l', de l', à l', les, des, aux)
  FR_FEM, // Français - Féminin (une, la, de la, à la, les, des, aux)
  FR_FEM_CNT, // Français - Féminin contracté (une, l', de l', à l', les, des, aux)
}

export interface NameByNumber<TextType = NameText> {
  one?: TextType
  many?: TextType
  short?: TextType
  article?: NameArticle
}

export type NameByLanguage<TextType = NameText> = LanguagesObject<TextType | NameByNumber<TextType>>

export type Name<TextType = NameText> = TextType | NameByLanguage<TextType>

export type NameTextOrQuery<TextType = string, QueryType = Name> = (TextType|i18nQuery<QueryType>) | (TextType|i18nQuery<QueryType>)[]
