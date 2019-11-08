import { Language } from "../Context/Types/Language"

export const i18nLanguages = i18nData({
  [Language.ENGLISH]: {
    [Language.ENGLISH]: "English",
    [Language.FRENCH]: "Anglais",
  },
  [Language.FRENCH]: {
    [Language.ENGLISH]: "French",
    [Language.FRENCH]: "Français",
  },
})
