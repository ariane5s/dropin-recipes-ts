import { FieldSelectors, FieldsSelectorsObject } from "./FieldSelectors"

export interface CollectionSelectors {
  name: string
  fields: FieldSelectors[]
}

export type CollectionsSelectorsObject = {
  [collection: string]: FieldsSelectorsObject
}
