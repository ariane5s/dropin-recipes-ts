import { i18nData } from "../core/Code/i18nData"
import { NameArticle } from "../core/Formats/Names/Name"

export const i18nUsers = i18nData({

  name: {
    en: { one: "User", many: "Users" },
    fr: { one: "Utilisateur", many: "Utilisateurs", article: NameArticle.MASCULINE },
  },

  email: {
    en: { one: "E-mail address", many: "E-mail addresses" },
    fr: { one: "Adresse e-mail", many: "Adresses e-mail", article: NameArticle.FEMININE },
  },

  password: {
    en: { one: "Password", many: "Passwords" },
    fr: { one: "Mot de passe", many: "Mots de passe", article: NameArticle.MASCULINE },
  },

  register: {
    en: "Sign up",
    fr: "Inscription",
  },

  login: {
    en: "Sign in",
    fr: "Connexion",
  },

})
