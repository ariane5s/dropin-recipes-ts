import { i18nArticle } from "../../Context/Code/i18nArticle"
import { Language } from "../../Context/Fields/Language"
import { NameField_i18n, NameField_ByLanguage } from "../Fields"

export interface i18nOptions<Vars = { [name: string]: string }> {
  count?: number
  vars?: Vars
  lowercase?: boolean
  article?: i18nArticle
  language?: Language
}

export type i18nData = NameField_i18n | NameField_ByLanguage<NameField_i18n>

type i18nDataFunction = (...params: any[]) => i18nData

type i18nDataType = { [name: string]: i18nData | i18nDataFunction }

export const i18nData = <Type = i18nDataType>(data: Type): Type => data
