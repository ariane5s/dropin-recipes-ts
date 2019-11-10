import { i18nData } from "../core/Code/i18nData"
import { NameArticle } from "../core/Formats/Names/Name"

export const i18nCollections = i18nData({

  name: {
    en: { one: "Collection", many: "Collections" },
    fr: { one: "Collection", many: "Collections", article: NameArticle.FEMININE },
  },

})
