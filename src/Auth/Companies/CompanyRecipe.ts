import { ModelRecipe, RecipeType } from "../../Formats/Models/ModelRecipe"
import { CompanyId } from "./Company"

export interface CompanyRecipeData {
  administrators: string[]
}

export type CompanyRecipe = ModelRecipe<RecipeType.COMPANY, CompanyId, CompanyRecipeData>
