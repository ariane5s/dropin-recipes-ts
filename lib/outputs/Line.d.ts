import { Entry } from "../core/Entry";
import { RecipeId } from "../core/Recipe";
import { CollectionId } from "./Collections";
export declare type LineId = string;
export interface LineParams {
    filters?: string;
    f?: string;
}
export interface Line<Data = any> extends Entry<LineId, Data> {
    recipe: RecipeId;
    collection: CollectionId;
}
//# sourceMappingURL=Line.d.ts.map