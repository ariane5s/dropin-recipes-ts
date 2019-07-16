import nodeFetch from "node-fetch"
import { Line, LineParams } from "../outputs/Line"
import { User } from "../outputs/User"
import { Token } from "../outputs/Token"
import { RecipeId } from "./Recipe"
import { CollectionId } from "../outputs/Collections"
import { DocumentId, Document, DocumentParams } from "../outputs/Document"

enum FetchMethod {
  PUT = "PUT",
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
}

interface FetchInit {
  method: FetchMethod
  headers: { [name: string]: string }
}

type FetchParams = { [name: string]: string }

export class DROPinAPI {
  private static URL = "https://api.dropin.link"
  private static VERSION = 1
  private static TOKEN: string

  static enableLocalMode(port: number) {
    this.URL = `http://localhost:${port}`
  }

  static setToken(token: string) {
    this.TOKEN = token
  }

  private static fetch<Output>(method: FetchMethod, path: string, params: FetchParams = {}): Promise<Output> {
    let init: FetchInit = {  method, headers: { "content-type": "application/json" } }

    // Token
    if(typeof this.TOKEN !== "undefined") {
      init.headers["Authorization"] = "Bearer " + this.TOKEN
    }

    // Parameters
    let stringParams = ""
    const keys = Object.keys(params)
    if(keys.length !== 0) {
      stringParams = `?${keys.filter(k => typeof params[k] !== "undefined").map(k => k + "=" + params[k]).join("&")}`
    }

    // URL
    const url = encodeURI(`${this.URL}/v${this.VERSION}/${path}${stringParams}`)

    // Fetch
    const fetchFunction = fetch || nodeFetch
    return new Promise((resolve, reject) => {
      return fetchFunction(url, init)
        .then(result => result.json())
        .then(result => {
          if(typeof result.error === "undefined") {
            resolve(result)
          } else {
            reject(result)
          }
        }, reject)
    })
  }

  static register(invitationCode: string, email: string, password: string): Promise<{ user: User }> {
    return this.fetch<{ user: User }>(FetchMethod.PUT, "users", {
      invitation_code: invitationCode,
      email: email,
      password: password,
    })
  }

  static login(email: string, password: string): Promise<{ user: User, token: Token }> {
    return this.fetch<{ user: User, token: Token }>(FetchMethod.POST, "auth", {
      email: email,
      password: password,
    })
  }

  static forgottenPassword(email: string, hash?: string): Promise<{ success: boolean }> {
    let params: FetchParams = { email }
    if(typeof hash !== "undefined") params.hash = hash
    return this.fetch<{ success: boolean }>(FetchMethod.POST, "forgotten", params)
  }

  static forgottenPasswordUpdate(email: string, hash: string, password: string): Promise<Token> {
    return this.fetch<Token>(FetchMethod.POST, "forgotten", {
      email: email,
      hash: hash,
      password: password,
    })
  }

  static validateEmail(email: string, hash: string): Promise<Token> {
    return this.fetch<Token>(FetchMethod.GET, "validate", {
      email: email,
      hash: hash,
    })
  }

  static getLines<Data>(recipe: RecipeId, collection: CollectionId, params: LineParams = {}): Promise<Line<Data>[]> {
    return this.fetch<Line<Data>[]>(FetchMethod.GET, `recipes/${recipe}/collections/${collection}/lines`, params as FetchParams)
  }

  static getOneLine<Data>(recipe: RecipeId, collection: CollectionId, params: LineParams = {}): Promise<Line<Data>> {
    return this.getLines<Data>(recipe, collection, params).then(lines => {
      if(lines.length !== 1) {
        return Promise.reject("More than one line found")
      }
      return Promise.resolve(lines[0])
    })
  }

  static getDocument<Output = Document>(recipe: RecipeId, document: DocumentId, params: DocumentParams = {}): Promise<Output> {
    if(typeof params.linesOnly !== "undefined") {
      return Promise.reject(`The "linesOnly" parameter can only be used by the getDocumentLines function`)
    }
    return this.fetch<Output>(FetchMethod.GET, `recipes/${recipe}/documents/${document}`, params as FetchParams)
  }

  static getDocumentLines(recipe: RecipeId, document: DocumentId, params: DocumentParams = {}): Promise<Line[]> {
    params.linesOnly = "1"
    return this.fetch<Line[]>(FetchMethod.GET, `recipes/${recipe}/documents/${document}`, params as FetchParams)
  }

}
