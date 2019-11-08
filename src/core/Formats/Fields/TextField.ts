import { Field, FieldLengthOptions, FieldType } from "../../.old/Formats/Field"

export type TextFieldOptions = FieldLengthOptions & {
  lines?: number
}

export interface TextField extends Field<TextFieldOptions> {
  type: FieldType.TEXT
}
