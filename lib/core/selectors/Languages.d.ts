import { Language } from "../strings";
export declare const AnyLanguageSelector = "*";
export declare type LanguageSelector = "*" | Language;
export declare type MultipleLanguagesSelector<Content> = {
    [language: string]: Content;
};
export declare type AllLanguagesSelector<Content> = {
    [language in Language]: Content;
};
//# sourceMappingURL=Languages.d.ts.map