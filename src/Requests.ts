import * as request from "request-promise-native"
import { Document, DocumentParams } from "./outputs/Document"
import { RecipeId } from "./core/Recipe"
import { DocumentId } from "./outputs/Document"
import { Line } from "./outputs/Line"
import { CollectionId } from "./outputs/Collections"

export class Request {
  private static URL = "https://api.dropin.link"
  private static VERSION = 1

  static enableLocalMode(port: number) {
    this.URL = `http://localhost:${port}`
  }

  private static request<Output>(path: string, paramsArray: string[] = []): Promise<Output> {
    return new Promise((resolve, reject) => {
      let stringParams = ""
      if(paramsArray.length !== 0) stringParams = `?${paramsArray.join("&")}`
      request(encodeURI(`${this.URL}/v${this.VERSION}/${path}${stringParams}`))
        .then(result => result.json()).then(result => {
          if(typeof result.error === "undefined") {
            resolve(result)
          } else {
            reject(result)
          }
        }, reject)
    })
  }

  static getLines<LineData = any>(recipe: RecipeId, collection: CollectionId, params: DocumentParams = {}): Promise<Line<LineData>[]> {
    const stringParams = []
    if(typeof params.filters !== "undefined") stringParams.push(`f=${params.filters}`)
    return this.request<Line<LineData>[]>(`recipes/${recipe}/collections/${collection}/lines`, stringParams)
  }

  static getOneLine<LineData = any>(recipe: RecipeId, collection: CollectionId, params: DocumentParams = {}): Promise<Line<LineData>> {
    return this.getLines<LineData>(recipe, collection, params).then(lines => {
      if(lines.length !== 1) {
        return Promise.reject("More than one line found")
      }
      return Promise.resolve(lines[0])
    })
  }

  static getDocument<Output = Document>(recipe: RecipeId, document: DocumentId, params: DocumentParams = {}): Promise<Output> {
    const stringParams = []
    if(typeof params.token !== "undefined") stringParams.push(`t=${params.token}`)
    if(typeof params.filters !== "undefined") stringParams.push(`f=${params.filters}`)
    if(typeof params.linesOnly !== "undefined") stringParams.push(`linesOnly=${params.linesOnly}`)
    return this.request<Output>(`recipes/${recipe}/documents/${document}`, stringParams)
  }

  static getDocumentLines(recipe: RecipeId, document: DocumentId, params: DocumentParams = {}): Promise<Line[]> {
    params.linesOnly = "1"
    return this.getDocument<Line[]>(recipe, document, params)
  }

  /*static getLines(recipe: RecipeId, collection: CollectionId) {
    return this.request<Line[]>(`recipes/${recipe}/collections/${collection}/lines`, params)
  }*/
}
