import { Name } from "../Names/Name"
import { i18nOptions } from "../../Code/i18n"

export type i18nQuery<NameType = Name> = { $: { type: "i18n", name: NameType, options?: i18nOptions } }
