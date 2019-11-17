import { RecipeType } from "../../Context/Types/RecipeType"
import { PathObject } from "../Objects/Path"

export type ModelRecipeData<Type extends RecipeType, Id, Data> = {
  apiVersion: number
  type: Type
  id: Id
} & Data

export class ModelRecipe<Type extends RecipeType, Id, Data> {
  path: PathObject
  data: ModelRecipeData<Type, Id, Data>

  constructor(path: PathObject, data: ModelRecipeData<Type, Id, Data>) {
    this.path = path
    this.data = data
  }
}
