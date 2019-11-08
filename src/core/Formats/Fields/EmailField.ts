import { Field, FieldType } from "../../.old/Formats/Field"

export type EmailFieldOptions = {
  domains?: string[]
}

export interface EmailField extends Field<EmailFieldOptions> {
  type: FieldType.EMAIL
}
