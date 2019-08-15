import { Language } from "./Languages";
import { Name } from "./Names";
export declare let CURRENT_LANGUAGE: Language;
export declare function setCurrentLanguage(locale: string): void;
export declare type i18nVars = {
    [name: string]: string;
};
export interface i18nOptions {
    count?: number;
    vars?: i18nVars;
    lowercase?: boolean;
}
export declare const i18nData: <T extends {
    [name: string]: Name;
}>(data: T) => T;
export declare function i18n(data: string | Name, options?: i18nOptions): string;
//# sourceMappingURL=i18n.d.ts.map