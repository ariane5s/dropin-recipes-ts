import { i18nData } from "./i18n"
import { ErrorType } from "../../Context/Types/ErrorType"

export class Error {
  message: string | i18nData
  type?: ErrorType
  context?: string|string[]

  constructor(message: string | i18nData, type?: ErrorType, context?: string|string[]) {
    this.message = message
    if(typeof type !== "undefined") this.type = type
    if(typeof context !== "undefined") this.context = context
  }
}
