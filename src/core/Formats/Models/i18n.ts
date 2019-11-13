import { NameByLanguage, NameTextOrQuery } from "../Names/Name"

export type i18nData = NameTextOrQuery | NameByLanguage<NameTextOrQuery>

type i18nDataFunction = (...params: any[]) => i18nData

type i18nDataType = { [name: string]: i18nData | i18nDataFunction }

export const i18nData = <Type = i18nDataType>(data: Type): Type => data
