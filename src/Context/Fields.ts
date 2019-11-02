import { SelectorCondition, MultipleConditionsSelector } from "./Condition"

export interface FieldSelector {
  name: string
  display?: boolean
  selectors?: SelectorCondition[]
  abstract?: boolean
  filters?: boolean
}

export type MultipleFieldsSelector = {
  [field: string]: MultipleConditionsSelector
}
