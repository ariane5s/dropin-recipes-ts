import { Field, FieldType } from "../Field"

export type ListFieldOptions = {
  todo?: boolean
}

export interface ListField extends Field<ListFieldOptions> {
  type: FieldType.LIST
}
