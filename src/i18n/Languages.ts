import { i18nData, i18nArticle } from "../core/Formats/Models/i18n"
import { NameArticle } from "../core/Formats/Names/Name"
import { Language } from "../core/Context/Language"

export const i18nLanguages = i18nData({

  name: {
    en: { one: "Language", many: "Languages" },
    fr: { one: "Langue", many: "Langues", article: NameArticle.FR_FEM },
  },

  current: (language: Language): i18nData => ({
    en: [
      "The current language is ",
      { $: { type: "i18n", name: i18nLanguages[language] } }
    ],
    fr: [
      "La langue actuelle est ",
      { $: { type: "i18n", name: i18nLanguages[language], options: { article: i18nArticle.FR_DEF } } },
    ],
  }),

  en: {
    en: "English",
    fr: { one: "Anglais", article: NameArticle.FR_MAS_CNT }
  },

  fr: {
    en: "French",
    fr: { one: "Français", article: NameArticle.FR_MAS },
  },

})
