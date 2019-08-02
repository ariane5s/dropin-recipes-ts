import { Language } from "../strings";
export declare type LanguageSelector = Language | "*";
export declare const AnyLanguageSelector = "*";
export declare type MultipleLanguagesSelector<Type> = {
    [language in Language]: Type;
};
export declare type AnyOrMultipleLanguagesSelector<Type> = {
    [language in LanguageSelector]?: Type;
};
//# sourceMappingURL=Languages.d.ts.map