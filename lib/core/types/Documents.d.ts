import { Recipe } from "./Recipes";
import { DocumentId } from "../../outputs/Document";
import { CollectionSelector } from "../selectors/Collections";
import { Name } from "../i18n/Names";
export declare enum DocumentType {
    GoogleMaps = "GoogleMapsDocument"
}
export interface DocumentRecipe<Options = any> extends Recipe<DocumentId, DocumentType> {
    options: Options;
    lines: CollectionSelector[];
    name?: Name;
}
//# sourceMappingURL=Documents.d.ts.map