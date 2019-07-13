import { SelectorCondition, SelectorConditionObject } from "./SelectorCondition"

export interface FieldSelectors {
  name: string
  display?: boolean
  selectors?: SelectorCondition[]
  abstract?: boolean
  filters?: boolean
}

export type FieldsSelectorsObject = {
  [field: string]: SelectorConditionObject
}
