import { ModelField_RequiredOption, ModelField } from "../Models/Field"
import { FieldType } from "../../Context/Types/FieldType"
import { l4rContext } from "../Models/l4r"
import { Error } from "../Models/Error"

export type PercentageFieldOptions = ModelField_RequiredOption

export type PercentageFieldSchema = ModelField<FieldType.PERCENTAGE, PercentageFieldOptions>

export type PercentageField = {}

export const PercentageFieldValidator = (data: PercentageField | any, context?: l4rContext): Promise<Error[]> => {
  return Promise.resolve([])
}
