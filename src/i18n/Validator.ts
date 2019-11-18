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

  dataMustBeANumber: {
    en: "Data must be a number"
  },

  dataMustBeAnObject: {
    en: "Data must be an object"
  },

  dataMustBeBoolean: {
    en: "Data must be boolean"
  },

  noDataFoundForKey: (key: string): i18nData => ({
    en: [ "No data found for key \"", key, "\"" ]
  }),

  unexpectedKey: (key: string): i18nData => ({
    en: [ "Unexpected key \"", key, "\"" ],
  }),

  keysCountMismatch: (current: number, expected: number): i18nData => ({
    en: [
      "The object contains ", current, " key", current === 1 ? "" : "s",
      " while ", expected, " ", expected === 1 ? "was" : "were", " expected",
    ],
  }),

  dataShouldBe: (expected: string): i18nData => ({
    en: [ "Data expected to be \"", expected, "\"" ],
  }),

})
