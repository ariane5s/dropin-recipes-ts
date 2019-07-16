import { Entry } from "../core/Entry"
import { UserId } from "./User"

export type TokenId = string

export interface TokenData {
  user: UserId
  jwt: string
  expiresAt?: Date
}

export type Token = Entry<TokenId, TokenData>
