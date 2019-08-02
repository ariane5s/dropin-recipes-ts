import { Name, NameText } from "./Names";
import { LanguageSelector } from "../selectors/Languages";
export interface nameToStringOptions {
    language?: LanguageSelector;
    count?: number;
    lowercase?: boolean;
}
export declare type nameToStringVars = {
    [name: string]: string;
};
export declare function nameToString(name: Name, options?: nameToStringOptions, vars?: nameToStringVars): NameText;
//# sourceMappingURL=nameToString.d.ts.map