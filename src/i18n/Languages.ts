import { i18nData } from "../core/Code/i18nData"
import { NameArticle } from "../core/Formats/Names/Name"

export const i18nLanguages = i18nData({

  name: {
    en: { one: "Language", many: "Languages" },
    fr: { one: "Langue", many: "Langues", article: NameArticle.FEMININE },
  },

  en: {
    en: "English",
    fr: "Anglais",
  },

  fr: {
    en: "French",
    fr: "Français",
  },

})
