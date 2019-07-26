import { RecipeFormat } from "../core/RecipeFormat";
import { CompanyId } from "../outputs";
import { Name } from "../core";
export interface CompanyRecipe extends RecipeFormat<"Company", CompanyId> {
    name: Name;
    administrators: string[];
}
//# sourceMappingURL=Company.d.ts.map