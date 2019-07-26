import { Field, FieldLengthOptionsd } from "../Field"

export type LengthFieldOptions = FieldLengthOptionsd & {
  unit: string
}

export type LengthField = Field<LengthFieldOptions>
