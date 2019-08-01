export declare enum LanguageSelector {
    ENGLISH = "en",
    FRENCH = "fr"
}
export declare const AnyLanguageSelector = "*";
export declare type MultipleLanguagesSelector<Type> = {
    [language in LanguageSelector]: Type;
};
export declare type AnyOrMultipleLanguagesSelector<Type> = {
    [AnyLanguageSelector]?: Type;
} & {
    [language in LanguageSelector]?: Type;
};
export declare function stringToLanguageSelector(language: string): LanguageSelector;
//# sourceMappingURL=Languages.d.ts.map