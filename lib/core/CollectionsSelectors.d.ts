import { FieldSelectors, FieldsSelectorsObject } from "./FieldsSelectors";
export interface CollectionSelectors {
    name: string;
    fields: FieldSelectors[];
}
export declare type CollectionsSelectorsObject = {
    [collection: string]: FieldsSelectorsObject;
};
