import { Field, FieldLengthOptions } from "../Field"

export type NameFieldOptions = FieldLengthOptions & {
  fullName?: boolean
}

export type NameField = Field<"name", NameFieldOptions>
