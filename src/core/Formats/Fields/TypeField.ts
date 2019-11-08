import { Field, FieldIdOption, FieldType } from "../../.old/Formats/Field"

export type TypeFieldOptions = FieldIdOption

export interface TypeField extends Field<TypeFieldOptions> {
  type: FieldType.TYPE
}
