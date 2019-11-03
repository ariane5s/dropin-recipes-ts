import { Field, FieldLengthOptions, FieldType } from "../Field"

export type TextFieldOptions = FieldLengthOptions & {
  lines?: number
}

export interface TextField extends Field<TextFieldOptions> {
  type: FieldType.TEXT
}
