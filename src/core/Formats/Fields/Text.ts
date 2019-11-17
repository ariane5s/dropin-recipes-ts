import { ModelField_LengthOptions, ModelField, ModelField_RequiredOption } from "../Models/Field"
import { FieldType } from "../../Context/Types/FieldType"
import { l4rContext } from "../Models/l4r"
import { Error } from "../Models/Error"
import { i18nValidator } from "../../../i18n/Validator"
import { ErrorType } from "../../Context/Types/ErrorType"

export type TextFieldOptions = ModelField_RequiredOption & ModelField_LengthOptions & {
  lines?: number
}

export type TextField = ModelField<FieldType.TEXT, TextFieldOptions>

export const TextFieldValidator = <Data extends any = any>(data: Data, context?: l4rContext): Promise<Error|void> => {
  if(typeof data !== "string") {
    return Promise.resolve(new Error(i18nValidator.dataMustBeAString, ErrorType.INCOMPATIBLE, context))
  }
  return Promise.resolve()
}
