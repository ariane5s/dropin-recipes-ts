import { Field, FieldIdOption, FieldType } from "../Field"

export type TypeFieldOptions = FieldIdOption

export interface TypeField extends Field<TypeFieldOptions> {
  type: FieldType.TYPE
}
