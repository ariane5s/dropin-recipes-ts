import { FieldDefaultOption, FieldIdOption, Field, FieldType } from "../Field"

export type CollectionFieldOptions = FieldDefaultOption<boolean> & FieldIdOption

export interface CollectionField extends Field<CollectionFieldOptions> {
  type: FieldType.COLLECTION
}
