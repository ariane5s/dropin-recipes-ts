import { ModelField_RequiredOption, ModelField } from "../Models/Field"
import { FieldType } from "../../Context/Types/FieldType"
import { l4rContext } from "../Models/l4r"
import { Error } from "../Models/Error"

export type LocationFieldOptions = ModelField_RequiredOption

export type LocationFieldSchema = ModelField<FieldType.LOCATION, LocationFieldOptions>

export type LocationField = []

export const LocationFieldValidator = (data: LocationField | any, context?: l4rContext): Promise<Error[]> => {
  return Promise.resolve([])
}
