
export enum ConditionSelectorOperator {
  EQUALS = "=",
  SUPERIOR = ">",
  INFERIOR = "<",
  SUPERIOR_OR_EQUALS = ">=",
  INFERIOR_OR_EQUALS = "<=",
  UNKNOWN = "",
}

export interface ConditionSelector {
  operator: ConditionSelectorOperator
  value: string
  default?: boolean
}

export type MultipleConditionsSelector = string|string[]
