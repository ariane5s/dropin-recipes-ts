import { MultipleLanguagesSelector, AnyOrMultipleLanguagesSelector } from "../selectors";
export declare type NameText = string;
export declare enum NameArticle {
    MASCULINE = "m",
    FEMININE = "f"
}
export interface NameByNumber {
    one?: NameText;
    many?: NameText;
    article?: NameArticle;
}
export declare type NameByLanguage = NameText | NameByNumber;
export declare type MultipleNamesByLanguage = MultipleLanguagesSelector<NameByLanguage>;
export declare type Name = NameText | AnyOrMultipleLanguagesSelector<NameByLanguage>;
export declare type MultipleNames<Type = Name> = {
    [name: string]: Type;
};
//# sourceMappingURL=Names.d.ts.map