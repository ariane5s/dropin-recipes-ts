import { i18nArticle } from "../Models/i18n"
import { Language } from "../../Context/Types/Language"
import { Name } from "../Names/Name"

export interface i18nOptions<Vars = { [name: string]: string }> {
  count?: number
  vars?: Vars
  lowercase?: boolean
  article?: i18nArticle
  language?: Language
}

export type i18nQuery<NameType = Name> = { $: { type: "i18n", name: NameType, options?: i18nOptions } }
