import { RecipeId, DocumentId, CollectionId, Lines } from "./types"

export default class Recipes {
  private static API = "https://api.dropin.link/"

  static enableLocalMode(port = 8040) {
    this.API = `http://localhost:${port}/`
  }

  private static request(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(this.API + path).then(result => result.json()).then(result => {
        if(typeof result.error === "undefined") {
          resolve(result)
        } else {
          reject(result)
        }
      }, reject)
    })
  }

  static getDocument(recipe: RecipeId, document: DocumentId) {
    return this.request(`recipes/${recipe}/documents/${document}`)
  }

  static getLines(recipe: RecipeId, collection: CollectionId, filters?: any): Promise<Lines> {
    return this.request(`recipes/${recipe}/collections/${collection}/lines`)
  }
}
