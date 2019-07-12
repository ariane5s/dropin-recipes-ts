import { SelectorCondition, SelectorConditionObject } from "./SelectorCondition";
export interface FieldSelector {
    name: string;
    display?: boolean;
    selectors?: SelectorCondition[];
    abstract?: boolean;
    filters?: boolean;
}
export declare type FieldSelectorObject = {
    [field: string]: SelectorConditionObject;
};
