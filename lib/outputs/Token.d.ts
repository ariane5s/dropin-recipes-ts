import { Entry } from "../core/Entry";
import { UserId } from "./User";
export declare type TokenId = string;
export interface TokenData {
    user: UserId;
    jwt: string;
    expiresAt?: Date;
}
export declare type Token = Entry<TokenId, TokenData>;
//# sourceMappingURL=Token.d.ts.map