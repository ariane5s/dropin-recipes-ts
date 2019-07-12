import { DocumentOutput, DocumentParams } from "./outputs/Document"
import { RecipeId } from "./core/Recipe"
import { DocumentId } from "./recipes/Document"
import { LineOutput } from "./outputs/Line"

export class Request {
  private static URL = "https://api.dropin.link"
  private static VERSION = 1

  static enableLocalMode(port: number) {
    this.URL = `http://localhost:${port}/`
  }

  private static request<Output>(path: string, paramsArray: string[] = []): Promise<Output> {
    return new Promise((resolve, reject) => {
      let stringParams = ""
      if(paramsArray.length !== 0) stringParams = `?${paramsArray.join("&")}`
      fetch(encodeURI(`${this.URL}/v${this.VERSION}/${path}${stringParams}`))
        .then(result => result.json()).then(result => {
          if(typeof result.error === "undefined") {
            resolve(result)
          } else {
            reject(result)
          }
        }, reject)
    })
  }

  static getDocument<Output = DocumentOutput>(recipe: RecipeId, document: DocumentId, params: DocumentParams = {}): Promise<Output> {
    const stringParams = []
    if(typeof params.token !== "undefined") stringParams.push(`t=${params.token}`)
    if(typeof params.filters !== "undefined") stringParams.push(`f=${params.filters}`)
    return this.request<Output>(`recipes/${recipe}/documents/${document}`, stringParams)
  }

  static getDocumentLines(recipe: RecipeId, document: DocumentId, params: DocumentParams = {}): Promise<LineOutput[]> {
    params.linesOnly = "1"
    return this.getDocument<LineOutput[]>(recipe, document, params)
  }

  /*static getLines(recipe: RecipeId, collection: CollectionId) {
    return this.request<Line[]>(`recipes/${recipe}/collections/${collection}/lines`, params)
  }*/
}
