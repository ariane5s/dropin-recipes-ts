import { Field } from "./Field";
import { Name } from "../core/Name";
import { RecipeFormat } from "../core/RecipeFormat";
import { CollectionId } from "../outputs/Collections";
export declare type CollectionRecipeFields = {
    [id: string]: Field;
};
export interface CollectionRecipe extends RecipeFormat<"Collection", CollectionId> {
    name?: Name;
    fields: CollectionRecipeFields;
}
//# sourceMappingURL=Collection.d.ts.map