import { Field } from "./Field";
import { Name } from "../core/Name";
import { Recipe } from "../core/Recipe";
import { CollectionId } from "../outputs/Collections";
export declare type CollectionRecipeFields = {
    [id: string]: Field;
};
export interface CollectionRecipe extends Recipe<"Collection", CollectionId> {
    name?: Name;
    fields: CollectionRecipeFields;
}
//# sourceMappingURL=Collection.d.ts.map