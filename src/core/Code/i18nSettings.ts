import { Language } from "../Context/Fields/Language"

export class i18nSettings {
  private static language: Language = i18nSettings.getDefaultLanguage()

  static getDefaultLanguage() {
    return Language.ENGLISH
  }

  static setCurrentLanguage(language: Language) {
    this.language = language
  }

  static setDefaultLanguage() {
    this.setCurrentLanguage(this.getDefaultLanguage())
  }

  static setCurrentLanguageFromString(locale: string) {
    switch(locale) {
      case Language.FRENCH: return this.setCurrentLanguage(Language.FRENCH)
      default: return this.setCurrentLanguage(this.getDefaultLanguage())
    }
  }

  static getCurrentLanguage() {
    return this.language
  }
}
