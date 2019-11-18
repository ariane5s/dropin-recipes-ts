import { ModelField_RequiredOption, ModelField } from "../Models/Field"
import { FieldType } from "../../Context/Types/FieldType"
import { l4rContext } from "../Models/l4r"
import { Error } from "../Models/Error"

export type PhoneFieldOptions = ModelField_RequiredOption & {
  prefix?: number
}

export type PhoneFieldSchema = ModelField<FieldType.PHONE, PhoneFieldOptions>

export type PhoneField = {}

export const PhoneFieldValidator = (data: PhoneField | any, context?: l4rContext): Promise<Error[]> => {
  return Promise.resolve([])
}
