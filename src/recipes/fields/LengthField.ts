import { Field, FieldLengthOptions } from "../Field"

export type LengthFieldOptions = FieldLengthOptions & {
  unit: string
}

export type LengthField = Field<LengthFieldOptions>
