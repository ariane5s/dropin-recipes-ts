import { i18nArticle } from "../../Context/Names/i18nArticle"
import { Language } from "../../Context/Language"
import { NameTextOrQuery, NameByLanguage } from "../Names/Name"

export interface i18nOptions<Vars = { [name: string]: string }> {
  count?: number
  vars?: Vars
  lowercase?: boolean
  article?: i18nArticle
  language?: Language
}

export type i18nData = NameTextOrQuery | NameByLanguage<NameTextOrQuery>

type i18nDataFunction = (...params: any[]) => i18nData

type i18nDataType = { [name: string]: i18nData | i18nDataFunction }

export const i18nData = <Type = i18nDataType>(data: Type): Type => data
