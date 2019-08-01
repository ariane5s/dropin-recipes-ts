import { Recipe } from "../core/Recipe";
import { DocumentId } from "../outputs/Document";
import { CollectionSelector } from "../core/selectors/Collections";
import { Name } from "../core/i18n/Name";
export interface DocumentRecipe<Type = string, Options = any> extends Recipe<DocumentId, Type> {
    options: Options;
    lines: CollectionSelector[];
    name?: Name;
}
//# sourceMappingURL=Document.d.ts.map