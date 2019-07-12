import { SelectorCondition } from "./selectors/SelectorCondition";
export declare type QueryView = {
    [collection: string]: string[];
};
export declare type QueryFieldsSelectors = {
    [field: string]: SelectorCondition[];
};
export declare type QueryCollectionsSelectors = {
    [collection: string]: QueryFieldsSelectors;
};
