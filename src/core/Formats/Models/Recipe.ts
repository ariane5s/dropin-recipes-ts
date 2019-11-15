import { RecipeType } from "../../Context/Types/RecipeType"
import { PathObject } from "../Objects/Path"

interface ModelRecipeHeader<Type extends RecipeType, Id> {
  apiVersion: number
  type: Type
  id: Id
}

export type ModelRecipeData<Type extends RecipeType, Id, Data> = ModelRecipeHeader<Type, Id> & Data

export class ModelRecipe<Type extends RecipeType, Id, Data> implements ModelRecipeHeader<Type, Id> {
  path: PathObject
  apiVersion: number
  type: Type
  id: Id

  constructor(path: PathObject, data: ModelRecipeData<Type, Id, Data>) {
    this.path = path
    this.apiVersion = data.apiVersion
    this.type = data.type
    this.id = data.id
  }
}
