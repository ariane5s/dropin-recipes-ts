import nodeFetch, { Response as NodeFetchResponse } from "node-fetch"

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

export class API {
  private static URL = "https://dropin.recipes"
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
}


/*class oldAPI {

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
}*/
