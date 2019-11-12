import { i18nData, i18nFunction } from "../core/Formats/Models/i18n"
import { NameArticle, Name } from "../core/Formats/Names/Name"
import { i18n, i18nOptions } from "../core/Code/i18n"
import { Language } from "../core/Context/Types/Language"

export const i18nLanguages = i18nData({

  name: {
    en: { one: "Language", many: "Languages" },
    fr: { one: "Langue", many: "Langues", article: NameArticle.FEMININE },
  },

  current: i18nFunction<{ language: Language }>(vars => ({
    en: [ "The current language is ", i18n(i18nLanguages[vars.language]) ],
    fr: [ "La langue actuelle est ", i18n(i18nLanguages[vars.language], { article: true }) ],
  })),

  en: {
    en: "English",
    fr: { one: "Anglais", article: NameArticle.MASULINE }
  },

  fr: {
    en: "French",
    fr: { one: "Français", article: NameArticle.MASULINE },
  },

})
