import { Name } from "../Names";
import { Language } from "../Languages";
export interface nameToStringOptions {
    language?: Language;
    count?: Number;
}
export declare type nameToStringVars = {
    [name: string]: string;
};
export declare function nameToString(name: Name, options?: nameToStringOptions): string;
//# sourceMappingURL=nameToString.d.ts.map