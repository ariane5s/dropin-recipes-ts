import { NameText } from "./Names";
import { MultipleLanguagesSelector } from "../selectors/Languages";
export interface LanguageOption {
    name: MultipleLanguagesSelector<NameText>;
    articles: boolean;
}
export declare const Languages: MultipleLanguagesSelector<LanguageOption>;
//# sourceMappingURL=Languages.d.ts.map