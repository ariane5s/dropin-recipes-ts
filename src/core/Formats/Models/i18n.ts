import { Language } from "../../Context/Types/Language"
import { NameTextOrQuery, NameByLanguage } from "../Names/Name"

export enum i18nArticle {
  FR_IND, // Français - Indéfini (un, une, des)
  FR_DEF, // Français - Défini (le, l', la, les)
  FR_DEF_CNT, // Français - Défini contracté (au, à l', à la, aux)
  FR_PAR, // Français - Partitif (du, de l', de la, des)
}

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
