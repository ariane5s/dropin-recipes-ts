import { Name, NameText } from "./Names";
import { LanguageSelector } from "../selectors/Languages";
interface Options {
    language?: LanguageSelector;
    count?: number;
    vars?: any;
}
export declare function nameToString(name: Name, options?: Options): NameText;
export {};
//# sourceMappingURL=nameToString.d.ts.map