import { Language } from "../../Context/Types/Language"
import { XOR } from "../../Code/XORType"

export type LanguagesObject<Content, L extends Language = Language> = XOR<{
  "*": Content
}, {
  [language in L]?: Content
}>

export type LanguagesObject_IncludeAll<Content, L extends Language = Language> = {
  [language in L]: Content
}
