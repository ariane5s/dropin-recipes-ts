import { NameField } from "../Fields"
import { i18nOptions } from "../Models/i18n"

export type i18nQuery<NameType = NameField> = { $: { type: "i18n", name: NameType, options?: i18nOptions } }
