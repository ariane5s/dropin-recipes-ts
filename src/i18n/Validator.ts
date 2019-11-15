import { i18nData } from "../core/Formats/Models/i18n"

export const i18nValidator = i18nData({

  schemaMustBeAnObject: {
    en: "Schema must be an object"
  },

  typeNotFound: (type: string): i18nData => ({
    en: [ "Type \"", type, "\" does not exist" ],
  }),

  dataMustBeAString: {
    en: "Data must be a string"
  },

  dataIsNotAnObject: {
    en: "Data is not an object",
  },

  noDataFoundForKey: (key: string): i18nData => ({
    en: [ "No data found for key \"", key, "\"" ]
  }),

  unexpectedKey: (key: string): i18nData => ({
    en: [ "Unexpected key \"", key, "\"" ],
  }),

})
