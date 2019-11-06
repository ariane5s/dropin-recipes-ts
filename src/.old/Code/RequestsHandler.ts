import { RecipeId } from "../Catalog/Recipes/Recipet"
import { CollectionId } from "../API/Responses"
import { Line, LineParams } from "../../API/Line"
import { DROPinAPI } from "./API"

export function RequestsHandler<Data>(recipe: RecipeId, collection: CollectionId) {
  return {
    getOne(params: LineParams): Promise<Line<Data>> {
      return DROPinAPI.getOneLine<Data>(recipe, collection, params)
    }
  }
}
