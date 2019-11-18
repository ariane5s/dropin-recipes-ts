import { ModelField_DefaultOption, ModelField } from "../Models/Field"
import { FieldType } from "../../Context/Types/FieldType"
import { l4rContext } from "../Models/l4r"
import { Error } from "../Models/Error"
import { i18nValidator } from "../../../i18n/Validator"
import { ErrorType } from "../../Context/Types/ErrorType"

export type BooleanFieldOptions = ModelField_DefaultOption<boolean> & {
  done?: boolean
}

export type BooleanFieldSchema = ModelField<FieldType.BOOLEAN, BooleanFieldOptions>

export type BooleanField = boolean

export const BooleanFieldValidator = (data: BooleanField | any, context?: l4rContext): Promise<Error[]> => {
  if(typeof data !== "boolean") {
    return Promise.resolve([ new Error(i18nValidator.dataMustBeBoolean, ErrorType.INCOMPATIBLE, context) ])
  }
  return Promise.resolve([])
}
