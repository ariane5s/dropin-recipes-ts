import { Field, FieldType } from "../../.old/Formats/Field"

export type PhoneFieldOptions = {
  prefix?: number
}

export interface PhoneField extends Field<PhoneFieldOptions> {
  type: FieldType.PHONE
}
