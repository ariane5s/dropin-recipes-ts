import { Field, FieldLengthOptionsd } from "../Field"

export type TextFieldOptions = FieldLengthOptionsd & {
  lines?: number
}

export type TextField = Field<TextFieldOptions>
