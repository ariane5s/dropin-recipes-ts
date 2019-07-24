import { Entry } from "../core/Entry"

export type UserId = string

export interface UserName {
  firstname: string
  lastname: string
}

export interface UserEmail {
  address: string
  verified: boolean
}

export interface User extends Entry<UserId> {
  name: string | UserName
  emails: UserEmail[]
}
