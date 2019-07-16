import { Entry } from "../core/Entry";
export declare type UserId = string;
export interface UserName {
    firstname: string;
    lastname: string;
}
export interface UserEmail {
    address: string;
    verified: boolean;
}
export interface UserData {
    name: string | UserName;
    emails: UserEmail[];
}
export declare type User = Entry<UserId, UserData>;
//# sourceMappingURL=User.d.ts.map