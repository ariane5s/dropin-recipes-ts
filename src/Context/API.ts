import nodeFetch, { Response as NodeFetchResponse } from "node-fetch"
import { Line, LineParams, LineId } from "../Storage/Collections/Output"
import { User, UserId } from "../Auth/Users/User"
import { Token } from "../Auth/Tokens/Token"
import { CollectionId } from "../Storage/Collections/Response"
import { DocumentId, Document, DocumentParams } from "../Outputs/Documents/Response"
import { RecipeId, RecipeRecipe } from "../Catalog/Recipes/RecipeOutput"
import { NotificationId } from "../Outputs/Notifications/Response"
import { Company, CompanyId } from "../Auth/Companies/Company"
import { Notification } from "../Outputs/Notifications/Response"
import { CollectionRecipe, SectionRecipe, SectionId } from "../recipes"
import { Recipe } from "../Catalog/Recipes/Response"

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

class oldAPI {
  private static URL = "https://api.dropin.link"
  private static VERSION = 1
  private static TOKEN: string

  static enableLocalMode(port: number = 8040, address: string = "localhost", https: boolean = false) {
    this.URL = `http${https ? "s" : ""}://${address}:${port}`
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

  static request<Output>(method: FetchMethod, path: string, params: FetchParams = {}, body?: any): Promise<Output> {
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

  static register(invitationCode: string, email: string, password: string, realm?: string): Promise<{ user: User }> {
    return this.request<{ user: User }>(FetchMethod.PUT, "users", {}, {
      invitation_code: invitationCode,
      email: email,
      password: password,
      realm: realm
    })
  }

  static login(email: string, password: string, realm?: string): Promise<{ user: User, token: Token }> {
    return this.request<{ user: User, token: Token }>(FetchMethod.POST, "auth", {}, {
      email: email,
      password: password,
      realm: realm
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

  static updateLine(line: LineId, data: any) {
    return this.request<Line>(FetchMethod.POST, `lines/${line}`, {}, {
      data
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

  static getCompaniesAndRecipes(user: UserId) {
    return this.request<Recipe[]>(FetchMethod.GET, `users/${user}/companies-and-recipes`)
  }

  static getCompany<Output = Company>(company: CompanyId) {
    return this.request<Output>(FetchMethod.GET, `companies/${company}`)
  }

  static createCompany(name: string, company: CompanyId, administrators: string[]) {
    return this.request<Company>(FetchMethod.PUT, "companies", {}, {
      name,
      slug: company,
      administrators
    })
  }

  static updateCompany(name: string, company: CompanyId, administrators: string[]) {
    return this.request<Company>(FetchMethod.POST, `companies/${company}`, {}, {
      name,
      slug: company,
      administrators
    })
  }

  static deleteCompany(company: CompanyId) {
    return this.request<Company>(FetchMethod.DELETE, `companies/${company}`)
  }

  static getCollection<Output = CollectionRecipe>(recipe: RecipeId, collection: CollectionId) {
    return this.request<Output>(FetchMethod.GET, `recipes/${recipe}/collections/${collection}`)
  }
  
  static createCollection(recipe: RecipeId, collection: CollectionId, name: any, fields: any) {
    return this.request<CollectionRecipe>(FetchMethod.PUT, `recipes/${recipe}/collections`, {}, {
      name,
      slug: collection,
      fields
    })
  }

  static updateCollection(recipe: RecipeId, collection: CollectionId, name: any, fields: any) {
    return this.request<CollectionRecipe>(FetchMethod.POST, `recipes/${recipe}/collections/${collection}`, {}, {
      name,
      slug: collection,
      fields
    })
  }

  static deleteCollection(recipe: RecipeId, collection: CollectionId) {
    return this.request<RecipeRecipe>(FetchMethod.DELETE, `recipes/${recipe}/collections/${collection}`)
  }

  static getRecipe<Output = RecipeRecipe>(recipe: RecipeId) {
    return this.request<Output>(FetchMethod.GET, `recipes/${recipe}`)
  }

  static createRecipe(name: any, recipeId: RecipeId, company: string, administrators: string[], authors?: string[]) {
    return this.request<RecipeRecipe>(FetchMethod.PUT, "recipes", {}, {
      name,
      slug: recipeId,
      company,
      authors,
      administrators
    })
  }

  static updateRecipe(name: any, recipeId: RecipeId, administrators: string[], authors?: string[]) {
    return this.request<RecipeRecipe>(FetchMethod.POST, `recipes/${recipeId}`, {}, {
      name,
      slug: recipeId,
      authors,
      administrators
    })
  }

  static deleteRecipe(recipe: RecipeId) {
    return this.request<RecipeRecipe>(FetchMethod.DELETE, `recipes/${recipe}`)
  }

  static getSection<Output = SectionRecipe>(recipe: RecipeId, section: SectionId) {
    return this.request<Output>(FetchMethod.GET, `recipes/${recipe}/sections/${section}`)
  }

  static createSection(recipe: RecipeId, section: SectionId, name: any, list: any) {
    return this.request<SectionRecipe>(FetchMethod.PUT, `recipes/${recipe}/sections`, {}, {
      name,
      slug: section,
      list
    })
  }

  static updateSection(recipe: RecipeId, section: SectionId, name: any, list: any) {
    return this.request<SectionRecipe>(FetchMethod.POST, `recipes/${recipe}/sections/${section}`, {}, {
      name,
      slug: section,
      list
    })
  }

  static deleteSection(recipe: RecipeId, section: SectionId) {
    return this.request<RecipeRecipe>(FetchMethod.DELETE, `recipes/${recipe}/sections/${section}`)
  }
}
