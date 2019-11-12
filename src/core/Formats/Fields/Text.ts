import { Field_LengthOptions, Field } from "../Models/Field"
import { FieldType } from "../../Context/Types/FieldType"
import { Error, ErrorType } from "../Models/Error"

export type TextFieldOptions = Field_LengthOptions & {
  lines?: number
}

export type TextField = Field<FieldType.TEXT, TextFieldOptions>

export const TextFieldValidator = <Data extends any = any>(data: Data, context?: string|string[]): Promise<Error|void> => {
  if(typeof data !== "string") return Promise.resolve(new Error(`Data must be a string`, ErrorType.MISSING_DATA, context))
  return Promise.resolve()
}
