import { Field, FieldDefaultOption, FieldType } from "../Field"

export type BooleanFieldOptions = FieldDefaultOption<boolean> & {
  done?: boolean
}

export interface BooleanField extends Field<BooleanFieldOptions> {
  type: FieldType.BOOLEAN
}
