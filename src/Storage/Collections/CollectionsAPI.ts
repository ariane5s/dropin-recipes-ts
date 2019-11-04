import { API } from "../../Code/API"

export class CollectionsAPI {
  static getCollection<Output = CollectionRecipe>(recipe: RecipeId, collection: CollectionId) {
    return API.request<Output>(FetchMethod.GET, `recipes/${recipe}/collections/${collection}`)
  }

  static createCollection(recipe: RecipeId, collection: CollectionId, name: any, fields: any) {
    return API.request<CollectionRecipe>(FetchMethod.PUT, `recipes/${recipe}/collections`, {}, {
      name,
      slug: collection,
      fields
    })
  }

  static updateCollection(recipe: RecipeId, collection: CollectionId, name: any, fields: any) {
    return API.request<CollectionRecipe>(FetchMethod.POST, `recipes/${recipe}/collections/${collection}`, {}, {
      name,
      slug: collection,
      fields
    })
  }

  static deleteCollection(recipe: RecipeId, collection: CollectionId) {
    return API.request<RecipeRecipe>(FetchMethod.DELETE, `recipes/${recipe}/collections/${collection}`)
  }
}
