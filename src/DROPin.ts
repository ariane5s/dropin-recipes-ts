import { RecipeId } from "./types/Recipe"
import { DocumentId } from "./types/Document"
import { CollectionId } from "./types/Collections"
import { Line } from "./types/Line"

export class DROPin {
  private static API = "https://api.dropin.link/"

  static enableLocalMode(port: number) {
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

  static getLines(recipe: RecipeId, collection: CollectionId, filters?: any): Promise<Line[]> {
    return this.request(`recipes/${recipe}/collections/${collection}/lines`)
  }
}
