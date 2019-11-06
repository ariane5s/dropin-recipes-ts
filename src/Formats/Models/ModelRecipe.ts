import { RecipeType } from "../../Context/Recipes/RecipeType"

export type ModelRecipe<Type extends RecipeType, Id, Data> = {
  apiVersion: number
  type: Type
  id: Id
} & Data
