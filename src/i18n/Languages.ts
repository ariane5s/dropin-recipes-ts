import { i18nData } from "../core/Code/i18nData"
import { NameArticle } from "../core/Formats/Names/Name"
import { i18n } from "../core/Code/i18n"

export const i18nLanguages = i18nData({

  name: {
    en: { one: "Language", many: "Languages" },
    fr: { one: "Langue", many: "Langues", article: NameArticle.FEMININE },
  },

  current: (params: { language: string }) => ({
    en: "",
    fr: [ "La langue actuelle est ", i18n(params.language, { article: true }) ],
  }),

  en: {
    en: "English",
    fr: "Anglais",
  },

  fr: {
    en: "French",
    fr: "Français",
  },

})
