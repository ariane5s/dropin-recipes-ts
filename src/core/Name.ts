
export interface NameByNumber {
  article?: "m"|"f"
  one?: string
  many?: string
}

export type NameByLanguage = {
  [language: string]: string | NameByNumber
}

export type Name = string | NameByLanguage
