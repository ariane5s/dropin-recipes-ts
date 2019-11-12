
export enum ErrorType {
  MISSING_DATA = "4",
}

export class Error {
  message: string
  type?: ErrorType
  context?: string|string[]
  constructor(message: string, type?: ErrorType, context?: string|string[]) {
    this.message = message
    if(typeof type !== "undefined") this.type = type
    if(typeof context !== "undefined") this.context = context
  }
}
