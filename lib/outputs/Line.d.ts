import { RecipeId } from "../core/Recipe";
import { CollectionId } from "./Collections";
export declare type LineId = string;
export interface LineParams {
    filters?: string;
    f?: string;
}
export interface Line<Data = any> {
    id: LineId;
    recipe: RecipeId;
    collection: CollectionId;
    data: Data;
    slug?: string;
}
//# sourceMappingURL=Line.d.ts.map