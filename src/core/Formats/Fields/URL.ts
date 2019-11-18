import { ModelField_RequiredOption, ModelField } from "../Models/Field"
import { FieldType } from "../../Context/Types/FieldType"
import { l4rContext } from "../Models/l4r"
import { Error } from "../Models/Error"

export type URLFieldOptions = ModelField_RequiredOption

export type URLFieldSchema = ModelField<FieldType.URL, URLFieldOptions>

export type URLField = string

export const URLFieldValidator = (data: URLField | any, context?: l4rContext): Promise<Error[]> => {
  return Promise.resolve([])
}
