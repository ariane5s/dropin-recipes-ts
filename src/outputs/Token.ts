import { Entry } from "../core/Entry"
import { UserId } from "./User"

export type TokenId = string

export interface Token extends Entry<TokenId> {
  user: UserId
  jwt: string
  expiresAt?: Date
}
