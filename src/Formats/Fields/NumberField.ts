import { Field, FieldLengthOptions, FieldType } from "../Field"

export type NumberFieldOptions = FieldLengthOptions & {
  decimals?: number
}

export interface NumberField extends Field<NumberFieldOptions> {
  type: FieldType.NUMBER
}

