import { Field, FieldType } from "../Field"

export type PhoneFieldOptions = {
  prefix?: number
}

export interface PhoneField extends Field<PhoneFieldOptions> {
  type: FieldType.PHONE
}
