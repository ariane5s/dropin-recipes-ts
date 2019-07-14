import { SelectorCondition, SelectorConditionObject } from "./SelectorCondition";
export interface FieldSelectors {
    name: string;
    display?: boolean;
    selectors?: SelectorCondition[];
    abstract?: boolean;
    filters?: boolean;
}
export declare type FieldsSelectorsObject = {
    [field: string]: SelectorConditionObject;
};
