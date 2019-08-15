import { NameText } from "./Names";
import { AllLanguagesSelector } from "../selectors/Languages";
export declare enum Language {
    ENGLISH = "en",
    FRENCH = "fr"
}
export declare const DEFAULT_LANGUAGE = Language.ENGLISH;
export interface LanguageOption {
    name: AllLanguagesSelector<NameText>;
    articles: boolean;
}
export declare const LanguageOptions: AllLanguagesSelector<LanguageOption>;
//# sourceMappingURL=Languages.d.ts.map