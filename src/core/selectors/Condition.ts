
export enum SelectorConditionOperator {
  EQUALS = "=",
  SUPERIOR = ">",
  INFERIOR = "<",
  SUPERIOR_OR_EQUALS = ">=",
  INFERIOR_OR_EQUALS = "<=",
  UNKNOWN = "",
}

export interface SelectorCondition {
  operator: SelectorConditionOperator
  value: string
  default?: boolean
}

export type MultipleConditionsSelector = string|string[]
