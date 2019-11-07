import { ModelRecipe } from "../../Formats/Models/ModelRecipe"
import { CompanyId } from "./id"
import { RecipeType } from "../../Context/Types/RecipeType"

export interface CompanyRecipeData {

}

export type CompanyRecipe = ModelRecipe<RecipeType.COMPANY, CompanyId, CompanyRecipeData>

export type CompanyReference = string
