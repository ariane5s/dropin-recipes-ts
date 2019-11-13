import { i18nData } from "../core/Formats/Models/i18n"
import { NameArticle } from "../core/Formats/Names/Name"
import { Language } from "../core/Context/Types/Language"

export const i18nLanguages = i18nData({

  name: {
    en: { one: "Language", many: "Languages" },
    fr: { one: "Langue", many: "Langues", article: NameArticle.FEMININE },
  },

  current: (language: Language): i18nData => ({
    en: [
      "The current language is ",
      { $: { type: "i18n", name: i18nLanguages[language] } }
    ],
    fr: [
      "La langue actuelle est ",
      { $: { type: "i18n", name: i18nLanguages[language], options: { article: true } } },
    ],
  }),

  en: {
    en: "English",
    fr: { one: "Anglais", article: NameArticle.MASULINE }
  },

  fr: {
    en: "French",
    fr: { one: "Français", article: NameArticle.MASULINE },
  },

})
