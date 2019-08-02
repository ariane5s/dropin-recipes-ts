import { NameText } from "./Names";
import { MultipleLanguagesSelector } from "../selectors/Languages";
export declare enum Language {
    ENGLISH = "en",
    FRENCH = "fr"
}
export interface LanguageOption {
    name: MultipleLanguagesSelector<NameText>;
    articles: boolean;
}
export declare const LanguageOptions: MultipleLanguagesSelector<LanguageOption>;
//# sourceMappingURL=Languages.d.ts.map