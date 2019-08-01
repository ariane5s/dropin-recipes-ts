import { NameByLanguage } from "./Name";
export declare enum LanguageSelector {
    ANY = "*",
    FRENCH = "fr",
    ENGLISH = "en"
}
export interface LanguageOption {
    name: NameByLanguage<string>;
    articles: boolean;
}
export declare const Languages: {
    [language: string]: LanguageOption;
};
declare type forEachLanguageCallback<Output> = (languageId: string, name: string, options: LanguageOption) => Output | undefined;
export declare function forEachLanguage<Output = any>(callback: forEachLanguageCallback<Output>, language?: string): Output[];
export {};
//# sourceMappingURL=Languages.d.ts.map