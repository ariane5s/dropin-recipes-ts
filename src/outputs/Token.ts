import { Output } from "../core/Output"
import { UserId } from "./User"

export type TokenId = string

export interface Token extends Output<TokenId> {
  user: UserId
  jwt: string
  expiresAt?: Date
}
