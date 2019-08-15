import { MultipleLanguagesSelector } from "../selectors";
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
export declare type Name = NameText | MultipleNamesByLanguage;
//# sourceMappingURL=Names.d.ts.map