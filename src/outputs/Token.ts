import { Output } from "../core/types/Outputs"
import { UserId } from "./User"

export type TokenId = string

export interface TokenData {
  user: UserId
  jwt: string
  expiresAt?: Date
}

export type Token = Output<TokenId> & TokenData
