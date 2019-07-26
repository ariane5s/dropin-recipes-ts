import { Field, FieldLengthOptions } from "../Field"

export type NumberFieldOptions = FieldLengthOptions & {
  decimals?: number
}

export type NumberField = Field<NumberFieldOptions>
