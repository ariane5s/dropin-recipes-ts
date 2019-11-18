import { ModelField_RequiredOption, ModelField_MinMaxOptions, ModelField, ModelField_IdOption } from "../Models/Field"
import { FieldType } from "../../Context/Types/FieldType"
import { l4rContext } from "../Models/l4r"
import { Error } from "../Models/Error"

export type AudioFieldOptions = ModelField_RequiredOption & ModelField_MinMaxOptions & ModelField_IdOption & {
  volume: string
}

export type AudioFieldSchema = ModelField<FieldType.AUDIO, AudioFieldOptions>

export type AudioField = {}

export const AudioFieldValidator = (data: AudioField | any, context?: l4rContext): Promise<Error[]> => {
  return Promise.resolve([])
}
