import { Field, FieldLengthOptions, FieldType } from "../../.old/Formats/Field"

export type LengthFieldOptions = FieldLengthOptions & {
  unit: string
}

export interface LengthField extends Field<LengthFieldOptions> {
  type: FieldType.LENGTH
}