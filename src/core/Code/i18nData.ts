import { NameByLanguage } from "../Formats/Names/Name"

type i18nDataFunction = (params: any) => string | NameByLanguage

type i18nDataType = { [name: string]: string | i18nDataFunction | NameByLanguage }

export const i18nData = (data: i18nDataType): i18nDataType => data
