import { Language } from "../../Context/Types/Language"
import { LanguagesAllSelector } from "../../Context/Languages/Selectors"

type Without<A, B> = { [R in Exclude<keyof A, keyof B>]?: never }
type XOR<A, B> = (A | B) extends object ? (Without<A, B> & B) | (Without<B, A> & A) : A | B

export type LanguagesObject<Content, L extends Language = Language> = XOR<{
  [LanguagesAllSelector]: Content
}, {
  [language in L]?: Content
}>

export type LanguagesObject_IncludeAll<Content, L extends Language = Language> = XOR<{
  [LanguagesAllSelector]: Content
}, {
  [language in L]: Content
}>
