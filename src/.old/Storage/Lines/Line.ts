import { ModelResponse } from "../../../Formats/Models/ModelResponse"
import { RecipeId } from "../../Catalog/Recipes/RecipeRecipe"
import { CollectionId } from "../Collections/Collection"

export type LineId = string

export type Line<Data = any> = ModelResponse<LineId, {
  recipe: RecipeId
  collection: CollectionId
  data: Data
}>
