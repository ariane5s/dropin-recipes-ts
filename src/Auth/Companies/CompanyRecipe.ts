import { Recipe, RecipeType } from "../../Catalog/Recipes"
import { CompanyId } from "../API/Responses"
import { Name } from "../core"

export interface CompanyRecipe extends Recipe<CompanyId> {
  type: RecipeType.COMPANY
  name: Name
  administrators: string[]
}
