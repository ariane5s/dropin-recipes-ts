import { ModelField_RequiredOption, ModelField } from "../Models/Field"
import { FieldType } from "../../Context/Types/FieldType"
import { l4rContext } from "../Models/l4r"
import { Error } from "../Models/Error"

export type EmailFieldOptions = ModelField_RequiredOption & {
  domains?: string[]
}

export type EmailFieldSchema = ModelField<FieldType.EMAIL, EmailFieldOptions>

export type EmailField = string

export const EmailFieldValidator = (data: EmailField | any, context?: l4rContext): Promise<Error[]> => {
  return Promise.resolve([])
}
