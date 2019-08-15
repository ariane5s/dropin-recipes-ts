import { Language, LanguageOption } from "../Languages";
declare type Callback<Output> = (language: Language, name: string, options: LanguageOption) => Output | void;
export declare function forEachLanguage<Output = any>(callback: Callback<Output>, useDefaultLanguage?: boolean): Output[];
export {};
//# sourceMappingURL=forEachLanguage.d.ts.map