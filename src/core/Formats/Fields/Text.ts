import { Field_LengthOptions, Field } from "../Models/Field"
import { FieldType } from "../../Context/Types/FieldType"
import { SchemaObject } from "../Objects/Schema"

export type TextFieldOptions = Field_LengthOptions & {
  lines?: number
}

export type TextField = Field<FieldType.TEXT, TextFieldOptions>

export const TextFieldValidator = <Data extends any>(data: Data, context?: string|string[]): Promise<Data> => new Promise((resolve, reject) => {
  resolve()
})

/*SchemaObject<FieldType.TEXT, TextFieldOptions>


new Error(ErrorType.MISSING_DATA, `Type "${dataType}" must be "${schema.type}"`, context)*/
