import { ModelRecipe } from "../../Formats/Models/Recipes"
import { RecipeType } from "../../Context/Types/RecipeType"
import { CompanyId, CompanyRecipeData } from "./data"

type Model = ModelRecipe<RecipeType.COMPANY, CompanyId, CompanyRecipeData>

export class CompanyRecipe implements Model {

}

export type CompanyReference = string
