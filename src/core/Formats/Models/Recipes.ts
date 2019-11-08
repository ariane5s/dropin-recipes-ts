import { RecipeType } from "../../Context/Types/RecipeType"

export type ModelRecipeData<Type extends RecipeType, Id, Data> = {
  apiVersion: number
  type: Type
  id: Id
} & Data

export interface ModelRecipe<Type extends RecipeType, Id, Data, Validator> {
  validate: Validator
  save: () => Response
}
