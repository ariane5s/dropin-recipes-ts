
export interface NameByNumber {
  article?: "m"|"f"
  one?: string
  many?: string
}

export type NameByLanguage<Format = string | NameByNumber> = {
  [language: string]: Format
}

export type Name = string | NameByLanguage
