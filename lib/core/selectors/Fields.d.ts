import { SelectorCondition, MultipleConditionsSelector } from "./Condition";
export interface FieldSelector {
    name: string;
    display?: boolean;
    selectors?: SelectorCondition[];
    abstract?: boolean;
    filters?: boolean;
}
export declare type MultipleFieldsSelector = {
    [field: string]: MultipleConditionsSelector;
};
//# sourceMappingURL=Fields.d.ts.map