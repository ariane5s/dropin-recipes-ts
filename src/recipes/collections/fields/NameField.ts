import { Field, FieldLengthOptions, FieldType } from "../Field"

export type NameFieldOptions = FieldLengthOptions & {
  fullName?: boolean
}

export interface NameField extends Field<NameFieldOptions> {
  type: FieldType.NAME
}
