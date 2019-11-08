import nodeFetch, { Response as NodeFetchResponse } from "node-fetch"

interface FetchInit {
  method: FetchMethod
  headers: { [name: string]: string }
  body?: any
}

enum FetchMethod {
  PUT = "PUT",
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
}

type FetchParams = { [name: string]: string }

type FetchPath = string|string[]

export class API {
  private static URL = "https://dropin.recipes"
  private static VERSION = 1
  private static TOKEN: string

  private static convertPath(path: FetchPath, concat?: FetchPath): string {
    if(Array.isArray(path)) path = path.join("/")
    if(typeof concat !== "undefined") {
      path += "/" + this.convertPath(concat)
    }
    return path
  }

  private static fetch(url: string, init: FetchInit): Promise<NodeFetchResponse | Response> {
    if(typeof nodeFetch !== "undefined") {
      return nodeFetch(url, init)
    }
    return fetch(url, init)
  }

  private static request<Output>(method: FetchMethod, path: FetchPath, params: FetchParams = {}, body?: any): Promise<Output> {
    let init: FetchInit = { method, headers: { "content-type": "application/json" } }

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
    const url = encodeURI(`${this.URL}/v${this.VERSION}/${this.convertPath(path)}${stringParams}`)

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

  static enableLocalMode(port: number = 8040, address: string = "localhost", https: boolean = false) {
    this.URL = `http${https ? "s" : ""}://${address}:${port}`
  }

  static setToken(token: string) {
    this.TOKEN = token
  }

  static create<Entity>(path: FetchPath, entity: Entity) {
    return this.request<"">(FetchMethod.PUT, path, {}, entity)
  }

  static get<Entity>(path: FetchPath, selector?: string) {
    let params: FetchParams = {}
    if(typeof selector !== "undefined") params.s = selector
    return this.request<Entity[]>(FetchMethod.GET, path, params)
  }

  static getById<Entity, Id extends string>(path: FetchPath, id: Id) {
    return this.request<Entity>(FetchMethod.GET, this.convertPath(path, id))
  }

  static count(path: FetchPath, selector?: string) {
    let params: FetchParams = {}
    if(typeof selector !== "undefined") params.s = selector
    return this.request<number>(FetchMethod.GET, this.convertPath(path, "count"), params)
  }

  static update<Entity>(path: FetchPath, entity: Entity) {
    return this.request<"">(FetchMethod.POST, path, {}, entity)
  }

  static archive<Id extends string>(path: FetchPath, id: Id) {
    return this.request<"">(FetchMethod.POST, this.convertPath(path, [ id, "archive" ]))
  }

  static unarchive<Id extends string>(path: FetchPath, id: Id) {
    return this.request<"">(FetchMethod.POST, this.convertPath(path, [ id, "unarchive" ]))
  }

  static delete(path: FetchPath, selector: string) {
    return this.request<"">(FetchMethod.DELETE, path, { s: selector })
  }

  static deleteById<Id extends string>(path: FetchPath, id: Id) {
    return this.request<"">(FetchMethod.DELETE, this.convertPath(path, id))
  }

}
