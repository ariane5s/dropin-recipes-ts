import { Field, FieldLengthOptions } from "../Field"

export type TextFieldOptions = FieldLengthOptions & {
  lines?: number
}

export type TextField = Field<TextFieldOptions>
