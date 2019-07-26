import { Field, FieldDefaultOption } from "../Field"

export type BooleanFieldOptions = FieldDefaultOption<boolean> & {
  done?: boolean
}

export type BooleanField = Field<BooleanFieldOptions>
