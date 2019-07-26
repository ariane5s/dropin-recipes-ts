import { Field, FieldLengthOptionsd } from "../Field"

export type NumberFieldOptions = FieldLengthOptionsd & {
  decimals?: number
}

export type NumberField = Field<NumberFieldOptions>
