import { FieldSelector, FieldSelectorObject } from "./FieldSelector"

export interface LinesSelector {
  name: string
  fields: FieldSelector[]
}

export type CollectionSelectorObject = { [collection: string]: FieldSelectorObject }
