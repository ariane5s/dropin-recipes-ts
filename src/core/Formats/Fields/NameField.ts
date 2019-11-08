import { Field, FieldLengthOptions, FieldType } from "../../.old/Formats/Field"

export type NameFieldOptions = FieldLengthOptions & {
  fullName?: boolean
}

export interface NameField extends Field<NameFieldOptions> {
  type: FieldType.NAME
}
