import { NameByLanguage } from "../Names/Name"
import { i18nOptions } from "../../Code/i18n"

type i18nFunctionRequest<Vars> = (vars: Vars) => string | NameByLanguage

type i18nFunctionResponse<Vars = any> = (options: i18nOptions<Vars>) => string | NameByLanguage

export const i18nFunction = <Vars>(request: i18nFunctionRequest<Vars>): i18nFunctionResponse<Vars> => {
  return (options: i18nOptions<Vars>) => request(options)
}

type i18nDataType = { [name: string]: string | i18nFunctionResponse | NameByLanguage }

export const i18nData = <Type = i18nDataType>(data: Type): Type => data
