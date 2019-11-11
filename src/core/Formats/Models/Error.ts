
export enum ErrorType {
  MISSING_DATA = "4",
}

export class Error {
  message: string
  type?: ErrorType
  context?: string|string[]
  constructor(message: string, type?: ErrorType, context?: string|string[]) {
    this.message = message
    this.type = type
    this.context = context
  }
}
