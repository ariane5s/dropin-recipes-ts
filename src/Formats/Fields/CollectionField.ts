import { FieldDefaultOption, FieldIdOption, Field, FieldType } from "../../.old/Formats/Field"

export type CollectionFieldOptions = FieldDefaultOption<boolean> & FieldIdOption

export interface CollectionField extends Field<CollectionFieldOptions> {
  type: FieldType.COLLECTION
}
