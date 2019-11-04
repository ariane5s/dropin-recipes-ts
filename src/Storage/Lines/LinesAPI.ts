import { RecipeId } from "../../Catalog/Recipes/RecipeRecipe"
import { CollectionId } from "../Collections/Collection"
import { API } from "../../Code/API"

export class LinesAPI {

  static getLines<Data>(recipe: RecipeId, collection: CollectionId, params: LineParams = {}): Promise<Line<Data>[]> {
    return API.request<Line<Data>[]>(FetchMethod.GET, `recipes/${recipe}/collections/${collection}/lines`, params as FetchParams)
  }

  static getOneLine<Data>(recipe: RecipeId, collection: CollectionId, params: LineParams = {}): Promise<Line<Data>> {
    return this.getLines<Data>(recipe, collection, params).then(lines => {
      if(lines.length !== 1) {
        return Promise.reject("More than one line found")
      }
      return Promise.resolve(lines[0])
    })
  }

  static updateLine(line: LineId, data: any) {
    return API.request<Line>(FetchMethod.POST, `lines/${line}`, {}, {
      data
    })
  }

}
