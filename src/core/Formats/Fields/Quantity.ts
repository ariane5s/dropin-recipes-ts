import { ModelField_RequiredOption, ModelField, ModelField_IdOption } from "../Models/Field"
import { FieldType } from "../../Context/Types/FieldType"
import { l4rContext } from "../Models/l4r"
import { Error } from "../Models/Error"

export type QuantityFieldOptions = ModelField_RequiredOption

export type QuantityFieldSchema = ModelField<FieldType.QUANTITY, QuantityFieldOptions>

export type QuantityField = number

export const QuantityFieldValidator = (data: QuantityField | any, context?: l4rContext): Promise<Error[]> => {
  return Promise.resolve([])
}
