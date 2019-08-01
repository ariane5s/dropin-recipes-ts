export declare type NameText = string;
export interface NameByNumber {
    article?: "m" | "f";
    one?: NameText;
    many?: NameText;
}
export declare type NameByLanguage = NameText | NameByNumber;
export declare type MultipleNamesByLanguage = {
    [language: string]: NameByLanguage;
};
export declare type Name = NameText | NameByLanguage;
//# sourceMappingURL=Name.d.ts.map