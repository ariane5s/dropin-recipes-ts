import { i18nData, i18nArticle } from "../core/Formats/Models/i18n"
import { NameArticle } from "../core/Formats/Names/Name"
import { Language } from "../core/Context/Types/Language"
import { Environment } from "../core/Context/Types/Environment"
import { i18nEnvironments } from "./Environments"

export const i18nLogger = i18nData({

  modeAlreadyEnabled: (mode: Environment): i18nData => ({
    en: [
      "l4r is already in ",
      { $: { type: "i18n", name: i18nEnvironments[mode] } },
      " mode",
    ],
    fr: [
      "l4r est déjà en mode de ",
      { $: { type: "i18n", name: i18nEnvironments[mode] } },
    ],
  }),

  modeChanged: (mode: Environment): i18nData => ({
    en: [
      "l4r is now on ",
      { $: { type: "i18n", name: i18nEnvironments[mode] } },
      " mode",
    ],
    fr: [
      "l4r est maintenant en mode de ",
      { $: { type: "i18n", name: i18nEnvironments[mode] } },
    ],
  }),


})
