import { RecipeId } from "../../recipes/Recipe"
import { CollectionId } from "../../outputs"
import { Line, LineParams } from "../../outputs/Line"
import { DROPinAPI } from "./DROPinAPI"

export function RequestsHandler<Data>(recipe: RecipeId, collection: CollectionId) {
  return {
    getOne(params: LineParams): Promise<Line<Data>> {
      return DROPinAPI.getOneLine<Data>(recipe, collection, params)
    }
  }
}
