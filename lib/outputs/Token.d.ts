import { Entry } from "../core/Entry";
import { UserId } from "./User";
export declare type TokenId = string;
export interface Token extends Entry<TokenId> {
    user: UserId;
    jwt: string;
    expiresAt?: Date;
}
//# sourceMappingURL=Token.d.ts.map