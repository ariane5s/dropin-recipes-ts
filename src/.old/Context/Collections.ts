import { FieldSelector, MultipleFieldsSelector } from "./Fields"

export interface CollectionSelector {
  name: string
  fields: FieldSelector[]
}

export type MultipleCollectionsSelector = {
  [collection: string]: MultipleFieldsSelector
}
