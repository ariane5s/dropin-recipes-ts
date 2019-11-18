import { ModelField_RequiredOption, ModelField } from "../Models/Field"
import { FieldType } from "../../Context/Types/FieldType"
import { l4rContext } from "../Models/l4r"
import { Error } from "../Models/Error"

export type ListFieldOptions = ModelField_RequiredOption & {
  todo?: boolean
  children?: ListField
}

export type ListFieldSchema = ModelField<FieldType.LIST, ListFieldOptions>

export type ListField = []

export const ListFieldValidator = (data: ListField | any, context?: l4rContext): Promise<Error[]> => {
  return Promise.resolve([])
}
