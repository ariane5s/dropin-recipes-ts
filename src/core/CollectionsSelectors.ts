import { FieldSelectors, FieldsSelectorsObject } from "./FieldsSelectors"

export interface CollectionSelectors {
  name: string
  fields: FieldSelectors[]
}

export type CollectionsSelectorsObject = {
  [collection: string]: FieldsSelectorsObject
}
