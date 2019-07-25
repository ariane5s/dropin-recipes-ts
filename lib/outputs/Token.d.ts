import { Output } from "../core/Output";
import { UserId } from "./User";
export declare type TokenId = string;
export interface TokenData {
    user: UserId;
    jwt: string;
    expiresAt?: Date;
}
export declare type Token = Output<TokenId, "Token"> & TokenData;
//# sourceMappingURL=Token.d.ts.map