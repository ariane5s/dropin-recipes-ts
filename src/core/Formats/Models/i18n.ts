import { Language } from "../../Context/Types/Language"
import { NameTextOrQuery, NameByLanguage } from "../Names/Name"

export enum i18nArticle {
  FR_DEF,
  FR_IND,
}

export interface i18nOptions<Vars = { [name: string]: string }> {
  count?: number
  vars?: Vars
  lowercase?: boolean
  article?: boolean
  language?: Language
}

type i18nDataFunction = (...params: any[]) => NameTextOrQuery | NameByLanguage<NameTextOrQuery>

type i18nDataType = { [name: string]: NameTextOrQuery | NameByLanguage<NameTextOrQuery> | i18nDataFunction }

export const i18nData = <Type = i18nDataType>(data: Type): Type => data
