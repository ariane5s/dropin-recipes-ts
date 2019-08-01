export interface NameByNumber {
    article?: "m" | "f";
    one?: string;
    many?: string;
}
export declare type NameByLanguage<Format = string | NameByNumber> = {
    [language: string]: Format;
};
export declare type Name = string | NameByLanguage;
//# sourceMappingURL=Name.d.ts.map