import { SelectorCondition } from "./selectors/SelectorCondition"

export type QueryView = {
  [collection: string]: string[]
}

export type QueryFieldsSelectors = {
  [field: string]: SelectorCondition[]
}

export type QueryCollectionsSelectors = {
  [collection: string]: QueryFieldsSelectors
}
