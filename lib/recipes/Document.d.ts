import { Recipe } from "../core/Recipe";
import { CollectionSelectors } from "../core/CollectionsSelectors";
import { Name } from "../core";
export declare type DocumentId = string;
export interface Document<Type = any, Options = any> extends Recipe<Type, DocumentId> {
    options: Options;
    lines: CollectionSelectors[];
    name?: Name;
}
export declare enum DocumentType {
    GoogleMaps = "GoogleMapsDocument"
}
