export declare enum SelectorConditionOperator {
    EQUALS = "=",
    SUPERIOR = ">",
    INFERIOR = "<",
    SUPERIOR_OR_EQUALS = ">=",
    INFERIOR_OR_EQUALS = "<=",
    UNKNOWN = ""
}
export interface SelectorCondition {
    operator: SelectorConditionOperator;
    value: string;
    default?: boolean;
}
export declare type SelectorConditionObject = string | string[];
//# sourceMappingURL=SelectorCondition.d.ts.map