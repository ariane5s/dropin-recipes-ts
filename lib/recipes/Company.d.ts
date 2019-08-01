import { Recipe, RecipeType } from "../core/types/Recipes";
import { CompanyId } from "../outputs";
import { Name } from "../core";
export interface CompanyRecipe extends Recipe<CompanyId> {
    type: RecipeType.COLLECTION;
    name: Name;
    administrators: string[];
}
//# sourceMappingURL=Company.d.ts.map