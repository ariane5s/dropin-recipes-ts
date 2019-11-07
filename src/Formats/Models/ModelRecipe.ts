import { RecipeType } from "../../Context/Types/RecipeType"

export type ModelRecipe<Type extends RecipeType, Id, Data> = {
  apiVersion: number
  type: Type
  id: Id
} & Data
