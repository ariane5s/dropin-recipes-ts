import { ModelField_RequiredOption, ModelField } from "../Models/Field"
import { FieldType } from "../../Context/Types/FieldType"
import { l4rContext } from "../Models/l4r"
import { Error } from "../Models/Error"

export type DateFieldOptions = ModelField_RequiredOption & {
  minDate?: Date
  maxDate?: Date
}

export type DateFieldSchema = ModelField<FieldType.DATE, DateFieldOptions>

export type DateField = Date

export const DateFieldValidator = (data: DateField | any, context?: l4rContext): Promise<Error[]> => {
  return Promise.resolve([])
}
