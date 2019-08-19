import nodeFetch, { Response as NodeFetchResponse } from "node-fetch"
import { Line, LineParams } from "../../outputs/Line"
import { User, UserId } from "../../outputs/User"
import { Token } from "../../outputs/Token"
import { CollectionId } from "../../outputs/Collections"
import { DocumentId, Document, DocumentParams } from "../../outputs/Document"
import { RecipeId, RecipeRecipe } from "../../recipes/Recipe"
import { NotificationId } from "../../outputs/Notification"
import { Company, CompanyId } from "../../outputs/Company"
import { Recipe } from "../types";

enum FetchMethod {
  PUT = "PUT",
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
}

interface FetchInit {
  method: FetchMethod
  headers: { [name: string]: string }
  body?: any
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

  private static fetch(url: string, init: FetchInit): Promise<NodeFetchResponse | Response> {
    if(typeof nodeFetch !== "undefined") {
      return nodeFetch(url, init)
    }
    return fetch(url, init)
  }

  private static request<Output>(method: FetchMethod, path: string, params: FetchParams = {}, body?: any): Promise<Output> {
    let init: FetchInit = {  method, headers: { "content-type": "application/json" } }

    // Token
    if(typeof this.TOKEN !== "undefined") {
      init.headers["Authorization"] = "Bearer " + this.TOKEN
    }

    // Body
    if(typeof body !== "undefined") {
      init.body = JSON.stringify(body)
    }

    // String parameters
    let stringParams = ""
    const keys = Object.keys(params)
    if(keys.length !== 0) {
      stringParams = `?${keys.filter(k => typeof params[k] !== "undefined").map(k => k + "=" + params[k]).join("&")}`
    }

    // URL
    const url = encodeURI(`${this.URL}/v${this.VERSION}/${path}${stringParams}`)

    // Fetch
    return new Promise((resolve, reject) => {
      return this.fetch(url, init)
        .then(result => result.json())
        .then(result => {
          if(typeof result.error === "undefined") {
            resolve(result)
          } else {
            reject(result.error)
          }
        }, reject)
    })
  }

  static register(invitationCode: string, email: string, password: string): Promise<{ user: User }> {
    return this.request<{ user: User }>(FetchMethod.PUT, "users", {}, {
      invitation_code: invitationCode,
      email: email,
      password: password,
    })
  }

  static login(email: string, password: string): Promise<{ user: User, token: Token }> {
    return this.request<{ user: User, token: Token }>(FetchMethod.POST, "auth", {}, {
      email: email,
      password: password,
    })
  }

  static forgottenPassword(email: string, hash?: string): Promise<{ success: boolean }> {
    let params: FetchParams = { email }
    if(typeof hash !== "undefined") params.hash = hash
    return this.request<{ success: boolean }>(FetchMethod.POST, "forgotten", {}, params)
  }

  static forgottenPasswordUpdate(email: string, hash: string, password: string): Promise<Token> {
    return this.request<Token>(FetchMethod.POST, "forgotten", {}, {
      email: email,
      hash: hash,
      password: password,
    })
  }

  static validateEmail(email: string, hash: string): Promise<Token> {
    return this.request<Token>(FetchMethod.GET, "validate", {
      email: email,
      hash: hash,
    })
  }

  static getLines<Data>(recipe: RecipeId, collection: CollectionId, params: LineParams = {}): Promise<Line<Data>[]> {
    return this.request<Line<Data>[]>(FetchMethod.GET, `recipes/${recipe}/collections/${collection}/lines`, params as FetchParams)
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
    return this.request<Output>(FetchMethod.GET, `recipes/${recipe}/documents/${document}`, params as FetchParams)
  }

  static getDocumentLines(recipe: RecipeId, document: DocumentId, params: DocumentParams = {}): Promise<Line[]> {
    params.linesOnly = "1"
    return this.request<Line[]>(FetchMethod.GET, `recipes/${recipe}/documents/${document}`, params as FetchParams)
  }

  static getNotifications(user: UserId) {
    return this.request<Notification[]>(FetchMethod.GET, `users/${user}/notifs`)
  }

  static setNotificationAsRead(user: UserId, notification: NotificationId, isRead: boolean) {
    return this.request<Notification[]>(FetchMethod.POST, `users/${user}/notifs/${notification}`, {}, {
      is_read: isRead
    })
  }

  static getCompanies() {
    return this.request<Company[]>(FetchMethod.GET, `companies`)
  }

  static getCompany<Output = Company>(company: CompanyId) {
    return this.request<Output>(FetchMethod.GET, `companies/${company}`)
  }

  static createCompany(name: string, slug: string, administrators: string[]) {
    return this.request<Company>(FetchMethod.PUT, "companies", {}, {
      name,
      slug,
      administrators
    })
  }

  static updateCompany(name: string, slug: string, administrators: string[]) {
    return this.request<Company>(FetchMethod.POST, `companies/${slug}`, {}, {
      name,
      slug,
      administrators
    })
  }

  static deleteCompany(slug: string) {
    return this.request<Company>(FetchMethod.DELETE, `companies/${slug}`)
  }
  
  static createCollection(name: string, slug: string, fields: string[]) {
    return this.request<Collection>(FetchMethod.PUT, "collections", {}, {
      name,
      slug,
      administrators
    })
  }

  static getRecipe<Output = RecipeRecipe>(recipe: RecipeId) {
    return this.request<Output>(FetchMethod.GET, `recipes/${recipe}`)
  }

  static createRecipe(name: string, slug: string, company: string, authors: string[], administrators: string[]) {
    return this.request<RecipeRecipe>(FetchMethod.PUT, "recipes", {}, {
      name,
      slug,
      company,
      authors,
      administrators
    })
  }

  static updateRecipe(name: string, slug: string, authors: string[], administrators: string[]) {
    return this.request<RecipeRecipe>(FetchMethod.POST, `recipes/${slug}`, {}, {
      name,
      slug,
      authors,
      administrators
    })
  }

  static deleteRecipe(slug: string) {
    return this.request<RecipeRecipe>(FetchMethod.DELETE, `recipes/${slug}`)
  }
}
