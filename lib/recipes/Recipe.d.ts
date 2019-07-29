import { RecipeFormat } from "../core/RecipeFormat";
import { Name } from "../core/Name";
import { CompanyId, CollectionId, DocumentId } from "../outputs";
import { SectionId, ChildrenSection } from "./Section";
export declare type RecipeId = string;
export declare type RecipeRecipeVariables = {
    [name: string]: string | number;
};
export declare type RecipeRecipeSection = SectionId | ChildrenSection;
export interface RecipeRecipe extends RecipeFormat<"Recipe", RecipeId> {
    company: CompanyId;
    name?: Name;
    authors?: string[];
    administrators?: string[];
    variables?: RecipeRecipeVariables;
    collections?: CollectionId[];
    documents?: DocumentId[];
    sections?: RecipeRecipeSection[];
}
//# sourceMappingURL=Recipe.d.ts.map