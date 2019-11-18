import { ModelField_RequiredOption, ModelField } from "../Models/Field"
import { FieldType } from "../../Context/Types/FieldType"
import { l4rContext } from "../Models/l4r"
import { Error } from "../Models/Error"

export type EnvironmentFieldOptions = ModelField_RequiredOption & {}

export type EnvironmentFieldSchema = ModelField<FieldType.ENVIRONMENT, EnvironmentFieldOptions>

export type EnvironmentField = {}

export const EnvironmentFieldValidator = (data: EnvironmentField | any, context?: l4rContext): Promise<Error[]> => {
  return Promise.resolve([])
}
