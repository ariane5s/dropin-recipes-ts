import { Output } from "../core/Output";
import { RecipeId } from "../core/Recipe";
import { CollectionId } from "./Collections";
export declare type LineId = string;
export interface LineParams {
    filters?: string;
    f?: string;
}
export interface Line<Data = any> extends Output<LineId> {
    recipe: RecipeId;
    collection: CollectionId;
    data: Data;
    version: number;
}
//# sourceMappingURL=Line.d.ts.map