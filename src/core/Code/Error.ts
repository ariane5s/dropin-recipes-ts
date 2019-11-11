
export enum ErrorType {
  MISSING_DATA = "4",
}

export class Error {
  type: ErrorType
  error: string
  context?: string[]
  constructor(type: ErrorType, error: string, context?: string[]) {
    this.type = type
    this.error = error
    this.context = context
  }
}
