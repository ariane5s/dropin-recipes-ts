import { ModelField_RequiredOption, ModelField } from "../Models/Field"
import { FieldType } from "../../Context/Types/FieldType"
import { l4rContext } from "../Models/l4r"
import { Error } from "../Models/Error"

export type TimeFieldOptions = ModelField_RequiredOption

export type TimeFieldSchema = ModelField<FieldType.TIME, TimeFieldOptions>

export type TimeField = {}

export const TimeFieldValidator = (data: TimeField | any, context?: l4rContext): Promise<Error[]> => {
  return Promise.resolve([])
}
