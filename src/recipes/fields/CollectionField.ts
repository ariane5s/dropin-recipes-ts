import { FieldDefaultOption, FieldIdOption, Field } from "../Field"

export type CollectionFieldOptions = FieldDefaultOption<boolean> & FieldIdOption

export type CollectionField = Field<CollectionFieldOptions>
