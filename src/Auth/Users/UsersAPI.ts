/*
module DROPin {
  export namespace Auth {
    export namespace Users {
      export class API {
        static register(invitationCode: string, email: string, password: string, realm?: string): Promise<{ user: User }> {
          return DROPin.Context.API.request(<{ user: User }>(FetchMethod.PUT, "users", {}, {
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
      }
    }
  }
}
*/