import { Output } from "../core/types/Outputs";
import { UserId } from "./User";
export declare type TokenId = string;
export interface TokenData {
    user: UserId;
    jwt: string;
    expiresAt?: Date;
}
export declare type Token = Output<TokenId> & TokenData;
//# sourceMappingURL=Token.d.ts.map