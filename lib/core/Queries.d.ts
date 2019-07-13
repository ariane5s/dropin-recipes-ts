import { SelectorCondition } from "./SelectorCondition";
export declare type QueryFieldsSelectors = {
    [field: string]: SelectorCondition[];
};
export declare type QueryCollectionsSelectors = {
    [collection: string]: QueryFieldsSelectors;
};
