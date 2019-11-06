import { UserId, CompanyId } from "../../Auth"
import { RecipeId } from "../../Catalog/Recipes/RecipeRecipe"
import { RecipeType } from "../Models/ModelRecipe"

export interface ProjectReference

export interface ReferenceRecipe<Type extends RecipeType> {
  version?: number
  owner?: UserId | CompanyId
  project?: Projecti
  type?: Type
  id?: RecipeId
}
