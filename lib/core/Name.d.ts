export interface NameByNumber {
    article?: "m" | "f";
    one?: string;
    many?: string;
}
export declare type NameByLanguage = {
    [language: string]: string | NameByNumber;
};
export declare type Name = string | NameByLanguage;
//# sourceMappingURL=Name.d.ts.map