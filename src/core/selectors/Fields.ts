import { ConditionSelector, MultipleConditionsSelector } from "./Condition"

export interface FieldSelector {
  name: string
  display?: boolean
  selectors?: ConditionSelector[]
  abstract?: boolean
  filters?: boolean
}

export type MultipleFieldsSelector = {
  [field: string]: MultipleConditionsSelector
}
