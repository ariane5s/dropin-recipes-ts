import { FieldSelector, MultipleFieldsSelector } from "./Fields";
export interface CollectionSelector {
    name: string;
    fields: FieldSelector[];
}
export declare type MultipleCollectionsSelector = {
    [collection: string]: MultipleFieldsSelector;
};
//# sourceMappingURL=Collections.d.ts.map