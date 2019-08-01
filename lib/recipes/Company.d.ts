import { Recipe, RecipeType } from "../core/types/Recipes";
import { CompanyId } from "../outputs";
import { Name } from "../core";
export interface CompanyRecipe extends Recipe<CompanyId, RecipeType.COMPANY> {
    name: Name;
    administrators: string[];
}
//# sourceMappingURL=Company.d.ts.map