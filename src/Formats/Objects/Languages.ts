import { Language } from "../../Context/Languages/Language"
import { AllLanguagesSelector } from "../../Context/Languages/Selectors"

type Without<A, B> = { [R in Exclude<keyof A, keyof B>]?: never }
type XOR<A, B> = (A | B) extends object ? (Without<A, B> & B) | (Without<B, A> & A) : A | B




type RequireAtLeastOne<T, Keys extends keyof T = keyof T> =
    Pick<T, Exclude<keyof T, Keys>>
    & {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
    }[Keys]

interface MenuItem {
  title: string;
  component?: number;
  click?: number;
  icon: string;
}

type ClickOrComponent = RequireAtLeastOne<MenuItem>






export type LanguagesObject<Content> = XOR<{
  [AllLanguagesSelector]: Content
}, {
  [language in Pick<Language, Language>]?: Content
}>

const Test: LanguagesObject<string> = {
  //"*": "Test",
  //en: "Test",
  //fr: "Test",
}
