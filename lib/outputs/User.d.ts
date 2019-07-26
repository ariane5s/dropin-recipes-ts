import { Output } from "../core/Output";
export declare type UserId = string;
export interface UserName {
    firstname: string;
    lastname: string;
}
export interface UserEmail {
    address: string;
    verified: boolean;
}
export declare type User = Output<UserId> & {
    name: string | UserName;
    emails: UserEmail[];
};
//# sourceMappingURL=User.d.ts.map