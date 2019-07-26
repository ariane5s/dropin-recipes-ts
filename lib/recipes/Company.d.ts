import { Recipe } from "../core/Recipe";
import { CompanyId } from "../outputs";
import { Name } from "../core";
export interface CompanyRecipe extends Recipe<"Company", CompanyId> {
    name: Name;
    administrators: string[];
}
//# sourceMappingURL=Company.d.ts.map