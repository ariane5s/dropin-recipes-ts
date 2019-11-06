import { API } from "../../Code/API"
import { User } from "./User"

export class UsersAPI {

  static register(invitationCode: string, email: string, password: string, realm?: string): Promise<{ user: User }> {
    return API.request<{ user: User }>(FetchMethod.PUT, "users", {}, {
      invitation_code: invitationCode,
      email: email,
      password: password,
      realm: realm
    })
  }

  static login(email: string, password: string, realm?: string): Promise<{ user: User, token: Token }> {
    return API.request<{ user: User, token: Token }>(FetchMethod.POST, "auth", {}, {
      email: email,
      password: password,
      realm: realm
    })
  }

  static forgottenPassword(email: string, hash?: string): Promise<{ success: boolean }> {
    let params: FetchParams = { email }
    if(typeof hash !== "undefined") params.hash = hash
    return API.request<{ success: boolean }>(FetchMethod.POST, "forgotten", {}, params)
  }

  static forgottenPasswordUpdate(email: string, hash: string, password: string): Promise<Token> {
    return API.request<Token>(FetchMethod.POST, "forgotten", {}, {
      email: email,
      hash: hash,
      password: password,
    })
  }

  static validateEmail(email: string, hash: string): Promise<Token> {
    return API.request<Token>(FetchMethod.GET, "validate", {
      email: email,
      hash: hash,
    })
  }

  static getCompaniesAndRecipes(user: UserId) {
    return API.request<Recipe[]>(FetchMethod.GET, `users/${user}/companies-and-recipes`)
  }

}
