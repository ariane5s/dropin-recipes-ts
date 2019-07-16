import { Entry } from "../core/Entry"

export type TokenId = string

export interface TokenData {
  expiresAt: Date
}

export type Token = Entry<TokenId, TokenData>
