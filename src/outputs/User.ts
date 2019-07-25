import { Output } from "../core/Output"

export type UserId = string

export interface UserName {
  firstname: string
  lastname: string
}

export interface UserEmail {
  address: string
  verified: boolean
}

export interface User extends Output<UserId> {
  name: string | UserName
  emails: UserEmail[]
}
