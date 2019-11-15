import { Field_LengthOptions, Field } from "../Models/Field"
import { FieldType } from "../../Context/Types/FieldType"
import { Error } from "../Models/Error"
import { i18nValidator } from "../../../i18n/Validator"
import { ErrorType } from "../../Context/Types/ErrorType"

export type TextFieldOptions = Field_LengthOptions & {
  lines?: number
}

export type TextField = Field<FieldType.TEXT, TextFieldOptions>

export const TextFieldValidator = <Data extends any = any>(data: Data, context?: string|string[]): Promise<Error|void> => {
  if(typeof data !== "string") {
    return Promise.resolve(new Error(i18nValidator.dataMustBeAString, ErrorType.INCOMPATIBLE, context))
  }
  return Promise.resolve()
}
